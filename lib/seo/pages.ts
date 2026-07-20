/**
 * ============================================================
 * EDIT THIS FILE to update every page's SEO
 * ============================================================
 * - title       → browser tab / Google title
 * - description → meta description
 * - keywords    → optional extra keywords
 * - schema      → JSON-LD (object or array of objects)
 *
 * Service pages: add/override by slug under `servicesSeo`.
 * If a service slug is missing, title/description fall back to services-data.
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

export const organizationSchema = {
  "@type": "LocalBusiness",
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
  areaServed: {
    "@type": "City",
    name: "Dubai",
  },
  priceRange: "$$",
  ...(siteConfig.sameAs.length ? { sameAs: [...siteConfig.sameAs] } : {}),
}

/** Static pages — edit titles / descriptions / schemas here */
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
    title: "About Us",
    description:
      "Learn about Smart Fixora Technical Services - your trusted partner for professional handyman and technical services in Dubai since 2014.",
    path: "/about",
    schema: {
      "@type": "AboutPage",
      "@id": absoluteUrl("/about"),
      url: absoluteUrl("/about"),
      name: "About Smart Fixora Technical Services",
      description:
        "Learn about Smart Fixora Technical Services - your trusted partner for professional handyman and technical services in Dubai since 2014.",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@id": `${siteConfig.url}/#organization` },
    },
  },
  contact: {
    title: "Contact Us",
    description:
      "Get in touch with Smart Fixora Technical Services in Dubai. Call +971581289605, email smartfixora@gmail.com, or visit our office in Business Bay.",
    path: "/contact",
    schema: {
      "@type": "ContactPage",
      "@id": absoluteUrl("/contact"),
      url: absoluteUrl("/contact"),
      name: "Contact Smart Fixora",
      description:
        "Get in touch with Smart Fixora Technical Services in Dubai. Call +971581289605, email smartfixora@gmail.com, or visit our office in Business Bay.",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      mainEntity: { "@id": `${siteConfig.url}/#organization` },
    },
  },
  services: {
    title: "Our Services",
    description:
      "Explore our comprehensive range of professional handyman and technical services in Dubai including AC repair, plumbing, electrical, painting, cleaning, and more.",
    path: "/services",
    schema: {
      "@type": "CollectionPage",
      "@id": absoluteUrl("/services"),
      url: absoluteUrl("/services"),
      name: "Our Services | Smart Fixora",
      description:
        "Explore our comprehensive range of professional handyman and technical services in Dubai including AC repair, plumbing, electrical, painting, cleaning, and more.",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
    },
  },
  falseCeilingInstallation: {
    title: "False Ceiling Installation in Dubai",
    absoluteTitle: true,
    description:
      "Professional false ceiling installation services in Dubai. Expert gypsum, POP, suspended, and decorative ceiling designs with LED integration. Licensed contractors, affordable rates, and quality workmanship.",
    path: "/false-ceiling-installation",
    keywords: [
      "false ceiling Dubai",
      "gypsum ceiling Dubai",
      "POP ceiling Dubai",
      "suspended ceiling Dubai",
    ],
    schema: {
      "@type": "Service",
      "@id": absoluteUrl("/false-ceiling-installation"),
      name: "False Ceiling Installation in Dubai",
      description:
        "Professional false ceiling installation services in Dubai. Expert gypsum, POP, suspended, and decorative ceiling designs with LED integration.",
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: { "@type": "City", name: "Dubai" },
      url: absoluteUrl("/false-ceiling-installation"),
    },
  },
} as const satisfies Record<string, PageSeo>

/**
 * Per-service SEO overrides (keyed by slug from lib/services-data.ts).
 * Leave a field out to fall back to services-data title/shortDescription.
 */
export const servicesSeo: Record<
  string,
  Partial<Pick<PageSeo, "title" | "description" | "keywords" | "schema" | "absoluteTitle">>
> = {
  // Example — edit or add any slug:
  // "ac-duct-cleaning": {
  //   title: "AC Duct Cleaning in Dubai",
  //   description: "Custom meta description…",
  //   keywords: ["AC duct cleaning Dubai"],
  //   schema: { "@type": "Service", name: "AC Duct Cleaning", … },
  // },
  "false-ceiling-installation": {
    title: "False Ceiling Installation in Dubai",
    description:
      "Expert false ceiling installation in Dubai — gypsum, POP, suspended grid, and LED-integrated designs by Smart Fixora.",
  },
}
