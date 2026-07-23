import { SITE } from '../data/config'
import { SKILLS } from '../data/skills'
import PageHeader from '../components/ui/PageHeader'
import SkillDots from '../components/ui/SkillDots'
import Button from '../components/ui/Button'

const TIMELINE = [
  {
    period: '2023 – Present',
    role: 'BSc Statistics & Programming',
    org: 'Mama Ngina University',
  },
  {
    period: 'May 2024 – Aug 2024',
    role: 'Junior Data Scientist Mentee',
    org: 'AMREC Consultants',
  },
  {
    period: 'May 2025 – Aug 2025',
    role: 'Junior Data Scientist Mentee',
    org: 'AMREC Consultants',
  },
  {
    period: '2025 – Present',
    role: 'Founder & Developer',
    org: 'LynqIQ',
  },
]

const VALUES = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m1.636-6.364l.707.707M12 21v-1M6.343 17.657l-.707.707M17.657 17.657l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
    title: 'Innovation',
    desc: 'Constantly seeking creative solutions to complex problems.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    title: 'Growth',
    desc: 'Committed to continuous learning and improvement.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Collaboration',
    desc: 'Believing in the power of teamwork and shared knowledge.',
  },
]

const SKILL_CATEGORIES = ['Languages', 'Data Science', 'Frameworks', 'Tools']

export default function About() {
  return (
    <div className="space-y-14">
      <PageHeader
        label="About"
        title="John Mary Nyajura"
        subtitle="Data Scientist | Statistician based in Nairobi, Kenya."
      />

      {/* Bio + Photo */}
      <section className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Photo */}
        <div className="flex-shrink-0 flex justify-center lg:justify-start">
          <div className="w-52 h-52 rounded-xl overflow-hidden border-2 border-rule dark:border-gray-700 shadow-lg">
            <img
              src={SITE.profilePic}
              alt={SITE.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Story */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-normal text-ink dark:text-white">My Story</h2>
          <p className="text-[13px] text-muted dark:text-gray-400 leading-relaxed">
            Welcome to my digital space! I am a passionate and driven technology enthusiast with a deep
            interest in{' '}
            <strong className="text-ink dark:text-white font-medium">
              data science, artificial intelligence & machine learning, cybersecurity, and networking
            </strong>.
          </p>
          <p className="text-[13px] text-muted dark:text-gray-400 leading-relaxed">
            Currently, I am pursuing a{' '}
            <strong className="text-ink dark:text-white font-medium">
              Bachelor of Science (Statistics and Programming)
            </strong>{' '}
            at{' '}
            <strong className="text-ink dark:text-white font-medium">Mama Ngina University</strong>,
            refining my expertise in data analysis, software development, and system security. I am also a{' '}
            <strong className="text-ink dark:text-white font-medium">
              junior data scientist and analyst
            </strong>{' '}
            at{' '}
            <strong className="text-ink dark:text-white font-medium">AMREC Consultants</strong>, where
            I completed a mentorship focused on research, data-driven decision-making, and analytical
            problem-solving.
          </p>
          <div className="pt-2">
            <Button as="a" href={SITE.resumeUrl} variant="primary" download>
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-rule dark:border-gray-700 pt-10">
        <p className="text-[11px] text-muted dark:text-gray-400 tracking-[0.1em] uppercase mb-8">
          My Journey
        </p>
        <div className="space-y-0">
          {TIMELINE.map((item, i) => (
            <div key={i} className="relative pl-8 pb-8 last:pb-0">
              {/* Dot */}
              <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-blue-200 dark:border-blue-900" />
              {/* Line */}
              {i < TIMELINE.length - 1 && (
                <span className="absolute left-[5px] top-5 w-px h-full bg-blue-200 dark:bg-blue-900" />
              )}
              <p className="text-[11px] text-accent tracking-wide mb-1">{item.period}</p>
              <h4 className="text-[14px] font-medium text-ink dark:text-white">{item.role}</h4>
              <p className="text-[12px] text-muted dark:text-gray-400">{item.org}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-rule dark:border-gray-700 pt-10">
        <p className="text-[11px] text-muted dark:text-gray-400 tracking-[0.1em] uppercase mb-8">
          My Values
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="border border-rule dark:border-gray-700 p-6 text-center hover:border-accent dark:hover:border-accent transition-colors group"
            >
              <div className="text-muted dark:text-gray-400 group-hover:text-accent transition-colors mb-4 flex justify-center">
                {v.icon}
              </div>
              <h3 className="font-serif text-lg text-ink dark:text-white mb-2">{v.title}</h3>
              <p className="text-[13px] text-muted dark:text-gray-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-rule dark:border-gray-700 pt-10">
        <p className="text-[11px] text-muted dark:text-gray-400 tracking-[0.1em] uppercase mb-8">Skills</p>
        <div className="space-y-8">
          {SKILL_CATEGORIES.map((cat) => {
            const group = SKILLS.filter((s) => s.category === cat)
            if (!group.length) return null
            return (
              <div key={cat}>
                <p className="text-[10px] text-muted dark:text-gray-500 uppercase tracking-widest mb-3">{cat}</p>
                <div className="grid grid-cols-2 gap-0">
                  {group.map((s, i) => (
                    <div
                      key={s.name}
                      className={`flex justify-between items-center py-2.5 border-b border-rule dark:border-gray-700 text-[13px] text-ink dark:text-gray-200
                        ${i % 2 === 0 ? 'pr-8' : 'pl-8 border-l border-rule dark:border-gray-700'}`}
                    >
                      <span>{s.name}</span>
                      <SkillDots level={s.level} />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
