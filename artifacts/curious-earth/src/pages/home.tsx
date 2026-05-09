import { Link } from "wouter";
import { articles, articlesByCategory } from "@/data/articles";
import { imageForArticle, imageForCategory } from "@/data/categoryImages";

const HERO_IMAGE = "https://images.unsplash.com/photo-1771095436222-e20a8737fcd1?w=1920&q=70&auto=format&fit=crop";

const categories = [
  { href: "/astronomy", title: "Astronomy", icon: "🔭", color: "#1a1a4e", description: "Explore the cosmos — from nearby planets to galaxies billions of light-years away." },
  { href: "/biology", title: "Biology", icon: "🧬", color: "#0d4a2e", description: "Unravel the mysteries of life at every scale — from DNA to entire ecosystems." },
  { href: "/geology", title: "Geology", icon: "⛰️", color: "#4a2800", description: "Understand the forces that shape our planet over millions of years." },
  { href: "/ecology", title: "Ecology", icon: "🌿", color: "#1a3d1a", description: "Examine how living things interact with each other and their environments." },
  { href: "/weather", title: "Weather & Climate", icon: "🌪️", color: "#1a2e4a", description: "Decode the atmosphere's complex systems — from everyday weather to climate." },
].map((cat) => ({
  ...cat,
  articles: articlesByCategory(cat.href.slice(1) as "astronomy" | "biology" | "geology" | "ecology" | "weather").length,
}));

const facts = [
  "A teaspoon of neutron star material would weigh about 10 million tons on Earth.",
  "The Amazon Rainforest produces 20% of the world's oxygen and houses 10% of all known species.",
  "The Pacific Ocean is wider than the Moon's diameter and contains more than half of Earth's water.",
  "A single bolt of lightning reaches temperatures five times hotter than the surface of the Sun.",
  "Earth's inner core rotates slightly faster than the rest of the planet — about 0.1–0.5° per year.",
  "Honey found in ancient Egyptian tombs is still edible after 3,000 years, due to its low moisture content.",
];

