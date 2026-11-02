import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { ListingCard } from '@/components/listings/listing-card'
import { ListingCategories } from '@/components/listings/listing-categories'
import { PlaceListingForm } from '@/components/demo-forms'
import { getListingCategory, listings, provinces } from '@/lib/content'
import { cn } from '@/lib/utils'
import type { ListingCategorySlug } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Woonaanbod',
  description: 'Vrije plekken in woongroepen en ecodorpen, initiatieven in oprichting en aangeboden panden.',
}

export default async function AanbodPage({
  searchParams,
}: {
  searchParams: Promise<{ categorie?: string; provincie?: string }>
}) {
  const { categorie, provincie } = await searchParams
  const category = categorie ? getListingCategory(categorie as ListingCategorySlug) : undefined
  const province = provincie && provinces.includes(provincie) ? provincie : undefined

  const results = listings.filter(
    (listing) =>
      (!category || listing.category === category.slug) && (!province || listing.province === province),
  )

  const buildHref = (nextProvince?: string) => {
    const params = new URLSearchParams()
    if (category) params.set('categorie', category.slug)
    if (nextProvince) params.set('provincie', nextProvince)
    const query = params.toString()
    return query ? `/aanbod?${query}` : '/aanbod'
  }

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            {category ? (
              <BreadcrumbLink render={<Link href="/aanbod" />}>Woonaanbod</BreadcrumbLink>
            ) : (
              <BreadcrumbPage>Woonaanbod</BreadcrumbPage>
            )}
          </BreadcrumbItem>
          {category && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{category.label}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-2">
        <h1 className="text-balance text-3xl font-extrabold sm:text-4xl">{category?.label ?? 'Woonaanbod'}</h1>
        <p className="max-w-2xl leading-relaxed text-muted-foreground">
          {category?.description ??
            'Zoek een vrije plek in een woongroep of ecodorp, sluit je aan bij een initiatief of vind een locatie voor je groep.'}
        </p>
      </div>

      <ListingCategories active={category?.slug} />

      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold" aria-live="polite">
            {results.length} {results.length === 1 ? 'advertentie' : 'advertenties'}
          </p>
          <nav aria-label="Filter op provincie" className="flex flex-wrap gap-2">
            {[undefined, ...provinces].map((item) => (
              <Link
                key={item ?? 'alle'}
                href={buildHref(item)}
                aria-current={province === item ? 'page' : undefined}
                className={cn(
                  'rounded-full border bg-card px-3 py-1 text-xs font-semibold hover:border-primary',
                  province === item && 'border-primary bg-primary text-primary-foreground',
                )}
              >
                {item ?? 'Heel Nederland'}
              </Link>
            ))}
          </nav>
        </div>

        {results.length > 0 ? (
          <div className="grid gap-4 lg:grid-cols-2">
            {results.map((listing) => (
              <ListingCard key={listing.slug} listing={listing} />
            ))}
          </div>
        ) : (
          <p className="rounded-lg border border-dashed bg-card p-8 text-center text-muted-foreground">
            Geen advertenties gevonden met deze filters.{' '}
            <Link href="/aanbod" className="font-semibold text-primary underline">
              Toon alles
            </Link>
          </p>
        )}
      </div>

      <section id="plaatsen" aria-labelledby="plaatsen-title" className="scroll-mt-32 rounded-xl border bg-card p-5 sm:p-6">
        <h2 id="plaatsen-title" className="text-2xl font-extrabold">
          Zelf een advertentie plaatsen
        </h2>
        <p className="mb-5 mt-1 text-sm leading-relaxed text-muted-foreground">
          Zoekt jouw woongroep een bewoner, of ben je zelf op zoek? Plaats gratis een oproep.
        </p>
        <PlaceListingForm />
      </section>
    </main>
  )
}
