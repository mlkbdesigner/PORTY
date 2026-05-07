import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1] as const

const steps = [
  {
    num: '01',
    title: 'Descoberta',
    aside: 'Antes de pixel, gente.',
    description:
      'A gente conversa muito. Quero entender o que te trouxe aqui, quem você atende, o que tira seu sono. Sem briefing genérico — o problema certo desbloqueia tudo depois.',
    deliverables: ['Briefing', 'Research', 'Moodboard'],
    duration: '3 — 5 dias',
    badge: null as null | string,
  },
  {
    num: '02',
    title: 'Estratégia',
    aside: 'Sem isso, design vira chute.',
    description:
      'Briefing vira mapa. Defino tom, hierarquia, o que entra e o que fica de fora. Antes de mexer em uma tela, alinho a história inteira.',
    deliverables: ['Wireframes', 'User Flows', 'Sitemap'],
    duration: '5 — 7 dias',
    badge: null,
  },
  {
    num: '03',
    title: 'Criação',
    aside: 'Aqui é onde eu vivo.',
    description:
      'A parte mais visível: tela por tela, ajuste por ajuste. Mostro tudo em iteração — você não recebe surpresa no final, recebe escolha durante.',
    deliverables: ['UI Design', 'Protótipo', 'Design System'],
    duration: '10 — 15 dias',
    badge: 'FASE FAVORITA',
  },
  {
    num: '04',
    title: 'Entrega',
    aside: 'Projeto bom não morre na entrega.',
    description:
      'Arquivo organizado, handoff sem ruído, manual claro. E depois? Continuo aqui — design entregue vira responsabilidade compartilhada, não fim de relação.',
    deliverables: ['Assets', 'Handoff', 'Documentação'],
    duration: '2 — 3 dias',
    badge: null,
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
            className="mt-10 max-w-2xl mx-auto"
          >
            <p className="font-display text-xl md:text-2xl text-white-dim leading-snug">
              Projeto bom não tem atalho. Mas tem
              <span className="italic text-lime"> ritmo</span> — e em
              <span className="italic text-pink"> ~4 a 6 semanas</span> a gente entrega.
            </p>
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
                className={`relative ${i > 0 ? 'md:border-l' : ''} border-white/15 pl-10 pr-6 py-6 md:p-10 pt-16 md:pt-20 group flex flex-col h-full overflow-x-clip`}
              >
                {/* Mobile-only vertical timeline line (left edge) */}
                <span
                  aria-hidden="true"
                  className="md:hidden absolute left-3 top-0 bottom-0 w-[2px] bg-lime/30"
                />

                {/* Mobile-only timeline dot per card */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease }}
                  className="md:hidden absolute left-[5px] top-16 w-3 h-3 rounded-full bg-lime border-2 border-ink shadow-[0_0_12px_rgba(155,232,0,0.8)] z-10"
                  aria-hidden="true"
                />

                {/* Desktop-only timeline dot marker — sits on horizontal lime line */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.3, ease }}
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-[10px] w-5 h-5 rounded-full bg-lime border-4 border-ink shadow-[0_0_16px_rgba(155,232,0,0.7)] z-10"
                  aria-hidden="true"
                />

                {/* Huge faded number watermark */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-2 md:-right-4 top-12 md:top-16 font-humane text-white/[0.06] leading-none select-none transition-all duration-700 group-hover:text-lime/[0.10]"
                  style={{
                    fontSize: 'clamp(5rem, 18vw, 13rem)',
                    letterSpacing: '0.025em',
                  }}
                >
                  {step.num}
                </span>

                {/* FASE FAVORITA stamp (rotated badge) */}
                {step.badge && (
                  <motion.div
                    initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
                    whileInView={{ opacity: 1, rotate: -8, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.8 + i * 0.2, ease }}
                    className="absolute right-4 top-20 z-20 inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-pink text-white border-2 border-ink shadow-[3px_3px_0_rgba(10,10,10,0.9)]"
                  >
                    <span className="w-1.5 h-1.5 bg-white rounded-full blink" />
                    <span className="font-label text-[0.65rem] tracking-wider">{step.badge}</span>
                  </motion.div>
                )}

                {/* Step number above title */}
                <div className="relative z-10 font-label text-lime mb-4">/ {step.num}</div>

                {/* Title */}
                <h3 className="relative z-10 font-display text-4xl md:text-5xl text-white mb-3 group-hover:italic group-hover:text-lime transition-all duration-500">
                  {step.title}
                </h3>

                {/* Aside / punch line */}
                <p className="relative z-10 font-display italic text-pink text-base md:text-lg mb-5 leading-snug">
                  &ldquo;{step.aside}&rdquo;
                </p>

                {/* Description */}
                <p className="relative z-10 text-white-dim leading-relaxed text-pretty text-sm md:text-base mb-6">
                  {step.description}
                </p>

                {/* Spacer — pushes entregáveis + duration to bottom for cross-card alignment */}
                <div className="flex-1" aria-hidden="true" />

                {/* Deliverables */}
                <div className="relative z-10 space-y-2 mb-6 border-t border-white/15 pt-4">
                  <p className="font-label text-white-mute mb-3">ENTREGÁVEIS</p>
                  {step.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-sm text-white-dim">
                      <span className="text-lime">→</span>
                      {d}
                    </div>
                  ))}
                </div>

                {/* Duration */}
                <div className="relative z-10 inline-flex items-center gap-2 px-3 py-1.5 border border-white/15 font-label text-white-mute">
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
