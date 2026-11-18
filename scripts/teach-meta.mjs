// Link-preview crawlers (WhatsApp, Facebook, LinkedIn) don't run JavaScript, so /teach
// gets its own copy of index.html with teaching-specific meta tags. vercel.json
// rewrites /teach to this file; the React app then boots as usual.
import { readFileSync, writeFileSync } from 'node:fs'

const site = 'https://alfat-portfolio.vercel.app'
const title = 'Coding lessons for kids — Alfat Taufik'
const description =
  'Live online coding lessons in English: Python, game development and app design. Book a free 30-minute trial class.'

let html = readFileSync('dist/index.html', 'utf8')
const swaps = [
  [/<title>[^<]*<\/title>/, `<title>${title}</title>`],
  [/(<meta name="description" content=")[^"]*/, `$1${description}`],
  [/(<meta property="og:url" content=")[^"]*/, `$1${site}/teach`],
  [/(<meta property="og:title" content=")[^"]*/, `$1${title}`],
  [/(<meta property="og:description" content=")[^"]*/, `$1${description}`],
  [/(<meta property="og:image" content=")[^"]*/, `$1${site}/og-teach.jpg`],
  [/(<meta property="og:image:width" content=")[^"]*/, '$11200'],
  [/(<meta property="og:image:height" content=")[^"]*/, '$1630'],
]
for (const [pattern, replacement] of swaps) {
  if (!pattern.test(html)) throw new Error(`teach-meta: no match for ${pattern}`)
  html = html.replace(pattern, replacement)
}
writeFileSync('dist/teach.html', html)
