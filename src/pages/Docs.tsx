import { useState } from 'react'
import { motion } from 'framer-motion'
import PageShell from '../components/PageShell'
import { bodyText, fonts, hairline, lead, pageTitle, sectionTitle } from '../theme'

type Doc = {
  id: string
  title: string
  summary: string
  file: string
  code: string
  notes: string[]
}

const docs: Doc[] = [
  {
    id: 'quick-start',
    title: 'Quick start',
    summary: 'Create a workspace, open the editor and see your first page in a few minutes.',
    file: 'Terminal',
    code: `npm install -g @aurora/cli
aurora init my-studio
cd my-studio
aurora dev`,
    notes: [
      'Requires Node 20 or later.',
      'aurora init creates a workspace with a starter design system.',
      'aurora dev opens the editor at localhost:4000.',
    ],
  },
  {
    id: 'design-tokens',
    title: 'Design tokens',
    summary: 'Tokens hold your colors, type and spacing. Components read from them, so a change in one place carries through every screen.',
    file: 'tokens.json',
    code: `{
  "color": {
    "accent": "#10b981",
    "surface": "#000000"
  },
  "type": {
    "display": "Plus Jakarta Sans",
    "body": "Inter"
  }
}`,
    notes: [
      'Tokens live in tokens.json at the root of your workspace.',
      'Rename a token and Aurora updates every reference to it.',
      'Alias tokens, such as a button color that points to color.accent, are resolved when you export.',
    ],
  },
  {
    id: 'components',
    title: 'Components',
    summary: 'Components are typed building blocks. Each one takes a variant and reads its styles from your tokens.',
    file: 'Cta.tsx',
    code: `import { Button } from '@aurora/ui'

export default function Cta() {
  return <Button href="#get-started">Get Started</Button>
}`,
    notes: [
      'Wrong props fail at build time, not in the browser.',
      'Add your own components to the components/ folder and Aurora picks them up automatically.',
    ],
  },
  {
    id: 'motion',
    title: 'Motion',
    summary: 'Define entrance, hover and press behavior once as a preset, then apply it wherever you need it.',
    file: 'motion.json',
    code: `{
  "enter": { "opacity": [0, 1], "y": [16, 0], "duration": 0.8 },
  "press": { "scale": 0.97 }
}`,
    notes: [
      'Presets are shared across every page in the workspace.',
      'Aurora respects the reduced-motion setting on each visitor\'s device.',
    ],
  },
  {
    id: 'export',
    title: 'Export',
    summary: 'Export your pages as React and TypeScript, ready to drop into an existing project.',
    file: 'Terminal',
    code: `aurora export --format react --out ./src/generated`,
    notes: [
      'Spacing and colors are inlined from your tokens.',
      'Run the command again after design changes. Files that did not change are left alone.',
    ],
  },
]

export default function Docs() {
  const [activeId, setActiveId] = useState(docs[0].id)

  const index = Math.max(0, docs.findIndex((doc) => doc.id === activeId))
  const active = docs[index]
  const prev: Doc | undefined = docs[index - 1]
  const next: Doc | undefined = docs[index + 1]

  return (
    <PageShell>
      <div style={{ maxWidth: '1120px' }}>
        <h1 style={pageTitle}>Documentation</h1>
        <p style={lead}>Guides for setting up Aurora, from your first workspace to exporting code.</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', marginTop: '64px' }}>
          <nav aria-label="Documentation" style={{ flex: '0 0 220px' }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {docs.map((doc) => {
                const isActive = doc.id === active.id
                return (
                  <li key={doc.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(doc.id)}
                      aria-current={isActive ? 'page' : undefined}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '10px 14px',
                        background: 'none',
                        border: 'none',
                        borderLeft: `2px solid ${isActive ? '#10b981' : 'rgba(255,255,255,0.12)'}`,
                        color: isActive ? '#fff' : 'rgba(255,255,255,0.6)',
                        fontFamily: fonts.body,
                        fontSize: '14px',
                        fontWeight: isActive ? 600 : 500,
                        cursor: 'pointer',
                      }}
                    >
                      {doc.title}
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          <motion.article
            key={active.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            style={{ flex: '1 1 420px', minWidth: 0, maxWidth: '720px' }}
          >
            <h2 style={{ ...sectionTitle, fontSize: '28px' }}>{active.title}</h2>
            <p style={{ ...bodyText, marginTop: '12px' }}>{active.summary}</p>

            <div style={{ marginTop: '28px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.04)', overflow: 'hidden' }}>
              <div style={{ padding: '10px 18px', borderBottom: hairline, fontFamily: fonts.body, fontSize: '12.5px', color: 'rgba(255,255,255,0.5)' }}>
                {active.file}
              </div>
              <pre style={{ padding: '18px', overflowX: 'auto', fontFamily: fonts.mono, fontSize: '13px', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>
                <code>{active.code}</code>
              </pre>
            </div>

            <ul style={{ ...bodyText, marginTop: '28px', paddingLeft: '20px', listStyle: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {active.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', marginTop: '48px', paddingTop: '20px', borderTop: hairline }}>
              {prev ? (
                <button type="button" onClick={() => setActiveId(prev.id)} style={pagerStyle}>
                  Previous: {prev.title}
                </button>
              ) : (
                <span />
              )}
              {next ? (
                <button type="button" onClick={() => setActiveId(next.id)} style={pagerStyle}>
                  Next: {next.title}
                </button>
              ) : (
                <span />
              )}
            </div>
          </motion.article>
        </div>
      </div>
    </PageShell>
  )
}

const pagerStyle = {
  background: 'none',
  border: 'none',
  padding: 0,
  fontFamily: fonts.body,
  fontSize: '14px',
  fontWeight: 500,
  color: '#fff',
  cursor: 'pointer',
} as const
