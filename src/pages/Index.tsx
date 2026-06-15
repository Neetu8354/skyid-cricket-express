import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Steps } from "@/components/site/Steps";
import { GameSections } from "@/components/site/GameSections";
import { Features } from "@/components/site/Features";
import { MultiDevice } from "@/components/site/MultiDevice";
import { Gameplay } from "@/components/site/Gameplay";
import { Payments } from "@/components/site/Payments";
import { PromoSlider } from "@/components/site/PromoSlider";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Responsible } from "@/components/site/Responsible";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "SkyExchange2 Cricket ID | Live IPL Betting, Cricket Exchange & Casino";
    const ensure = (sel: string, attrs: Record<string, string>) => {
      let el = document.head.querySelector(sel) as HTMLElement | null;
      if (!el) {
        el = document.createElement(sel.startsWith("link") ? "link" : "meta");
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    };
    ensure('meta[name="description"]', { name: "description", content: "Get your SkyExchange2 Cricket ID instantly. Enjoy live IPL betting, cricket exchange markets, real-time odds, casino games, fast UPI withdrawals, and 24/7 support across India." });
    ensure('link[rel="canonical"]', { rel: "canonical", href: "https://www.skyexchange2.live/" });
    ensure('meta[property="og:title"]', { property: "og:title", content: "SkyExchange2 Cricket ID | Live IPL Betting, Cricket Exchange & Casino" });
    ensure('meta[property="og:description"]', { property: "og:description", content: "Get your SkyExchange2 Cricket ID instantly. Enjoy live IPL betting, cricket exchange markets, real-time odds, casino games, fast UPI withdrawals, and 24/7 support across India." });
    ensure('meta[property="og:type"]', { property: "og:type", content: "website" });
    ensure('meta[property="og:url"]', { property: "og:url", content: "https://www.skyexchange2.live/" });
    ensure('meta[property="og:image"]', { property: "og:image", content: "https://www.skyexchange2.live/og-image.jpg" });
    ensure('meta[name="twitter:image"]', { name: "twitter:image", content: "https://www.skyexchange2.live/og-image.jpg" });
    ensure('meta[name="twitter:title"]', { name: "twitter:title", content: "SkyExchange2 Cricket ID | Live IPL Betting, Cricket Exchange & Casino" });
    ensure('meta[name="twitter:description"]', { name: "twitter:description", content: "Get your SkyExchange2 Cricket ID instantly. Enjoy live IPL betting, cricket exchange markets, real-time odds, casino games, fast UPI withdrawals, and 24/7 support across India." });
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <WhyChoose />
      <Steps />
      <GameSections />
      <Features />
      <MultiDevice />
      <Gameplay />
      <Payments />
      <PromoSlider />
      <Stats />
      <Testimonials />
      <FAQ />
      <Responsible />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
