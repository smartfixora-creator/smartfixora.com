import React from "react"
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { services } from "@/lib/services-data";

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="mb-2">
              <Image
                src="/images/logo-white.png"
                alt="Smart Fixora Technical Services"
                width={260}
                height={65}
                className="h-14 w-auto md:h-16"
              />
            </Link>
            <p className="text-sm leading-relaxed text-secondary-foreground/70">
              Your trusted partner for professional handyman and technical
              services in Dubai. Quality work, affordable prices, and customer
              satisfaction guaranteed.
            </p>
          </div>

          {/* Services - spans 2 columns on desktop */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand">
              Our Services
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-secondary-foreground/70 transition-colors duration-200 hover:text-brand"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 transition-colors duration-200 hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+971581289605"
                  className="flex items-start gap-3 text-sm text-secondary-foreground/70 transition-colors duration-200 hover:text-brand"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  +971 58 128 9605
                </a>
              </li>
              <li>
                <a
                  href="mailto:smartfixora@gmail.com"
                  className="flex items-start gap-3 text-sm text-secondary-foreground/70 transition-colors duration-200 hover:text-brand"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  smartfixora@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-secondary-foreground/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>
                    Office No. 2010, Binary Tower,
                    <br />
                    Business Bay, Dubai
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-6 flex flex-col items-center gap-2 text-center">
          <p className="text-xs text-secondary-foreground/50">
            &copy; 2026 Smart Fixora Technical Services. All rights reserved | Developed by{" "}
            <a
              className="text-purple-500 font-bold"
              href="https://siddigital.agency"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sidd Digital Marketing Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}