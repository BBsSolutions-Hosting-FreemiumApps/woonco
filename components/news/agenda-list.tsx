const events = [
  { day: '14', month: 'feb', title: 'Open dag Ecodorp Zonnevallei', place: 'Zutphen' },
  { day: '21', month: 'feb', title: 'Informatieavond Initiatief De Boskant', place: 'Lochem' },
  { day: '7', month: 'mrt', title: 'Workshop bouwen met strobalen', place: 'Utrecht' },
  { day: '15', month: 'mrt', title: 'Landelijke woongroependag', place: 'Amersfoort' },
]

export function AgendaList() {
  return (
    <section id="agenda" aria-labelledby="agenda-title" className="flex scroll-mt-32 flex-col gap-4">
      <h2 id="agenda-title" className="border-b-2 border-primary pb-2 text-xl font-extrabold text-primary">
        Agenda
      </h2>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {events.map((event) => (
          <li key={event.title} className="flex items-center gap-4 rounded-lg border bg-card p-4">
            <div className="flex size-14 shrink-0 flex-col items-center justify-center rounded-md bg-accent text-accent-foreground">
              <span className="font-heading text-xl font-extrabold leading-none">{event.day}</span>
              <span className="text-xs font-bold uppercase">{event.month}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-pretty text-sm font-bold leading-snug">{event.title}</span>
              <span className="text-xs text-muted-foreground">{event.place}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
