// app/logical-reasoning/LogicalReasoningClient.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import Link from 'next/link'
import { 
  FaPuzzlePiece,
  FaChartBar,
  FaShapes,
  FaBrain,
  FaChess,
  FaProjectDiagram,
  FaSortAmountUp,
  FaSearch,
  FaCalculator,
  FaListOl,
  FaCode,
  FaCube,
  FaChessBoard,
  FaBook,
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
  description?: string
}

interface TopicCategory {
  name: string
  icon: React.ReactNode
  topics: Topic[]
}

const TOPIC_CATEGORIES: Record<string, TopicCategory> = {
  // 1) Analytical Reasoning
  analyticalReasoning: {
    name: 'Analytical Reasoning',
    icon: <FaPuzzlePiece className="text-blue-600" />,
    topics: [
      { 
        id: 'linear-arrangements', 
        name: 'Linear Arrangements', 
        path: 'linear-arrangements', 
        icon: <FaSortAmountUp className="text-blue-600" />,
        description: 'Positioning and ordering problems'
      },
      { 
        id: 'circular-arrangements', 
        name: 'Circular Arrangements', 
        path: 'circular-arrangements', 
        icon: <FaChartBar className="text-purple-600" />,
        description: 'Circular seating arrangements'
      },
      { 
        id: 'blood-relations', 
        name: 'Blood Relations', 
        path: 'blood-relations', 
        icon: <FaProjectDiagram className="text-red-600" />,
        description: 'Family tree and relationship problems'
      },
      { 
        id: 'direction-sense', 
        name: 'Direction Sense', 
        path: 'direction-sense', 
        icon: <FaSearch className="text-green-600" />,
        description: 'Direction and distance problems'
      },
      { 
        id: 'syllogisms', 
        name: 'Syllogisms', 
        path: 'syllogisms', 
        icon: <FaBrain className="text-indigo-600" />,
        description: 'Logical deductions from statements'
      }
    ]
  },

  // 2) Logical Puzzles
  logicalPuzzles: {
    name: 'Logical Puzzles',
    icon: <FaChess className="text-green-600" />,
    topics: [
      { 
        id: 'puzzle-seating', 
        name: 'Seating Arrangement Puzzles', 
        path: 'puzzle-seating', 
        icon: <FaChessBoard className="text-amber-600" />,
        description: 'Complex seating arrangement problems'
      },
      { 
        id: 'puzzle-grouping', 
        name: 'Grouping & Selection', 
        path: 'puzzle-grouping', 
        icon: <FaShapes className="text-teal-600" />,
        description: 'Group formation and selection criteria'
      },
      { 
        id: 'puzzle-scheduling', 
        name: 'Scheduling Puzzles', 
        path: 'puzzle-scheduling', 
        icon: <FaListOl className="text-orange-600" />,
        description: 'Time scheduling and sequencing'
      },
      { 
        id: 'puzzle-distribution', 
        name: 'Distribution Puzzles', 
        path: 'puzzle-distribution', 
        icon: <FaCube className="text-pink-600" />,
        description: 'Distribution and allocation problems'
      }
    ]
  },

  // 3) Critical Reasoning
  criticalReasoning: {
    name: 'Critical Reasoning',
    icon: <FaBrain className="text-purple-600" />,
    topics: [
      { 
        id: 'argument-analysis', 
        name: 'Argument Analysis', 
        path: 'argument-analysis', 
        icon: <FaChartBar className="text-red-600" />,
        description: 'Analyzing and evaluating arguments'
      },
      { 
        id: 'assumptions-inferences', 
        name: 'Assumptions & Inferences', 
        path: 'assumptions-inferences', 
        icon: <FaPuzzlePiece className="text-indigo-600" />,
        description: 'Identifying assumptions and drawing inferences'
      },
      { 
        id: 'strengthen-weaken', 
        name: 'Strengthen & Weaken Arguments', 
        path: 'strengthen-weaken', 
        icon: <FaBrain className="text-green-600" />,
        description: 'Arguments strengthening and weakening'
      },
      { 
        id: 'course-action', 
        name: 'Course of Action', 
        path: 'course-action', 
        icon: <FaProjectDiagram className="text-blue-600" />,
        description: 'Decision making and course of action'
      }
    ]
  },

  // 4) Verbal Reasoning
  verbalReasoning: {
    name: 'Verbal Reasoning',
    icon: <FaBook className="text-amber-600" />,
    topics: [
      { 
        id: 'statement-conclusions', 
        name: 'Statement & Conclusions', 
        path: 'statement-conclusions', 
        icon: <FaCode className="text-purple-600" />,
        description: 'Drawing conclusions from statements'
      },
      { 
        id: 'statement-assumptions', 
        name: 'Statement & Assumptions', 
        path: 'statement-assumptions', 
        icon: <FaBrain className="text-teal-600" />,
        description: 'Identifying implicit assumptions'
      },
      { 
        id: 'statement-arguments', 
        name: 'Statement & Arguments', 
        path: 'statement-arguments', 
        icon: <FaChartBar className="text-orange-600" />,
        description: 'Evaluating arguments for statements'
      },
      { 
        id: 'cause-effect', 
        name: 'Cause & Effect', 
        path: 'cause-effect', 
        icon: <FaProjectDiagram className="text-red-600" />,
        description: 'Identifying cause-effect relationships'
      }
    ]
  },

  // 5) Quantitative Reasoning
  quantitativeReasoning: {
    name: 'Quantitative Reasoning',
    icon: <FaCalculator className="text-green-600" />,
    topics: [
      { 
        id: 'number-series', 
        name: 'Number Series', 
        path: 'number-series', 
        icon: <FaListOl className="text-blue-600" />,
        description: 'Pattern identification in number sequences'
      },
      { 
        id: 'data-sufficiency', 
        name: 'Data Sufficiency', 
        path: 'data-sufficiency', 
        icon: <FaChartBar className="text-purple-600" />,
        description: 'Determining data adequacy for solutions'
      },
      { 
        id: 'mathematical-operations', 
        name: 'Mathematical Operations', 
        path: 'mathematical-operations', 
        icon: <FaCalculator className="text-green-600" />,
        description: 'Symbol-based mathematical problems'
      },
      { 
        id: 'quantitative-comparison', 
        name: 'Quantitative Comparison', 
        path: 'quantitative-comparison', 
        icon: <FaSortAmountUp className="text-amber-600" />,
        description: 'Comparing quantitative relationships'
      }
    ]
  },

  // 6) Pattern Recognition
  patternRecognition: {
    name: 'Pattern Recognition',
    icon: <FaShapes className="text-indigo-600" />,
    topics: [
      { 
        id: 'figure-series', 
        name: 'Figure Series', 
        path: 'figure-series', 
        icon: <FaCube className="text-pink-600" />,
        description: 'Visual pattern identification'
      },
      { 
        id: 'analogies', 
        name: 'Analogies', 
        path: 'analogies', 
        icon: <FaPuzzlePiece className="text-teal-600" />,
        description: 'Relationship-based analogies'
      },
      { 
        id: 'classification', 
        name: 'Classification', 
        path: 'classification', 
        icon: <FaShapes className="text-orange-600" />,
        description: 'Group classification problems'
      },
      { 
        id: 'mirror-images', 
        name: 'Mirror & Water Images', 
        path: 'mirror-images', 
        icon: <FaSearch className="text-blue-600" />,
        description: 'Mirror and water reflection problems'
      }
    ]
  }
}

