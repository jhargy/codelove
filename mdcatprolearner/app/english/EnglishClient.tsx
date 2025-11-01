// app/english/EnglishClient.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  FaBook,
  FaLink,
  FaPenAlt,
  FaSearch,
  FaLightbulb,
  FaSpellCheck,
  FaQuoteRight,
  FaParagraph,
  FaListOl,
  FaSyncAlt,
  FaPuzzlePiece,
  FaChartLine,
  FaUserCheck,
  FaTimes,
  FaBars,
  FaChevronDown,
  FaChevronRight,
  FaGraduationCap,
  FaLanguage,
  FaFileWord,
  FaEdit,
  FaHeadphones,
  FaMicrophone,
  FaGlobe,
  FaClock,
  FaCheckCircle,
  FaExclamationTriangle
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
  description: string
  topics: Topic[]
}

const TOPIC_CATEGORIES: Record<string, TopicCategory> = {
  // 1) Grammar and Usage
  grammar: {
    name: 'Grammar and Usage',
    icon: <FaPenAlt className="text-blue-600" />,
    description: 'Master essential grammar rules and proper usage for accurate communication',
    topics: [
      { 
        id: 'tenses', 
        name: 'Tenses and Their Usage', 
        path: 'tenses', 
        icon: <FaClock className="text-purple-600" />,
        description: 'Present, past, future tenses with practical applications'
      },
      { 
        id: 'parts-of-speech', 
        name: 'Parts of Speech', 
        path: 'parts-of-speech', 
        icon: <FaLanguage className="text-indigo-600" />,
        description: 'Nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, interjections'
      },
      { 
        id: 'subject-verb-agreement', 
        name: 'Subject-Verb Agreement', 
        path: 'subject-verb-agreement', 
        icon: <FaCheckCircle className="text-green-600" />,
        description: 'Rules for matching subjects with appropriate verb forms'
      },
      { 
        id: 'articles', 
        name: 'Articles (a, an, the)', 
        path: 'articles', 
        icon: <FaFileWord className="text-teal-600" />,
        description: 'Definite and indefinite articles with contextual usage'
      },
      { 
        id: 'prepositions', 
        name: 'Prepositions and Their Usage', 
        path: 'prepositions', 
        icon: <FaGlobe className="text-orange-600" />,
        description: 'Time, place, and direction prepositions with examples'
      },
      { 
        id: 'conjunctions', 
        name: 'Conjunctions and Connectives', 
        path: 'conjunctions', 
        icon: <FaLink className="text-pink-600" />,
        description: 'Coordinating, subordinating, and correlative conjunctions'
      },
      { 
        id: 'modals', 
        name: 'Modal Auxiliaries', 
        path: 'modals', 
        icon: <FaExclamationTriangle className="text-yellow-600" />,
        description: 'Can, could, may, might, must, shall, should, will, would'
      },
      { 
        id: 'voice', 
        name: 'Active and Passive Voice', 
        path: 'voice', 
        icon: <FaSyncAlt className="text-cyan-600" />,
        description: 'Transformation between active and passive voice constructions'
      },
      { 
        id: 'direct-indirect', 
        name: 'Direct and Indirect Speech', 
        path: 'direct-indirect', 
        icon: <FaQuoteRight className="text-red-600" />,
        description: 'Narration changes with tense and pronoun adjustments'
      },
      { 
        id: 'conditionals', 
        name: 'Conditional Sentences', 
        path: 'conditionals', 
        icon: <FaPuzzlePiece className="text-blue-600" />,
        description: 'Zero, first, second, third, and mixed conditionals'
      }
    ]
  },

  // 2) Sentence Structure
  sentenceStructure: {
    name: 'Sentence Structure',
    icon: <FaEdit className="text-green-600" />,
    description: 'Understand sentence formation, types, and correction techniques',
    topics: [
      { 
        id: 'sentence-types', 
        name: 'Types of Sentences', 
        path: 'sentence-types', 
        icon: <FaListOl className="text-indigo-600" />,
        description: 'Declarative, interrogative, imperative, exclamatory sentences'
      },
      { 
        id: 'sentence-correction', 
        name: 'Sentence Correction', 
        path: 'sentence-correction', 
        icon: <FaSpellCheck className="text-red-600" />,
        description: 'Identifying and correcting common sentence errors'
      },
      { 
        id: 'sentence-completion', 
        name: 'Sentence Completion', 
        path: 'sentence-completion', 
        icon: <FaCheckCircle className="text-green-600" />,
        description: 'Completing sentences with appropriate words and phrases'
      },
      { 
        id: 'phrase-clause', 
        name: 'Phrases and Clauses', 
        path: 'phrase-clause', 
        icon: <FaParagraph className="text-purple-600" />,
        description: 'Understanding sentence components and their functions'
      },
      { 
        id: 'parallelism', 
        name: 'Parallel Structure', 
        path: 'parallelism', 
        icon: <FaChartLine className="text-teal-600" />,
        description: 'Maintaining parallel structure in sentences and lists'
      }
    ]
  },

  // 3) Vocabulary
  vocabulary: {
    name: 'Vocabulary Building',
    icon: <FaLanguage className="text-purple-600" />,
    description: 'Expand your word power with synonyms, antonyms, and contextual usage',
    topics: [
      { 
        id: 'synonyms', 
        name: 'Synonyms', 
        path: 'synonyms', 
        icon: <FaSyncAlt className="text-blue-600" />,
        description: 'Words with similar meanings and contextual differences'
      },
      { 
        id: 'antonyms', 
        name: 'Antonyms', 
        path: 'antonyms', 
        icon: <FaSyncAlt className="text-red-600" />,
        description: 'Words with opposite meanings and their usage'
      },
      { 
        id: 'one-word-substitution', 
        name: 'One Word Substitution', 
        path: 'one-word-substitution', 
        icon: <FaFileWord className="text-green-600" />,
        description: 'Replacing phrases with single appropriate words'
      },
      { 
        id: 'idioms-phrases', 
        name: 'Idioms and Phrases', 
        path: 'idioms-phrases', 
        icon: <FaQuoteRight className="text-orange-600" />,
        description: 'Common English idioms and their meanings'
      },
      { 
        id: 'analogies', 
        name: 'Analogies', 
        path: 'analogies', 
        icon: <FaPuzzlePiece className="text-indigo-600" />,
        description: 'Word relationships and analogical reasoning'
      },
      { 
        id: 'word-formation', 
        name: 'Word Formation', 
        path: 'word-formation', 
        icon: <FaEdit className="text-teal-600" />,
        description: 'Prefixes, suffixes, and root words'
      },
      { 
        id: 'confusables', 
        name: 'Commonly Confused Words', 
        path: 'confusables', 
        icon: <FaExclamationTriangle className="text-yellow-600" />,
        description: 'Words that are frequently misused or confused'
      },
      { 
        id: 'academic-vocabulary', 
        name: 'Academic Vocabulary', 
        path: 'academic-vocabulary', 
        icon: <FaGraduationCap className="text-purple-600" />,
        description: 'Essential vocabulary for academic and medical contexts'
      }
    ]
  },

  // 4) Reading Comprehension
  comprehension: {
    name: 'Reading Comprehension',
    icon: <FaBook className="text-indigo-600" />,
    description: 'Develop skills to understand, analyze, and interpret written passages',
    topics: [
      { 
        id: 'passage-analysis', 
        name: 'Passage Analysis', 
        path: 'passage-analysis', 
        icon: <FaSearch className="text-blue-600" />,
        description: 'Techniques for analyzing and understanding complex passages'
      },
      { 
        id: 'inference', 
        name: 'Making Inferences', 
        path: 'inference', 
        icon: <FaLightbulb className="text-yellow-600" />,
        description: 'Drawing conclusions from implied information'
      },
      { 
        id: 'main-idea', 
        name: 'Main Idea and Theme', 
        path: 'main-idea', 
        icon: <FaParagraph className="text-green-600" />,
        description: 'Identifying central themes and main ideas in passages'
      },
      { 
        id: 'detail-questions', 
        name: 'Detail-Based Questions', 
        path: 'detail-questions', 
        icon: <FaListOl className="text-purple-600" />,
        description: 'Answering questions based on specific passage details'
      },
      { 
        id: 'vocabulary-context', 
        name: 'Vocabulary in Context', 
        path: 'vocabulary-context', 
        icon: <FaLanguage className="text-orange-600" />,
        description: 'Understanding word meanings from contextual clues'
      },
      { 
        id: 'tone-purpose', 
        name: 'Tone and Purpose', 
        path: 'tone-purpose', 
        icon: <FaEdit className="text-red-600" />,
        description: 'Identifying author\'s tone, style, and purpose'
      },
      { 
        id: 'critical-reasoning', 
        name: 'Critical Reasoning', 
        path: 'critical-reasoning', 
        icon: <FaPuzzlePiece className="text-indigo-600" />,
        description: 'Evaluating arguments and logical reasoning in passages'
      }
    ]
  },

  // 5) Writing Skills
  writing: {
    name: 'Writing Skills',
    icon: <FaPenAlt className="text-teal-600" />,
    description: 'Enhance your writing abilities for effective communication',
    topics: [
      { 
        id: 'paragraph-writing', 
        name: 'Paragraph Writing', 
        path: 'paragraph-writing', 
        icon: <FaParagraph className="text-blue-600" />,
        description: 'Structuring coherent and well-organized paragraphs'
      },
      { 
        id: 'essay-writing', 
        name: 'Essay Writing Techniques', 
        path: 'essay-writing', 
        icon: <FaEdit className="text-green-600" />,
        description: 'Planning, organizing, and writing effective essays'
      },
      { 
        id: 'summary-writing', 
        name: 'Summary Writing', 
        path: 'summary-writing', 
        icon: <FaFileWord className="text-purple-600" />,
        description: 'Condensing information while maintaining key points'
      },
      { 
        id: 'precis-writing', 
        name: 'Precis Writing', 
        path: 'precis-writing', 
        icon: <FaSearch className="text-indigo-600" />,
        description: 'Writing concise summaries of longer passages'
      },
      { 
        id: 'letter-writing', 
        name: 'Formal and Informal Letters', 
        path: 'letter-writing', 
        icon: <FaPenAlt className="text-orange-600" />,
        description: 'Format and content for different types of letters'
      },
      { 
        id: 'punctuation', 
        name: 'Punctuation Rules', 
        path: 'punctuation', 
        icon: <FaCheckCircle className="text-red-600" />,
        description: 'Proper use of commas, periods, semicolons, and other marks'
      }
    ]
  },

  // 6) Verbal Ability
  verbalAbility: {
    name: 'Verbal Ability',
    icon: <FaMicrophone className="text-orange-600" />,
    description: 'Develop skills for effective verbal communication and expression',
    topics: [
      { 
        id: 'word-usage', 
        name: 'Appropriate Word Usage', 
        path: 'word-usage', 
        icon: <FaLanguage className="text-blue-600" />,
        description: 'Selecting the most appropriate words in context'
      },
      { 
        id: 'sentence-rearrangement', 
        name: 'Sentence Rearrangement', 
        path: 'sentence-rearrangement', 
        icon: <FaSyncAlt className="text-green-600" />,
        description: 'Organizing jumbled sentences into coherent paragraphs'
      },
      { 
        id: 'error-spotting', 
        name: 'Error Spotting', 
        path: 'error-spotting', 
        icon: <FaExclamationTriangle className="text-red-600" />,
        description: 'Identifying grammatical and contextual errors'
      },
      { 
        id: 'fill-blanks', 
        name: 'Fill in the Blanks', 
        path: 'fill-blanks', 
        icon: <FaPuzzlePiece className="text-purple-600" />,
        description: 'Completing sentences with appropriate words'
      },
      { 
        id: 'parajumbles', 
        name: 'Paragraph Jumbles', 
        path: 'parajumbles', 
        icon: <FaListOl className="text-indigo-600" />,
        description: 'Arranging sentences in logical sequence'
      }
    ]
  },

  // 7) Practice and Mock Tests
  practice: {
    name: 'Practice and Mock Tests',
    icon: <FaChartLine className="text-red-600" />,
    description: 'Test your knowledge with practice exercises and full-length tests',
    topics: [
      { 
        id: 'grammar-practice', 
        name: 'Grammar Practice Sets', 
        path: 'grammar-practice', 
        icon: <FaPenAlt className="text-blue-600" />,
        description: 'Comprehensive grammar exercises with explanations'
      },
      { 
        id: 'vocabulary-tests', 
        name: 'Vocabulary Tests', 
        path: 'vocabulary-tests', 
        icon: <FaLanguage className="text-purple-600" />,
        description: 'Word knowledge assessment and building exercises'
      },
      { 
        id: 'comprehension-practice', 
        name: 'Comprehension Practice', 
        path: 'comprehension-practice', 
        icon: <FaBook className="text-green-600" />,
        description: 'Reading passages with questions and detailed solutions'
      },
      { 
        id: 'full-length-tests', 
        name: 'Full-Length Mock Tests', 
        path: 'full-length-tests', 
        icon: <FaClock className="text-orange-600" />,
        description: 'Complete MDCAT English section simulations'
      },
      { 
        id: 'previous-papers', 
        name: 'Previous Year Papers', 
        path: 'previous-papers', 
        icon: <FaFileWord className="text-indigo-600" />,
        description: 'Actual MDCAT English questions from past years'
      },
      { 
        id: 'time-management', 
        name: 'Time Management Strategies', 
        path: 'time-management', 
        icon: <FaClock className="text-teal-600" />,
        description: 'Techniques for efficient time utilization in exams'
      }
    ]
  }
}

