import { motion } from 'framer-motion'
import type { Route } from '../hooks/useRoute'

const navLinks = ["Product", "Pricing", "Docs", "Contact"]

export default function Navbar({ route }: { route: Route }) {
  // On the hero the bar stays fully transparent; on inner pages it gets a blurred backdrop.
  const solid = route !== 'home'

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '26px 44px',
        background: solid ? 'rgba(0,0,0,0.55)' : 'transparent',
        backdropFilter: solid ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: solid ? 'blur(14px)' : 'none',
        borderBottom: solid ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '44px' }}>
        <a href="#" aria-label="Aurora home" style={{ display: 'flex' }}>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11 1 11.9 1 13v3c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <path d="M9 17h6" />
            <circle cx="17" cy="17" r="2" />
          </svg>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          {navLinks.map((link) => {
            const slug = link.toLowerCase()
            const isActive = route === slug
            return (
              <a
                key={link}
                href={`#${slug}`}
                aria-current={isActive ? 'page' : undefined}
                style={{
                  fontSize: '14px', fontWeight: 500, fontFamily: "'Inter', sans-serif",
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.82)',
                  textDecoration: isActive ? 'underline' : 'none',
                  textDecorationColor: '#10b981',
                  textDecorationThickness: '2px',
                  textUnderlineOffset: '8px',
                }}
              >
                {link}
              </a>
            )
          })}
        </div>
      </div>
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        style={{
          padding: '11px 24px',
          borderRadius: '999px',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: "'Inter', sans-serif",
          color: '#111',
          textDecoration: 'none',
          background: '#fff',
          boxShadow: '0 4px 18px rgba(0,0,0,0.25)',
        }}
      >
        Contact Us
      </motion.a>
    </motion.nav>
  )
}
