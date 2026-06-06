import { MinusIcon, PlusIcon, SearchIcon } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { LandingFaq } from '@/features/home/data/landing-page-content'

type FaqListProps = {
  faqs: LandingFaq[]
}

export function FaqList({ faqs }: FaqListProps) {
  return (
    <div className="np-container flex flex-col items-center gap-16">
      <label className="relative w-full max-w-sm" data-reveal="title">
        <span className="sr-only">Search questions</span>
        <SearchIcon
          className="absolute left-5 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          className="h-14 w-full rounded-full border border-white/10 bg-white/[0.08] px-14 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/60"
          placeholder="Search"
          type="search"
        />
      </label>

      <Accordion
        type="single"
        collapsible
        className="grid w-full gap-4 md:grid-cols-2 md:gap-x-10 md:gap-y-5"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            value={`faq-${index}`}
            className="np-faq-item rounded-2xl border border-white/10 bg-white/[0.025] px-3 transition-[background-color,border-color,box-shadow] duration-300 ease-out data-[state=open]:border-white/18 data-[state=open]:bg-white/[0.055]"
            data-reveal="card"
          >
            <AccordionTrigger className="group px-3 py-6 hover:bg-white/[0.025] sm:px-5">
              <span className="max-w-xl text-pretty text-lg font-semibold leading-7 tracking-[-0.01em] text-foreground sm:text-xl">
                {faq.question}
              </span>
              <span
                className="relative inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-[background-color,transform,box-shadow] duration-300 ease-out group-hover:bg-[color:var(--np-blue-strong)] group-data-[state=open]:rotate-45 group-data-[state=open]:shadow-[0_0_0_6px_oklch(0.63_0.18_250/0.12)] group-active:scale-[0.96]"
                aria-hidden="true"
              >
                <PlusIcon className="absolute size-5 transition-[opacity,transform,filter] duration-300 ease-out group-data-[state=open]:scale-75 group-data-[state=open]:opacity-0 group-data-[state=open]:blur-[2px]" />
                <MinusIcon className="absolute size-5 scale-75 opacity-0 blur-[2px] transition-[opacity,transform,filter] duration-300 ease-out group-data-[state=open]:scale-100 group-data-[state=open]:opacity-100 group-data-[state=open]:blur-0" />
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-3 sm:px-5">
              <p className="max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {faq.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
