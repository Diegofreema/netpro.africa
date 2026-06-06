import { Link } from '@tanstack/react-router'
import { ArrowRightIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { PageContent } from '@/shared/config/page-content'

type PageShellProps = PageContent

export function PageShell({
  title,
  summary,
  status,
  sections,
  ctaLabel,
  ctaPath,
}: PageShellProps) {
  return (
    <div className="flex flex-col gap-10">
      <section className="grid gap-6 py-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
        <div className="flex max-w-3xl flex-col gap-5">
          <Badge variant="outline">{status}</Badge>
          <div className="flex flex-col gap-4">
            <h1 className="font-heading text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="text-lg leading-8 text-muted-foreground">{summary}</p>
          </div>
        </div>
        <div className="flex lg:justify-end">
          <Button asChild size="lg">
            <Link to={ctaPath}>
              {ctaLabel}
              <ArrowRightIcon data-icon="inline-end" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {sections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">
                This module is ready for real content, data fetching, and interaction design.
              </p>
            </CardContent>
            <CardFooter>
              <p className="text-xs font-medium text-muted-foreground">
                Skeleton module
              </p>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  )
}
