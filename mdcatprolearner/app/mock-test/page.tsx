import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import Link from 'next/link'
import { redirect } from 'next/navigation'

async function getUserProStatus(userId: number) {
  const proUser = await prisma.proUser.findUnique({
    where: { userId, isActive: true }
  })
  return proUser
}

async function getMockTests() {
  const tests = await prisma.mockTest.findMany({
    where: { isActive: true },
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
      createdAt: true
    }
  })

  return {
    subjectTests: tests.filter(test => test.type === 'subject'),
    fullSyllabusTests: tests.filter(test => test.type === 'full_syllabus')
  }
}

export default async function MockTestsPage() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect('/auth/login')
  }

  const userProStatus = await getUserProStatus(parseInt(session.user.id))
  const { subjectTests, fullSyllabusTests } = await getMockTests()

  // Redirect non-pro users
  if (!userProStatus && session.user.role !== 'admin') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex items-center justify-center py-12">
        <div className="max-w-md w-full mx-auto p-6 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-6xl mb-4">🔒</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Pro Feature Required</h1>
            <p className="text-gray-600 mb-6">
              Mock tests are available exclusively for Pro members. Upgrade to access comprehensive test series and track your progress.
            </p>
            <Link
              href="/pricing"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-bold shadow-lg"
            >
              Upgrade to Pro
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            MDCAT Mock Tests
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practice with comprehensive mock tests designed to simulate the actual MDCAT exam experience
          </p>
          <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 inline-flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-800 font-medium">Pro Access Active</span>
          </div>
        </div>

        {/* Subject-wise Tests Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Subject-wise Mock Tests
              </h2>
              <p className="text-gray-600">
                Master individual subjects with focused practice tests
              </p>
            </div>
            <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium">
              {subjectTests.length} Tests Available
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjectTests.map((test) => (
              <TestCard key={test.id} test={test} />
            ))}
          </div>

          {subjectTests.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl shadow-sm">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No Subject Tests Available</h3>
              <p className="text-gray-600">New subject tests are coming soon!</p>
            </div>
          )}
        </section>

        {/* Full Syllabus Tests Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Full Syllabus Mock Tests
              </h2>
              <p className="text-gray-600">
                Comprehensive tests covering all MDCAT subjects
              </p>
            </div>
            <div className="bg-purple-50 text-purple-700 px-4 py-2 rounded-lg font-medium">
              {fullSyllabusTests.length} Tests Available
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fullSyllabusTests.map((test) => (
              <TestCard key={test.id} test={test} />
            ))}
          </div>

          {fullSyllabusTests.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl shadow-sm">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No Full Syllabus Tests Available</h3>
              <p className="text-gray-600">Full syllabus tests are coming soon!</p>
            </div>
          )}
        </section>

        {/* Test Statistics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Test Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {subjectTests.length + fullSyllabusTests.length}
              </div>
              <div className="text-blue-700 font-medium">Total Tests</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {subjectTests.length}
              </div>
              <div className="text-green-700 font-medium">Subject Tests</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {fullSyllabusTests.length}
              </div>
              <div className="text-purple-700 font-medium">Full Syllabus</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 mb-1">
                200
              </div>
              <div className="text-orange-700 font-medium">Questions Each</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Test Card Component
function TestCard({ test }: { test: any }) {
  const getSubjectColor = (subject: string | null) => {
    const colors: { [key: string]: string } = {
      Biology: 'from-green-500 to-emerald-600',
      Chemistry: 'from-blue-500 to-cyan-600',
      Physics: 'from-purple-500 to-indigo-600',
      English: 'from-red-500 to-pink-600',
      'Logical Reasoning': 'from-orange-500 to-amber-600',
    }
    return colors[subject || ''] || 'from-gray-500 to-gray-600'
  }

  const getSubjectIcon = (subject: string | null) => {
    const icons: { [key: string]: string } = {
      Biology: '🧬',
      Chemistry: '⚗️',
      Physics: '⚛️',
      English: '📝',
      'Logical Reasoning': '🧠',
    }
    return icons[subject || ''] || '📚'
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group">
      {/* Header with Gradient */}
      <div className={`bg-gradient-to-r ${getSubjectColor(test.subject)} p-6 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-3xl">{getSubjectIcon(test.subject)}</span>
            {test.isPro && (
              <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                PRO
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold mb-1">{test.title}</h3>
          <p className="text-white/90 text-sm">{test.description}</p>
        </div>
      </div>

      {/* Test Details */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{test.duration} mins</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>{test.totalQuestions} Qs</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{test.totalMarks} marks</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>{test.type === 'subject' ? 'Subject' : 'Full'}</span>
          </div>
        </div>

        <Link
          href={`/mock-tests/${test.id}`}
          className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium group-hover:shadow-lg"
        >
          Start Test
        </Link>
      </div>
    </div>
  )
}