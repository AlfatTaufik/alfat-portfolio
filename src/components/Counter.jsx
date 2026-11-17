import { useEffect, useRef } from 'react'
import { animate, useInView } from 'motion/react'

export default function Counter({ value, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => {
        ref.current.textContent = Math.round(v) + suffix
      },
    })
    return () => controls.stop()
  }, [inView, value, suffix])

  return <span ref={ref}>0{suffix}</span>
}
