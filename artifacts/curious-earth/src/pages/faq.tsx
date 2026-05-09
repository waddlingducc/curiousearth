import { Link } from "wouter";

const faqs = [
  {
    q: "Who writes the articles on Curious Earth?",
    a: "Every article is written by one of our section editors — working scientists or trained science journalists with relevant doctoral or research-level expertise — and reviewed by at least one additional editor before publication. You can read full bios of our editors on the Authors page.",
  },
  {
    q: "How accurate is the content?",
    a: "We rely on peer-reviewed scientific sources, university and government research publications, and well-regarded scholarly textbooks. Specific numerical claims are checked against authoritative sources before publication. When sources genuinely disagree or scientific understanding is uncertain, we say so in plain language. Every article includes a list of references at the end.",
  },
  {
    q: "How often are new articles published?",
    a: "We publish new long-form articles every week, usually on a rotating schedule across our five sections. Older articles are also periodically revised when new science makes important updates worth noting; substantive updates are dated and noted within the article.",
  },
  {
    q: "Is Curious Earth free to read?",
    a: "Yes. All of our articles are freely accessible to all readers. We do not currently operate a paywall or require account registration to read any of our content.",
  },
  {
    q: "How do you support the site if it's free?",
    a: "Curious Earth is supported primarily by advertising provided by third-party networks such as Google AdSense. We have no editorial relationship with any advertiser, and ads are clearly distinguishable from editorial content. See our Editorial Standards and Privacy Policy for details.",
  },
  {
    q: "Do you accept sponsored content?",
    a: "We do not currently publish sponsored content. If we ever do, it will be clearly and prominently labeled as such, held to our normal accuracy standards, and never affect our independent editorial coverage.",
  },
  {
    q: "How do I report an error in an article?",
    a: "We take error reports seriously. Please use our Contact page and include the article title, the specific passage you believe is incorrect, and (where possible) a citation supporting the correction. Substantive corrections are made promptly and noted within the article.",
  },
  {
    q: "Can I republish or quote your articles?",
    a: "Brief quotations of our articles for non-commercial purposes — for example in classroom materials, blog posts, or news commentary — are welcome with appropriate attribution and a link back to the original article. For longer-form republication or commercial use, please reach out via our Contact page first.",
  },
  {
    q: "Where do you stand on climate change, evolution, and vaccines?",
    a: "We treat human-caused climate change, biological evolution, the age of the universe, and vaccine safety as settled scientific fact, in line with the world's leading scientific bodies. We do not treat these issues as open debates, though we cover ongoing scientific questions within these fields with appropriate nuance.",
  },
  {
    q: "Do you cover medical or health topics?",
    a: "Some of our biology articles touch on health topics — the immune system, the human microbiome, the brain, and so on. None of our content is intended as personal medical advice. For medical questions specific to you or someone you care for, please consult a qualified healthcare professional.",
  },
  {
    q: "How do I suggest a topic for a future article?",
    a: "We love reader suggestions. Please use our Contact page to send us topic ideas. We can't guarantee we'll cover every suggestion, but we read every message and many of our most-read articles started as reader requests.",
  },
  {
    q: "Is there a newsletter?",
    a: "Yes. The newsletter signup on the home page subscribes you to a weekly digest of new articles. We do not share your email address with anyone and you can unsubscribe at any time directly from any newsletter email.",
  },
  {
    q: "Can I contact a specific editor?",
    a: "All editorial correspondence is best routed through our Contact page so it reaches the right person quickly. If your message is best handled by a specific section editor, please mention which section in your message and we will direct it appropriately.",
  },
];

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked Questions</h1>
      <p className="text-base mb-12" style={{ color: "hsl(var(--muted-foreground))" }}>
        Common questions about Curious Earth, our content, and how we work.
      </p>

      <div className="space-y-8">
        {faqs.map((faq, i) => (
          <section key={i} data-testid={`faq-${i}`}>
            <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{faq.q}</h2>
            <p className="text-base leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{faq.a}</p>
          </section>
        ))}
      </div>

      <section className="mt-16 p-8 rounded-2xl text-center" style={{ background: "hsl(149 55% 23% / 0.06)", border: "1px solid hsl(149 55% 23% / 0.15)" }}>
        <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Didn't find your answer?</h2>
        <p className="text-base leading-relaxed mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
          We try to answer every reader question we receive. Please get in touch through our Contact page and we'll respond as soon as we can.
        </p>
        <Link href="/contact" className="inline-block px-6 py-3 rounded-lg text-white font-semibold no-underline" style={{ background: "hsl(149 55% 23%)" }}>
          Contact Us
        </Link>
      </section>
    </div>
  );
}
