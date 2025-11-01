'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface PaymentModalProps {
  onClose: () => void
  userId: string
  router: ReturnType<typeof useRouter>
}

export default function PaymentModal({ onClose, userId, router }: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<'bank' | 'easypaisa' | 'jazzcash' | null>(null)
  const [transactionId, setTransactionId] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const paymentMethods = {
    bank: {
      name: 'Bank Account',
      details: {
        'Bank Name': 'UBL',
        'Account Title': 'Abdul Rauf',
        'Account No.': '44455555555',
        'IBAN No.': 'PK36UNIL010900044455555555'
      },
      transactionPlaceholder: 'Enter bank transaction ID/reference number'
    },
    easypaisa: {
      name: 'EasyPaisa',
      details: {
        'Account Number': '0307 0169442',
        'Account Name': 'Abdul Rauf',
        'CNIC': '12345-6789012-3'
      },
      transactionPlaceholder: 'Enter EasyPaisa transaction ID'
    },
    jazzcash: {
      name: 'JazzCash',
      details: {
        'Account Number': '0307 0169442',
        'Account Name': 'Abdul Rauf',
        'CNIC': '12345-6789012-3'
      },
      transactionPlaceholder: 'Enter JazzCash transaction ID'
    }
  }

  const handleSubmit = async () => {
    if (!selectedMethod || !transactionId.trim()) {
      alert('Please select payment method and enter Transaction ID')
      return
    }

    setIsSubmitting(true)

    try {
      console.log('🔄 Submitting payment:', {
        userId: parseInt(userId),
        paymentType: selectedMethod,
        transactionId: transactionId.trim(),
        amount: 2000
      })

      const response = await fetch('/api/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: parseInt(userId),
          paymentType: selectedMethod,
          transactionId: transactionId.trim(),
          amount: 2000
        }),
      })

      const data = await response.json()
      console.log('📨 API Response:', data)

      if (!response.ok) {
        throw new Error(data.error || 'Payment submission failed')
      }

      // Show success message
      alert('✅ Payment submitted successfully! Please send payment proof to WhatsApp for verification. Your account will be activated within 24 hours.')
      
      // Close modal and refresh the page
      onClose()
      router.refresh()
      
    } catch (error: any) {
      console.error('❌ Payment error:', error)
      alert(error.message || 'Failed to submit payment. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Reset form when payment method changes
  const handleMethodChange = (method: 'bank' | 'easypaisa' | 'jazzcash') => {
    setSelectedMethod(method)
    setTransactionId('')
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md max-h-[95vh] overflow-y-auto">
        {/* Header - Mobile Optimized */}
        <div className="p-4 sm:p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">Complete Payment</h2>
              <p className="text-sm text-gray-600 mt-1">Amount: <strong>2,000 PKR</strong></p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Payment Methods - Mobile Optimized */}
        <div className="p-4 sm:p-6 space-y-3">
          <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Select Payment Method:</h3>
          
          {Object.entries(paymentMethods).map(([key, method]) => (
            <div key={key} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => handleMethodChange(key as any)}
                className={`w-full p-3 sm:p-4 text-left transition-colors ${
                  selectedMethod === key ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800 text-sm sm:text-base">{method.name}</span>
                  <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 ${
                    selectedMethod === key 
                      ? 'bg-blue-600 border-blue-600' 
                      : 'border-gray-300'
                  }`}>
                    {selectedMethod === key && (
                      <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white mx-auto mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
              </button>

              {/* Payment Details - Show when method is selected */}
              {selectedMethod === key && (
                <div className="p-3 sm:p-4 bg-gray-50 border-t border-gray-200 space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Payment Details:</h4>
                    <div className="space-y-1 sm:space-y-2 bg-white rounded-lg p-3 border border-gray-200">
                      {Object.entries(method.details).map(([label, value]) => (
                        <div key={label} className="flex justify-between items-start">
                          <span className="text-gray-600 text-xs sm:text-sm">{label}:</span>
                          <span className="font-medium text-gray-800 text-xs sm:text-sm text-right break-all ml-2">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Transaction ID Input - FIXED STYLING */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Transaction ID / Reference Number *
                    </label>
                    <input
                      type="text"
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      placeholder={method.transactionPlaceholder}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base text-gray-900 bg-white placeholder-gray-500"
                      required
                      autoFocus
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Enter the transaction ID or reference number from your payment receipt
                    </p>
                  </div>

                  {/* Payment Instructions */}
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <p className="text-xs text-blue-700 leading-relaxed">
                      <strong>Note:</strong> After payment, send transaction screenshot to WhatsApp: 
                      <strong className="block mt-1">923070169442</strong>
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Important Instructions - Mobile Optimized */}
        <div className="p-4 sm:p-6 bg-yellow-50 border-t border-yellow-200">
          <h4 className="font-semibold text-yellow-800 mb-2 text-sm sm:text-base">Important Instructions:</h4>
          <ul className="text-xs sm:text-sm text-yellow-700 space-y-1">
            <li>• Transfer exactly <strong>2,000 PKR</strong></li>
            <li>• Save transaction screenshot</li>
            <li>• Enter <strong>Transaction ID</strong> above</li>
            <li>• Send proof to WhatsApp: <strong>923070169442</strong></li>
            <li>• Activation within 24 hours after verification</li>
          </ul>
        </div>

        {/* Action Buttons - Mobile Optimized */}
        <div className="p-4 sm:p-6 border-t border-gray-200 flex flex-col sm:flex-row gap-2 sm:gap-3 sticky bottom-0 bg-white">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm sm:text-base"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selectedMethod || !transactionId.trim() || isSubmitting}
            className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm">Submitting...</span>
              </div>
            ) : (
              'Confirm Payment'
            )}
          </button>
        </div>

        {/* Form Status - Mobile Optimized */}
        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
          <div className="text-xs text-gray-500 text-center">
            {!selectedMethod && '⏳ Select payment method'}
            {selectedMethod && !transactionId.trim() && '⏳ Enter transaction ID to continue'}
            {selectedMethod && transactionId.trim() && '✅ Ready to submit payment'}
          </div>
        </div>
      </div>
    </div>
  )
}