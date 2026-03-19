import { Link } from 'react-router-dom'
import { SITE } from '../data/config'
import { PROJECTS } from '../data/projects'
import Tag from '../components/ui/Tag'
import Button from '../components/ui/Button'

const HIGHLIGHTS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    title: 'Data Science',
    desc: 'Transforming data into actionable insights with advanced analytics and visualization techniques.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'AI / ML',
    desc: 'Building intelligent systems with machine learning and deep learning algorithms.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Web Development',
    desc: 'Creating responsive, modern web applications with cutting-edge technologies.',
  },
]

export default function Home() {
  const featured = PROJECTS.slice(0, 3)

  return (
    <div className="space-y-20">

      {/* ── Hero ── */}
      <section className="pt-8 pb-12 border-b border-rule dark:border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center gap-10">
          {/* Text */}
          <div className="flex-1">
            <p className="text-[11px] text-muted dark:text-gray-400 tracking-[0.1em] uppercase mb-5">
              Data Scientist · AI Engineer · Nairobi
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-normal leading-[1.08] tracking-tight text-ink dark:text-white mb-4">
              Hello, I'm<br />
              <em className="italic text-accent not-italic font-serif">John Mary Nyajura</em>
            </h1>
            <p className="text-[14px] text-muted dark:text-gray-400 mb-2">{SITE.tagline}</p>
            <p className="text-[14px] text-muted dark:text-gray-400 leading-relaxed max-w-md mb-8">
              {SITE.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button as="a" href="/projects" variant="primary">
                View My Work
              </Button>
              <Button as="a" href="/contact" variant="outline">
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile picture */}
          <div className="flex justify-center md:justify-end flex-shrink-0">
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-accent shadow-xl">
              <img
                src={SITE.profilePic}
                alt={SITE.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── What I Do ── */}
      <section>
        <p className="text-[11px] text-muted dark:text-gray-400 tracking-[0.1em] uppercase mb-8 text-center">
          What I Do
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.title}
              className="border border-rule dark:border-gray-700 p-6 hover:border-accent dark:hover:border-accent transition-colors group"
            >
              <div className="text-muted dark:text-gray-400 group-hover:text-accent transition-colors mb-4">
                {h.icon}
              </div>
              <h3 className="font-serif text-lg text-ink dark:text-white mb-2">{h.title}</h3>
              <p className="text-[13px] text-muted dark:text-gray-400 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section>
        <div className="flex justify-between items-baseline mb-6">
          <p className="text-[11px] text-muted dark:text-gray-400 tracking-[0.1em] uppercase">
            Featured Projects
          </p>
          <Link
            to="/projects"
            className="text-[11px] text-muted dark:text-gray-400 tracking-widest hover:text-ink dark:hover:text-white transition-colors"
          >
            All projects →
          </Link>
        </div>
        <div className="space-y-0">
          {featured.map((p, i) => (
            <div
              key={p.id}
              className={`py-6 border-b border-rule dark:border-gray-700 grid grid-cols-[1fr_auto] gap-6 ${i === 0 ? 'pt-0' : ''}`}
            >
              <div>
                <h3 className="font-serif text-lg font-normal text-ink dark:text-white mb-1.5 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-[13px] text-muted dark:text-gray-400 leading-relaxed mb-3">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
              <span className="text-[11px] text-muted dark:text-gray-500 pt-1 whitespace-nowrap">
                {p.year}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-4">
        <p className="text-[11px] text-muted dark:text-gray-400 tracking-[0.1em] uppercase mb-4">
          Get In Touch
        </p>
        <p className="text-[13px] text-muted dark:text-gray-400 leading-relaxed mb-6 max-w-md">
          Open to collaborations, internships, and freelance data work.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Button as="a" href={`mailto:${SITE.email}`} variant="primary">
            Send an email
          </Button>
          <Button as="a" href={SITE.resumeUrl} variant="outline" download>
            Download CV
          </Button>
        </div>
      </section>
    </div>
  )
}
