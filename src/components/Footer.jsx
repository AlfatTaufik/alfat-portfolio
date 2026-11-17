import { Link } from 'react-router-dom'
import { SocialLinks } from './Icons.jsx'
import { profile, socials } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__cta">Let's build something together.</p>
        <div className="footer__grid">
          <div>
            <p className="label">Email :</p>
            <a className="footer__link" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div>
            <p className="label">Call Today :</p>
            <a className="footer__link" href={`tel:${profile.phone.replace(/[\s-]/g, '')}`}>{profile.phone}</a>
          </div>
          <div>
            <p className="label">Social :</p>
            <SocialLinks items={socials} />
          </div>
        </div>
        <div className="footer__bottom">
          <p>© Copyright {new Date().getFullYear()}. All Rights Reserved by {profile.name}</p>
          <nav className="footer__nav">
            <Link to="/">Home</Link>
            <Link to="/projects">Work</Link>
            <Link to="/teach">Teach</Link>
            <Link to="/resume">Resume</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
