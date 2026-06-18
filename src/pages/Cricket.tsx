import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Trophy, Activity, Clock, TrendingUp, Smartphone, Shield, Headphones } from "lucide-react";
import { BlogHeader } from "@/components/site/BlogHeader";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { applySeo } from "@/lib/seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import cricket from "@/assets/sport-cricket.jpg";
import hero from "@/assets/hero-cricket.jpg";

const FAQS = [
  { q: "What is online cricket betting?", a: "Online cricket betting is a digital way for cricket fans to participate in various cricket markets while following their favorite matches. Users can engage with pre-match and live cricket markets during T20, ODI, and Test matches through platforms such as Skyexchange2." },
  { q: "How does online cricket betting work on Skyexchange2?", a: "Skyexchange2 provides access to cricket markets before and during live matches. Users can view available options, monitor match developments, and participate based on their understanding of team form, player performance, pitch conditions, and match situations." },
  { q: "Why is cricket betting so popular in India?", a: "Cricket enjoys massive popularity across India. Major tournaments such as IPL, ICC events, and international series attract millions of viewers. This popularity has contributed to increased interest in online cricket betting and live cricket markets." },
  { q: "Can beginners use Skyexchange2 for cricket betting?", a: "Yes. Skyexchange2 offers a user-friendly interface that makes it easy for beginners to explore cricket markets, follow live scores, and understand different betting options available during matches." },
  { q: "What cricket formats are available on Skyexchange2?", a: "Users can follow and participate in markets related to T20 cricket, One Day Internationals (ODIs), Test matches, domestic leagues, franchise tournaments, and international cricket competitions." },
  { q: "How do I learn how to bet in cricket online?", a: "New users should begin by understanding cricket formats, team strengths, player statistics, pitch reports, weather conditions, and market types. Building knowledge of the sport can help users make more informed decisions." },
  { q: "What makes Skyexchange2 different from other online cricket betting sites?", a: "Skyexchange2 focuses on a smooth user experience, fast market updates, mobile compatibility, and access to a wide range of cricket events throughout the year." },
  { q: "Can I access Skyexchange2 on my smartphone?", a: "Yes. Skyexchange2 is designed to work efficiently on mobile devices, allowing users to follow live matches and cricket markets from anywhere." },
  { q: "What are live cricket betting markets?", a: "Live cricket betting markets update during a match based on current events. Odds and market conditions change as wickets fall, partnerships develop, and match momentum shifts." },
  { q: "Why do many users prefer live betting over pre-match betting?", a: "Live betting provides real-time engagement and allows users to react to match developments instead of making decisions only before the game begins." },
  { q: "Is online cricket betting available during IPL matches?", a: "Major cricket tournaments, including popular T20 leagues, often attract significant interest from users looking to follow live cricket action and related markets." },
  { q: "What should I consider before choosing an online cricket betting site?", a: "Look for platform reliability, user experience, market variety, customer support, security measures, and mobile compatibility when evaluating online cricket betting sites." },
  { q: "Can I follow international cricket tournaments on Skyexchange2?", a: "Yes. Users can stay updated with international cricket events, bilateral series, world tournaments, and other major cricket competitions." },
  { q: "What is the importance of match analysis in cricket betting?", a: "Match analysis helps users understand team form, player performance, head-to-head records, venue statistics, and current conditions before making decisions." },
  { q: "How important are pitch conditions in cricket betting?", a: "Pitch conditions can significantly impact match outcomes. Some pitches favor batting, while others assist bowlers, making pitch reports an important part of cricket analysis." },
  { q: "Does weather affect cricket betting decisions?", a: "Weather can influence match conditions, interruptions, and playing strategies. Rain forecasts and ground conditions are often considered before major matches." },
  { q: "What are the benefits of using a mobile-friendly cricket betting platform?", a: "A mobile-friendly platform allows users to follow live scores, monitor markets, and stay connected to matches without needing a desktop computer." },
  { q: "Why do experienced users track team form before a match?", a: "Recent performances can provide insights into player confidence, team momentum, and overall readiness for upcoming matches." },
  { q: "What cricket leagues attract the most attention online?", a: "Popular T20 leagues, international championships, and major bilateral series often generate significant interest among cricket fans worldwide." },
  { q: "How often are cricket betting markets updated?", a: "Markets can update continuously throughout a match as new information becomes available and match situations change." },
  { q: "What is the role of statistics in online cricket betting?", a: "Statistics help users evaluate player performances, team records, venue trends, and historical results to better understand potential match outcomes." },
  { q: "Can I follow both domestic and international cricket on Skyexchange2?", a: "Yes. Cricket enthusiasts can stay connected with domestic tournaments, franchise leagues, and international cricket events through a single platform." },
  { q: "Why is responsible gaming important?", a: "Responsible gaming encourages users to enjoy cricket entertainment within their limits and maintain a balanced approach to participation." },
  { q: "How can I improve my understanding of cricket betting markets?", a: "Following matches regularly, studying cricket statistics, learning market terminology, and analyzing team performances can improve overall understanding." },
  { q: "Why do users choose online betting cricket platforms instead of traditional methods?", a: "Online platforms offer convenience, mobile accessibility, real-time updates, and access to multiple cricket events from a single account." },
  { q: "Is Skyexchange2 suitable for both casual and experienced cricket fans?", a: "Yes. The platform is designed to provide an engaging experience for users ranging from newcomers to long-time cricket followers." },
  { q: "What are the most important factors to review before a cricket match?", a: "Team form, player availability, venue history, weather forecasts, pitch conditions, and recent head-to-head performances are commonly reviewed." },
  { q: "How does technology improve the online cricket betting experience?", a: "Technology enables real-time score updates, faster market refreshes, mobile access, improved security, and a more seamless user experience." },
  { q: "Can users access cricket markets throughout the year?", a: "Yes. Cricket is played year-round across various international tours, domestic tournaments, and franchise leagues, providing ongoing opportunities to follow the sport." },
  { q: "Why is Skyexchange2 a preferred choice for cricket enthusiasts?", a: "Skyexchange2 combines cricket-focused features, live match engagement, mobile accessibility, and a user-friendly experience that appeals to modern cricket fans." },
];

