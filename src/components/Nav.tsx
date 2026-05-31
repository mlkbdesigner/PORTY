import { motion, useScroll, useMotionValueEvent } from 'motion/react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { label: 'Sobre', to: '/#sobre' },
  { label: 'Portfólio', to: '/#portfolio' },
  { label: 'Serviços', to: '/#servicos' },
  { label: 'Processo', to: '/#processo' },
  { label: 'Contato', to: '/#contato' },
]

export default function Nav() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [hideForPortfolio, setHideForPortfolio] = useState(false)
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false })
  )

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 40))

  // Hide nav while inside the Portfolio folder-stack section (immersion)
  useEffect(() => {
    const portfolio = document.getElementById('portfolio')
    if (!portfolio) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideForPortfolio(entry.isIntersecting && entry.intersectionRatio > 0.15)
      },
      { threshold: [0, 0.15, 0.3, 0.5, 1] }
    )
    observer.observe(portfolio)
    return () => observer.disconnect()
  }, [])

  if (typeof window !== 'undefined') {
    setTimeout(() => {
      setTime(new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false }))
    }, 30000)
  }

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{
        opacity: hideForPortfolio ? 0 : 1,
        y: hideForPortfolio ? -80 : 0,
        pointerEvents: hideForPortfolio ? 'none' : 'auto',
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, willChange: 'auto' }}
      className={`z-50 ${
        scrolled && !hideForPortfolio
          ? 'backdrop-blur-xl bg-ink/80 hairline-b'
          : 'bg-transparent'
      } transition-[background-color,backdrop-filter] duration-500`}
    >
      <div className="px-6 py-5 flex justify-center">
        <div
          className="w-full flex items-center justify-between"
          style={{ maxWidth: 'clamp(22rem, 88vw, 100rem)' }}
        >
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <Logo className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
        </Link>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-label text-white-dim hover:text-lime transition-colors link-underline"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right meta */}
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-2 font-label text-white-mute">
            <span className="w-1.5 h-1.5 bg-lime rounded-full blink" />
            <span>REC · {time}</span>
          </div>
          <Link
            to="/#contato"
            className="font-label px-4 py-2.5 border border-lime text-lime hover:bg-lime hover:text-ink transition-all duration-300"
          >
            Contato →
          </Link>
        </div>
        </div>
      </div>
    </motion.header>
  )
}
