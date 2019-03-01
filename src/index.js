/* global window */
import { useState, useEffect } from 'react'
import { throttle } from 'lodash'

function useScrollTop() {
  const [isTop, setTop] = useState(true)

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > 0) {
        setTop(false)
      } else {
        setTop(true)
      }
    }, 100)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return isTop
}

export default useScrollTop
