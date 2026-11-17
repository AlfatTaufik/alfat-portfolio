import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'
import Reveal from './Reveal.jsx'

// Plays muted while on screen; the button turns the score on.
export default function Showreel() {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.4 })
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const v = ref.current
    if (inView) v.play().catch(() => {})
    else v.pause()
  }, [inView])

  const toggleSound = () => {
    const v = ref.current
    v.muted = !muted
    if (muted) {
      v.currentTime = 0
      v.play().catch(() => {})
    }
    setMuted(!muted)
  }

  return (
    <section className="showreel container" id="showreel">
      <Reveal className="showreel__head">
        <h2 className="h2">Showreel</h2>
        <p className="lead">A short look at what I do: I build it, and I teach it.</p>
      </Reveal>
      <Reveal className="showreel__frame">
        <video
          ref={ref}
          src="/video/showreel.mp4"
          poster="/video/showreel-poster.jpg"
          muted={muted}
          loop
          playsInline
          preload="metadata"
          aria-label="Showreel: Alfat Taufik builds and teaches software"
        />
        <button className="showreel__sound" onClick={toggleSound} aria-pressed={!muted}>
          {muted ? 'Sound on' : 'Sound off'}
        </button>
      </Reveal>
    </section>
  )
}
