import Reveal from './Reveal'

/**
 * Consistent section header: eyebrow label, large display title, optional kicker.
 */
export default function SectionHeading({ eyebrow, title, kicker, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow && (
        <span className="eyebrow mb-4">
          <span className="h-px w-6 bg-violet-400/60" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl text-balance">
        {title}
      </h2>
      {kicker && (
        <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg text-pretty">
          {kicker}
        </p>
      )}
    </Reveal>
  )
}
