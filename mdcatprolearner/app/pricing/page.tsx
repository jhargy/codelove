import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import Link from 'next/link'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import PaymentButton from '../components/PaymentBustton'

async function getUserProStatus(userId: string) {
  try {
    const proUser = await prisma.proUser.findUnique({
      where: { userId: parseInt(userId) }
    })
    return proUser
  } catch (error) {
    console.error('Error fetching user pro status:', error)
    return null
  }
}

export default async function PricingPage() {
  const session = await getServerSession(authOptions)
  const userProStatus = session?.user?.id ? await getUserProStatus(session.user.id) : null

  const features = {
    free: [
      'Physics Subject Access',
      'English Subject Access',
      'Logical Reasoning Access',
      'Basic Practice Tests',
      'Limited Question Bank',
      'Community Support'
    ],
    pro: [
      'All MDCAT Subjects (Biology, Chemistry)',
      '1000+ Practice Questions',
      'Detailed Explanations',
      'Advanced Analytics',
      'Priority Support',
      'Unlimited Mock Tests',
      'PMDC Aligned Syllabus',
      'Progress Tracking'
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <Header />

      <div className="container mx-auto px-4 py-16">
        
        {/* TOP HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600">
            Unlock your full potential with our complete MDCAT preparation
          </p>

          {userProStatus && (
            <div className="bg-green-50 border border-green-200 rounded-lg px-6 py-3 inline-flex items-center space-x-2 mt-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-800 font-medium">You are a Pro member</span>
            </div>
          )}
        </div>

        {/* PLANS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto mb-24">
          
          {/* FREE PLAN */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-10">
            <div className="text-center mb-10 space-y-3">
              <h3 className="text-2xl font-bold text-gray-800">Free Plan</h3>
              <span className="text-4xl font-bold text-gray-800">Free</span>
              <p className="text-gray-600">
                Perfect for starting MDCAT preparation
              </p>

              {session ? (
                <div className="bg-blue-50 text-blue-700 px-4 py-3 rounded-lg font-medium">
                  ✅ Currently Active
                </div>
              ) : (
                <Link
                  href="/auth/signup"
                  className="inline-block bg-gray-700 text-white px-8 py-3 mt-2 rounded-lg hover:bg-gray-800 transition"
                >
                  Get Started
                </Link>
              )}
            </div>

            <h4 className="font-semibold text-gray-800 text-lg mb-4">Included:</h4>
            <div className="space-y-4">
              {features.free.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PRO PLAN */}
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-xl text-white p-10 relative overflow-hidden">
            <div className="absolute top-6 right-6">
              <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </span>
            </div>

            <div className="text-center mb-10 space-y-3">
              <h3 className="text-2xl font-bold">Pro Plan</h3>
              <div>
                <span className="text-4xl font-bold">2,000</span>
                <span className="text-xl"> PKR</span>
                <p className="text-purple-200 text-sm mt-1">One-time payment</p>
              </div>

              <p className="text-purple-100">
                All subjects + premium features
              </p>

              {session ? (
                userProStatus ? (
                  <div className="bg-white/20 px-6 py-3 rounded-lg font-medium">
                    ✅ Pro Active
                  </div>
                ) : (
                  <PaymentButton />
                )
              ) : (
                <Link
                  href="/auth/signup"
                  className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 font-bold"
                >
                  Sign Up to Upgrade
                </Link>
              )}
            </div>

            <h4 className="font-semibold text-lg mb-4">Everything in Free, plus:</h4>
            <div className="space-y-4">
              {features.pro.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-purple-50">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-lg text-center text-sm text-purple-100">
              ✅ Activation within 24 hours after verification
            </div>
          </div>
        </div>

        {/* PAYMENT METHODS */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-10 mb-24 space-y-10">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Payment Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg hover:border-blue-500 transition">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Bank Transfer</h3>
              <p className="text-gray-600 text-sm">Direct account payment</p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:border-blue-500 transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">EasyPaisa</h3>
              <p className="text-gray-600 text-sm">Mobile wallet</p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:border-blue-500 transition">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-2xl">💜</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">JazzCash</h3>
              <p className="text-gray-600 text-sm">Mobile wallet</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <h3 className="font-semibold text-gray-800 text-center mb-2">How to Pay</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="space-y-4">
                <div className="flex space-x-3">
                  <div className="w-7 h-7 bg-blue-100 rounded-full flex justify-center items-center text-blue-600 font-bold text-sm">
                    1
                  </div>
                  <p className="text-gray-700"><b>Click Confirm Payment</b> and select method</p>
                </div>

                <div className="flex space-x-3">
                  <div className="w-7 h-7 bg-blue-100 rounded-full flex justify-center items-center text-blue-600 font-bold text-sm">
                    2
                  </div>
                  <p className="text-gray-700"><b>Enter account & transaction details</b></p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex space-x-3">
                  <div className="w-7 h-7 bg-blue-100 rounded-full flex justify-center items-center text-blue-600 font-bold text-sm">
                    3
                  </div>
                  <p className="text-gray-700"><b>Pay 2,000 PKR</b> through selected method</p>
                </div>

                <div className="flex space-x-3">
                  <div className="w-7 h-7 bg-blue-100 rounded-full flex justify-center items-center text-blue-600 font-bold text-sm">
                    4
                  </div>
                  <p className="text-gray-700">
                    <b>Send screenshot</b> to WhatsApp:
                    <a href="https://wa.me/923070169442" className="text-blue-600 underline ml-1">923070169442</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-center text-yellow-800 text-sm">
            💡 After payment, screenshot is required for verification & activation.
          </p>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">FAQ</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-gray-800 mb-1">When will my account activate?</h3>
              <p className="text-gray-600">Within 24 hours after verification.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-gray-800 mb-1">Which payment methods are accepted?</h3>
              <p className="text-gray-600">Bank Transfer, EasyPaisa & JazzCash.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-gray-800 mb-1">Refund policy?</h3>
              <p className="text-gray-600">
                Refund available within 7 days if Pro content was not accessed.
              </p>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}
