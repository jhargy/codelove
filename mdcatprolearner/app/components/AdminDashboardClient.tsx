// components/AdminDashboardClient.tsx
'use client'

import { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import AdminStats from './AdminStats'
import UserManagement from './UserManagement'
import AdminPaymentManagement from './AdminPaymentManagement'

interface AdminDashboardClientProps {
  data: any
  session: any
}

export default function AdminDashboardClient({ data, session }: AdminDashboardClientProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('dashboard')

  // Safe session data extraction
  const userName = session?.user?.name || session?.user?.email?.split('@')[0] || 'Admin'
  const userInitial = userName.charAt(0).toUpperCase()

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Platform Overview</h2>
              <AdminStats />
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">User Management</h2>
              <UserManagement />
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Management</h2>
              <AdminPaymentManagement initialPayments={data.payments} />
            </section>

            {/* Quick Stats */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <span className="text-2xl">👥</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total Users</p>
                      <p className="text-2xl font-bold text-gray-900">{data.stats.totalUsers}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                  <div className="flex items-center">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Pro Users</p>
                      <p className="text-2xl font-bold text-gray-900">{data.stats.proUsers}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                  <div className="flex items-center">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <span className="text-2xl">💳</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total Payments</p>
                      <p className="text-2xl font-bold text-gray-900">{data.userStats.totalPayments}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                  <div className="flex items-center">
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      <span className="text-2xl">⏳</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Pending Payments</p>
                      <p className="text-2xl font-bold text-gray-900">{data.userStats.pendingPayments}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
      
      case 'users':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">User Management</h2>
            <UserManagement />
          </div>
        )
      
      case 'payments':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Management</h2>
            <AdminPaymentManagement initialPayments={data.payments} />
          </div>
        )
      
      case 'analytics':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Analytics</h2>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600">Advanced analytics features coming soon...</p>
            </div>
          </div>
        )
      
      case 'settings':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Platform Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-medium">Maintenance Mode</p>
                    <p className="text-sm text-gray-600">Put the platform in maintenance mode</p>
                  </div>
                  <button className="bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium">
                    Disabled
                  </button>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-gray-600">Send email notifications to users</p>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Enabled
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      
      default:
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
            <AdminStats />
          </div>
        )
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 mr-4"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-2xl font-semibold text-gray-800 capitalize">
                {activeSection === 'dashboard' ? 'Admin Dashboard' : activeSection.replace('-', ' ')}
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{userName}</p>
                <p className="text-sm text-gray-500">Administrator</p>
              </div>
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {userInitial}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}