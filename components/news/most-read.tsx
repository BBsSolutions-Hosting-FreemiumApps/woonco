import Link from 'next/link'
import { getMostRead } from '@/lib/content'

export function MostRead() {
  const items = getMostRead()

  return (
    <section aria-labelledby="meest-gelezen" className="rounded-lg border bg-card p-5">
      <h2 id="meest-gelezen" className="mb-2 text-lg font-extrabold">
        Meest gelezen
      </h2>
      <ol className="flex flex-col">
        {items.map((article, index) => (
          <li key={article.slug} className="border-b last:border-b-0">
            <Link href={`/artikel/${article.slug}`} className="group flex items-start gap-3 py-3">
              <span className="font-heading text-2xl font-extrabold leading-none text-accent" aria-hidden="true">
                {index + 1}
              </span>
              <span className="text-pretty text-sm font-semibold leading-snug group-hover:text-primary">
                {article.title}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
