"use client";

import { Phone } from "lucide-react";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-warm-border bg-white p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] sm:hidden">
      <a
        href="tel:4693465900"
        className="flex items-center justify-center gap-2 rounded-xl bg-sand px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-sand-dark"
      >
        <Phone className="h-4 w-4" />
        Call (469) 346-5900 — Free Estimate
      </a>
    </div>
  );
}
