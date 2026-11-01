const DUTCH_DATE_FORMATTER = new Intl.DateTimeFormat('nl-NL', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export function formatDutchDate(isoDate: string): string {
  return DUTCH_DATE_FORMATTER.format(new Date(`${isoDate}T00:00:00`))
}

/**
 * Formats a date as a relative "x dagen geleden" string within a week,
 * falling back to an absolute Dutch date further back. Mirrors the kind of
 * timestamps used on Dutch news and classifieds sites.
 */
export function formatRelativeDutchDate(isoDate: string, now: Date = new Date()): string {
  const date = new Date(`${isoDate}T00:00:00`)
  const diffMs = now.setHours(0, 0, 0, 0) - date.setHours(0, 0, 0, 0)
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays <= 0) return 'Vandaag'
  if (diffDays === 1) return 'Gisteren'
  if (diffDays <= 7) return `${diffDays} dagen geleden`
  return formatDutchDate(isoDate)
}
