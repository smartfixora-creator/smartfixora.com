import type { Metadata } from "next"
import { siteConfig, absoluteUrl } from "./site"
import {
  organizationSchema,
  pagesSeo,
  servicesSeo,
  type PageSeo,
} from "./pages"

function asSchemaArray(
  schema?: Record<string, unknown> | Record<string, unknown>[],
) {
  if (!schema) return []
  return Array.isArray(schema) ? schema : [schema]
}

/** Full JSON-LD document for a page (Organization + page schemas). */
export function buildJsonLd(
  pageSchema?: Record<string, unknown> | Record<string, unknown>[],
) {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, ...asSchemaArray(pageSchema)],
  }
}

export function buildMetadata(page: PageSeo): Metadata {
  const resolvedTitle = page.absoluteTitle
    ? { absolute: page.title }
    : page.title

  const url = absoluteUrl(page.path)
  const ogTitle = page.absoluteTitle
    ? page.title
    : `${page.title} | ${siteConfig.shortName}`

  return {
    title: resolvedTitle,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description: page.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: page.description,
    },
  }
}

export function getPageSeo<K extends keyof typeof pagesSeo>(key: K) {
  return pagesSeo[key]
}

export function getPageMetadata<K extends keyof typeof pagesSeo>(key: K) {
  return buildMetadata(pagesSeo[key])
}

export function getPageJsonLd<K extends keyof typeof pagesSeo>(key: K) {
  return buildJsonLd(pagesSeo[key].schema)
}

export function getServiceSeo(
  slug: string,
  fallback: { title: string; description: string },
) {
  const override = servicesSeo[slug] ?? {}
  const title = override.title ?? `${fallback.title} in Dubai`
  const description = override.description ?? fallback.description
  const path = `/services/${slug}`

  const page: PageSeo = {
    title,
    description,
    path,
    absoluteTitle: override.absoluteTitle,
    keywords: override.keywords,
    schema:
      override.schema ??
      ({
        "@type": "Service",
        "@id": absoluteUrl(path),
        name: title,
        description,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: { "@type": "City", name: "Dubai" },
        url: absoluteUrl(path),
      } satisfies Record<string, unknown>),
  }

  return page
}

export function getServiceMetadata(
  slug: string,
  fallback: { title: string; description: string },
) {
  return buildMetadata(getServiceSeo(slug, fallback))
}

export function getServiceJsonLd(
  slug: string,
  fallback: { title: string; description: string },
) {
  return buildJsonLd(getServiceSeo(slug, fallback).schema)
}
