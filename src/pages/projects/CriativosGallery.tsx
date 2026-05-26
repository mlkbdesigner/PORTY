import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { adsCampaigns, feedCampaigns, type CriativoFormat, type CriativoCampaign } from '../../data/criativos'
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
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.9, ease }}
    >
      <div className="grid md:grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-14 items-end">
        <div className="md:col-span-1">
          <span className="font-label text-white-mute">/ 0{idx + 1}</span>
        </div>
        <div className="md:col-span-7">
          <p className="font-label text-lime mb-3">
            {c.client.toUpperCase()} · {c.year}
          </p>
          <h3
            className="font-display text-white leading-[0.95] italic"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)' }}
          >
            {c.title}
          </h3>
        </div>
        {c.description && (
          <div className="md:col-span-4">
            <p className="text-white-dim text-pretty leading-relaxed">{c.description}</p>
          </div>
        )}
      </div>

      {(() => {
        const slides: Array<{ src: string; alt: string }> = []
        if (c.master) {
          slides.push({
            src: c.master,
            alt: `${c.client} — ${c.title} · master`,
          })
        }
        c.pieces.forEach((src, i) => {
          slides.push({
            src,
            alt: `${c.client} — ${c.title} · peça ${i + 1}`,
          })
        })

        const slideWidth = 'w-[80%] sm:w-[55%] md:w-[40%] lg:w-[32%]'

        return (
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
        )
      })()}
    </motion.article>
  )
}

function EmptyState({ format }: { format: CriativoFormat }) {
  return (
    <div className="border border-white/15 bg-neutral/30 p-12 md:p-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="relative">
        <p className="font-label text-white-mute mb-4">EM CURADORIA</p>
        <h3 className="font-display text-3xl md:text-5xl text-white mb-6 leading-tight">
          Em breve, peças de {format === 'feed' ? 'feed' : 'ads'} selecionadas.
        </h3>
        <a
          href="https://instagram.com/designedbyklein"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-lime"
        >
          Ver no Instagram ↗
        </a>
      </div>
    </div>
  )
}

export default function CriativosGallery() {
  const [tab, setTab] = useState<CriativoFormat>('ads')
  const list = tab === 'ads' ? adsCampaigns : feedCampaigns

  return (
    <section className="relative py-20 md:py-28 border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-[1600px] px-6 md:px-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <p className="font-label text-white-mute mb-4">GALERIA</p>
            <h2
              className="font-display text-white leading-[0.9] italic"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4.25rem)' }}
            >
              Trabalhos selecionados.
            </h2>
          </div>

          <div role="tablist" aria-label="Formato de criativo" className="flex items-center gap-2">
            <p className="font-label text-white-mute mr-3 hidden sm:block">FORMATO</p>
            <button
              role="tab"
              aria-selected={tab === 'ads'}
              onClick={() => setTab('ads')}
              className={`font-label px-5 py-3 border transition-all ${
                tab === 'ads'
                  ? 'border-lime bg-lime text-ink'
                  : 'border-white/20 text-white-dim hover:border-lime hover:text-lime'
              }`}
            >
              ADS · {adsCampaigns.length}
            </button>
            <button
              role="tab"
              aria-selected={tab === 'feed'}
              onClick={() => setTab('feed')}
              className={`font-label px-5 py-3 border transition-all ${
                tab === 'feed'
                  ? 'border-pink bg-pink text-white'
                  : 'border-white/20 text-white-dim hover:border-pink hover:text-pink'
              }`}
            >
              FEED · {feedCampaigns.length}
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease }}
          >
            {list.length === 0 ? (
              <EmptyState format={tab} />
            ) : (
              <div className="space-y-24 md:space-y-32">
                {list.map((c, idx) => (
                  <Campaign key={c.id} c={c} idx={idx} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-24 md:mt-32 pt-12 border-t border-white/15 text-center">
          <p className="font-label text-white-mute mb-4">QUER VER MAIS?</p>
          <h4 className="font-display text-2xl md:text-4xl text-white mb-8">
            O feed do Instagram tem a versão sem cortes.
          </h4>
          <a
            href="https://instagram.com/designedbyklein"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lime"
          >
            Ver no Instagram ↗
          </a>
        </div>
      </div>
    </section>
  )
}
