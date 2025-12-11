'use client'

import Link from 'next/link'
import { useState, type ReactNode } from 'react'

const NavLink = ({ href, children, onClick }: { href: string; children: ReactNode; onClick?: () => void }) => {
  return (
    <Link href={href} className="nav-link" onClick={onClick}>
      {children}
    </Link>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-transparent backdrop-blur-md">
      <nav className="w-full px-6 py-4 flex items-center justify-between text-[color:var(--foreground)]">
        <Link
          href="/"
          className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200"
        >
          { '{Jibesh Shrestha}' }
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-lg">
          <NavLink href="/blogs">Blogs</NavLink>
          <NavLink href="/papershelf">Papershelf</NavLink>
          <NavLink href="/bookshelf">Bookshelf</NavLink>
          <NavLink href="/projects">Projects</NavLink>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 bg-white/95 backdrop-blur-md border-b border-gray-200 flex flex-col gap-4 text-base">
          <NavLink href="/blogs" onClick={closeMenu}>Blogs</NavLink>
          <NavLink href="/papershelf" onClick={closeMenu}>Papershelf</NavLink>
          <NavLink href="/bookshelf" onClick={closeMenu}>Bookshelf</NavLink>
          <NavLink href="/projects" onClick={closeMenu}>Projects</NavLink>
        </div>
      </div>
    </header>
  )
}