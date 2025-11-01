'use client'

import { useState, useEffect, useRef } from 'react'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const { data: session } = useSession()
  const pathname = usePathname()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth >= 1024) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobile])

  const menuItems = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: '📊',
      current: pathname === '/dashboard'
    },
    {
      name: 'Results',
      href: '/dashboard/results',
      icon: '📈',
      current: pathname === '/dashboard/results'
    },
    {
      name: 'MDCAT',
      href: '/mdcat',
      icon: '🎯',
      current: pathname.startsWith('/mdcat')
    },
    // In the menuItems array, add:

  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: '📊',
    current: pathname === '/dashboard'
  },
  {
    name: 'Results',
    href: '/dashboard/results',
    icon: '📈',
    current: pathname === '/dashboard/results'
  },
  {
    name: 'MDCAT',
    href: '/mdcat',
    icon: '🎯',
    current: pathname.startsWith('/mdcat')
  },
  {
    name: 'Mock Tests', // NEW LINK
    href: '/mock-test',
    icon: '🧪',
    current: pathname.startsWith('/mock-test')
  },

  ]

  return (
    <>
      {/* Mobile toggle button */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 bg-blue-600 text-white p-3 rounded-lg shadow-lg lg:hidden hover:bg-blue-700 transition-colors"
          aria-label="Toggle sidebar"
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}></div>
          <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}></div>
        </button>
      )}

      {/* Overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <Link href="/" className="flex items-center space-x-2 mb-6">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white px-2 py-1 rounded-lg">
              <span className="text-lg font-bold">M</span>
            </div>
            <span className="text-xl font-bold text-gray-800">
              DCAT<span className="text-blue-600">Pro</span>
            </span>
          </Link>
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 truncate">{session?.user?.name}</p>
              <p className="text-xs text-gray-500 capitalize">{session?.user?.role}</p>
              <p className="text-xs text-blue-600 font-medium">
                {session?.user?.isPro ? 'Pro Member' : 'Free Account'}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 flex-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => isMobile && setIsOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
                item.current
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600 hover:shadow-sm'
              }`}
            >
              <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
              {item.current && (
                <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Upgrade Section */}
        {!session?.user?.isPro && (
          <div className="p-4 mt-4">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-4 text-white text-center shadow-lg">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-purple-700 text-sm font-bold">⚡</span>
              </div>
              <p className="text-sm font-semibold mb-1">Upgrade to Pro</p>
              <p className="text-xs text-purple-100 mb-3 opacity-90">
                Unlock all subjects, advanced analytics, and premium features
              </p>
              <Link
                href="/pricing"
                onClick={() => isMobile && setIsOpen(false)}
                className="block w-full bg-white text-purple-600 py-2 px-3 rounded text-sm font-bold hover:bg-gray-100 transition-colors shadow-md"
              >
                Upgrade Now
              </Link>
            </div>
          </div>
        )}

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="flex items-center space-x-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-300 group"
          >
            <span className="text-lg group-hover:scale-110 transition-transform">🚪</span>
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}