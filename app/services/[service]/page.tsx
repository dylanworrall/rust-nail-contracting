import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MobileCTA from "@/components/mobile-cta";
import { services, cities, SITE_URL, COMPANY_NAME, PHONE, PHONE_HREF } from "@/lib/data";

interface Props {
  params: Promise<{ service: string }>;
}

function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${SITE_URL}/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: "website",
      locale: "en_US",
      siteName: COMPANY_NAME,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = service.icon;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${SITE_URL}/services/${service.slug}` },
    ],
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.heroSubheading,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: COMPANY_NAME,
      telephone: "+1-469-346-5900",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Carrollton",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
    areaServed: cities.map((c) => ({
      "@type": "City",
      name: c.name,
      containedInPlace: { "@type": "State", name: "Texas" },
    })),
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <Header />
      <main>
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="bg-cream border-b border-warm-border">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-sand-dark">Home</Link></li>
              <li><ChevronRight className="h-3 w-3" /></li>
              <li><span className="hover:text-sand-dark">Services</span></li>
              <li><ChevronRight className="h-3 w-3" /></li>
              <li className="font-medium text-charcoal">{service.shortTitle}</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-br from-cream via-white to-cream py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-sand/10">
                <Icon className="h-7 w-7 text-sand-dark" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-charcoal sm:text-5xl">
                {service.heroHeading}{" "}
                <span className="text-sand-dark">in Carrollton & Dallas, TX</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {service.heroSubheading}
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
                {service.content.map((paragraph, i) => (
                  <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Sidebar — What's Included */}
              <div>
                <Card className="border-warm-border sticky top-20">
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-bold text-charcoal mb-4">What&apos;s Included</h2>
                    <ul className="space-y-3">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-sand-dark" />
                          {item}
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

        {/* FAQ */}
        <section className="bg-cream py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-charcoal sm:text-3xl mb-8">
              Frequently Asked Questions About {service.shortTitle}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {service.faqs.map((faq, i) => (
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

        {/* Service Areas */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-charcoal sm:text-3xl mb-4">
              {service.shortTitle} Service Areas
            </h2>
            <p className="text-muted-foreground mb-8">
              We provide {service.shortTitle.toLowerCase()} services throughout the DFW Metroplex including:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/areas/${city.slug}`}
                  className="flex items-center gap-2 rounded-lg border border-warm-border bg-cream px-4 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-sand/10 hover:text-sand-dark"
                >
                  {city.name}, {city.state}
                  <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="bg-cream py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-charcoal sm:text-3xl mb-8">
              Other Services We Offer
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((s) => {
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

        {/* CTA */}
        <section className="bg-charcoal py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-white/70">
              Contact us today for a free, no-obligation estimate on your {service.shortTitle.toLowerCase()} project in Carrollton, Dallas, or anywhere in the DFW area.
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
