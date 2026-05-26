import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import CriativosGallery from './CriativosGallery'
import {
  campaignsByCategory,
  categoryMeta,
  categoryOrder,
  type CriativoCategory,
} from '../../data/criativos'

const ease = [0.16, 1, 0.3, 1] as const

const accentText = {
  lime: 'text-lime',
  pink: 'text-pink',
  white: 'text-white',
} as const

function isCriativoCategory(v: string | undefined): v is CriativoCategory {
  return v === 'anuncios' || v === 'feed' || v === 'email-marketing'
}

export default function CriativosCategory() {
  const { category } = useParams<{ category: string }>()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [category])

  if (!isCriativoCategory(category)) {
    return <Navigate to="/projeto/pecas-graficas" replace />
  }

  const meta = categoryMeta[category]
  const campaigns = campaignsByCategory[category]
  const empty = campaigns.length === 0
  const currentIdx = categoryOrder.indexOf(category)
  const nextCategory = categoryOrder[(currentIdx + 1) % categoryOrder.length]
  const nextMeta = categoryMeta[nextCategory]

  return (
    <div className="relative min-h-screen bg-ink text-cream grain">
      <Nav />
      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-[1600px] px-6 md:px-20 py-6 md:py-10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-label text-[0.7rem] md:text-xs flex-wrap">
            <Link to="/" className="text-white-dim hover:text-lime transition-colors">
              HOME
            </Link>
            <span className="text-white-mute">/</span>
            <Link
              to="/projeto/pecas-graficas"
              className="text-white-dim hover:text-lime transition-colors"
            >
              CRIATIVOS
            </Link>
            <span className="text-white-mute">/</span>
            <span className={accentText[meta.accent]}>{meta.name.toUpperCase()}</span>
          </div>
          <Link
            to={`/projeto/pecas-graficas/${nextCategory}`}
            className="font-label text-[0.7rem] md:text-xs text-white-dim hover:text-lime transition-colors inline-flex items-center gap-2"
          >
            <span className="hidden sm:inline">PRÓXIMO FORMATO</span>
            {nextMeta.name.toUpperCase()} →
          </Link>
        </div>

        {/* Category hero */}
        <section className="relative border-y border-white/10 py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className={`font-label mb-6 ${accentText[meta.accent]}`}
            >
              FORMATO · 0{currentIdx + 1} / 0{categoryOrder.length}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
              className="font-display text-white leading-[0.85] italic"
              style={{ fontSize: 'clamp(3rem, 11vw, 11rem)' }}
            >
              {meta.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 max-w-2xl text-white-dim text-lg md:text-xl leading-relaxed"
            >
              {meta.description}
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="relative py-16 md:py-24 bg-ink">
          <div className="mx-auto max-w-[1600px] px-6 md:px-20">
            {empty ? (
              <div className="border border-white/15 bg-neutral/30 p-12 md:p-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 dot-grid opacity-30" />
                <div className="relative max-w-2xl mx-auto">
                  <p className="font-label text-white-mute mb-6">EM CURADORIA</p>
                  <h3
                    className="font-display text-white mb-8 leading-tight italic"
                    style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
                  >
                    Galeria de {meta.name.toLowerCase()} em construção.
                  </h3>
                  <p className="text-white-dim mb-10 text-base md:text-lg leading-relaxed">
                    Estou selecionando os melhores trabalhos pra montar essa galeria. Enquanto isso, o feed do Instagram tem peças soltas do que está rolando.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                      href="https://instagram.com/designedbyklein"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-lime"
                    >
                      Ver no Instagram ↗
                    </a>
                    <Link to="/projeto/pecas-graficas" className="btn-ghost">
                      Outros formatos
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <CriativosGallery campaigns={campaigns} />
            )}
          </div>
        </section>

        {/* Next category CTA */}
        <section className="relative border-t border-white/15">
          <Link
            to={`/projeto/pecas-graficas/${nextCategory}`}
            className="block group relative py-20 md:py-32 overflow-hidden transition-colors duration-500 bg-ink hover:bg-neutral/40"
          >
            <div className="relative mx-auto max-w-[1600px] px-6 md:px-20 text-center">
              <p className="font-label text-white-mute mb-6">PRÓXIMO FORMATO →</p>
              <h3
                className={`font-display italic text-white group-hover:${accentText[nextMeta.accent].replace('text-', 'text-')} leading-[0.9] transition-colors`}
                style={{ fontSize: 'clamp(2.5rem, 9vw, 9rem)' }}
              >
                {nextMeta.name}
              </h3>
              <p className="mt-6 font-label text-white-dim">{nextMeta.tagline.toUpperCase()}</p>
            </div>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
