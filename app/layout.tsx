import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contractor in Carrollton & Dallas, TX | Rusty Nail Contracting",
  description:
    "Fencing, decks, painting & renovations in Carrollton & Dallas, TX. Licensed & insured. 5-star reviews. Free estimates — call (469) 346-5900.",
  keywords: [
    "contractor Carrollton TX",
    "general contractor Carrollton Texas",
    "fence contractor Carrollton TX",
    "fence installation Carrollton",
    "deck builder Carrollton TX",
    "painting contractor Carrollton TX",
    "interior renovation Carrollton TX",
    "kitchen remodel Carrollton TX",
    "bathroom remodel Carrollton TX",
    "landscaping Carrollton TX",
    "contractor Dallas TX",
    "fence contractor Dallas",
    "deck builder Dallas TX",
    "painting contractor Dallas TX",
    "home remodeling Dallas TX",
    "exterior renovation Dallas TX",
    "fence installation Dallas TX",
    "contractor near me Carrollton",
    "home improvement Carrollton TX",
    "Rusty Nail Contracting",
  ],
  authors: [{ name: "Rusty Nail Contracting" }],
  creator: "Rusty Nail Contracting",
  openGraph: {
    title: "Contractor in Carrollton & Dallas, TX | Rusty Nail Contracting",
    description:
      "Fencing, decks, painting & renovations in Carrollton & Dallas, TX. Licensed & insured. 5-star reviews. Free estimates — call (469) 346-5900.",
    type: "website",
    locale: "en_US",
    siteName: "Rusty Nail Contracting",
    url: "https://rustynailcontracting.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contractor in Carrollton & Dallas, TX | Rusty Nail Contracting",
    description:
      "Fencing, decks, painting & renovations in Carrollton & Dallas. Licensed & insured. Free estimates — (469) 346-5900.",
  },
  alternates: {
    canonical: "https://rustynailcontracting.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Carrollton",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://rustynailcontracting.com/#business",
  name: "Rusty Nail Contracting",
  image: "https://rustynailcontracting.com/logo.png",
  logo: "https://rustynailcontracting.com/logo.png",
  telephone: "+1-469-346-5900",
  email: "rustynailcontractors@gmail.com",
  url: "https://rustynailcontracting.com",
  sameAs: [
    "https://www.instagram.com/rusty_nail_contracting",
    "https://share.google/5w46w4swMWjNshps3",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Carrollton",
    addressRegion: "TX",
    postalCode: "75006",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.9537,
    longitude: -96.8903,
  },
  areaServed: [
    { "@type": "City", name: "Carrollton", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Dallas", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Plano", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Frisco", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Lewisville", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Addison", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Farmers Branch", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "The Colony", containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  description:
    "Rusty Nail Contracting provides expert fencing, decks, painting, interior and exterior renovations, and landscaping to homeowners in Carrollton and Greater Dallas, TX. Licensed and insured with 5-star Google reviews.",
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "18:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "5",
    bestRating: "5",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Rico Bodacious" },
      reviewBody:
        "Professional, consistent, knowledgable and always gives a fair price. Rusty has many years of experience and thinks outside the box.",
      datePublished: "2024-01-01",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "The Food Trap L.L.C." },
      reviewBody:
        "Rusty helped us get our home ready for sale when we made the move from Dallas to Savannah. His guys took care of everything professionally and quick.",
      datePublished: "2024-01-01",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Kelsey Mills" },
      reviewBody:
        "Rusty replaced our fence. It looks great! You can tell he takes pride in his work.",
      datePublished: "2024-01-01",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Jorge Bazan" },
      reviewBody: "Awesome contractor. Great communication!",
      datePublished: "2024-01-01",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "MrTsunami817" },
      reviewBody: "Great work. Very professional! I will be using them again.",
      datePublished: "2024-01-01",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Contracting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fence Installation & Repair",
          description: "Custom wood, vinyl, chain-link, and metal fence installation and repair in Carrollton & Dallas, TX.",
          url: "https://rustynailcontracting.com/services/fencing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deck Building & Patio Construction",
          description: "Custom deck building, patio construction, and pergolas for DFW homeowners.",
          url: "https://rustynailcontracting.com/services/decks",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interior & Exterior Painting",
          description: "Professional painting services with premium materials for homes in Carrollton & Dallas.",
          url: "https://rustynailcontracting.com/services/painting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interior Renovation & Remodeling",
          description: "Kitchen remodels, bathroom renovations, flooring, and full interior makeovers.",
          url: "https://rustynailcontracting.com/services/interior-renovation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landscaping & Hardscaping",
          description: "Professional landscaping, stone patios, retaining walls, and drainage solutions.",
          url: "https://rustynailcontracting.com/services/landscaping",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Exterior Renovation & Repair",
          description: "Siding, trim, fascia, gutters, and structural repair services in the DFW area.",
          url: "https://rustynailcontracting.com/services/exterior-renovation",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Rusty Nail Contracting",
              url: "https://rustynailcontracting.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://rustynailcontracting.com/?s={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
