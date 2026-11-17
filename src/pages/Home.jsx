import Intro from '../components/Intro.jsx'
import Marquee from '../components/Marquee.jsx'
import Projects from '../components/Projects.jsx'
import Showreel from '../components/Showreel.jsx'
import Faq from '../components/Faq.jsx'
import { highlights } from '../data.js'

export default function Home() {
  return (
    <>
      <Intro />
      <Marquee items={highlights} />
      <Showreel />
      <Projects />
      <Faq />
    </>
  )
}
