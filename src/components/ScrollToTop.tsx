import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    const html = document.documentElement
    const body = document.body
    const previousBehavior = html.style.scrollBehavior
    html.style.scrollBehavior = 'auto'

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

    requestAnimationFrame(() => {
      html.style.scrollBehavior = previousBehavior
    })
  }, [pathname, hash])

  return null
}
