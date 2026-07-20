/** Site-wide defaults used by metadata + schema. Edit phone/address here once. */
export const siteConfig = {
  name: "Smart Fixora Technical Services",
  shortName: "Smart Fixora",
  url: "https://smartfixora.com",
  phone: "+971581289605",
  phoneDisplay: "+971 58 128 9605",
  email: "smartfixora@gmail.com",
  locale: "en_AE",
  logo: "/images/logo.png",
  address: {
    street: "Office No. 2010, Binary Tower, Business Bay",
    city: "Dubai",
    region: "Dubai",
    country: "AE",
  },
  sameAs: [
    // Add social profile URLs here when available
  ] as string[],
  titleTemplate: "%s | Smart Fixora Technical Services",
  defaultTitle:
    "Smart Fixora Technical Services | Professional Handyman Services in Dubai",
  defaultDescription:
    "Smart Fixora Technical Services offers professional handyman, AC repair, plumbing, electrical, painting, cleaning, and maintenance services in Dubai. Call +971581289605.",
  defaultKeywords: [
    "handyman Dubai",
    "technical services Dubai",
    "AC repair Dubai",
    "plumbing Dubai",
    "electrical services Dubai",
    "maintenance Dubai",
    "Smart Fixora",
  ],
} as const

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "")
  if (!path || path === "/") return base
  return `${base}${path.startsWith("/") ? path : `/${path}`}`
}
