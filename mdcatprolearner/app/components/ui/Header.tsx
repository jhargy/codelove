"use client"

import { useState, useEffect } from "react"
import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { data: session } = useSession()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "MDCAT", href: "/mdcat" },
    { name: "Biology", href: "/biology" },
    { name: "Chemistry", href: "/chemistry" },
    { name: "Physics", href: "/physics" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* ✅ Logo - Professional & Fast */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MDCAT Pro
            </div>
          </Link>

          {/* ✅ Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-medium transition duration-200 ${
                  isActive(item.href)
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded-full"></span>
                )}
              </Link>
            ))}

            {/* ✅ User Logged In */}
            {session ? (
              <div className="flex items-center gap-4">
                <span className="hidden lg:block text-gray-700">
                  Hi, <b>{session.user?.name}</b>
                </span>

                <Link
                  href={session.user?.role === "admin" ? "/admin" : "/dashboard"}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg hover:opacity-90 shadow-sm"
                >
                  Dashboard
                </Link>

                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="text-gray-600 font-medium hover:text-red-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/auth/login"
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </nav>

          {/* ✅ Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div
              className={`w-6 h-[2px] bg-gray-800 transition-all ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <div
              className={`w-6 h-[2px] bg-gray-800 my-1 transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`w-6 h-[2px] bg-gray-800 transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* ✅ Mobile Navigation */}
        <div
          className={`md:hidden mt-2 transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 py-3 border-t">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-lg ${
                  isActive(item.href)
                    ? "text-blue-600 font-medium bg-blue-50"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* ✅ Mobile User Section */}
            {session ? (
              <>
                <Link
                  href={session.user?.role === "admin" ? "/admin" : "/dashboard"}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center bg-blue-600 text-white py-2 rounded-lg"
                >
                  Dashboard
                </Link>

                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    signOut({ callbackUrl: "/" })
                  }}
                  className="w-full text-center text-red-600 border border-red-600 py-2 rounded-lg hover:bg-red-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center bg-blue-600 text-white py-2 rounded-lg"
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
