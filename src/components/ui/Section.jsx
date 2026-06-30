/**
 * Standard full-width section wrapper with anchor id + vertical rhythm.
 */
export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`section-anchor relative py-24 sm:py-28 lg:py-32 ${className}`}>
      <div className="container-rk">{children}</div>
    </section>
  )
}
