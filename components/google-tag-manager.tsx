"use client"

import { useEffect } from "react"

const GTM_ID = "GTM-5H4T5JNL"

/**
 * Injects GTM only after React has mounted.
 * Avoids insertBefore races during hydration / Fast Refresh.
 */
export function GoogleTagManager() {
  useEffect(() => {
    if (typeof window === "undefined") return
    if (document.getElementById("gtm-script")) return

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js",
    })

    const script = document.createElement("script")
    script.id = "gtm-script"
    script.async = true
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
    document.head.appendChild(script)
  }, [])

  return null
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}
