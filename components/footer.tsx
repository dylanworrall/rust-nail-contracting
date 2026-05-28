import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  { label: "Fencing", href: "/services/fencing" },
  { label: "Decks", href: "/services/decks" },
  { label: "Painting", href: "/services/painting" },
  { label: "Interior Renovation", href: "/services/interior-renovation" },
  { label: "Landscaping", href: "/services/landscaping" },
  { label: "Exterior Renovation", href: "/services/exterior-renovation" },
];

const areaLinks = [
  { label: "Carrollton, TX", href: "/areas/carrollton-tx" },
  { label: "Dallas, TX", href: "/areas/dallas-tx" },
  { label: "Plano, TX", href: "/areas/plano-tx" },
  { label: "Frisco, TX", href: "/areas/frisco-tx" },
  { label: "Lewisville, TX", href: "/areas/lewisville-tx" },
  { label: "Addison, TX", href: "/areas/addison-tx" },
  { label: "Farmers Branch, TX", href: "/areas/farmers-branch-tx" },
  { label: "The Colony, TX", href: "/areas/the-colony-tx" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-warm-border bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Rusty Nail Contracting"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
            </Link>
            <p className="mt-3 text-sm text-white/60">
              Quality craftsmanship for Carrollton &amp; the Greater Dallas
              area. Built on integrity, finished with pride.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">
              Quick Links
            </p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-sand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">
              Services
            </p>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-sand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">
              Service Areas
            </p>
            <ul className="space-y-2">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-sand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">
              Contact Us
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone className="h-4 w-4 text-sand" />
                <a href="tel:4693465900" className="hover:text-sand">
                  (469) 346-5900
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="h-4 w-4 text-sand" />
                <a
                  href="mailto:rustynailcontractors@gmail.com"
                  className="break-all hover:text-sand"
                >
                  rustynailcontractors@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-sand" />
                Carrollton &amp; Greater Dallas, TX
              </li>
            </ul>

            {/* Social */}
            <div className="mt-4 space-y-2">
              <a
                href="https://www.instagram.com/rusty_nail_contracting"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/60 transition-colors hover:text-sand"
              >
                Instagram
              </a>
              <a
                href="https://share.google/5w46w4swMWjNshps3"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/60 transition-colors hover:text-sand"
              >
                Google Reviews
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} Rusty Nail Contracting. All rights
          reserved. | Licensed &amp; Insured Contractor in Carrollton &amp; Dallas, TX
        </div>
      </div>
    </footer>
  );
}
