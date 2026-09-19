import type { CSSProperties } from 'react'

export const fonts = {
  display: "'Plus Jakarta Sans', sans-serif",
  body: "'Inter', sans-serif",
  mono: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
}

export const pagePadding = 'clamp(24px, 5vw, 64px)'
export const hairline = '1px solid rgba(255,255,255,0.12)'

export const pageTitle: CSSProperties = {
  fontFamily: fonts.display,
  fontWeight: 500,
  fontSize: 'clamp(2.4rem, 4.6vw, 4.1rem)',
  lineHeight: 1.08,
  letterSpacing: '-0.02em',
  color: '#fff',
}

export const lead: CSSProperties = {
  marginTop: '18px',
  fontFamily: fonts.body,
  fontSize: '16px',
  lineHeight: 1.6,
  color: 'rgba(255,255,255,0.6)',
  maxWidth: '520px',
}

export const sectionTitle: CSSProperties = {
  fontFamily: fonts.display,
  fontWeight: 500,
  fontSize: '22px',
  lineHeight: 1.25,
  letterSpacing: '-0.01em',
  color: '#fff',
}

export const bodyText: CSSProperties = {
  fontFamily: fonts.body,
  fontSize: '15px',
  lineHeight: 1.65,
  color: 'rgba(255,255,255,0.6)',
}

export const smallLabel: CSSProperties = {
  fontFamily: fonts.body,
  fontSize: '13px',
  fontWeight: 500,
  color: 'rgba(255,255,255,0.5)',
  marginBottom: '4px',
}

export const panel: CSSProperties = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.14)',
  borderRadius: '24px',
  padding: 'clamp(22px, 3vw, 34px)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
}

export const inputStyle: CSSProperties = {
  width: '100%',
  padding: '13px 16px',
  borderRadius: '14px',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.16)',
  color: '#fff',
  fontFamily: fonts.body,
  fontSize: '14px',
  colorScheme: 'dark',
}
