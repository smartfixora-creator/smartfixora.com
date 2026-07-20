import type { Metadata } from "next";
import Image from "next/image";
import { Phone, CheckCircle, Shield, Clock, Award, Star, Users, CircleDot, Layers, Zap, PaintBucket, Volume2 } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { CTASection } from "@/components/cta-section";
import { WhatsAppIcon } from "@/components/floating-buttons";

export const metadata: Metadata = {
  title: "False Ceiling Installation in Dubai | Smart Fixora Technical Services",
  description: "Professional false ceiling installation services in Dubai. Expert gypsum, POP, suspended, and decorative ceiling designs with LED integration. Licensed contractors, affordable rates, and quality workmanship.",
};

const falseCeilingServices = [
  {
    title: "Gypsum Board False Ceiling",
    description: "Custom gypsum board ceiling design and installation with smooth finishing, perfect for modern homes and offices.",
    image: "/images/sub/false-gypsum-design.jpg",
    icon: CircleDot,
    whatsappMessage: "Hello, I'm interested in Gypsum Board False Ceiling installation. Please share details and pricing.",
  },
  {
    title: "POP False Ceiling",
    description: "Traditional Plaster of Paris false ceiling with decorative molding designs for elegant interiors.",
    image: "/images/sub/false-pop-ceiling.jpg",
    icon: Layers,
    whatsappMessage: "Hello, I'm interested in POP False Ceiling services. Please share details and pricing.",
  },
  {
    title: "Grid Suspended Ceiling",
    description: "Commercial-grade suspended ceiling tiles with modular grid system, ideal for offices and commercial spaces.",
    image: "/images/sub/false-suspended-ceiling.jpg",
    icon: CircleDot,
    whatsappMessage: "Hello, I'm interested in Grid Suspended Ceiling installation. Please share details and pricing.",
  },
  {
    title: "LED Cove Lighting Integration",
    description: "False ceiling with integrated LED strip lighting, downlights, and recessed lighting for modern ambiance.",
    image: "/images/sub/false-led-integration.jpg",
    icon: Zap,
    whatsappMessage: "Hello, I'm interested in LED Cove Lighting Integration with false ceiling. Please share details and pricing.",
  },
  {
    title: "Acoustic False Ceiling",
    description: "Sound-absorbing acoustic panel ceiling for conference rooms, studios, and spaces requiring noise control.",
    image: "/images/sub/false-acoustic-ceiling.jpg",
    icon: Volume2,
    whatsappMessage: "Hello, I'm interested in Acoustic False Ceiling installation. Please share details and pricing.",
  },
  {
    title: "Wooden False Ceiling",
    description: "Premium wooden slat and panel false ceiling for elegant restaurants, lounges, and luxury residential spaces.",
    image: "/images/sub/false-wooden-ceiling.jpg",
    icon: Layers,
    whatsappMessage: "Hello, I'm interested in Wooden False Ceiling installation. Please share details and pricing.",
  },
];

const benefits = [
  "Hides electrical wiring, pipes, and ductwork",
  "Enhances aesthetic appeal of any space",
  "Improves insulation and energy efficiency",
  "Integrated lighting solutions available",
  "Reduces room height for better proportions",
  "Sound absorption and acoustic benefits",
  "Easy access to concealed services",
  "Wide variety of designs and finishes",
  "Durable and long-lasting materials",
  "Professional installation with warranty",
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Licensed Contractors",
    description: "Certified false ceiling contractors with years of experience in Dubai.",
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    description: "We respect deadlines and complete projects on schedule.",
  },
  {
    icon: Award,
    title: "Quality Materials",
    description: "Premium gypsum board, POP, and ceiling materials from trusted brands.",
  },
  {
    icon: Star,
    title: "5-Star Rated Service",
    description: "Consistently rated 5 stars by our satisfied residential and commercial clients.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled craftsmen specializing in all types of false ceiling installations.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    description: "Clear quotations with no hidden charges or surprise fees.",
  },
];

export default function FalseCeilingInstallationPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="False Ceiling Installation in Dubai"
        subtitle="Smart Fixora Technical Services"
        description="Transform your space with professional false ceiling installation. From modern gypsum designs to elegant POP ceilings, we deliver high-quality craftsmanship with integrated lighting solutions. Serving homes, offices, and commercial properties across Dubai."
        backgroundImage="/images/services/false-ceiling.jpg"
        whatsappMessage="Hello, I'm interested in False Ceiling Installation services in Dubai. Please share details and pricing."
      />

      {/* Service Description */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Expert False Ceiling Solutions for Every Space
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground">
              Smart Fixora Technical Services is your trusted partner for professional false ceiling installation in Dubai. 
              Whether you need a modern gypsum board ceiling for your villa, a suspended grid system for your office, 
              or an elegant POP ceiling with decorative details, our expert team delivers exceptional results with precision and care.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              We specialize in all types of false ceiling work including gypsum board ceilings, plaster of Paris (POP) designs, 
              suspended grid ceilings, acoustic panels, and wooden ceiling installations. Our services include complete design consultation, 
              material selection, professional installation, finishing, painting, and integrated lighting solutions with LED strips, 
              downlights, and cove lighting.
            </p>
          </div>
        </div>
      </section>

      {/* False Ceiling Services */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="mb-4 inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-foreground">
              Our Services
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Complete False Ceiling Solutions
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              From residential homes to commercial offices, we offer a comprehensive range of false ceiling installation services.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {falseCeilingServices.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-brand/30 hover:-translate-y-1"
              >
                {/* Service Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand shadow-md">
                    <service.icon className="h-5 w-5 text-brand-foreground" />
                  </div>
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-bold text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-5 flex gap-2">
                    <a
                      href="tel:+971581289605"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-brand px-3 py-2.5 text-xs font-semibold text-brand-foreground transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      Call Now
                    </a>
                    <a
                      href={`https://wa.me/971581289605?text=${encodeURIComponent(service.whatsappMessage)}`}
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
                Why Choose False Ceiling Installation?
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                False ceilings offer both aesthetic and functional benefits. Transform your space with a professionally 
                installed false ceiling that enhances beauty while providing practical advantages.
              </p>
              <ul className="mt-8 flex flex-col gap-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span className="text-sm leading-relaxed text-foreground">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/services/false-ceiling.jpg"
                alt="False ceiling installation benefits"
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
              Why Choose Smart Fixora for False Ceiling?
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              We deliver exceptional false ceiling installation services with quality materials, expert craftsmanship, and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
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

      {/* Service Areas */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-foreground">
              Service Areas
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Serving All of Dubai
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground">
              We provide professional false ceiling installation services across all areas of Dubai including Dubai Marina, 
              Downtown Dubai, Jumeirah, Business Bay, Arabian Ranches, Palm Jumeirah, JBR, JLT, Dubai Silicon Oasis, 
              International City, Deira, Bur Dubai, Al Barsha, Mirdif, and more. Whether you need false ceiling work for 
              your villa, apartment, office, restaurant, retail shop, or commercial building, Smart Fixora delivers quality 
              service anywhere in Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Install Your False Ceiling?"
        description="Contact Smart Fixora Technical Services today for professional false ceiling installation in Dubai. Get a free consultation, transparent quote, and expert craftsmanship with warranty."
        whatsappMessage="Hello, I'm interested in False Ceiling Installation services in Dubai. Please share details and pricing."
      />
    </>
  );
}
