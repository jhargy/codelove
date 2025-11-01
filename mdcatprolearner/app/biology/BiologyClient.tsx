// app/biology/BiologyClient.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  FaDna, 
  FaWater, 
  FaLeaf, 
  FaAtom, 
  FaFlask, 
  FaBolt, 
  FaCircleNotch, 
  FaMicrochip, 
  FaVectorSquare, 
  FaStethoscope, 
  FaHeart, 
  FaPlug, 
  FaLungs, 
  FaTint, 
  FaTemperatureHigh, 
  FaBone, 
  FaRunning, 
  FaWaveSquare, 
  FaBrain, 
  FaEye, 
  FaClock, 
  FaMagnet, 
  FaSeedling,
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
}

interface TopicCategory {
  name: string
 icon: React.ReactNode
  topics: Topic[]
}

const TOPIC_CATEGORIES: Record<string, TopicCategory> = {
  biologicalMolecules: {
    name: 'Biological Molecules',
    icon: <FaDna className="text-green-600" />,
    topics: [
      { id: 'molecules', name: 'Biological molecules', path: 'molecules', icon: <FaDna className="text-green-600" /> },
      { id: 'water', name: 'Biological Importance of Water', path: 'water', icon: <FaWater className="text-blue-600" /> },
      { id: 'carbohydrates', name: 'Carbohydrates', path: 'carbohydrates', icon: <FaLeaf className="text-green-600" /> },
      { id: 'proteins', name: 'Proteins', path: 'proteins', icon: <FaDna className="text-purple-600" /> },
      { id: 'lipids', name: 'Lipids', path: 'lipids', icon: <FaLeaf className="text-amber-600" /> },
      { id: 'conjugated-molecules', name: 'Conjugated molecules', path: 'conjugated-molecules', icon: <FaAtom className="text-pink-600" /> },
      { id: 'rna', name: 'Ribonucleic acid (RNA)', path: 'rna', icon: <FaDna className="text-indigo-600" /> },
      { id: 'dna-structure', name: 'Structure of DNA', path: 'dna-structure', icon: <FaDna className="text-teal-600" /> }
    ]
  },
  enzymes: {
    name: 'Enzymes',
    icon: <FaFlask className="text-green-600" />,
    topics: [
      { id: 'enzymes', name: 'Enzymes', path: 'enzymes', icon: <FaFlask className="text-green-600" /> },
      { id: 'enzyme-factors', name: 'Factors that Affect Enzyme Reactions', path: 'enzymeFactors', icon: <FaBolt className="text-yellow-600" /> },
    ]
  },
  cellStructure: {
    name: 'Cell Structure & Function',
    icon: <FaCircleNotch className="text-green-600" />,
    topics: [
      { id: 'cell-structure', name: 'Cell structure', path: 'cell-structure', icon: <FaCircleNotch className="text-green-600" /> },
      { id: 'prokaryotic-eukaryotic', name: 'Prokaryotic and Eukaryotic cell', path: 'prokaryotic', icon: <FaMicrochip className="text-sky-600" /> },
      { id: 'cytoplasmic-organelles', name: 'Cytoplasmic Organelles', path: 'cytoplasmic-organelles', icon: <FaVectorSquare className="text-fuchsia-600" /> },
      { id: 'chromosomes', name: 'Chromosomes', path: 'chromosomes', icon: <FaDna className="text-teal-600" /> }
    ]
  },
  acellularLife: {
    name: 'Acellular Life',
    icon: <FaFlask className="text-green-600" />,
    topics: [
      { id: 'viruses', name: 'Viruses', path: 'viruses', icon: <FaFlask className="text-green-600" /> },
      { id: 'aids-hiv', name: 'AIDS and HIV Infection', path: 'aids-hiv', icon: <FaStethoscope className="text-rose-600" /> }
    ]
  },
  bioenergetics: {
    name: 'Bioenergetics',
    icon: <FaBolt className="text-amber-600" />,
    topics: [
      { id: 'respiration', name: 'Respiration', path: 'respiration', icon: <FaBolt className="text-amber-600" /> }
    ]
  },
  digestion: {
    name: 'Digestion',
    icon: <FaStethoscope className="text-green-600" />,
    topics: [
      { id: 'digestive-system', name: 'Human digestive system', path: 'digestive-system', icon: <FaStethoscope className="text-green-600" /> }
    ]
  },
  circulation: {
    name: 'Circulation',
    icon: <FaHeart className="text-red-600" />,
    topics: [
      { id: 'human-heart', name: 'Human Heart', path: 'human-heart', icon: <FaHeart className="text-red-600" /> },
      { id: 'blood-vessels', name: 'Blood Vessels', path: 'vessels', icon: <FaPlug className="text-indigo-600" /> },
      { id: 'lymphatic-system', name: 'Lymphatic system', path: 'lymphatic-system', icon: <FaLeaf className="text-green-600" /> }
    ]
  },
  respiration: {
    name: 'Respiration',
    icon: <FaLungs className="text-cyan-600" />,
    topics: [
      { id: 'respiratory-system', name: 'Human Respiratory System', path: 'respiratory-system', icon: <FaLungs className="text-cyan-600" /> }
    ]
  },
  homeostasis: {
    name: 'Homeostasis',
    icon: <FaWater className="text-blue-600" />,
    topics: [
      { id: 'urinary-system', name: 'Organs of urinary system', path: 'urinary-system', icon: <FaTint className="text-red-600" /> },
      { id: 'kidney', name: 'Homeostasis (kidney specifically)', path: 'kidney', icon: <FaWater className="text-blue-600" /> },
      { id: 'thermoregulation', name: 'Thermoregulation', path: 'thermoregulation', icon: <FaTemperatureHigh className="text-orange-600" /> },
      { id: 'excretion', name: 'Excretion', path: 'excretion', icon: <FaCircleNotch className="text-slate-600" /> }
    ]
  },
  supportMovement: {
    name: 'Support & Movement',
    icon: <FaBone className="text-amber-700" />,
    topics: [
      { id: 'human-skeleton', name: 'Human skeleton', path: 'human-skeleton', icon: <FaBone className="text-amber-700" /> },
      { id: 'muscles', name: 'Muscles', path: 'muscles', icon: <FaRunning className="text-emerald-600" /> },
      { id: 'skeletal-muscles', name: 'Skeletal muscles', path: 'skeletal-muscles', icon: <FaRunning className="text-lime-600" /> },
      { id: 'muscle-contraction', name: 'Muscle contraction', path: 'contraction', icon: <FaWaveSquare className="text-violet-600" /> },
      { id: 'joints', name: 'Joints', path: 'joints', icon: <FaBone className="text-yellow-700" /> },
      { id: 'arthritis', name: 'Arthritis', path: 'arthritis', icon: <FaStethoscope className="text-rose-600" /> }
    ]
  },
  coordination: {
    name: 'Coordination & Control',
    icon: <FaBrain className="text-purple-700" />,
    topics: [
      { id: 'receptors', name: 'Receptors', path: 'receptors', icon: <FaEye className="text-amber-600" /> },
      { id: 'neurons', name: 'Neurons', path: 'neurons', icon: <FaBrain className="text-purple-700" /> },
      { id: 'brain', name: 'Brain', path: 'brain', icon: <FaBrain className="text-indigo-700" /> }
    ]
  },
  humanReproduction: {
    name: 'Human Reproduction',
    icon: <FaHeart className="text-rose-600" />,
    topics: [
      { id: 'reproductive-system', name: 'Human Reproductive system', path: 'reproductive-system', icon: <FaHeart className="text-rose-600" /> },
      { id: 'menstrual-cycle', name: 'Menstrual cycle', path: 'menstrual-cycle', icon: <FaClock className="text-pink-600" /> },
      { id: 'std', name: 'Sexually transmitted diseases', path: 'std', icon: <FaStethoscope className="text-red-600" /> }
    ]
  },
  inheritance: {
    name: 'Inheritance',
    icon: <FaDna className="text-teal-700" />,
    topics: [
      { id: 'mendel-laws', name: 'Mendel\'s laws of Inheritance', path: 'mendel-laws', icon: <FaDna className="text-teal-700" /> },
      { id: 'gene-linkage', name: 'Gene linkage and crossing over', path: 'gene-linkage', icon: <FaMagnet className="text-slate-700" /> },
      { id: 'x-linked', name: 'X-linked Recessive inheritance', path: 'x-linked', icon: <FaDna className="text-cyan-700" /> }
    ]
  },
  evolution: {
    name: 'Evolution',
    icon: <FaSeedling className="text-green-700" />,
    topics: [
      { id: 'evolution-concept', name: 'Concept of Evolution', path: 'evolution-concept', icon: <FaSeedling className="text-green-700" /> },
      { id: 'lamarckism', name: 'Lamarckism', path: 'lamarckism', icon: <FaLeaf className="text-emerald-700" /> },
      { id: 'darwinism', name: 'Darwinism', path: 'darwinism', icon: <FaLeaf className="text-lime-700" /> }
    ]
  },
  immunity: {
    name: 'Immunity',
    icon: <FaStethoscope className="text-emerald-700" />,
    topics: [
      { id: 'defense-mechanism', name: 'Specific Defense Mechanism', path: 'defense-mechanism', icon: <FaStethoscope className="text-emerald-700" /> }
    ]
  },
  biotechnology: {
    name: 'Biotechnology',
    icon: <FaFlask className="text-sky-700" />,
    topics: [
      { id: 'biotech-healthcare', name: 'Biotechnology and Health Care', path: 'biotech-healthcare', icon: <FaFlask className="text-sky-700" /> }
    ]
  }
}

