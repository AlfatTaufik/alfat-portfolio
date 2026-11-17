import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import Resume from './pages/Resume.jsx'
import Teach from './pages/Teach.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  const [grain, setGrain] = useState(true)

  return (
    <>
      <ScrollToTop />
      {grain && <div className="noise" aria-hidden="true" />}
      <Nav />
      <main id="top">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Work />} />
          <Route path="/projects/:slug" element={<CaseStudy />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/teach" element={<Teach />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <button
        className={`grain-toggle ${grain ? 'is-on' : ''}`}
        role="switch"
        aria-checked={grain}
        aria-label="Film grain"
        onClick={() => setGrain(!grain)}
      >
        <span />
      </button>
    </>
  )
}
