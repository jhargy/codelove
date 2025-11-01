import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { email, password, role } = await request.json()

    // Validation checks
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
      include: {
        proUser: true
      }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Check if user is active
    if (!user.isActive) {
      return NextResponse.json(
        { error: 'Your account has been deactivated. Please contact support.' },
        { status: 403 }
      )
    }

    // Check if user is blocked
    if (user.isBlocked) {
      return NextResponse.json(
        { error: 'Your account has been blocked. Please contact support.' },
        { status: 403 }
      )
    }

    // Check role if specified
    if (role && user.role !== role) {
      return NextResponse.json(
        { error: 'You are not authorized to access this role' },
        { status: 403 }
      )
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      // Log failed login attempt (you could implement rate limiting here)
      await prisma.user.update({
        where: { id: user.id },
        data: { updatedAt: new Date() }
      })

      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Update last login time
    await prisma.user.update({
      where: { id: user.id },
      data: { updatedAt: new Date() }
    })

    // Prepare user data for response (exclude sensitive fields)
    const userData = {
      id: user.id,
      name: user.name,
      email: user.email,
      mobileNumber: user.mobileNumber,
      role: user.role,
      isPro: user.isPro,
      isActive: user.isActive,
      isBlocked: user.isBlocked,
      proUser: user.proUser ? {
        id: user.proUser.id,
        paymentType: user.proUser.paymentType,
        paidAt: user.proUser.paidAt,
        isActive: user.proUser.isActive
      } : null,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }

    return NextResponse.json({
      message: 'Login successful',
      user: userData
    })

  } catch (error) {
    console.error('Login error:', error)

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}