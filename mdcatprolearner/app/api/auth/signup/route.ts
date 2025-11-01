import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { name, email, mobileNumber, pinCode, password, secretCode } = await request.json()

    // Validation checks
    if (!name || !email || !mobileNumber || !pinCode || !password) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
        { status: 400 }
      )
    }

    if (pinCode.length !== 4 || !/^\d{4}$/.test(pinCode)) {
      return NextResponse.json(
        { error: 'PIN code must be 4 digits' },
        { status: 400 }
      )
    }

    if (!/^\+?[\d\s-()]+$/.test(mobileNumber)) {
      return NextResponse.json(
        { error: 'Invalid mobile number format' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists with this email' },
        { status: 409 }
      )
    }

    // Check if mobile number already exists
    const existingMobileUser = await prisma.user.findFirst({
      where: { mobileNumber }
    })

    if (existingMobileUser) {
      return NextResponse.json(
        { error: 'User already exists with this mobile number' },
        { status: 409 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user in database
    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        mobileNumber: mobileNumber.trim(),
        pinCode: pinCode.trim(),
        password: hashedPassword,
        secretCode: secretCode || '',
        role: 'user',
        isActive: true,
        isBlocked: false,
        isPro: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      select: {
        id: true,
        name: true,
        email: true,
        mobileNumber: true,
        role: true,
        isPro: true,
        createdAt: true
      }
    })

    // Create initial test results for the user
    const subjects = ['Physics', 'Chemistry', 'Biology', 'English', 'Logical Reasoning']
    
    for (const subject of subjects) {
      await prisma.testResult.create({
        data: {
          userId: user.id,
          subject,
          score: 0,
          total: 100,
          createdAt: new Date()
        }
      })
    }

    return NextResponse.json({
      message: 'User created successfully',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        isPro: user.isPro
      }
    }, { status: 201 })

  } catch (error) {
    console.error('Signup error:', error)
    
    // Handle Prisma specific errors
    if (error instanceof Error) {
      if (error.message.includes('Unique constraint failed')) {
        return NextResponse.json(
          { error: 'User already exists with this email or mobile number' },
          { status: 409 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}