import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import Link from 'next/link'

async function getUserResults(userId: number) {
  const testResults = await prisma.testResult.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    include: {
      user: {
        select: {
          name: true,
          email: true
        }
      }
    }
  })

  const overallStats = testResults.reduce((acc, result) => {
    acc.totalTests += 1
    acc.totalScore += result.score
    acc.totalPossible += result.total
    return acc
  }, { totalTests: 0, totalScore: 0, totalPossible: 0 })

  const overallPercentage = overallStats.totalTests > 0 
    ? Math.round((overallStats.totalScore / overallStats.totalPossible) * 100)
    : 0

  return {
    testResults,
    overallStats: {
      ...overallStats,
      overallPercentage
    }
  }
}

export default async function ResultsPage() {
  const session = await getServerSession(authOptions)
  const { testResults, overallStats } = await getUserResults(parseInt(session?.user?.id!))

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Test Results</h1>
          <p className="text-gray-600">
            Track your performance and monitor your progress over time
          </p>
        </div>
        <Link 
          href="/mdcat"
          className="mt-4 lg:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Take New Test
        </Link>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {overallStats.totalTests}
          </div>
          <div className="text-gray-600 font-medium">Total Tests</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {overallStats.overallPercentage}%
          </div>
          <div className="text-gray-600 font-medium">Overall Average</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">
            {testResults.length > 0 ? new Date(testResults[0].createdAt).toLocaleDateString() : 'N/A'}
          </div>
          <div className="text-gray-600 font-medium">Last Test</div>
        </div>
      </div>

      {/* Results Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Detailed Results</h2>
        </div>
        
        {testResults.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-4 px-6 text-gray-600 font-medium">Subject</th>
                  <th className="text-left py-4 px-6 text-gray-600 font-medium">Date & Time</th>
                  <th className="text-left py-4 px-6 text-gray-600 font-medium">Score</th>
                  <th className="text-left py-4 px-6 text-gray-600 font-medium">Percentage</th>
                  <th className="text-left py-4 px-6 text-gray-600 font-medium">Performance</th>
                </tr>
              </thead>
              <tbody>
                {testResults.map((result) => {
                  const percentage = Math.round((result.score / result.total) * 100)
                  const getPerformanceColor = (percent: number) => {
                    if (percent >= 80) return 'text-green-600 bg-green-50'
                    if (percent >= 60) return 'text-yellow-600 bg-yellow-50'
                    return 'text-red-600 bg-red-50'
                  }
                  
                  const getPerformanceText = (percent: number) => {
                    if (percent >= 80) return 'Excellent'
                    if (percent >= 60) return 'Good'
                    return 'Needs Improvement'
                  }

                  return (
                    <tr key={result.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="font-semibold text-gray-800">{result.subject}</div>
                      </td>
                      <td className="py-4 px-6 text-gray-600">
                        {new Date(result.createdAt).toLocaleDateString()} at{' '}
                        {new Date(result.createdAt).toLocaleTimeString()}
                      </td>
                      <td className="py-4 px-6">
                        <div className="font-bold text-gray-800">
                          {result.score}/{result.total}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="font-bold text-blue-600">{percentage}%</div>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPerformanceColor(percentage)}`}>
                          {getPerformanceText(percentage)}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No Results Yet</h3>
            <p className="text-gray-600 mb-6">Take your first test to see your results here</p>
            <Link 
              href="/mdcat"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold"
            >
              Start Testing
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}