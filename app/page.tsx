import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { HeadlineRow, HeroTeaser, ThumbTeaser } from '@/components/news/article-teasers'
import { MostRead } from '@/components/news/most-read'
import { CategorySection } from '@/components/news/category-section'
import { AgendaList } from '@/components/news/agenda-list'
import { ListingCard } from '@/components/listings/listing-card'
import { ListingCategories } from '@/components/listings/listing-categories'
import { NewsletterForm } from '@/components/demo-forms'
import { articleCategories, articles, listings } from '@/lib/content'

export default function HomePage() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date))
  const hero = sorted.find((article) => article.featured) ?? sorted[0]
  const latest = sorted.filter((article) => article.slug !== hero.slug)

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-6">
      <h1 className="sr-only">Samenhuis.nl – nieuws over ecodorpen en woongroepen</h1>

      <section aria-label="Net binnen" className="grid gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <HeroTeaser article={hero} />
          <div className="grid gap-x-6 sm:grid-cols-2">
            {latest.slice(0, 4).map((article) => (
              <div key={article.slug} className="border-b">
                <HeadlineRow article={article} />
              </div>
            ))}
          </div>
        </div>
        <aside className="flex flex-col gap-6">
          <MostRead />
          <section aria-labelledby="nieuwsbrief" className="rounded-lg bg-forest p-5 text-forest-foreground">
            <h2 id="nieuwsbrief" className="text-lg font-extrabold">
              Elke vrijdag in je inbox
            </h2>
            <p className="mb-4 mt-1 text-sm leading-relaxed text-forest-foreground/80">
              Nieuwe vrije plekken, initiatieven en verhalen uit ecodorpen.
            </p>
            <NewsletterForm />
          </section>
        </aside>
      </section>

      <section aria-labelledby="woonaanbod" className="flex flex-col gap-5 rounded-xl bg-secondary p-5 sm:p-6">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 id="woonaanbod" className="text-2xl font-extrabold">
              Vind je plek in een woongroep of ecodorp
            </h2>
            <p className="text-sm text-muted-foreground">
              {listings.length} actuele advertenties van woongroepen, initiatieven en bewoners.
            </p>
          </div>
          <Link href="/aanbod" className="flex items-center gap-1 text-sm font-bold text-primary hover:underline">
            Alle advertenties
            <ChevronRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <ListingCategories />
        <div className="grid gap-4 lg:grid-cols-2">
          {listings.slice(0, 4).map((listing) => (
            <ListingCard key={listing.slug} listing={listing} />
          ))}
        </div>
      </section>

      <div className="grid gap-12 lg:grid-cols-2">
        {articleCategories.map((category) => (
          <CategorySection key={category.slug} category={category} />
        ))}
      </div>

      <section aria-labelledby="meer-verhalen" className="flex flex-col gap-4">
        <h2 id="meer-verhalen" className="border-b-2 border-primary pb-2 text-xl font-extrabold text-primary">
          Meer verhalen
        </h2>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {sorted.slice(-4).map((article) => (
            <ThumbTeaser key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <AgendaList />
    </main>
  )
}
