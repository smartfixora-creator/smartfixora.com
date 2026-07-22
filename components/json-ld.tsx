import { buildJsonLd } from "@/lib/seo/build-metadata"

type JsonLdProps = {
  data: ReturnType<typeof buildJsonLd> | Record<string, unknown>
  id?: string
}

/**
 * Static JSON-LD in the document (no next/script).
 * next/script can race React during hydration and cause insertBefore errors.
 */
export function JsonLd({ data, id = "page-json-ld" }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
