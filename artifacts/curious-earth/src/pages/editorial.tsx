import { Link } from "wouter";

export default function Editorial() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Editorial Standards</h1>
      <p className="text-sm mb-10" style={{ color: "hsl(var(--muted-foreground))" }}>How we research, write, and review the work you read on Curious Earth.</p>

      <div className="space-y-10 text-base leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Our Mission</h2>
          <p>Curious Earth exists to explain the natural world — accurately, accessibly, and without sensationalism — to the kind of reader who wants to understand <em>why</em>, not just <em>what</em>. Every article on this site is written for a curious general audience by editors with relevant scientific training, and is reviewed for accuracy before publication.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Sourcing and Accuracy</h2>
          <p className="mb-3">We rely on primary scientific sources wherever possible: peer-reviewed journal articles, university and government research publications (NASA, NOAA, USGS, IPCC, the Royal Society, and equivalent bodies), and well-regarded scholarly textbooks. Where we draw on secondary reporting, we look for outlets with strong editorial standards of their own.</p>
          <p className="mb-3">Every Curious Earth article includes a list of references at the end. Specific numerical claims — distances, masses, dates, percentages — are checked against authoritative sources before publication. When sources disagree or scientific understanding is genuinely uncertain, we say so in plain language rather than paper over the disagreement.</p>
          <p>We do not knowingly publish content generated wholesale by language models without expert human authorship and review. Articles are written and edited by people.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Corrections Policy</h2>
          <p>Despite our best efforts, errors sometimes slip through. When we discover or are alerted to a substantive error of fact, we correct the article promptly and append a brief note describing what was changed and when. Minor copy-edits (typos, formatting) are made without notation. To report a possible error, contact us via the <Link href="/contact" className="underline" style={{ color: "hsl(var(--primary))" }}>Contact page</Link>.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Independence and Conflicts of Interest</h2>
          <p className="mb-3">Curious Earth is editorially independent. Our editors choose what to cover based on scientific interest and reader value, not on commercial considerations. Where an editor has a personal or financial interest in a topic — for example, prior employment with an organization being discussed — that interest is disclosed within the article.</p>
          <p>We do not accept payment in exchange for coverage. Articles are not commissioned, reviewed, or shaped by advertisers or sponsors. If we ever publish sponsored content, it will be clearly and prominently labeled as such and held to our normal accuracy standards.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Advertising</h2>
          <p>To support our work, Curious Earth may display advertising provided by third-party networks such as Google AdSense. Advertising is clearly distinguishable from editorial content. Our editors have no influence over which specific ads are shown, and advertisers have no influence over our editorial choices. See our <Link href="/privacy" className="underline" style={{ color: "hsl(var(--primary))" }}>Privacy Policy</Link> for details on how advertising cookies are used.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Climate, Evolution, and Other Settled Science</h2>
          <p>Curious Earth treats human-caused climate change, biological evolution, the age of the universe, vaccine safety, and other matters of established scientific consensus as settled fact, in line with the world's leading scientific bodies. We do not treat these issues as open debates, though we cover ongoing scientific questions <em>within</em> these fields with appropriate nuance.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Reader Feedback</h2>
          <p>We welcome thoughtful feedback, corrections, and topic suggestions from our readers. Please use our <Link href="/contact" className="underline" style={{ color: "hsl(var(--primary))" }}>Contact page</Link> to get in touch. Constructive criticism makes the site better, and we read every message.</p>
        </section>
      </div>
    </div>
  );
}
