import { useLayoutEffect, useRef } from 'react'
import { motion, useMotionValue, useMotionValueEvent, useScroll } from 'motion/react'
import Accordion from './Accordion.jsx'
import Counter from './Counter.jsx'
import { SocialLinks } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { about, profile, services, servicesIntro, socials, stats } from '../data.js'

const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2)
const lerp = (a, b, t) => a + (b - a) * t

// Hero, services and about share one wrapper so the portrait card can travel
// from the hero slot to the about slot, flipping to its back side on the way.
export default function Intro() {
  const wrapRef = useRef(null)
  const heroSlotRef = useRef(null)
  const aboutSlotRef = useRef(null)
  const metrics = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const rotateZ = useMotionValue(0)
  const { scrollY } = useScroll()

  const update = () => {
    const m = metrics.current
    if (!m) return
    const t = m.end > 0 ? Math.min(Math.max(window.scrollY / m.end, 0), 1) : 0
    const e = easeInOut(t)
    x.set(lerp(m.from.x, m.to.x, e))
    y.set(lerp(m.from.y, m.to.y, e))
    rotateY.set(180 * e)
    rotateZ.set(8 * e)
  }

  const measure = () => {
    const wrap = wrapRef.current.getBoundingClientRect()
    const a = heroSlotRef.current.getBoundingClientRect()
    const b = aboutSlotRef.current.getBoundingClientRect()
    const to = { x: b.left - wrap.left, y: b.top - wrap.top }
    // Finish the flip when the about slot sits centred in the viewport.
    const end = wrap.top + window.scrollY + to.y - (window.innerHeight - b.height) / 2
    metrics.current = { from: { x: a.left - wrap.left, y: a.top - wrap.top }, to, end }
    update()
  }

  useLayoutEffect(() => {
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(wrapRef.current)
    window.addEventListener('resize', measure)
    document.fonts?.ready.then(measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  useMotionValueEvent(scrollY, 'change', update)

  return (
    <div className="intro" ref={wrapRef}>
      <motion.div className="flip-card" style={{ x, y, rotateZ }} aria-hidden="true">
        <motion.div className="flip-card__inner" style={{ rotateY, transformPerspective: 1200 }}>
          <img className="flip-card__face" src={profile.portraitFront} alt="" />
          <img className="flip-card__face flip-card__face--back" src={profile.portraitBack} alt="" />
        </motion.div>
      </motion.div>

      <Hero slotRef={heroSlotRef} />
      <Services />
      <About slotRef={aboutSlotRef} />
    </div>
  )
}

function Hero({ slotRef }) {
  const [first, second] = profile.roles
  return (
    <header className="hero container">
      <motion.div
        className="hero__top"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <p className="hero__name">{profile.name}</p>
        <h1 className="display">{first}</h1>
      </motion.div>

      <div className="hero__middle">
        <div className="card-slot" ref={slotRef}>
          <img src={profile.portraitFront} alt={`Portrait of ${profile.name}`} />
          <motion.span
            className="hi-bubble"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 16 }}
          >
            Hi
          </motion.span>
        </div>
      </div>

      <motion.div
        className="hero__bottom"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <p className="display" aria-hidden="true">{second}</p>
        <p className="hero__tagline">{profile.tagline}</p>
      </motion.div>
    </header>
  )
}

function Services() {
  const items = services.map((s, i) => ({
    number: `${i + 1}.`,
    title: s.title,
    content: (
      <ul className="service-list">
        {s.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ),
  }))

  return (
    <section className="services container split" id="services">
      <div className="split__main">
        <Reveal>
          <h2 className="h2">What I can do for you</h2>
          <p className="lead">{servicesIntro}</p>
        </Reveal>
        <Accordion items={items} defaultOpen={0} className="accordion--services" />
      </div>
    </section>
  )
}

function About({ slotRef }) {
  return (
    <section className="about container split" id="about">
      <div className="split__main">
        <Reveal>
          <h2 className="h2">About me</h2>
          <p className="lead">{about}</p>
        </Reveal>

        <dl className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <dt className="stat__label">{s.label}</dt>
              <dd className="stat__value">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>

        <div className="contact-grid">
          <div>
            <p className="label">Call Today :</p>
            <a href={`tel:${profile.phone.replace(/[\s-]/g, '')}`}>{profile.phone}</a>
          </div>
          <div>
            <p className="label">Email :</p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>

        <SocialLinks items={socials} />

        <a className="pill-btn" href={profile.cv} target="_blank" rel="noreferrer">
          My CV
        </a>
      </div>
      <div className="split__side">
        <div className="card-slot" ref={slotRef}>
          <img src={profile.portraitBack} alt={`Portrait of ${profile.name}`} loading="lazy" />
        </div>
      </div>
    </section>
  )
}
