import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { getListingCategory } from '@/lib/content'
import { formatRelativeDutchDate } from '@/lib/format'
import type { Listing } from '@/lib/types'

export function ListingCard({ listing }: { listing: Listing }) {
  const category = getListingCategory(listing.category)

  return (
    <Link
      href={`/aanbod/${listing.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-md sm:flex-row"
    >
      <div className="relative aspect-[16/10] shrink-0 sm:aspect-auto sm:w-56">
        <Image
          src={listing.image}
          alt={listing.imageAlt}
          fill
          sizes="(min-width: 640px) 224px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{category?.label}</Badge>
          {listing.spotsAvailable ? (
            <Badge className="bg-accent text-accent-foreground">
              {listing.spotsAvailable} {listing.spotsAvailable === 1 ? 'plek' : 'plekken'}
            </Badge>
          ) : null}
        </div>
        <h3 className="text-pretty text-lg font-bold leading-snug group-hover:text-primary">{listing.title}</h3>
        <p className="text-sm font-semibold text-primary">{listing.community}</p>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{listing.summary}</p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="size-3.5" aria-hidden="true" />
            {listing.province} · {listing.type}
          </span>
          <span>{formatRelativeDutchDate(listing.postedDate)}</span>
        </div>
      </div>
    </Link>
  )
}
