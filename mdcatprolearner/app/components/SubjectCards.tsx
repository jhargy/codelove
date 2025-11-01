'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Subject {
  id: string
  name: string
  description: string
  color: string
  isPro: boolean
  features: string[]
}

interface SubjectCardProps {
  subject: Subject
  isProUser: boolean
  userRole: string
}

export default function SubjectCard({ subject, isProUser, userRole }: SubjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const colorClasses = {
    green: 'from-green-500 to-emerald-600',
    blue: 'from-blue-500 to-cyan-600',
    purple: 'from-purple-500 to-indigo-600',
    red: 'from-red-500 to-pink-600',
    orange: 'from-orange-500 to-amber-600'
  }

  const getSubjectIcon = (subjectName: string) => {
    switch (subjectName.toLowerCase()) {
      case 'biology':
        return '🧬'
      case 'chemistry':
        return '⚗️'
      case 'physics':
        return '⚛️'
      case 'english':
        return '📝'
      case 'logical reasoning':
        return '🧠'
      default:
        return '📚'
    }
  }

  const canAccessSubject = !subject.isPro || isProUser || userRole === 'admin'

  const handleCardClick = () => {
    if (!canAccessSubject) {
      return
    }
    setIsExpanded(!isExpanded)
  }

  const handleTakeTest = (e: React.MouseEvent) => {
    if (!canAccessSubject) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  return (
    <div 
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 ${
        canAccessSubject 
          ? 'border-transparent hover:border-blue-200 cursor-pointer' 
          : 'border-gray-200 opacity-80'
      }`}
    >
      {/* Card Header */}
      <div 
        className={`bg-gradient-to-r ${colorClasses[subject.color as keyof typeof colorClasses]} p-6 text-white relative overflow-hidden`}
        onClick={handleCardClick}
      >
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-3xl">{getSubjectIcon(subject.name)}</span>
            {subject.isPro && (
              <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                PRO
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold mb-2">{subject.name}</h3>
          <p className="text-white/90 text-sm leading-relaxed">{subject.description}</p>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Features List */}
        <div className={`space-y-3 mb-6 transition-all duration-300 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
            Features Included:
          </h4>
          <ul className="space-y-2">
            {subject.features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Access Control */}
        {!canAccessSubject && (
          <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm text-center font-medium">
              Upgrade to Pro to access {subject.name}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-sm font-medium"
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
          </button>
          
          {canAccessSubject ? (
            <Link
              href={`/${subject.id}`}
              onClick={handleTakeTest}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm font-medium text-center shadow-md hover:shadow-lg"
            >
              Take Test
            </Link>
          ) : (
            <Link
              href="/pricing"
              className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 px-4 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 text-sm font-medium text-center shadow-md hover:shadow-lg"
            >
              Upgrade
            </Link>
          )}
        </div>

        {/* Quick Stats */}
        <div className={`grid grid-cols-3 gap-2 mt-4 text-center text-xs transition-all duration-300 ${
          isExpanded ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-blue-50 text-blue-600 py-1 rounded">
            <div className="font-bold">100+</div>
            <div>Questions</div>
          </div>
          <div className="bg-green-50 text-green-600 py-1 rounded">
            <div className="font-bold">10+</div>
            <div>Chapters</div>
          </div>
          <div className="bg-purple-50 text-purple-600 py-1 rounded">
            <div className="font-bold">5+</div>
            <div>Mock Tests</div>
          </div>
        </div>
      </div>

      {/* Progress Bar (Optional) */}
      <div className="px-6 pb-4">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
          <span>Your Progress</span>
          <span>0%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: '0%' }}
          ></div>
        </div>
      </div>
    </div>
  )
}