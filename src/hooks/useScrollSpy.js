import { useEffect, useState } from 'react'

/**
 * Tracks which section id is currently in view for nav highlighting.
 * @param {string[]} ids - section element ids to observe
 * @param {object} options - IntersectionObserver options
 */
export default function useScrollSpy(ids, options = { rootMargin: '-45% 0px -50% 0px' }) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveId(entry.target.id)
      })
    }, options)

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(',')])

  return activeId
}
