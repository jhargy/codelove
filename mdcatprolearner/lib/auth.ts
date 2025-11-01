import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { prisma } from './db'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        role: { label: 'Role', type: 'text' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          // Find user by email
          const user = await prisma.user.findUnique({
            where: { 
              email: credentials.email.toLowerCase().trim()
            },
            include: {
              proUser: true
            }
          })

          // Check if user exists and is active
          if (!user || !user.isActive || user.isBlocked) {
            return null
          }

          // Check role if specified
          if (credentials.role && user.role !== credentials.role) {
            return null
          }

          // Verify password
          const isPasswordValid = await bcrypt.compare(
            credentials.password, 
            user.password
          )

          if (!isPasswordValid) {
            return null
          }

          // Return user object for session
          return {
            id: user.id.toString(),
            email: user.email,
            name: user.name,
            role: user.role,
            isPro: user.isPro,
          }
        } catch (error) {
          console.error('Auth error:', error)
          return null
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      // Add user role and pro status to token
      if (user) {
        token.role = user.role
        token.isPro = user.isPro
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      // Add user role and pro status to session
      if (token) {
        session.user.id = token.id as string
        session.user.role = token.role as string
        session.user.isPro = token.isPro as boolean
      }
      return session
    }
  },
  pages: {
    signIn: '/auth/login',
    // signUp: '/auth/signup',
    error: '/auth/login'
  },
  debug: process.env.NODE_ENV === 'development',
}