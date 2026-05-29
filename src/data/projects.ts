export type Accent = 'lime' | 'pink' | 'white' | 'neutral'

export interface Project {
  id: number
  slug: string
  title: string
  year: string
  category: string
  keyword: string
  tabLeft: string
  tags: string[]
  description: string
  longDescription: string
  cover: string
  oldUrl: string
  liveUrl?: string
  role: string
  deliverables: string[]
  accent: Accent
  gallery?: string[]
  galleryBg?: string
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'pecas-graficas',
    title: 'Criativos',
    year: '2022 — 2026',
    category: 'Branding',
    keyword: 'SOCIAL MEDIA',
    tabLeft: '3%',
    tags: ['Social Media', 'Design Gráfico', 'Multi-cliente'],
    description:
      'Direção criativa de social media pra múltiplos clientes desde 2022 — campanhas, lançamentos e conteúdo recorrente. Cada marca com seu sistema visual replicável e voz própria.',
    longDescription:
      'Direção criativa contínua pra múltiplos clientes desde 2022 — campanhas de lançamento, conteúdo recorrente, sistemas visuais aplicados e peças pontuais de tração. Cada cliente exige uma voz própria e um sistema replicável: o trabalho é fazer cada marca ficar reconhecível dentro do ruído do feed, sem trair a estratégia. Volume, consistência e adaptação entre tons radicalmente diferentes — do editorial ao performático, do sofisticado ao espontâneo.',
    cover: 'https://cdn.myportfolio.com/47fe971d-a65e-45a7-afba-3ca6fcea238c/60570813-114b-4d2f-bc3c-4c83afb58531_carw_202x158x1920.jpg?h=c92dc8f9cf90d55c7705085414f9a6bc',
    oldUrl: 'https://mlkb.myportfolio.com/social-media',
    role: 'Graphic Design',
    deliverables: ['Posts', 'Campanhas', 'Identidade'],
    accent: 'white',
  },
  {
    id: 2,
    slug: 'fenty-beauty',
    title: 'Fenty Beauty',
    year: '2025',
    category: 'Landing Page',
    keyword: 'LANDING PAGE',
    tabLeft: '28%',
    tags: ['E-commerce', 'Beauty', 'Editorial'],
    description:
      'Landing page conceitual para a Fenty Beauty com foco em storytelling de produto e estética editorial de luxo. Explorei transições de imagem, tipografia serif imponente e paleta inspirada nos tons da própria marca.',
    longDescription:
      'Projeto conceitual de redesign da landing page da Fenty Beauty, marca da Rihanna. O objetivo foi traduzir a atitude da marca — diversidade, ousadia e luxo democrático — em uma experiência web cinematográfica. Trabalhei o ritmo da página com transições de imagem fullscreen, tipografia serif em escala editorial, e uma paleta cromática extraída diretamente dos packagings dos produtos. A versão final foi prototipada em Framer e está disponível no link abaixo.',
    cover: 'https://cdn.myportfolio.com/47fe971d-a65e-45a7-afba-3ca6fcea238c/03a10940-2b1e-4bed-8c4c-f0cf44203ac6_carw_202x158x1920.png?h=c82285b685adb23774ed42f1fc9603a3',
    oldUrl: 'https://mlkb.myportfolio.com/fenty-beauty-landing-page',
    liveUrl: 'https://fenty.framer.website/',
    role: 'Design & Art Direction',
    deliverables: ['UI Design', 'Wireframes', 'Prototype'],
    accent: 'pink',
    galleryBg: '#0C0014',
    gallery: [
      '/projects/fenty/01-hero.png',
      '/projects/fenty/08-description.png',
      '/projects/fenty/02-main-goal.png',
      '/projects/fenty/03-moodboard.png',
      '/projects/fenty/04-info-architecture.png',
      '/projects/fenty/05-design-process.png',
      '/projects/fenty/06-typography-colors.png',
      '/projects/fenty/07-landing-page.png',
      '/projects/fenty/09-thank-you.png',
    ],
  },
  {
    id: 3,
    slug: 'catmatch',
    title: 'CatMatch',
    year: '2023',
    category: 'UI/UX',
    keyword: 'MOBILE / UX',
    tabLeft: '52%',
    tags: ['Mobile App', 'Pets', 'Social'],
    description:
      'Plataforma de adoção de gatos com sistema de match, perfil de temperamento e onboarding lúdico. Um projeto que une design funcional com propósito social.',
    longDescription:
      'CatMatch é uma plataforma de adoção responsável de gatos que aplica a lógica de "match" pra conectar tutores e felinos com base em temperamento, energia e estilo de vida. O onboarding é lúdico mas funcional: cada pergunta alimenta um algoritmo de compatibilidade. Trabalhei o design com foco em acessibilidade emocional — cada gato tem ficha completa, fotos reais e histórico, sem mascarar dificuldades.',
    cover: 'https://cdn.myportfolio.com/47fe971d-a65e-45a7-afba-3ca6fcea238c/44676983-4627-402a-aabe-8af96cc62a65_rwc_0x24x2700x2110x1920.png?h=6ca7d0bcf312d468f64d791e79f27485',
    oldUrl: 'https://mlkb.myportfolio.com/catmatch-uiux',
    role: 'Product Design',
    deliverables: ['UX Research', 'UI Design', 'Prototype'],
    accent: 'lime',
  },
  {
    id: 4,
    slug: 'smooti',
    title: 'Smooti',
    year: '2023',
    category: 'Branding',
    keyword: 'ID VISUAL',
    tabLeft: '76%',
    tags: ['Identidade Visual', 'Logo', 'F&B'],
    description:
      'Identidade visual completa para marca de smoothies artesanais. Paleta vibrante, sistema modular e aplicações do Instagram ao ponto físico — branding pra marca ser lembrada.',
    longDescription:
      'Identidade visual completa pra Smooti, marca de smoothies artesanais. Construí um sistema visual modular: logo principal + variações, paleta vibrante derivada das frutas reais usadas no produto, tipografia mista (display imponente + sans humanista) e biblioteca de aplicações que cobre do Instagram ao copo físico. O briefing era simples: "queremos parecer fresco sem virar mais uma marca de juice clichê" — e o sistema foi montado pra escalar sem perder personalidade.',
    cover: 'https://cdn.myportfolio.com/47fe971d-a65e-45a7-afba-3ca6fcea238c/e8f6a76d-708d-4fee-9993-6fceedea12c4_rwc_186x0x1023x800x1023.png?h=2a5b7cbce01d404d7030205b1ee100a5',
    oldUrl: 'https://mlkb.myportfolio.com/smooti-1',
    role: 'Brand Identity',
    deliverables: ['Logo', 'Manual', 'Aplicações'],
    accent: 'lime',
    galleryBg: '#FFF8E5',
    gallery: [
      '/projects/smooti/01-case-study.jpg',
    ],
  },
]

export const accentBgColor: Record<Accent, string> = {
  lime: '#9BE800',
  pink: '#FF3399',
  white: '#F5F1EB',
  neutral: '#1A1A1A',
}

export const isDarkAccent = (a: Accent) => a === 'neutral' || a === 'pink'

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
