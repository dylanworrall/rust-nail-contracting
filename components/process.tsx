import { Phone, ClipboardList, Hammer, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "1",
    title: "Free Consultation",
    description:
      "Call us or fill out our online form. We'll discuss your project goals, timeline, and budget, then schedule a convenient time to visit your property.",
  },
  {
    icon: ClipboardList,
    step: "2",
    title: "Detailed Estimate",
    description:
      "We assess your property in person, take measurements, and provide a transparent, written estimate with no hidden fees or surprises.",
  },
  {
    icon: Hammer,
    step: "3",
    title: "Expert Build",
    description:
      "Our experienced crew gets to work using premium materials and proven techniques. We keep you updated throughout and maintain a clean worksite.",
  },
  {
    icon: ThumbsUp,
    step: "4",
    title: "Final Walkthrough",
    description:
      "We walk through the completed project together. We're not done until you're thrilled with the results. Your satisfaction is guaranteed.",
  },
];

export default function Process() {
  return (
    <section className="bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sand">
            Our Process
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            How We Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            From first call to final walkthrough, we make the renovation
            process simple and stress-free for Carrollton and Dallas homeowners.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sand/20">
                <s.icon className="h-6 w-6 text-sand" />
              </div>
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-sand/60">
                Step {s.step}
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
