import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import Link from 'next/link'

async function getUserStats(userId: number) {
  const [testResults, proStatus, recentActivity] = await Promise.all([
    prisma.testResult.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    }),
    prisma.proUser.findUnique({
      where: { userId }
    }),
    prisma.testResult.findMany({
      where: { userId },
      take: 10,
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: {
            name: true
          }
        }
      }
    })
  ])

  const averageScore = testResults.length > 0 
    ? testResults.reduce((acc, result) => acc + (result.score / result.total * 100), 0) / testResults.length
    : 0

  const subjectWiseScores = testResults.reduce((acc, result) => {
    if (!acc[result.subject]) {
      acc[result.subject] = { total: 0, count: 0 }
    }
    acc[result.subject].total += (result.score / result.total) * 100
    acc[result.subject].count += 1
    return acc
  }, {} as Record<string, { total: number; count: number }>)

  const subjectAverages = Object.entries(subjectWiseScores).map(([subject, data]) => ({
    subject,
    average: Math.round(data.total / data.count)
  }))

  return {
    testResults,
    averageScore: Math.round(averageScore),
    totalTests: testResults.length,
    isProActive: proStatus?.isActive || false,
    proUser: proStatus,
    subjectAverages,
    recentActivity
  }
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  const stats = await getUserStats(parseInt(session?.user?.id!))

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Welcome Section with User Info */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Welcome back, {session?.user?.name}! 👋
            </h1>
            <p className="text-blue-100 text-lg mb-4">
              Continue your MDCAT preparation journey with personalized learning path.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-sm text-blue-100">Account Status</div>
                <div className="font-bold text-white">
                  {stats.isProActive ? 'Pro Member' : 'Free Account'}
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-sm text-blue-100">Member Since</div>
                <div className="font-bold text-white">
                  {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 lg:mt-0">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <div className="text-2xl">🎯</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {stats.averageScore}%
              </div>
              <div className="text-gray-600 font-medium">Average Score</div>
            </div>
            <div className="text-blue-500 text-2xl">📊</div>
          </div>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${stats.averageScore}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-green-600 mb-2">
                {stats.totalTests}
              </div>
              <div className="text-gray-600 font-medium">Tests Taken</div>
            </div>
            <div className="text-green-500 text-2xl">📝</div>
          </div>
          <div className="mt-2">
            <div className="text-sm text-gray-500">
              {stats.totalTests > 0 ? 'Keep going!' : 'Start your first test!'}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-purple-600 mb-2">
                {stats.subjectAverages.length}
              </div>
              <div className="text-gray-600 font-medium">Subjects</div>
            </div>
            <div className="text-purple-500 text-2xl">📚</div>
          </div>
          <div className="mt-2">
            <div className="text-sm text-gray-500">
              Subjects attempted
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-orange-600 mb-2">
                {stats.isProActive ? 'Pro' : 'Free'}
              </div>
              <div className="text-gray-600 font-medium">Account Type</div>
            </div>
            <div className="text-orange-500 text-2xl">
              {stats.isProActive ? '⭐' : '🔒'}
            </div>
          </div>
          <div className="mt-2">
            <div className="text-sm text-gray-500">
              {stats.isProActive ? 'Full access' : 'Limited access'}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-2 space-y-6">
          {/* Subject Performance */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Subject Performance</h2>
            {stats.subjectAverages.length > 0 ? (
              <div className="space-y-4">
                {stats.subjectAverages.map((subject, index) => (
                  <div key={subject.subject} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-bold">
                          {subject.subject.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{subject.subject}</h4>
                        <p className="text-sm text-gray-600">Average score</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">
                        {subject.average}%
                      </div>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${subject.average}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">📊</div>
                <p className="text-gray-600 mb-4">No test results yet. Start your first test!</p>
                <Link 
                  href="/mdcat"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Take a Test
                </Link>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              href="/mdcat"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500 group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-blue-600 text-xl">🎯</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Continue Learning</h3>
                  <p className="text-gray-600">Access all MDCAT subjects and practice materials</p>
                </div>
              </div>
              <div className="mt-4 text-blue-600 font-semibold flex items-center">
                Go to MDCAT 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            <Link 
              href="/dashboard/results"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-green-500 group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-green-600 text-xl">📈</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">View Results</h3>
                  <p className="text-gray-600">Check your test performance and progress reports</p>
                </div>
              </div>
              <div className="mt-4 text-green-600 font-semibold flex items-center">
                View Results
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Sidebar - Recent Activity & Pro Upgrade */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {stats.recentActivity.slice(0, 5).map((activity, index) => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-sm">📝</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800">
                      {activity.subject} Test
                    </p>
                    <p className="text-xs text-gray-500">
                      Score: {activity.score}/{activity.total}
                    </p>
                    <p className="text-xs text-gray-400">
                      {new Date(activity.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
              {stats.recentActivity.length === 0 && (
                <div className="text-center py-4 text-gray-500">
                  No recent activity
                </div>
              )}
            </div>
          </div>

          {/* Pro Upgrade CTA */}
          {!stats.isProActive && (
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-6 text-white shadow-lg">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-700 text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Upgrade to Pro</h3>
                <p className="text-purple-100 text-sm mb-4">
                  Unlock all subjects, advanced analytics, and premium features to boost your preparation
                </p>
              </div>
              <ul className="space-y-2 mb-6">
                {['Full Biology & Chemistry Access', 'Advanced Analytics', 'Priority Support', 'Unlimited Mock Tests'].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm">
                    <span className="text-yellow-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/pricing"
                className="block w-full bg-white text-purple-600 text-center py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-md"
              >
                Upgrade Now - 2000 PKR
              </Link>
            </div>
          )}

          {/* Study Tips */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
            <h3 className="text-lg font-bold mb-3">💡 Study Tip</h3>
            <p className="text-green-100 text-sm">
              "Practice regularly with timed tests to improve your speed and accuracy for the actual MDCAT exam."
            </p>
          </div>
        </div>
      </div>

      {/* Recent Tests Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Recent Test Results</h2>
          <Link 
            href="/dashboard/results" 
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View All Results →
          </Link>
        </div>
        
        {stats.testResults.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-600 font-medium">Subject</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-medium">Date</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-medium">Score</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-medium">Percentage</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {stats.testResults.slice(0, 5).map((result) => {
                  const percentage = Math.round((result.score / result.total) * 100)
                  const getStatusColor = (percent: number) => {
                    if (percent >= 80) return 'text-green-600 bg-green-50'
                    if (percent >= 60) return 'text-yellow-600 bg-yellow-50'
                    return 'text-red-600 bg-red-50'
                  }
                  
                  const getStatusText = (percent: number) => {
                    if (percent >= 80) return 'Excellent'
                    if (percent >= 60) return 'Good'
                    return 'Needs Improvement'
                  }

                  return (
                    <tr key={result.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="font-medium text-gray-800">{result.subject}</div>
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {new Date(result.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-gray-800">
                          {result.score}/{result.total}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-bold text-blue-600">{percentage}%</div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(percentage)}`}>
                          {getStatusText(percentage)}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No Tests Taken Yet</h3>
            <p className="text-gray-600 mb-6">Start your MDCAT preparation by taking your first test</p>
            <Link 
              href="/mdcat"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-bold shadow-lg"
            >
              Start Your First Test
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}