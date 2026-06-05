import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    const html = document.documentElement
    const body = document.body
    html.style.setProperty('scroll-behavior', 'auto', 'important')

    const goTop = () => {
      window.scrollTo(0, 0)
      html.scrollTop = 0
      body.scrollTop = 0
    }

    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ block: 'start' })
      } else {
        goTop()
      }
    } else {
      goTop()
    }
  }, [pathname, hash])

  return null
}
