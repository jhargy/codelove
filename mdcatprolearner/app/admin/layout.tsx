// app/admin/layout.tsx
import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Admin Dashboard - MDCAT Pro',
  description: 'Administrator dashboard for managing users, payments, and platform content.',
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/login')
  }

  // Check if user is admin by querying the database
  const { prisma } = await import('@/lib/db')
  const user = await prisma.user.findUnique({
    where: { email: session.user?.email || '' },
    select: { role: true }
  })

  if (user?.role !== 'admin') {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  )
}