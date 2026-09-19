import PageShell from '../components/PageShell'
import Button from '../components/Button'
import { bodyText, hairline, lead, pageTitle, sectionTitle } from '../theme'

const capabilities = [
  {
    name: 'Design systems',
    text: 'Keep colors, type and spacing as shared tokens. Change one value and every screen that uses it updates.',
  },
  {
    name: 'Prototypes',
    text: 'Link screens into real flows and test them in the browser before anyone writes code.',
  },
  {
    name: 'Motion',
    text: 'Set how elements enter, hover and press once, then reuse those settings across every page.',
  },
  {
    name: 'Code export',
    text: 'Export typed React components with your spacing and colors already applied.',
  },
  {
    name: 'Reviews',
    text: 'Comment on a screen, assign the fix and close the thread when it ships.',
  },
]

export default function Product() {
  return (
    <PageShell>
      <div style={{ maxWidth: '1120px' }}>
        <h1 style={pageTitle}>
          Built for interfaces
          <br />
          that feel alive
        </h1>
        <p style={lead}>
          Aurora brings your design system, prototypes and reviews into one workspace, so the work stays consistent from the first sketch to the shipped page.
        </p>

        <div style={{ marginTop: '72px' }}>
          {capabilities.map((item) => (
            <div
              key={item.name}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px 48px', padding: '30px 0', borderTop: hairline }}
            >
              <h2 style={sectionTitle}>{item.name}</h2>
              <p style={{ ...bodyText, maxWidth: '520px' }}>{item.text}</p>
            </div>
          ))}
          <div style={{ borderTop: hairline }} />
        </div>

        <div style={{ marginTop: '72px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
          <h2 style={{ ...sectionTitle, fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', maxWidth: '420px' }}>
            Set up your first workspace in minutes
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            <Button href="#get-started">Get Started</Button>
            <Button href="#docs" variant="ghost">Read the docs</Button>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
