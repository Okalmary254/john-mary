import { SITE } from '../data/config'
import PageHeader from '../components/ui/PageHeader'
import Button from '../components/ui/Button'
import useContactForm from '../hooks/useContactForm'

const CONTACT_ITEMS = [
  {
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: SITE.phone,
    href: `tel:+254743874690`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+254 783 845 747',
    href: SITE.whatsapp,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'Location',
    value: SITE.location,
    href: null,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

const SOCIALS = [
  { href: SITE.github,    label: 'GitHub' },
  { href: SITE.linkedin,  label: 'LinkedIn' },
  { href: SITE.twitter,   label: 'Twitter' },
  { href: SITE.kaggle,    label: 'Kaggle' },
]

const inputCls = `w-full bg-transparent border-b border-rule dark:border-gray-600 text-ink dark:text-gray-100
  text-[13px] font-mono py-2 outline-none placeholder:text-muted/50 dark:placeholder:text-gray-600
  focus:border-ink dark:focus:border-gray-300 transition-colors`

export default function Contact() {
  const { form, status, handleChange, handleSubmit } = useContactForm()

  return (
    <div>
      <PageHeader
        label="Contact"
        title="Get in touch"
        subtitle="I'd love to hear from you! Reach out for collaborations, internships, or just to say hello."
      />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12">

        {/* ── Contact info ── */}
        <div className="space-y-4">
          {CONTACT_ITEMS.map(({ label, value, href, icon }) => (
            <div
              key={label}
              className="flex items-start gap-4 p-4 border border-rule dark:border-gray-700 hover:border-accent dark:hover:border-accent transition-colors"
            >
              <span className="text-muted dark:text-gray-400 mt-0.5 flex-shrink-0">{icon}</span>
              <div>
                <p className="text-[10px] text-muted dark:text-gray-500 uppercase tracking-widest mb-0.5">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-[13px] text-ink dark:text-gray-200 hover:text-accent dark:hover:text-accent transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-[13px] text-ink dark:text-gray-200">{value}</p>
                )}
              </div>
            </div>
          ))}

          {/* Socials */}
          <div className="pt-2">
            <p className="text-[10px] text-muted dark:text-gray-500 uppercase tracking-widest mb-3">
              Connect with me
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-muted dark:text-gray-400 border border-rule dark:border-gray-700 px-3 py-1.5 tracking-widest hover:border-ink dark:hover:border-gray-400 hover:text-ink dark:hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Form ── */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-[10px] text-muted dark:text-gray-500 uppercase tracking-widest block mb-2">
                Name
              </label>
              <input
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className={inputCls}
              />
            </div>
            <div>
              <label className="text-[10px] text-muted dark:text-gray-500 uppercase tracking-widest block mb-2">
                Email
              </label>
              <input
                name="reply_to"
                type="email"
                value={form.reply_to}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className={inputCls}
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] text-muted dark:text-gray-500 uppercase tracking-widest block mb-2">
              Subject
            </label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              required
              className={inputCls}
            />
          </div>

          <div>
            <label className="text-[10px] text-muted dark:text-gray-500 uppercase tracking-widest block mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or idea..."
              required
              rows={5}
              className={`${inputCls} resize-none`}
            />
          </div>

          {status === 'success' && (
            <p className="text-[12px] text-emerald-600 dark:text-emerald-400 tracking-wide">
              Message sent. I'll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-[12px] text-red-500 tracking-wide">
              Something went wrong — email me directly at{' '}
              <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>
            </p>
          )}

          <Button type="submit" variant="primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </Button>
        </form>
      </div>
    </div>
  )
}
