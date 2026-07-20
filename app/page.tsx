import { HeroSection } from "@/components/hero-section";
import { ServiceCard } from "@/components/service-card";
import { CTASection } from "@/components/cta-section";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { services } from "@/lib/services-data";
import {
  Shield,
  Clock,
  ThumbsUp,
  Award,
  Phone,
  Headphones,
  ClipboardCheck,
  Wrench,
  CheckCircle,
} from "lucide-react";

const whyChooseUs = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "All our technicians are fully licensed, insured, and background-checked for your peace of mind.",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description:
      "We understand urgency. Our team is available for same-day service across Dubai.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description:
      "We stand behind our work with a satisfaction guarantee on every project we complete.",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description:
      "A decade of trusted service in Dubai with thousands of happy residential and commercial clients.",
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support so you can reach us whenever you need assistance.",
  },
  {
    icon: Headphones,
    title: "Transparent Pricing",
    description:
      "No hidden charges or surprise fees. We provide clear quotes before any work begins.",
  },
];

const howItWorks = [
  {
    step: "01",
    icon: Phone,
    title: "Contact Us",
    description:
      "Call, WhatsApp, or fill out our contact form to describe your service needs.",
  },
  {
    step: "02",
    icon: ClipboardCheck,
    title: "Get a Quote",
    description:
      "We assess your requirements and provide a transparent, no-obligation quote.",
  },
  {
    step: "03",
    icon: Wrench,
    title: "We Fix It",
    description:
      "Our certified technicians arrive on time and complete the job professionally.",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "You Approve",
    description:
      "We ensure your complete satisfaction before considering the job done.",
  },
];


export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Professional Handyman & Technical Services in Dubai"
        subtitle="Smart Fixora Technical Services"
        description="From AC repair to plumbing, electrical work to deep cleaning, we deliver expert technical services across Dubai. Licensed professionals, same-day service, and 100% satisfaction guaranteed."
        backgroundImage="/images/hero-home.jpg"
        whatsappMessage="Hello, I would like to inquire about your handyman services in Dubai. Please share details."
      />

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="mb-4 inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-foreground">
              Our Services
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Expert Services for Every Need
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              We offer a comprehensive range of professional handyman and
              technical services to keep your home and office in perfect
              condition.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                shortDescription={service.shortDescription}
                cardImage={service.cardImage}
                iconName={service.icon.displayName || service.icon.name || "CircleDot"}
                whatsappMessage={service.whatsappMessage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="mb-4 inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-foreground">
              Why Choose Us
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              The Smart Fixora Difference
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              We combine expertise, reliability, and affordability to deliver
              the best service experience in Dubai.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col items-center text-center rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:border-brand/30 hover:-translate-y-1"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 transition-colors duration-300 group-hover:bg-brand">
                  <item.icon className="h-6 w-6 text-brand transition-colors duration-300 group-hover:text-brand-foreground" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="mb-4 inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-foreground">
              How It Works
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Simple Process, Outstanding Results
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Getting your property serviced is easy with Smart Fixora. Just
              follow these simple steps.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="group relative flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-8 w-8 text-brand-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="mb-4 inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-foreground">
              Testimonials
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Trusted by thousands of homeowners and businesses across Dubai.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
