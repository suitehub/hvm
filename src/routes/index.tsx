import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/hvm/Navbar";
import { Hero } from "@/components/hvm/Hero";
import { AboutUs } from "@/components/hvm/AboutUs";
import { Accelerate } from "@/components/hvm/Accelerate";
import { GrowFast } from "@/components/hvm/GrowFast";
import { Services } from "@/components/hvm/Services";
import { Process } from "@/components/hvm/Process";
import { Testimonials } from "@/components/hvm/Testimonials";
import { Authority } from "@/components/hvm/Authority";
import { CtaFaq } from "@/components/hvm/CtaFaq";
import { Footer } from "@/components/hvm/Footer";
import { LanguageProvider } from "@/i18n/LanguageContext";

const TITLE = "HVM Digital Performance | Marketing digital que gera crescimento";
const DESCRIPTION =
  "Estratégias personalizadas, gestão de tráfego pago e marketing orientado por dados para escalar seu negócio todos os meses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen scroll-smooth bg-background font-sans antialiased text-foreground">
        <Navbar />
        <main>
          <Hero />
          <AboutUs />
          <Accelerate />
          <GrowFast />
          <Services />
          <Process />
          <Testimonials />
          <Authority />
          <CtaFaq />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
