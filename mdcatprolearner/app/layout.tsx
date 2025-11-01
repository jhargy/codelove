import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from './providers/AuthProvider'
// import Header from '../app/components/Header'
// import Footer from '../app/components/ui/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'MDCAT Pro - Premier MDCAT Preparation Platform',
    template: '%s | MDCAT Pro'
  },
  description: 'Prepare for your MDCAT exam with comprehensive study materials, practice tests, and expert guidance. Join thousands of successful medical students.',
  keywords: 'MDCAT, medical exam, preparation, biology, chemistry, physics, Pakistan, medical colleges',
  authors: [{ name: 'MDCAT Pro Team' }],
  creator: 'MDCAT Pro',
  publisher: 'MDCAT Pro',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mdcatpro.com',
    siteName: 'MDCAT Pro',
    title: 'MDCAT Pro - Premier MDCAT Preparation Platform',
    description: 'Your complete MDCAT preparation solution with PMDC aligned syllabus and expert guidance.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MDCAT Pro - MDCAT Preparation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MDCAT Pro - Premier MDCAT Preparation',
    description: 'Prepare for MDCAT with comprehensive study materials and practice tests.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "MDCAT Pro",
              "description": "Premier MDCAT Preparation Platform in Pakistan",
              "url": "https://mdcatpro.com",
              "logo": "https://mdcatpro.com/logo.png",
              "sameAs": [
                "https://facebook.com/mdcatpro",
                "https://twitter.com/mdcatpro"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+92-307-0169442",
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            {/* <Header /> */}
            <main className="flex-grow">
              {children}
            </main>
            {/* <Footer /> */}
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}