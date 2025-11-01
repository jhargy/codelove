import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import SubjectCard from '../components/SubjectCards'
import { prisma } from '@/lib/db'
import Link from 'next/link'

async function getUserProStatus(userId: number) {
  const proUser = await prisma.proUser.findUnique({
    where: { userId },
    select: { isActive: true }
  })
  return proUser?.isActive || false
}

const subjects = [
  {
    id: 'biology',
    name: 'Biology',
    description: 'Complete biological concepts with detailed diagrams and explanations',
    color: 'green',
    isPro: true,
    features: [
      'PMDC aligned syllabus',
      '500+ practice questions',
      'Interactive diagrams',
      'Chapter-wise quizzes'
    ]
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    description: 'Organic, Inorganic, and Physical chemistry with reaction mechanisms',
    color: 'blue',
    isPro: true,
    features: [
      'Complete reaction mechanisms',
      '300+ practice questions',
      'Periodic table guide',
      'Chemical bonding concepts'
    ]
  },
  {
    id: 'physics',
    name: 'Physics',
    description: 'Fundamental physics concepts with numerical problem solving',
    color: 'purple',
    isPro: false,
    features: [
      'Conceptual understanding',
      '200+ practice questions',
      'Formula sheets',
      'Numerical problem sets'
    ]
  },
  {
    id: 'english',
    name: 'English',
    description: 'Grammar, vocabulary, and comprehension skills development',
    color: 'red',
    isPro: false,
    features: [
      'Grammar rules',
      'Vocabulary building',
      'Comprehension practice',
      'Sentence structure'
    ]
  },
  {
    id: 'logical-reasoning',
    name: 'Logical Reasoning',
    description: 'Analytical and logical thinking skills enhancement',
    color: 'orange',
    isPro: false,
    features: [
      'Analytical reasoning',
      'Logical puzzles',
      'Pattern recognition',
      'Critical thinking'
    ]
  }
]

export default async function MDCATPage() {
  const session = await getServerSession(authOptions)
  const isPro = await getUserProStatus(parseInt(session?.user?.id!))

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-2xl mx-4 mb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Master Your MDCAT Subjects
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Comprehensive preparation materials designed for PMDC examination pattern
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">{isPro ? 'Pro' : 'Free'}</div>
              <div className="text-sm">Account Status</div>
            </div>
            {!isPro && (
              <Link 
                href="/pricing"
                className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                Upgrade to Pro
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Choose Your Subject
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access complete study materials, practice questions, and mock tests for each subject
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              isProUser={isPro}
              userRole={session?.user?.role || 'user'}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white rounded-2xl shadow-lg mx-4 p-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Practice Questions</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Video Lectures</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Mock Tests</div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <CommentsSection />
    </div>
  )
}

function CommentsSection() {
  const comments = [
    {
      id: 1,
      name: "Medical Student",
      text: "The biology section is incredibly detailed! Helped me score 92% in MDCAT.",
      avatar: "👨‍⚕️"
    },
    {
      id: 2,
      name: "Future Doctor",
      text: "Chemistry explanations are so clear. Finally understood organic chemistry!",
      avatar: "👩‍⚕️"
    },
    {
      id: 3,
      name: "Aspirant",
      text: "Physics numerical problems are exactly like the actual exam. Great practice!",
      avatar: "🎓"
    },
    {
      id: 4,
      name: "Student",
      text: "English section improved my comprehension skills significantly.",
      avatar: "📚"
    },
    {
      id: 5,
      name: "Learner",
      text: "Logical reasoning section was a game-changer for my analytical skills.",
      avatar: "🔍"
    }
  ]

  return (
    <section className="px-4 mb-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <div className="flex items-start mb-4">
                <div className="text-2xl mr-4">{comment.avatar}</div>
                <div>
                  <div className="font-semibold text-gray-800">{comment.name}</div>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{comment.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}