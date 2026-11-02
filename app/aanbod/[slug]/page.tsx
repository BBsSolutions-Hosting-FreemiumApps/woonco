import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MapPin } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Badge } from '@/components/ui/badge'
import { ContactForm } from '@/components/demo-forms'
import { ThumbTeaser } from '@/components/news/article-teasers'
import { getArticle, getListing, getListingCategory, listings } from '@/lib/content'
import { formatDutchDate } from '@/lib/format'

export function generateStaticParams() {
  return listings.map((listing) => ({ slug: listing.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const listing = getListing((await params).slug)
  return listing ? { title: listing.title, description: listing.summary } : {}
}

export default async function ListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const listing = getListing((await params).slug)
  if (!listing) notFound()

  const category = getListingCategory(listing.category)
  const article = listing.relatedArticleSlug ? getArticle(listing.relatedArticleSlug) : undefined

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/aanbod" />}>Woonaanbod</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href={`/aanbod?categorie=${listing.category}`} />}>
              {category?.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="line-clamp-1">{listing.community}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid gap-8 lg:grid-cols-3">
        <article className="flex flex-col gap-5 lg:col-span-2">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <Image src={listing.image} alt={listing.imageAlt} fill priority sizes="(min-width: 1024px) 720px, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{category?.label}</Badge>
            {listing.spotsAvailable ? (
              <Badge className="bg-accent text-accent-foreground">
                {listing.spotsAvailable} {listing.spotsAvailable === 1 ? 'plek' : 'plekken'} beschikbaar
              </Badge>
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-primary">{listing.community}</p>
            <h1 className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl">{listing.title}</h1>
            <p className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="size-4" aria-hidden="true" />
              {listing.province} · Geplaatst op {formatDutchDate(listing.postedDate)}
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-4">
            {listing.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-0.5 bg-card p-3">
                <dt className="text-xs text-muted-foreground">{fact.label}</dt>
                <dd className="text-sm font-bold">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-col gap-4 leading-relaxed">
            {listing.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {article && (
            <section aria-labelledby="in-het-nieuws" className="flex flex-col gap-3 border-t pt-5">
              <h2 id="in-het-nieuws" className="text-lg font-extrabold">
                In het nieuws
              </h2>
              <div className="max-w-xs">
                <ThumbTeaser article={article} />
              </div>
            </section>
          )}
        </article>

        <aside className="lg:sticky lg:top-32 lg:self-start">
          <section aria-labelledby="contact-title" className="rounded-lg border bg-card p-5">
            <h2 id="contact-title" className="text-lg font-extrabold">
              Reageer op deze advertentie
            </h2>
            <p className="mb-4 mt-1 text-sm text-muted-foreground">Je bericht gaat rechtstreeks naar {listing.community}.</p>
            <ContactForm community={listing.community} />
          </section>
        </aside>
      </div>
    </main>
  )
}
