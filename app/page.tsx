import Header from "@/components/header";
import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import Services from "@/components/services";
import Process from "@/components/process";
import Portfolio from "@/components/portfolio";
import About from "@/components/about";
import Testimonials from "@/components/testimonials";
import ServiceAreas from "@/components/service-areas";
import FAQ from "@/components/faq";
import { faqJsonLd } from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import MobileCTA from "@/components/mobile-cta";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <Portfolio />
        <About />
        <Testimonials />
        <ServiceAreas />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
