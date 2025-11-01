import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

// GET /api/mock-tests - Get all mock tests
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
    const type = searchParams.get('type') // subject, full_syllabus, or null for all
    const subject = searchParams.get('subject')

    const where: any = { isActive: true }

    if (type) {
      where.type = type
    }

    if (subject) {
      where.subject = subject
    }

    const mockTests = await prisma.mockTest.findMany({
      where,
      orderBy: { createdAt: 'asc' },
      select: {
        id: true,
        title: true,
        description: true,
        type: true,
        subject: true,
        duration: true,
        totalMarks: true,
        totalQuestions: true,
        isPro: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            questions: true,
            testAttempts: true
          }
        }
      }
    })

    return NextResponse.json({ mockTests })
  } catch (error) {
    console.error('Get mock tests error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch mock tests' },
      { status: 500 }
    )
  }
}

// POST /api/mock-tests - Create new mock test (Admin only)
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { title, description, type, subject, duration, totalMarks, totalQuestions, isPro, questions } = await request.json()

    // Validation
    if (!title || !type) {
      return NextResponse.json(
        { error: 'Title and type are required' },
        { status: 400 }
      )
    }

    if (type === 'subject' && !subject) {
      return NextResponse.json(
        { error: 'Subject is required for subject-wise tests' },
        { status: 400 }
      )
    }

    // Create mock test with questions
    const mockTest = await prisma.mockTest.create({
      data: {
        title,
        description,
        type,
        subject: type === 'subject' ? subject : null,
        duration: duration || 180,
        totalMarks: totalMarks || 200,
        totalQuestions: totalQuestions || 200,
        isPro: isPro || false,
        questions: {
          create: questions || []
        }
      },
      include: {
        questions: {
          orderBy: { id: 'asc' }
        },
        _count: {
          select: {
            questions: true
          }
        }
      }
    })

    return NextResponse.json({
      message: 'Mock test created successfully',
      mockTest
    }, { status: 201 })

  } catch (error) {
    console.error('Create mock test error:', error)
    return NextResponse.json(
      { error: 'Failed to create mock test' },
      { status: 500 }
    )
  }
}