import { buildJsonLd } from "@/lib/seo/build-metadata"

type JsonLdProps = {
  data: ReturnType<typeof buildJsonLd> | Record<string, unknown>
}

/** Renders a JSON-LD <script> tag for Google / rich results. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
