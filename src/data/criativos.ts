export type CriativoFormat = 'ads' | 'feed'

export interface CriativoCampaign {
  id: string
  client: string
  title: string
  year: string
  description?: string
  master?: string
  pieces: string[]
}

export const adsCampaigns: CriativoCampaign[] = [
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
]

export const feedCampaigns: CriativoCampaign[] = []
