import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/astronomy", label: "Astronomy" },
  { href: "/biology", label: "Biology" },
  { href: "/geology", label: "Geology" },
  { href: "/ecology", label: "Ecology" },
  { href: "/weather", label: "Weather" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%`, background: "hsl(38 92% 50%)" }}
        data-testid="scroll-progress"
      />

      {/* Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? "shadow-md bg-background/95 backdrop-blur-sm" : "bg-background"
        }`}
        style={{ borderBottom: "1px solid hsl(var(--border))" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 no-underline"
              data-testid="link-logo"
            >
              <span className="text-2xl">🌍</span>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif", color: "hsl(var(--primary))" }}
              >
                Curious Earth
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 no-underline ${
                    location === link.href
                      ? "text-primary bg-secondary"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              data-testid="button-mobile-menu"
            >
              <div className="w-6 h-0.5 bg-foreground mb-1.5 transition-all" style={{ transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
              <div className="w-6 h-0.5 bg-foreground mb-1.5 transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
              <div className="w-6 h-0.5 bg-foreground transition-all" style={{ transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t bg-background" style={{ borderColor: "hsl(var(--border))" }}>
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors no-underline ${
                    location === link.href
                      ? "text-primary bg-secondary"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer style={{ background: "hsl(222 47% 11%)", color: "hsl(40 33% 90%)" }} className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌍</span>
                <span className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "hsl(38 92% 60%)" }}>
                  Curious Earth
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(40 20% 70%)" }}>
                Exploring the wonders of our natural world through accurate, engaging science journalism. From the depths of the ocean to the far reaches of the cosmos.
              </p>
              <p className="mt-4 text-xs" style={{ color: "hsl(40 15% 55%)" }}>
                "The important thing is not to stop questioning." — Albert Einstein
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider" style={{ color: "hsl(38 92% 60%)" }}>Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="no-underline hover:underline transition-colors"
                      style={{ color: "hsl(40 20% 70%)" }}
                      data-testid={`footer-link-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider" style={{ color: "hsl(38 92% 60%)" }}>Categories</h4>
              <ul className="space-y-2 text-sm" style={{ color: "hsl(40 20% 70%)" }}>
                <li><Link href="/astronomy" className="no-underline hover:underline" style={{ color: "hsl(40 20% 70%)" }}>Astronomy &amp; Space</Link></li>
                <li><Link href="/biology" className="no-underline hover:underline" style={{ color: "hsl(40 20% 70%)" }}>Biology &amp; Life Science</Link></li>
                <li><Link href="/geology" className="no-underline hover:underline" style={{ color: "hsl(40 20% 70%)" }}>Geology &amp; Earth Science</Link></li>
                <li><Link href="/ecology" className="no-underline hover:underline" style={{ color: "hsl(40 20% 70%)" }}>Ecology &amp; Environment</Link></li>
                <li><Link href="/weather" className="no-underline hover:underline" style={{ color: "hsl(40 20% 70%)" }}>Weather &amp; Climate</Link></li>
              </ul>
            </div>

            {/* Popular Articles */}
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider" style={{ color: "hsl(38 92% 60%)" }}>Popular Articles</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/astronomy/life-cycle-of-stars" className="no-underline hover:underline" style={{ color: "hsl(40 20% 70%)" }}>The Life Cycle of Stars</Link></li>
                <li><Link href="/biology/photosynthesis" className="no-underline hover:underline" style={{ color: "hsl(40 20% 70%)" }}>How Photosynthesis Works</Link></li>
                <li><Link href="/geology/plate-tectonics" className="no-underline hover:underline" style={{ color: "hsl(40 20% 70%)" }}>Plate Tectonics Explained</Link></li>
                <li><Link href="/ecology/food-webs" className="no-underline hover:underline" style={{ color: "hsl(40 20% 70%)" }}>Food Webs &amp; Energy Flow</Link></li>
                <li><Link href="/weather/hurricanes" className="no-underline hover:underline" style={{ color: "hsl(40 20% 70%)" }}>How Hurricanes Form</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "hsl(222 30% 20%)" }}>
            <p className="text-xs" style={{ color: "hsl(40 15% 50%)" }}>
              &copy; {new Date().getFullYear()} Curious Earth. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs" style={{ color: "hsl(40 15% 50%)" }}>
              <Link href="/privacy" className="hover:underline no-underline" style={{ color: "hsl(40 15% 50%)" }}>Privacy Policy</Link>
              <Link href="/terms" className="hover:underline no-underline" style={{ color: "hsl(40 15% 50%)" }}>Terms of Service</Link>
              <Link href="/disclaimer" className="hover:underline no-underline" style={{ color: "hsl(40 15% 50%)" }}>Disclaimer</Link>
              <Link href="/editorial" className="hover:underline no-underline" style={{ color: "hsl(40 15% 50%)" }}>Editorial Standards</Link>
              <Link href="/authors" className="hover:underline no-underline" style={{ color: "hsl(40 15% 50%)" }}>Authors</Link>
              <Link href="/faq" className="hover:underline no-underline" style={{ color: "hsl(40 15% 50%)" }}>FAQ</Link>
              <Link href="/glossary" className="hover:underline no-underline" style={{ color: "hsl(40 15% 50%)" }}>Glossary</Link>
              <Link href="/contact" className="hover:underline no-underline" style={{ color: "hsl(40 15% 50%)" }}>Contact</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      {scrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-white transition-all z-40 hover:scale-110"
          style={{ background: "hsl(var(--primary))" }}
          data-testid="button-back-to-top"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}
