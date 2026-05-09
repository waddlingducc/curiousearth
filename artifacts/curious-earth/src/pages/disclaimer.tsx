export default function Disclaimer() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Editorial Disclaimer</h1>
      <p className="text-sm mb-10" style={{ color: "hsl(var(--muted-foreground))" }}>Last updated: May 2026</p>

      <div className="space-y-8 text-base leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>General Information</h2>
          <p>The information published on Curious Earth is for general informational and educational purposes only. While we strive for accuracy and rely on peer-reviewed sources, we make no warranties about the completeness, reliability, or accuracy of this information.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Not Professional Advice</h2>
          <p>Content on Curious Earth should not be used as a substitute for professional advice — whether medical, scientific, legal, environmental, or otherwise. Always consult qualified professionals for guidance specific to your situation.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Editorial Independence</h2>
          <p>Our editorial decisions are made independently of advertisers, sponsors, or commercial partners. The presence of advertising on our site does not influence our editorial coverage, and we do not allow commercial considerations to dictate the science we cover or how we cover it.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Sources and Citations</h2>
          <p>Each article includes a reference list of primary sources. Wherever possible, we link to peer-reviewed studies, established institutions, and recognized authorities. If you spot an error or believe a citation is incorrect, please contact us — we welcome corrections and update articles when warranted.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Affiliate Disclosure</h2>
          <p>Curious Earth may, in the future, participate in affiliate marketing programs. If we ever do, we will clearly disclose any affiliate relationships in the relevant articles. As of the current date, no articles contain affiliate links.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>External Links</h2>
          <p>Our articles may contain links to external sites for additional reading or to source material. We do not control, endorse, or assume responsibility for the content of external sites.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Updates and Corrections</h2>
          <p>Science evolves, and so does our coverage. We periodically review and update our articles to reflect new findings. When we make significant corrections to an article, we note them at the bottom of the article. For minor corrections (typos, formatting), we update the article without notation.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Contact for Corrections</h2>
          <p>If you believe an article contains a factual error, please contact us through our Contact page. We take corrections seriously and aim to respond within five business days.</p>
        </section>
      </div>
    </div>
  );
}
