import Accordion from './Accordion.jsx'
import Reveal from './Reveal.jsx'
import { faqIntro, faqs } from '../data.js'

export default function Faq() {
  const items = faqs.map((f, i) => ({
    number: `${i + 1}.`,
    title: f.q,
    content: <p className="faq__answer">{f.a}</p>,
  }))

  return (
    <section className="faq container" id="faq">
      <Reveal className="faq__intro">
        <h2 className="h2">Frequently Asked Questions</h2>
        <p className="lead">{faqIntro}</p>
      </Reveal>
      <Accordion items={items} className="accordion--faq" />
    </section>
  )
}
