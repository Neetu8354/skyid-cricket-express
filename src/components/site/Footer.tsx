import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { BLOG_POSTS } from "@/data/blogPosts";

export const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container py-12 grid md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <img src={logo} alt="Skyexchange2 - Sky Exchange Login online cricket and casino platform" className="h-10 w-10" width={40} height={40} />
          <span className="text-xl font-extrabold text-gradient-gold">SKYEXCHANGE</span>
        </div>
        <p className="text-sm text-muted-foreground">Skyexchange2 (Sky Exchange Login) — India's most trusted online cricket & casino platform. Play live cricket betting in ₹, win big with fast withdrawal & 24x7 support.</p>
      </div>
      {[
        { t: "Sports", items: [{ label: "Cricket", href: "/cricket" }, { label: "IPL 2026", href: "/cricket" }, { label: "T20 World Cup", href: "/cricket" }, { label: "ODI", href: "/cricket" }] },
        { t: "Casino", items: [{ label: "Live Roulette", href: "/casino" }, { label: "Andar Bahar", href: "/casino" }, { label: "Teen Patti", href: "/casino" }, { label: "Aviator", href: "/casino" }] },
      ].map((s) => (
        <div key={s.t}>
          <h4 className="font-bold mb-3">{s.t}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {s.items.map((x) => (
              <li key={x.label}>
                <Link to={x.href} className="hover:text-primary">{x.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <h4 className="font-bold mb-3">Skyexchange2 Blog</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            <Link to="/blog" className="hover:text-primary">All articles</Link>
          </li>
          {BLOG_POSTS.slice(0, 3).map((p) => (
            <li key={p.slug}>
              <Link to={`/blog/${p.slug}`} className="hover:text-primary">
                {p.title.split(" — ")[0].split(" (")[0]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Skyexchange2. All rights reserved.</p>
        <p>18+ only · Play responsibly · Gambling can be addictive</p>
      </div>
    </div>
  </footer>
);