const Cricket = () => {
  useEffect(() => {
    applySeo({
      title: "Online Cricket Betting on Skyexchange2 | Live Cricket Action at Your Fingertips",
      description:
        "Experience online cricket betting on Skyexchange2. Follow IPL, T20, ODI & Test matches with live updates, real-time odds, and a mobile-friendly platform built for cricket fans.",
      canonical: "https://www.skyexchange2.live/cricket",
      keywords:
        "online cricket betting, live cricket betting, cricket betting sites, how to bet in cricket online, online betting cricket, online cricket betting sites in India, skyexchange2 cricket",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Online Cricket Betting on Skyexchange2",
          url: "https://www.skyexchange2.live/cricket",
          description: "Online cricket betting on Skyexchange2 — IPL, T20 World Cup, ODI, Test cricket with live updates and real-time odds.",
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.skyexchange2.live/" },
            { "@type": "ListItem", position: 2, name: "Cricket", item: "https://www.skyexchange2.live/cricket" },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    });
  }, []);

  const features = [
    { icon: Activity, t: "Live cricket match coverage" },
    { icon: TrendingUp, t: "Real-time market updates" },
    { icon: Smartphone, t: "Mobile-friendly experience" },
    { icon: Clock, t: "Fast-loading interface" },
    { icon: Trophy, t: "Multiple cricket tournaments available" },
    { icon: Shield, t: "Secure and easy account access" },
    { icon: Headphones, t: "Dedicated customer support" },
  ];

  const leagues = [
    { t: "IPL 2026", d: "All 74 matches with real-time odds", tag: "LIVE" },
    { t: "T20 World Cup", d: "Every group & knockout match", tag: "HOT" },
    { t: "ODI Series", d: "India vs World — bilateral series" },
    { t: "Test Cricket", d: "Session betting + lead at end of day" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <BlogHeader />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={hero} alt="Online cricket betting on Skyexchange2 - live cricket action" className="w-full h-full object-cover opacity-30" loading="eager" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="relative container py-12 md:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground/70">Cricket</span>
          </nav>

          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">Live Cricket Betting India</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Bet on <span className="text-gradient-gold">live cricket</span> in ₹ — IPL, T20, ODI & more
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-7 max-w-2xl">
              Skyexchange2 gives you the fastest live cricket odds in India, lowest commission, and instant ₹ withdrawals.
              Bet on every IPL 2026 match, T20 World Cup, ODI series and Test cricket — all from your phone.
            </p>
            <WhatsAppButton size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold h-12 px-8">
              Get Your Cricket ID
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Online Cricket Betting on Skyexchange2 – <span className="text-gradient-gold">Live Cricket Action at Your Fingertips</span>
        </h2>
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
          <p>
            Cricket is more than a sport in India—it is a passion followed by millions every day. At Skyexchange2, fans can stay connected with major cricket tournaments, international series, T20 leagues, ODI matches, and Test cricket through a seamless and user-friendly platform.
          </p>
          <p>
            Whether you follow IPL-style leagues, international championships, or domestic tournaments, Skyexchange2 provides access to live match updates, real-time odds, and an engaging cricket experience across devices. The platform is designed for both beginners and experienced users who want a smooth and secure environment to enjoy online cricket betting.
          </p>
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Why Choose Skyexchange2 <span className="text-gradient-gold">for Cricket?</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.t} className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-card border border-border">
              <f.icon className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">{f.t}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Cricket Markets <span className="text-gradient-gold">Available</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Skyexchange2 offers a variety of cricket markets that help users stay engaged throughout the match. From pre-match analysis to live in-play opportunities, users can follow every ball, wicket, boundary, and partnership as the action unfolds.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Experience Cricket <span className="text-gradient-gold">Anytime, Anywhere</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Modern cricket fans want flexibility. Skyexchange2 works smoothly on smartphones, tablets, and desktops, allowing users to enjoy online betting cricket experiences wherever they are.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          A Platform Built for <span className="text-gradient-gold">Cricket Enthusiasts</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          From T20 thrillers to five-day Test matches, Skyexchange2 brings cricket fans closer to the action. Whether you are exploring online cricket betting sites in India for the first time or looking for a reliable platform to follow your favorite matches, Skyexchange2 delivers a smooth and engaging experience.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {leagues.map((g) => (
            <div key={g.t} className="relative rounded-2xl overflow-hidden border border-border bg-gradient-card group">
              <div className="aspect-square overflow-hidden">
                <img src={cricket} alt={`${g.t} betting on Skyexchange2`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              {g.tag && (
                <span className="absolute top-3 left-3 px-2 py-1 rounded-md text-[10px] font-bold bg-destructive text-destructive-foreground">
                  {g.tag}
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background via-background/80 to-transparent">
                <h3 className="font-bold text-base">{g.t}</h3>
                <p className="text-xs text-muted-foreground">{g.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          FAQs About Online Cricket Betting <span className="text-gradient-gold">on Skyexchange2</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-3 max-w-4xl">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-gradient-card px-5">
              <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="container py-14">
        <div className="p-6 md:p-10 rounded-2xl border border-primary/30 bg-gradient-card text-center shadow-gold">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Ready to experience <span className="text-gradient-gold">live cricket betting?</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            Get your Skyexchange2 cricket ID in 60 seconds on WhatsApp. Play in ₹, win in ₹.
          </p>
          <WhatsAppButton className="bg-gradient-gold text-primary-foreground shadow-gold">
            Get Your Cricket ID Now
          </WhatsAppButton>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Cricket;
