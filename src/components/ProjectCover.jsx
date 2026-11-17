// Real image when the project has one, otherwise a typographic cover in the site's palette.
export default function ProjectCover({ project, className = '', eager = false }) {
  if (project.cover) {
    return <img className={className} src={project.cover} alt="" loading={eager ? 'eager' : 'lazy'} />
  }
  const word = project.title.split(/[—:]/)[0].trim()
  return (
    <div className={`type-cover ${className}`} aria-hidden="true">
      <span className="type-cover__word">{word}</span>
      <span className="type-cover__tag">{project.tag}</span>
    </div>
  )
}
