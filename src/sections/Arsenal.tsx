import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1] as const

const tools = [
  { name: 'Figma', cat: 'UI/UX', bg: 'bg-ink', text: 'text-lime', pos: 'top-[6%] left-[8%]', rot: -6, hoverRot: -10, hoverX: -8, hoverY: -8 },
  { name: 'Photoshop', cat: 'Raster', bg: 'bg-pink', text: 'text-white', pos: 'top-[14%] right-[6%]', rot: 3, hoverRot: 8, hoverX: 10, hoverY: -6 },
  { name: 'Illustrator', cat: 'Vector', bg: 'bg-white', text: 'text-ink', pos: 'top-[34%] left-[2%]', rot: 2, hoverRot: -4, hoverX: -10, hoverY: 4 },
  { name: 'After Effects', cat: 'Motion', bg: 'bg-ink', text: 'text-white', pos: 'top-[40%] right-[2%]', rot: -4, hoverRot: 2, hoverX: 12, hoverY: -4 },
  { name: 'Framer', cat: 'Protótipo', bg: 'bg-pink', text: 'text-white', pos: 'bottom-[26%] left-[12%]', rot: 6, hoverRot: 12, hoverX: -8, hoverY: 8 },
  { name: 'Webflow', cat: 'No-code', bg: 'bg-ink', text: 'text-lime', pos: 'bottom-[18%] right-[14%]', rot: -3, hoverRot: 4, hoverX: 8, hoverY: 8 },
  { name: 'Notion', cat: 'Docs', bg: 'bg-white', text: 'text-ink', pos: 'bottom-[6%] left-[36%]', rot: -5, hoverRot: 0, hoverX: 0, hoverY: -10 },
  { name: 'Spline', cat: '3D', bg: 'bg-ink', text: 'text-pink', pos: 'bottom-[8%] right-[28%]', rot: 4, hoverRot: -6, hoverX: 6, hoverY: -8 },
]

export default function Arsenal() {
  return (
    <section
      id="arsenal"
      aria-label="Ferramentas que uso"
      className="relative bg-lime border-t-2 border-b-2 border-ink py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle dark grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #0A0A0A 1px, transparent 1px), linear-gradient(to bottom, #0A0A0A 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-20">
        {/* Floating composition */}
        <div className="relative min-h-[520px] md:min-h-[600px] flex items-center justify-center">
          {/* Center title */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="font-humane uppercase leading-[0.82] text-center pointer-events-none z-10 relative"
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 14rem)',
              letterSpacing: '0.025em',
            }}
          >
            <span className="block text-ink">Meu</span>
            <span className="block text-pink -mt-[0.18em]">Arsenal</span>
          </motion.h2>

          {/* Floating tags */}
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.7, y: 30, rotate: tool.rot }}
              whileInView={{ opacity: 1, scale: 1, y: 0, rotate: tool.rot }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.08, ease }}
              whileHover={{
                scale: 1.12,
                rotate: tool.hoverRot,
                x: tool.hoverX,
                y: tool.hoverY,
                transition: { type: 'spring', stiffness: 300, damping: 14 },
              }}
              className={`absolute ${tool.pos} ${tool.bg} ${tool.text} px-4 py-2.5 md:px-5 md:py-3 border-2 border-ink shadow-[5px_5px_0_rgba(10,10,10,0.9)] hover:shadow-[8px_8px_0_rgba(10,10,10,0.9)] cursor-pointer flex items-center gap-2 z-20 transition-shadow duration-300`}
            >
              <span className="font-body font-bold text-base md:text-xl whitespace-nowrap">
                {tool.name}
              </span>
              <span className="font-label opacity-70">{tool.cat}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
