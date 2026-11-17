import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page container not-found">
      <p className="display">404</p>
      <p className="lead">This page doesn't exist — maybe it moved.</p>
      <Link className="pill-btn" to="/">Back home</Link>
    </section>
  )
}
