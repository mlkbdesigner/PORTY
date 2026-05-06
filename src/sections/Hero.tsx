import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-ink flex flex-col"
    >
      {/* ========= LAYER 0 — BG PHOTO (scene behind, no person) ========= */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease, delay: 0.3 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/hero-miu.jpeg"
          alt=""
          aria-hidden="true"
          draggable={false}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover select-none"
          style={{ objectPosition: 'center 30%', filter: 'brightness(0.85) saturate(1.1) blur(2px)' }}
        />
        {/* Top + bottom gradients for text legibility only */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.3) 15%, transparent 30%, transparent 70%, rgba(10,10,10,0.45) 90%, rgba(10,10,10,0.85) 100%)',
          }}
        />
      </motion.div>

      {/* ========= LAYER 1 — MALU KLEIN FILL (behind person) ========= */}
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease, delay: 0.55 }}
        className="absolute left-0 right-0 font-humane uppercase text-pink leading-[0.78] text-center whitespace-nowrap z-[1] pointer-events-none"
        style={{
          bottom: '160px',
          fontSize: 'clamp(5rem, 18vw, 22rem)',
          letterSpacing: '0.06em',
          margin: 0,
        }}
      >
        Malu Klein
      </motion.h1>

      {/* ========= LAYER 2 — PERSON PNG (covers the fill behind) ========= */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease, delay: 0.4 }}
        src="/hero-miu.png"
        alt="Malu Klein, designer, retrato em ambiente neon"
        draggable={false}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 z-[2] w-full h-full object-cover pointer-events-none select-none"
        style={{ objectPosition: 'center 30%' }}
      />

      {/* ========= LAYER 3 — MALU KLEIN OUTLINE (in front of everything) ========= */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 font-humane uppercase leading-[0.78] text-center whitespace-nowrap z-[10] pointer-events-none"
        style={{
          bottom: '160px',
          fontSize: 'clamp(5rem, 18vw, 22rem)',
          letterSpacing: '0.06em',
          color: 'transparent',
          WebkitTextStroke: '0.5px #FF3399',
        }}
      >
        Malu Klein
      </div>

      {/* ========= SUBHEADER ROW — aligned with MALU KLEIN text width ========= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease, delay: 0.3 }}
        className="relative z-[5] w-full px-6 pt-28 md:pt-36 flex justify-center"
      >
        <div
          className="w-full flex justify-between items-start font-label text-white/60 gap-4"
          style={{ maxWidth: 'clamp(22rem, 88vw, 100rem)' }}
        >
          {/* Left — aligned with "M" of Malu Klein */}
          <div className="space-y-5 md:space-y-6 text-left">
            <div>
              <div className="text-white/40 mb-1">Portfólio 2026, Recife</div>
              <div className="text-white">
                Designed by <span className="text-lime">Malu Klein</span>
              </div>
            </div>
            <div className="pt-1">
              <div className="text-white/40 mb-1">Minhas áreas</div>
              <div className="text-white">UI / UX</div>
              <div className="text-white">Branding</div>
              <div className="text-white">Landing Pages</div>
            </div>
          </div>

          {/* Right — aligned with "N" of Malu Klein */}
          <div className="text-right space-y-5 md:space-y-6">
            <div>
              <div className="text-white">Q2/2026 · disponível</div>
              <div className="text-white/40 mt-1">Novos projetos</div>
            </div>
            <div className="pt-1">
              <div className="text-white/40 mb-1">Clientes recentes</div>
              <div className="text-white">Belle Acessories</div>
              <div className="text-white">Forsun</div>
              <div className="text-white">Conoti</div>
              <div className="text-white">Voltys</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ========= MIDDLE — spacer so photo has room ========= */}
      <div className="relative flex-1 z-[4]" />

      {/* ========= BOTTOM BAR (3 columns like ref) ========= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 1.3 }}
        className="relative z-[5] w-full mx-auto max-w-[1600px] px-6 md:px-10 pb-6 md:pb-8 pt-10 md:pt-12"
      >
        <div className="grid grid-cols-3 items-center font-label text-white/60">
          {/* Left */}
          <a
            href="https://instagram.com/designedbyklein"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-lime transition-colors justify-self-start"
          >
            Instagram ↗
          </a>

          {/* Center — capsule summary */}
          <div className="text-center text-white/70">
            <span className="text-white">+30 projetos</span>
            <span className="mx-2 text-white/30">·</span>
            <span>UI/UX · Branding · LPs</span>
            <span className="mx-2 text-white/30">·</span>
            <span className="text-white">2022 — 2026</span>
          </div>

          {/* Right */}
          <a
            href="#portfolio"
            className="text-white hover:text-lime transition-colors justify-self-end"
          >
            Ver portfólio ↓
          </a>
        </div>
      </motion.div>
    </section>
  )
}
