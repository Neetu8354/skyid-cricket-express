import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Dice5, Spade, Plane, Crown, Smartphone, Shield, Clock, Zap, RefreshCw, Gamepad2, CreditCard, Users } from "lucide-react";
import { BlogHeader } from "@/components/site/BlogHeader";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { applySeo } from "@/lib/seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import casino from "@/assets/sport-casino.jpg";
import andar from "@/assets/sport-andarbahar.jpg";
import teen from "@/assets/sport-teenpatti.jpg";
import aviator from "@/assets/sport-aviator.jpg";
import slots from "@/assets/sport-slots.jpg";

const FAQS = [
  { q: "What are online casino games?", a: "Online casino games are digital versions of traditional casino games such as blackjack, roulette, baccarat, poker, slots, and Teen Patti that can be played through internet-enabled devices." },
  { q: "Which are the most popular online casino games in India?", a: "Popular choices include Teen Patti, Roulette, Blackjack, Baccarat, Poker, Dragon Tiger, Andar Bahar, and slot games." },
  { q: "Can I play casino games online from my mobile phone?", a: "Yes, most modern casino platforms are optimized for smartphones and tablets." },
  { q: "What is a live casino game online?", a: "A live casino game online uses real dealers and live video streaming to provide an interactive gaming experience." },
  { q: "Are online casino games India becoming more popular?", a: "Yes, online casino games India continue to attract players because of convenience, accessibility, and game variety." },
  { q: "What is Teen Patti online?", a: "Teen Patti online is the digital version of India's famous card game that can be played through online gaming platforms." },
  { q: "How does Teen Patti online play work?", a: "Players join virtual tables, receive cards, place bets, and compete according to Teen Patti rules." },
  { q: "What are online casino slot games real money?", a: "These are slot-based casino games where players participate using real-money balances depending on platform availability." },
  { q: "Which is the best casino game to win money online?", a: "Games such as Blackjack, Baccarat, Poker, and Teen Patti are commonly chosen by players who enjoy strategy-based gameplay." },
  { q: "What are new online casino games?", a: "New online casino games are recently launched titles featuring updated graphics, innovative features, and modern gameplay mechanics." },
  { q: "Can beginners play casino online games?", a: "Yes, many casino games are beginner-friendly and include simple rules and tutorials." },
  { q: "What is the difference between live casino games and regular casino games?", a: "Live casino games involve real dealers and real-time interaction, while regular casino games use software-generated gameplay." },
  { q: "Is Teen Patti more popular than poker in India?", a: "Teen Patti is among the most recognized and widely played card games in India." },
  { q: "What devices support online casino games?", a: "Most casino platforms support desktops, laptops, Android devices, and iPhones." },
  { q: "Why do players prefer live casino game online platforms?", a: "Players enjoy the authentic casino atmosphere and interaction with live dealers." },
  { q: "Are slot games available in online casinos?", a: "Yes, online casinos typically offer hundreds of slot game options across different themes." },
  { q: "What makes online casino games convenient?", a: "Players can access games anytime and from virtually any location with internet access." },
  { q: "Can I play Teen Patti online with other players?", a: "Yes, many platforms offer multiplayer Teen Patti tables." },
  { q: "What types of card games are available online?", a: "Popular options include Teen Patti, Poker, Blackjack, Baccarat, Andar Bahar, and Dragon Tiger." },
  { q: "Why choose SkyExchange2 for online casino games?", a: "SkyExchange2 provides access to live casino games, Teen Patti online play, slot games, and a wide range of online casino entertainment options in one platform." },
];

