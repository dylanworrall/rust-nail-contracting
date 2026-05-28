import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rico Bodacious",
    text: "Professional, consistent, knowledgable and always gives a fair price. Rusty has many years of experience and thinks outside the box. He even 3D prints specialized parts to make the finished product look amazing! I would definitely use him again in the future!",
  },
  {
    name: "The Food Trap L.L.C.",
    text: "Rusty helped us get our home ready for sale when we made the move from Dallas to Savannah. We were worried about the years of wear and tear, but his guys took care of everything professionally and quick. I can\u2019t thank them enough for taking that weight off our shoulders.",
  },
  {
    name: "Kelsey Mills",
    text: "Rusty replaced our fence. It looks great! You can tell he takes pride in his work.",
  },
  {
    name: "Jorge Bazan",
    text: "Awesome contractor. Great communication!",
  },
  {
    name: "MrTsunami817",
    text: "Great work. Very professional! I will be using them again.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sand-dark">
            What Clients Say
          </p>
          <h2 className="mt-2 text-3xl font-bold text-charcoal sm:text-4xl">
            5-Star Reviews from DFW Homeowners
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <a key={i} href="https://share.google/5w46w4swMWjNshps3" target="_blank" rel="noopener noreferrer">
            <Card className="border-warm-border transition-shadow hover:shadow-lg cursor-pointer">
              <CardContent className="pt-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-sand text-sand"
                    />
                  ))}
                </div>
                <p className="italic text-muted-foreground">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-4 border-t border-warm-border pt-4">
                  <p className="font-semibold text-charcoal">{t.name}</p>
                  <p className="text-sm text-muted-foreground">Google Review</p>
                </div>
              </CardContent>
            </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
