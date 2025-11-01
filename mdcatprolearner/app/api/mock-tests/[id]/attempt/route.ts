import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

interface RouteParams {
  params: {
    id: string
  }
}

// POST /api/mock-tests/[id]/attempt - Start a new test attempt
export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const testId = parseInt(params.id)
    const userId = parseInt(session.user.id)

    // Check if user has active pro subscription
    const proUser = await prisma.proUser.findUnique({
      where: { 
        userId,
        isActive: true 
      }
    })

    const mockTest = await prisma.mockTest.findUnique({
      where: { 
        id: testId,
        isActive: true
      }
    })

    if (!mockTest) {
      return NextResponse.json(
        { error: 'Mock test not found' },
        { status: 404 }
      )
    }

    // Check if test requires pro access
    if (mockTest.isPro && !proUser && session.user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Pro subscription required for this test' },
        { status: 403 }
      )
    }

    // Check for existing active attempt
    const existingAttempt = await prisma.mockTestAttempt.findFirst({
      where: {
        userId,
        mockTestId: testId,
        completedAt: null
      }
    })

    if (existingAttempt) {
      return NextResponse.json({
        message: 'Existing attempt found',
        attempt: existingAttempt
      })
    }

    // Create new attempt
    const attempt = await prisma.mockTestAttempt.create({
      data: {
        userId,
        mockTestId: testId,
        totalMarks: mockTest.totalMarks,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      include: {
        mockTest: {
          select: {
            title: true,
            duration: true,
            totalQuestions: true,
            questions: {
              orderBy: { id: 'asc' },
              select: {
                id: true,
                questionText: true,
                options: true,
                marks: true,
                subject: true,
                difficulty: true
              }
            }
          }
        }
      }
    })

    return NextResponse.json({
      message: 'Test attempt started',
      attempt
    }, { status: 201 })

  } catch (error) {
    console.error('Start test attempt error:', error)
    return NextResponse.json(
      { error: 'Failed to start test attempt' },
      { status: 500 }
    )
  }
}