const Casino = () => {
  useEffect(() => {
    applySeo({
      title: "SkyExchange2 Casino | Online Casino Games India, Live Casino & Teen Patti",
      description:
        "Play online casino games India at SkyExchange2 Casino. Enjoy live casino game online, Teen Patti online play, real money slot games, blackjack, roulette, baccarat, and exciting casino entertainment on one platform.",
      canonical: "https://www.skyexchange2.live/casino",
      keywords:
        "online casino games, online casino games India, live casino game online, casino online game, Teen Patti online, online Teen Patti, Teen Patti online play, online casino slot games real money, best casino game to win money online, new online casino games, play casino games online for real money",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Online Casino Games India on SkyExchange2",
          url: "https://www.skyexchange2.live/casino",
          description: "Play online casino games India at SkyExchange2 — live casino, Teen Patti, slots, blackjack, roulette and more.",
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.skyexchange2.live/" },
            { "@type": "ListItem", position: 2, name: "Casino", item: "https://www.skyexchange2.live/casino" },
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

  const casinoCategories = [
    "Live Casino Games", "Online Slot Games", "Teen Patti Online", "Blackjack", "Roulette", "Baccarat",
    "Poker Games", "Andar Bahar", "Dragon Tiger", "Lucky 7", "Aviator Style Games"
  ];

  const benefits = [
    { icon: Zap, t: "Instant access to casino games" },
    { icon: Gamepad2, t: "Multiple gaming categories" },
    { icon: Users, t: "Live dealer interaction" },
    { icon: Smartphone, t: "Mobile-friendly gameplay" },
    { icon: CreditCard, t: "Fast deposits and withdrawals" },
    { icon: Shield, t: "Secure gaming environment" },
    { icon: RefreshCw, t: "Regular game updates" },
  ];

  const liveGames = [
    { img: casino, t: "Live Roulette", d: "Experience real-time roulette action with professional dealers." },
    { img: casino, t: "Live Blackjack", d: "One of the most popular card games available online." },
    { img: casino, t: "Live Baccarat", d: "A classic casino game enjoyed by players worldwide." },
    { img: teen, t: "Live Teen Patti", d: "India's favorite card game available with live dealer functionality." },
    { img: andar, t: "Dragon Tiger", d: "A simple and fast-paced casino card game." },
  ];

  const slotCategories = [
    "Classic Slots", "Video Slots", "Fruit Slots", "Progressive Jackpot Slots",
    "Adventure Slots", "Fantasy Slots", "Megaways Slots"
  ];

  const bestGames = ["Blackjack", "Baccarat", "Poker", "Roulette", "Teen Patti", "Live Casino Games"];

  const whyChooseFeatures = [
    { icon: Gamepad2, t: "Extensive game library" },
    { icon: Users, t: "Live casino tables" },
    { icon: Spade, t: "Teen Patti and Indian card games" },
    { icon: Smartphone, t: "Mobile-friendly platform" },
    { icon: Crown, t: "User-friendly experience" },
    { icon: Shield, t: "Secure gaming environment" },
    { icon: RefreshCw, t: "Regular game updates" },
    { icon: Clock, t: "Seamless navigation" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <BlogHeader />

      <section className="relative border-b border-border">
        <div className="container py-12 md:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground/70">Casino</span>
          </nav>

          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">Online Casino India</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Online Casino Games India – <span className="text-gradient-gold">Play Live Casino Games Online for Real Money</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-4 max-w-2xl">
              Looking for the best <Link to="/casino" className="text-primary hover:underline">online casino games</Link> experience in India? SkyExchange2 offers a wide range of exciting casino entertainment, including live dealer tables, slot games, Teen Patti, roulette, blackjack, baccarat, and more. Whether you are searching for a <strong>casino online game</strong>, <Link to="/casino" className="text-primary hover:underline">live casino game online</Link>, or the latest <Link to="/casino" className="text-primary hover:underline">online casino games India</Link> players enjoy, you can find everything in one place.
            </p>
            <p className="text-muted-foreground text-base md:text-lg mb-7 max-w-2xl">
              With fast gameplay, secure access, and a user-friendly platform, players can explore hundreds of <strong>new online casino games</strong> and enjoy real-time action from anywhere. From beginners to experienced players, SkyExchange2 provides an engaging gaming environment with multiple game categories and live gaming options.
            </p>
            <WhatsAppButton size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold h-12 px-8">
              Get Your Casino ID
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Explore the Best <span className="text-gradient-gold">Online Casino Games in India</span>
        </h2>
        <p className="text-muted-foreground mb-4 max-w-3xl">
          The popularity of <strong>online casino games India</strong> continues to grow as more players choose digital platforms for entertainment. Modern casino platforms offer a realistic gaming experience through live dealers, HD streaming, and mobile-friendly interfaces.
        </p>
        <p className="text-muted-foreground mb-6">Popular casino categories include:</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {casinoCategories.map((cat) => (
            <span key={cat} className="px-3 py-1.5 rounded-full bg-gradient-card border border-border text-sm">{cat}</span>
          ))}
        </div>
        <p className="text-muted-foreground max-w-3xl">
          Players looking for a <Link to="/casino" className="text-primary hover:underline">live casino game online</Link> experience can enjoy real-time interaction with professional dealers while playing from the comfort of their homes.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Play Casino Games Online <span className="text-gradient-gold">for Real Money</span>
        </h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Many players prefer to <strong>play casino games online for real money</strong> because of the convenience and variety available online. Unlike traditional casinos, online platforms provide access to multiple games 24/7.
        </p>
        <p className="text-muted-foreground mb-4">Benefits include:</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {benefits.map((b) => (
            <div key={b.t} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-card border border-border">
              <b.icon className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm">{b.t}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground max-w-3xl">
          Whether you enjoy card games, slots, or live dealer tables, online casinos provide endless entertainment options.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Live Casino Game <span className="text-gradient-gold">Online Experience</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          A <strong>live casino game online</strong> combines the excitement of a real casino with the convenience of online gaming. Live dealers host games in professional studios and interact with players in real time.
        </p>
        <p className="text-muted-foreground mb-6">Popular live casino games include:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {liveGames.map((g) => (
            <div key={g.t} className="relative rounded-2xl overflow-hidden border border-border bg-gradient-card group hover:border-primary/60 transition">
              <div className="aspect-square overflow-hidden">
                <img src={g.img} alt={`${g.t} at SkyExchange2`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-background via-background/80 to-transparent">
                <h3 className="font-bold text-sm">{g.t}</h3>
                <p className="text-xs text-muted-foreground">{g.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Online Casino Slot Games <span className="text-gradient-gold">Real Money</span>
        </h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          If you're looking for <strong>online casino slot games real money</strong>, SkyExchange2 offers a wide selection of slot titles featuring exciting themes, bonus rounds, and jackpots.
        </p>
        <p className="text-muted-foreground mb-4">Popular slot categories include:</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {slotCategories.map((cat) => (
            <span key={cat} className="px-3 py-1.5 rounded-full bg-gradient-card border border-border text-sm">{cat}</span>
          ))}
        </div>
        <p className="text-muted-foreground max-w-3xl">
          Many players consider slots among the <strong>best casino game to win money online</strong> because of their simplicity and exciting bonus features.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Best Casino Game to <span className="text-gradient-gold">Win Money Online</span>
        </h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Players often search for the <strong>best casino game to win money online</strong>. While every game involves risk and outcomes vary, some games are generally popular because of their strategic elements.
        </p>
        <p className="text-muted-foreground mb-4">Common choices include:</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {bestGames.map((g) => (
            <span key={g} className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-sm text-primary">{g}</span>
          ))}
        </div>
        <p className="text-muted-foreground max-w-3xl">
          Understanding game rules, bankroll management, and responsible gaming practices can help improve the overall gaming experience.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          New <span className="text-gradient-gold">Online Casino Games</span>
        </h2>
        <p className="text-muted-foreground mb-4 max-w-3xl">
          The online gaming industry regularly introduces <strong>new online casino games</strong> featuring innovative gameplay, advanced graphics, and unique features.
        </p>
        <p className="text-muted-foreground mb-4">Benefits of trying new casino games:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4 max-w-3xl">
          <li>Fresh gaming experiences</li>
          <li>Innovative bonus features</li>
          <li>Enhanced graphics</li>
          <li>New themes and storylines</li>
          <li>Mobile optimization</li>
          <li>Exciting reward systems</li>
        </ul>
        <p className="text-muted-foreground max-w-3xl">
          Players can explore the latest casino releases and discover new favorites.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Teen Patti <span className="text-gradient-gold">Online Game</span>
        </h2>
        <p className="text-muted-foreground mb-4 max-w-3xl">
          The <strong>Teen Patti online game</strong> is one of the most popular card games in India. Known as the Indian version of poker, Teen Patti combines strategy, excitement, and social interaction.
        </p>
        <p className="text-muted-foreground mb-4">Why players love Teen Patti:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4 max-w-3xl">
          <li>Easy to learn</li>
          <li>Fast-paced gameplay</li>
          <li>Strategic decision making</li>
          <li>Multiple game variations</li>
          <li>Popular across India</li>
        </ul>
        <p className="text-muted-foreground max-w-3xl">
          Whether you are a beginner or experienced player, online Teen Patti remains one of the top choices among Indian gaming enthusiasts.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Online Teen Patti – <span className="text-gradient-gold">Play Anytime, Anywhere</span>
        </h2>
        <p className="text-muted-foreground mb-4 max-w-3xl">
          Modern platforms allow users to enjoy <strong>online Teen Patti</strong> from mobile devices, tablets, and desktops.
        </p>
        <p className="text-muted-foreground mb-4">Features include:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4 max-w-3xl">
          <li>Mobile compatibility</li>
          <li>Fast gameplay</li>
          <li>Secure platform access</li>
          <li>Multiple Teen Patti formats</li>
          <li>User-friendly interface</li>
        </ul>
        <p className="text-muted-foreground max-w-3xl">
          Players can enjoy <strong>Teen Patti online play</strong> whenever they want without visiting a physical gaming venue.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Why Choose SkyExchange2 for <span className="text-gradient-gold">Online Casino Games?</span>
        </h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          SkyExchange2 provides access to a comprehensive collection of casino entertainment options.
        </p>
        <p className="text-muted-foreground mb-4">Key features:</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {whyChooseFeatures.map((f) => (
            <div key={f.t} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-card border border-border">
              <f.icon className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm">{f.t}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground max-w-3xl">
          Whether you're interested in <Link to="/casino" className="text-primary hover:underline">online casino games</Link>, <Link to="/casino" className="text-primary hover:underline">live casino game online</Link>, or <strong>online casino slot games real money</strong>, SkyExchange2 offers a diverse gaming experience.
        </p>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Frequently Asked Questions <span className="text-gradient-gold">(FAQs)</span>
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
            Play live casino in <span className="text-gradient-gold">₹ today</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            Instant ID on WhatsApp. UPI deposits. 5-minute withdrawals. 24x7 live dealers.
          </p>
          <WhatsAppButton className="bg-gradient-gold text-primary-foreground shadow-gold">
            Get Your Casino ID Now
          </WhatsAppButton>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Casino;
