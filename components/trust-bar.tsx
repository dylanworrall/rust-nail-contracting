import { Star, ShieldCheck, Clock, Award } from "lucide-react";

const badges = [
  {
    icon: Star,
    label: "5-Star Rated",
    detail: "on Google Reviews",
  },
  {
    icon: ShieldCheck,
    label: "Licensed & Insured",
    detail: "Full liability coverage",
  },
  {
    icon: Clock,
    label: "Fast Response",
    detail: "Same-day estimates available",
  },
  {
    icon: Award,
    label: "Locally Owned",
    detail: "Based in Carrollton, TX",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-warm-border bg-white py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand/10">
                <b.icon className="h-5 w-5 text-sand-dark" />
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal">{b.label}</p>
                <p className="text-xs text-muted-foreground">{b.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
