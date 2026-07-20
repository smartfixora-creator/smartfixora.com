import Image from "next/image";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/floating-buttons";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  showCTAButtons?: boolean;
  whatsappMessage?: string;
}

export function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage,
  showCTAButtons = true,
  whatsappMessage = "Hello, I would like to inquire about your services. Please share details.",
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden lg:min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 py-32 lg:py-40 w-full">
        <div className="max-w-2xl">
          {subtitle && (
            <span className="mb-4 inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
              {subtitle}
            </span>
          )}
          <h1 className="text-balance text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70 md:text-lg">
              {description}
            </p>
          )}
          {showCTAButtons && (
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+971581289605"
                className="group inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-all duration-300 hover:bg-white hover:text-secondary shadow-lg hover:shadow-xl"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href={`https://wa.me/971581289605?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-whatsapp-hover shadow-lg hover:shadow-xl"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
