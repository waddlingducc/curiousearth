import { useState } from "react";

const faqs = [
  {
    q: "Is the content on Curious Earth free to read?",
    a: "Yes, all of our articles are free to read with no paywalls. We believe scientific knowledge should be accessible to everyone. We are supported by advertising revenue and occasional partnerships with educational institutions.",
  },
  {
    q: "How do I know the information on Curious Earth is accurate?",
    a: "All of our articles are written by scientists or science journalists with advanced degrees in the relevant field, and reviewed by independent experts before publication. We cite peer-reviewed research and primary sources throughout. When findings are contested or uncertain, we say so explicitly. We maintain a strict corrections policy and update articles when new evidence changes our understanding.",
  },
  {
    q: "Can I submit an article or pitch a story idea?",
    a: "Absolutely! We welcome pitches from scientists, researchers, and science writers. Please see our 'Write for Us' section below for submission guidelines. We are particularly interested in emerging research areas, underrepresented scientific fields, and topics that challenge common misconceptions.",
  },
  {
    q: "How often is new content published?",
    a: "We publish three to four new articles per week, typically on Tuesdays, Thursdays, and Saturdays. Special event coverage (eclipses, notable discoveries, major research publications) may result in additional content. You can subscribe to our newsletter to be notified of new publications.",
  },
  {
    q: "Do you cover news about specific scientific studies?",
    a: "We prefer to write in-depth educational articles about established scientific knowledge rather than chasing individual studies. When a specific study is genuinely significant and the findings are robust, we may cover it — but always in the context of the broader field. We are skeptical of hype and try to help readers understand what a study actually shows versus what headlines claim.",
  },
  {
    q: "Can I use content from Curious Earth in my school or classroom?",
    a: "We encourage educators to use our content for educational purposes. Please credit Curious Earth and include the article URL. For bulk use or curriculum integration, please contact us for more information. We also offer a free educator newsletter with curated content suitable for different grade levels.",
  },
  {
    q: "How can I report a factual error?",
    a: "Please email us at corrections@curiousearth.com with the article URL, the specific claim you believe is incorrect, and any evidence or sources supporting your correction. Our editorial team reviews all correction requests, typically within three to five business days. We take accuracy very seriously and will respond to every substantiated correction.",
  },
  {
    q: "Do you have a social media presence?",
    a: "Yes! You can follow us on Twitter/X (@CuriousEarthSci), Instagram (@curious.earth), YouTube (Curious Earth), and LinkedIn. We share article summaries, fascinating science facts, reader questions, and behind-the-scenes glimpses of our editorial process across all platforms.",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="py-20 px-4 text-white"
        style={{ background: "linear-gradient(135deg, hsl(222 47% 11%) 0%, hsl(149 55% 15%) 100%)" }}
        data-testid="section-hero-contact"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Get in Touch
          </h1>
          <p className="text-xl leading-relaxed max-w-xl mx-auto" style={{ color: "hsl(149 20% 75%)" }}>
            We love hearing from readers, researchers, and science enthusiasts. Whether you have a question, a correction, or a story idea, we want to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Send Us a Message</h2>
            {submitted ? (
              <div className="p-8 rounded-xl text-center" style={{ background: "hsl(149 55% 23% / 0.08)", border: "1px solid hsl(149 55% 23% / 0.2)" }} data-testid="success-message">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Message Received!</h3>
                <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                  Thank you for reaching out. Our editorial team reviews all messages and will respond within 3–5 business days. For urgent corrections, please email corrections@curiousearth.com directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                <div>
                  <label className="block text-sm font-semibold mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                    style={{ border: "1px solid hsl(var(--border))", background: "hsl(var(--background))", color: "hsl(var(--foreground))" }}
                    placeholder="Your full name"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                    style={{ border: "1px solid hsl(var(--border))", background: "hsl(var(--background))", color: "hsl(var(--foreground))" }}
                    placeholder="you@example.com"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5">Subject *</label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                    style={{ border: "1px solid hsl(var(--border))", background: "hsl(var(--background))", color: form.subject ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))" }}
                    data-testid="select-subject"
                  >
                    <option value="">Select a subject...</option>
                    <option>General Inquiry</option>
                    <option>Article Correction</option>
                    <option>Story Pitch / Writing for Us</option>
                    <option>Educational Use Request</option>
                    <option>Partnership Inquiry</option>
                    <option>Technical Issue</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5">Message *</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none"
                    style={{ border: "1px solid hsl(var(--border))", background: "hsl(var(--background))", color: "hsl(var(--foreground))" }}
                    placeholder="Tell us what's on your mind..."
                    data-testid="input-message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold text-sm text-white transition-all hover:opacity-90"
                  style={{ background: "hsl(149 55% 23%)" }}
                  data-testid="button-submit"
                >
                  Send Message
                </button>
              </form>
            )}

            {/* Contact Details */}
            <div className="mt-8 space-y-3 text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
              <div className="flex items-center gap-3">
                <span style={{ color: "hsl(var(--primary))" }}>✉</span>
                <span>editorial@curiousearth.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span style={{ color: "hsl(var(--primary))" }}>✉</span>
                <span>corrections@curiousearth.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span style={{ color: "hsl(var(--primary))" }}>📍</span>
                <span>123 Discovery Lane, San Francisco, CA 94105</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {["Twitter", "Instagram", "YouTube", "LinkedIn"].map((soc) => (
                  <a
                    key={soc}
                    href="#"
                    className="px-3 py-1.5 rounded-lg text-xs font-medium border hover:opacity-80 transition-opacity no-underline"
                    style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}
                    data-testid={`social-link-${soc.toLowerCase()}`}
                  >
                    {soc}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl border" style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--card))" }} data-testid={`faq-${i}`}>
                  <h4 className="font-bold text-sm mb-2">{faq.q}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Write for Us */}
        <div className="mt-16 p-10 rounded-2xl text-white" style={{ background: "linear-gradient(135deg, hsl(222 47% 11%), hsl(149 55% 18%))" }}>
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Write for Curious Earth</h2>
          <p className="text-base mb-6 max-w-2xl" style={{ color: "hsl(149 20% 75%)" }}>
            We are always looking for exceptional science writers and active researchers who want to share their work with a broad, curious audience. We pay competitive rates and provide rigorous editorial support.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {[
              { title: "What we publish", desc: "In-depth explainers (1,000–3,000 words), research summaries, scientific retrospectives, and field dispatches. We do not publish opinion pieces or advocacy." },
              { title: "Who can pitch", desc: "Active researchers, scientists with PhDs in the relevant field, and journalists with demonstrable expertise in science communication. We occasionally work with outstanding generalist writers." },
              { title: "What we pay", desc: "We pay $0.20–0.40 per word depending on experience and article complexity, with additional payment for revisions. Payment is on publication." },
              { title: "How to pitch", desc: "Email pitches@curiousearth.com with a 200-word pitch, your credentials, one writing sample, and a proposed headline. We respond to all pitches within two weeks." },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <h4 className="font-bold mb-2" style={{ color: "hsl(38 92% 60%)" }}>{item.title}</h4>
                <p style={{ color: "hsl(149 20% 75%)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
