import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { navLinks, profile } from '../data/content'
import useScrollSpy from '../hooks/useScrollSpy'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const activeId = useScrollSpy(navLinks.map((l) => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`mx-auto mt-3 flex max-w-content items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled
            ? 'glass shadow-card sm:mx-6 lg:mx-auto'
            : 'border border-transparent bg-transparent'
        }`}
        style={{ width: 'calc(100% - 1.5rem)', maxWidth: '1180px' }}
      >
        {/* Brand */}
        <a
          href="#top"
          onClick={(e) => go(e, 'top')}
          className="group flex items-center gap-2.5"
          aria-label="Back to top"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-accent-gradient font-display text-sm font-bold text-white shadow-glow">
            RK
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-white sm:block">
            {profile.name}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => go(e, link.id)}
                className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  activeId === link.id ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.08] ring-1 ring-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-accent-gradient px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.04] sm:inline-flex"
          >
            Résumé
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <HiX size={20} /> : <HiMenuAlt4 size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-ink-950/80 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            <motion.ul
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="container-rk relative flex flex-col gap-1 pt-24"
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => go(e, link.id)}
                    className={`block rounded-2xl px-4 py-3.5 font-display text-2xl font-semibold ${
                      activeId === link.id ? 'text-gradient' : 'text-slate-300'
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-4 self-start"
              >
                Download Résumé
              </a>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
