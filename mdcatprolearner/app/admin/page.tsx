// app/admin/page.tsx - UPDATED (Server Component)
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import AdminDashboardClient from '../components/AdminDashboardClient'

async function getAdminData() {
  try {
    const [
      totalUsers,
      activeUsers,
      blockedUsers,
      proUsers,
      newUsersToday,
      totalPayments,
      pendingPayments,
      recentUsers,
      recentPayments
    ] = await Promise.all([
      prisma.user.count(),
      prisma.user.count({
        where: {
          isActive: true,
          isBlocked: false
        }
      }),
      prisma.user.count({
        where: {
          isBlocked: true
        }
      }),
      prisma.user.count({ where: { isPro: true } }),
      prisma.user.count({
        where: {
          createdAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0))
          }
        }
      }),
      prisma.payment.count(),
      prisma.payment.count({ where: { status: 'pending' } }),
      prisma.user.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          name: true,
          email: true,
          mobileNumber: true,
          isPro: true,
          isBlocked: true,
          isActive: true,
          role: true,
          createdAt: true
        }
      }),
      prisma.payment.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
        include: {
          user: {
            select: {
              name: true,
              email: true
            }
          }
        }
      })
    ])

    const revenueData = await prisma.payment.aggregate({
      where: {
        status: 'completed'
      },
      _sum: {
        amount: true
      }
    })

    return {
      stats: {
        totalUsers,
        activeUsers,
        blockedUsers,
        proUsers,
        newUsersToday,
        totalRevenue: revenueData._sum.amount || 0
      },
      payments: recentPayments,
      userStats: {
        totalPayments,
        pendingPayments
      },
      recentUsers
    }
  } catch (error) {
    console.error('Error fetching admin data:', error)
    return {
      stats: {
        totalUsers: 0,
        activeUsers: 0,
        blockedUsers: 0,
        proUsers: 0,
        newUsersToday: 0,
        totalRevenue: 0
      },
      payments: [],
      userStats: {
        totalPayments: 0,
        pendingPayments: 0
      },
      recentUsers: []
    }
  }
}

export default async function AdminPage() {
  let session;
  let user;
  
  try {
    session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Access Denied</h1>
            <p className="text-gray-600">You must be logged in to access this page.</p>
          </div>
        </div>
      )
    }

    user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { role: true }
    })

    if (user?.role !== 'admin') {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Access Denied</h1>
            <p className="text-gray-600">You do not have permission to access the admin panel.</p>
          </div>
        </div>
      )
    }
  } catch (error) {
    console.error('Session or user validation error:', error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Authentication Error</h1>
          <p className="text-gray-600">There was an error verifying your access. Please try again.</p>
        </div>
      </div>
    )
  }

  const data = await getAdminData()

  // Serialize the data to plain objects to avoid React server component issues
  const serializedData = {
    stats: data.stats,
    payments: data.payments.map(payment => ({
      ...payment,
      createdAt: payment.createdAt.toISOString(),
      updatedAt: payment.updatedAt.toISOString(),
      user: payment.user ? {
        name: payment.user.name,
        email: payment.user.email
      } : null
    })),
    userStats: data.userStats,
    recentUsers: data.recentUsers.map(user => ({
      ...user,
      createdAt: user.createdAt.toISOString()
    }))
  }

  const serializedSession = {
    user: {
      name: session.user?.name || null,
      email: session.user?.email || null
    }
  }

  return <AdminDashboardClient data={serializedData} session={serializedSession} />
}