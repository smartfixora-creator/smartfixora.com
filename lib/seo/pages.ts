/**
 * ============================================================
 * EDIT THIS FILE to update every page's SEO
 * ============================================================
 * Pattern per page:
 *   1) title  → primary search keywords for that page (~45 chars + template)
 *   2) description → supporting keywords in a natural sentence (~150–155)
 * Do NOT put phone, email, or office address in title/description.
 * Contact details stay in schema / page body only.
 */

import { siteConfig, absoluteUrl } from "./site"

export type PageSeo = {
  title: string
  description: string
  path: string
  /** If true, title is used as-is (no "| Smart Fixora…" template). */
  absoluteTitle?: boolean
  keywords?: string[]
  /** Extra JSON-LD graphs for this page (Organization is always included). */
  schema?: Record<string, unknown> | Record<string, unknown>[]
}

function serviceSchema(path: string, name: string, description: string) {
  return {
    "@type": "Service",
    "@id": absoluteUrl(path),
    name,
    description,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "Place", name: "Al Barsha" },
      { "@type": "Place", name: "Business Bay" },
    ],
    url: absoluteUrl(path),
  } satisfies Record<string, unknown>
}

export const organizationSchema = {
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/AirDuctCleaningService",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  image: absoluteUrl(siteConfig.logo),
  logo: absoluteUrl(siteConfig.logo),
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  hasMap: siteConfig.mapsUrl,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [...siteConfig.openingHours.dayOfWeek],
    opens: siteConfig.openingHours.opens,
    closes: siteConfig.openingHours.closes,
  },
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "Place", name: "Al Barsha" },
    { "@type": "Place", name: "Business Bay" },
  ],
  priceRange: "$$",
  sameAs: [...siteConfig.sameAs],
}

