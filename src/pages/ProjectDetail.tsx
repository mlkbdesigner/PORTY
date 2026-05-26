import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { getProjectBySlug, projects, accentBgColor, isDarkAccent } from '../data/projects'
import CatMatchCaseStudy from './projects/CatMatchCaseStudy'

const ease = [0.16, 1, 0.3, 1] as const

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="relative min-h-screen bg-ink text-cream grain">
        <Nav />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="font-label text-white-mute mb-4">404</p>
            <h1 className="font-display text-5xl md:text-7xl text-white mb-6">
              Projeto não encontrado
            </h1>
            <Link
              to="/"
              className="font-label inline-flex items-center gap-2 px-5 py-3 border border-lime text-lime hover:bg-lime hover:text-ink transition-all"
            >
              ← VOLTAR PARA O INÍCIO
            </Link>
          </div>
        </main>
      </div>
    )
  }

  const bgColor = accentBgColor[project.accent]
  const dark = isDarkAccent(project.accent)
  const textColor = dark ? 'text-white' : 'text-ink'
  const subColor = dark ? 'text-white/60' : 'text-ink/60'
  const borderColor = dark ? 'border-white/20' : 'border-ink/20'

  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <div className="relative min-h-screen bg-ink text-cream grain">
      <Nav />
      <main className="pt-24">
        {/* Breadcrumb / nav */}
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
        <section
          className="relative border-y border-white/10"
          style={{ backgroundColor: bgColor }}
        >
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 grid md:grid-cols-12 gap-8 md:gap-10"
            >
              <div className="md:col-span-6">
                <p className={`font-label mb-3 ${subColor}`}>SOBRE O PROJETO</p>
                <p className={`text-base md:text-lg leading-relaxed ${textColor}`}>
                  {project.longDescription}
                </p>
              </div>

              <div className="md:col-span-3">
                <p className={`font-label mb-3 ${subColor}`}>FUNÇÃO</p>
                <p className={`${textColor} mb-6`}>{project.role}</p>

                <p className={`font-label mb-3 ${subColor}`}>ENTREGÁVEIS</p>
                <ul className={`${textColor} space-y-1`}>
                  {project.deliverables.map((d) => (
                    <li key={d}>→ {d}</li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-3">
                <p className={`font-label mb-3 ${subColor}`}>TAGS</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1.5 border ${borderColor} font-label ${textColor}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <div className="flex flex-col gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group inline-flex items-center justify-between gap-3 px-5 py-3 border-2 ${dark ? 'border-white text-white hover:bg-white hover:text-ink' : 'border-ink text-ink hover:bg-ink hover:text-white'} transition-all duration-300`}
                    >
                      <span className="font-label">VER PROJETO LIVE</span>
                      <span className="group-hover:rotate-[-45deg] transition-transform duration-300">→</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Custom case study — CatMatch */}
        {project.slug === 'catmatch' ? (
          <CatMatchCaseStudy coverUrl={project.cover} />
        ) : project.gallery && project.gallery.length > 0 ? (
          <section
            className="relative py-12 md:py-20"
            style={{ backgroundColor: project.galleryBg ?? '#0A0A0A' }}
          >
            <div className="mx-auto max-w-5xl px-6 md:px-10 flex flex-col gap-6 md:gap-10">
              {project.gallery.map((src, i) => (
                <motion.img
                  key={src}
                  src={src}
                  alt={`${project.title} — case study ${i + 1}`}
                  className="w-full h-auto block"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.8, ease }}
                />
              ))}
            </div>

            {project.liveUrl && (
              <div className="py-16 md:py-24 text-center px-6">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-4 border-2 border-lime text-lime hover:bg-lime hover:text-ink transition-all duration-300"
                >
                  <span className="font-label">VER PROJETO LIVE</span>
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </a>
              </div>
            )}
          </section>
        ) : (
          <>
            <section className="relative bg-ink py-20 md:py-32">
              <div className="mx-auto max-w-[1600px] px-6 md:px-20">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1, ease }}
                  className="relative w-full overflow-hidden border border-white/10"
                  style={{ backgroundColor: bgColor }}
                >
                  <img
                    src={project.cover}
                    alt={`${project.title} — cover`}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </motion.div>

                <p className="mt-6 font-label text-white-mute text-center">
                  {project.title.toUpperCase()} · {project.year} · {project.category.toUpperCase()}
                </p>
              </div>
            </section>

            <section className="relative py-20 md:py-28 border-t border-white/10">
              <div className="mx-auto max-w-[1600px] px-6 md:px-20">
                <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
                  <div className="md:col-span-7">
                    <p className="font-label text-lime mb-6">GALERIA · EM CURADORIA</p>
                    <h3
                      className="font-display text-white leading-[0.85] mb-8"
                      style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
                    >
                      Uma galeria nova,
                      <span className="italic text-lime"> à altura</span> do trabalho.
                    </h3>
                    <p className="text-white-dim text-lg md:text-xl leading-relaxed max-w-2xl">
                      Estou selecionando os melhores criativos dos últimos anos pra montar um case completo aqui. Enquanto isso, o feed do Instagram tem a versão sem cortes.
                    </p>
                    <div className="mt-10 flex flex-wrap items-center gap-4">
                      <a
                        href="https://instagram.com/designedbyklein"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-lime"
                      >
                        Ver no Instagram ↗
                      </a>
                      <Link to="/#portfolio" className="btn-ghost">
                        Outros projetos
                      </Link>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="aspect-[4/5] border border-white/15 bg-neutral/30 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 dot-grid opacity-50" />
                      <div className="relative text-center px-6">
                        <p
                          className="font-humane text-lime leading-[0.85]"
                          style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}
                        >
                          EM
                        </p>
                        <p
                          className="font-humane text-pink leading-[0.85] italic -mt-4"
                          style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}
                        >
                          breve
                        </p>
                        <p className="mt-6 font-label text-white-mute">CURADORIA · 2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

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
