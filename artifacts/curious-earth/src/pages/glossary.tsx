import { Link } from "wouter";

type Term = { term: string; definition: string; category: string };

const terms: Term[] = [
  { term: "Asteroid", definition: "A small, rocky or metallic body orbiting the Sun, mostly found in the asteroid belt between Mars and Jupiter.", category: "Astronomy" },
  { term: "Big Bang", definition: "The leading scientific model for the origin of the universe — an extremely hot, dense initial state from which the universe has been expanding and cooling for about 13.8 billion years.", category: "Astronomy" },
  { term: "Black Hole", definition: "A region of spacetime where gravity is so strong that nothing, not even light, can escape. Black holes form when massive stars collapse at the end of their lives.", category: "Astronomy" },
  { term: "Cosmic Microwave Background", definition: "The leftover electromagnetic radiation from the early universe, released about 380,000 years after the Big Bang and now observed as faint microwaves filling all of space.", category: "Astronomy" },
  { term: "Dark Matter", definition: "An unknown form of matter inferred from gravitational effects on galaxies and large-scale structure; it does not emit, absorb, or reflect light and accounts for about 27% of the universe's total mass-energy.", category: "Astronomy" },
  { term: "Exoplanet", definition: "A planet that orbits a star other than our own Sun. Thousands have now been confirmed and many appear to be roughly Earth-sized.", category: "Astronomy" },
  { term: "Light-year", definition: "The distance light travels in one year — about 9.5 trillion kilometers. A unit of distance, not time.", category: "Astronomy" },
  { term: "Supernova", definition: "The catastrophic explosion of a massive star at the end of its life, briefly outshining an entire galaxy and forging many of the elements heavier than iron.", category: "Astronomy" },

  { term: "Adaptation", definition: "An inherited trait that helps an organism survive and reproduce in its environment, shaped over generations by natural selection.", category: "Biology" },
  { term: "Cell", definition: "The basic structural and functional unit of all known life. Cells may be prokaryotic (no nucleus, like bacteria) or eukaryotic (with a nucleus, like plant and animal cells).", category: "Biology" },
  { term: "DNA", definition: "Deoxyribonucleic acid — the double-stranded molecule that carries the genetic instructions used by nearly all living organisms to grow, develop, and function.", category: "Biology" },
  { term: "Evolution", definition: "The change in heritable traits of biological populations over successive generations, driven by mechanisms including natural selection, mutation, and genetic drift.", category: "Biology" },
  { term: "Gene", definition: "A segment of DNA that contains instructions for building a particular protein or RNA molecule, the basic unit of heredity.", category: "Biology" },
  { term: "Mitochondria", definition: "Organelles inside almost every eukaryotic cell that produce most of the cell's energy in the form of ATP. Descended from ancient free-living bacteria.", category: "Biology" },
  { term: "Photosynthesis", definition: "The process by which plants, algae, and certain bacteria convert sunlight, water, and carbon dioxide into chemical energy stored as sugars, releasing oxygen as a byproduct.", category: "Biology" },
  { term: "Species", definition: "A group of organisms that can interbreed and produce fertile offspring; the basic unit of biological classification.", category: "Biology" },

  { term: "Crust", definition: "The outermost solid shell of the Earth, ranging from about 5 km thick under the oceans to 70 km under continents.", category: "Geology" },
  { term: "Erosion", definition: "The gradual wearing away of rock and soil by wind, water, ice, or biological activity, and its transport to a new location.", category: "Geology" },
  { term: "Fossil", definition: "Preserved remains, impressions, or traces of organisms from a past geological age, typically older than about 10,000 years.", category: "Geology" },
  { term: "Magma", definition: "Molten rock beneath the Earth's surface. When it reaches the surface it is called lava.", category: "Geology" },
  { term: "Mineral", definition: "A naturally occurring inorganic solid with a definite chemical composition and an ordered atomic structure.", category: "Geology" },
  { term: "Plate Tectonics", definition: "The scientific theory that Earth's outer shell is divided into rigid plates that move relative to one another, producing earthquakes, volcanoes, and mountain ranges at their boundaries.", category: "Geology" },
  { term: "Sediment", definition: "Solid fragments of rock or biological material deposited by wind, water, or ice; the raw material of sedimentary rock.", category: "Geology" },
  { term: "Subduction", definition: "The process by which one tectonic plate descends beneath another into the mantle, often producing volcanic arcs and deep ocean trenches.", category: "Geology" },

  { term: "Biodiversity", definition: "The variety of life — including the number of species, their genetic variation, and the variety of ecosystems they form.", category: "Ecology" },
  { term: "Biome", definition: "A large geographic region characterized by distinctive climate, vegetation, and animal life, such as tropical rainforest, tundra, or desert.", category: "Ecology" },
  { term: "Ecosystem", definition: "A community of living organisms together with the non-living components of their environment, interacting as a system.", category: "Ecology" },
  { term: "Food Web", definition: "A network of feeding relationships in an ecosystem, showing how energy and nutrients move from one organism to another.", category: "Ecology" },
  { term: "Habitat", definition: "The natural environment in which an organism lives, including all the physical and biological resources it requires.", category: "Ecology" },
  { term: "Keystone Species", definition: "A species whose impact on its ecosystem is disproportionately large relative to its abundance — its loss can dramatically alter the entire community.", category: "Ecology" },
  { term: "Pollinator", definition: "An animal — typically an insect, bird, or bat — that moves pollen between flowers, enabling plants to reproduce.", category: "Ecology" },
  { term: "Symbiosis", definition: "A close, long-term biological interaction between two or more different species, which may benefit one or both partners or, in the case of parasitism, harm one.", category: "Ecology" },

  { term: "Atmosphere", definition: "The layer of gases surrounding a planet, held in place by gravity. Earth's atmosphere is about 78% nitrogen and 21% oxygen, with traces of other gases.", category: "Weather" },
  { term: "Climate", definition: "The long-term statistical pattern of weather in a region, typically averaged over decades or longer.", category: "Weather" },
  { term: "Cyclone", definition: "A large-scale system of winds rotating around an area of low pressure. Tropical cyclones are called hurricanes or typhoons depending on the region.", category: "Weather" },
  { term: "El Niño", definition: "A periodic warming of surface waters in the central and eastern tropical Pacific that disrupts weather patterns around the world.", category: "Weather" },
  { term: "Front", definition: "The boundary between two air masses of different temperatures and densities. Cold and warm fronts produce much of the world's mid-latitude weather.", category: "Weather" },
  { term: "Greenhouse Effect", definition: "The natural warming of a planet caused by gases in its atmosphere that trap outgoing infrared radiation. Human emissions of greenhouse gases are intensifying this effect on Earth.", category: "Weather" },
  { term: "Jet Stream", definition: "Narrow, fast-flowing ribbons of air at high altitude that steer weather systems and separate air masses of very different temperatures.", category: "Weather" },
  { term: "Weather", definition: "The state of the atmosphere at a particular place and time, including temperature, humidity, wind, pressure, and precipitation.", category: "Weather" },
];

