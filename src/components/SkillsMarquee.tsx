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

export default function SkillsMarquee() {
  // Triple the array so the marquee loop is seamless
  const loopItems = [...skills, ...skills, ...skills]

  return (
    <section
      aria-label="Habilidades"
      className="relative w-full overflow-hidden bg-ink border-t border-b border-white/15 py-5 md:py-7 z-[6]"
    >
      <div className="flex items-center whitespace-nowrap marquee-track gap-8 md:gap-14">
        {loopItems.map((skill, i) => (
          <div key={`${skill}-${i}`} className="flex items-center gap-8 md:gap-14 shrink-0">
            <span
              className="font-humane uppercase text-pink leading-none text-3xl md:text-5xl"
              style={{ letterSpacing: 'calc(0.025em + 1px)' }}
            >
              {skill}
            </span>
            <span className="text-lime text-2xl md:text-3xl">✦</span>
          </div>
        ))}
      </div>

      {/* Edge fades to soften the loop */}
      <div
        className="absolute inset-y-0 left-0 w-16 md:w-32 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to right, var(--color-ink), transparent)' }}
      />
      <div
        className="absolute inset-y-0 right-0 w-16 md:w-32 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to left, var(--color-ink), transparent)' }}
      />
    </section>
  )
}
