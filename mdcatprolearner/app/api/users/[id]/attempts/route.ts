import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

interface RouteParams {
  params: {
    id: string
  }
}

// GET /api/users/[id]/attempts - Get user's test attempts
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const userId = parseInt(params.id)

    // Users can only see their own attempts (unless admin)
    if (session.user.role !== 'admin' && session.user.id !== params.id) {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      )
    }

    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    const page = parseInt(searchParams.get('page') || '1')
    const skip = (page - 1) * limit

    const attempts = await prisma.mockTestAttempt.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip,
      include: {
        mockTest: {
          select: {
            title: true,
            type: true,
            subject: true,
            totalMarks: true,
            totalQuestions: true
          }
        },
        _count: {
          select: {
            answers: true
          }
        }
      }
    })

    const total = await prisma.mockTestAttempt.count({
      where: { userId }
    })

    return NextResponse.json({
      attempts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Get user attempts error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch attempts' },
      { status: 500 }
    )
  }
}