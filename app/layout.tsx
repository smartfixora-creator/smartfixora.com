import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingButtons } from "@/components/floating-buttons";

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
  title: {
    default: "Smart Fixora Technical Services | Professional Handyman Services in Dubai",
    template: "%s | Smart Fixora Technical Services",
  },
  description:
    "Smart Fixora Technical Services offers professional handyman, AC repair, plumbing, electrical, painting, cleaning, and maintenance services in Dubai. Call +971581289605.",
  keywords: [
    "handyman Dubai",
    "technical services Dubai",
    "AC repair Dubai",
    "plumbing Dubai",
    "electrical services Dubai",
    "maintenance Dubai",
    "Smart Fixora",
  ],
  openGraph: {
    title: "Smart Fixora Technical Services",
    description:
      "Professional handyman and technical services in Dubai. Quality work guaranteed.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F8B82A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5H4T5JNL');`}
        </Script>
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5H4T5JNL"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingButtons />
      </body>
    </html>
  );
}
