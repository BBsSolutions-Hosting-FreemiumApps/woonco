export type ArticleCategorySlug =
  | 'ecodorpen'
  | 'duurzaam-bouwen'
  | 'gemeenschap'
  | 'natuur-voedsel'

export interface ArticleCategoryInfo {
  slug: ArticleCategorySlug
  label: string
}

export interface Article {
  slug: string
  title: string
  dek: string
  category: ArticleCategorySlug
  image: string
  imageAlt: string
  author: string
  date: string
  readTime: string
  body: string[]
  featured?: boolean
  relatedListingSlug?: string
}

export type ListingCategorySlug =
  | 'woongroep-zoekt-bewoner'
  | 'bewoner-zoekt-woongroep'
  | 'ecodorp-in-oprichting'
  | 'pand-aangeboden'
  | 'woongroep-zoekt-pand'

export interface ListingCategoryInfo {
  slug: ListingCategorySlug
  label: string
  description: string
}

export interface ListingFact {
  label: string
  value: string
}

export interface Listing {
  slug: string
  title: string
  community: string
  category: ListingCategorySlug
  province: string
  type: string
  spotsAvailable?: number
  image: string
  imageAlt: string
  summary: string
  description: string[]
  facts: ListingFact[]
  postedDate: string
  relatedArticleSlug?: string
}
