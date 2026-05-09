import { Link } from "wouter";
import type { Article } from "@/data/articles";
import { articlesByCategory } from "@/data/articles";
import { imageForArticle, imageForCategory } from "@/data/categoryImages";

const meta: Record<Article["category"], { title: string; tagline: string; description: string; gradient: string; badgeBg: string; badgeBorder: string; badgeText: string }> = {
  astronomy: {
    title: "Astronomy & Space",
    tagline: "Exploring the Cosmos",
    description: "From nearby planets to galaxies billions of light-years away. Explore stellar evolution, black holes, exoplanets, dark matter, and the deep mysteries of the universe.",
    gradient: "linear-gradient(135deg, #0a0a2e 0%, #1a1a4e 50%, #2a1a4e 100%)",
    badgeBg: "hsl(222 80% 50% / 0.3)",
    badgeBorder: "1px solid hsl(222 80% 60% / 0.4)",
    badgeText: "hsl(222 80% 80%)",
  },
  biology: {
    title: "Biology & Life Science",
    tagline: "The Science of Life",
    description: "From DNA molecules to entire ecosystems. Discover how living organisms grow, reproduce, evolve, and interact in one of nature's most intricate stories.",
    gradient: "linear-gradient(135deg, #0d3a1e 0%, #0d5c32 50%, #1a7040 100%)",
    badgeBg: "hsl(149 55% 40% / 0.3)",
    badgeBorder: "1px solid hsl(149 55% 60% / 0.4)",
    badgeText: "hsl(149 55% 80%)",
  },
  geology: {
    title: "Geology & Earth Science",
    tagline: "The Story of Our Planet",
    description: "Understand the forces that shape our planet over millions of years — from volcanic eruptions and earthquakes to mountain formation and the slow dance of continents.",
    gradient: "linear-gradient(135deg, #2d1a00 0%, #4a2e0a 50%, #5c3d10 100%)",
    badgeBg: "hsl(38 80% 40% / 0.3)",
    badgeBorder: "1px solid hsl(38 80% 60% / 0.4)",
    badgeText: "hsl(38 80% 80%)",
  },
  ecology: {
    title: "Ecology & Environment",
    tagline: "Life's Intricate Web",
    description: "Examine how living things interact with each other and their environments. Learn about food webs, ecosystems, biodiversity, and the urgent challenge of conservation.",
    gradient: "linear-gradient(135deg, #0d2e0d 0%, #1a4a1a 50%, #2a5c2a 100%)",
    badgeBg: "hsl(120 40% 35% / 0.3)",
    badgeBorder: "1px solid hsl(120 40% 60% / 0.4)",
    badgeText: "hsl(120 40% 80%)",
  },
  weather: {
    title: "Weather & Climate",
    tagline: "The Atmosphere in Motion",
    description: "Decode the atmosphere's complex systems. From everyday weather patterns to long-term climate trends, understand what drives our planet's dynamic skies.",
    gradient: "linear-gradient(135deg, #0a1a2e 0%, #0a2040 50%, #0a1830 100%)",
    badgeBg: "hsl(210 70% 40% / 0.3)",
    badgeBorder: "1px solid hsl(210 70% 60% / 0.4)",
    badgeText: "hsl(210 70% 80%)",
  },
};

export function CategoryPage({ category }: { category: Article["category"] }) {
  const m = meta[category];
  const articles = articlesByCategory(category);
  const [featured, ...rest] = articles;
  const heroImage = imageForCategory(category);

  return (
    <div>
      {/* Hero */}
      <section
        className="py-20 px-4 text-white relative overflow-hidden"
        style={{ background: m.gradient }}
        data-testid={`category-hero-${category}`}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("${heroImage}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.6) 100%)" }} aria-hidden="true" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{ background: m.badgeBg, border: m.badgeBorder, color: m.badgeText }}
          >
            {m.tagline}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            {m.title}
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            {m.description}
          </p>
          <p className="mt-4 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.5)" }}>
            {articles.length} article{articles.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: "hsl(var(--muted-foreground))" }}>
            Featured Article
          </div>
          <Link
            href={`/${category}/${featured.slug}`}
            className="no-underline group block rounded-xl overflow-hidden border hover:shadow-lg transition-all"
            style={{ borderColor: "hsl(var(--border))" }}
            data-testid={`featured-${featured.slug}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div
                className="h-64 md:h-auto relative flex items-center justify-center text-8xl overflow-hidden"
                style={{ background: m.gradient }}
              >
                <img
                  src={imageForArticle(featured.slug, category)}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ opacity: 0.6 }}
                />
                <span className="relative z-10" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}>{featured.icon}</span>
              </div>
              <div className="p-8 bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold" style={{ color: featured.accentColor }}>{featured.readTime}</span>
                  <span className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>{featured.date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {featured.title}
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {featured.excerpt}
                </p>
                <p className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                  By {featured.author}
                </p>
                <span className="inline-block mt-4 text-sm font-semibold" style={{ color: featured.accentColor }}>
                  Read article →
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Article grid */}
      {rest.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="text-xs uppercase tracking-widest mb-6 font-semibold" style={{ color: "hsl(var(--muted-foreground))" }}>
            All Articles
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((a) => (
              <Link
                key={a.slug}
                href={`/${category}/${a.slug}`}
                className="no-underline group block rounded-xl overflow-hidden border hover:shadow-lg transition-all bg-card"
                style={{ borderColor: "hsl(var(--border))" }}
                data-testid={`article-card-${a.slug}`}
              >
                <div
                  className="h-32 relative flex items-center justify-center text-5xl overflow-hidden"
                  style={{ background: m.gradient }}
                >
                  <img
                    src={imageForArticle(a.slug, category)}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ opacity: 0.6 }}
                  />
                  <span className="relative z-10" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}>{a.icon}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2 text-xs">
                    <span style={{ color: a.accentColor, fontWeight: 600 }}>{a.readTime}</span>
                    <span style={{ color: "hsl(var(--muted-foreground))" }}>•</span>
                    <span style={{ color: "hsl(var(--muted-foreground))" }}>{a.date}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 leading-snug group-hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {a.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {a.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
