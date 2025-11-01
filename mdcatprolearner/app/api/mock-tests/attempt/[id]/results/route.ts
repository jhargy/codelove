import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

interface RouteParams {
  params: {
    id: string  // Keep as id but use attemptId in logic
  }
}

// GET /api/mock-tests/attempt/[id]/results - Get detailed results
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const attemptId = parseInt(params.id)  // Use params.id instead of params.attemptId
    const userId = parseInt(session.user.id)

    const attempt = await prisma.mockTestAttempt.findFirst({
      where: {
        id: attemptId,
        userId // Users can only see their own results
      },
      include: {
        mockTest: {
          select: {
            title: true,
            type: true,
            subject: true,
            duration: true,
            totalMarks: true,
            totalQuestions: true
          }
        },
        answers: {
          include: {
            question: {
              select: {
                id: true,
                questionText: true,
                options: true,
                correctAnswer: true,
                explanation: true,
                marks: true,
                difficulty: true,
                subject: true
              }
            }
          }
        }
      }
    })

    if (!attempt) {
      return NextResponse.json(
        { error: 'Results not found' },
        { status: 404 }
      )
    }

    // Calculate statistics
    const totalQuestions = attempt.answers.length
    const correctAnswers = attempt.answers.filter(a => a.isCorrect).length
    const wrongAnswers = attempt.answers.filter(a => a.isCorrect === false).length
    const skippedAnswers = attempt.answers.filter(a => a.selectedOption === null).length

    // Calculate subject-wise performance
    const subjectPerformance = attempt.answers.reduce((acc: any, answer) => {
      const subject = answer.question.subject || 'General'
      if (!acc[subject]) {
        acc[subject] = { total: 0, correct: 0, marks: 0 }
      }
      acc[subject].total++
      if (answer.isCorrect) {
        acc[subject].correct++
        acc[subject].marks += answer.question.marks
      }
      return acc
    }, {})

    // Calculate difficulty-wise performance
    const difficultyPerformance = attempt.answers.reduce((acc: any, answer) => {
      const difficulty = answer.question.difficulty
      if (!acc[difficulty]) {
        acc[difficulty] = { total: 0, correct: 0 }
      }
      acc[difficulty].total++
      if (answer.isCorrect) {
        acc[difficulty].correct++
      }
      return acc
    }, {})

    const results = {
      attempt,
      statistics: {
        totalQuestions,
        correctAnswers,
        wrongAnswers,
        skippedAnswers,
        score: attempt.score,
        totalMarks: attempt.totalMarks,
        percentage: attempt.percentage,
        timeSpent: attempt.timeSpent,
        accuracy: (correctAnswers / totalQuestions) * 100
      },
      subjectPerformance,
      difficultyPerformance
    }

    return NextResponse.json({ results })

  } catch (error) {
    console.error('Get results error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch results' },
      { status: 500 }
    )
  }
}