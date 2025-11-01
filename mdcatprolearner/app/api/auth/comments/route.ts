import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const comments = await prisma.comment.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
      take: 50, // Limit to 50 most recent comments
      select: {
        id: true,
        userId: true,
        userName: true,
        userEmail: true,
        content: true,
        createdAt: true,
        isActive: true
      }
    })

    return NextResponse.json({ comments })
  } catch (error) {
    console.error('Get comments error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json(
        { error: 'You must be logged in to post comments' },
        { status: 401 }
      )
    }

    const { content, userEmail, userName } = await request.json()

    // Validation
    if (!content?.trim() || !userEmail?.trim()) {
      return NextResponse.json(
        { error: 'Content and email are required' },
        { status: 400 }
      )
    }

    if (content.length > 1000) {
      return NextResponse.json(
        { error: 'Comment must be less than 1000 characters' },
        { status: 400 }
      )
    }

    // Create comment
    const comment = await prisma.comment.create({
      data: {
        userId: parseInt(session.user.id),
        userName: userName || session.user.name || 'Anonymous',
        userEmail: userEmail.trim(),
        content: content.trim(),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      select: {
        id: true,
        userId: true,
        userName: true,
        userEmail: true,
        content: true,
        createdAt: true,
        isActive: true
      }
    })

    return NextResponse.json({
      message: 'Comment posted successfully',
      comment
    })

  } catch (error) {
    console.error('Post comment error:', error)
    
    // Handle unique constraint violation
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return NextResponse.json(
        { error: 'You have already posted a similar comment recently' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to post comment' },
      { status: 500 }
    )
  }
}