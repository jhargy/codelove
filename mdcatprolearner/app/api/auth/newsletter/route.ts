import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json()

    // Basic email validation
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Check if already subscribed
    const existingSubscriber = await prisma.newsletterSubscriber.findUnique({
      where: { email: email.trim().toLowerCase() }
    })

    if (existingSubscriber) {
      if (existingSubscriber.isActive) {
        return NextResponse.json(
          { error: 'This email is already subscribed to our newsletter' },
          { status: 409 }
        )
      } else {
        // Reactivate existing subscriber
        await prisma.newsletterSubscriber.update({
          where: { email: email.trim().toLowerCase() },
          data: { 
            isActive: true,
            name: name?.trim() || existingSubscriber.name
          }
        })
        
        return NextResponse.json({
          message: 'Successfully resubscribed to our newsletter!'
        })
      }
    }

    // Create new subscriber
    await prisma.newsletterSubscriber.create({
      data: {
        email: email.trim().toLowerCase(),
        name: name?.trim(),
        isActive: true,
        createdAt: new Date()
      }
    })

    return NextResponse.json({
      message: 'Successfully subscribed to our newsletter!'
    })

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
}