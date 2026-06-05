import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { campaignsByCategory, categoryMeta, categoryOrder } from '../../data/criativos'
import { getProjectBySlug, projects, accentBgColor, isDarkAccent } from '../../data/projects'

const ease = [0.16, 1, 0.3, 1] as const

const accentText = {
  lime: 'text-lime',
  pink: 'text-pink',
  white: 'text-white',
} as const

const accentBorder = {
  lime: 'group-hover:border-lime',
  pink: 'group-hover:border-pink',
  white: 'group-hover:border-white',
} as const

export default function CriativosHub() {
  const project = getProjectBySlug('pecas-graficas')

  if (!project) return null

  const bgColor = accentBgColor[project.accent]
  const dark = isDarkAccent(project.accent)
  const textColor = dark ? 'text-white' : 'text-ink'
  const subColor = dark ? 'text-white/60' : 'text-ink/60'

  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <div className="relative min-h-screen bg-ink text-cream grain">
      <Nav />
      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-[1600px] px-6 md:px-20 py-6 md:py-10 flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/#portfolio"
            className="font-label text-[0.7rem] md:text-xs text-white-dim hover:text-lime transition-colors inline-flex items-center gap-2"
          >
            ← VOLTAR
            <span className="hidden sm:inline">AO PORTFÓLIO</span>
          </Link>
          <Link
            to={`/projeto/${next.slug}`}
            className="font-label text-[0.7rem] md:text-xs text-white-dim hover:text-lime transition-colors inline-flex items-center gap-2"
          >
            <span className="hidden sm:inline">IR AO</span>
            PRÓXIMO PROJETO →
          </Link>
        </div>

        {/* Hero block */}
        <section className="relative border-y border-white/10" style={{ backgroundColor: bgColor }}>
          <div
            className="absolute inset-0 opacity-[0.10] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, ${dark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(to bottom, ${dark ? '#fff' : '#000'} 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-20 py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
              className={`flex items-center gap-3 mb-10 font-label ${subColor}`}
            >
              <span className={`w-8 h-px ${dark ? 'bg-white' : 'bg-ink'}`} />
              <span className={textColor}>PROJETO · 0{project.id} / 0{projects.length}</span>
              <span>/</span>
              <span>{project.year}</span>
              <span>/</span>
              <span>{project.category.toUpperCase()}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.15 }}
              className={`font-display ${textColor} leading-[0.85] tracking-tight italic`}
              style={{ fontSize: 'clamp(3rem, 12vw, 13rem)' }}
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className={`mt-10 max-w-3xl text-base md:text-lg leading-relaxed ${textColor}`}
            >
              {project.longDescription}
            </motion.p>
          </div>
        </section>

        {/* Categories grid */}
        <section className="relative py-20 md:py-28 border-b border-white/10">
          <div className="mx-auto max-w-[1600px] px-6 md:px-20">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
              <div>
                <p className="font-label text-white-mute mb-4">EXPLORE POR FORMATO</p>
                <h2
                  className="font-display text-white leading-[0.9] italic"
                  style={{ fontSize: 'clamp(2.25rem, 5vw, 4.25rem)' }}
                >
                  Três frentes de criativo.
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {categoryOrder.map((key, i) => {
                const meta = categoryMeta[key]
                const count = campaignsByCategory[key].length
                const empty = count === 0
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: i * 0.1, ease }}
                  >
                    <Link
                      to={`/projeto/pecas-graficas/${meta.slug}`}
                      className={`group relative flex flex-col h-full border border-white/15 bg-neutral/20 hover:bg-neutral/40 transition-all duration-500 ${accentBorder[meta.accent]} overflow-hidden`}
                    >
                      {meta.previewImage ? (
                        <div className="aspect-[4/3] overflow-hidden bg-neutral/40 relative">
                          <img
                            src={meta.previewImage}
                            alt={`${meta.name} — preview`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                        </div>
                      ) : (
                        <div className="aspect-[4/3] flex items-center justify-center relative bg-neutral/40 overflow-hidden">
                          <div className="absolute inset-0 dot-grid opacity-30" />
                          <div className="relative text-center px-4">
                            <p
                              className={`font-humane leading-[0.85] ${accentText[meta.accent]} opacity-40`}
                              style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
                            >
                              {meta.name.split(' ')[0]}
                            </p>
                            <p className="mt-3 font-label text-white-mute">EM CURADORIA</p>
                          </div>
                        </div>
                      )}

                      <div className="p-6 md:p-8 flex-1 flex flex-col">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <span className="font-label text-white-mute">/ 0{i + 1}</span>
                          <span
                            className={`font-label text-[0.65rem] px-2 py-1 border ${empty ? 'border-white/20 text-white-mute' : 'border-lime text-lime'}`}
                          >
                            {empty ? 'EM CURADORIA' : `${count} CAMPANHA${count > 1 ? 'S' : ''}`}
                          </span>
                        </div>
                        <h3 className={`font-display text-3xl md:text-4xl ${accentText[meta.accent]} group-hover:italic transition-all duration-500 mb-2`}>
                          {meta.name}
                        </h3>
                        <p className="font-label text-white-mute mb-4">{meta.tagline}</p>
                        <p className="text-white-dim text-sm leading-relaxed flex-1">{meta.description}</p>

                        <div className="mt-6 flex items-center justify-between">
                          <span className="font-label text-white-dim group-hover:text-lime transition-colors">
                            {empty ? 'EM BREVE' : 'VER GALERIA'}
                          </span>
                          <span className={`w-10 h-10 border border-white/20 flex items-center justify-center ${accentBorder[meta.accent]} group-hover:rotate-[-45deg] transition-all duration-500`}>
                            →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Next project */}
        <section className="relative border-t border-white/15">
          <Link
            to={`/projeto/${next.slug}`}
            className="block group relative py-24 md:py-40 overflow-hidden transition-colors duration-500"
            style={{ backgroundColor: '#0A0A0A' }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ backgroundColor: accentBgColor[next.accent] }}
            />
            <div className="relative mx-auto max-w-[1600px] px-6 md:px-20 text-center">
              <p className="font-label text-white-mute group-hover:text-ink/60 transition-colors mb-6">
                PRÓXIMO PROJETO →
              </p>
              <h3
                className="font-display italic text-white group-hover:text-ink transition-colors leading-[0.85]"
                style={{ fontSize: 'clamp(3rem, 12vw, 13rem)' }}
              >
                {next.title}
              </h3>
              <p className="mt-6 font-label text-white-dim group-hover:text-ink/70 transition-colors">
                {next.category.toUpperCase()} · {next.year}
              </p>
            </div>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
