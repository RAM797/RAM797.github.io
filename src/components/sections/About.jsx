import { motion } from 'framer-motion'
import { FiMapPin, FiCheckCircle } from 'react-icons/fi'

import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal, { staggerContainer, staggerItem } from '../ui/Reveal'
import { ramPortrait } from '../../assets'
import { about, profile, stats } from '../../data/content'

/**
 * About — two-column intro: portrait in a glass/gradient frame on the left,
 * narrative + focus chips on the right, with a full-width stats strip below.
 */
export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Me"
        title={
          <>
            Engineering at the seam of{' '}
            <span className="text-gradient">scale and intelligence</span>
          </>
        }
        kicker={profile.seeking}
      />

      <div className="mt-14 grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-14 lg:gap-16">
        {/* LEFT — portrait in a gradient/glass frame with a gentle float */}
        <Reveal y={32} className="mx-auto w-full max-w-md md:mx-0">
          <motion.div
            className="relative"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* soft gradient glow behind the frame */}
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent-gradient opacity-25 blur-3xl"
            />

            <div className="glass relative overflow-hidden rounded-2xl border border-white/10 p-2 shadow-2xl shadow-black/40">
              {/* thin gradient ring inside the frame */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={ramPortrait}
                  alt={profile.name}
                  width={760}
                  height={1013}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover object-center"
                />
              </div>

              {/* subtle gradient wash over the image bottom for depth */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-2 rounded-xl bg-gradient-to-t from-ink-950/70 via-transparent to-transparent"
              />
            </div>

            {/* floating "available" badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass absolute -bottom-4 -right-3 flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 shadow-lg shadow-black/40 sm:-right-5"
            >
              <FiCheckCircle className="h-4 w-4 text-violet-400" />
              Available for opportunities
            </motion.div>

            {/* floating location pin badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass absolute -left-3 -top-4 flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 shadow-lg shadow-black/40 sm:-left-5"
            >
              <FiMapPin className="h-4 w-4 text-maroon-400" />
              {profile.location}
            </motion.div>
          </motion.div>
        </Reveal>

        {/* RIGHT — narrative + focus chips */}
        <div className="flex flex-col">
          <Reveal y={28}>
            <p className="text-lg leading-relaxed text-slate-200 sm:text-xl">
              {about.intro}
            </p>
          </Reveal>

          <div className="mt-6 space-y-4">
            {about.body.map((paragraph, i) => (
              <Reveal key={i} y={24} delay={0.1 + i * 0.08}>
                <p className="text-base leading-relaxed text-slate-400">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          {/* What I work on — staggered pill chips */}
          <Reveal y={20} delay={0.2} className="mt-8">
            <p className="eyebrow mb-4">
              <span className="h-px w-6 bg-violet-400/60" />
              What I work on
            </p>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-wrap gap-2.5"
            >
              {about.focus.map((item) => (
                <motion.li key={item} variants={staggerItem}>
                  <span className="pill">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </Reveal>
        </div>
      </div>

      {/* Full-width stats strip */}
      <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 lg:mt-20 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} y={24} delay={i * 0.1}>
            <div className="glass glass-hover h-full rounded-2xl border border-white/10 p-6 text-center sm:p-7">
              <div className="text-gradient font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm leading-snug text-slate-400">
                {stat.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
