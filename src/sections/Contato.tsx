import { motion } from 'motion/react'
import { useState } from 'react'

const ease = [0.16, 1, 0.3, 1] as const

const contactLinks = [
  { label: 'Email', value: 'mlkbdesigner@gmail.com', href: 'mailto:mlkbdesigner@gmail.com' },
  { label: 'Behance', value: '@marialusak', href: 'https://www.behance.net/marialusak' },
  { label: 'LinkedIn', value: '/in/mlkb', href: 'https://www.linkedin.com/in/mlkb/' },
  { label: 'Instagram', value: '@designedbyklein', href: 'https://instagram.com/designedbyklein' },
]

const services = ['Web Design', 'Branding', 'Criativos & Ads', 'Design Gráfico', 'Outro']
const budgets = ['Até R$1k', 'R$1k — R$3k', 'R$3k — R$8k', '+R$8k']

const WEB3FORMS_ACCESS_KEY = 'df931b24-8e50-432d-ba56-20a6a06ced26'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export default function Contato() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')

  return (
    <section id="contato" className="relative py-28 md:py-40 border-t border-white/15 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-20">
        {/* Section header */}
        <div className="flex items-center justify-between mb-10 font-label text-white-dim">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-lime" />
            <span className="text-lime">[ 06 ]</span>
            <span>CONTATO</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-lime rounded-full blink" />
            <span>DISPONÍVEL</span>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-stretch">
          {/* Left — Headline + Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="md:col-span-5 flex flex-col"
          >
            {/* Headline (now inside left col) */}
            <h1
              className="font-humane uppercase text-pink leading-[0.82] mb-6 md:mb-8 text-center md:text-left"
              style={{
                fontSize: 'clamp(5rem, 14vw, 10rem)',
                letterSpacing: '0.025em',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 1, ease, delay: 0.15 }}
                className="block"
              >
                Vamos criar
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 1, ease, delay: 0.35 }}
                className="block text-white -mt-[0.18em]"
              >
                algo juntos?
              </motion.div>
            </h1>

            <p className="font-label text-white-mute mb-6">CANAIS DIRETOS</p>
            <div className="border-t border-white/15">
              {contactLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 border-b border-white/15 hover:pl-3 transition-all duration-500"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-label text-white-mute w-16">0{i + 1}</span>
                    <span className="font-display text-2xl md:text-3xl text-white group-hover:text-lime group-hover:italic transition-all duration-500">
                      {link.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-label text-white-mute hidden md:inline">{link.value}</span>
                    <span className="text-white-dim group-hover:text-lime group-hover:translate-x-1 transition-all">
                      ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>

          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="md:col-span-7 flex flex-col"
          >
            <p className="font-label text-white-mute mb-6">OU ME CONTE SOBRE SEU PROJETO ↓</p>

            <form
              className="flex-1 flex flex-col border border-white/15 bg-neutral/30 p-6 md:p-10 space-y-8"
              onSubmit={async (e) => {
                e.preventDefault()
                if (status === 'sending') return

                const form = e.currentTarget
                const name = (form.elements.namedItem('name') as HTMLInputElement).value
                const email = (form.elements.namedItem('email') as HTMLInputElement).value
                const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value

                setStatus('sending')
                setErrorMsg('')

                try {
                  const res = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      Accept: 'application/json',
                    },
                    body: JSON.stringify({
                      access_key: WEB3FORMS_ACCESS_KEY,
                      from_name: 'Portfolio Malu Klein',
                      subject: `[Portfolio] Novo projeto — ${name}`,
                      name,
                      email,
                      servico: selectedService || '—',
                      budget: selectedBudget || '—',
                      message,
                    }),
                  })

                  const data = await res.json()
                  if (data.success) {
                    setStatus('success')
                    form.reset()
                    setSelectedService(null)
                    setSelectedBudget(null)
                  } else {
                    setStatus('error')
                    setErrorMsg(data.message || 'Não rolou enviar. Tenta de novo ou me chama no e-mail.')
                  }
                } catch (err) {
                  setStatus('error')
                  setErrorMsg('Sem conexão. Tenta de novo ou me chama no e-mail.')
                }
              }}
            >
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="font-label text-white-mute mb-3 flex items-center gap-2">
                  <span className="text-lime">01</span> COMO POSSO TE CHAMAR?
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Seu nome"
                  className="w-full bg-transparent border-b border-white/20 pb-3 font-display text-2xl md:text-3xl text-white placeholder:text-white-mute/40 focus:border-lime focus-visible:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="font-label text-white-mute mb-3 flex items-center gap-2">
                  <span className="text-lime">02</span> SEU MELHOR EMAIL
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="voce@exemplo.com"
                  className="w-full bg-transparent border-b border-white/20 pb-3 font-display text-2xl md:text-3xl text-white placeholder:text-white-mute/40 focus:border-lime focus-visible:outline-none transition-colors"
                />
              </div>

              {/* Service */}
              <div role="group" aria-labelledby="contact-service-label">
                <div id="contact-service-label" className="font-label text-white-mute mb-3 block">
                  <span className="text-lime">03</span> QUE TIPO DE PROJETO?
                </div>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <button
                      key={s}
                      type="button"
                      aria-pressed={selectedService === s}
                      onClick={() => setSelectedService(s)}
                      className={`font-label px-4 py-2.5 border transition-all ${
                        selectedService === s
                          ? 'border-lime bg-lime text-ink'
                          : 'border-white/20 text-white-dim hover:border-lime hover:text-lime'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div role="group" aria-labelledby="contact-budget-label">
                <div id="contact-budget-label" className="font-label text-white-mute mb-3 block">
                  <span className="text-lime">04</span> BUDGET ESTIMADO
                </div>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      aria-pressed={selectedBudget === b}
                      onClick={() => setSelectedBudget(b)}
                      className={`font-label px-4 py-2.5 border transition-all ${
                        selectedBudget === b
                          ? 'border-pink bg-pink text-white'
                          : 'border-white/20 text-white-dim hover:border-pink hover:text-pink'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="font-label text-white-mute mb-3 flex items-center gap-2">
                  <span className="text-lime">05</span> ME CONTA MAIS
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Sobre o projeto, prazo, referências..."
                  className="w-full bg-transparent border-b border-white/20 pb-3 font-body text-base md:text-lg text-white placeholder:text-white-mute/40 focus:border-lime focus-visible:outline-none transition-colors resize-none"
                />
              </div>

              {/* Status feedback */}
              {status === 'success' && (
                <div className="border border-lime bg-lime/10 px-4 py-3 font-label text-lime flex items-center gap-2">
                  <span>✓</span>
                  MENSAGEM ENVIADA · RESPONDO EM ATÉ 24H
                </div>
              )}
              {status === 'error' && (
                <div className="border border-pink bg-pink/10 px-4 py-3 font-label text-pink">
                  ERRO · {errorMsg}
                </div>
              )}

              {/* Submit */}
              <div className="pt-4 mt-auto flex items-center justify-between">
                <p className="font-label text-white-mute hidden md:block">
                  RESPOSTA EM ATÉ 24H
                </p>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-lime disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Enviando...' : status === 'success' ? 'Enviar outra ↻' : 'Enviar mensagem →'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
