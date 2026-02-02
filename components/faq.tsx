"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I know if I'm ready for management?",
    answer:
      "If you’re posting consistently and already making money, but feel capped or burned out",
  },
  {
    question: "Is there a contract?",
    answer:
      "We start with a 30-day trial agreement to keep payments and access clean. If you don’t want to continue after that, you can walk away without penalties",
  },
  {
    question: "How do you charge?",
    answer:
      "Upfront onboarding + revenue share. We only win when you do.",
  },
  {
    question: "How fast will I see results?",
    answer:
      "Some creators see improvements in the first weeks. Real scaling happens as systems compound.",
  },
  {
    question: "What makes you different from OF agencies?",
    answer:
      "We don’t chase hype. We install systems, track data, and don’t lock you into bad deals.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. If it’s not working, you keep your revenue and leave.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about working with us
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5 text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
