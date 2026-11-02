'use client'

import type { FormEvent } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

function handleDemoSubmit(event: FormEvent<HTMLFormElement>, message: string) {
  event.preventDefault()
  event.currentTarget.reset()
  toast(message, { description: 'Dit is een voorbeeldformulier; er is niets verzonden.' })
}

export function NewsletterForm() {
  return (
    <form onSubmit={(event) => handleDemoSubmit(event, 'Bedankt voor je aanmelding')}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="newsletter-email" className="text-forest-foreground">
            E-mailadres
          </FieldLabel>
          <Input
            id="newsletter-email"
            type="email"
            required
            placeholder="jij@voorbeeld.nl"
            className="bg-card text-card-foreground"
          />
        </Field>
        <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">
          Aanmelden
        </Button>
      </FieldGroup>
    </form>
  )
}

export function ContactForm({ community }: { community: string }) {
  return (
    <form onSubmit={(event) => handleDemoSubmit(event, `Je bericht aan ${community} is klaargezet`)}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="contact-name">Naam</FieldLabel>
          <Input id="contact-name" required autoComplete="name" />
        </Field>
        <Field>
          <FieldLabel htmlFor="contact-email">E-mailadres</FieldLabel>
          <Input id="contact-email" type="email" required autoComplete="email" />
        </Field>
        <Field>
          <FieldLabel htmlFor="contact-message">Bericht</FieldLabel>
          <Textarea id="contact-message" required rows={4} placeholder="Vertel kort wie je bent en waarom je interesse hebt." />
        </Field>
        <Button type="submit">Stuur bericht</Button>
      </FieldGroup>
    </form>
  )
}

export function PlaceListingForm() {
  return (
    <form onSubmit={(event) => handleDemoSubmit(event, 'Je advertentie is ontvangen')}>
      <FieldGroup className="grid gap-4 sm:grid-cols-2">
        <Field>
          <FieldLabel htmlFor="listing-title">Titel van je advertentie</FieldLabel>
          <Input id="listing-title" required placeholder="Bijv. Woongroep zoekt bewoner" />
        </Field>
        <Field>
          <FieldLabel htmlFor="listing-place">Plaats</FieldLabel>
          <Input id="listing-place" required placeholder="Bijv. Utrecht" />
        </Field>
        <Field className="sm:col-span-2">
          <FieldLabel htmlFor="listing-text">Omschrijving</FieldLabel>
          <Textarea id="listing-text" required rows={4} />
          <FieldDescription>Vertel wie jullie zijn, wat je zoekt en hoe jullie samenleven.</FieldDescription>
        </Field>
        <Button type="submit" className="w-fit">
          Advertentie plaatsen
        </Button>
      </FieldGroup>
    </form>
  )
}
