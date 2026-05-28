import { ShieldCheck, Gem, BadgeDollarSign, ThumbsUp } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description:
      "Fully licensed and insured for your peace of mind on every project.",
  },
  {
    icon: Gem,
    title: "Quality Materials",
    description:
      "We use only premium materials so your investment stands the test of time.",
  },
  {
    icon: BadgeDollarSign,
    title: "Free Estimates",
    description:
      "Transparent, no-obligation estimates so you know exactly what to expect.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description:
      "We're not done until you're thrilled with the results. That's our promise.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sand-dark">
              Why Choose Us
            </p>
            <h2 className="mt-2 text-3xl font-bold text-charcoal sm:text-4xl">
              Why Choose Rusty Nail Contracting{" "}
              <span className="text-sand-dark">in Carrollton &amp; Dallas</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              At Rust Nail Contracting, we believe every home deserves expert
              craftsmanship. Based in Carrollton and serving the Greater Dallas
              area, our team brings years of hands-on experience to every
              project — from a simple fence repair to a complete interior
              renovation.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We treat every home like it's our own, with honest communication,
              fair pricing, and work we stand behind. When you hire Rust Nail,
              you're getting a contractor who shows up, does the job right, and
              earns your trust.
            </p>
          </div>

          {/* Value props */}
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-warm-border bg-cream p-5"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-sand/10">
                  <v.icon className="h-5 w-5 text-sand-dark" />
                </div>
                <h3 className="font-semibold text-charcoal">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