export default function EnglishClient() {
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
    { name: 'Logical Reasoning', href: '/logical-reasoning', color: 'bg-orange-500 hover:bg-orange-600' },
  ]

  const quickStats = [
    { number: '7', label: 'Comprehensive Sections', icon: <FaBook className="w-6 h-6" />, color: 'text-blue-600' },
    { number: '45+', label: 'Detailed Topics', icon: <FaLanguage className="w-6 h-6" />, color: 'text-green-600' },
    { number: '1000+', label: 'Practice Questions', icon: <FaPenAlt className="w-6 h-6" />, color: 'text-purple-600' },
    { number: '20+', label: 'Mock Tests', icon: <FaChartLine className="w-6 h-6" />, color: 'text-orange-600' }
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
          overflow-y-auto max-h-screen
        `}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">English Topics</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-1 rounded-md text-gray-400 hover:text-gray-600"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
              {Object.entries(TOPIC_CATEGORIES).map(([key, category]) => (
                <div key={key} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleCategory(key)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {category.icon}
                      <div className="text-left">
                        <span className="font-medium text-gray-900 text-sm block">{category.name}</span>
                        <span className="text-xs text-gray-500">{category.topics.length} topics</span>
                      </div>
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
                          href={`/english/${topic.path}`}
                          className="flex items-start space-x-3 p-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors group"
                          onClick={() => setSidebarOpen(false)}
                        >
                          {topic.icon}
                          <div>
                            <div className="font-medium group-hover:text-blue-600">{topic.name}</div>
                            {topic.description && (
                              <div className="text-xs text-gray-500 mt-1">{topic.description}</div>
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
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white p-8 mb-8">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-3 mb-4">
                <FaLanguage className="w-8 h-8" />
                <h1 className="text-4xl md:text-5xl font-bold">English</h1>
              </div>
              <p className="text-xl text-blue-100 mb-6">
                Master English language skills for MDCAT 2025 with comprehensive grammar, 
                vocabulary, and comprehension modules as per PMDC syllabus.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <FaBook className="w-5 h-5" />
                  <span>PMDC Syllabus 2025</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <FaChartLine className="w-5 h-5" />
                  <span>Comprehensive Coverage</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <FaUserCheck className="w-5 h-5" />
                  <span>Expert Guidance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className={`${stat.color} mb-3 flex justify-center`}>
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold text-gray-900">{stat.number}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
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

          {/* Key Focus Areas */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Focus Areas for MDCAT 2025</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Grammar Mastery</h3>
                <p className="text-gray-600 text-sm">Comprehensive coverage of tenses, voice, speech, and sentence structure</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Vocabulary Building</h3>
                <p className="text-gray-600 text-sm">Synonyms, antonyms, idioms, and academic vocabulary enhancement</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Reading Skills</h3>
                <p className="text-gray-600 text-sm">Comprehension strategies and critical reasoning development</p>
              </div>
            </div>
          </div>

          {/* Featured Sections */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Learning Sections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(TOPIC_CATEGORIES).slice(0, 6).map(([key, category]) => (
                <div key={key} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    {category.icon}
                    <h3 className="font-semibold text-gray-900">{category.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {category.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{category.topics.length} topics</span>
                    <button
                      onClick={() => toggleCategory(key)}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Explore →
                    </button>
                  </div>
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
                <li><Link href="/english" className="hover:text-white">English</Link></li>
                <li><Link href="/biology" className="hover:text-white">Biology</Link></li>
                <li><Link href="/chemistry" className="hover:text-white">Chemistry</Link></li>
                <li><Link href="/physics" className="hover:text-white">Physics</Link></li>
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