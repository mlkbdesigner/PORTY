export type CriativoCategory = 'anuncios' | 'feed' | 'email-marketing'

export type SlideFormat = 'square' | 'portrait'

export interface CriativoRow {
  /** Rótulo opcional acima do slider (ex.: "Feed", "Stories"). */
  label?: string
  format: SlideFormat
  pieces: string[]
}

export interface CriativoCampaign {
  id: string
  client: string
  title: string
  year: string
  description?: string
  master?: string
  rows: CriativoRow[]
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
    previewImage: '/criativos/feed/forsun/feed-01.png',
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
      id: 'voltys-eletrolitos',
      client: 'Voltys',
      title: 'Campanha de Eletrólitos',
      year: '2026',
      description:
        'Direção criativa pra mídia paga da Voltys (eletrólitos) — posicionamento "zero excessos, tudo o que precisa". Sistema com 10 ads pro feed e 10 desdobramentos verticais pra stories, mantendo a paleta clean e a hierarquia tipográfica da marca.',
      rows: [
        {
          label: 'Feed',
          format: 'square',
          pieces: Array.from({ length: 10 }, (_, i) =>
            `/criativos/ads/voltys/feed-${String(i + 1).padStart(2, '0')}.png`,
          ),
        },
        {
          label: 'Stories',
          format: 'portrait',
          pieces: Array.from({ length: 10 }, (_, i) =>
            `/criativos/ads/voltys/story-${String(i + 1).padStart(2, '0')}.png`,
          ),
        },
      ],
    },
    {
      id: 'ada-dia-das-maes',
      client: 'ADA Nutracêuticos',
      title: 'Campanha do Dia das Mães',
      year: '2026',
      description:
        'Direção criativa pra campanha de Dia das Mães — 4 combos especiais com brinde, cada um pensado pra um perfil de consumidora. Layout mãe + desdobramentos individuais.',
      master: '/criativos/ads/ada-nutraceuticos-dia-das-maes/master.png',
      rows: [
        {
          format: 'square',
          pieces: [
            '/criativos/ads/ada-nutraceuticos-dia-das-maes/combo-01.png',
            '/criativos/ads/ada-nutraceuticos-dia-das-maes/combo-02.png',
            '/criativos/ads/ada-nutraceuticos-dia-das-maes/combo-03.png',
            '/criativos/ads/ada-nutraceuticos-dia-das-maes/combo-04.png',
          ],
        },
      ],
    },
  ],
  feed: [
    {
      id: 'belle-acessories',
      client: 'Belle Acessórios',
      title: 'Peças Avulsas',
      year: '2023',
      description:
        'Criativos avulsos pra Belle Acessórios — direção de imagem com foco em material natural (mármore, ouro, pérola) e copy editorial pra comunicar valor sem perder a leveza do feed.',
      rows: [
        {
          label: 'Feed',
          format: 'square',
          pieces: [
            '/criativos/feed/belle-acessories/feed-01.png',
            '/criativos/feed/belle-acessories/feed-02.png',
          ],
        },
        {
          label: 'Stories',
          format: 'portrait',
          pieces: [
            '/criativos/feed/belle-acessories/story-01.jpg',
            '/criativos/feed/belle-acessories/story-02.jpg',
          ],
        },
      ],
    },
    {
      id: 'forsun-feed',
      client: 'Forsun',
      title: 'Identidade no Feed',
      year: '2025',
      description:
        'Direção visual contínua pra Forsun no Instagram — posts e stories alinhados, do conceito ao desdobramento. Sistema replicável pra alimentar feed e stories com a mesma voz.',
      rows: [
        {
          label: 'Feed',
          format: 'square',
          pieces: Array.from({ length: 20 }, (_, i) =>
            `/criativos/feed/forsun/feed-${String(i + 1).padStart(2, '0')}.png`,
          ),
        },
        {
          label: 'Stories',
          format: 'portrait',
          pieces: Array.from({ length: 20 }, (_, i) =>
            `/criativos/feed/forsun/story-${String(i + 1).padStart(2, '0')}.png`,
          ),
        },
      ],
    },
  ],
  'email-marketing': [
    {
      id: 'qix-winback',
      client: 'QIX',
      title: 'Régua de Winback',
      year: '2026',
      description:
        'Fluxo de winback pra reativação de base — 3 disparos escalonados (4, 7 e 90 dias) com cupom progressivo, gatilhos de urgência e CTA de WhatsApp pra reabrir conversa antes do cliente esfriar.',
      rows: [
        {
          format: 'portrait',
          pieces: [
            '/criativos/email-marketing/qix/01-04-dias.png',
            '/criativos/email-marketing/qix/02-07-dias.png',
            '/criativos/email-marketing/qix/03-90-dias.png',
          ],
        },
      ],
    },
    {
      id: 'ada-regua-crm',
      client: 'ADA Nutracêuticos',
      title: 'Régua de E-mail Marketing',
      year: '2026',
      description:
        'Régua de CRM completa pra base — do boas-vindas com cashback até reativação por aniversário, indicação de amigo e atualização de plataforma. Templates pensados pra inbox e jornada do consumidor.',
      rows: [
        {
          format: 'portrait',
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
    },
  ],
}
