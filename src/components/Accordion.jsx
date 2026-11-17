import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Chevron } from './Icons.jsx'

// items: [{ title, number, content }]
export default function Accordion({ items, defaultOpen = null, className = '' }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={`accordion ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div className="accordion__item" key={item.title}>
            <button
              className="accordion__head"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="accordion__title">
                <span className="accordion__num">{item.number}</span> {item.title}
              </span>
              <Chevron className="accordion__chevron" />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="accordion__body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="accordion__content">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