export default function LogicalReasoningClient() {
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
    { name: 'Chemistry', href: '/chemistry', color: 'bg-blue-500 hover:bg-blue-600' },
    { name: 'Physics', href: '/physics', color: 'bg-purple-500 hover:bg-purple-600' },
    { name: 'English', href: '/english', color: 'bg-amber-500 hover:bg-amber-600' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

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
              <h2 className="text-lg font-semibold text-gray-900">Logical Reasoning Topics</h2>
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
                          href={`/logical-reasoning/${topic.path}`}
                          className="flex items-center space-x-3 p-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                          onClick={() => setSidebarOpen(false)}
                        >
                          {topic.icon}
                          <div>
                            <div className="font-medium">{topic.name}</div>
                            {topic.description && (
                              <div className="text-xs text-gray-500">{topic.description}</div>
                            )}
                          </div>
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
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl text-white p-8 mb-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Logical Reasoning</h1>
              <p className="text-xl text-amber-100 mb-6">
                Develop critical thinking and analytical skills for MDCAT success. 
                Master problem-solving strategies and logical analysis as per PMDC syllabus.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <FaBook className="w-5 h-5" />
                  <span>6 Comprehensive Categories</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <FaChartLine className="w-5 h-5" />
                  <span>Problem-Solving Strategies</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <FaUserCheck className="w-5 h-5" />
                  <span>Analytical Thinking</span>
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
                <div className="p-3 bg-amber-100 rounded-lg">
                  <FaPuzzlePiece className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">6</p>
                  <p className="text-gray-600">Categories</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <FaGraduationCap className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">25+</p>
                  <p className="text-gray-600">Topics</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-red-100 rounded-lg">
                  <FaChartLine className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-gray-600">Practice Problems</p>
                </div>
              </div>
            </div>
          </div>

          {/* PMDC Syllabus Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-3">PMDC MDCAT Syllabus Coverage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
              <div>
                <h3 className="font-semibold mb-2">✓ Fully Covered Topics:</h3>
                <ul className="space-y-1">
                  <li>• Analytical Reasoning & Puzzles</li>
                  <li>• Critical Thinking & Analysis</li>
                  <li>• Logical Deductions & Inferences</li>
                  <li>• Problem Solving Strategies</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">✓ Key Skills Developed:</h3>
                <ul className="space-y-1">
                  <li>• Pattern Recognition</li>
                  <li>• Analytical Thinking</li>
                  <li>• Decision Making</li>
                  <li>• Time Management</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Featured Categories */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(TOPIC_CATEGORIES).slice(0, 6).map(([key, category]) => (
                <div key={key} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    {category.icon}
                    <h3 className="font-semibold text-gray-900">{category.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {category.topics.length} topics covering essential logical reasoning concepts
                  </p>
                  <button
                    onClick={() => toggleCategory(key)}
                    className="text-amber-600 hover:text-amber-700 text-sm font-medium"
                  >
                    Explore Topics →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Study Tips */}
          <div className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white p-6">
            <h2 className="text-xl font-bold mb-4">Pro Study Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold mb-2">🎯 Effective Strategies:</h3>
                <ul className="space-y-1 text-green-100">
                  <li>• Practice daily with timed exercises</li>
                  <li>• Focus on understanding patterns</li>
                  <li>• Learn shortcut methods</li>
                  <li>• Review mistakes thoroughly</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">⏱️ Time Management:</h3>
                <ul className="space-y-1 text-green-100">
                  <li>• Allocate 45-60 minutes daily</li>
                  <li>• Mix different question types</li>
                  <li>• Track your progress weekly</li>
                  <li>• Focus on weak areas</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />

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
                className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium"
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