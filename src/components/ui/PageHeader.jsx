export default function PageHeader({ label, title, subtitle }) {
  return (
    <div className="mb-12 pb-8 border-b border-rule dark:border-gray-700">
      <p className="text-[11px] text-muted dark:text-gray-400 tracking-[0.1em] uppercase mb-3">{label}</p>
      <h1 className="font-serif text-4xl font-normal leading-tight tracking-tight text-ink dark:text-white mb-3">
        {title}
      </h1>
      {subtitle && (
        <p className="text-[13px] text-muted dark:text-gray-400 leading-relaxed max-w-lg">{subtitle}</p>
      )}
    </div>
  )
}
