'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import PaymentModal from './PaymentModal'

// Remove the user prop from the interface since we'll get it from session
interface PaymentButtonProps {
  // No props needed - we get user from session internally
}

export default function PaymentButton({}: PaymentButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()
  const { data: session, status } = useSession()

  // Show loading state while checking authentication
  if (status === 'loading') {
    return (
      <button
        disabled
        className="bg-gray-400 text-white px-8 py-3 rounded-lg font-bold shadow-lg cursor-not-allowed opacity-70"
      >
        Loading...
      </button>
    )
  }

  // If user is not authenticated, show sign in button
  if (!session) {
    return (
      <Link
        href="/auth/signin"
        className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        Sign In to Upgrade
      </Link>
    )
  }

  // If user is authenticated, show upgrade button
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        Upgrade to Pro - 2,000 PKR
      </button>

      {isModalOpen && (
        <PaymentModal 
          onClose={() => setIsModalOpen(false)}
          userId={session.user.id}
          router={router}
        />
      )}
    </>
  )
}