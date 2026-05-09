const team = [
  {
    name: "Dr. Elena Vasquez",
    role: "Astrophysics Editor",
    specialty: "Stellar evolution, cosmology, space telescopes",
    bio: "Elena holds a PhD in Astrophysics from MIT and spent seven years at the Jet Propulsion Laboratory before turning to science journalism. Her passion is translating the abstract enormity of the cosmos into stories that feel personally meaningful. She has contributed to Nature, Scientific American, and the New York Times Science section.",
  },
  {
    name: "Prof. Marcus Chen",
    role: "Plant Biology & Life Sciences Editor",
    specialty: "Photosynthesis, plant physiology, evolutionary biology",
    bio: "Marcus is a former professor of Plant Biology at UC Davis who left academia to bring rigorous but accessible science to a wider audience. His research on C4 photosynthesis was published in Cell and The Plant Journal. He firmly believes that understanding plants is understanding the foundation of life on Earth.",
  },
  {
    name: "Dr. Amara Osei",
    role: "Earth Sciences Editor",
    specialty: "Plate tectonics, volcanology, geomorphology",
    bio: "Amara grew up near Ghana's Volta Lake and has been fascinated by Earth's dynamic surface ever since. She earned her doctorate from the University of Edinburgh and has conducted fieldwork on three continents. She writes with the conviction that Earth's 4.5-billion-year history is the greatest story never told.",
  },
  {
    name: "Dr. Priya Nair",
    role: "Ecology & Conservation Editor",
    specialty: "Food web dynamics, conservation biology, tropical ecosystems",
    bio: "Priya spent over a decade conducting fieldwork in the Western Ghats biodiversity hotspot before joining Curious Earth. Her work bridges academic ecology and conservation advocacy. She is the author of 'The Invisible Web: How Ecosystems Really Work,' a popular science book published in 2023.",
  },
];

const milestones = [
  { year: "2019", event: "Founded", desc: "Curious Earth launched with five founding editors and a commitment to bringing PhD-level science to the public without sacrificing accuracy or depth." },
  { year: "2020", event: "1 Million Readers", desc: "Despite launching just before a global pandemic, our readership surged as people sought reliable science information during an unprecedented global health crisis." },
  { year: "2022", event: "10 Million Page Views", desc: "Our astronomy series on the James Webb Space Telescope's first images alone attracted over 2 million readers in a single week, our highest-traffic period to date." },
  { year: "2024", event: "Science Journalism Award", desc: "Curious Earth received the Online Science Journalism Excellence Award from the Council for the Advancement of Science Writing for our coverage of the 2023 earthquake in Turkey." },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section
        className="py-20 px-4 text-white"
        style={{ background: "linear-gradient(135deg, hsl(222 47% 11%) 0%, hsl(149 55% 15%) 100%)" }}
        data-testid="section-hero-about"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            About Curious Earth
          </h1>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: "hsl(149 20% 75%)" }}>
            We believe that science is not a collection of facts but a way of seeing the world — one that reveals connections, wonder, and meaning that make life richer.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Our Mission</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-base leading-relaxed mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
              Curious Earth was founded on a simple conviction: that the natural world is staggeringly interesting, that science tells its story with extraordinary depth and beauty, and that far too little of that depth and beauty reaches general readers.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
              We are a team of working scientists and science journalists who have spent careers at the intersection of research and communication. We know the difference between how science is actually done and how it is often reported — and we have made it our mission to close that gap. Our articles are rigorously fact-checked, written by scientists who understand their fields deeply, and reviewed for accuracy before publication.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
              At the same time, we believe that scientific accuracy and great writing are not in tension. The universe is genuinely, almost offensively interesting. A star's life and death is a better story than anything written in a novel. The mechanisms of evolution are more creative than any human designer. The Earth's history is a drama spanning 4.5 billion years, full of catastrophes and recoveries, extinctions and explosions of new life. We want our readers to feel that.
            </p>
          </div>
        </section>

        {/* Why Science Matters */}
        <section className="mb-16 p-8 rounded-2xl" style={{ background: "hsl(149 55% 23% / 0.06)", border: "1px solid hsl(149 55% 23% / 0.15)" }}>
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Why Science Matters</h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
            We live in an era of extraordinary scientific achievement. In the past century, humanity has mapped the human genome, detected gravitational waves from colliding black holes a billion light-years away, eradicated smallpox, developed vaccines in under a year, and landed machines on Mars. Science has given us antibiotics, the internet, MRI scanners, and the understanding of climate change. It is the most powerful tool we have ever developed for understanding reality.
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
            Yet scientific literacy remains dangerously low in many communities. This matters enormously: in a democracy, citizens make collective decisions about climate policy, vaccine programs, genetic engineering, and artificial intelligence. Those decisions are better when they are informed by an accurate understanding of what science does and does not tell us.
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
            Beyond policy, science offers something more personal: a way of seeing the world that makes it richer. Knowing that the iron in your blood was forged in the core of a dying star doesn't diminish the wonder of being alive — it amplifies it. Knowing that the oak outside your window is in chemical communication with the fungi wrapped around its roots doesn't make the forest less magical; it makes it more so, in a deeper, more satisfying way.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            That is what we are here for. We write for the person who remembers loving science as a child and somehow lost it in a sea of jargon and textbooks. We write for the curious adult who wants to understand the world they live in. We write for the student who wonders whether the wonder they feel is something that can last a lifetime. It can. We promise.
          </p>
        </section>

        {/* Our Story Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Our Story</h2>
          <div className="space-y-6 relative">
            <div className="absolute left-8 top-0 bottom-0 w-px" style={{ background: "hsl(var(--border))" }} />
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6" data-testid={`milestone-${i}`}>
                <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white"
                  style={{ background: "hsl(149 55% 23%)" }}>
                  {m.year}
                </div>
                <div className="pt-3 pb-2">
                  <h3 className="font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{m.event}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.map((member, i) => (
              <div key={i} className="p-6 rounded-xl border bg-card" style={{ borderColor: "hsl(var(--border))" }} data-testid={`team-member-${i}`}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white mb-4"
                  style={{ background: "hsl(149 55% 23%)" }}>
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-bold text-lg mb-0.5" style={{ fontFamily: "'Playfair Display', serif" }}>{member.name}</h3>
                <div className="text-sm font-semibold mb-1" style={{ color: "hsl(var(--primary))" }}>{member.role}</div>
                <div className="text-xs mb-3 italic" style={{ color: "hsl(var(--muted-foreground))" }}>Specialty: {member.specialty}</div>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Content Standards */}
        <section className="p-8 rounded-2xl" style={{ background: "hsl(38 92% 50% / 0.06)", border: "1px solid hsl(38 92% 50% / 0.2)" }}>
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Our Content Standards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Scientific Accuracy", desc: "Every factual claim is sourced from peer-reviewed research or statements from recognized scientific authorities. We do not present contested findings as settled, and we clearly communicate scientific uncertainty." },
              { title: "Expert Authorship", desc: "Our articles are written by scientists or journalists with deep expertise in the relevant field. We believe in credentialed expertise and rigorous training." },
              { title: "Editorial Independence", desc: "Our editorial decisions are made entirely on the basis of scientific merit and reader interest. We accept no payment for coverage and have no financial relationships with the industries we cover." },
              { title: "Corrections Policy", desc: "We promptly correct factual errors when they are identified. Corrections are noted clearly within the article. We believe in transparency and accountability to our readers." },
            ].map((standard, i) => (
              <div key={i} data-testid={`standard-${i}`}>
                <h4 className="font-bold mb-2" style={{ color: "hsl(38 80% 40%)" }}>{standard.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{standard.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
