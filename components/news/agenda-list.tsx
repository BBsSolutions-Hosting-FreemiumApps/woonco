'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { CalendarDays, ChevronRight, MapPin, Plus, Users } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const events = [
  { day: '14', month: 'feb', date: '14 februari 2026', title: 'Open dag Ecodorp Zonnevallei', place: 'Zutphen', type: 'Open dag', color: 'bg-accent' },
  { day: '21', month: 'feb', date: '21 februari 2026', title: 'Informatieavond Initiatief De Boskant', place: 'Lochem', type: 'Informatieavond', color: 'bg-primary text-primary-foreground' },
  { day: '7', month: 'mrt', date: '7 maart 2026', title: 'Workshop bouwen met strobalen', place: 'Utrecht', type: 'Workshop', color: 'bg-secondary text-secondary-foreground' },
  { day: '15', month: 'mrt', date: '15 maart 2026', title: 'Landelijke woongroependag', place: 'Amersfoort', type: 'Ontmoeten', color: 'bg-accent' },
  { day: '28', month: 'mrt', date: '28 maart 2026', title: 'Plantdag voedselbos Wortelgrond', place: 'Westerbork', type: 'Meewerken', color: 'bg-primary text-primary-foreground' },
  { day: '11', month: 'apr', date: '11 april 2026', title: 'Rondleiding Tiny Forest Twente', place: 'Enschede', type: 'Rondleiding', color: 'bg-secondary text-secondary-foreground' },
]

const filters = ['Alles', 'Open dagen', 'Workshops', 'Ontmoeten']

export function AgendaList() {
  const [activeFilter, setActiveFilter] = useState('Alles')
  const visibleEvents = useMemo(() => {
    if (activeFilter === 'Alles') return events
    if (activeFilter === 'Open dagen') return events.filter((event) => event.type === 'Open dag' || event.type === 'Rondleiding')
    if (activeFilter === 'Workshops') return events.filter((event) => event.type === 'Workshop' || event.type === 'Meewerken')
    return events.filter((event) => event.type === 'Informatieavond' || event.type === 'Ontmoeten')
  }, [activeFilter])

  return (
    <section id="agenda" aria-labelledby="agenda-title" className="scroll-mt-32 rounded-xl bg-secondary p-5 sm:p-7">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2 text-primary">
              <CalendarDays className="size-5" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.15em]">Doe mee</span>
            </div>
            <h2 id="agenda-title" className="text-2xl font-extrabold sm:text-3xl">Actieagenda</h2>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Van open dagen en workshops tot samen bouwen, planten en beslissen. Ontmoet de mensen achter de plekken.
            </p>
          </div>
          <Button variant="outline" className="w-fit bg-card" render={<Link href="/aanbod#plaatsen" />} nativeButton={false}>
            <Plus data-icon="inline-start" />
            Activiteit aanmelden
          </Button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter agenda">
          {filters.map((filter) => (
            <Button
              key={filter}
              type="button"
              size="sm"
              variant={activeFilter === filter ? 'default' : 'outline'}
              className="shrink-0 bg-card"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </Button>
          ))}
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visibleEvents.map((event) => (
            <li key={event.title} className="group flex gap-4 rounded-lg border bg-card p-4 transition-shadow hover:shadow-md">
              <div className={`flex size-14 shrink-0 flex-col items-center justify-center rounded-md ${event.color}`}>
                <span className="font-heading text-xl font-extrabold leading-none">{event.day}</span>
                <span className="text-xs font-bold uppercase">{event.month}</span>
              </div>
              <div className="flex min-w-0 flex-col gap-1">
                <Badge variant="outline" className="w-fit text-[10px]">{event.type}</Badge>
                <h3 className="text-pretty text-sm font-bold leading-snug group-hover:text-primary">{event.title}</h3>
                <div className="mt-auto flex flex-wrap gap-x-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="size-3" aria-hidden="true" />{event.place}</span>
                  <span>{event.date}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4">
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <Users className="size-4" aria-hidden="true" />
            Zelf een activiteit voor je gemeenschap organiseren?
          </p>
          <Link href="/aanbod#plaatsen" className="flex items-center gap-1 text-sm font-bold text-primary hover:underline">
            Plaats in de agenda <ChevronRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
