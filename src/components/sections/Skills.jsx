import { motion } from 'framer-motion'
import {
  FiCode,
  FiCpu,
  FiShare2,
  FiBox,
  FiDatabase,
  FiLayout,
  FiTool,
} from 'react-icons/fi'

import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal, { staggerContainer, staggerItem } from '../ui/Reveal'
import { skills } from '../../data/content'

/**
 * Maps each skill category to a sensible Feather icon for its badge.
 * Falls back to a generic tool icon for any unmapped category.
 */
const CATEGORY_ICONS = {
  Languages: FiCode,
  'AI / ML': FiCpu,
  'Distributed Systems': FiShare2,
  'Infra & DevOps': FiBox,
  Databases: FiDatabase,
  'Web Frameworks': FiLayout,
}

/**
 * Skills — a responsive grid of glass category cards. Each card has a
 * gradient-tinted icon badge, the category name, and the tech items rendered
 * as staggered pill chips. Cards lift subtly on hover and reveal on scroll.
 */
export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Toolkit"
        title={
          <>
            Technologies I <span className="text-gradient">build with</span>
          </>
        }
        kicker="The languages, frameworks, and infrastructure I reach for when building fast, observable systems at scale."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = CATEGORY_ICONS[group.category] || FiTool
          // Cap the cascade so later cards don't lag too long on scroll-in.
          const delay = Math.min(i, 5) * 0.06

          return (
            <Reveal key={group.category} y={28} delay={delay} className="h-full">
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="glass glass-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 p-6 sm:p-7"
              >
                {/* thin gradient top-border accent */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent-gradient opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* header row — gradient icon badge + category name */}
                <div className="flex items-center gap-3.5">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent-gradient text-white shadow-lg shadow-black/30">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-white">
                    {group.category}
                  </h3>
                </div>

                {/* tech items as staggered pill chips */}
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-60px' }}
                  className="mt-6 flex flex-wrap gap-2.5"
                >
                  {group.items.map((item) => (
                    <motion.li key={item} variants={staggerItem}>
                      <span className="pill">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
