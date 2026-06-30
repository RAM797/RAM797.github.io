import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiMail,
  FiMapPin,
  FiArrowUpRight,
  FiCopy,
  FiCheck,
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi'

import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { profile, socials } from '../../data/content'

/**
 * Contact — the closing CTA finale.
 *
 * A single bold glass panel with a gradient mesh glow, centered heading,
 * primary/secondary CTAs, and a responsive row of contact-method tiles
 * (copyable email, location, GitHub, LinkedIn).
 */
export default function Contact() {
  // Tracks the brief "copied!" confirmation state for the email tile.
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      // Revert the icon back to the copy glyph after a short beat.
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard can be unavailable (insecure context / denied) — fail quietly.
    }
  }

  return (
    <Section id="contact">
      <Reveal>
        {/* Hero panel — strong glow + mesh backdrop for the finale */}
        <div className="relative overflow-hidden rounded-3xl glass px-6 py-16 sm:px-12 sm:py-20 lg:py-24">
          {/* Decorative gradient mesh + radial glows (non-interactive) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-mesh opacity-60"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-gradient opacity-25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 right-0 h-72 w-72 rounded-full bg-violet/20 blur-3xl"
          />

          {/* Foreground content */}
          <div className="relative flex flex-col items-center">
            <SectionHeading
              align="center"
              eyebrow="Get in touch"
              title={
                <>
                  Let&apos;s build something{' '}
                  <span className="text-gradient">that scales</span>
                </>
              }
            />

            <Reveal delay={0.05} className="mt-5 max-w-xl text-center">
              <p className="text-base leading-relaxed text-slate-300 sm:text-lg text-pretty">
                {profile.seeking} Drop a line — I&apos;m always happy to talk
                infra, systems, and what we could build together.
              </p>
            </Reveal>

            {/* Primary + secondary CTAs */}
            <Reveal
              delay={0.1}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
            >
              <a
                href={socials.email}
                className="btn-primary"
                aria-label="Send an email to Ram"
              >
                <FiMail aria-hidden="true" />
                Say hello
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
                aria-label="View résumé (opens in a new tab)"
              >
                View résumé
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </Reveal>

            {/* Contact-method tiles — stack on mobile, row on desktop */}
            <Reveal
              delay={0.15}
              className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {/* Email tile with copy-to-clipboard */}
              <div className="glass glass-hover flex items-center gap-3 rounded-2xl px-4 py-3.5 text-left">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-gradient text-white">
                  <FiMail aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Email
                  </p>
                  <p className="truncate text-sm font-medium text-slate-200">
                    {profile.email}
                  </p>
                </div>
                <motion.button
                  type="button"
                  onClick={copyEmail}
                  whileTap={{ scale: 0.92 }}
                  aria-label={copied ? 'Email copied' : 'Copy email address'}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-300 transition hover:bg-ink-700 hover:text-white"
                >
                  {copied ? (
                    <FiCheck className="text-violet-400" aria-hidden="true" />
                  ) : (
                    <FiCopy aria-hidden="true" />
                  )}
                </motion.button>
              </div>

              {/* Location tile — non-interactive */}
              <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3.5 text-left">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-700 text-violet-400">
                  <FiMapPin aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Location
                  </p>
                  <p className="truncate text-sm font-medium text-slate-200">
                    {profile.location}
                  </p>
                </div>
              </div>

              {/* GitHub tile */}
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
                className="glass glass-hover group flex items-center gap-3 rounded-2xl px-4 py-3.5 text-left"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-700 text-slate-200">
                  <FiGithub aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    GitHub
                  </p>
                  <p className="truncate text-sm font-medium text-slate-200">
                    @RAM797
                  </p>
                </div>
                <FiArrowUpRight
                  aria-hidden="true"
                  className="shrink-0 text-slate-500 transition group-hover:text-violet-400"
                />
              </a>

              {/* LinkedIn tile */}
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
                className="glass glass-hover group flex items-center gap-3 rounded-2xl px-4 py-3.5 text-left"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-700 text-violet-400">
                  <FiLinkedin aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    LinkedIn
                  </p>
                  <p className="truncate text-sm font-medium text-slate-200">
                    in/ramsankar797
                  </p>
                </div>
                <FiArrowUpRight
                  aria-hidden="true"
                  className="shrink-0 text-slate-500 transition group-hover:text-violet-400"
                />
              </a>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
