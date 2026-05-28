import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sand-dark">
            What We Do
          </p>
          <h2 className="mt-2 text-3xl font-bold text-charcoal sm:text-4xl">
            Contracting Services in Carrollton &amp; Dallas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From fences and decks to full renovations, we bring skilled
            craftsmanship to every project in Carrollton, Dallas, and the
            Greater DFW area.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card className="group border-warm-border transition-shadow hover:shadow-lg h-full">
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-sand/10">
                    <service.icon className="h-6 w-6 text-sand-dark" />
                  </div>
                  <CardTitle className="text-charcoal">{service.shortTitle}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <div className="mt-3 flex items-center gap-1 text-sm font-medium text-sand-dark opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
