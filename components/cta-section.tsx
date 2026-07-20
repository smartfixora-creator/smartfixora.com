import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/floating-buttons";

interface CTASectionProps {
  title?: string;
  description?: string;
  whatsappMessage?: string;
}

export function CTASection({
  title = "Ready to Get Started?",
  description = "Contact Smart Fixora today for a free consultation and quote. Our team is ready to help with all your technical service needs in Dubai.",
  whatsappMessage = "Hello, I would like to get a free quote for your services. Please share details.",
}: CTASectionProps) {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-secondary-foreground md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-secondary-foreground/70">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+971581289605"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-8 py-3.5 text-sm font-semibold text-brand-foreground transition-all duration-300 hover:bg-white hover:text-secondary shadow-lg hover:shadow-xl"
            >
              <Phone className="h-4 w-4" />
              Call +971 58 128 9605
            </a>
            <a
              href={`https://wa.me/971581289605?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-whatsapp-hover shadow-lg hover:shadow-xl"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
