'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'About' },
    { href: '/resume', label: 'Resume' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navLinks.map((link) => (
          <li key={link.href} className="navbar-item">
            <Link
              className={`navbar-link ${pathname === link.href ? 'active' : ''}`}
              href={link.href}
              data-nav-link=""
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar