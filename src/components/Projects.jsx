import { Link } from 'react-router-dom'
import { projects, projectsIntro } from '../data.js'
import ProjectCover from './ProjectCover.jsx'
import Reveal from './Reveal.jsx'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section className="projects container" id="projects">
      <Reveal className="projects__head">
        <h2 className="h2">Featured Projects</h2>
        <p className="lead">{projectsIntro}</p>
      </Reveal>

      <div className="projects__stack">
        {featured.map((p, i) => (
          <Link key={p.slug} className="project-card" to={`/projects/${p.slug}`} style={{ '--i': i }}>
            <ProjectCover project={p} />
            <div className="project-card__content">
              <span className="tag">{p.tag}</span>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="projects__more">
        <Link className="pill-btn" to="/projects">
          All Projects
        </Link>
      </div>
    </section>
  )
}
