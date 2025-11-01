import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const payments = await prisma.payment.findMany({
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

    return NextResponse.json({ payments })

  } catch (error) {
    console.error('Get payments error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { paymentId, status, userId } = await request.json()

    // Update payment status
    const payment = await prisma.payment.update({
      where: { id: paymentId },
      data: { status }
    })

    // If payment is completed, activate user's Pro status
    if (status === 'completed') {
      // Check if ProUser already exists
      const existingProUser = await prisma.proUser.findUnique({
        where: { userId }
      })

      if (existingProUser) {
        // Update existing ProUser
        await prisma.proUser.update({
          where: { userId },
          data: {
            isActive: true,
            paymentType: payment.paymentType,
            paidAt: new Date()
          }
        })
      } else {
        // Create new ProUser
        const user = await prisma.user.findUnique({
          where: { id: userId },
          select: { name: true }
        })

        await prisma.proUser.create({
          data: {
            userId,
            name: user?.name || 'User',
            paymentType: payment.paymentType,
            paidAt: new Date(),
            isActive: true
          }
        })
      }

      // Update user's isPro status
      await prisma.user.update({
        where: { id: userId },
        data: { isPro: true }
      })
    }

    return NextResponse.json({
      message: 'Payment status updated successfully',
      payment
    })

  } catch (error) {
    console.error('Update payment error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}