import { motion, useScroll, useMotionValueEvent } from 'motion/react'
import { useState } from 'react'
import Logo from './Logo'

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Contato', href: '#contato' },
]

export default function Nav() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false })
  )

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 40))

  if (typeof window !== 'undefined') {
    setTimeout(() => {
      setTime(new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false }))
    }, 30000)
  }

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-ink/80 hairline-b'
          : 'bg-transparent'
      }`}
    >
      <div className="px-6 py-5 flex justify-center">
        <div
          className="w-full flex items-center justify-between"
          style={{ maxWidth: 'clamp(22rem, 88vw, 100rem)' }}
        >
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <Logo className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
          <div className="hidden sm:block leading-none">
            <div className="font-label text-white">MALU KLEIN</div>
            <div className="font-label text-white-mute mt-1 text-[0.6rem]">DESIGNER · MLKB</div>
          </div>
        </a>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-label text-white-dim hover:text-lime transition-colors link-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right meta */}
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-2 font-label text-white-mute">
            <span className="w-1.5 h-1.5 bg-lime rounded-full blink" />
            <span>REC · {time}</span>
          </div>
          <a
            href="#contato"
            className="font-label px-4 py-2.5 border border-lime text-lime hover:bg-lime hover:text-ink transition-all duration-300"
          >
            Contato →
          </a>
        </div>
        </div>
      </div>
    </motion.header>
  )
}
