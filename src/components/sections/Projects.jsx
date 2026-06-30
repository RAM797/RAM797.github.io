import { motion } from 'framer-motion'
import {
  FiCpu,
  FiZap,
  FiActivity,
  FiGrid,
  FiTrendingUp,
  FiArrowUpRight,
} from 'react-icons/fi'

import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import { staggerContainer, staggerItem } from '../ui/Reveal'
import { projects } from '../../data/content'

// ─────────────────────────────────────────────────────────────────────────
// Pick a fitting icon per project based on its name. Keeps the cards
// visually differentiated without adding icon data to the content file.
// ─────────────────────────────────────────────────────────────────────────
function iconFor(name) {
  const n = name.toLowerCase()
  if (n.includes('cuda') || n.includes('gemm')) return FiCpu
  if (n.includes('llm') || n.includes('llama') || n.includes('inference')) return FiZap
  if (n.includes('trivia') || n.includes('truths')) return FiActivity
  if (n.includes('meme') || n.includes('recommend')) return FiTrendingUp
  return FiGrid
}

// Small gradient-accented stat chip — emphasizes the metric value.
function MetricChip({ label }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs font-semibold text-slate-200">
      <span className="text-gradient">{label}</span>
    </span>
  )
}

// ─────────────────────────────────────────────────────────────────────────
// A single project card. Featured cards get a gradient border, a "Featured"
// pill, a larger title, and slightly more breathing room.
// ─────────────────────────────────────────────────────────────────────────
function ProjectCard({ project }) {
  const Icon = iconFor(project.name)
  const { featured } = project

  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative h-full"
    >
      {/* Gradient border wrapper for featured cards */}
      <div
        className={
          featured
            ? 'h-full rounded-2xl bg-accent-gradient p-px shadow-lg shadow-maroon-700/10'
            : 'h-full'
        }
      >
        <div
          className={`flex h-full flex-col rounded-2xl ${
            featured ? 'bg-ink-900/95 p-8 backdrop-blur-xl' : 'glass glass-hover p-6'
          }`}
        >
          {/* Top row: gradient icon badge · meta (featured pill + period) */}
          <div className="flex items-start justify-between gap-4">
            <span
              className={`inline-flex shrink-0 items-center justify-center rounded-xl bg-accent-gradient text-white shadow-md shadow-maroon-700/20 ${
                featured ? 'h-12 w-12' : 'h-11 w-11'
              }`}
              aria-hidden="true"
            >
              <Icon className={featured ? 'h-6 w-6' : 'h-5 w-5'} />
            </span>

            <div className="flex flex-col items-end gap-2 text-right">
              {featured && (
                <span className="pill bg-accent-gradient text-[11px] font-semibold uppercase tracking-wide text-white">
                  Featured
                </span>
              )}
              <span className="text-xs font-medium text-slate-500">{project.period}</span>
            </div>
          </div>

          {/* Title */}
          <h3
            className={`mt-5 font-display font-bold leading-snug text-white ${
              featured ? 'text-2xl sm:text-[26px]' : 'text-xl'
            }`}
          >
            {project.name}
          </h3>

          {/* Blurb */}
          <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.blurb}</p>

          {/* Metric tiles — make the numbers pop */}
          {project.metrics?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.metrics.map((m) => (
                <MetricChip key={m} label={m} />
              ))}
            </div>
          )}

          {/* Tags pinned to the bottom */}
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
            {project.tags.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}

            {/* Decorative hover affordance — shifts on hover, no link */}
            <FiArrowUpRight
              className="ml-auto h-5 w-5 shrink-0 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-400"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </motion.article>
  )
}

// ─────────────────────────────────────────────────────────────────────────
// Projects section — bento-style 2-column grid with emphasized featured work.
// ─────────────────────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Selected Work"
        title={
          <>
            Things I&apos;ve <span className="text-gradient">built</span>
          </>
        }
        kicker="Systems, ML, and GPU projects — tuned for throughput, latency, and scale."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </motion.div>
    </Section>
  )
}
