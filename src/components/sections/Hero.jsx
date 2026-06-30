import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import { profile, socials, stats } from '../../data/content'

// Tech labels that orbit the gradient core in the hero visual
const ORBIT = [
  { label: 'CUDA', r: 0 },
  { label: 'Go', r: 51 },
  { label: 'gRPC', r: 102 },
  { label: 'Kafka', r: 153 },
  { label: 'PyTorch', r: 204 },
  { label: 'Kubernetes', r: 255 },
  { label: 'LLM', r: 306 },
]

function RoleRotator() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600)
    return () => clearInterval(t)
  }, [])
  return (
    <span className="relative inline-flex h-[1.25em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient whitespace-nowrap font-display font-bold"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function OrbitVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* glow core */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.55), rgba(143,29,60,0.35), transparent 70%)' }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* center monogram */}
      <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-ink-900/70 backdrop-blur-xl shadow-glow">
        <span className="bg-clip-text font-display text-3xl font-bold text-transparent" style={{ backgroundImage: 'linear-gradient(120deg,#d65b7e,#c084fc)' }}>
          RK
        </span>
      </div>

      {/* orbit rings */}
      {[0.62, 0.82, 1].map((s, idx) => (
        <div
          key={idx}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]"
          style={{ width: `${s * 100}%`, height: `${s * 100}%` }}
        />
      ))}

      {/* rotating ring with tech labels (numeric rotations only) */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
      >
        {ORBIT.map((t) => (
          <div
            key={t.label}
            className="absolute left-1/2 top-1/2 h-0 w-0"
            // static placement around the circle (plain CSS, never animated)
            style={{ transform: `rotate(${t.r}deg) translateY(-150px)` }}
          >
            {/* cancel the static placement angle so the label sits upright... */}
            <div style={{ transform: `rotate(${-t.r}deg)` }}>
              {/* ...then counter-spin the live 360° rotation (numeric) */}
              <motion.span
                className="pill absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-xs shadow-card"
                animate={{ rotate: -360 }}
                transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
              >
                {t.label}
              </motion.span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const ease = [0.22, 1, 0.36, 1]
  const socialLinks = [
    { href: socials.github, icon: FiGithub, label: 'GitHub' },
    { href: socials.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
    { href: socials.email, icon: FiMail, label: 'Email' },
  ]

  return (
    <section className="section-anchor relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      <div className="container-rk">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* ── Left: copy ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-slate-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to AI infra · distributed systems · backend roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl text-balance"
            >
              Hi, I&apos;m{' '}
              <span className="text-gradient">{profile.firstName}.</span>
              <br />
              <span className="text-slate-300">I build</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease }}
              className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
            >
              <RoleRotator />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease }}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg text-pretty"
            >
              {profile.tagline} Currently tech-leading device telemetry at{' '}
              <span className="font-semibold text-slate-200">Amazon (Lab126)</span> — previously{' '}
              <span className="font-semibold text-slate-200">HPE</span> and{' '}
              <span className="font-semibold text-slate-200">Oracle</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary"
              >
                View my work <FiArrowRight />
              </a>
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                <FiDownload /> Résumé
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.42, ease }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex items-center gap-2">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition-all hover:border-violet-500/40 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <span className="h-5 w-px bg-white/10" />
              <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
                <FiMapPin size={15} className="text-violet-400" /> {profile.location}
              </span>
            </motion.div>
          </div>

          {/* ── Right: orbital visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="hidden lg:block"
          >
            <OrbitVisual />
          </motion.div>
        </div>

        {/* ── Stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-900/40 px-5 py-6 text-center sm:text-left">
              <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs text-slate-400 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1.5">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-violet-400"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
