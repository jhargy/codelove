import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

interface RouteParams {
  params: {
    attemptId: string
  }
}

// POST /api/mock-tests/attempt/[attemptId]/answers - Submit answers
export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const attemptId = parseInt(params.attemptId)
    const userId = parseInt(session.user.id)
    const { answers, timeSpent, completed } = await request.json()

    // Verify attempt belongs to user
    const attempt = await prisma.mockTestAttempt.findFirst({
      where: {
        id: attemptId,
        userId
      },
      include: {
        mockTest: {
          include: {
            questions: true
          }
        }
      }
    })

    if (!attempt) {
      return NextResponse.json(
        { error: 'Test attempt not found' },
        { status: 404 }
      )
    }

    if (attempt.completedAt) {
      return NextResponse.json(
        { error: 'Test already completed' },
        { status: 400 }
      )
    }

    let score = 0
    const answerData = []

    // Process each answer
    for (const answer of answers) {
      const question = attempt.mockTest.questions.find(q => q.id === answer.questionId)
      
      if (question) {
        const isCorrect = answer.selectedOption === question.correctAnswer
        
        if (isCorrect) {
          score += question.marks
        }

        answerData.push({
          attemptId,
          questionId: answer.questionId,
          selectedOption: answer.selectedOption,
          isCorrect,
          timeSpent: answer.timeSpent || 0
        })
      }
    }

    // Create answers in database
    await prisma.answer.createMany({
      data: answerData
    })

    const percentage = (score / attempt.totalMarks) * 100

    // Update attempt with final score if completed
    const updateData: any = {
      score,
      percentage,
      timeSpent: timeSpent || attempt.timeSpent,
      updatedAt: new Date()
    }

    if (completed) {
      updateData.completedAt = new Date()
    }

    const updatedAttempt = await prisma.mockTestAttempt.update({
      where: { id: attemptId },
      data: updateData,
      include: {
        answers: {
          include: {
            question: {
              select: {
                id: true,
                questionText: true,
                correctAnswer: true,
                explanation: true
              }
            }
          }
        },
        mockTest: {
          select: {
            title: true,
            totalMarks: true,
            totalQuestions: true
          }
        }
      }
    })

    return NextResponse.json({
      message: completed ? 'Test completed successfully' : 'Answers saved',
      attempt: updatedAttempt,
      score,
      percentage
    })

  } catch (error) {
    console.error('Submit answers error:', error)
    return NextResponse.json(
      { error: 'Failed to submit answers' },
      { status: 500 }
    )
  }
}