import { useEffect, useRef, useState } from 'react'

export default function useFadeIn(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
