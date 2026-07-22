import { HeroSection } from "@/components/hero-section";
import { ServiceCard } from "@/components/service-card";
import { CTASection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { services } from "@/lib/services-data";
import { getPageMetadata, getPageJsonLd } from "@/lib/seo";

export const metadata = getPageMetadata("services");

export default function ServicesPage() {
  return (
    <>
      <JsonLd id="json-ld-services" data={getPageJsonLd("services")} />
      {/* Hero */}
      <HeroSection
        title="Our Professional Services"
        subtitle="What We Offer"
        description="From AC repair and plumbing to painting and deep cleaning, Smart Fixora provides a comprehensive range of professional technical services across Dubai."
        backgroundImage="/images/hero-services.jpg"
        whatsappMessage="Hello, I would like to know more about your services. Please share details."
      />

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Comprehensive Technical Solutions
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Smart Fixora Technical Services offers 15+ specialized services
              covering every aspect of property maintenance and improvement.
              Whether you need a quick repair or a complete renovation, our
              certified professionals deliver quality results on time and within
              budget.
            </p>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
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

      {/* CTA */}
      <CTASection
        title="Need a Custom Service?"
        description="Can't find what you're looking for? Contact us and we'll create a custom solution tailored to your needs."
        whatsappMessage="Hello, I need a custom service not listed on your website. Can you help?"
      />
    </>
  );
}
