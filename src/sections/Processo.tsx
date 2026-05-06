import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1] as const

const steps = [
  {
    num: '01',
    title: 'Descoberta',
    icon: '◇',
    description:
      'Entendo seu negócio, objetivos e público. Escuta ativa, pesquisa de referências e benchmark de concorrentes.',
    deliverables: ['Briefing', 'Research', 'Moodboard'],
    duration: '3 — 5 dias',
  },
  {
    num: '02',
    title: 'Estratégia',
    icon: '◈',
    description:
      'Traduzo insights em direção criativa. Arquitetura de informação, fluxos e definição de narrativa visual.',
    deliverables: ['Wireframes', 'User Flows', 'Sitemap'],
    duration: '5 — 7 dias',
  },
  {
    num: '03',
    title: 'Criação',
    icon: '✦',
    description:
      'Design visual, protótipo interativo e iterações com feedback. É onde a mágica acontece pixel por pixel.',
    deliverables: ['UI Design', 'Protótipo', 'Design System'],
    duration: '10 — 15 dias',
  },
  {
    num: '04',
    title: 'Entrega',
    icon: '◆',
    description:
      'Arquivos organizados, handoff técnico, manual de uso e suporte. Nada de surpresa depois do "entregue".',
    deliverables: ['Assets', 'Handoff', 'Documentação'],
    duration: '2 — 3 dias',
  },
]

export default function Processo() {
  return (
    <section id="processo" className="relative py-28 md:py-40 border-t border-white/15 overflow-x-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-20">
        {/* Section eyebrow */}
        <div className="flex items-center justify-between mb-10 font-label text-white-dim">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-lime" />
            <span className="text-lime">[ 05 ]</span>
            <span>PROCESSO</span>
          </div>
        </div>

        {/* Giant H1 — same brutalist style as MEUS TRABALHOS */}
        <div className="text-center mb-16 md:mb-24">
          <h1
            className="font-humane uppercase text-pink leading-[0.82]"
            style={{
              fontSize: 'clamp(4rem, 12vw, 14rem)',
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
              Como a
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 1.1, ease, delay: 0.35 }}
              className="block text-white -mt-[0.18em]"
            >
              mágica acontece
            </motion.div>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 inline-flex items-center gap-3 font-label text-white-mute"
          >
            <span>DURAÇÃO TÍPICA</span>
            <span className="text-white text-base normal-case font-display">
              4 — 6 <span className="italic text-pink ml-1">semanas</span>
            </span>
          </motion.div>
        </div>

        {/* Steps — timeline */}
        <div className="relative pt-12 md:pt-16">
          {/* Full-bleed neon lines (extend beyond container) */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-12 md:top-16 w-screen h-px bg-white/15 hidden md:block pointer-events-none"
            aria-hidden="true"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 2.5, ease }}
            style={{ transformOrigin: 'left' }}
            className="absolute left-1/2 -translate-x-1/2 top-12 md:top-16 w-screen h-[2px] bg-lime hidden md:block pointer-events-none shadow-[0_0_20px_rgba(155,232,0,0.6)]"
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: i * 0.2, ease }}
                className={`relative ${i > 0 ? 'md:border-l' : ''} border-white/15 p-6 md:p-10 pt-16 md:pt-20 group`}
              >
                {/* Timeline dot marker — sits on the lime line */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.3, ease }}
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-[10px] w-5 h-5 rounded-full bg-lime border-4 border-ink shadow-[0_0_16px_rgba(155,232,0,0.7)] z-10"
                  aria-hidden="true"
                />

                {/* Step number above title */}
                <div className="font-label text-lime mb-4">/ {step.num}</div>

                {/* Title */}
                <h3 className="font-display text-4xl md:text-5xl text-white mb-4 group-hover:italic group-hover:text-lime transition-all duration-500">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white-dim leading-relaxed text-pretty text-sm md:text-base mb-6">
                  {step.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 mb-6 border-t border-white/15 pt-4">
                  <p className="font-label text-white-mute mb-3">ENTREGÁVEIS</p>
                  {step.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-sm text-white-dim">
                      <span className="text-lime">→</span>
                      {d}
                    </div>
                  ))}
                </div>

                {/* Duration */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/15 font-label text-white-mute">
                  <span className="w-1.5 h-1.5 bg-pink rounded-full" />
                  {step.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
