import { ShieldCheck } from "lucide-react";

export const About = () => (
  <section id="about" className="py-16">
    <div className="container grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">About SkyExchange</div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-5">
          India's Leading <span className="text-gradient-gold">Online Cricket &amp; Gaming Platform</span>
        </h2>
        <p className="text-muted-foreground mb-4">
          Founded in 2017, <strong>SkyExchange2</strong> has established itself as a trusted destination for cricket enthusiasts and online gaming players across India. Whether you’re following IPL matches, international cricket tournaments, fantasy sports, or popular online games, SkyExchange2 provides a seamless and user-friendly experience designed for both beginners and experienced players.
        </p>
        <p className="text-muted-foreground mb-4">
          With instant account activation, secure transactions, and dedicated customer support, SkyExchange2 makes it easy to access a wide range of cricket and gaming markets from a single platform. Our goal is to deliver a fast, reliable, and engaging experience while keeping player convenience at the center of everything we do.
        </p>
        <p className="text-muted-foreground">
          Enjoy access to live cricket action, fantasy sports contests, card games, and 1000+ gaming options in a secure environment. With quick SkyExchange2 login access and support for INR transactions, players can enjoy uninterrupted entertainment anytime, anywhere.
        </p>
      </div>
      <div className="relative rounded-2xl overflow-hidden border border-border bg-gradient-card p-8 shadow-gold">
        <div className="grid grid-cols-2 gap-6">
          {[
            { v: "2017", l: "Launched" },
            { v: "10L+", l: "Players" },
            { v: "1000+", l: "Games" },
            { v: "₹500Cr+", l: "Paid out" },
          ].map((s) => (
            <div key={s.l} className="text-center p-4 rounded-xl bg-background/50 border border-border">
              <div className="text-3xl font-extrabold text-gradient-gold">{s.v}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-6 text-sm text-primary">
          <ShieldCheck className="h-5 w-5" /> Trusted by lakhs of Indian players since 2017
        </div>
      </div>
    </div>
  </section>
);
