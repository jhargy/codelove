
'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FaSignInAlt, 
  FaFlask, 
  FaDna, 
  FaBook, 
  FaBrain,
  FaComments,
  FaAtom
} from 'react-icons/fa';

interface SubjectNavigationCardProps {
  className?: string;
  currentSubject?: 'biology' | 'chemistry' | 'english' | 'logical-reasoning' | 'physics';
  showCurrentSubject?: boolean;
}

const SubjectNavigationCard: React.FC<SubjectNavigationCardProps> = ({
  className = '',
  currentSubject,
  showCurrentSubject = true
}) => {
  const subjects = [
    {
      name: 'Biology',
      icon: <FaDna className="text-green-500" />,
      path: '/mdcatBiology',
      color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
      textColor: 'text-green-700 dark:text-green-300',
      hoverColor: 'hover:bg-green-100 dark:hover:bg-green-900/30'
    },
    {
      name: 'Chemistry',
      icon: <FaFlask className="text-blue-500" />,
      path: '/mdcat-chemistry',
      color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
      textColor: 'text-blue-700 dark:text-blue-300',
      hoverColor: 'hover:bg-blue-100 dark:hover:bg-blue-900/30'
    },
    {
      name: 'Physics',
      icon: <FaAtom className="text-indigo-500" />,
      path: '/physics',
      color: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800',
      textColor: 'text-indigo-700 dark:text-indigo-300',
      hoverColor: 'hover:bg-indigo-100 dark:hover:bg-indigo-900/30'
    },
    {
      name: 'English',
      icon: <FaBook className="text-purple-500" />,
      path: '/mdcat-english',
      color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
      textColor: 'text-purple-700 dark:text-purple-300',
      hoverColor: 'hover:bg-purple-100 dark:hover:bg-purple-900/30'
    },
    {
      name: 'Logical Reasoning',
      icon: <FaBrain className="text-amber-500" />,
      path: '/mdcat-logical-reasoning',
      color: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800',
      textColor: 'text-amber-700 dark:text-amber-300',
      hoverColor: 'hover:bg-amber-100 dark:hover:bg-amber-900/30'
    }
  ];

  const formatSubjectName = (subject: string): string => {
    return subject
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden ${className}`}>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
          Explore Subjects
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
          Navigate between subjects or join our discussion forum to enhance your preparation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {subjects.map((subject) => {
            const subjectKey = subject.name.toLowerCase().replace(' ', '-') as SubjectNavigationCardProps['currentSubject'];
            const shouldShow = showCurrentSubject || currentSubject !== subjectKey;
            
            if (!shouldShow) return null;

            return (
              <Link
                key={subject.path}
                href={subject.path}
                className={`flex items-center p-3 rounded-lg transition-all ${subject.color} ${subject.textColor} ${subject.hoverColor} border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800`}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-white dark:bg-gray-800 shadow-sm mr-3">
                  {subject.icon}
                </div>
                <span className="font-medium text-sm">{subject.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {currentSubject && showCurrentSubject && (
            <Link
              href={`/quiz/${currentSubject}`}
              className="flex-1 flex items-center justify-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              <FaSignInAlt className="mr-2 text-sm" />
              Take {formatSubjectName(currentSubject)} Quiz
            </Link>
          )}

          <Link
            href="/discussion-forum"
            className="flex-1 flex items-center justify-center px-4 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            <FaComments className="mr-2 text-sm" />
            Join Discussion
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubjectNavigationCard;