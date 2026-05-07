import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1] as const

const features = [
  {
    n: '01',
    title: 'Procurar abrigos com base na localização',
    body: 'Os usuários podem pesquisar por abrigos próximos à sua área geográfica, tornando mais fácil encontrar um abrigo conveniente.',
  },
  {
    n: '02',
    title: 'Visualizar os gatinhos disponíveis',
    body: 'Dentro da plataforma, é possível ver quais gatos estão disponíveis em cada abrigo, com informações básicas como idade e características.',
  },
  {
    n: '03',
    title: 'Adotar um novo pet',
    body: 'Ao encontrar um gato adequado, o usuário pode seguir os procedimentos necessários pela própria plataforma para levar o pet para casa.',
  },
  {
    n: '04',
    title: 'Dicas de como cuidar do seu novo pet',
    body: 'Cards com informações sobre cuidados com gatos, especialmente desenvolvidos para pessoas sem experiência prévia.',
  },
]

const palette = [
  { name: 'PRIMARY', hex: '#FFB6A8' },
  { name: 'ACCENT', hex: '#FF6B6B' },
  { name: 'SUPPORT', hex: '#FFE5DA' },
  { name: 'INK', hex: '#1A1A1A' },
]

function SectionHeader({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-10 font-label text-white-dim">
      <span className="w-8 h-px bg-lime" />
      <span className="text-lime">[ {index} ]</span>
      <span>{label}</span>
    </div>
  )
}

export default function CatMatchCaseStudy({ coverUrl }: { coverUrl: string }) {
  return (
    <div className="relative bg-ink text-cream">
      {/* ====== O PROBLEMA ====== */}
      <section className="relative py-24 md:py-36 border-t border-white/10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-20">
          <SectionHeader index="01" label="O PROBLEMA" />

          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-5">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease }}
                className="font-humane uppercase text-lime leading-[0.85]"
                style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)', letterSpacing: '0.025em' }}
              >
                Muitos<br />
                <span className="text-pink italic font-display">gatos</span>,<br />
                poucos lares.
              </motion.h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease, delay: 0.2 }}
                className="text-lg md:text-xl leading-relaxed text-white-dim"
              >
                No Recife, existe um grande número de abrigos para felinos. No
                entanto, esses abrigos enfrentam dificuldades em manter-se devido à
                <span className="text-white"> grande quantidade de gatos ainda não adotados</span>,
                à<span className="text-white"> falta de recursos financeiros</span> e ao
                <span className="text-white"> difícil acesso a informações</span> sobre os
                felinos que habitam esses espaços.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== OBJETIVO ====== */}
      <section className="relative py-24 md:py-36 border-t border-white/10 bg-[#0F0F0F]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-20">
          <SectionHeader index="02" label="OBJETIVO" />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease }}
            className="font-display text-white leading-[0.95] tracking-tight max-w-5xl"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)' }}
          >
            Conectar gatos que precisam de um lar com pessoas
            <span className="italic text-lime"> dispostas a adotar</span> — reduzindo
            o número de animais em abrigos por meio de uma plataforma
            <span className="italic text-pink"> acessível e conveniente</span>.
          </motion.h2>
        </div>
      </section>

      {/* ====== PALETA DE CORES ====== */}
      <section className="relative py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-20">
          <SectionHeader index="03" label="PALETA DE CORES" />

          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
            <div className="md:col-span-4">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease }}
                className="font-humane uppercase text-white leading-[0.9]"
                style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', letterSpacing: '0.025em' }}
              >
                Tons<br />
                <span className="italic text-lime">aconchegantes</span>.
              </motion.h3>
              <p className="mt-6 text-white-dim leading-relaxed max-w-md">
                Paleta inspirada em tons quentes que evocam acolhimento, sem cair na
                infantilização típica do segmento pet.
              </p>
            </div>

            <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {palette.map((c, i) => (
                <motion.div
                  key={c.hex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                  className="group"
                >
                  <div
                    className="aspect-square w-full border-2 border-ink group-hover:border-lime transition-colors duration-300"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="mt-3 flex items-center justify-between font-label">
                    <span className="text-white">{c.name}</span>
                    <span className="text-white-mute">{c.hex}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURES ====== */}
      <section className="relative py-24 md:py-36 border-t border-white/10 bg-[#0F0F0F]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-20">
          <SectionHeader index="04" label="FEATURES" />

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease }}
            className="font-humane uppercase text-white leading-[0.85] mb-16 md:mb-24"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)', letterSpacing: '0.025em' }}
          >
            O que o app<br />
            <span className="italic text-lime">faz</span>.
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {features.map((f, i) => (
              <motion.div
                key={f.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease, delay: i * 0.08 }}
                className="group relative p-7 md:p-9 border border-white/15 hover:border-lime transition-colors duration-300 bg-ink"
              >
                <div className="flex items-baseline justify-between mb-6 font-label">
                  <span className="text-lime text-base">{f.n} /</span>
                  <span className="text-white-mute">FEATURE</span>
                </div>
                <h4 className="font-display text-2xl md:text-3xl text-white leading-tight mb-4">
                  {f.title}
                </h4>
                <p className="text-white-dim leading-relaxed">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PROTÓTIPO ====== */}
      <section className="relative py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-20">
          <SectionHeader index="05" label="PROTÓTIPO" />

          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start mb-16">
            <div className="md:col-span-5">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease }}
                className="font-humane uppercase text-white leading-[0.85]"
                style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', letterSpacing: '0.025em' }}
              >
                Alta<br />
                <span className="italic text-pink">fidelidade</span>.
              </motion.h3>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-white-dim leading-relaxed text-lg">
                Protótipo navegável com fluxos completos de busca, perfil do gato e
                processo de adoção. Pesquisa primária com veterinários alimentou a
                arquitetura de informação e as decisões de copy.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease }}
            className="relative w-full overflow-hidden border border-white/10"
          >
            <img
              src={coverUrl}
              alt="CatMatch — protótipo"
              className="w-full h-auto block"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
