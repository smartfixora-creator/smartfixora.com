import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingButtons } from "@/components/floating-buttons";
import { GoogleTagManager } from "@/components/google-tag-manager";
import { siteConfig } from "@/lib/seo"

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.defaultDescription,
  keywords: [...siteConfig.defaultKeywords],
  openGraph: {
    title: siteConfig.name,
    description:
      "Professional handyman and technical services in Dubai. Quality work guaranteed.",
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
  },
};

export const viewport: Viewport = {
  themeColor: "#F8B82A",
  width: "device-width",
  initialScale: 1,
};

const GTM_ID = "GTM-5H4T5JNL";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingButtons />
        <GoogleTagManager />
      </body>
    </html>
  );
}
