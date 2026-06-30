import { motion } from 'framer-motion'

/**
 * Scroll-triggered reveal wrapper. Fades + slides children into view once.
 *
 * Props:
 *  - as:        element/component to render (default motion.div)
 *  - delay:     stagger delay in seconds
 *  - y:         initial vertical offset in px (default 24)
 *  - once:      animate only the first time (default true)
 *  - className: passthrough
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  once = true,
  className = '',
  ...rest
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/**
 * Container that staggers its <Reveal>/motion children.
 * Use with childVariants on direct children or plain Reveal with delays.
 */
export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}
