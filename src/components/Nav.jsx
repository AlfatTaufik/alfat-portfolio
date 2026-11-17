import { Link, NavLink } from 'react-router-dom'
import { motion } from 'motion/react'
import { profile } from '../data.js'

export default function Nav() {
  return (
    <motion.nav
      className="nav"
      initial={{ y: -80, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <Link to="/" className="nav__avatar" aria-label="Home">
        <img src={profile.avatar} alt={profile.name} />
      </Link>
      <NavLink to="/projects" className="nav__link">Work</NavLink>
      <NavLink to="/teach" className="nav__link">Teach</NavLink>
      <NavLink to="/resume" className="nav__link">Resume</NavLink>
      <a className="nav__cta" href={profile.cv} target="_blank" rel="noreferrer">
        <span className="nav__cta-long">Curriculum Vitae</span>
        <span className="nav__cta-short">CV</span>
      </a>
    </motion.nav>
  )
}
