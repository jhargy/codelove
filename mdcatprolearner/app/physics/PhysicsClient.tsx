// app/physics/PhysicsClient.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  FaBook,
  FaVectorSquare,
  FaRunning,
  FaBolt,
  FaRedoAlt,
  FaWater,
  FaTemperatureHigh,
  FaChartBar,
  FaWaveSquare,
  FaMagnet,
  FaPlug,
  FaCircleNotch,
  FaMicrochip,
  FaAtom,
  FaRainbow,
  FaRadiation,
  FaGraduationCap,
  FaChartLine,
  FaUserCheck,
  FaTimes,
  FaBars,
  FaChevronDown,
  FaChevronRight
} from 'react-icons/fa'

interface Topic {
  id: string
  name: string
  path: string
  icon: React.ReactNode
}

interface TopicCategory {
  name: string
  icon: React.ReactNode
  topics: Topic[]
}

const TOPIC_CATEGORIES: Record<string, TopicCategory> = {
  mechanics: {
    name: 'Mechanics',
    icon: <FaBook className="text-blue-600" />,
    topics: [
      { id: 'vectors-equilibrium', name: 'Vectors and Equilibrium', path: 'vectors', icon: <FaVectorSquare className="text-blue-600" /> },
      { id: 'force-motion', name: 'Force and Motion', path: 'force-motion', icon: <FaRunning className="text-blue-600" /> },
      { id: 'work-energy', name: 'Work and Energy', path: 'work-energy', icon: <FaBolt className="text-blue-600" /> },
      { id: 'rotational-motion', name: 'Rotational and Circular Motion', path: 'rotational-motion', icon: <FaRedoAlt className="text-blue-600" /> },
      { id: 'fluid-dynamics', name: 'Fluid Dynamics', path: 'fluid-dynamics', icon: <FaWater className="text-blue-600" /> }
    ]
  },
  thermodynamics: {
    name: 'Thermodynamics',
    icon: <FaTemperatureHigh className="text-blue-600" />,
    topics: [
      { id: 'thermodynamics', name: 'Thermodynamics', path: 'thermodynamics', icon: <FaTemperatureHigh className="text-blue-600" /> }
    ]
  },
  waves: {
    name: 'Waves and Oscillations',
    icon: <FaChartBar className="text-blue-600" />,
    topics: [
      { id: 'waves-oscillations', name: 'Waves and Oscillations', path: 'waves-oscillations', icon: <FaWaveSquare className="text-blue-600" /> }
    ]
  },
  electromagnetism: {
    name: 'Electromagnetism',
    icon: <FaMagnet className="text-blue-600" />,
    topics: [
      { id: 'electrostatics', name: 'Electrostatics', path: 'electrostatics', icon: <FaBolt className="text-blue-600" /> },
      { id: 'current-electricity', name: 'Current Electricity', path: 'current-electricity', icon: <FaPlug className="text-blue-600" /> },
      { id: 'electromagnetism', name: 'Electromagnetism', path: 'electromagnetism', icon: <FaMagnet className="text-blue-600" /> },
      { id: 'electromagnetic-induction', name: 'Electromagnetic Induction', path: 'electromagnetic-induction', icon: <FaCircleNotch className="text-blue-600" /> },
      { id: 'alternating-current', name: 'Alternating-Current', path: 'alternating-current', icon: <FaBolt className="text-blue-600" /> },
    ]
  },
  electronics: {
    name: 'Electronics',
    icon: <FaMicrochip className="text-blue-600" />,
    topics: [
      { id: 'electronics', name: 'Electronics', path: 'electronics', icon: <FaMicrochip className="text-blue-600" /> }
    ]
  },
  modernPhysics: {
    name: 'Modern Physics',
    icon: <FaAtom className="text-blue-600" />,
    topics: [
      { id: 'modern-physics', name: 'Modern Physics', path: 'modern-physics', icon: <FaAtom className="text-blue-600" /> },
      { id: 'spectra', name: 'Spectra', path: 'spectra', icon: <FaRainbow className="text-blue-600" /> },
      { id: 'nuclear-physics', name: 'Nuclear Physics', path: 'nuclear-physics', icon: <FaRadiation className="text-blue-600" /> }
    ]
  }
}

