import { Link } from "wouter";

const editors = [
  {
    name: "Dr. Elena Vasquez",
    role: "Astrophysics Editor",
    section: "Astronomy",
    education: "PhD in Astrophysics, Massachusetts Institute of Technology",
    bio: "Elena spent seven years as a research scientist at NASA's Jet Propulsion Laboratory, where she contributed to mission planning for several space telescopes, before turning to full-time science journalism. Her articles for Curious Earth focus on stellar evolution, cosmology, gravitational-wave astronomy, and the search for life beyond Earth. She has also contributed to Nature, Scientific American, and the New York Times Science section.",
    interests: "Stellar evolution, cosmology, exoplanets, multimessenger astronomy",
  },
  {
    name: "Dr. Marcus Chen",
    role: "Life Sciences Editor",
    section: "Biology",
    education: "PhD in Plant Biology, University of California, Davis",
    bio: "Marcus is a former professor of Plant Biology at UC Davis whose research on photosynthesis has been published in Cell and The Plant Journal. He left academia to bring rigorous, accessible science writing to a wider audience. At Curious Earth he covers everything from molecular biology and genetics to the natural history of life on Earth, with a particular eye for stories that connect cellular processes to the wider biosphere.",
    interests: "Photosynthesis, evolutionary biology, genetics, the human microbiome",
  },
  {
    name: "Dr. Sarah Petrov",
    role: "Earth Sciences Editor",
    section: "Geology",
    education: "PhD in Geophysics, ETH Zürich",
    bio: "Sarah trained as a geophysicist before moving into science communication. She has conducted fieldwork on three continents and was a contributing author for the IPCC's Working Group I on the physical science basis of climate change. Her writing emphasizes that Earth is not a static stage on which life plays out but an active participant in its own story.",
    interests: "Plate tectonics, glaciology, deep time, the rock cycle",
  },
  {
    name: "Dr. Aisha Patel",
    role: "Environmental Science Editor",
    section: "Ecology",
    education: "PhD in Ecology, University of Cambridge",
    bio: "Aisha spent over a decade conducting fieldwork in tropical and freshwater ecosystems across South Asia and East Africa before joining Curious Earth. Her work bridges academic ecology and applied conservation. She is the author of an upcoming book on the ecology of human-modified landscapes and serves on the scientific advisory boards of two international conservation organisations.",
    interests: "Conservation biology, freshwater systems, biodiversity hotspots, ecosystem services",
  },
  {
    name: "Dr. James Thornton",
    role: "Atmospheric Sciences Editor",
    section: "Weather",
    education: "PhD in Atmospheric Science, University of Washington",
    bio: "James has worked as a research meteorologist at NOAA and as a forecaster for the National Weather Service. His Curious Earth articles cover everything from the physics of thunderstorms to the global circulation of the atmosphere, with a particular focus on how weather and climate science speak to each other. He believes weather literacy is one of the most underrated forms of public-interest knowledge.",
    interests: "Severe weather, hurricanes, jet streams, climate-weather interactions",
  },
  {
    name: "Curious Earth Editorial Board",
    role: "Editorial Oversight",
    section: "All Sections",
    education: "Collective expertise of our editorial team",
    bio: "All long-form articles published on Curious Earth are reviewed by at least one section editor in addition to their author. Articles that touch on contested or rapidly evolving topics are reviewed by multiple editors. The editorial board sets policy on sourcing, corrections, conflicts of interest, and the treatment of established scientific consensus.",
    interests: "Editorial standards, scientific accuracy, public-interest science",
  },
];

export default function Authors() {
  return (
    <div>
      <section
        className="py-20 px-4 text-white"
        style={{ background: "linear-gradient(135deg, hsl(222 47% 11%) 0%, hsl(149 55% 15%) 100%)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Authors and Editors
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "hsl(149 20% 75%)" }}>
            Every article on Curious Earth is written and reviewed by working scientists and trained science journalists. Meet the people behind the words.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {editors.map((editor, i) => (
            <article
              key={i}
              className="p-6 rounded-xl border bg-card"
              style={{ borderColor: "hsl(var(--border))" }}
              data-testid={`author-card-${i}`}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white mb-4"
                style={{ background: "hsl(149 55% 23%)" }}
              >
                {editor.name.charAt(0)}
              </div>
              <h2 className="font-bold text-xl mb-0.5" style={{ fontFamily: "'Playfair Display', serif" }}>{editor.name}</h2>
              <div className="text-sm font-semibold mb-1" style={{ color: "hsl(var(--primary))" }}>{editor.role}</div>
              <div className="text-xs uppercase tracking-wide mb-3" style={{ color: "hsl(var(--muted-foreground))" }}>Section: {editor.section}</div>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "hsl(var(--muted-foreground))" }}>{editor.bio}</p>
              <div className="text-xs pt-3 mt-3 border-t" style={{ borderColor: "hsl(var(--border))" }}>
                <div className="mb-1"><strong className="text-foreground">Education:</strong> <span style={{ color: "hsl(var(--muted-foreground))" }}>{editor.education}</span></div>
                <div><strong className="text-foreground">Interests:</strong> <span style={{ color: "hsl(var(--muted-foreground))" }}>{editor.interests}</span></div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-16 p-8 rounded-2xl" style={{ background: "hsl(38 92% 50% / 0.06)", border: "1px solid hsl(38 92% 50% / 0.2)" }}>
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Want to Contribute?</h2>
          <p className="text-base leading-relaxed mb-3" style={{ color: "hsl(var(--muted-foreground))" }}>
            Curious Earth occasionally accepts pitches from working scientists and experienced science journalists for in-depth feature articles. We are particularly interested in well-sourced explainers, news features tied to recent research, and pieces that explore the human side of scientific work.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            Pitches should be sent through our <Link href="/contact" className="underline" style={{ color: "hsl(var(--primary))" }}>Contact page</Link> and should include a brief outline, a sense of length, and a few sentences on your relevant background. We respond to all serious pitches within two weeks.
          </p>
        </section>
      </div>
    </div>
  );
}
