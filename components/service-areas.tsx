import Link from "next/link";
import { MapPin, ChevronRight } from "lucide-react";
import { cities } from "@/lib/data";

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sand-dark">
            Where We Work
          </p>
          <h2 className="mt-2 text-3xl font-bold text-charcoal sm:text-4xl">
            Serving Carrollton, Dallas & the DFW Metroplex
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Based in Carrollton, TX, we provide fencing, decks, painting,
            renovations, and landscaping throughout the Greater Dallas area.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/areas/${city.slug}`}
              className="group flex items-center gap-3 rounded-xl border border-warm-border bg-cream px-5 py-4 transition-all hover:border-sand hover:shadow-md"
            >
              <MapPin className="h-5 w-5 shrink-0 text-sand-dark" />
              <div>
                <p className="font-semibold text-charcoal group-hover:text-sand-dark transition-colors">
                  {city.name}, {city.state}
                </p>
                <p className="text-xs text-muted-foreground">
                  {city.neighborhoods.slice(0, 3).join(", ")}
                  {city.neighborhoods.length > 3 && " & more"}
                </p>
              </div>
              <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-sand-dark" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
