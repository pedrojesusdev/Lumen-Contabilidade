'use client'

import { useEffect, useState, RefObject } from 'react'

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
}

export function useIntersectionObserver(
  ref: RefObject<Element>,
  options: UseIntersectionObserverProps = {}
): boolean {
  const [isVisible, setIsVisible] = useState(false)
  const { threshold = 0.1, rootMargin = '0px' } = options

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Uma vez visível, mantém visível
        if (entry.isIntersecting) {
          setIsVisible(true)
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
  }, [ref, threshold, rootMargin])

  return isVisible
}
