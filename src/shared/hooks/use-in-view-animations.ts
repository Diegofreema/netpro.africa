import { useEffect } from 'react'

const revealSelector = '[data-reveal]'
const revealEnabledClass = 'np-reveal-enabled'
const visibleClass = 'np-reveal-visible'

export function useInViewAnimations() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add(visibleClass))
      return
    }

    document.documentElement.classList.add(revealEnabledClass)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add(visibleClass)
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.15,
      },
    )

    elements.forEach((element) => observer.observe(element))

    let frameId = 0

    function revealVisibleElements() {
      frameId = 0
      elements.forEach((element) => {
        if (element.classList.contains(visibleClass)) {
          return
        }

        const rect = element.getBoundingClientRect()
        const isInViewport = rect.bottom > 0 && rect.top < window.innerHeight

        if (isInViewport) {
          element.classList.add(visibleClass)
          observer.unobserve(element)
        }
      })
    }

    function requestRevealCheck() {
      if (frameId) {
        return
      }

      frameId = window.requestAnimationFrame(revealVisibleElements)
    }

    window.requestAnimationFrame(revealVisibleElements)
    window.setTimeout(revealVisibleElements, 250)
    window.addEventListener('scroll', requestRevealCheck, { passive: true })
    window.addEventListener('resize', requestRevealCheck)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', requestRevealCheck)
      window.removeEventListener('resize', requestRevealCheck)

      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }

      document.documentElement.classList.remove(revealEnabledClass)
    }
  }, [])
}
