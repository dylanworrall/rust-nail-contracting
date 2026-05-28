import { Card, CardContent } from "@/components/ui/card";
import { homepageFaqs } from "@/lib/data";

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepageFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FAQ() {
  return (
    <section id="faq" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sand-dark">
            Common Questions
          </p>
          <h2 className="mt-2 text-3xl font-bold text-charcoal sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Get answers to the most common questions about our contracting
            services in Carrollton, Dallas, and the DFW Metroplex.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {homepageFaqs.map((faq, i) => (
            <Card key={i} className="border-warm-border">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-charcoal">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
