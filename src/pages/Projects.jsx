import { useState } from 'react'
import { PROJECTS } from '../data/projects'
import PageHeader from '../components/ui/PageHeader'
import Tag from '../components/ui/Tag'

const CATEGORIES = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))]

function ProjectCard({ project: p }) {
  return (
    <div className="bg-white border border-rule overflow-hidden group transition-shadow hover:shadow-md">

      {/* Image */}
      {p.image && (
        <div className="h-44 overflow-hidden bg-rule">
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h2 className="font-serif text-lg font-normal text-ink tracking-tight leading-snug">
            {p.title}
          </h2>
          <span className="text-[10px] text-muted whitespace-nowrap pt-1">{p.year}</span>
        </div>

        <p className="text-[13px] text-muted leading-relaxed mb-4">{p.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>

        {/* Action links */}
        <div className="flex flex-wrap gap-3 pt-3 border-t border-rule">
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-ink border border-ink px-3 py-1.5 tracking-widest hover:bg-ink hover:text-bg transition-colors"
            >
              Live demo
            </a>
          )}
          {p.github && p.github !== '#' && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-muted border border-rule px-3 py-1.5 tracking-widest hover:border-ink hover:text-ink transition-colors"
            >
              GitHub
            </a>
          )}
          {p.kaggle && (
            <a
              href={p.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-muted border border-rule px-3 py-1.5 tracking-widest hover:border-ink hover:text-ink transition-colors"
            >
              Kaggle
            </a>
          )}
          {p.report && (
            <a
              href={p.report}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-muted border border-rule px-3 py-1.5 tracking-widest hover:border-ink hover:text-ink transition-colors"
            >
              Report
            </a>
          )}
          {p.notebook && (
            <a
              href={p.notebook}
              download
              className="text-[11px] text-muted border border-rule px-3 py-1.5 tracking-widest hover:border-ink hover:text-ink transition-colors"
            >
              Notebook ↓
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === active)

  return (
    <div>
      <PageHeader
        label="Work"
        title="Projects"
        subtitle="Data science, machine learning, NLP, and web development work."
      />

      {/* Category filter */}
      <div className="flex flex-wrap gap-5 mb-10 border-b border-rule pb-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-[11px] tracking-widest uppercase transition-colors pb-1 border-b
              ${active === cat
                ? 'text-ink border-ink'
                : 'text-muted border-transparent hover:text-ink'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}
