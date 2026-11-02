import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { MostRead } from '@/components/news/most-read'
import { ThumbTeaser } from '@/components/news/article-teasers'
import { ListingCard } from '@/components/listings/listing-card'
import { articles, getArticle, getArticleCategoryLabel, getListing } from '@/lib/content'
import { formatDutchDate } from '@/lib/format'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const article = getArticle((await params).slug)
  return article ? { title: article.title, description: article.dek } : {}
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const article = getArticle((await params).slug)
  if (!article) notFound()

  const categoryLabel = getArticleCategoryLabel(article.category)
  const listing = article.relatedListingSlug ? getListing(article.relatedListingSlug) : undefined
  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 3)

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href={`/#${article.category}`} />}>{categoryLabel}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="line-clamp-1">{article.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid gap-10 lg:grid-cols-3">
        <article className="flex flex-col gap-5 lg:col-span-2">
          <header className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wide text-primary">{categoryLabel}</span>
            <h1 className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl">{article.title}</h1>
            <p className="text-pretty text-lg font-medium leading-relaxed text-foreground/80">{article.dek}</p>
            <p className="text-sm text-muted-foreground">
              Door <span className="font-semibold text-foreground">{article.author}</span> ·{' '}
              {formatDutchDate(article.date)} · {article.readTime} leestijd
            </p>
          </header>
          <figure className="flex flex-col gap-2">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <Image src={article.image} alt={article.imageAlt} fill priority sizes="(min-width: 1024px) 720px, 100vw" className="object-cover" />
            </div>
            <figcaption className="text-xs text-muted-foreground">{article.imageAlt}</figcaption>
          </figure>
          <div className="flex max-w-prose flex-col gap-5 text-[17px] leading-relaxed">
            {article.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {listing && (
            <section aria-labelledby="advertentie" className="flex flex-col gap-3 border-t pt-6">
              <h2 id="advertentie" className="text-lg font-extrabold">
                Wil je hier ook wonen?
              </h2>
              <ListingCard listing={listing} />
            </section>
          )}
        </article>

        <aside className="flex flex-col gap-6">
          <MostRead />
        </aside>
      </div>

      <section aria-labelledby="lees-ook" className="flex flex-col gap-4 border-t pt-6">
        <h2 id="lees-ook" className="text-xl font-extrabold text-primary">
          Lees ook
        </h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {related.map((item) => (
            <ThumbTeaser key={item.slug} article={item} />
          ))}
        </div>
      </section>
    </main>
  )
}
