import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { listingCategories, listings } from '@/lib/content'
import { cn } from '@/lib/utils'
import type { ListingCategorySlug } from '@/lib/types'

export function ListingCategories({ active }: { active?: ListingCategorySlug }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {listingCategories.map((category) => {
        const count = listings.filter((listing) => listing.category === category.slug).length
        const isActive = active === category.slug

        return (
          <li key={category.slug}>
            <Link
              href={isActive ? '/aanbod' : `/aanbod?categorie=${category.slug}`}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'group flex h-full flex-col gap-1 rounded-lg border bg-card p-4 transition-colors hover:border-primary',
                isActive && 'border-primary bg-secondary',
              )}
            >
              <span className="flex items-center justify-between gap-2">
                <span className="font-heading font-bold leading-tight text-primary">{category.label}</span>
                <ChevronRight className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
              <span className="text-xs font-semibold text-muted-foreground">
                {count} {count === 1 ? 'advertentie' : 'advertenties'}
              </span>
              <span className="text-sm leading-relaxed text-muted-foreground">{category.description}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
