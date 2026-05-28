import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-white to-cream">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B4513' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          {/* Text */}
          <div className="flex-1">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sand-dark">
              Carrollton &amp; Greater Dallas, TX
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              Fencing, Decks &amp; Renovation{" "}
              <span className="text-sand-dark">Contractor in Carrollton &amp; Dallas, TX</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Rust Nail Contracting delivers expert fencing, decks, painting,
              renovations, and landscaping to homeowners across Carrollton and the
              Greater Dallas area. Built on integrity, finished with pride.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <a href="tel:4693465900">
                  <Phone className="mr-2 h-4 w-4" />
                  (469) 346-5900
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* VSL Video */}
          <div className="w-full shrink-0 lg:max-w-[300px]">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-warm-border bg-gradient-to-b from-white to-sand/5 shadow-xl lg:aspect-[9/16]">
              {/* Replace this placeholder with a <video> tag once you have the file:
                  <video src="/videos/vsl.mp4" autoPlay muted loop playsInline className="h-full w-full object-cover" /> */}
              <div className="flex h-full flex-col items-center justify-center gap-4 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-charcoal/80 shadow-lg">
                  <Play className="h-7 w-7 fill-white text-white" />
                </div>
                <p className="text-center text-sm font-medium text-muted-foreground">
                  Video coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
