import { useState } from 'react'
import type { FormEvent } from 'react'
import PageShell from '../components/PageShell'
import Button from '../components/Button'
import Field from '../components/Field'
import { bodyText, inputStyle, lead, pageTitle, panel, sectionTitle, smallLabel } from '../theme'

type Sent = { name: string; email: string }

export default function Contact() {
  const [sent, setSent] = useState<Sent | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    // TODO: send `data` to your backend or form service here.
    setSent({ name: String(data.get('name') ?? ''), email: String(data.get('email') ?? '') })
  }

  return (
    <PageShell>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', maxWidth: '1120px' }}>
        <div style={{ flex: '1 1 340px', maxWidth: '460px' }}>
          <h1 style={pageTitle}>
            Tell us what
            <br />
            you&apos;re building
          </h1>
          <p style={lead}>Share a few details about your project and we&apos;ll reply within one business day.</p>

          <div style={{ marginTop: '40px', display: 'grid', gap: '22px' }}>
            <div>
              <div style={smallLabel}>Email</div>
              <a href="mailto:hello@aurora.example" style={{ ...bodyText, color: '#fff', textDecoration: 'none' }}>
                hello@aurora.example
              </a>
            </div>
            <div>
              <div style={smallLabel}>Response time</div>
              <p style={{ ...bodyText, color: '#fff' }}>Within one business day</p>
            </div>
          </div>
        </div>

        <div style={{ ...panel, flex: '1 1 380px', maxWidth: '560px' }}>
          {sent ? (
            <div role="status">
              <h2 style={{ ...sectionTitle, fontSize: '26px' }}>Message sent</h2>
              <p style={{ ...bodyText, marginTop: '12px' }}>
                Thanks, {sent.name}. We&apos;ll reply to {sent.email} within one business day.
              </p>
              <div style={{ marginTop: '28px' }}>
                <button
                  type="button"
                  onClick={() => setSent(null)}
                  style={{ background: 'none', border: 'none', padding: 0, color: '#fff', fontSize: '14px', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '4px' }}
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
              <Field label="Name" htmlFor="contact-name">
                <input id="contact-name" name="name" type="text" required autoComplete="name" style={inputStyle} />
              </Field>
              <Field label="Email" htmlFor="contact-email">
                <input id="contact-email" name="email" type="email" required autoComplete="email" style={inputStyle} />
              </Field>
              <Field label="Company" htmlFor="contact-company" optional>
                <input id="contact-company" name="company" type="text" autoComplete="organization" style={inputStyle} />
              </Field>
              <Field label="What can we help with?" htmlFor="contact-topic">
                <select id="contact-topic" name="topic" defaultValue="product" style={inputStyle}>
                  <option value="product">A question about the product</option>
                  <option value="pricing">Pricing</option>
                  <option value="partnership">A partnership</option>
                  <option value="other">Something else</option>
                </select>
              </Field>
              <Field label="Message" htmlFor="contact-message">
                <textarea id="contact-message" name="message" required rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
              </Field>
              <Button fullWidth>Send message</Button>
            </form>
          )}
        </div>
      </div>
    </PageShell>
  )
}
