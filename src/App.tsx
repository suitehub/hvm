import { LanguageProvider } from "@/i18n/LanguageContext";
import { Navbar } from "@/components/hvm/Navbar";
import { Hero } from "@/components/hvm/Hero";
import { Accelerate } from "@/components/hvm/Accelerate";
import { GrowFast } from "@/components/hvm/GrowFast";
import { Services } from "@/components/hvm/Services";
import { Process } from "@/components/hvm/Process";
import { Testimonials } from "@/components/hvm/Testimonials";
import { Authority } from "@/components/hvm/Authority";
import { CtaFaq } from "@/components/hvm/CtaFaq";
import { Footer } from "@/components/hvm/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen scroll-smooth bg-background font-sans antialiased text-foreground">
        <Navbar />
        <main>
          <Hero />
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


