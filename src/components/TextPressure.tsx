import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type Point = {
  x: number
  y: number
}

type TextPressureProps = {
  text?: string
  fontFamily?: string
  fontUrl?: string
  width?: boolean
  weight?: boolean
  italic?: boolean
  alpha?: boolean
  flex?: boolean
  stroke?: boolean
  scale?: boolean
  textColor?: string
  strokeColor?: string
  strokeWidth?: number
  className?: string
  minFontSize?: number
}

const defaultFontUrl =
  'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2'

function getDistance(a: Point, b: Point) {
  const dx = b.x - a.x
  const dy = b.y - a.y

  return Math.sqrt(dx * dx + dy * dy)
}

function getAttributeValue(distance: number, maxDistance: number, minValue: number, maxValue: number) {
  if (maxDistance <= 0) {
    return maxValue
  }

  const value = maxValue - Math.abs((maxValue * distance) / maxDistance)

  return Math.max(minValue, value + minValue)
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export default function TextPressure({
  text = 'Compressa',
  fontFamily = 'Compressa VF',
  fontUrl = defaultFontUrl,
  width = true,
  weight = true,
  italic = true,
  alpha = false,
  flex = true,
  stroke = false,
  scale = false,
  textColor = '#ffffff',
  strokeColor = '#ff0000',
  strokeWidth = 2,
  className = '',
  minFontSize = 24,
}: TextPressureProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const spansRef = useRef<(HTMLSpanElement | null)[]>([])
  const pointerRef = useRef<Point>({ x: 0, y: 0 })
  const easedPointerRef = useRef<Point>({ x: 0, y: 0 })

  const [fontSize, setFontSize] = useState(minFontSize)
  const [scaleY, setScaleY] = useState(1)
  const [lineHeight, setLineHeight] = useState(1)

  const characters = useMemo(() => Array.from(text), [text])

  const initializePointer = useCallback(() => {
    const container = containerRef.current

    if (!container) {
      return
    }

    const { left, top, width: containerWidth, height } = container.getBoundingClientRect()
    const center = {
      x: left + containerWidth / 2,
      y: top + height / 2,
    }

    pointerRef.current = center
    easedPointerRef.current = center
  }, [])

  const setSize = useCallback(() => {
    const container = containerRef.current
    const title = titleRef.current

    if (!container || !title) {
      return
    }

    const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect()
    const nextFontSize = Math.max(containerWidth / Math.max(characters.length / 2, 1), minFontSize)

    setFontSize(nextFontSize)
    setScaleY(1)
    setLineHeight(1)

    window.requestAnimationFrame(() => {
      const nextTitle = titleRef.current

      if (!nextTitle) {
        return
      }

      const textRect = nextTitle.getBoundingClientRect()

      if (scale && textRect.height > 0) {
        const yRatio = containerHeight / textRect.height

        setScaleY(yRatio)
        setLineHeight(yRatio)
      }
    })
  }, [characters.length, minFontSize, scale])

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      pointerRef.current = {
        x: event.clientX,
        y: event.clientY,
      }
    }

    function handleTouchMove(event: TouchEvent) {
      const touch = event.touches[0]

      if (!touch) {
        return
      }

      pointerRef.current = {
        x: touch.clientX,
        y: touch.clientY,
      }
    }

    initializePointer()
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [initializePointer])

  useEffect(() => {
    let frameId = window.requestAnimationFrame(setSize)
    const container = containerRef.current
    const resizeObserver =
      typeof ResizeObserver === 'undefined'
        ? null
        : new ResizeObserver(() => {
            window.cancelAnimationFrame(frameId)
            frameId = window.requestAnimationFrame(setSize)
          })

    if (container && resizeObserver) {
      resizeObserver.observe(container)
    }

    document.fonts?.ready.then(() => {
      frameId = window.requestAnimationFrame(setSize)
    })

    window.addEventListener('resize', setSize)

    return () => {
      window.cancelAnimationFrame(frameId)
      resizeObserver?.disconnect()
      window.removeEventListener('resize', setSize)
    }
  }, [setSize])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    let frameId = 0

    function animate() {
      easedPointerRef.current.x += (pointerRef.current.x - easedPointerRef.current.x) / 15
      easedPointerRef.current.y += (pointerRef.current.y - easedPointerRef.current.y) / 15

      const title = titleRef.current

      if (title) {
        const titleRect = title.getBoundingClientRect()
        const maxDistance = titleRect.width / 2

        spansRef.current.forEach((span) => {
          if (!span) {
            return
          }

          const rect = span.getBoundingClientRect()
          const center = {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2,
          }
          const distance = getDistance(easedPointerRef.current, center)
          const variationWidth = width
            ? Math.floor(clamp(getAttributeValue(distance, maxDistance, 5, 200), 65, 205))
            : 100
          const variationWeight = weight
            ? Math.floor(clamp(getAttributeValue(distance, maxDistance, 100, 900), 120, 920))
            : 400
          const variationItalic = italic
            ? clamp(getAttributeValue(distance, maxDistance, 0, 1), 0, 1).toFixed(2)
            : '0'
          const variationAlpha = alpha
            ? clamp(getAttributeValue(distance, maxDistance, 0, 1), 0.34, 1).toFixed(2)
            : '1'
          const fontVariationSettings = `'wght' ${variationWeight}, 'wdth' ${variationWidth}, 'ital' ${variationItalic}`

          if (span.style.fontVariationSettings !== fontVariationSettings) {
            span.style.fontVariationSettings = fontVariationSettings
          }

          if (alpha && span.style.opacity !== variationAlpha) {
            span.style.opacity = variationAlpha
          }
        })
      }

      frameId = window.requestAnimationFrame(animate)
    }

    frameId = window.requestAnimationFrame(animate)

    return () => window.cancelAnimationFrame(frameId)
  }, [alpha, italic, weight, width])

  const fontFaceStyle = useMemo(
    () => `
      @font-face {
        font-family: '${fontFamily}';
        src: url('${fontUrl}') format('woff2');
        font-display: swap;
        font-style: normal;
        font-weight: 100 900;
      }

      .text-pressure-stroke span {
        position: relative;
        color: ${textColor};
      }

      .text-pressure-stroke span::after {
        content: attr(data-char);
        position: absolute;
        inset: 0;
        z-index: -1;
        color: transparent;
        -webkit-text-stroke-color: ${strokeColor};
        -webkit-text-stroke-width: ${strokeWidth}px;
      }
    `,
    [fontFamily, fontUrl, strokeColor, strokeWidth, textColor],
  )

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden bg-transparent">
      <style>{fontFaceStyle}</style>
      <h1
        ref={titleRef}
        aria-label={text}
        className={`text-pressure-title ${className} ${
          flex ? 'flex justify-between gap-[0.015em]' : ''
        } ${stroke ? 'text-pressure-stroke' : ''} text-center uppercase`}
        style={{
          color: stroke ? undefined : textColor,
          fontFamily,
          fontSize,
          fontWeight: 100,
          lineHeight,
          margin: 0,
          transform: `scale(1, ${scaleY})`,
          transformOrigin: 'center top',
        }}
      >
        {characters.map((character, index) => (
          <span
            key={`${character}-${index}`}
            ref={(element) => {
              spansRef.current[index] = element
            }}
            className="inline-block transform-gpu whitespace-pre"
            data-char={character}
            aria-hidden="true"
          >
            {character === ' ' ? '\u00A0' : character}
          </span>
        ))}
      </h1>
    </div>
  )
}
