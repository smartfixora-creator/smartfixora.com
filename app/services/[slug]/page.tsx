import { notFound } from "next/navigation";
import Image from "next/image";
import { Phone, CheckCircle, Shield, Clock, Award, Star, Users } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { CTASection } from "@/components/cta-section";
import { WhatsAppIcon } from "@/components/floating-buttons";
import { JsonLd } from "@/components/json-ld";
import { services, getServiceBySlug } from "@/lib/services-data";
import { getServiceMetadata, getServiceJsonLd } from "@/lib/seo";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return getServiceMetadata(slug, {
    title: service.title,
    description: service.shortDescription,
  });
}

const whyChooseFixora = [
  {
    icon: Shield,
    title: "Licensed Professionals",
    description: "All our technicians are certified and background-checked.",
  },
  {
    icon: Clock,
    title: "On-Time Service",
    description: "We respect your time with punctual, efficient service delivery.",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Premium materials and workmanship backed by our satisfaction guarantee.",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Consistently rated 5 stars by our clients across Dubai.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "A specialized team assigned to each project for consistent quality.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    description: "Clear, upfront pricing with no hidden fees or surprises.",
  },
];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={getServiceJsonLd(slug, {
          title: service.title,
          description: service.shortDescription,
        })}
      />
      {/* Hero */}
      <HeroSection
        title={service.title}
        subtitle="Professional Service"
        description={service.shortDescription}
        backgroundImage={service.heroImage}
        whatsappMessage={service.whatsappMessage}
      />

      {/* Service Description */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              About This Service
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Services */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="mb-4 inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-foreground">
              What We Offer
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Our {service.title} Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.subServices.map((sub) => (
              <div
                key={sub.title}
                className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-brand/30 hover:-translate-y-1"
              >
                {/* Sub-service Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={sub.image}
                    alt={sub.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand shadow-md">
                    <sub.icon className="h-5 w-5 text-brand-foreground" />
                  </div>
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-bold text-card-foreground">
                    {sub.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {sub.description}
                  </p>
                  <div className="mt-5 flex gap-2">
                    <a
                      href="tel:+971581289605"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-brand px-3 py-2.5 text-xs font-semibold text-brand-foreground transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      Call
                    </a>
                    <a
                      href={`https://wa.me/971581289605?text=${encodeURIComponent(sub.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-whatsapp px-3 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-whatsapp-hover"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="mb-4 inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-foreground">
                Benefits
              </span>
              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                Benefits of Our {service.title}
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                We deliver exceptional value with every service we provide.
                Here is what you can expect when you choose Smart Fixora.
              </p>
              <ul className="mt-8 flex flex-col gap-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span className="text-sm leading-relaxed text-foreground">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 lg:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={service.heroImage || "/placeholder.svg"}
                alt={`${service.title} benefits`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-secondary/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Smart Fixora */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="mb-4 inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-foreground">
              Why Choose Us
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Why Choose Smart Fixora
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              We go above and beyond to deliver the best {service.title.toLowerCase()} experience in Dubai.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseFixora.map((item) => (
              <div
                key={item.title}
                className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-brand/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 transition-colors duration-300 group-hover:bg-brand">
                  <item.icon className="h-5 w-5 text-brand transition-colors duration-300 group-hover:text-brand-foreground" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`Need ${service.title}?`}
        description={`Contact Smart Fixora today for professional ${service.title.toLowerCase()} in Dubai. Get a free quote and same-day service.`}
        whatsappMessage={service.whatsappMessage}
      />
    </>
  );
}
