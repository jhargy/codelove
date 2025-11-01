import Link from 'next/link'
import TestimonialSlider from '../app/components/TestimonialSlider'
import CommentsSection from '../app/components/CommentsSection'
import Header from '../app/components/Header'
import Footer from '../app/components/ui/Footer'
import { prisma } from '@/lib/db'

// Server component to fetch real-time data
async function getStats() {
  try {
    const [totalUsers, proUsers, todayUsers, totalComments] = await Promise.all([
      prisma.user.count({ where: { isActive: true } }),
      prisma.user.count({ where: { isPro: true, isActive: true } }),
      prisma.user.count({
        where: {
          createdAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0))
          }
        }
      }),
      prisma.comment.count({ where: { isActive: true } })
    ])

    return { totalUsers, proUsers, todayUsers, totalComments }
  } catch (error) {
    // Fallback data in case of database issues
    return { totalUsers: 1280, proUsers: 890, todayUsers: 45, totalComments: 156 }
  }
}

export default async function HomePage() {
  const stats = await getStats()

  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Hero Section */}
        <HeroSection stats={stats} />
        
        {/* Stats Section */}
        <StatsSection stats={stats} />

        {/* Features Section */}
        <FeaturesSection />

        {/* Testimonials */}
        <TestimonialSlider />

        {/* Comments Section */}
        <CommentsSection />

        {/* Final CTA */}
        <CTASection />
      </div>
      <Footer />
    </>
  )
}

// Hero Section Component - Accept stats as prop
function HeroSection({ stats }: { stats: any }) {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium">Trusted by {stats.totalUsers}+ Medical Aspirants</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Ace Your{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              MDCAT
            </span>{' '}
            with Confidence
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Comprehensive preparation platform with PMDC aligned syllabus, 
            intelligent mock tests, and personalized learning path for medical college success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/auth/signup"
              className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              <span className="flex items-center">
                Start Free Trial
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            
            <Link 
              href="/mdcat"
              className="group border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center">
                Explore Subjects
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-blue-200">
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-6 h-6 bg-white rounded-full border-2 border-blue-600"></div>
                ))}
              </div>
              <span>Join {stats.totalUsers}+ Successful Students</span>
            </div>
            
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span>4.9/5 Rating ({stats.proUsers}+ Reviews)</span>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-10 animate-bounce">
          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
        </div>
        <div className="absolute top-20 right-20 animate-pulse">
          <div className="w-6 h-6 bg-green-400 rounded-full opacity-60"></div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  )
}

// Stats Section Component
function StatsSection({ stats }: { stats: any }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              {stats.totalUsers}+
            </div>
            <div className="text-gray-600 font-medium">Active Students</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
              {stats.proUsers}+
            </div>
            <div className="text-gray-600 font-medium">Pro Members</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
              {stats.todayUsers}+
            </div>
            <div className="text-gray-600 font-medium">Joined Today</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
              {stats.totalComments}+
            </div>
            <div className="text-gray-600 font-medium">Success Stories</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Features Section Component
function FeaturesSection() {
  const features = [
    {
      icon: '📚',
      title: 'PMDC Aligned Syllabus',
      description: 'Complete syllabus coverage as per Pakistan Medical Commission guidelines and exam patterns.'
    },
    {
      icon: '🧪',
      title: 'Intelligent Mock Tests',
      description: 'AI-powered tests that adapt to your performance and focus on weak areas.'
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Track your progress with detailed performance reports and improvement suggestions.'
    },
    {
      icon: '⚡',
      title: 'Quick Revision',
      description: 'Concise notes, formula sheets, and key concepts for last-minute preparation.'
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Guidance',
      description: 'Learn from experienced medical professionals and top MDCAT scorers.'
    },
    {
      icon: '📱',
      title: 'Mobile Friendly',
      description: 'Study anytime, anywhere with our fully responsive platform and mobile app.'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose MDCAT Pro?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to excel in your MDCAT exam, all in one platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:border-blue-200"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Stats Bar */}
        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl shadow-sm p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">1000+</div>
              <div className="text-gray-600 text-sm">Practice Questions</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">50+</div>
              <div className="text-gray-600 text-sm">Mock Tests</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">200+</div>
              <div className="text-gray-600 text-sm">Video Lectures</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">24/7</div>
              <div className="text-gray-600 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// CTA Section Component
function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Medical Journey?
        </h2>
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Join thousands of successful medical students who achieved their dreams with MDCAT Pro.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/auth/signup"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Started Free
          </Link>
          
          <Link 
            href="/pricing"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300"
          >
            View Pricing
          </Link>
        </div>

        <p className="text-blue-200 text-sm mt-6">
          No credit card required • 7-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  )
}