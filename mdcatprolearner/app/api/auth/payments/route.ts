import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { userId, paymentType, transactionId, amount } = await request.json()

    // Validate input
    if (!paymentType || !transactionId || !amount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (amount !== 2000) {
      return NextResponse.json(
        { error: 'Invalid amount. Must be 2000 PKR' },
        { status: 400 }
      )
    }

    // Check if user already has a pending or completed payment
    const existingPayment = await prisma.payment.findFirst({
      where: {
        userId: parseInt(userId),
        status: { in: ['pending', 'completed'] }
      }
    })

    if (existingPayment) {
      return NextResponse.json(
        { error: 'You already have an active payment request' },
        { status: 400 }
      )
    }

    // Create payment record
    const payment = await prisma.payment.create({
      data: {
        userId: parseInt(userId),
        amount: 2000,
        paymentType,
        transactionId,
        accountNumber: getAccountNumber(paymentType),
        status: 'pending',
        createdAt: new Date()
      }
    })

    return NextResponse.json({
      message: 'Payment submitted successfully',
      payment: {
        id: payment.id,
        paymentType: payment.paymentType,
        transactionId: payment.transactionId,
        status: payment.status,
        createdAt: payment.createdAt
      }
    })

  } catch (error) {
    console.error('Payment submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (session.user.role !== 'admin' && session.user.id !== userId) {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      )
    }

    const payments = await prisma.payment.findMany({
      where: { userId: parseInt(userId!) },
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

function getAccountNumber(paymentType: string): string {
  switch (paymentType) {
    case 'bank':
      return '44455555555'
    case 'easypaisa':
      return '03070169442'
    case 'jazzcash':
      return '03070169442'
    default:
      return 'N/A'
  }
}