import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1] as const

const services = [
  {
    num: '01',
    title: 'Web Design',
    subtitle: 'Sites e LPs que convertem',
    description:
      'Do wireframe ao site no ar. UI/UX, landing pages de alta conversão e produtos digitais — sempre com foco em usabilidade, performance e identidade de marca.',
    tags: ['UI/UX', 'Landing Pages', 'Design System', 'Prototipação', 'Conversão', 'A/B Testing', 'Mobile First', 'Acessibilidade'],
    accent: 'lime',
  },
  {
    num: '02',
    title: 'Branding',
    subtitle: 'Identidade que comunica valor',
    description:
      'Criação de identidade visual completa — logo, tipografia, paleta, manual de marca e aplicações. Para marcas que querem deixar uma marca de verdade.',
    tags: ['Logo', 'Manual de Marca', 'Tipografia', 'Paleta', 'Naming', 'Social Kit'],
    accent: 'pink',
  },
  {
    num: '03',
    title: 'Criativos & Ads',
    subtitle: 'Performance que vende',
    description:
      'Criativos de ads, e-mail marketing e peças de social media — pensados pra performar em tráfego pago, lançamentos e nutrição. Direção, copy e execução em fluxo contínuo.',
    tags: ['Ads (Meta · TikTok)', 'E-mail Marketing', 'Social Media', 'Copy', 'Lançamentos', 'Direção Criativa'],
    accent: 'white',
  },
  {
    num: '04',
    title: 'Design Gráfico',
    subtitle: 'Print, editorial e impressos',
    description:
      'Cartazes, embalagens, catálogos, apresentações e peças editoriais. Direção visual pensada pra circular fora da tela com a mesma força do digital.',
    tags: ['Editorial', 'Pôster', 'Embalagem', 'Catálogo', 'Apresentação', 'Impressos'],
    accent: 'lime',
  },
]

const accentMap = {
  lime: { text: 'text-lime', border: 'hover:border-lime', bg: 'group-hover:bg-lime' },
  pink: { text: 'text-pink', border: 'hover:border-pink', bg: 'group-hover:bg-pink' },
  white: { text: 'text-white', border: 'hover:border-white', bg: 'group-hover:bg-white' },
}

export default function Servicos() {
  return (
    <section id="servicos" className="relative py-28 md:py-40 bg-ink-soft border-t border-white/15">
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-20">
        {/* Section eyebrow */}
        <div className="flex items-center gap-3 mb-10 font-label text-white-dim">
          <span className="w-8 h-px bg-lime" />
          <span className="text-lime">[ 04 ]</span>
          <span>SERVIÇOS</span>
        </div>

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div>
            <h1
              className="font-humane uppercase text-pink leading-[0.82]"
              style={{
                fontSize: 'clamp(4rem, 11vw, 13rem)',
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
                O que eu
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 1.1, ease, delay: 0.35 }}
                className="block text-white -mt-[0.18em]"
              >
                faço melhor.
              </motion.div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-8 max-w-md text-lg text-white-dim text-pretty"
            >
              Quatro frentes principais, sempre com{' '}
              <span className="text-white">estratégia primeiro</span>, estética depois.
            </motion.p>
          </div>

        </div>

        {/* Services grid */}
        <div className="border-t border-white/15">
          {services.map((s, i) => {
            const accent = accentMap[s.accent as keyof typeof accentMap]
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: i * 0.15, ease }}
                className={`group relative border-b border-white/15 py-12 md:py-16 hover:bg-neutral/40 transition-colors duration-500 px-2 md:px-6 cursor-default`}
              >
                <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
                  {/* Number */}
                  <div className="md:col-span-1">
                    <div className="font-label text-white-mute group-hover:text-lime transition-colors">
                      / {s.num}
                    </div>
                  </div>

                  {/* Title + Subtitle */}
                  <div className="md:col-span-5">
                    <h3 className={`font-display text-4xl md:text-6xl ${accent.text} leading-[0.95] mb-3 group-hover:italic transition-all duration-500`}>
                      {s.title}
                    </h3>
                    <p className="font-label text-white-mute">{s.subtitle}</p>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-4">
                    <p className="text-white-dim leading-relaxed text-pretty">
                      {s.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="md:col-span-2 flex md:justify-end">
                    <div className={`w-14 h-14 border border-white/20 flex items-center justify-center text-white-dim ${accent.border} ${accent.bg} group-hover:text-ink group-hover:rotate-[-45deg] transition-all duration-500`}>
                      →
                    </div>
                  </div>
                </div>

                {/* Tags row */}
                <div className="md:col-start-2 md:pl-0 mt-6 md:ml-[8.33%] flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 border border-white/15 font-label text-white-mute group-hover:border-white/30 group-hover:text-white-dim transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
