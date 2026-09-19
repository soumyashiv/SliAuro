import { useState } from 'react'
import type { FormEvent } from 'react'
import PageShell from '../components/PageShell'
import Button from '../components/Button'
import Field from '../components/Field'
import { bodyText, fonts, inputStyle, lead, pageTitle, panel, sectionTitle } from '../theme'

const steps = [
  { title: 'Create your account', text: 'Tell us who you are and how big your team is.' },
  { title: 'Set up your design system', text: 'Start from our defaults or import your own tokens.' },
  { title: 'Invite your team', text: 'Share the workspace and start reviewing designs together.' },
]

export default function GetStarted() {
  const [email, setEmail] = useState<string | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    // TODO: create the account / send the sign-in link from your backend here.
    setEmail(String(data.get('email') ?? ''))
  }

  return (
    <PageShell>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', maxWidth: '1120px' }}>
        <div style={{ flex: '1 1 340px', maxWidth: '460px' }}>
          <h1 style={pageTitle}>
            Start your
            <br />
            first project
          </h1>
          <p style={lead}>Create a workspace in about a minute. You can bring in your team and your design system whenever you&apos;re ready.</p>

          <ol style={{ listStyle: 'none', marginTop: '44px', display: 'grid', gap: '26px' }}>
            {steps.map((step, i) => (
              <li key={step.title} style={{ display: 'flex', gap: '16px' }}>
                <span
                  aria-hidden="true"
                  style={{ flexShrink: 0, width: '28px', height: '28px', borderRadius: '999px', background: 'linear-gradient(135deg, #10b981, #047857)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.body, fontSize: '13px', fontWeight: 600, color: '#fff' }}
                >
                  {i + 1}
                </span>
                <div>
                  <h2 style={{ ...sectionTitle, fontSize: '17px' }}>{step.title}</h2>
                  <p style={{ ...bodyText, marginTop: '4px', fontSize: '14px' }}>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div style={{ ...panel, flex: '1 1 380px', maxWidth: '560px' }}>
          {email ? (
            <div role="status">
              <h2 style={{ ...sectionTitle, fontSize: '26px' }}>Check your inbox</h2>
              <p style={{ ...bodyText, marginTop: '12px' }}>
                We sent a link to {email}. Open it to finish setting up your workspace.
              </p>
              <div style={{ marginTop: '28px' }}>
                <Button href="#docs" variant="ghost">Read the quick start</Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
              <h2 style={{ ...sectionTitle, fontSize: '26px' }}>Create your workspace</h2>
              <Field label="Full name" htmlFor="start-name">
                <input id="start-name" name="name" type="text" required autoComplete="name" style={inputStyle} />
              </Field>
              <Field label="Work email" htmlFor="start-email">
                <input id="start-email" name="email" type="email" required autoComplete="email" style={inputStyle} />
              </Field>
              <Field label="Team size" htmlFor="start-size">
                <select id="start-size" name="size" defaultValue="2-10" style={inputStyle}>
                  <option value="1">Just me</option>
                  <option value="2-10">2 to 10 people</option>
                  <option value="11-50">11 to 50 people</option>
                  <option value="51+">More than 50 people</option>
                </select>
              </Field>
              <Button fullWidth>Create workspace</Button>
            </form>
          )}
        </div>
      </div>
    </PageShell>
  )
}
