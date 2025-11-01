import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

interface RouteParams {
  params: {
    id: string
  }
}

// GET /api/mock-tests/[id] - Get specific mock test
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const testId = parseInt(params.id)

    const mockTest = await prisma.mockTest.findUnique({
      where: { 
        id: testId,
        isActive: true
      },
      include: {
        questions: {
          orderBy: { id: 'asc' },
          select: {
            id: true,
            questionText: true,
            options: true,
            marks: true,
            subject: true,
            difficulty: true,
            explanation: true
          }
        },
        _count: {
          select: {
            questions: true,
            testAttempts: true
          }
        }
      }
    })

    if (!mockTest) {
      return NextResponse.json(
        { error: 'Mock test not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ mockTest })
  } catch (error) {
    console.error('Get mock test error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch mock test' },
      { status: 500 }
    )
  }
}

// PUT /api/mock-tests/[id] - Update mock test (Admin only)
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const testId = parseInt(params.id)
    const updates = await request.json()

    const mockTest = await prisma.mockTest.update({
      where: { id: testId },
      data: {
        ...updates,
        updatedAt: new Date()
      }
    })

    return NextResponse.json({
      message: 'Mock test updated successfully',
      mockTest
    })
  } catch (error) {
    console.error('Update mock test error:', error)
    return NextResponse.json(
      { error: 'Failed to update mock test' },
      { status: 500 }
    )
  }
}

// DELETE /api/mock-tests/[id] - Soft delete mock test (Admin only)
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const testId = parseInt(params.id)

    await prisma.mockTest.update({
      where: { id: testId },
      data: {
        isActive: false,
        updatedAt: new Date()
      }
    })

    return NextResponse.json({
      message: 'Mock test deleted successfully'
    })
  } catch (error) {
    console.error('Delete mock test error:', error)
    return NextResponse.json(
      { error: 'Failed to delete mock test' },
      { status: 500 }
    )
  }
}