const featuredSlugs = [
  "life-cycle-of-stars",
  "photosynthesis",
  "plate-tectonics",
  "food-webs",
];
const latestArticles = featuredSlugs
  .map((s) => articles.find((a) => a.slug === s)!)
  .filter(Boolean);

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-24 px-4 text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(222 47% 11%) 0%, hsl(149 55% 15%) 60%, hsl(38 70% 25%) 100%)" }}
        data-testid="section-hero"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("${HERO_IMAGE}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,15,40,0.55) 0%, rgba(13,58,30,0.55) 60%, rgba(80,50,20,0.55) 100%)" }} aria-hidden="true" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6" style={{ background: "hsl(38 92% 50% / 0.25)", border: "1px solid hsl(38 92% 50% / 0.5)", color: "hsl(38 92% 70%)" }}>
            Science for the Curious Mind
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
            data-testid="hero-title"
          >
            Discover the Wonders of Our Natural World
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: "hsl(40 30% 80%)" }}>
            In-depth science journalism covering astronomy, biology, geology, ecology, and climate — written for curious minds who never stopped asking "why."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/astronomy"
              className="inline-block px-8 py-3 rounded-lg font-semibold text-white no-underline transition-all hover:opacity-90"
              style={{ background: "hsl(38 92% 50%)" }}
              data-testid="button-start-reading"
            >
              Start Reading
            </Link>
            <Link
              href="/about"
              className="inline-block px-8 py-3 rounded-lg font-semibold no-underline transition-all hover:opacity-80"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)", color: "white" }}
              data-testid="button-about"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Did You Know Facts Strip */}
      <section className="py-8" style={{ background: "hsl(149 55% 23%)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-4">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "hsl(38 92% 60%)" }}>Did You Know?</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {facts.map((fact, i) => (
              <div key={i} className="text-center px-4" data-testid={`fact-${i}`}>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(149 30% 85%)" }}>
                  <span style={{ color: "hsl(38 92% 60%)" }}>✦ </span>{fact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "hsl(var(--foreground))" }}>
            Featured Articles
          </h2>
          <div className="h-px flex-1 mx-6" style={{ background: "hsl(var(--border))" }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Large Card */}
          <Link
            href={`/${latestArticles[0].category}/${latestArticles[0].slug}`}
            className="lg:col-span-2 no-underline group block rounded-xl overflow-hidden border hover:shadow-lg transition-all"
            style={{ borderColor: "hsl(var(--border))" }}
            data-testid="card-article-featured"
          >
            <div className="h-48 relative flex items-center justify-center text-8xl overflow-hidden"
              style={{ background: latestArticles[0].heroGradient }}>
              <img
                src={imageForArticle(latestArticles[0].slug, latestArticles[0].category)}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 0.6 }}
              />
              <span className="relative z-10" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}>{latestArticles[0].icon}</span>
            </div>
            <div className="p-6 bg-card">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-0.5 rounded text-xs font-semibold text-white" style={{ background: latestArticles[0].accentColor }}>
                  {latestArticles[0].categoryLabel.split(" ")[0]}
                </span>
                <span className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>{latestArticles[0].date}</span>
                <span className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>{latestArticles[0].readTime}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                {latestArticles[0].title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                {latestArticles[0].excerpt}
              </p>
            </div>
          </Link>

          {/* Sidebar cards */}
          <div className="space-y-4">
            {latestArticles.slice(1, 4).map((article, i) => (
              <Link
                key={article.slug}
                href={`/${article.category}/${article.slug}`}
                className="no-underline group flex gap-4 p-4 rounded-xl border hover:shadow-md transition-all bg-card"
                style={{ borderColor: "hsl(var(--border))" }}
                data-testid={`card-article-${i + 1}`}
              >
                <div className="w-14 h-14 rounded-lg flex-shrink-0 flex items-center justify-center text-2xl"
                  style={{ background: `${article.accentColor.replace(")", " / 0.15)")}` }}>
                  {article.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold px-1.5 py-0.5 rounded text-white" style={{ background: article.accentColor }}>
                      {article.categoryLabel.split(" ")[0]}
                    </span>
                    <span className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>{article.readTime}</span>
                  </div>
                  <h4 className="text-sm font-bold leading-snug group-hover:text-primary transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {article.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-16" style={{ background: "hsl(var(--muted))" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Browse by Category</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
              Dive deep into any of our five science domains. Each category features in-depth articles, explainers, and the latest discoveries.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="no-underline group block rounded-xl overflow-hidden border hover:shadow-lg transition-all bg-card"
                style={{ borderColor: "hsl(var(--border))" }}
                data-testid={`card-category-${cat.title.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div className="h-28 relative flex items-center justify-center text-5xl overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${cat.color}ee, ${cat.color}88)` }}>
                  <img
                    src={imageForCategory(cat.href.slice(1) as "astronomy" | "biology" | "geology" | "ecology" | "weather")}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ opacity: 0.55 }}
                  />
                  <span className="relative z-10" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.7)" }}>{cat.icon}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {cat.title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {cat.description}
                  </p>
                  <span className="text-xs font-semibold" style={{ color: "hsl(var(--primary))" }}>
                    {cat.articles} article{cat.articles !== 1 ? "s" : ""} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Recent Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            From All Sections
          </h2>
          <div className="h-px flex-1 mx-6" style={{ background: "hsl(var(--border))" }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.slice(0, 8).map((a) => (
            <Link
              key={a.slug}
              href={`/${a.category}/${a.slug}`}
              className="no-underline group block rounded-xl overflow-hidden border hover:shadow-lg transition-all bg-card"
              style={{ borderColor: "hsl(var(--border))" }}
              data-testid={`recent-article-${a.slug}`}
            >
              <div className="h-32 relative flex items-center justify-center text-5xl overflow-hidden" style={{ background: a.heroGradient }}>
                <img
                  src={imageForArticle(a.slug, a.category)}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ opacity: 0.6 }}
                />
                <span className="relative z-10" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}>{a.icon}</span>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2 text-xs">
                  <span className="font-semibold" style={{ color: a.accentColor }}>{a.categoryLabel.split(" ")[0]}</span>
                  <span style={{ color: "hsl(var(--muted-foreground))" }}>•</span>
                  <span style={{ color: "hsl(var(--muted-foreground))" }}>{a.readTime}</span>
                </div>
                <h3 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {a.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-10 text-center text-white" style={{ background: "linear-gradient(135deg, hsl(149 55% 23%), hsl(149 55% 18%))" }}>
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "white" }}>
            Stay Curious
          </h2>
          <p className="text-base mb-6 max-w-lg mx-auto" style={{ color: "hsl(149 30% 80%)" }}>
            Get our weekly digest of the most fascinating science discoveries delivered straight to your inbox. No spam, just wonder.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-sm outline-none"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)", color: "white" }}
              data-testid="input-newsletter-email"
            />
            <button
              className="px-6 py-3 rounded-lg font-semibold text-sm whitespace-nowrap transition-all hover:opacity-90"
              style={{ background: "hsl(38 92% 50%)", color: "white" }}
              data-testid="button-newsletter-subscribe"
            >
              Subscribe Free
            </button>
          </div>
          <p className="mt-3 text-xs" style={{ color: "hsl(149 20% 60%)" }}>Join 47,000+ curious readers. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Quote */}
      <section className="py-12" style={{ background: "hsl(var(--muted))" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote
            className="text-2xl font-bold italic mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "hsl(var(--foreground))" }}
          >
            "Equipped with his five senses, man explores the universe around him and calls the adventure Science."
          </blockquote>
          <cite className="text-sm font-semibold" style={{ color: "hsl(var(--muted-foreground))" }}>
            — Edwin Powell Hubble, Astronomer
          </cite>
        </div>
      </section>
    </div>
  );
}
