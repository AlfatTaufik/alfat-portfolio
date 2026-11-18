import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { Arrow } from './Icons.jsx'
import { camp } from '../data.js'

export default function TeachTeaser() {
  return (
    <section className="container teach-teaser">
      <Reveal className="teach__cta">
        <p className="eyebrow">Teach with me</p>
        <h2 className="h2">Coding lessons for kids</h2>
        <p className="lead">
          Live online lessons in English: Python, game development and app design, for students in Japan, the USA, the UK and
          beyond. Start with a free 30-minute trial class.
        </p>
        <div className="teach__actions">
          <Link className="pill-btn" to="/teach">
            See classes &amp; prices <Arrow width={18} height={18} />
          </Link>
          <Link className="ghost-btn" to="/camp">
            {camp.title} <Arrow width={18} height={18} />
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
