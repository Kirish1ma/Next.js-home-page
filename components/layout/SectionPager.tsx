'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { ReactNode, WheelEvent } from 'react'
import { cn } from '@/lib/utils'

type SectionPagerProps = {
  children: ReactNode
  className?: string
}

export function SectionPager({ children, className }: SectionPagerProps) {
  const containerRef = useRef<HTMLElement>(null)
  const touchStartYRef = useRef<number | null>(null)
  const isAnimatingRef = useRef(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const getSections = useCallback(() => {
    return Array.from(containerRef.current?.querySelectorAll<HTMLElement>('section[id]') ?? [])
  }, [])

  const scrollToIndex = useCallback(
    (index: number) => {
      const container = containerRef.current
      const sections = getSections()
      const nextIndex = Math.max(0, Math.min(index, sections.length - 1))
      const target = sections[nextIndex]

      if (!container || !target || isAnimatingRef.current) {
        return
      }

      isAnimatingRef.current = true
      setActiveIndex(nextIndex)
      history.replaceState(null, '', `#${target.id}`)
      container.scrollTo({ top: target.offsetTop, behavior: 'smooth' })

      window.setTimeout(() => {
        isAnimatingRef.current = false
      }, 850)
    },
    [getSections],
  )

  const moveByDirection = useCallback(
    (direction: number) => {
      if (direction === 0) {
        return
      }

      scrollToIndex(activeIndex + direction)
    },
    [activeIndex, scrollToIndex],
  )

  function handleWheel(event: WheelEvent<HTMLElement>) {
    event.preventDefault()

    if (Math.abs(event.deltaY) < 24) {
      return
    }

    moveByDirection(event.deltaY > 0 ? 1 : -1)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault()
        moveByDirection(1)
      }

      if (['ArrowUp', 'PageUp'].includes(event.key)) {
        event.preventDefault()
        moveByDirection(-1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [moveByDirection])

  useEffect(() => {
    const hash = window.location.hash.slice(1)

    if (!hash) {
      return
    }

    const index = getSections().findIndex((section) => section.id === hash)

    if (index >= 0) {
      scrollToIndex(index)
    }
  }, [getSections, scrollToIndex])

  return (
    <main
      ref={containerRef}
      onWheel={handleWheel}
      onTouchStart={(event) => {
        touchStartYRef.current = event.touches[0]?.clientY ?? null
      }}
      onTouchEnd={(event) => {
        const startY = touchStartYRef.current
        const endY = event.changedTouches[0]?.clientY

        if (startY === null || endY === undefined) {
          return
        }

        const delta = startY - endY

        if (Math.abs(delta) > 48) {
          moveByDirection(delta > 0 ? 1 : -1)
        }

        touchStartYRef.current = null
      }}
      className={cn('h-screen overflow-y-hidden scroll-smooth', className)}
    >
      {children}
    </main>
  )
}
