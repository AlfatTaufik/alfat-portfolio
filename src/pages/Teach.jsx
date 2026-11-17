import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { Arrow } from '../components/Icons.jsx'
import { profile, teach } from '../data.js'

export default function Teach() {
  useEffect(() => {
    document.title = 'Teach with me — Alfat Taufik'
  }, [])

  const email = `mailto:${profile.email}?subject=${encodeURIComponent('Coding lessons')}`

  return (
    <div className="page container teach">
      <Reveal className="page__head">
        <p className="eyebrow">Teach with me</p>
        <h1 className="display">Coding lessons for kids</h1>
        <p className="lead">{teach.intro}</p>
        <div className="teach__actions">
          <a className="pill-btn" href={teach.whatsapp} target="_blank" rel="noreferrer">
            Chat on WhatsApp <Arrow width={18} height={18} />
          </a>
          <a className="ghost-btn" href={email}>
            Email me <Arrow width={18} height={18} />
          </a>
        </div>
      </Reveal>

      <dl className="teach__facts">
        {teach.facts.map((f) => (
          <Reveal className="stat" key={f.label}>
            <dt className="stat__label">{f.label}</dt>
            <dd className="stat__value">{f.value}</dd>
          </Reveal>
        ))}
      </dl>

      <section className="teach__block">
        <Reveal as="h2" className="h2">Courses</Reveal>
        <div className="teach__courses">
          {teach.courses.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <Link className="work-card" to={`/projects/${c.slug}`}>
                <div className="work-card__media">
                  <img src={c.image} alt={`A live ${c.title} session`} loading="lazy" />
                </div>
                <h3 className="work-card__title">{c.title}</h3>
                <p className="work-card__summary">{c.body}</p>
                <span className="card-cta">
                  See a real class <Arrow width={16} height={16} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="teach__block">
        <Reveal as="h2" className="h2">How it works</Reveal>
        <ol className="teach__steps">
          {teach.steps.map((s, i) => (
            <Reveal as="li" className="teach__step" key={s.title} delay={i * 0.08}>
              <span className="teach__step-num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="teach__step-title">{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {teach.testimonials.length > 0 && (
        <section className="teach__block">
          <Reveal as="h2" className="h2">What parents say</Reveal>
          <div className="teach__quotes">
            {teach.testimonials.map((t) => (
              <Reveal as="figure" className="teach__quote" key={t.name}>
                <blockquote>“{t.quote}”</blockquote>
                <figcaption>{t.name}</figcaption>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <Reveal as="section" className="teach__cta">
        <h2 className="h2">Ready to start?</h2>
        <p className="lead">{teach.pricing}</p>
        <div className="teach__actions">
          <a className="pill-btn" href={teach.whatsapp} target="_blank" rel="noreferrer">
            Chat on WhatsApp <Arrow width={18} height={18} />
          </a>
          <a className="ghost-btn" href={email}>
            Email me <Arrow width={18} height={18} />
          </a>
        </div>
      </Reveal>
    </div>
  )
}
