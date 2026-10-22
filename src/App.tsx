import { LanguageProvider } from "@/i18n/LanguageContext";
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

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen scroll-smooth bg-background font-sans antialiased text-foreground selection:bg-cyan/30 selection:text-white">
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
