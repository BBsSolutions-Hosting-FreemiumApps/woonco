import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { HeadlineRow } from '@/components/news/article-teasers'
import { getArticlesByCategory } from '@/lib/content'
import type { ArticleCategoryInfo } from '@/lib/types'

export function CategorySection({ category }: { category: ArticleCategoryInfo }) {
  const [lead, ...rest] = getArticlesByCategory(category.slug)
  if (!lead) return null

  return (
    <section id={category.slug} aria-labelledby={`${category.slug}-title`} className="flex scroll-mt-32 flex-col">
      <h2
        id={`${category.slug}-title`}
        className="border-b-2 border-primary pb-2 text-xl font-extrabold text-primary"
      >
        {category.label}
      </h2>
      <Link href={`/artikel/${lead.slug}`} className="group mt-4 flex flex-col gap-3 sm:flex-row">
        <div className="relative aspect-[16/10] shrink-0 overflow-hidden rounded-md sm:w-48">
          <Image src={lead.image} alt={lead.imageAlt} fill sizes="(min-width: 640px) 192px, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-pretty text-lg font-bold leading-snug group-hover:text-primary">{lead.title}</h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{lead.dek}</p>
        </div>
      </Link>
      <div className="mt-2 flex flex-col divide-y border-t">
        {rest.map((article) => (
          <HeadlineRow key={article.slug} article={article} showImage={false} />
        ))}
      </div>
      <Link
        href={`/#${category.slug}`}
        className="mt-2 flex w-fit items-center gap-1 text-sm font-bold text-primary hover:underline"
      >
        Meer {category.label.toLowerCase()}
        <ChevronRight className="size-4" aria-hidden="true" />
      </Link>
    </section>
  )
}
