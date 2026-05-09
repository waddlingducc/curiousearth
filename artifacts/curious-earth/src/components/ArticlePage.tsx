import { Link, useRoute } from "wouter";
import { getArticle, articlesByCategory } from "@/data/articles";
import { imageForArticle, imageForCategory } from "@/data/categoryImages";
import NotFound from "@/pages/not-found";

export function ArticlePage() {
  const [, params] = useRoute("/:category/:slug");
  const slug = params?.slug;
  const category = params?.category;
  const article = slug ? getArticle(slug) : undefined;

  if (!article || article.category !== category) return <NotFound />;

  const related = articlesByCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section
        className="py-20 px-4 text-white relative overflow-hidden"
        style={{ background: article.heroGradient }}
        data-testid="article-hero"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("${imageForArticle(article.slug, article.category)}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.35,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${article.heroGradient.includes("0a0a2e") ? "rgba(10,10,46,0.55)" : "rgba(0,0,0,0.45)"} 0%, rgba(0,0,0,0.65) 100%)`,
          }}
          aria-hidden="true"
        />
        {article.category === "astronomy" && (
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "radial-gradient(white 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }} />
        )}
        <div className="max-w-4xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
            <Link href="/" className="no-underline hover:underline" style={{ color: "hsl(38 92% 60%)" }}>Home</Link>
            <span>›</span>
            <Link href={`/${article.category}`} className="no-underline hover:underline" style={{ color: "hsl(38 92% 60%)" }}>
              {article.category[0].toUpperCase() + article.category.slice(1)}
            </Link>
            <span>›</span>
            <span style={{ color: "rgba(255,255,255,0.7)" }}>{article.title.length > 40 ? article.title.slice(0, 40) + "…" : article.title}</span>
          </nav>
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{ background: article.badgeBg, border: article.badgeBorder, color: article.badgeText }}
          >
            {article.categoryLabel}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            <span>By {article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-xl leading-relaxed mb-8 font-medium" style={{ color: "hsl(var(--muted-foreground))", fontFamily: "'Playfair Display', serif" }}>
          {article.intro}
        </p>

        {article.openingQuote && (
          <div
            className="my-8 px-6 py-5 rounded-xl border-l-4 italic text-xl leading-relaxed"
            style={{
              borderColor: "hsl(38 92% 50%)",
              background: "hsl(38 92% 50% / 0.06)",
              fontFamily: "'Playfair Display', serif",
              color: "hsl(var(--foreground))",
            }}
          >
            "{article.openingQuote.text}"
            {article.openingQuote.attribution && (
              <span className="block mt-2 text-sm not-italic font-normal" style={{ color: "hsl(var(--muted-foreground))" }}>
                — {article.openingQuote.attribution}
              </span>
            )}
          </div>
        )}

        {article.sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-2xl font-bold mb-4 mt-10" style={{ fontFamily: "'Playfair Display', serif" }} data-testid={`section-heading-${i}`}>
              {section.heading}
            </h2>
            {section.paragraphs.map((p, j) => (
              <p key={j} className="text-base leading-relaxed mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
                {p}
              </p>
            ))}
            {section.pullQuote && (
              <div
                className="my-8 px-6 py-5 rounded-xl border-l-4 italic text-lg leading-relaxed"
                style={{
                  borderColor: article.accentColor,
                  background: `${article.accentColor.replace(")", " / 0.06)")}`,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                "{section.pullQuote}"
              </div>
            )}
            {/* Insert stats card after section 1 if stats exist */}
            {i === 1 && article.stats && (
              <div
                className="p-5 rounded-xl my-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center"
                style={{
                  background: `${article.accentColor.replace(")", " / 0.08)")}`,
                  border: `1px solid ${article.accentColor.replace(")", " / 0.2)")}`,
                }}
              >
                {article.stats.map((stat, k) => (
                  <div key={k}>
                    <div className="text-2xl font-bold mb-1" style={{ color: article.accentColor }}>{stat.value}</div>
                    <div className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Key Takeaways */}
        <div
          className="p-6 rounded-xl my-10"
          style={{
            background: `${article.accentColor.replace(")", " / 0.08)")}`,
            border: `1px solid ${article.accentColor.replace(")", " / 0.2)")}`,
          }}
          data-testid="key-takeaways"
        >
          <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: article.accentColor }}>
            Key Takeaways
          </h3>
          <ul className="space-y-2 text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
            {article.keyTakeaways.map((point, i) => (
              <li key={i} className="flex gap-2">
                <span style={{ color: article.accentColor }}>•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* References */}
        <div className="p-5 rounded-xl" style={{ background: "hsl(var(--muted))", border: "1px solid hsl(var(--border))" }} data-testid="references">
          <h3 className="text-sm font-bold uppercase tracking-wide mb-3" style={{ color: "hsl(var(--muted-foreground))" }}>
            References &amp; Further Reading
          </h3>
          <ul className="text-sm space-y-1" style={{ color: "hsl(var(--muted-foreground))" }}>
            {article.references.map((ref, i) => (
              <li key={i}>• {ref}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-12" style={{ background: "hsl(var(--muted))" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              More from {article.category[0].toUpperCase() + article.category.slice(1)}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/${r.category}/${r.slug}`}
                  className="no-underline group block p-5 rounded-xl bg-card border hover:shadow-md transition-all"
                  style={{ borderColor: "hsl(var(--border))" }}
                  data-testid={`related-${r.slug}`}
                >
                  <div className="text-3xl mb-3">{r.icon}</div>
                  <div className="text-xs mb-2" style={{ color: r.accentColor }}>{r.readTime}</div>
                  <h3 className="font-bold text-base leading-snug group-hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
