import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1] as const

const skills = [
  'UI Design',
  'UX Research',
  'Design Systems',
  'Branding',
  'Identidade Visual',
  'Landing Pages',
  'Prototipação',
  'Design Responsivo',
  'Motion Design',
  'Wireframing',
]

const stats = [
  { value: '+30', label: 'Projetos entregues' },
  { value: '04', label: 'Anos de experiência' },
  { value: '15', label: 'Clientes satisfeitos' },
  { value: '100%', label: 'Entregas no prazo' },
]

const tools = [
  { name: 'Figma', cat: 'UI/UX' },
  { name: 'Photoshop', cat: 'Raster' },
  { name: 'Illustrator', cat: 'Vector' },
  { name: 'After Effects', cat: 'Motion' },
  { name: 'Framer', cat: 'Protótipo' },
  { name: 'Webflow', cat: 'No-code' },
  { name: 'Notion', cat: 'Docs' },
  { name: 'Spline', cat: '3D' },
]

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Sobre() {
  return (
    <section id="sobre" className="relative py-28 md:py-40 border-t border-white/15">
      <div className="mx-auto max-w-[1600px] px-6 md:px-20">
        {/* Section header */}
        <div className="flex items-center justify-between mb-16 md:mb-24 font-label text-white-dim">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-lime" />
            <span className="text-lime">[ 02 ]</span>
            <span>SOBRE</span>
          </div>
        </div>

        {/* Main text block */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-20 md:mb-28">
          <div className="md:col-span-5">
            <Reveal>
              <div className="sticky top-32">
                <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] text-white mb-6">
                  Design com <span className="italic text-lime">intenção</span>,
                  entregue com <span className="italic text-pink">método</span>.
                </h2>
                <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/20">
                  <span className="w-2 h-2 bg-pink rounded-full" />
                  <span className="font-label text-white-dim">Recife · Brasil</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:pt-6">
            <Reveal delay={0.15}>
              <div className="space-y-6 text-lg md:text-xl text-white-dim leading-relaxed text-pretty max-w-[62ch]">
                <p>
                  Sou <span className="text-white">Malu Klein</span> — designer
                  multidisciplinar com foco em <span className="text-lime">interfaces digitais</span>,{' '}
                  <span className="text-pink">identidade de marca</span> e{' '}
                  <span className="text-white">landing pages de alta conversão</span>.
                </p>
                <p>
                  Há mais de 4 anos, venho ajudando marcas e startups a traduzir
                  estratégia em experiências visuais memoráveis. Cada projeto começa
                  com uma escuta atenta e termina com pixels cuidadosamente alinhados.
                </p>
                <p>
                  Meu processo combina <span className="text-white">pesquisa</span>,{' '}
                  <span className="text-white">estética</span> e{' '}
                  <span className="text-white">business</span> — porque design bonito que não
                  funciona é só arte. E arte sem conceito é só decoração.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats grid — brutalist */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-white/15 mb-20 md:mb-28">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className={`p-8 md:p-10 ${i < 3 ? 'md:border-r' : ''} ${i < 2 ? 'border-b md:border-b-0' : ''} ${i === 0 ? 'border-r' : ''} ${i === 2 ? 'border-r md:border-r' : ''} border-white/15 hover:bg-neutral transition-colors group relative overflow-hidden`}
            >
              <div className="font-label text-white-mute mb-3 flex items-center justify-between">
                <span>0{i + 1}</span>
                <span className="opacity-0 group-hover:opacity-100 transition text-lime">↗</span>
              </div>
              <div className="font-display text-5xl md:text-6xl text-white group-hover:text-lime transition-colors mb-2">
                {stat.value}
              </div>
              <div className="font-label text-white-dim">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
