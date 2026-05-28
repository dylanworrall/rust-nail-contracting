import { Play } from "lucide-react";

const projects = [
  { id: 1, label: "Fence Build" },
  { id: 2, label: "Deck Install" },
  { id: 3, label: "Interior Reno" },
  { id: 4, label: "Exterior Paint" },
  { id: 5, label: "Landscaping" },
  { id: 6, label: "Full Remodel" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sand-dark">
            See Our Work
          </p>
          <h2 className="mt-2 text-3xl font-bold text-charcoal sm:text-4xl">
            Recent Projects in the DFW Area
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Browse some of our recent projects across the Greater Dallas area.
            Videos coming soon!
          </p>
        </div>

        <div className="mt-12 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 md:grid-cols-3 lg:grid-cols-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group relative flex aspect-[9/16] w-40 shrink-0 snap-center cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-warm-border bg-gradient-to-b from-white to-sand/5 shadow-sm transition-all hover:shadow-lg sm:w-auto"
            >
              {/* Play button */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-charcoal/80 text-white shadow-lg transition-transform group-hover:scale-110">
                  <Play className="h-6 w-6 fill-white" />
                </div>
              </div>

              {/* Bottom label */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 to-transparent px-3 pb-3 pt-8">
                <span className="text-sm font-semibold text-white">
                  {p.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
