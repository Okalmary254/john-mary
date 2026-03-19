import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="pt-20 text-center space-y-4">
      <p className="text-[11px] text-muted tracking-[0.1em] uppercase">404</p>
      <h1 className="font-serif text-4xl font-normal text-ink">Page not found</h1>
      <p className="text-[13px] text-muted">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-block mt-4 text-[12px] text-ink border-b border-ink pb-px tracking-widest hover:text-accent hover:border-accent transition-colors"
      >
        Go home →
      </Link>
    </div>
  )
}