/** Static pages — title first, then keyword-rich description (no contact details) */
export const pagesSeo = {
  home: {
    title: siteConfig.defaultTitle,
    absoluteTitle: true,
    description: siteConfig.defaultDescription,
    path: "/",
    keywords: [...siteConfig.defaultKeywords],
    schema: {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.defaultDescription,
      publisher: { "@id": `${siteConfig.url}/#organization` },
      inLanguage: "en-AE",
    },
  },
  about: {
    title: "AC Duct Cleaning Company Al Barsha",
    description:
      "Licensed AC duct cleaning company in Al Barsha and Business Bay offering waterproofing, home maintenance, and technical services for villas and apartments across Dubai.",
    path: "/about",
    keywords: [
      "AC duct cleaning company Al Barsha",
      "licensed technical services Business Bay",
      "home maintenance company Al Barsha Dubai",
      "waterproofing company villas Dubai",
      "property maintenance Al Barsha Dubai",
    ],
    schema: {
      "@type": "AboutPage",
      "@id": absoluteUrl("/about"),
      url: absoluteUrl("/about"),
      name: "AC Duct Cleaning Company Al Barsha | Smart Fixora",
      description:
        "Licensed AC duct cleaning company in Al Barsha and Business Bay offering waterproofing, home maintenance, and technical services for villas and apartments across Dubai.",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@id": `${siteConfig.url}/#organization` },
    },
  },
  contact: {
    title: "Book AC Duct Cleaning Al Barsha Dubai",
    description:
      "Book same-day AC duct cleaning near Al Barsha, AC repair near me, waterproofing services, and home maintenance quotes for villas and apartments in Business Bay Dubai.",
    path: "/contact",
    keywords: [
      "book AC duct cleaning Al Barsha Dubai",
      "AC repair near me Al Barsha",
      "waterproofing services quote Business Bay",
      "home maintenance booking Dubai",
      "same-day technical services Al Barsha",
    ],
    schema: {
      "@type": "ContactPage",
      "@id": absoluteUrl("/contact"),
      url: absoluteUrl("/contact"),
      name: "Book AC Duct Cleaning Al Barsha Dubai | Smart Fixora",
      description:
        "Book same-day AC duct cleaning near Al Barsha, AC repair near me, waterproofing services, and home maintenance quotes for villas and apartments in Business Bay Dubai.",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      mainEntity: { "@id": `${siteConfig.url}/#organization` },
    },
  },
  services: {
    title: "Technical Services Al Barsha Dubai",
    description:
      "Technical services in Al Barsha and Dubai: AC duct cleaning, AC repair, waterproofing, AMC, plumbing, electrical, pest control, handyman, painting, deep cleaning and false ceilings.",
    path: "/services",
    keywords: [
      "technical services Al Barsha Dubai",
      "AC duct cleaning services Dubai",
      "villa waterproofing AMC Business Bay",
      "apartment plumbing electrical handyman Dubai",
      "pest control deep cleaning Al Barsha",
      "false ceiling installation Dubai offices",
    ],
    schema: {
      "@type": "CollectionPage",
      "@id": absoluteUrl("/services"),
      url: absoluteUrl("/services"),
      name: "Technical Services Al Barsha Dubai | Smart Fixora",
      description:
        "Technical services in Al Barsha and Dubai: AC duct cleaning, AC repair, waterproofing, AMC, plumbing, electrical, pest control, handyman, painting, deep cleaning and false ceilings.",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
    },
  },
  falseCeilingInstallation: {
    title: "Gypsum False Ceiling Al Barsha | Smart Fixora",
    absoluteTitle: true,
    description:
      "Gypsum false ceiling for villas in Al Barsha, POP false ceiling, suspended grid and LED cove lighting ceilings for apartments and offices in Business Bay Dubai.",
    path: "/false-ceiling-installation",
    keywords: [
      "gypsum false ceiling for villas Al Barsha",
      "POP false ceiling installation Business Bay",
      "LED cove lighting false ceiling Dubai",
      "suspended grid ceiling for offices Dubai",
      "acoustic false ceiling Dubai apartments",
    ],
    schema: serviceSchema(
      "/false-ceiling-installation",
      "Gypsum False Ceiling Al Barsha",
      "Gypsum false ceiling for villas in Al Barsha, POP false ceiling, suspended grid and LED cove lighting ceilings for apartments and offices in Business Bay Dubai.",
    ),
  },
} as const satisfies Record<string, PageSeo>

/**
 * All 16 services — each entry: keyword title + keyword description (no phone/address).
 */
export const servicesSeo: Record<
  string,
  Partial<Pick<PageSeo, "title" | "description" | "keywords" | "schema" | "absoluteTitle">>
