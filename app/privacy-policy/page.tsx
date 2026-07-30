import { HeroSection } from "@/components/hero-section"
import { JsonLd } from "@/components/json-ld"
import { getPageMetadata, getPageJsonLd } from "@/lib/seo"
import { siteConfig } from "@/lib/seo/site"

export const metadata = getPageMetadata("privacyPolicy")

const sections = [
  {
    title: "1. Introduction",
    body: [
      `Smart Fixora Technical Services L.L.C (“Smart Fixora”, “we”, “us”, or “our”) respects your privacy. This Privacy Policy explains how we collect, use, store, and protect information when you visit ${siteConfig.url}, contact us, or use our technical and handyman services in Dubai.`,
      "By using our website or sharing your details with us, you agree to the practices described in this policy.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "We may collect information you provide directly, including:",
    ],
    bullets: [
      "Name, phone number, email address, and property location when you submit our contact form or request a quote",
      "Service preferences and message details you share by phone, WhatsApp, or email",
      "Basic technical data such as browser type, device type, and pages visited (through analytics tools)",
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: [
      "We use your information to:",
    ],
    bullets: [
      "Respond to enquiries and provide quotations",
      "Schedule, deliver, and follow up on technical services",
      "Improve our website, services, and customer experience",
      "Send service-related updates when you have contacted us",
      "Comply with applicable UAE laws and legitimate business requirements",
    ],
  },
  {
    title: "4. Cookies and Analytics",
    body: [
      "Our website may use cookies and similar technologies, including Google Tag Manager and related analytics or advertising tags, to understand how visitors use the site and to improve performance.",
      "You can control cookies through your browser settings. Disabling cookies may affect some website features.",
    ],
  },
  {
    title: "5. Sharing of Information",
    body: [
      "We do not sell your personal information. We may share limited data with trusted service providers who help us operate our business (for example, hosting, analytics, or communication tools), only as needed to provide our services.",
      "We may also disclose information when required by law or to protect our rights, safety, or property.",
    ],
  },
  {
    title: "6. Data Security and Retention",
    body: [
      "We take reasonable technical and organisational measures to protect personal information against unauthorised access, loss, or misuse.",
      "We retain your information only as long as needed for the purposes described in this policy, or as required by applicable law.",
    ],
  },
  {
    title: "7. Your Choices",
    body: [
      "You may request access to, correction of, or deletion of personal information we hold about you, subject to legal and operational requirements. To make a request, contact us using the details below.",
    ],
  },
  {
    title: "8. Third-Party Links",
    body: [
      "Our website may link to third-party sites (for example WhatsApp or Google Maps). We are not responsible for the privacy practices of those sites. Please review their policies separately.",
    ],
  },
  {
    title: "9. Children’s Privacy",
    body: [
      "Our services are intended for adults and property decision-makers. We do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page will reflect the latest revision. Continued use of our website after changes means you accept the updated policy.",
    ],
  },
  {
    title: "11. Contact Us",
    body: [
      "If you have questions about this Privacy Policy or your personal information, contact Smart Fixora Technical Services L.L.C:",
    ],
    bullets: [
      `Email: ${siteConfig.email}`,
      `Phone / WhatsApp: ${siteConfig.phoneDisplay}`,
      `Address: ${siteConfig.address.street}, ${siteConfig.address.city}, UAE`,
      `Website: ${siteConfig.url}`,
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd id="json-ld-privacy" data={getPageJsonLd("privacyPolicy")} />
      <HeroSection
        title="Privacy Policy"
        subtitle="Your Trust Matters"
        description="How Smart Fixora Technical Services L.L.C collects, uses, and protects your information when you use our website and services in Dubai."
        backgroundImage="/images/hero-about.jpg"
        showCTAButtons={false}
      />

      <section className="py-16 bg-background md:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="mb-10 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
            <span className="mb-3 inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-foreground">
              Legal
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Last updated: 30 July 2026
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              This policy applies to {siteConfig.name} and the website{" "}
              <span className="font-medium text-foreground">{siteConfig.url}</span>.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <article key={section.title} className="scroll-mt-24">
                <h2 className="text-balance text-xl font-bold text-foreground md:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-pretty text-base leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-1 flex flex-col gap-2.5 border-l-2 border-brand/40 pl-5">
                      {section.bullets.map((item) => (
                        <li
                          key={item}
                          className="text-sm leading-relaxed text-muted-foreground md:text-base"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
