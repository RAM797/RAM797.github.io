import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import { profile, socials, navLinks } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  const links = [
    { href: socials.github, icon: FiGithub, label: 'GitHub' },
    { href: socials.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
    { href: socials.email, icon: FiMail, label: 'Email' },
  ]

  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="container-rk">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <a href="#top" className="font-display text-lg font-bold text-white">
              {profile.name}
            </a>
            <p className="mt-2 max-w-xs text-sm text-slate-400">
              {profile.location} · {profile.seeking}
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {links.map(({ href, icon: Icon, label }) => (
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
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {year} {profile.name}. Built with React, Vite &amp; Framer Motion.</p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            Back to top <FiArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
