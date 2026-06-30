import { motion } from 'framer-motion'
import { FiAward, FiMapPin, FiCalendar, FiBookOpen } from 'react-icons/fi'

import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import { staggerContainer, staggerItem } from '../ui/Reveal'
import { education } from '../../data/content'
import { aggiePark } from '../../assets'

// ─────────────────────────────────────────────────────────────────────────
// Small reusable bits
// ─────────────────────────────────────────────────────────────────────────

// A single award rendered as a highlighted pill with a gradient-tinted icon.
function AwardItem({ award }) {
  return (
    <li className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <span
        className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-accent-gradient text-white shadow-sm shadow-maroon-700/20"
        aria-hidden="true"
      >
        <FiAward className="h-3.5 w-3.5" />
      </span>
      <span className="text-sm leading-relaxed text-slate-300">{award}</span>
    </li>
  )
}

// Location + date-range meta row, shared across both card styles.
function MetaRow({ entry }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
      <span className="inline-flex items-center gap-2">
        <FiMapPin className="h-4 w-4 text-violet-400" aria-hidden="true" />
        {entry.location}
      </span>
      <span className="inline-flex items-center gap-2">
        <FiCalendar className="h-4 w-4 text-violet-400" aria-hidden="true" />
        {entry.start} – {entry.end}
      </span>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────
// HERO card — Texas A&M (index 0). Full-width banner image header with a
// dark gradient overlay, the school name overlaid, and a striking gradient
// GPA stat. Maroon is A&M's color, so we lean into it.
// ─────────────────────────────────────────────────────────────────────────
function HeroEducationCard({ entry }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group relative overflow-hidden rounded-2xl bg-accent-gradient p-px shadow-xl shadow-maroon-700/20"
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900">
        {/* Banner: Aggie Park / Kyle Field at night with dark gradient overlay */}
        <div className="relative h-48 w-full overflow-hidden sm:h-56 lg:h-64">
          <img
            src={aggiePark}
            alt="Kyle Field at Texas A&amp;M University lit at night, with reflections over Aggie Park's water"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Dark gradient overlay for readable overlaid text */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/10"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-maroon-700/40 via-transparent to-violet-600/20"
            aria-hidden="true"
          />

          {/* Overlaid school identity */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 sm:p-8">
            <span className="pill w-fit bg-accent-gradient text-[11px] font-semibold uppercase tracking-wide text-white">
              Graduate Study
            </span>
            <h3 className="font-display text-2xl font-bold leading-tight text-white drop-shadow-sm sm:text-3xl md:text-4xl">
              {entry.school}
            </h3>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-6 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-3">
              <p className="inline-flex items-center gap-2 font-display text-lg font-semibold text-white">
                <FiBookOpen className="h-5 w-5 text-violet-400" aria-hidden="true" />
                {entry.degree}
              </p>
              <MetaRow entry={entry} />
            </div>

            {/* Striking gradient GPA stat — celebrate the 4.0 */}
            <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center">
              <span className="block font-display text-3xl font-bold leading-none text-gradient sm:text-4xl">
                {entry.detail.replace(/^GPA\s*/i, '')}
              </span>
              <span className="mt-1.5 block text-[11px] font-medium uppercase tracking-wide text-slate-400">
                Grade Point Average
              </span>
            </div>
          </div>

          {/* Awards */}
          {entry.awards?.length > 0 && (
            <ul className="flex flex-col gap-2.5">
              {entry.awards.map((award) => (
                <AwardItem key={award} award={award} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.article>
  )
}

// ─────────────────────────────────────────────────────────────────────────
// Standard glass card — used for NIT (no image, subtle gradient header bar).
// ─────────────────────────────────────────────────────────────────────────
function EducationCard({ entry }) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="glass glass-hover overflow-hidden rounded-2xl"
    >
      {/* Subtle gradient header bar in place of an image */}
      <div className="h-1.5 w-full bg-accent-gradient" aria-hidden="true" />

      <div className="flex flex-col gap-6 p-6 sm:p-8">
        <div className="flex flex-col gap-3">
          <span className="pill w-fit text-[11px] font-semibold uppercase tracking-wide">
            Undergraduate
          </span>
          <h3 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
            {entry.school}
          </h3>
          <p className="inline-flex items-center gap-2 font-display text-lg font-semibold text-white">
            <FiBookOpen className="h-5 w-5 text-violet-400" aria-hidden="true" />
            {entry.degree}
          </p>
          <p className="text-sm leading-relaxed text-slate-400">{entry.detail}</p>
          <MetaRow entry={entry} />
        </div>

        {/* Awards */}
        {entry.awards?.length > 0 && (
          <ul className="flex flex-col gap-2.5">
            {entry.awards.map((award) => (
              <AwardItem key={award} award={award} />
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  )
}

// ─────────────────────────────────────────────────────────────────────────
// Education section — A&M hero card full width on top, NIT card below.
// ─────────────────────────────────────────────────────────────────────────
export default function Education() {
  const [hero, ...rest] = education

  return (
    <Section id="education">
      <SectionHeading
        eyebrow="Education"
        title={
          <>
            Where I <span className="text-gradient">studied</span>
          </>
        }
        kicker="Graduate work at Texas A&amp;M and an engineering foundation from NIT Trichy."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-12 flex flex-col gap-6"
      >
        {hero && <HeroEducationCard entry={hero} />}

        {rest.length > 0 && (
          <div className="grid grid-cols-1 gap-6">
            {rest.map((entry) => (
              <EducationCard key={entry.school} entry={entry} />
            ))}
          </div>
        )}
      </motion.div>
    </Section>
  )
}
