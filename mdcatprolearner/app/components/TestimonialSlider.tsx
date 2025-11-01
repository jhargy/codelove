'use client'

import { useState, useEffect } from 'react'

interface Testimonial {
  id: number
  name: string
  content: string
  score: string
  avatar: string
  college?: string
}

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ayesha Khan",
      score: "92%",
      college: "King Edward Medical University",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "MDCAT Pro helped me secure admission in King Edward Medical University. The practice tests were exactly like the actual exam! The biology section was incredibly detailed."
    },
    {
      id: 2,
      name: "Ali Ahmed",
      score: "89%",
      college: "Allama Iqbal Medical College",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The chemistry explanations are so clear. Finally understood organic chemistry! The platform's structured approach made difficult concepts easy to grasp."
    },
    {
      id: 3,
      name: "Fatima Raza",
      score: "95%",
      college: "Aga Khan Medical College",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "As a repeater, I can confidently say this platform is miles ahead of others. Got into Aga Khan Medical College! The mock tests were incredibly helpful."
    },
    {
      id: 4,
      name: "Usman Sheikh",
      score: "87%",
      college: "Rawalpindi Medical University",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The logical reasoning section was a game-changer. It improved my analytical skills significantly. The question patterns were very similar to the actual MDCAT."
    },
    {
      id: 5,
      name: "Sara Javed",
      score: "91%",
      college: "Services Institute of Medical Sciences",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      content: "Chemistry was always my weak point, but MDCAT Pro's structured approach made it my strongest subject. The video explanations were particularly helpful."
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after manual navigation
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Success Stories from Our Students
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of medical students who achieved their dreams with MDCAT Pro
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-blue-100 text-6xl">
              "
            </div>
            
            <div className="relative z-10">
              {/* Content */}
              <div className="text-center mb-8">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-6">
                  "{testimonials[currentIndex].content}"
                </p>
                
                {/* Rating Stars */}
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* User Info */}
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg mb-4"
                />
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-800">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-blue-600 font-semibold mb-1">
                    {testimonials[currentIndex].score} Score
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentIndex].college}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-12">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">1000+</div>
            <div className="text-gray-600 text-sm">Successful Students</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">95%</div>
            <div className="text-gray-600 text-sm">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">50+</div>
            <div className="text-gray-600 text-sm">Medical Colleges</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">4.9/5</div>
            <div className="text-gray-600 text-sm">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}