const categories = ["Astronomy", "Biology", "Geology", "Ecology", "Weather"];

export default function Glossary() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Glossary of Science Terms</h1>
      <p className="text-base mb-12" style={{ color: "hsl(var(--muted-foreground))" }}>
        Plain-language definitions for the scientific terms most often used across our articles. Bookmark this page if you find yourself hitting unfamiliar vocabulary while reading.
      </p>

      {categories.map((cat) => {
        const catTerms = terms.filter((t) => t.category === cat);
        return (
          <section key={cat} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b" style={{ fontFamily: "'Playfair Display', serif", borderColor: "hsl(var(--border))" }}>{cat}</h2>
            <dl className="space-y-5">
              {catTerms.map((t) => (
                <div key={t.term} data-testid={`term-${t.term.replace(/\s+/g, "-").toLowerCase()}`}>
                  <dt className="font-bold text-base mb-1 text-foreground">{t.term}</dt>
                  <dd className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{t.definition}</dd>
                </div>
              ))}
            </dl>
          </section>
        );
      })}

      <section className="mt-12 p-6 rounded-xl" style={{ background: "hsl(149 55% 23% / 0.06)", border: "1px solid hsl(149 55% 23% / 0.15)" }}>
        <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
          Don't see a term you wished was defined here? Suggest additions through our <Link href="/contact" className="underline" style={{ color: "hsl(var(--primary))" }}>Contact page</Link> and we will consider them for the next update of the glossary.
        </p>
      </section>
    </div>
  );
}
