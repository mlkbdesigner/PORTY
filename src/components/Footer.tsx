import { motion } from 'motion/react'

const marqueeItems = ['UI/UX', '✦', 'BRANDING', '✦', 'LANDING PAGES', '✦', 'DESIGN SYSTEMS', '✦']

export default function Footer() {
  return (
    <footer className="relative border-t border-white/15 overflow-hidden">
      {/* Marquee row */}
      <div className="relative py-10 md:py-14 border-b border-white/15 overflow-hidden">
        <div className="flex whitespace-nowrap marquee-inner">
          {[...Array(4)].map((_, loop) => (
            <div key={loop} className="flex items-center gap-10 md:gap-14 pr-10 md:pr-14">
              {marqueeItems.map((item, i) => (
                <span
                  key={`${loop}-${i}`}
                  className={`font-display text-[clamp(3rem,8vw,8rem)] leading-none ${
                    item === '✦' ? 'text-pink' : 'text-white italic'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom info */}
      <div className="relative py-14 md:py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-20">
          <div className="grid md:grid-cols-12 gap-10">
            {/* Giant logo */}
            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <p className="font-label text-white-mute mb-4">MALU KLEIN BRITO</p>
                <div className="font-display text-7xl md:text-[9rem] leading-[0.85] text-white">
                  M<span className="italic text-lime">L</span>
                  <br />
                  K<span className="italic text-pink">B</span>
                </div>
                <p className="mt-6 text-white-dim text-sm max-w-xs">
                  Designer multidisciplinar focada em criar experiências digitais que
                  importam.
                </p>
              </motion.div>
            </div>

            {/* Columns */}
            <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <p className="font-label text-white-mute mb-4">NAVEGAÇÃO</p>
                <ul className="space-y-3 font-display text-xl text-white">
                  <li><a href="#sobre" className="link-underline hover:text-lime transition">Sobre</a></li>
                  <li><a href="#portfolio" className="link-underline hover:text-lime transition">Portfólio</a></li>
                  <li><a href="#servicos" className="link-underline hover:text-lime transition">Serviços</a></li>
                  <li><a href="#processo" className="link-underline hover:text-lime transition">Processo</a></li>
                </ul>
              </div>
              <div>
                <p className="font-label text-white-mute mb-4">SOCIAL</p>
                <ul className="space-y-3 font-display text-xl text-white">
                  <li><a href="https://www.behance.net/marialusak" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-lime transition">Behance ↗</a></li>
                  <li><a href="https://www.linkedin.com/in/mlkb/" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-lime transition">LinkedIn ↗</a></li>
                  <li><a href="https://instagram.com/designedbyklein" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-lime transition">Instagram ↗</a></li>
                  <li><a href="https://mlkb.myportfolio.com/home" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-lime transition">Portfolio ↗</a></li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="font-label text-white-mute mb-4">CONTATO DIRETO</p>
                <p className="font-display italic text-xl text-lime mb-3">
                  mlkbdesigner@gmail.com
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 font-label text-white-dim">
                  <span className="w-1.5 h-1.5 bg-lime rounded-full blink" />
                  DISPONÍVEL Q2/2026
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-label text-white-mute">
            <span>© 2026 · MALU KLEIN · TODOS OS DIREITOS RESERVADOS</span>
            <span>DESIGNED &amp; BUILT IN CURITIBA · BR</span>
            <a href="#top" className="link-underline hover:text-lime transition flex items-center gap-2">
              VOLTAR AO TOPO <span>↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
