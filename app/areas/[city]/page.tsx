import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MobileCTA from "@/components/mobile-cta";
import { services, cities, SITE_URL, COMPANY_NAME, PHONE, PHONE_HREF } from "@/lib/data";

interface Props {
  params: Promise<{ city: string }>;
}

function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `${SITE_URL}/areas/${city.slug}` },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      type: "website",
      locale: "en_US",
      siteName: COMPANY_NAME,
    },
    other: {
      "geo.region": "US-TX",
      "geo.placename": city.name,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_URL}/areas` },
      { "@type": "ListItem", position: 3, name: `${city.name}, ${city.state}`, item: `${SITE_URL}/areas/${city.slug}` },
    ],
  };

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: COMPANY_NAME,
    telephone: "+1-469-346-5900",
    email: "rustynailcontractors@gmail.com",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Carrollton",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "State", name: "Texas" },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Contracting Services in ${city.name}`,
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title },
      })),
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const otherCities = cities.filter((c) => c.slug !== city.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <Header />
      <main>
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="bg-cream border-b border-warm-border">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-sand-dark">Home</Link></li>
              <li><ChevronRight className="h-3 w-3" /></li>
              <li><span className="hover:text-sand-dark">Service Areas</span></li>
              <li><ChevronRight className="h-3 w-3" /></li>
              <li className="font-medium text-charcoal">{city.name}, {city.state}</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-br from-cream via-white to-cream py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-sand-dark">
                <MapPin className="h-4 w-4" />
                {city.name}, {city.state}
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-charcoal sm:text-5xl">
                {city.heroHeading}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {city.heroSubheading}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <a href={PHONE_HREF}>
                    Call {PHONE}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/#contact">Get Free Estimate</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-6">
                {city.content.map((paragraph, i) => (
                  <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Sidebar — Neighborhoods */}
              <div>
                <Card className="border-warm-border sticky top-20">
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-bold text-charcoal mb-4">
                      {city.name} Neighborhoods We Serve
                    </h2>
                    <ul className="space-y-2">
                      {city.neighborhoods.map((n, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3 shrink-0 text-sand-dark" />
                          {n}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 border-t border-warm-border pt-6">
                      <Button className="w-full" asChild>
                        <Link href="/#contact">Get Free Estimate</Link>
                      </Button>
                      <p className="mt-3 text-center text-sm text-muted-foreground">
                        or call <a href={PHONE_HREF} className="font-medium text-sand-dark hover:underline">{PHONE}</a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services Available */}
        <section className="bg-cream py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-charcoal sm:text-3xl mb-4">
              Services Available in {city.name}, {city.state}
            </h2>
            <p className="text-muted-foreground mb-8">
              We provide the full range of Rusty Nail Contracting services to homeowners in {city.name}:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => {
                const SIcon = s.icon;
                return (
                  <Link key={s.slug} href={`/services/${s.slug}`}>
                    <Card className="border-warm-border transition-shadow hover:shadow-lg h-full">
                      <CardContent className="pt-6">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-sand/10">
                          <SIcon className="h-5 w-5 text-sand-dark" />
                        </div>
                        <h3 className="font-semibold text-charcoal">{s.shortTitle}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-charcoal sm:text-3xl mb-8">
              Frequently Asked Questions — {city.name}, {city.state}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {city.faqs.map((faq, i) => (
                <Card key={i} className="border-warm-border">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-charcoal mb-2">{faq.question}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Other Service Areas */}
        <section className="bg-cream py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-charcoal sm:text-3xl mb-8">
              Other Areas We Serve
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {otherCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/areas/${c.slug}`}
                  className="flex items-center gap-2 rounded-lg border border-warm-border bg-white px-4 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-sand/10 hover:text-sand-dark"
                >
                  <MapPin className="h-4 w-4 text-sand-dark" />
                  {c.name}, {c.state}
                  <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Need a Contractor in {city.name}?
            </h2>
            <p className="mt-4 text-white/70">
              Contact Rusty Nail Contracting today for a free estimate on your next home improvement project in {city.name}, {city.state}.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <a href={PHONE_HREF}>Call {PHONE}</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link href="/#contact">Request Estimate Online</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
