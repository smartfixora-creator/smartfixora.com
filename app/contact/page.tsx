import { HeroSection } from "@/components/hero-section";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { getPageMetadata, getPageJsonLd } from "@/lib/seo";

export const metadata = getPageMetadata("contact");

const contactInfo = [
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    detail: "+971 58 128 9605",
    href: "tel:+971581289605",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "smartfixora@gmail.com",
    href: "mailto:smartfixora@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    detail: "Office No. 2010, Binary Tower, Business Bay, Dubai",
    href: undefined,
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Saturday - Thursday: 8:00 AM - 8:00 PM",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd id="json-ld-contact" data={getPageJsonLd("contact")} />
      {/* Hero - no CTA buttons */}
      <HeroSection
        title="Contact Us"
        subtitle="Get In Touch"
        description="We're here to help with all your technical service needs. Reach out to us and we'll get back to you within the hour."
        backgroundImage="/images/hero-contact.jpg"
        showCTAButtons={false}
      />

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-foreground">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below and we will get back to you as soon as
                possible.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground">
                Contact Information
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                You can also reach us directly using the information below.
              </p>
              <div className="mt-8 flex flex-col gap-6">
                {contactInfo.map((info) => {
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                        <info.icon className="h-5 w-5 text-brand" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {info.title}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {info.detail}
                        </p>
                      </div>
                    </div>
                  );
                  if (info.href) {
                    return (
                      <a
                        key={info.title}
                        href={info.href}
                        className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:shadow-lg hover:border-brand/30"
                      >
                        {content}
                      </a>
                    );
                  }
                  return (
                    <div
                      key={info.title}
                      className="rounded-xl border border-border bg-card p-5"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              Find Us on the Map
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Visit our office in Binary Tower, Business Bay, Dubai.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5!2d55.2640271!3d25.1874953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d3bb4198df%3A0xa2db82f588c4c7fb!2sThe%20Binary%20by%20OMNIYAT!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Smart Fixora Office Location - Binary Tower, Business Bay, Dubai"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
