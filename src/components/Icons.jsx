const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true }

export const Chevron = (props) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6 15 6-6 6 6" />
  </svg>
)

export const Arrow = (props) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

const Email = () => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

const LinkedIn = () => (
  <svg {...base}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34V10H5.67v8.34h2.67ZM7 8.86a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Zm11.34 9.48v-4.57c0-2.46-.53-4.35-3.4-4.35a2.98 2.98 0 0 0-2.68 1.47V10H9.7v8.34h2.67v-4.13c0-1.09.2-2.14 1.55-2.14 1.33 0 1.35 1.25 1.35 2.21v4.06h2.67Z" />
  </svg>
)

const GitHub = () => (
  <svg {...base}>
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
)

const socialIcons = { LinkedIn, GitHub, Email }

export function SocialLinks({ items, className = '' }) {
  return (
    <ul className={`socials ${className}`}>
      {items.map(({ name, href }) => {
        const Icon = socialIcons[name]
        return (
          <li key={name}>
            <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={name}>
              <Icon />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
