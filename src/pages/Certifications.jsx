import { CERTIFICATIONS } from '../data/certifications'
import PageHeader from '../components/ui/PageHeader'
import Tag from '../components/ui/Tag'

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 px-2 py-0.5">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
      Verified
    </span>
  )
}

function CertCard({ cert }) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-rule dark:border-gray-700 overflow-hidden hover:border-accent dark:hover:border-accent transition-colors group">
      {/* Header with logo */}
      <div className="p-5 border-b border-rule dark:border-gray-700 flex items-center justify-between bg-gray-50 dark:bg-gray-900/50">
        <img
          src={cert.logo}
          alt={cert.issuer}
          className="h-10 object-contain"
          onError={(e) => { e.target.style.display = 'none' }}
        />
        <VerifiedBadge />
      </div>

      {/* Body */}
      <div className="p-5">
        <h2 className="font-serif text-lg font-normal text-ink dark:text-white leading-snug mb-1">
          {cert.title}
        </h2>
        <p className="text-[11px] text-muted dark:text-gray-500 tracking-wide mb-3">
          {cert.issuer} · {cert.date}
        </p>
        <p className="text-[13px] text-muted dark:text-gray-400 leading-relaxed mb-4">
          {cert.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {cert.skills.map((s) => <Tag key={s}>{s}</Tag>)}
        </div>
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[11px] text-ink dark:text-gray-200 border border-rule dark:border-gray-600 px-4 py-2 tracking-widest hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-colors w-full justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          View Certificate
        </a>
      </div>
    </div>
  )
}

export default function Certifications() {
  return (
    <div>
      <PageHeader
        label="Credentials"
        title="Certifications"
        subtitle="Professional credentials validating my expertise in data science, research, and technology."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {CERTIFICATIONS.map((cert) => (
          <CertCard key={cert.id} cert={cert} />
        ))}
      </div>
    </div>
  )
}
