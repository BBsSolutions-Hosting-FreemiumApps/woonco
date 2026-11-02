import Image from 'next/image'
import Link from 'next/link'
import { getArticleCategoryLabel } from '@/lib/content'
import { formatRelativeDutchDate } from '@/lib/format'
import type { Article } from '@/lib/types'

export function CategoryLabel({ article }: { article: Article }) {
  return (
    <span className="text-xs font-bold uppercase tracking-wide text-primary">
      {getArticleCategoryLabel(article.category)}
    </span>
  )
}

export function HeroTeaser({ article }: { article: Article }) {
  return (
    <Link
      href={`/artikel/${article.slug}`}
      className="group relative flex aspect-[4/3] overflow-hidden rounded-lg sm:aspect-[16/9]"
    >
      <Image
        src={article.image}
        alt={article.imageAlt}
        fill
        priority
        sizes="(min-width: 1024px) 720px, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />
      <div className="relative mt-auto flex flex-col gap-2 p-5 sm:p-6">
        <span className="w-fit rounded-sm bg-accent px-2 py-0.5 text-xs font-bold uppercase text-accent-foreground">
          Uitgelicht
        </span>
        <h2 className="text-balance text-2xl font-extrabold leading-tight text-forest-foreground sm:text-3xl">
          {article.title}
        </h2>
        <p className="hidden text-pretty leading-relaxed text-forest-foreground/85 sm:block">{article.dek}</p>
      </div>
    </Link>
  )
}

export function ThumbTeaser({ article }: { article: Article }) {
  return (
    <Link href={`/artikel/${article.slug}`} className="group flex flex-col gap-2">
      <div className="relative aspect-[16/10] overflow-hidden rounded-md">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(min-width: 1024px) 300px, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CategoryLabel article={article} />
      <h3 className="text-pretty font-bold leading-snug group-hover:text-primary">{article.title}</h3>
    </Link>
  )
}

export function HeadlineRow({ article, showImage = true }: { article: Article; showImage?: boolean }) {
  return (
    <Link href={`/artikel/${article.slug}`} className="group flex items-start gap-3 py-3">
      {showImage && (
        <div className="relative size-16 shrink-0 overflow-hidden rounded-md">
          <Image src={article.image} alt="" fill sizes="64px" className="object-cover" />
        </div>
      )}
      <div className="flex min-w-0 flex-col gap-1">
        <h3 className="text-pretty text-sm font-semibold leading-snug group-hover:text-primary">
          {article.title}
        </h3>
        <span className="text-xs text-muted-foreground">
          {formatRelativeDutchDate(article.date)} · {article.readTime}
        </span>
      </div>
    </Link>
  )
}
