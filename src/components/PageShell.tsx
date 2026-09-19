import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fonts, hairline, pagePadding } from '../theme'

const footerLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Docs', href: '#docs' },
  { label: 'Contact', href: '#contact' },
  { label: 'Get Started', href: '#get-started' },
]

/** Shared frame for every inner page: emerald glow, space under the fixed navbar, footer. */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div
        aria-hidden="true"
        style={{ position: 'absolute', top: '-14%', left: '50%', transform: 'translateX(-50%)', width: '1000px', height: '720px', background: 'radial-gradient(ellipse at 50% 30%, rgba(6,95,70,0.22) 0%, transparent 68%)', pointerEvents: 'none' }}
      />

      <motion.main
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ position: 'relative', zIndex: 10, flex: 1, padding: `140px ${pagePadding} 96px` }}
      >
        {children}
      </motion.main>

      <footer
        style={{ position: 'relative', zIndex: 10, display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between', padding: `28px ${pagePadding}`, borderTop: hairline, fontFamily: fonts.body, fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}
      >
        <span>&copy; {new Date().getFullYear()} Aurora</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} style={{ color: 'inherit', textDecoration: 'none' }}>
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}
