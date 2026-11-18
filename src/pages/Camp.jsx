import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { Arrow } from '../components/Icons.jsx'
import { camp, profile } from '../data.js'

export default function Camp() {
  useEffect(() => {
    document.title = `${camp.title} — Alfat Taufik`
  }, [])

  const email = `mailto:${profile.email}?subject=${encodeURIComponent(camp.title)}`

  const actions = (
    <div className="teach__actions">
      <a className="pill-btn" href={camp.whatsapp} target="_blank" rel="noreferrer">
        Register on WhatsApp <Arrow width={18} height={18} />
      </a>
      <a className="ghost-btn" href={email}>
        Email me <Arrow width={18} height={18} />
      </a>
    </div>
  )

  return (
    <div className="page container teach camp">
      <Reveal className="page__head">
        <p className="eyebrow">{camp.title} · Dec 2026</p>
        <h1 className="display">{camp.headline}</h1>
        <p className="lead">{camp.intro}</p>
        {actions}
      </Reveal>

      <dl className="teach__facts">
        {camp.facts.map((f) => (
          <Reveal className="stat" key={f.label}>
            <dt className="stat__label">{f.label}</dt>
            <dd className="stat__value">{f.value}</dd>
          </Reveal>
        ))}
      </dl>

      <section className="teach__block">
        <Reveal as="h2" className="h2">Five days, one game</Reveal>
        <ol className="teach__steps camp__days">
          {camp.days.map((d, i) => (
            <Reveal as="li" className="teach__step" key={d.title} delay={i * 0.06}>
              <span className="teach__step-num">Day {i + 1}</span>
              <h3 className="teach__step-title">{d.title}</h3>
              <p>{d.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="teach__block camp__when">
        <Reveal>
          <h2 className="h2">When</h2>
          <p className="lead">{camp.dates}</p>
        </Reveal>
        <Reveal as="dl" className="camp__times">
          {camp.times.map((t) => (
            <div className="camp__time" key={t.place}>
              <dt>{t.place}</dt>
              <dd>{t.time}</dd>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="teach__block">
        <Reveal as="h2" className="h2">What your child needs</Reveal>
        <Reveal as="ul" className="camp__needs">
          {camp.needs.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </Reveal>
      </section>

      <Reveal as="section" className="teach__cta">
        <h2 className="h2">Save a place</h2>
        <p className="lead">{camp.price}</p>
        <p className="lead">{camp.deadline}</p>
        {actions}
        <Link to="/teach" className="card-cta camp__back">
          Prefer weekly lessons? See regular classes <Arrow width={16} height={16} />
        </Link>
      </Reveal>
    </div>
  )
}