export default function PhysicsClient() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())
  const [showWarning, setShowWarning] = useState(false)

  // Show warning popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWarning(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const toggleCategory = (categoryKey: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev)
      if (newSet.has(categoryKey)) {
        newSet.delete(categoryKey)
      } else {
        newSet.add(categoryKey)
      }
      return newSet
    })
  }

  const subjectLinks = [
    { name: 'Biology', href: '/biology', color: 'bg-green-500 hover:bg-green-600' },
    { name: 'Chemistry', href: '/chemistry', color: 'bg-purple-500 hover:bg-purple-600' },
    { name: 'English', href: '/english', color: 'bg-yellow-500 hover:bg-yellow-600' },
    { name: 'Logical Reasoning', href: '/logical-reasoning', color: 'bg-orange-500 hover:bg-orange-600' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <FaBars className="w-5 h-5" />
              </button>
              <Link href="/" className="flex items-center space-x-2">
                <FaGraduationCap className="w-8 h-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">ProLearner</span>
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">Home</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</Link>
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 font-medium">Dashboard</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link 
                href="/auth/signin" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-80 bg-white border-r border-gray-200 transform
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto
        `}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Physics Topics</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-1 rounded-md text-gray-400 hover:text-gray-600"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              {Object.entries(TOPIC_CATEGORIES).map(([key, category]) => (
                <div key={key} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleCategory(key)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {category.icon}
                      <span className="font-medium text-gray-900 text-sm">{category.name}</span>
                    </div>
                    {expandedCategories.has(key) ? (
                      <FaChevronDown className="w-4 h-4 text-gray-500" />
                    ) : (
                      <FaChevronRight className="w-4 h-4 text-gray-500" />
                    )}
                  </button>

                  {expandedCategories.has(key) && (
                    <div className="px-4 pb-3 space-y-2">
                      {category.topics.map((topic) => (
                        <Link
                          key={topic.id}
                          href={`/physics/${topic.path}`}
                          className="flex items-center space-x-3 p-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                          onClick={() => setSidebarOpen(false)}
                        >
                          {topic.icon}
                          <span>{topic.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white p-8 mb-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Physics</h1>
              <p className="text-xl text-blue-100 mb-6">
                Master the fundamental principles of the physical world for MDCAT success. 
                Comprehensive coverage from classical mechanics to modern physics.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <FaBook className="w-5 h-5" />
                  <span>6 Comprehensive Chapters</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <FaChartLine className="w-5 h-5" />
                  <span>Problem Solving Focus</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <FaUserCheck className="w-5 h-5" />
                  <span>Conceptual Understanding</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subject Navigation */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Other Subjects</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {subjectLinks.map((subject) => (
                <Link
                  key={subject.name}
                  href={subject.href}
                  className={`${subject.color} text-white p-4 rounded-lg text-center font-semibold transition-colors shadow-md hover:shadow-lg`}
                >
                  {subject.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FaBook className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">6</p>
                  <p className="text-gray-600">Chapters</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <FaGraduationCap className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">15+</p>
                  <p className="text-gray-600">Topics</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FaChartLine className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">800+</p>
                  <p className="text-gray-600">Practice Problems</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Chapters */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Physics Chapters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(TOPIC_CATEGORIES).map(([key, category]) => (
                <div key={key} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    {category.icon}
                    <h3 className="font-semibold text-gray-900">{category.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {category.topics.length} topics covering essential concepts
                  </p>
                  <button
                    onClick={() => toggleCategory(key)}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Explore Topics →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Physics Learning Tips */}
          <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Physics Learning Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Understand Concepts</h4>
                    <p className="text-gray-600 text-sm">Focus on understanding fundamental principles rather than memorizing formulas.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Practice Problems</h4>
                    <p className="text-gray-600 text-sm">Solve numerical problems regularly to build problem-solving skills.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Visualize Concepts</h4>
                    <p className="text-gray-600 text-sm">Use diagrams and animations to understand complex physical phenomena.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Real-world Applications</h4>
                    <p className="text-gray-600 text-sm">Connect physics concepts to real-world applications for better retention.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ProLearner</h3>
              <p className="text-gray-400">
                Your complete MDCAT preparation platform with expert guidance and comprehensive resources.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Subjects</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/physics" className="hover:text-white">Physics</Link></li>
                <li><Link href="/biology" className="hover:text-white">Biology</Link></li>
                <li><Link href="/chemistry" className="hover:text-white">Chemistry</Link></li>
                <li><Link href="/english" className="hover:text-white">English</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-gray-400 mb-2">Email: support@mdcatprolearner.com</p>
              <p className="text-gray-400">WhatsApp: +92 307 0169442</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ProLearner. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Warning Popup */}
      {showWarning && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserCheck className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Important Notice</h3>
              <p className="text-gray-600 mb-6">
                Pro Users are requested not to share your login credentials with anyone. 
                Violation may result in permanent blocking of your Pro status without notice.
              </p>
              <button
                onClick={() => setShowWarning(false)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}