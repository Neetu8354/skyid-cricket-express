import { useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What is SkyExchange2?",
    a: "SkyExchange2 is an online gaming and sports platform that offers access to online cricket betting, sports markets, and online casino games through a user-friendly interface. Users can enjoy live sports action and various casino entertainment options.",
  },
  {
    q: "How can I start online cricket betting on SkyExchange2?",
    a: "To start online cricket betting, create an account, log in, add funds, and choose your preferred cricket match. You can place bets before the match starts or during live matches using real-time odds.",
  },
  {
    q: "Is SkyExchange2 suitable for cricket bet online enthusiasts?",
    a: "Yes, SkyExchange2 provides multiple cricket betting markets, live odds updates, and match-related betting options, making it a popular choice for users looking to cricket bet online.",
  },
  {
    q: "Can I do online betting cricket during live matches?",
    a: "Yes, SkyExchange2 supports live or in-play betting, allowing users to participate in online betting cricket while the match is in progress with continuously updated odds.",
  },
  {
    q: "Why is SkyExchange2 considered one of the leading online cricket betting sites?",
    a: "SkyExchange2 offers extensive cricket markets, fast transactions, mobile accessibility, and real-time betting features that make it competitive among online cricket betting sites.",
  },
  {
    q: "Is there an online betting app cricket experience available?",
    a: "SkyExchange2 is optimized for mobile devices, allowing users to enjoy an online betting app cricket experience directly through their smartphones and tablets.",
  },
  {
    q: "Can users access online cricket betting in India?",
    a: "Yes, cricket fans can access features related to online cricket betting in India, including match odds, session betting, and live cricket markets.",
  },
  {
    q: "What makes SkyExchange2 different from other online cricket betting sites in India?",
    a: "SkyExchange2 focuses on user experience, live betting functionality, secure transactions, and a wide range of cricket betting options, helping it stand out among online cricket betting sites in India.",
  },
  {
    q: "How to bet in cricket online using SkyExchange2?",
    a: "If you're wondering how to bet in cricket online, simply register, choose a cricket event, review the available odds, place your selection, and confirm your bet before the market closes.",
  },
  {
    q: "What types of online casino games are available?",
    a: "SkyExchange2 provides access to various online casino games, including Teen Patti, Andar Bahar, Roulette, Blackjack, Baccarat, and live dealer experiences.",
  },
  {
    q: "Can I play a casino online game on my mobile device?",
    a: "Yes, users can enjoy a casino online game experience on mobile devices without compromising gameplay quality or performance.",
  },
  {
    q: "What is a live casino game online?",
    a: "A live casino game online connects players with real dealers through live video streaming, creating an immersive casino environment from the comfort of home.",
  },
  {
    q: "Are online casino games India players-friendly on SkyExchange2?",
    a: "Yes, the platform offers a variety of online casino games India players enjoy, including traditional card games and live dealer tables designed for Indian audiences.",
  },
  {
    q: "Does SkyExchange2 offer both sports betting and casino gaming?",
    a: "Yes, SkyExchange2 combines online cricket betting, sports betting, and online casino games on a single platform, allowing users to enjoy multiple gaming options.",
  },
  {
    q: "Is SkyExchange2 available 24/7?",
    a: "Yes, SkyExchange2 offers round-the-clock access to cricket betting markets and casino games, allowing users to play and participate whenever they choose.",
  },
];

export const FAQ = () => {
  useEffect(() => {
    const id = "faq-jsonld";
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    return () => {
      script?.remove();
    };
  }, []);

  return (
    <section id="faq" className="py-16">
      <div className="container max-w-3xl">
        <div className="text-center mb-10">
          <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">FAQ</div>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Frequently Asked <span className="text-gradient-gold">Questions (FAQs)</span> – SkyExchange2
          </h2>
          <p className="text-sm text-muted-foreground mt-3">
            Everything you need to know about SkyExchange2 – online cricket betting, casino games, and account access.
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`i-${i}`} className="rounded-xl border border-border bg-gradient-card px-5">
              <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
