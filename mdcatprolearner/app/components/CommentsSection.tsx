'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useParams, usePathname } from 'next/navigation'

interface Comment {
  id: number
  userId: number
  userName: string
  userEmail: string
  content: string
  topicSlug: string
  createdAt: string
  isActive: boolean
  user?: {
    id: number
    name: string | null
    email: string
    role: string
    isPro: boolean
  }
}

interface CommentsSectionProps {
  initialComments?: Comment[]
  topicSlug?: string // Made optional with fallback
}

export default function CommentsSection({ initialComments = [], topicSlug }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [newComment, setNewComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { data: session } = useSession()
  
  // Get topic from URL params as fallback
  const params = useParams()
  const pathname = usePathname()
  
  // Determine the topic slug with fallbacks
  const resolvedTopicSlug = topicSlug || 
                           params.topic as string || 
                           params.slug as string ||
                           generateSlugFromPath(pathname)

  function generateSlugFromPath(path: string): string {
    // Extract slug from path like /biology/cell-structure -> cell-structure
    const segments = path.split('/').filter(segment => segment)
    return segments[segments.length - 1] || 'general-discussion'
  }

  // Debug: Log the resolved topic slug
  useEffect(() => {
    console.log('🔧 Resolved topic slug:', {
      provided: topicSlug,
      fromParams: params.topic,
      fromPath: pathname,
      final: resolvedTopicSlug
    })
  }, [topicSlug, params.topic, pathname, resolvedTopicSlug])

  // Fetch comments when resolvedTopicSlug changes
  useEffect(() => {
    if (resolvedTopicSlug) {
      fetchComments()
    }
  }, [resolvedTopicSlug])

  const fetchComments = async () => {
    if (!resolvedTopicSlug) {
      console.error('❌ No topic slug available for fetching comments')
      setIsLoading(false)
      return
    }

    try {
      console.log('📥 Fetching comments for topic:', resolvedTopicSlug)
      const response = await fetch(`/api/comments?topicSlug=${encodeURIComponent(resolvedTopicSlug)}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      if (data.success) {
        setComments(data.comments || [])
        console.log('✅ Loaded comments:', data.comments?.length || 0)
      } else {
        console.error('❌ API returned error:', data.error)
      }
    } catch (error) {
      console.error('❌ Error fetching comments:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('🔄 Submit button clicked')
    
    // Validation
    if (!newComment.trim()) {
      alert('Please enter a comment')
      return
    }

    if (!session) {
      alert('Please login to post comments')
      return
    }

    if (!session.user?.email) {
      alert('User email not found. Please login again.')
      return
    }

    if (!resolvedTopicSlug) {
      alert('Unable to determine topic. Please refresh the page or contact support.')
      return
    }

    setIsSubmitting(true)

    try {
      console.log('📨 Preparing to send comment with topic:', resolvedTopicSlug)

      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: newComment.trim(),
          topicSlug: resolvedTopicSlug,
        }),
      })

      console.log('📨 Response status:', response.status)

      let data
      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        data = await response.json()
      } else {
        const text = await response.text()
        console.error('❌ Non-JSON response:', text.substring(0, 200))
        throw new Error('Server returned unexpected response. Please try again.')
      }

      console.log('📨 API Response data:', data)

      if (!response.ok) {
        throw new Error(data.error || `Failed to post comment (${response.status})`)
      }

      if (!data.success) {
        throw new Error(data.error || 'Comment submission failed')
      }

      // Success
      setComments(prev => [data.comment, ...prev])
      setNewComment('')
      
      console.log('✅ Comment posted successfully!')
      alert('Comment posted successfully!')
      
    } catch (error: any) {
      console.error('❌ Comment submission error:', error)
      alert(`Failed to post comment: ${error.message}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getAvatarUrl = (email: string, name: string) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=150`
  }

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Discussion & Questions
          </h2>
          <p className="text-lg text-gray-600">
            Ask questions and discuss this topic with other students
          </p>
          
          {/* Debug info */}
          <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-sm text-blue-800 space-y-1">
              <div><strong>Topic:</strong> {resolvedTopicSlug || 'Not detected'}</div>
              <div><strong>Status:</strong> {session ? `Logged in as ${session.user?.name}` : 'Not logged in'}</div>
              <div><strong>Comments:</strong> {comments.length} loaded</div>
            </div>
          </div>
        </div>

        {/* Comment Form */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Join the Discussion
          </h3>
          
          {!resolvedTopicSlug ? (
            <div className="text-center py-4 text-red-600">
              <p>Topic information missing. Please refresh the page or navigate to a specific topic.</p>
            </div>
          ) : !session ? (
            <div className="text-center py-6">
              <p className="text-gray-600 mb-4">Please login to post comments</p>
              <button 
                onClick={() => window.location.href = '/auth/signin'}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitComment} className="space-y-4">
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Comment or Question
                </label>
                <textarea
                  id="comment"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Ask a question about this topic or share your thoughts..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                  required
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Posting to: <strong>{resolvedTopicSlug}</strong>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || !newComment.trim() || !resolvedTopicSlug}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed min-w-32"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Posting...
                    </span>
                  ) : (
                    'Post Comment'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Rest of the component remains the same */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Recent Comments ({comments.length})
          </h3>

          {isLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-600 mt-2">Loading comments...</p>
            </div>
          ) : comments.length > 0 ? (
            comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <img
                    src={getAvatarUrl(comment.userEmail, comment.userName)}
                    alt={comment.userName}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">{comment.userName}</h4>
                        <p className="text-gray-500 text-xs">{comment.userEmail}</p>
                        {comment.user?.isPro && (
                          <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full mt-1">
                            PRO
                          </span>
                        )}
                      </div>
                      <span className="text-gray-400 text-xs">
                        {formatDate(comment.createdAt)}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{comment.content}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-3">💬</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">No Comments Yet</h4>
              <p className="text-gray-600">Be the first to start the discussion!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}