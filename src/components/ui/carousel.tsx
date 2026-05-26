import { createContext, useCallback, useContext, useEffect, useState, type HTMLAttributes, type ReactNode } from 'react'
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel'

type EmblaApi = UseEmblaCarouselType[1]

interface CarouselContextValue {
  emblaRef: UseEmblaCarouselType[0]
  emblaApi: EmblaApi | undefined
  selectedIndex: number
  scrollSnaps: number[]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
}

const CarouselContext = createContext<CarouselContextValue | null>(null)

function useCarousel() {
  const ctx = useContext(CarouselContext)
  if (!ctx) throw new Error('Carousel components must be used inside <Carousel>')
  return ctx
}

interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  options?: EmblaOptionsType
  children: ReactNode
}

export function Carousel({ options, className, children, ...rest }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback((api: EmblaApi) => {
    if (!api) return
    setSelectedIndex(api.selectedScrollSnap())
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <CarouselContext.Provider
      value={{ emblaRef, emblaApi, selectedIndex, scrollSnaps, scrollPrev, scrollNext, canScrollPrev, canScrollNext }}
    >
      <div className={className} {...rest}>
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

interface SliderContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function SliderContainer({ className, children, ...rest }: SliderContainerProps) {
  const { emblaRef } = useCarousel()
  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className={`flex ${className ?? ''}`} {...rest}>
        {children}
      </div>
    </div>
  )
}

interface SliderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Slider({ className, children, ...rest }: SliderProps) {
  return (
    <div className={`shrink-0 ${className ?? ''}`} {...rest}>
      {children}
    </div>
  )
}

interface SliderSnapDisplayProps extends HTMLAttributes<HTMLDivElement> {
  separator?: ReactNode
}

export function SliderSnapDisplay({ className, separator = ' / ', ...rest }: SliderSnapDisplayProps) {
  const { selectedIndex, scrollSnaps } = useCarousel()
  const total = scrollSnaps.length
  const current = total === 0 ? 0 : selectedIndex + 1
  return (
    <div className={`tabular-nums ${className ?? ''}`} {...rest}>
      {String(current).padStart(2, '0')}
      {separator}
      {String(total).padStart(2, '0')}
    </div>
  )
}

interface SliderNavProps {
  className?: string
}

export function SliderPrevButton({ className }: SliderNavProps) {
  const { scrollPrev, canScrollPrev } = useCarousel()
  return (
    <button
      type="button"
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      aria-label="Anterior"
      className={className}
    >
      ←
    </button>
  )
}

export function SliderNextButton({ className }: SliderNavProps) {
  const { scrollNext, canScrollNext } = useCarousel()
  return (
    <button
      type="button"
      onClick={scrollNext}
      disabled={!canScrollNext}
      aria-label="Próximo"
      className={className}
    >
      →
    </button>
  )
}
