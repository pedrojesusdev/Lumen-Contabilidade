'use client'

import { useEffect, useState, RefObject } from 'react'

interface UseScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollReveal(
  ref: RefObject<Element>,
  options: UseScrollRevealOptions = {}
): boolean {
  const [isVisible, setIsVisible] = useState(false)
  const { threshold = 0.15, rootMargin = '0px 0px -100px 0px', triggerOnce = true } = options

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Se triggerOnce, para de observar após primeira vez
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [ref, threshold, rootMargin, triggerOnce])

  return isVisible
}
