/** Site-wide defaults used by metadata + schema. Edit phone/address here once. */
export const siteConfig = {
  name: "Smart Fixora Technical Services L.L.C",
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
  geo: {
    latitude: 25.1815668,
    longitude: 55.2715102,
  },
  openingHours: {
    opens: "07:30",
    closes: "22:00",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  mapsUrl:
    "https://www.google.com/maps/place/Smart+Fixora+Technical+Services+L.L.C/@25.1815668,55.2715102,17z",
  sameAs: [
    "https://www.google.com/maps/place/Smart+Fixora+Technical+Services+L.L.C/@25.1815668,55.2715102,17z",
  ] as string[],
  /** Keep short so page titles stay ~60 chars in SERP tools. */
  titleTemplate: "%s | Smart Fixora",
  // Meta: keywords only — no phone/email/address in title or description
  defaultTitle: "Same-Day AC Duct Cleaning Al Barsha | Smart Fixora",
  defaultDescription:
    "Same-day AC duct cleaning for villas in Al Barsha, AC repair near me, waterproofing services, plumbing, electrical and home maintenance across Business Bay and Dubai.",
  defaultKeywords: [
    "same-day AC duct cleaning Al Barsha Dubai",
    "AC duct cleaning for villas Business Bay",
    "AC repair near me Al Barsha",
    "waterproofing services near me Dubai",
    "home maintenance Al Barsha Dubai",
    "duct cleaning near me Business Bay",
  ],
} as const

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "")
  if (!path || path === "/") return base
  return `${base}${path.startsWith("/") ? path : `/${path}`}`
}
