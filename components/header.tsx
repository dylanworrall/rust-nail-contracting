"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/#about" },
  { label: "Areas", href: "/#areas" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const serviceLinks = [
  { label: "Fencing", href: "/services/fencing" },
  { label: "Decks", href: "/services/decks" },
  { label: "Painting", href: "/services/painting" },
  { label: "Interior Renovation", href: "/services/interior-renovation" },
  { label: "Landscaping", href: "/services/landscaping" },
  { label: "Exterior Renovation", href: "/services/exterior-renovation" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-warm-border bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Rusty Nail Contracting"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {/* Services dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-sand-dark">
              Services
              <ChevronDown className="h-3 w-3" />
            </button>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="w-56 rounded-xl border border-warm-border bg-white p-2 shadow-lg">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-cream hover:text-sand-dark"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.filter(l => l.label !== "Services").map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-sand-dark"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:4693465900"
            className="flex items-center gap-1.5 text-sm font-medium text-sand-dark transition-colors hover:text-rust"
          >
            <Phone className="h-3.5 w-3.5" />
            (469) 346-5900
          </a>
          <Button asChild>
            <Link href="/#contact">Get Free Estimate</Link>
          </Button>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="flex flex-col gap-1 px-6 pt-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Services
              </p>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-cream hover:text-sand-dark"
                >
                  {link.label}
                </Link>
              ))}

              <div className="my-3 border-t border-warm-border" />

              {navLinks.filter(l => l.label !== "Services").map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-lg font-medium text-charcoal transition-colors hover:text-sand-dark"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link href="/#contact" onClick={() => setOpen(false)}>
                  Get Free Estimate
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
