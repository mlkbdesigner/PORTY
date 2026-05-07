import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { projects, accentBgColor, isDarkAccent, type Project } from '../data/projects'

const ease = [0.16, 1, 0.3, 1] as const

function ProjectCover({ p, index }: { p: Project; index: number }) {
  const bgColor = accentBgColor[p.accent]
  const dark = isDarkAccent(p.accent)
  const textColor = dark ? 'text-white' : 'text-ink'
  const subColor = dark ? 'text-white/60' : 'text-ink/60'
  const borderColor = dark ? 'border-white/20' : 'border-ink/20'
  const gridColor = dark ? '#ffffff' : '#000000'

  return (
    <section
      className="sticky top-0 w-full h-screen"
      style={{ zIndex: 10 + index }}
    >
      <div className="relative w-full h-full flex flex-col">
        {/* ========= FOLDER TAB ========= */}
        <div className="relative h-14 shrink-0 pointer-events-none">
          <div
            className="absolute bottom-0 flex items-center justify-center px-4 md:px-8 h-full min-w-[120px] md:min-w-[220px] max-w-[calc(100%-1rem)]"
            style={{
              left: `min(${p.tabLeft}, calc(100% - 130px))`,
              backgroundColor: bgColor,
              borderTopLeftRadius: '14px',
              borderTopRightRadius: '14px',
              clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0 100%)',
            }}
          >
            <span className={`font-body font-bold text-[0.7rem] md:text-[0.9rem] tracking-[0.14em] uppercase ${textColor} whitespace-nowrap`}>
              {p.keyword}
            </span>
          </div>
        </div>

        {/* ========= FOLDER BODY ========= */}
        <div
          className="relative flex-1 overflow-hidden rounded-tr-[1.5rem] rounded-tl-none"
          style={{ backgroundColor: bgColor }}
        >
          {/* Grid bg */}
          <div
            className="absolute inset-0 opacity-[0.10] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Top tag row */}
          <div className={`relative z-10 flex items-center justify-between px-6 md:px-16 py-5 md:py-6 border-b ${borderColor}`}>
            <div className={`font-label flex items-center gap-3 md:gap-4 ${textColor}`}>
              <span className="w-8 h-px bg-current" />
              <span>PROJETO · 0{p.id} / 0{projects.length}</span>
              <span className={`${subColor} hidden md:inline`}>/</span>
              <span className={`${subColor} hidden md:inline`}>{p.year}</span>
            </div>
            <div className={`font-label ${textColor}`}>{p.category.toUpperCase()}</div>
          </div>

          {/* Main content */}
          <div className="relative z-10 flex-1 flex flex-col justify-between px-6 md:px-16 py-8 md:py-12 h-[calc(100%-68px)]">
            {/* Giant title */}
            <div className="flex-1 flex items-center">
              <Link
                to={`/projeto/${p.slug}`}
                className="group/title inline-block hover:opacity-80 transition-opacity duration-300"
                aria-label={`Ver projeto ${p.title}`}
              >
                <h3
                  className={`font-display ${textColor} leading-[0.85] tracking-tight`}
                  style={{ fontSize: 'clamp(3.5rem, 13vw, 15rem)' }}
                >
                  <span className="italic underline decoration-transparent group-hover/title:decoration-current decoration-[0.04em] underline-offset-[0.08em] transition-colors duration-300">
                    {p.title}
                  </span>
                </h3>
              </Link>
            </div>

            {/* Bottom meta row */}
            <div className="grid md:grid-cols-12 gap-5 md:gap-10 items-end mt-6">
              <div className="md:col-span-5">
                <p className={`font-label mb-2 ${subColor}`}>SOBRE O PROJETO</p>
                <p className={`text-sm md:text-base leading-relaxed text-pretty ${textColor}`}>
                  {p.description}
                </p>
              </div>

              <div className="md:col-span-4 grid grid-cols-2 gap-4 md:gap-6">
                <div>
                  <p className={`font-label mb-2 ${subColor}`}>FUNÇÃO</p>
                  <p className={`text-xs md:text-sm ${textColor}`}>{p.role}</p>
                </div>
                <div>
                  <p className={`font-label mb-2 ${subColor}`}>ENTREGÁVEIS</p>
                  <ul className={`text-xs md:text-sm space-y-1 ${textColor}`}>
                    {p.deliverables.map((d) => (
                      <li key={d}>→ {d}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:col-span-3 flex flex-col items-start md:items-end gap-3">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1.5 border ${borderColor} font-label ${subColor}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/projeto/${p.slug}`}
                  className={`group inline-flex items-center gap-3 px-5 py-3 border-2 ${borderColor} ${textColor} hover:bg-ink hover:text-white hover:border-ink transition-all duration-500`}
                >
                  <span className="font-label">VER PROJETO</span>
                  <span className="group-hover:rotate-[-45deg] transition-transform duration-500">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative border-t border-white/15 bg-ink">
      {/* Intro sticky — stays behind folders as they stack */}
      <div className="relative">
        <div className="sticky top-0 h-screen w-full bg-ink overflow-hidden grid place-content-center z-0">
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
              maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
            }}
          />

          <div className="relative mx-auto max-w-[1600px] px-6 md:px-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="flex items-center justify-center gap-3 mb-10 font-label text-white-dim"
            >
              <span className="w-8 h-px bg-lime" />
              <span className="text-lime">[ 03 ]</span>
              <span>PORTFÓLIO</span>
              <span className="w-8 h-px bg-lime" />
            </motion.div>

            <h1
              className="font-humane uppercase text-pink leading-[0.82] text-center"
              style={{
                fontSize: 'clamp(6rem, 18vw, 22rem)',
                letterSpacing: '0.025em',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 1.1, ease, delay: 0.15 }}
                className="block"
              >
                Meus
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 1.1, ease, delay: 0.35 }}
                className="block text-white -mt-[0.18em]"
              >
                Trabalhos
              </motion.div>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 flex flex-col items-center gap-3 font-label text-white-mute"
            >
              <span>SCROLL ↓</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-px h-12 bg-gradient-to-b from-lime to-transparent"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Folder stack */}
      {projects.map((p, i) => (
        <ProjectCover key={p.id} p={p} index={i} />
      ))}

      {/* Buffer so last folder can be fully read before next section */}
      <div className="relative h-[20vh] bg-ink" />
    </section>
  )
}