export default function BiologyClient() {
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
    { name: 'Chemistry', href: '/chemistry', color: 'bg-blue-500 hover:bg-blue-600' },
    { name: 'Physics', href: '/physics', color: 'bg-purple-500 hover:bg-purple-600' },
    { name: 'English', href: '/english', color: 'bg-green-500 hover:bg-green-600' },
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
              <h2 className="text-lg font-semibold text-gray-900">Biology Topics</h2>
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
                          href={`/biology/${topic.path}`}
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8 mb-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Biology</h1>
              <p className="text-xl text-blue-100 mb-6">
                Master the fundamental concepts of life sciences for MDCAT success. 
                Comprehensive coverage from cellular biology to human physiology.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <FaBook className="w-5 h-5" />
                  <span>16 Comprehensive Chapters</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <FaChartLine className="w-5 h-5" />
                  <span>Progress Tracking</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <FaUserCheck className="w-5 h-5" />
                  <span>Expert Guidance</span>
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
                <div className="p-3 bg-green-100 rounded-lg">
                  <FaBook className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">16</p>
                  <p className="text-gray-600">Chapters</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FaGraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">150+</p>
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
                  <p className="text-2xl font-bold text-gray-900">1000+</p>
                  <p className="text-gray-600">Practice Questions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Chapters */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Chapters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(TOPIC_CATEGORIES).slice(0, 6).map(([key, category]) => (
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
                <li><Link href="/biology" className="hover:text-white">Biology</Link></li>
                <li><Link href="/chemistry" className="hover:text-white">Chemistry</Link></li>
                <li><Link href="/physics" className="hover:text-white">Physics</Link></li>
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