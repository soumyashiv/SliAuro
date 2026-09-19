import type { CSSProperties, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fonts } from '../theme'

type ButtonProps = {
  href?: string
  variant?: 'primary' | 'ghost'
  fullWidth?: boolean
  children: ReactNode
}

/** Pill button. With `href` it renders a link, without it a form submit button. */
export default function Button({ href, variant = 'primary', fullWidth = false, children }: ButtonProps) {
  const style: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: fullWidth ? '100%' : undefined,
    padding: '14px 26px',
    borderRadius: '999px',
    fontSize: '14px',
    fontWeight: 600,
    fontFamily: fonts.body,
    textDecoration: 'none',
    cursor: 'pointer',
    ...(variant === 'primary'
      ? { background: '#fff', color: '#111', border: '1px solid #fff' }
      : { background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.22)' }),
  }

  if (href) {
    return (
      <motion.a href={href} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={style}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={style}>
      {children}
    </motion.button>
  )
}
