// components/AdminSidebar.tsx
'use client'

import { useState } from 'react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface AdminSidebarProps {
  isOpen: boolean
  onClose: () => void
  activeSection: string
  onSectionChange: (section: string) => void
}

const AdminSidebar = ({ isOpen, onClose, activeSection, onSectionChange }: AdminSidebarProps) => {
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const router = useRouter()

  const menuItems = [
    {
      title: 'Dashboard',
      id: 'dashboard',
      icon: '📊',
      description: 'Platform overview'
    },
    {
      title: 'User Management',
      id: 'users',
      icon: '👥',
      description: 'Manage users & permissions'
    },
    {
      title: 'Payment Management',
      id: 'payments',
      icon: '💳',
      description: 'Review transactions'
    },
    {
      title: 'Analytics',
      id: 'analytics',
      icon: '📈',
      description: 'Platform insights'
    },
    {
      title: 'Settings',
      id: 'settings',
      icon: '⚙️',
      description: 'Configuration'
    },
  ]

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true)
      await signOut({ 
        redirect: false,
        callbackUrl: '/'
      })
      router.push('/')
      router.refresh()
    } catch (error) {
      console.error('Logout error:', error)
      router.push('/')
    } finally {
      setIsLoggingOut(false)
    }
  }

  const handleNavigation = (sectionId: string) => {
    onSectionChange(sectionId)
    onClose() // Close sidebar on mobile after selection
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-80 bg-gray-800 text-white transform
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex flex-col h-full shadow-xl lg:shadow-none
        `}
      >
        {/* Logo/Brand */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Admin Panel</h1>
              <p className="text-sm text-gray-400 mt-1">Management System</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`
                w-full flex items-start p-4 rounded-xl transition-all text-left
                ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105'
                }
              `}
            >
              <span className="text-2xl mr-4 flex-shrink-0">{item.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-lg mb-1">{item.title}</div>
                <div className="text-sm text-gray-400">{item.description}</div>
              </div>
            </button>
          ))}
        </nav>

        {/* User info and logout */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center space-x-3 mb-4 p-3 bg-gray-700 rounded-lg">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">A</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">Admin User</p>
              <p className="text-sm text-gray-400 truncate">Administrator</p>
            </div>
          </div>
          
          <button 
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="w-full px-4 py-3 text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 font-medium"
          >
            {isLoggingOut ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Logging out...</span>
              </>
            ) : (
              <>
                <span className="text-lg">🚪</span>
                <span>Logout</span>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  )
}

export default AdminSidebar