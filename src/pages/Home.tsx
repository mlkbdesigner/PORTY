import Nav from '../components/Nav'
import SkillsMarquee from '../components/SkillsMarquee'
import Hero from '../sections/Hero'
import Sobre from '../sections/Sobre'
import Arsenal from '../sections/Arsenal'
import Portfolio from '../sections/Portfolio'
import Servicos from '../sections/Servicos'
import Processo from '../sections/Processo'
import Contato from '../sections/Contato'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-ink text-cream grain">
      <a href="#main-content" className="skip-link">Pular para o conteúdo</a>
      <Nav />
      <main id="main-content">
        <Hero />
        <SkillsMarquee />
        <Sobre />
        <Arsenal />
        <Portfolio />
        <Servicos />
        <Processo />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}
