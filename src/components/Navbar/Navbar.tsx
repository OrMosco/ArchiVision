import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact', cta: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar__inner">
        <div className="navbar__logo" onClick={handleLogoClick}>
          Archi<span>Vision</span>
        </div>
        <nav>
          <ul className="navbar__links">
            {navLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} className={link.cta ? 'navbar__cta' : ''}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`}>
        {navLinks.map(link => (
          <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
