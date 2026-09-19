import type { ReactNode } from 'react'
import { fonts } from '../theme'

type FieldProps = {
  label: string
  htmlFor: string
  optional?: boolean
  children: ReactNode
}

export default function Field({ label, htmlFor, optional = false, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: 500, fontFamily: fonts.body, color: 'rgba(255,255,255,0.8)' }}
      >
        {label}
        {optional && <span style={{ marginLeft: '6px', fontWeight: 400, color: 'rgba(255,255,255,0.4)' }}>Optional</span>}
      </label>
      {children}
    </div>
  )
}
