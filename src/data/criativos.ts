export type CriativoCategory = 'anuncios' | 'feed' | 'email-marketing'

export type SlideFormat = 'square' | 'portrait'

export interface CriativoCampaign {
  id: string
  client: string
  title: string
  year: string
  description?: string
  master?: string
  pieces: string[]
  /** Aspect format das peças — controla a largura dos slides no carrossel. Default: 'square'. */
  format?: SlideFormat
}

export interface CategoryMeta {
  slug: CriativoCategory
  name: string
  tagline: string
  description: string
  accent: 'lime' | 'pink' | 'white'
  previewImage?: string
}

export const categoryOrder: CriativoCategory[] = ['feed', 'anuncios', 'email-marketing']

export const categoryMeta: Record<CriativoCategory, CategoryMeta> = {
  anuncios: {
    slug: 'anuncios',
    name: 'Anúncios',
    tagline: 'Criativo performático para mídia paga',
    description:
      'Campanhas de tráfego pago — direção criativa, copy e desdobramentos pra Meta Ads, TikTok Ads e demais plataformas.',
    accent: 'lime',
    previewImage: '/criativos/ads/ada-nutraceuticos-dia-das-maes/master.png',
  },
  feed: {
    slug: 'feed',
    name: 'Criativos para Feed',
    tagline: 'Conteúdo orgânico e identidade no feed',
    description:
      'Peças contínuas pra social media — posts, carrosséis e identidade visual aplicada no feed das marcas.',
    accent: 'pink',
  },
  'email-marketing': {
    slug: 'email-marketing',
    name: 'E-mail Marketing',
    tagline: 'Templates e campanhas de nutrição',
    description:
      'Templates e disparos pra nutrição de base, lançamentos e relacionamento — design pensado pra inbox.',
    accent: 'white',
    previewImage: '/criativos/email-marketing/ada-nutraceuticos-regua-crm/01-boas-vindas-desconto.png',
  },
}

export const campaignsByCategory: Record<CriativoCategory, CriativoCampaign[]> = {
  anuncios: [
    {
      id: 'ada-dia-das-maes',
      client: 'ADA Nutracêuticos',
      title: 'Campanha do Dia das Mães',
      year: '2025',
      description:
        'Direção criativa pra campanha de Dia das Mães — 4 combos especiais com brinde, cada um pensado pra um perfil de consumidora. Layout mãe + desdobramentos individuais.',
      master: '/criativos/ads/ada-nutraceuticos-dia-das-maes/master.png',
      pieces: [
        '/criativos/ads/ada-nutraceuticos-dia-das-maes/combo-01.png',
        '/criativos/ads/ada-nutraceuticos-dia-das-maes/combo-02.png',
        '/criativos/ads/ada-nutraceuticos-dia-das-maes/combo-03.png',
        '/criativos/ads/ada-nutraceuticos-dia-das-maes/combo-04.png',
      ],
    },
  ],
  feed: [],
  'email-marketing': [
    {
      id: 'ada-regua-crm',
      client: 'ADA Nutracêuticos',
      title: 'Régua de E-mail Marketing',
      year: '2025',
      format: 'portrait',
      description:
        'Régua de CRM completa pra base — do boas-vindas com cashback até reativação por aniversário, indicação de amigo e atualização de plataforma. Templates pensados pra inbox e jornada do consumidor.',
      pieces: [
        '/criativos/email-marketing/ada-nutraceuticos-regua-crm/01-boas-vindas-desconto.png',
        '/criativos/email-marketing/ada-nutraceuticos-regua-crm/02-boas-vindas-health-points.png',
        '/criativos/email-marketing/ada-nutraceuticos-regua-crm/03-agradecimento-pedido.png',
        '/criativos/email-marketing/ada-nutraceuticos-regua-crm/04-aniversario.png',
        '/criativos/email-marketing/ada-nutraceuticos-regua-crm/05-indicacao-amigo.png',
        '/criativos/email-marketing/ada-nutraceuticos-regua-crm/06-adaclinconnect.png',
      ],
    },
  ],
}
