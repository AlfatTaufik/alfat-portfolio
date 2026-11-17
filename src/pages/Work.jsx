import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Arrow } from '../components/Icons.jsx'
import ProjectCover from '../components/ProjectCover.jsx'
import Reveal from '../components/Reveal.jsx'
import { projectCategories, projects } from '../data.js'

export default function Work() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  useEffect(() => {
    document.title = 'Work — Alfat Taufik'
  }, [])

  return (
    <section className="page container">
      <Reveal className="page__head">
        <p className="eyebrow">{projects.length} projects</p>
        <h1 className="display">All Projects</h1>
        <p className="lead">Web apps, websites, teaching programmes and games — everything I've built and taught so far.</p>
      </Reveal>

      <div className="chips" role="tablist" aria-label="Filter projects">
        {projectCategories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={filter === c}
            className={`chip ${filter === c ? 'is-active' : ''}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div className="work-grid" layout>
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Link className="work-card" to={`/projects/${p.slug}`}>
                <div className="work-card__media">
                  <ProjectCover project={p} />
                </div>
                <div className="work-card__meta">
                  <span className="tag">{p.tag}</span>
                  <span className="work-card__year">{p.meta.Year}</span>
                </div>
                <h2 className="work-card__title">{p.title}</h2>
                <p className="work-card__summary">{p.summary}</p>
                <span className="card-cta">
                  View case study <Arrow width={16} height={16} />
                </span>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
