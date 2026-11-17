import { useEffect } from 'react'
import Reveal from '../components/Reveal.jsx'
import { Arrow } from '../components/Icons.jsx'
import { profile, resume } from '../data.js'

function Timeline({ title, items }) {
  return (
    <section className="resume__block">
      <Reveal as="h2" className="h2 resume__title">{title}</Reveal>
      <ol className="timeline">
        {items.map((item) => (
          <Reveal as="li" className="timeline__item" key={item.title + item.period}>
            <p className="timeline__period">{item.period}</p>
            <div>
              <h3 className="timeline__title">{item.title}</h3>
              <p className="timeline__sub">{item.org || item.subtitle}</p>
              <ul className="timeline__points">
                {item.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}

export default function Resume() {
  useEffect(() => {
    document.title = 'Resume — Alfat Taufik'
  }, [])

  return (
    <div className="page container resume">
      <Reveal className="page__head">
        <p className="eyebrow">{profile.fullName}</p>
        <h1 className="display">Resume</h1>
        <p className="lead">{profile.headline}</p>
        <a className="pill-btn" href={profile.cv} target="_blank" rel="noreferrer">
          Full CV <Arrow width={18} height={18} />
        </a>
      </Reveal>

      <Timeline title="Experience" items={resume.experience} />
      <Timeline title="Education" items={resume.education} />
      <Timeline title="Organisations" items={resume.organisations} />

      <section className="resume__block">
        <Reveal as="h2" className="h2 resume__title">Skills</Reveal>
        <div className="skills">
          {resume.skills.map((g) => (
            <Reveal className="skills__group" key={g.group}>
              <h3 className="timeline__period">{g.group}</h3>
              <ul className="skills__list">
                {g.items.map((s) => (
                  <li key={s} className="chip">{s}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="resume__block resume__awards">
        <div>
          <Reveal as="h2" className="h2 resume__title">Achievements</Reveal>
          <ul className="award-list">
            {resume.achievements.map((a) => (
              <Reveal as="li" key={a.title}>
                <span className="award-list__year">{a.year || '—'}</span>
                {a.title}
              </Reveal>
            ))}
          </ul>
        </div>
        <div>
          <Reveal as="h2" className="h2 resume__title">Certifications</Reveal>
          <ul className="award-list">
            {resume.certifications.map((c) => (
              <Reveal as="li" key={c}>
                <span className="award-list__year">✦</span>
                {c}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
