import { motion } from 'framer-motion'
import { FiMapPin, FiChevronRight } from 'react-icons/fi'

import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal, { staggerContainer, staggerItem } from '../ui/Reveal'
import { experience } from '../../data/content'

/**
 * Experience — a vertical career timeline.
 *
 * Layout: a single gradient rail (maroon → violet) runs down the left edge.
 * Each role sits as a glass card to the right of a node on that rail. The
 * current role gets a pulsing dot + a "Now" badge. Cards stagger in on scroll.
 *
 * The rail lives at a fixed left offset so the geometry is identical on mobile
 * and desktop — only the spacing grows. This keeps things overflow-safe.
 */
export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Career"
        title={
          <>
            Where I&apos;ve <span className="text-gradient">shipped</span>
          </>
        }
        kicker="Five-plus years across telemetry platforms, cloud storage, database infrastructure, and ML research."
      />

      {/* Timeline. The rail is absolutely positioned; cards are padded to clear it. */}
      <motion.ol
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="relative mt-14 sm:mt-16"
      >
        {/* Vertical gradient rail */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-maroon-500 via-violet-500 to-violet-400/30 sm:left-[15px]"
        />

        {experience.map((job, i) => (
          <TimelineEntry key={`${job.company}-${job.start}`} job={job} index={i} />
        ))}
      </motion.ol>
    </Section>
  )
}

/** A single timeline row: node on the rail + glass card. */
function TimelineEntry({ job, index }) {
  const { company, role, team, location, start, end, current, highlights, tags } = job
  const isFirst = index === 0

  return (
    <motion.li
      variants={staggerItem}
      className="relative pl-10 sm:pl-14 [&:not(:last-child)]:pb-10 sm:[&:not(:last-child)]:pb-12"
    >
      {/* Node on the rail */}
      <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center sm:h-8 sm:w-8">
        {current ? (
          <>
            {/* Pulsing ping ring for the current role */}
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-violet-500/40"
              animate={{ scale: [1, 1.9, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="relative h-3 w-3 rounded-full bg-accent-gradient ring-4 ring-ink-950 sm:h-3.5 sm:w-3.5" />
          </>
        ) : (
          <span className="relative h-2.5 w-2.5 rounded-full bg-violet-400/70 ring-4 ring-ink-950 sm:h-3 sm:w-3" />
        )}
      </span>

      {/* Card */}
      <div className="glass glass-hover rounded-2xl p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
          <div className="min-w-0">
            <h3 className="font-display text-lg font-bold leading-tight text-white sm:text-xl">
              {role}
            </h3>
            <p className="mt-1 text-base font-semibold text-gradient">{company}</p>
            {team && <p className="mt-0.5 text-sm text-slate-400">{team}</p>}
          </div>

          {current && (
            <span className="pill shrink-0 border-violet-500/40 text-violet-300">
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent-gradient" />
              Now
            </span>
          )}
        </div>

        {/* Meta row: dates + location */}
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-400">
          <span className="font-medium text-slate-300">
            {start} <span className="text-slate-500">–</span> {end}
          </span>
          {location && (
            <span className="inline-flex items-center gap-1.5">
              <FiMapPin className="h-3.5 w-3.5 text-violet-400/80" aria-hidden="true" />
              {location}
            </span>
          )}
        </div>

        {/* Highlights with custom gradient chevron markers */}
        <ul className="mt-4 space-y-2.5">
          {highlights.map((h, hi) => (
            <li key={hi} className="flex gap-2.5">
              <FiChevronRight
                aria-hidden="true"
                className="mt-1 h-3.5 w-3.5 shrink-0 text-maroon-400"
              />
              <span
                className={`text-sm leading-relaxed ${
                  isFirst && hi === 0 ? 'text-slate-200' : 'text-slate-300'
                }`}
              >
                {h}
              </span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        {tags?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.li>
  )
}
