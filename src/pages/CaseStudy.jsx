import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'motion/react'
import ProjectCover from '../components/ProjectCover.jsx'
import Reveal from '../components/Reveal.jsx'
import { Arrow } from '../components/Icons.jsx'
import NotFound from './NotFound.jsx'
import { projects } from '../data.js'

export default function CaseStudy() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  const { scrollY } = useScroll()
  const coverScale = useTransform(scrollY, [0, 600], [1, 1.08])

  useEffect(() => {
    if (project) document.title = `${project.title} — Alfat Taufik`
  }, [project])

  if (!project) return <NotFound />

  const { meta, stack, sections = [], gallery = [], links = {} } = project

  return (
    <article className="page case container" key={slug}>
      <Reveal className="case__head">
        <Link to="/projects" className="back-link">← All projects</Link>
        <span className="tag">{project.tag}</span>
        <h1 className="case__title">{project.title}</h1>
        <p className="lead case__lead">{project.description}</p>
        {(links.live || links.code) && (
          <div className="case__links">
            {links.live && (
              <a className="pill-btn" href={links.live} target="_blank" rel="noreferrer">
                Visit live <Arrow width={18} height={18} />
              </a>
            )}
            {links.code && (
              <a className="ghost-btn" href={links.code} target="_blank" rel="noreferrer">
                Source code <Arrow width={18} height={18} />
              </a>
            )}
          </div>
        )}
      </Reveal>

      <motion.div
        className="case__cover"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <motion.div className="case__cover-inner" style={{ scale: coverScale }}>
          <ProjectCover project={project} eager />
        </motion.div>
      </motion.div>

      <dl className="case__meta">
        {Object.entries(meta).map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
        <div>
          <dt>Stack</dt>
          <dd>{stack.join(' · ')}</dd>
        </div>
      </dl>

      {sections.length > 0 && (
        <div className="case__sections">
          {sections.map((s, i) => (
            <Reveal className="case__section" key={s.title}>
              <h2 className="case__section-title">
                <span className="case__section-num">0{i + 1}</span> {s.title}
              </h2>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>
      )}

      {gallery.length > 0 && (
        <div className="case__gallery">
          {gallery.map((src, i) => (
            <Reveal key={src} className={`case__shot ${i === 0 ? 'is-wide' : ''}`} delay={(i % 2) * 0.08}>
              <img src={src} alt={`${project.title} — screenshot ${i + 1}`} loading="lazy" />
            </Reveal>
          ))}
        </div>
      )}

      <Link to={`/projects/${next.slug}`} className="next-project">
        <span className="eyebrow">Next project</span>
        <span className="next-project__title">
          {next.title} <Arrow width={40} height={40} />
        </span>
      </Link>
    </article>
  )
}
