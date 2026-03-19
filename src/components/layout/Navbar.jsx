import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { SITE } from '../../data/config'

const NAV_LINKS = [
  { to: '/',               label: 'Home',           end: true },
  { to: '/about',          label: 'About' },
  { to: '/projects',       label: 'Projects' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/contact',        label: 'Contact' },
]

// Sun icon
function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-9H21M3 12H2m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14A7 7 0 0012 5z" />
    </svg>
  )
}

// Moon icon
function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
    </svg>
  )
}

export default function Navbar({ dark, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bg dark:bg-gray-900 border-b border-rule dark:border-gray-700">
      <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-[13px] font-medium tracking-wide text-ink dark:text-gray-100 hover:text-accent transition-colors"
        >
          {SITE.name}
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `text-[12px] tracking-widest transition-colors ${
                    isActive
                      ? 'text-ink dark:text-white'
                      : 'text-muted dark:text-gray-400 hover:text-ink dark:hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 text-muted dark:text-gray-400 hover:text-ink dark:hover:text-white transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-ink dark:bg-gray-100 transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block w-5 h-px bg-ink dark:bg-gray-100 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-ink dark:bg-gray-100 transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg dark:bg-gray-900 border-t border-rule dark:border-gray-700 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-[13px] tracking-widest transition-colors ${
                      isActive
                        ? 'text-ink dark:text-white'
                        : 'text-muted dark:text-gray-400 hover:text-ink dark:hover:text-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
