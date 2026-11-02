import Link from 'next/link'
import { articleCategories, listingCategories } from '@/lib/content'

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-forest text-forest-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <p className="font-heading text-xl font-extrabold">
            samenhuis<span className="text-accent">.nl</span>
          </p>
          <p className="text-sm leading-relaxed text-forest-foreground/75">
            Nieuws, verhalen en woonaanbod voor iedereen die samen duurzaam wil wonen.
          </p>
        </div>
        <FooterColumn
          title="Nieuws"
          links={articleCategories.map((category) => ({
            href: `/#${category.slug}`,
            label: category.label,
          }))}
        />
        <FooterColumn
          title="Woonaanbod"
          links={listingCategories.map((category) => ({
            href: `/aanbod?categorie=${category.slug}`,
            label: category.label,
          }))}
        />
        <FooterColumn
          title="Over ons"
          links={[
            { href: '/aanbod#plaatsen', label: 'Advertentie plaatsen' },
            { href: '/#nieuwsbrief', label: 'Nieuwsbrief' },
            { href: '/#agenda', label: 'Agenda' },
          ]}
        />
      </div>
      <div className="border-t border-forest-foreground/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-forest-foreground/60">
          {'© 2026 Samenhuis.nl · Alle getoonde artikelen en advertenties zijn voorbeeldinhoud.'}
        </p>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-bold uppercase tracking-wide text-accent">{title}</h2>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-forest-foreground/80 hover:text-forest-foreground hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
