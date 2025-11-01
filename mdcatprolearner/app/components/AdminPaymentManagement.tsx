'use client'

import { useState, useEffect } from 'react'

// In AdminPaymentManagement.tsx - Update the interface
interface Payment {
  id: number
  userId: number
  amount: number
  paymentType: string
  transactionId: string | null
  status: string
  createdAt: Date  // Change from string to Date
  updatedAt: Date  // Add this if needed
  user: {
    name: string | null
    email: string
  }
}
interface AdminPaymentManagementProps {
  initialPayments: Payment[]
}

export default function AdminPaymentManagement({ initialPayments }: AdminPaymentManagementProps) {
  const [payments, setPayments] = useState<Payment[]>(initialPayments)
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'failed'>('all')
  const [isLoading, setIsLoading] = useState(false)
  const [actionLoadingId, setActionLoadingId] = useState<number | null>(null)

  // Refresh payments data periodically
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch('/api/admin/payments')
        if (response.ok) {
          const data = await response.json()
          setPayments(data.payments || [])
        }
      } catch (error) {
        console.error('Error fetching payments:', error)
      }
    }

    // Fetch initially
    fetchPayments()

    // Set up interval for real-time updates (every 30 seconds)
    const interval = setInterval(fetchPayments, 30000)
    return () => clearInterval(interval)
  }, [])

  const filteredPayments = payments.filter(payment => 
    filter === 'all' ? true : payment.status === filter
  )

  const updatePaymentStatus = async (paymentId: number, newStatus: string, userId: number) => {
    setActionLoadingId(paymentId)
    setIsLoading(true)
    try {
      const response = await fetch('/api/admin/payments', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentId,
          status: newStatus,
          userId
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to update payment status')
      }

      const result = await response.json()

      // Update local state
      setPayments(prev => prev.map(payment =>
        payment.id === paymentId ? { ...payment, status: newStatus } : payment
      ))

      // If payment was approved and user was upgraded to pro, show success message
      if (newStatus === 'completed' && result.userUpgraded) {
        alert('Payment approved and user has been upgraded to Pro!')
      } else {
        alert('Payment status updated successfully!')
      }
    } catch (error) {
      console.error('Error updating payment:', error)
      alert('Failed to update payment status')
    } finally {
      setIsLoading(false)
      setActionLoadingId(null)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border border-green-200'
      case 'pending': return 'bg-yellow-100 text-yellow-800 border border-yellow-200'
      case 'failed': return 'bg-red-100 text-red-800 border border-red-200'
      default: return 'bg-gray-100 text-gray-800 border border-gray-200'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed'
      case 'pending': return 'Pending'
      case 'failed': return 'Failed'
      default: return status
    }
  }

  const getPaymentTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'jazzcash': return 'bg-purple-100 text-purple-800'
      case 'easypaisa': return 'bg-blue-100 text-blue-800'
      case 'bank': return 'bg-green-100 text-green-800'
      case 'card': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  // Calculate statistics
  const stats = {
    total: payments.length,
    pending: payments.filter(p => p.status === 'pending').length,
    completed: payments.filter(p => p.status === 'completed').length,
    failed: payments.filter(p => p.status === 'failed').length,
    totalAmount: payments.filter(p => p.status === 'completed').reduce((sum, p) => sum + p.amount, 0)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Payment Management</h2>
          <p className="text-gray-600 mt-1">Manage and monitor payment transactions</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(['all', 'pending', 'completed', 'failed'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg font-medium capitalize transition-all duration-200 ${
                filter === status
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
              }`}
            >
              {status} 
              <span className="ml-2 bg-white bg-opacity-20 px-2 py-1 rounded-full text-sm">
                {status === 'all' ? payments.length : payments.filter(p => p.status === status).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-lg text-white text-center shadow-lg">
          <div className="text-2xl font-bold">{stats.total}</div>
          <div className="text-blue-100 text-sm">Total Payments</div>
        </div>
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-4 rounded-lg text-white text-center shadow-lg">
          <div className="text-2xl font-bold">{stats.pending}</div>
          <div className="text-yellow-100 text-sm">Pending</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-lg text-white text-center shadow-lg">
          <div className="text-2xl font-bold">{stats.completed}</div>
          <div className="text-green-100 text-sm">Completed</div>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-lg text-white text-center shadow-lg">
          <div className="text-2xl font-bold">{stats.failed}</div>
          <div className="text-red-100 text-sm">Failed</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-lg text-white text-center shadow-lg">
          <div className="text-2xl font-bold">{stats.totalAmount.toLocaleString()} PKR</div>
          <div className="text-purple-100 text-sm">Total Revenue</div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full min-w-[1000px]">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-4 px-4 text-gray-700 font-semibold">User Info</th>
              <th className="text-left py-4 px-4 text-gray-700 font-semibold">Payment Details</th>
              <th className="text-left py-4 px-4 text-gray-700 font-semibold">Transaction</th>
              <th className="text-left py-4 px-4 text-gray-700 font-semibold">Date & Time</th>
              <th className="text-left py-4 px-4 text-gray-700 font-semibold">Status</th>
              <th className="text-left py-4 px-4 text-gray-700 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map((payment) => (
              <tr 
                key={payment.id} 
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150"
              >
                {/* User Information */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {payment.user.name ? payment.user.name.charAt(0).toUpperCase() : 'U'}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">
                        {payment.user.name || 'Unknown User'}
                      </div>
                      <div className="text-sm text-gray-500">{payment.user.email}</div>
                      <div className="text-xs text-gray-400">ID: {payment.userId}</div>
                    </div>
                  </div>
                </td>

                {/* Payment Details */}
                <td className="py-4 px-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPaymentTypeColor(payment.paymentType)}`}>
                        {payment.paymentType}
                      </span>
                    </div>
                    <div className="font-bold text-lg text-green-600">
                      {payment.amount.toLocaleString()} PKR
                    </div>
                  </div>
                </td>

                {/* Transaction ID */}
                <td className="py-4 px-4">
                  <code className="bg-gray-100 px-3 py-2 rounded-lg text-sm font-mono border border-gray-200">
                    {payment.transactionId || 'N/A'}
                  </code>
                </td>

                {/* Date & Time */}
                <td className="py-4 px-4">
                  <div className="text-sm text-gray-700">
                    {new Date(payment.createdAt).toLocaleDateString("en-GB")}
                  
                  </div>
                  <div className="text-xs text-gray-500">
                    {new Date(payment.createdAt).toLocaleTimeString()}
                  </div>
                </td>

                {/* Status */}
                <td className="py-4 px-4">
                  <span className={`px-3 py-2 rounded-full text-sm font-medium ${getStatusColor(payment.status)}`}>
                    {getStatusText(payment.status)}
                  </span>
                </td>

                {/* Actions */}
                <td className="py-4 px-4">
                  {payment.status === 'pending' && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => updatePaymentStatus(payment.id, 'completed', payment.userId)}
                        disabled={isLoading && actionLoadingId === payment.id}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1"
                      >
                        {actionLoadingId === payment.id ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <span>✓</span>
                            <span>Approve</span>
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('Are you sure you want to reject this payment?')) {
                            updatePaymentStatus(payment.id, 'failed', payment.userId)
                          }
                        }}
                        disabled={isLoading && actionLoadingId === payment.id}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1"
                      >
                        <span>✗</span>
                        <span>Reject</span>
                      </button>
                    </div>
                  )}
                  {payment.status === 'completed' && (
                    <div className="text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-medium border border-green-200">
                        ✅ Activated
                      </span>
                    </div>
                  )}
                  {payment.status === 'failed' && (
                    <div className="text-center">
                      <span className="bg-red-100 text-red-800 px-3 py-2 rounded-lg text-sm font-medium border border-red-200">
                        ❌ Rejected
                      </span>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredPayments.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">💳</div>
            <div className="text-gray-500 text-lg font-medium">No payments found</div>
            <div className="text-gray-400 text-sm mt-2">
              {filter === 'all' 
                ? 'No payments have been made yet.'
                : `No ${filter} payments found.`
              }
            </div>
          </div>
        )}
      </div>

      {/* Summary */}
      {filteredPayments.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredPayments.length} of {payments.length} payments
          {filter !== 'all' && ` (filtered by ${filter})`}
        </div>
      )}
    </div>
  )
}