> = {
  "ac-duct-cleaning": {
    title: "Same-Day AC Duct Cleaning Al Barsha",
    description:
      "Same-day AC duct cleaning for villas and apartments in Al Barsha and Business Bay — duct sanitization, filter cleaning and better indoor air quality across Dubai.",
    keywords: [
      "same-day AC duct cleaning Al Barsha Dubai",
      "AC duct cleaning for villas Business Bay",
      "duct sanitization apartments Dubai",
      "residential AC duct cleaning near Al Barsha",
      "commercial duct cleaning Business Bay",
    ],
    schema: serviceSchema(
      "/services/ac-duct-cleaning",
      "Same-Day AC Duct Cleaning Al Barsha",
      "Same-day AC duct cleaning for villas and apartments in Al Barsha and Business Bay — duct sanitization, filter cleaning and better indoor air quality across Dubai.",
    ),
  },
  "ac-repair-maintenance": {
    title: "AC Repair for Villas Near Al Barsha",
    description:
      "AC repair near me for villas in Al Barsha — split AC servicing, gas refill, emergency AC breakdown repair and same-day maintenance in Business Bay Dubai.",
    keywords: [
      "AC repair for villas near Al Barsha",
      "same-day AC maintenance Business Bay",
      "AC gas refill apartments Dubai",
      "emergency AC breakdown repair Dubai villas",
      "split AC servicing Al Barsha Dubai",
    ],
    schema: serviceSchema(
      "/services/ac-repair-maintenance",
      "AC Repair for Villas Near Al Barsha",
      "AC repair near me for villas in Al Barsha — split AC servicing, gas refill, emergency AC breakdown repair and same-day maintenance in Business Bay Dubai.",
    ),
  },
  "waterproofing-services": {
    title: "Roof Waterproofing Villas Business Bay",
    description:
      "Roof waterproofing for villas in Business Bay, bathroom waterproofing Al Barsha apartments, terrace balcony sealing and basement seepage protection in Dubai.",
    keywords: [
      "roof waterproofing for villas Business Bay",
      "bathroom waterproofing Al Barsha apartments",
      "terrace balcony waterproofing Dubai villas",
      "basement seepage waterproofing Dubai",
      "waterproofing services near me Dubai",
    ],
    schema: serviceSchema(
      "/services/waterproofing-services",
      "Roof Waterproofing Villas Business Bay",
      "Roof waterproofing for villas in Business Bay, bathroom waterproofing Al Barsha apartments, terrace balcony sealing and basement seepage protection in Dubai.",
    ),
  },
  "annual-maintenance-contract": {
    title: "AMC for Apartments Business Bay",
    description:
      "Annual maintenance contract for apartments in Business Bay and villa AMC packages in Al Barsha covering AC, plumbing and electrical preventive maintenance in Dubai.",
    keywords: [
      "annual maintenance contract for apartments Dubai",
      "villa AMC package Al Barsha Dubai",
      "AC plumbing electrical AMC Business Bay",
      "commercial property AMC Dubai offices",
      "full property maintenance contract Dubai",
    ],
    schema: serviceSchema(
      "/services/annual-maintenance-contract",
      "AMC for Apartments Business Bay",
      "Annual maintenance contract for apartments in Business Bay and villa AMC packages in Al Barsha covering AC, plumbing and electrical preventive maintenance in Dubai.",
    ),
  },
  "electrical-services": {
    title: "Villa Electrical Wiring Al Barsha",
    description:
      "Villa electrical wiring repair in Al Barsha, light and fan installation, electrical panel upgrade and DEWA safety inspection for apartments in Business Bay Dubai.",
    keywords: [
      "villa electrical wiring repair Al Barsha",
      "light fan installation Business Bay apartments",
      "electrical panel upgrade Dubai villas",
      "DEWA safety inspection Al Barsha Dubai",
      "outdoor landscape lighting Business Bay",
    ],
    schema: serviceSchema(
      "/services/electrical-services",
      "Villa Electrical Wiring Al Barsha",
      "Villa electrical wiring repair in Al Barsha, light and fan installation, electrical panel upgrade and DEWA safety inspection for apartments in Business Bay Dubai.",
    ),
  },
  "mold-remediation": {
    title: "Ceiling Mold Removal Villas Dubai",
    description:
      "Ceiling mold removal for villas in Dubai, mold inspection for Business Bay apartments, anti-mold treatment and dehumidification services for Al Barsha homes.",
    keywords: [
      "ceiling mold removal for villas Dubai",
      "mold inspection apartments Business Bay",
      "anti-mold treatment Al Barsha homes",
      "dehumidification services Dubai villas",
      "indoor air quality mold cleanup Dubai",
    ],
    schema: serviceSchema(
      "/services/mold-remediation",
      "Ceiling Mold Removal Villas Dubai",
      "Ceiling mold removal for villas in Dubai, mold inspection for Business Bay apartments, anti-mold treatment and dehumidification services for Al Barsha homes.",
    ),
  },
  "plumbing-services": {
    title: "Leak Detection Apartments Business Bay",
    description:
      "Leak detection for apartments in Business Bay, drain unblocking for Al Barsha villas, water heater repair and pipe replacement plumbing services across Dubai.",
    keywords: [
      "leak detection for apartments Business Bay",
      "drain unblocking Al Barsha villas Dubai",
      "water heater repair apartments Dubai",
      "pipe replacement villa plumbing Al Barsha",
      "toilet faucet installation Business Bay",
    ],
    schema: serviceSchema(
      "/services/plumbing-services",
      "Leak Detection Apartments Business Bay",
      "Leak detection for apartments in Business Bay, drain unblocking for Al Barsha villas, water heater repair and pipe replacement plumbing services across Dubai.",
    ),
  },
  "pest-control": {
    title: "Bed Bug Treatment Apartments Dubai",
    description:
      "Bed bug treatment for apartments in Dubai, termite control for Al Barsha villas, rodent control for Business Bay offices and mosquito fogging for villa gardens.",
    keywords: [
      "bed bug treatment for apartments Dubai",
      "termite control for villas Al Barsha",
      "rodent control Business Bay offices",
      "mosquito fogging villa gardens Dubai",
      "general pest control apartments Al Barsha",
    ],
    schema: serviceSchema(
      "/services/pest-control",
      "Bed Bug Treatment Apartments Dubai",
      "Bed bug treatment for apartments in Dubai, termite control for Al Barsha villas, rodent control for Business Bay offices and mosquito fogging for villa gardens.",
    ),
  },
  "handyman-services": {
    title: "IKEA Assembly Al Barsha Dubai",
    description:
      "IKEA furniture assembly in Al Barsha Dubai, TV shelf mounting, door lock repair and same-day handyman services for apartments in Business Bay.",
    keywords: [
      "IKEA furniture assembly Al Barsha Dubai",
      "TV shelf mounting Business Bay apartments",
      "door lock repair villas Al Barsha",
      "same-day handyman Business Bay Dubai",
      "curtain rod kitchen fixture install Dubai",
    ],
    schema: serviceSchema(
      "/services/handyman-services",
      "IKEA Assembly Al Barsha Dubai",
      "IKEA furniture assembly in Al Barsha Dubai, TV shelf mounting, door lock repair and same-day handyman services for apartments in Business Bay.",
    ),
  },
  "painting-services": {
    title: "Interior Painting Villas Al Barsha",
    description:
      "Interior painting for villas in Al Barsha, exterior villa painting, apartment wallpaper installation and office interior painting in Business Bay Dubai.",
    keywords: [
      "interior painting for villas Al Barsha",
      "exterior villa painting Dubai Business Bay",
      "apartment wallpaper installation Dubai",
      "office interior painting Business Bay",
      "epoxy floor painting Dubai warehouses",
    ],
    schema: serviceSchema(
      "/services/painting-services",
      "Interior Painting Villas Al Barsha",
      "Interior painting for villas in Al Barsha, exterior villa painting, apartment wallpaper installation and office interior painting in Business Bay Dubai.",
    ),
  },
  "deep-cleaning": {
    title: "Move-Out Cleaning Al Barsha Villas",
    description:
      "Move-out deep cleaning for Al Barsha villas, sofa and carpet cleaning for Business Bay apartments, post renovation cleaning and office deep cleaning in Dubai.",
    keywords: [
      "move-out deep cleaning Al Barsha villas",
      "sofa carpet cleaning Business Bay apartments",
      "post renovation cleaning Dubai villas",
      "office deep cleaning Business Bay Dubai",
      "home deep cleaning before handover Dubai",
    ],
    schema: serviceSchema(
      "/services/deep-cleaning",
      "Move-Out Cleaning Al Barsha Villas",
      "Move-out deep cleaning for Al Barsha villas, sofa and carpet cleaning for Business Bay apartments, post renovation cleaning and office deep cleaning in Dubai.",
    ),
  },
  "flooring-services": {
    title: "Marble Polishing Villas Business Bay",
    description:
      "Marble polishing for villas in Business Bay, wooden flooring installation in Al Barsha, tile grout repair and vinyl flooring for Dubai apartments and offices.",
    keywords: [
      "marble polishing for villas Business Bay",
      "wooden flooring installation Al Barsha",
      "tile grout repair Dubai apartments",
      "vinyl flooring Business Bay offices",
      "parquet flooring restoration Dubai villas",
    ],
    schema: serviceSchema(
      "/services/flooring-services",
      "Marble Polishing Villas Business Bay",
      "Marble polishing for villas in Business Bay, wooden flooring installation in Al Barsha, tile grout repair and vinyl flooring for Dubai apartments and offices.",
    ),
  },
  "swimming-pool-maintenance": {
    title: "Villa Pool Cleaning Al Barsha Dubai",
    description:
      "Villa pool cleaning in Al Barsha Dubai, swimming pool chemical balancing, pool equipment repair and residential pool maintenance for Business Bay properties.",
    keywords: [
      "villa pool cleaning Al Barsha Dubai",
      "swimming pool chemical balancing Dubai",
      "pool equipment repair Business Bay",
      "residential pool maintenance Al Barsha",
      "pool leak repair Dubai villas",
    ],
    schema: serviceSchema(
      "/services/swimming-pool-maintenance",
      "Villa Pool Cleaning Al Barsha Dubai",
      "Villa pool cleaning in Al Barsha Dubai, swimming pool chemical balancing, pool equipment repair and residential pool maintenance for Business Bay properties.",
    ),
  },
  "water-tank-cleaning": {
    title: "Villa Water Tank Cleaning Al Barsha",
    description:
      "Villa water tank cleaning in Al Barsha, water tank disinfection for Business Bay buildings, residential tank inspection and municipality-compliant tank cleaning in Dubai.",
    keywords: [
      "villa water tank cleaning Al Barsha",
      "water tank disinfection Business Bay",
      "building water tank cleaning Dubai",
      "residential tank inspection Al Barsha",
      "municipality compliant tank cleaning Dubai",
    ],
    schema: serviceSchema(
      "/services/water-tank-cleaning",
      "Villa Water Tank Cleaning Al Barsha",
      "Villa water tank cleaning in Al Barsha, water tank disinfection for Business Bay buildings, residential tank inspection and municipality-compliant tank cleaning in Dubai.",
    ),
  },
  "ceiling-services": {
    title: "Gypsum Ceiling Repair Al Barsha",
    description:
      "Gypsum ceiling repair for Al Barsha villas, decorative ceiling design in Business Bay, ceiling painting and recessed lighting ceiling integration across Dubai.",
    keywords: [
      "gypsum ceiling repair Al Barsha villas",
      "decorative ceiling design Business Bay",
      "ceiling painting apartments Dubai",
      "false ceiling repair Al Barsha Dubai",
      "recessed lighting ceiling integration Dubai",
    ],
    schema: serviceSchema(
      "/services/ceiling-services",
      "Gypsum Ceiling Repair Al Barsha",
      "Gypsum ceiling repair for Al Barsha villas, decorative ceiling design in Business Bay, ceiling painting and recessed lighting ceiling integration across Dubai.",
    ),
  },
  "false-ceiling-installation": {
    title: "Gypsum False Ceiling Villas Al Barsha",
    description:
      "Gypsum false ceiling for villas in Al Barsha, POP false ceiling for Business Bay apartments, suspended grid and LED integration false ceiling for Dubai offices.",
    keywords: [
      "gypsum false ceiling for villas Al Barsha",
      "POP false ceiling Business Bay apartments",
      "suspended grid ceiling Dubai offices",
      "LED integration false ceiling Al Barsha",
      "wooden slat ceiling Business Bay Dubai",
    ],
    schema: serviceSchema(
      "/services/false-ceiling-installation",
      "Gypsum False Ceiling Villas Al Barsha",
      "Gypsum false ceiling for villas in Al Barsha, POP false ceiling for Business Bay apartments, suspended grid and LED integration false ceiling for Dubai offices.",
    ),
  },
}
