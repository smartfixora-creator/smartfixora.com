import Image from "next/image";
import { HeroSection } from "@/components/hero-section";
import { CTASection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { getPageMetadata, getPageJsonLd } from "@/lib/seo";
import {
  Target,
  Eye,
  Award,
  Users,
  Building,
  CheckCircle,
  Shield,
  Clock,
  Star,
  ThumbsUp,
} from "lucide-react";

export const metadata = getPageMetadata("about");

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Projects Completed", value: "5,000+" },
  { label: "Happy Clients", value: "3,000+" },
  { label: "Expert Technicians", value: "50+" },
];

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description:
      "We never compromise on the quality of materials, tools, or workmanship in any project.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "We show up on time, every time. Our clients trust us because we keep our promises.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "We strive for excellence in every service we deliver, exceeding client expectations.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Focus",
    description:
      "Your satisfaction is our priority. We listen, adapt, and deliver to your exact needs.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd id="json-ld-about" data={getPageJsonLd("about")} />
      {/* Hero - no CTA buttons */}
      <HeroSection
        title="About Smart Fixora"
        subtitle="Who We Are"
        description="Your trusted partner for professional technical services in Dubai. Over a decade of excellence in property maintenance and improvement."
        backgroundImage="/images/hero-about.jpg"
        showCTAButtons={false}
      />

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="mb-4 inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-foreground">
                Our Story
              </span>
              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                A Decade of Trusted Service in Dubai
              </h2>
              <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground">
                Founded in 2014, Smart Fixora Technical Services has grown from
                a small team of dedicated technicians to one of Dubai&apos;s most
                trusted names in property maintenance and technical services.
                Based in the heart of Business Bay, we serve residential and
                commercial clients across all emirates.
              </p>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                Our commitment to quality, transparency, and customer
                satisfaction has earned us the trust of thousands of homeowners,
                businesses, and property managers throughout Dubai. We take pride
                in our team of certified professionals who bring expertise,
                reliability, and a customer-first approach to every job.
              </p>
            </div>
            <div className="relative h-80 lg:h-[440px] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-about.jpg"
                alt="Smart Fixora Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-secondary/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-brand md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-secondary-foreground/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Mission */}
            <div className="group rounded-2xl border border-border bg-card p-10 transition-all duration-300 hover:shadow-xl hover:border-brand/30">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand">
                <Target className="h-7 w-7 text-brand-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground">
                Our Mission
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                To provide Dubai&apos;s residents and businesses with the highest
                quality technical services at fair prices, delivered by trained
                professionals who care about their craft and your satisfaction.
                We aim to be the most trusted name in property maintenance
                across the UAE.
              </p>
            </div>

            {/* Vision */}
            <div className="group rounded-2xl border border-border bg-card p-10 transition-all duration-300 hover:shadow-xl hover:border-brand/30">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand">
                <Eye className="h-7 w-7 text-brand-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground">
                Our Vision
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                To become the leading technical services provider in the UAE,
                setting the industry standard for quality, reliability, and
                customer service. We envision a future where every property in
                Dubai has access to premium maintenance services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Trust */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Certified Experts",
                    desc: "All technicians hold relevant industry certifications.",
                  },
                  {
                    icon: Users,
                    title: "Dedicated Support",
                    desc: "24/7 customer support for all your service needs.",
                  },
                  {
                    icon: Building,
                    title: "Wide Coverage",
                    desc: "Serving all areas of Dubai and surrounding emirates.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Insured Services",
                    desc: "All work is fully insured for your protection.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-brand/30"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 transition-colors duration-300 group-hover:bg-brand">
                      <item.icon className="h-5 w-5 text-brand transition-colors duration-300 group-hover:text-brand-foreground" />
                    </div>
                    <h4 className="text-sm font-bold text-card-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="mb-4 inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-foreground">
                Experience & Trust
              </span>
              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                Built on a Foundation of Trust
              </h2>
              <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground">
                Over the past decade, we have built our reputation on a
                foundation of trust, quality, and customer-first service.
                Every technician on our team undergoes rigorous training and
                background checks before joining Smart Fixora.
              </p>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                We are fully licensed and insured, operating in compliance with
                all Dubai Municipality regulations. Our transparent pricing,
                warranty-backed workmanship, and dedication to customer
                satisfaction have made us the preferred choice for thousands
                of clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="mb-4 inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-foreground">
              Our Values
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              What Drives Us Every Day
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group flex flex-col items-center text-center rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:border-brand/30 hover:-translate-y-1"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 transition-colors duration-300 group-hover:bg-brand">
                  <value.icon className="h-6 w-6 text-brand transition-colors duration-300 group-hover:text-brand-foreground" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Let's Work Together"
        description="Ready to experience the Smart Fixora difference? Contact us today for a free consultation."
        whatsappMessage="Hello, I'd like to learn more about Smart Fixora and your services. Please share details."
      />
    </>
  );
}
