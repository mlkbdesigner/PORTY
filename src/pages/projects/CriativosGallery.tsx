import { motion } from 'motion/react'
import type { CriativoCampaign } from '../../data/criativos'
import {
  Carousel,
  Slider,
  SliderContainer,
  SliderSnapDisplay,
  SliderPrevButton,
  SliderNextButton,
} from '../../components/ui/carousel'

const ease = [0.16, 1, 0.3, 1] as const

function Campaign({ c, idx }: { c: CriativoCampaign; idx: number }) {
  const slides: Array<{ src: string; alt: string }> = []
  if (c.master) {
    slides.push({ src: c.master, alt: `${c.client} — ${c.title} · master` })
  }
  c.pieces.forEach((src, i) => {
    slides.push({ src, alt: `${c.client} — ${c.title} · peça ${i + 1}` })
  })

  const slideWidth =
    c.format === 'portrait'
      ? 'w-[60%] sm:w-[38%] md:w-[26%] lg:w-[20%]'
      : 'w-[80%] sm:w-[55%] md:w-[40%] lg:w-[32%]'

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.9, ease }}
    >
      <div className="mb-10 md:mb-14">
        <div className="flex items-center gap-3 mb-5 font-label text-white-mute">
          <span className="text-lime">/ 0{idx + 1}</span>
          <span>CLIENTE</span>
          <span className="w-6 h-px bg-white/20" />
          <span>{c.year}</span>
        </div>

        <h3
          className="font-display text-white leading-[0.9] italic mb-8"
          style={{ fontSize: 'clamp(2.75rem, 7vw, 6rem)' }}
        >
          {c.client}
        </h3>

        <div className="grid md:grid-cols-12 gap-5 md:gap-10 items-start">
          <div className="md:col-span-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 border border-lime text-lime font-label">
              <span className="w-1.5 h-1.5 bg-lime rounded-full" />
              {c.title}
            </span>
          </div>
          {c.description && (
            <p className="md:col-span-8 text-white-dim text-pretty leading-relaxed text-base md:text-lg max-w-3xl">
              {c.description}
            </p>
          )}
        </div>
      </div>

      {slides.length > 0 && (
        <Carousel options={{ loop: false, dragFree: true, align: 'start' }} className="relative">
          <SliderContainer className="gap-4 md:gap-6">
            {slides.map((s) => (
              <Slider key={s.src} className={slideWidth}>
                <img
                  src={s.src}
                  alt={s.alt}
                  className="w-full h-auto block border border-white/10 select-none"
                  loading="lazy"
                  draggable={false}
                />
              </Slider>
            ))}
          </SliderContainer>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <SliderPrevButton className="font-label w-12 h-12 border border-white/20 text-white-dim hover:border-lime hover:text-lime transition-all disabled:opacity-30 disabled:cursor-not-allowed" />
              <SliderNextButton className="font-label w-12 h-12 border border-white/20 text-white-dim hover:border-lime hover:text-lime transition-all disabled:opacity-30 disabled:cursor-not-allowed" />
              <span className="font-label text-white-mute ml-3 hidden sm:inline">
                ARRASTE OU USE AS SETAS
              </span>
            </div>
            <SliderSnapDisplay className="font-label text-sm border border-white/20 text-white px-4 py-3 min-w-[5rem] text-center" />
          </div>
        </Carousel>
      )}
    </motion.article>
  )
}

interface Props {
  campaigns: CriativoCampaign[]
}

export default function CriativosGallery({ campaigns }: Props) {
  if (campaigns.length === 0) return null

  return (
    <div className="space-y-24 md:space-y-32">
      {campaigns.map((c, idx) => (
        <Campaign key={c.id} c={c} idx={idx} />
      ))}
    </div>
  )
}
