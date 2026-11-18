// Link-preview crawlers (WhatsApp, Facebook, LinkedIn) don't run JavaScript, so pages
// that get shared on their own get a copy of index.html with their own meta tags.
// vercel.json rewrites each route to its file; the React app then boots as usual.
import { readFileSync, writeFileSync } from 'node:fs'

const site = 'https://alfat-portfolio.vercel.app'
const pages = [
  {
    file: 'teach.html',
    path: '/teach',
    title: 'Coding lessons for kids — Alfat Taufik',
    description:
      'Live online coding lessons in English: Python, game development and app design. Book a free 30-minute trial class.',
    image: '/og-teach.jpg',
  },
  {
    file: 'camp.html',
    path: '/camp',
    title: 'Winter Coding Camp — build your first game in 5 days',
    description:
      'Online camp for ages 10–15, 28 Dec 2026 – 2 Jan 2027. Five live sessions, small groups, a finished 2D game at the end.',
    image: '/og-camp.jpg',
  },
]

const base = readFileSync('dist/index.html', 'utf8')

for (const page of pages) {
  let html = base
  const swaps = [
    [/<title>[^<]*<\/title>/, `<title>${page.title}</title>`],
    [/(<meta name="description" content=")[^"]*/, `$1${page.description}`],
    [/(<meta property="og:url" content=")[^"]*/, `$1${site}${page.path}`],
    [/(<meta property="og:title" content=")[^"]*/, `$1${page.title}`],
    [/(<meta property="og:description" content=")[^"]*/, `$1${page.description}`],
    [/(<meta property="og:image" content=")[^"]*/, `$1${site}${page.image}`],
    [/(<meta property="og:image:width" content=")[^"]*/, '$11200'],
    [/(<meta property="og:image:height" content=")[^"]*/, '$1630'],
  ]
  for (const [pattern, replacement] of swaps) {
    if (!pattern.test(html)) throw new Error(`page-meta: no match for ${pattern}`)
    html = html.replace(pattern, replacement)
  }
  writeFileSync(`dist/${page.file}`, html)
}
