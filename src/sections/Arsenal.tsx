import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1] as const

const tools = [
  { name: 'Photoshop', cat: 'Raster', bg: 'bg-pink', text: 'text-white', pos: 'top-[8%] right-[6%]', rot: 3, hoverRot: 8, hoverX: 10, hoverY: -6 },
  { name: 'Figma', cat: 'UI/UX', bg: 'bg-ink', text: 'text-lime', pos: 'top-[10%] left-[8%]', rot: -6, hoverRot: -10, hoverX: -8, hoverY: -8 },
  { name: 'Magnific', cat: 'AI', bg: 'bg-white', text: 'text-ink', pos: 'top-[44%] left-[2%]', rot: -3, hoverRot: -8, hoverX: -10, hoverY: 4 },
  { name: 'CapCut', cat: 'Edit', bg: 'bg-ink', text: 'text-pink', pos: 'top-[42%] right-[2%]', rot: 4, hoverRot: 8, hoverX: 12, hoverY: -4 },
  { name: 'After Effects', cat: 'Motion', bg: 'bg-pink', text: 'text-white', pos: 'bottom-[10%] right-[16%]', rot: -4, hoverRot: 4, hoverX: 8, hoverY: 8 },
  { name: 'Illustrator', cat: 'Vector', bg: 'bg-white', text: 'text-ink', pos: 'bottom-[12%] left-[14%]', rot: 2, hoverRot: -4, hoverX: -8, hoverY: 8 },
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
        {/* ====== MOBILE LAYOUT — title + grid ====== */}
        <div className="md:hidden">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="font-humane uppercase leading-[0.82] text-center mb-10"
            style={{
              fontSize: 'clamp(3.5rem, 16vw, 6rem)',
              letterSpacing: '0.025em',
            }}
          >
            <span className="block text-ink">Meu</span>
            <span className="block text-pink -mt-[0.18em]">Arsenal</span>
          </motion.h2>

          <div className="grid grid-cols-2 gap-3">
            {tools.map((tool, i) => (
              <motion.div
                key={`mobile-${tool.name}`}
                initial={{ opacity: 0, y: 20, rotate: tool.rot }}
                whileInView={{ opacity: 1, y: 0, rotate: tool.rot }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.06, ease }}
                className={`${tool.bg} ${tool.text} px-4 py-3 border-2 border-ink shadow-[4px_4px_0_rgba(10,10,10,0.9)] flex items-center justify-between gap-2`}
              >
                <span className="font-body font-bold text-base whitespace-nowrap">
                  {tool.name}
                </span>
                <span className="font-label opacity-70 text-[0.6rem]">{tool.cat}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ====== DESKTOP LAYOUT — floating composition ====== */}
        <div className="hidden md:block">
          <div className="relative min-h-[600px] flex items-center justify-center">
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
                className={`absolute ${tool.pos} ${tool.bg} ${tool.text} px-7 py-4 border-2 border-ink shadow-[6px_6px_0_rgba(10,10,10,0.9)] hover:shadow-[10px_10px_0_rgba(10,10,10,0.9)] cursor-pointer flex items-center gap-3 z-20 transition-shadow duration-300`}
              >
                <span className="font-body font-bold text-2xl whitespace-nowrap">
                  {tool.name}
                </span>
                <span className="font-label opacity-70 text-sm">{tool.cat}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
