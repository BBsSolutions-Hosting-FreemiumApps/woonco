import Link from 'next/link'
import { CalendarDays, Map, MenuIcon, Newspaper, Plus, Search, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { articleCategories } from '@/lib/content'

const mainNav = [
  { href: '/', label: 'Net binnen' },
  ...articleCategories.map((category) => ({
    href: `/#${category.slug}`,
    label: category.label,
  })),
  { href: '/aanbod', label: 'Woonaanbod' },
]

const quickLinks = [
  { href: '/aanbod?categorie=woongroep-zoekt-bewoner', label: 'Vrije plekken', icon: Users },
  { href: '/aanbod?categorie=ecodorp-in-oprichting', label: 'Initiatieven', icon: Map },
  { href: '/#agenda', label: 'Agenda', icon: CalendarDays },
  { href: '/#nieuwsbrief', label: 'Nieuwsbrief', icon: Newspaper },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-forest text-forest-foreground">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-forest-foreground hover:bg-forest-foreground/10 hover:text-forest-foreground lg:hidden"
                  />
                }
              >
                <MenuIcon />
                <span className="sr-only">Menu openen</span>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav aria-label="Mobiel menu" className="flex flex-col px-4">
                  {mainNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="border-b py-3 font-medium hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center gap-2" aria-label="Samenhuis.nl home">
              <span className="flex size-8 items-center justify-center rounded-md bg-accent font-heading text-lg font-extrabold text-accent-foreground">
                S
              </span>
              <span className="font-heading text-xl font-extrabold tracking-tight">
                samenhuis<span className="text-accent">.nl</span>
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-forest-foreground hover:bg-forest-foreground/10 hover:text-forest-foreground"
              render={<Link href="/aanbod" />}
              nativeButton={false}
            >
              <Search />
              <span className="sr-only">Zoeken in aanbod</span>
            </Button>
            <Button
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              render={<Link href="/aanbod#plaatsen" />}
              nativeButton={false}
            >
              <Plus data-icon="inline-start" />
              <span className="hidden sm:inline">Plaats advertentie</span>
              <span className="sm:hidden">Plaatsen</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="border-b bg-card">
        <nav aria-label="Hoofdmenu" className="mx-auto hidden h-11 max-w-6xl items-center gap-6 px-4 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-2 lg:hidden">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex shrink-0 items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground"
            >
              <item.icon className="size-3.5" aria-hidden="true" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export { quickLinks }
