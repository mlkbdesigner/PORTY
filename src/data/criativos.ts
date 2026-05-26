export type CriativoCategory = 'anuncios' | 'feed' | 'email-marketing'

export interface CriativoCampaign {
  id: string
  client: string
  title: string
  year: string
  description?: string
  master?: string
  pieces: string[]
}

export interface CategoryMeta {
  slug: CriativoCategory
  name: string
  tagline: string
  description: string
  accent: 'lime' | 'pink' | 'white'
  previewImage?: string
}

export const categoryOrder: CriativoCategory[] = ['anuncios', 'feed', 'email-marketing']

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
  'email-marketing': [],
}
