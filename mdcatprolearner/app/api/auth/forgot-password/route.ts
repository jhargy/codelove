import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { email, pinCode, newPassword, action } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'No account found with this email address' },
        { status: 404 }
      )
    }

    if (!user.isActive) {
      return NextResponse.json(
        { error: 'Account is deactivated. Please contact support.' },
        { status: 403 }
      )
    }

    if (user.isBlocked) {
      return NextResponse.json(
        { error: 'Account is blocked. Please contact support.' },
        { status: 403 }
      )
    }

    switch (action) {
      case 'request-pin':
        // In a real application, you would send the PIN via email
        // For demo purposes, we'll just return success
        // The PIN is stored in the user's record (secretCode field)
        
        // Generate a random 4-digit PIN
        const generatedPin = Math.floor(1000 + Math.random() * 9000).toString()
        
        // Update user's secret code with the generated PIN
        await prisma.user.update({
          where: { email },
          data: { 
            secretCode: generatedPin,
            updatedAt: new Date()
          }
        })

        // TODO: In production, send email with PIN
        console.log(`PIN for ${email}: ${generatedPin}`)

        return NextResponse.json({
          message: 'PIN code sent to your email',
          // Remove this in production - only for demo
          demoPin: generatedPin
        })

      case 'verify-pin':
        if (!pinCode) {
          return NextResponse.json(
            { error: 'PIN code is required' },
            { status: 400 }
          )
        }

        // Verify PIN matches the stored secret code
        if (user.secretCode !== pinCode) {
          return NextResponse.json(
            { error: 'Invalid PIN code' },
            { status: 400 }
          )
        }

        return NextResponse.json({
          message: 'PIN verified successfully'
        })

      case 'reset-password':
        if (!pinCode || !newPassword) {
          return NextResponse.json(
            { error: 'PIN code and new password are required' },
            { status: 400 }
          )
        }

        // Verify PIN again for security
        if (user.secretCode !== pinCode) {
          return NextResponse.json(
            { error: 'Invalid PIN code' },
            { status: 400 }
          )
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 12)

        // Update password and clear secret code
        await prisma.user.update({
          where: { email },
          data: {
            password: hashedPassword,
            secretCode: '', // Clear the secret code after use
            updatedAt: new Date()
          }
        })

        return NextResponse.json({
          message: 'Password reset successfully'
        })

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        )
    }

  } catch (error) {
    console.error('Forgot password error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}