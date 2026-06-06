import { useEffect, useMemo, useRef, useState } from 'react'

type TypewriterHeroTitleProps = {
  text: string
}

function shouldTypeOnFirstRender() {
  return typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const START_DELAY_MS = 680
const CURSOR_SETTLE_MS = 520

function getCharacterDelay(character: string, nextCharacter: string | undefined, index: number) {
  if (character === '.') {
    return 230
  }

  if (character === '-' || character === '–' || character === '—') {
    return 120
  }

  if (character === ' ') {
    return nextCharacter === nextCharacter?.toUpperCase() ? 64 : 42
  }

  return 32 + ((index % 5) * 7)
}

export function TypewriterHeroTitle({ text }: TypewriterHeroTitleProps) {
  const characters = useMemo(() => Array.from(text), [text])
  const [visibleCount, setVisibleCount] = useState(() => (shouldTypeOnFirstRender() ? 0 : Array.from(text).length))
  const [isTyping, setIsTyping] = useState(shouldTypeOnFirstRender)
  const timeoutRef = useRef<number | null>(null)
  const visibleText = characters.slice(0, visibleCount).join('')

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    function clearTypingTimeout() {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }

    function finishImmediately() {
      clearTypingTimeout()
      setVisibleCount(characters.length)
      setIsTyping(false)
    }

    if (motionQuery.matches || characters.length === 0) {
      timeoutRef.current = window.setTimeout(finishImmediately, 0)
      return
    }

    function typeCharacter(index: number) {
      if (index >= characters.length) {
        timeoutRef.current = window.setTimeout(() => {
          setIsTyping(false)
        }, CURSOR_SETTLE_MS)
        return
      }

      setVisibleCount(index + 1)
      timeoutRef.current = window.setTimeout(
        () => typeCharacter(index + 1),
        getCharacterDelay(characters[index], characters[index + 1], index),
      )
    }

    function handleMotionChange(event: MediaQueryListEvent) {
      if (event.matches) {
        finishImmediately()
      }
    }

    motionQuery.addEventListener('change', handleMotionChange)
    timeoutRef.current = window.setTimeout(() => {
      setVisibleCount(0)
      setIsTyping(true)
      timeoutRef.current = window.setTimeout(() => typeCharacter(0), START_DELAY_MS)
    }, 0)

    return () => {
      clearTypingTimeout()
      motionQuery.removeEventListener('change', handleMotionChange)
    }
  }, [characters])

  return (
    <h1
      className="np-hero-title relative font-heading text-[clamp(2.75rem,7.2vw,6rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-[oklch(0.985_0_0)]"
      aria-label={text}
    >
      <span className="invisible block select-none" aria-hidden="true">
        {text}
      </span>
      <span className="absolute inset-0" aria-hidden="true">
        {visibleText}
        <span className={isTyping && visibleCount > 0 ? 'np-type-cursor' : 'np-type-cursor opacity-0'} />
      </span>
    </h1>
  )
}
