import type { Article } from "./articles";

  const base = "https://images.unsplash.com/";
  const params = "?w=1600&q=70&auto=format&fit=crop";

  export const categoryImages: Record<Article["category"], { url: string; credit: string }> = {
    astronomy: {
      url: `${base}photo-1771095436222-e20a8737fcd1${params}`,
      credit: "Photo via Unsplash",
    },
    biology: {
      url: `${base}photo-1684259498786-ffaf1ec5c5e8${params}`,
      credit: "Photo via Unsplash",
    },
    geology: {
      url: `${base}photo-1519900627059-a45ee0f54da7${params}`,
      credit: "Photo via Unsplash",
    },
    ecology: {
      url: `${base}photo-1684334778995-87a4b782d6e4${params}`,
      credit: "Photo via Unsplash",
    },
    weather: {
      url: `${base}photo-1697397378805-77c511eeb9a7${params}`,
      credit: "Photo via Unsplash",
    },
  };

  export function imageForCategory(category: Article["category"]): string {
    return categoryImages[category].url;
  }

  // Per-article hero images. All URLs source from Unsplash or Pexels and were
  // verified reachable when added. Articles whose slug is not listed here fall
  // back to the category image via imageForArticle().
  export const articleImages: Record<string, string> = {
    "animal-communication": "https://images.unsplash.com/photo-1600467194706-a20a0057bcf5?w=1600&q=70&auto=format&fit=crop",
  "animal-migration": "https://images.pexels.com/photos/35327202/pexels-photo-35327202/free-photo-of-wildebeest-migration-in-african-savannah.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "atmospheric-circulation": "https://images.unsplash.com/photo-1714674972847-030816cca987?w=1600&q=70&auto=format&fit=crop",
  "big-bang-cosmology": "https://images.unsplash.com/photo-1757457236911-44c0227c886d?w=1600&q=70&auto=format&fit=crop",
  "biodiversity-hotspots": "https://images.unsplash.com/photo-1741529460022-29bcb9eb29d7?w=1600&q=70&auto=format&fit=crop",
  "black-holes": "https://images.unsplash.com/photo-1708257106465-7e2b14997ab9?w=1600&q=70&auto=format&fit=crop",
  "caves-karst": "https://images.unsplash.com/photo-1758978448392-05ce1322adf6?w=1600&q=70&auto=format&fit=crop",
  "climate-crisis": "https://images.pexels.com/photos/6144985/pexels-photo-6144985.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "clouds-and-precipitation": "https://images.unsplash.com/photo-1756872456838-fbcf24e6e53f?w=1600&q=70&auto=format&fit=crop",
  "comets-asteroids": "https://images.unsplash.com/photo-1596407746856-f90add5c0b7f?w=1600&q=70&auto=format&fit=crop",
  "coral-reefs": "https://images.pexels.com/photos/3129556/pexels-photo-3129556.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "crispr-genome-editing": "https://images.pexels.com/photos/8851556/pexels-photo-8851556.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "dark-matter-dark-energy": "https://images.unsplash.com/photo-1753826188215-6076831cab97?w=1600&q=70&auto=format&fit=crop",
  "deep-ocean": "https://images.pexels.com/photos/1439226/pexels-photo-1439226.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "dna-genetics": "https://images.pexels.com/photos/35967917/pexels-photo-35967917/free-photo-of-abstract-visual-representation-of-dna-helix.png?auto=compress&cs=tinysrgb&w=1600&q=70",
  "drought": "https://images.pexels.com/photos/4068167/pexels-photo-4068167.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "earth-atmosphere": "https://images.unsplash.com/photo-1770699196866-7633e9db8267?w=1600&q=70&auto=format&fit=crop",
  "earthquakes": "https://images.pexels.com/photos/7806176/pexels-photo-7806176.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "el-nino-la-nina": "https://images.unsplash.com/photo-1755531067026-11e5e2c314b5?w=1600&q=70&auto=format&fit=crop",
  "exoplanets": "https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?w=1600&q=70&auto=format&fit=crop",
  "fog-dew-frost": "https://images.pexels.com/photos/28561158/pexels-photo-28561158/free-photo-of-misty-mount-currie-landscape-in-british-columbia.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "food-webs": "https://images.pexels.com/photos/29730856/pexels-photo-29730856/free-photo-of-majestic-grey-wolf-in-natural-habitat.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "fossils-deep-time": "https://images.unsplash.com/photo-1627874458566-20503b954fde?w=1600&q=70&auto=format&fit=crop",
  "freshwater-ecosystems": "https://images.pexels.com/photos/516871/pexels-photo-516871.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "galaxies": "https://images.unsplash.com/photo-1750292836196-3aafd7645c08?w=1600&q=70&auto=format&fit=crop",
  "geothermal-energy": "https://images.pexels.com/photos/6703700/pexels-photo-6703700.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "glaciers-ice-sheets": "https://images.pexels.com/photos/6270193/pexels-photo-6270193.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "gravitational-waves": "https://images.unsplash.com/photo-1707057538849-f723c167324b?w=1600&q=70&auto=format&fit=crop",
  "high-low-pressure": "https://images.pexels.com/photos/20371075/pexels-photo-20371075/free-photo-of-dark-and-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "human-microbiome": "https://images.pexels.com/photos/13887557/pexels-photo-13887557.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "hurricanes": "https://images.pexels.com/photos/2260967/pexels-photo-2260967.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "ice-ages": "https://images.unsplash.com/photo-1623057896740-99f8c2f090fc?w=1600&q=70&auto=format&fit=crop",
  "immune-system": "https://images.unsplash.com/photo-1706643568695-2e0720f87881?w=1600&q=70&auto=format&fit=crop",
  "invasive-species": "https://images.unsplash.com/photo-1759604091506-3e2762052b25?w=1600&q=70&auto=format&fit=crop",
  "jet-stream": "https://images.pexels.com/photos/164172/pexels-photo-164172.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "life-cycle-of-stars": "https://images.unsplash.com/photo-1771885124792-119a9daa556b?w=1600&q=70&auto=format&fit=crop",
  "lightning-thunderstorms": "https://images.unsplash.com/photo-1690767662624-9140979a4089?w=1600&q=70&auto=format&fit=crop",
  "mass-extinction": "https://images.pexels.com/photos/17076231/pexels-photo-17076231/free-photo-of-close-up-of-a-tiger.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "meteors-meteorites": "https://images.unsplash.com/photo-1534590140231-3aff793be63a?w=1600&q=70&auto=format&fit=crop",
  "microbial-life": "https://images.pexels.com/photos/9574415/pexels-photo-9574415.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "minerals-gemstones": "https://images.unsplash.com/photo-1546608135-e5de34abc308?w=1600&q=70&auto=format&fit=crop",
  "monsoons": "https://images.pexels.com/photos/6218061/pexels-photo-6218061.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "mountain-building": "https://images.unsplash.com/photo-1645033393602-4f7623917853?w=1600&q=70&auto=format&fit=crop",
  "neutron-stars-pulsars": "https://images.pexels.com/photos/35849316/pexels-photo-35849316/free-photo-of-stunning-view-of-the-orion-nebula-in-space.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "ocean-acidification": "https://images.unsplash.com/photo-1708649290066-5f617003b93f?w=1600&q=70&auto=format&fit=crop",
  "ozone-layer": "https://images.unsplash.com/photo-1514454529242-9e4677563e7b?w=1600&q=70&auto=format&fit=crop",
  "photosynthesis": "https://images.unsplash.com/photo-1747774604739-6862a5280aab?w=1600&q=70&auto=format&fit=crop",
  "plastic-pollution": "https://images.pexels.com/photos/12492227/pexels-photo-12492227.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "plate-tectonics": "https://images.unsplash.com/photo-1567972486645-e65050df0a23?w=1600&q=70&auto=format&fit=crop",
  "polar-vortex": "https://images.pexels.com/photos/36398647/pexels-photo-36398647/free-photo-of-snowstorm-streetscape-in-new-york-city.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "pollinators": "https://images.unsplash.com/photo-1576347819574-903b60efcd69?w=1600&q=70&auto=format&fit=crop",
  "rainforests": "https://images.pexels.com/photos/11216782/pexels-photo-11216782.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "rock-cycle": "https://images.unsplash.com/photo-1759305942840-d54561f6805c?w=1600&q=70&auto=format&fit=crop",
  "science-of-sleep": "https://images.pexels.com/photos/8527653/pexels-photo-8527653.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "search-for-life": "https://images.unsplash.com/photo-1654649451086-dd75d8170a27?w=1600&q=70&auto=format&fit=crop",
  "soil-ecosystems": "https://images.unsplash.com/photo-1457530378978-8bac673b8062?w=1600&q=70&auto=format&fit=crop",
  "solar-system-tour": "https://images.unsplash.com/photo-1701486485374-4437dc2c1c1d?w=1600&q=70&auto=format&fit=crop",
  "the-brain": "https://images.unsplash.com/photo-1711409645921-ef3db0501f96?w=1600&q=70&auto=format&fit=crop",
  "the-cell": "https://images.unsplash.com/photo-1524684009724-bee13ad8305f?w=1600&q=70&auto=format&fit=crop",
  "the-moon": "https://images.unsplash.com/photo-1687468948114-61334bb8d9cf?w=1600&q=70&auto=format&fit=crop",
  "the-sun": "https://images.pexels.com/photos/29568255/pexels-photo-29568255/free-photo-of-vibrant-sunrise-with-dramatic-cloudscape.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "tornadoes": "https://images.pexels.com/photos/32637595/pexels-photo-32637595/free-photo-of-dramatic-storm-clouds-with-dark-sky.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "urban-ecology": "https://images.pexels.com/photos/32833704/pexels-photo-32833704/free-photo-of-adorable-red-fox-sitting-in-urban-garden.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "volcanoes": "https://images.pexels.com/photos/18502698/pexels-photo-18502698/free-photo-of-a-volcano-eruption-seen-above-the-clouds.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "water-cycle": "https://images.pexels.com/photos/30580949/pexels-photo-30580949/free-photo-of-scenic-winter-waterfall-in-chiavenna-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "weather-vs-climate": "https://images.pexels.com/photos/30596256/pexels-photo-30596256/free-photo-of-stunning-view-of-earth-from-space-day-and-night-contrast.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  "wetlands": "https://images.unsplash.com/photo-1760725134648-a3af3a7084b6?w=1600&q=70&auto=format&fit=crop",
  };

  export function imageForArticle(slug: string, category: Article["category"]): string {
    return articleImages[slug] ?? imageForCategory(category);
  }
  