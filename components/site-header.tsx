"use client";

import React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { services } from "@/lib/services-data";
import { ServiceIcon } from "@/lib/service-icons";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isServicesActive = pathname.startsWith("/services");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  // Split services into 2 columns for the desktop dropdown
  const midpoint = Math.ceil(services.length / 2);
  const servicesCol1 = services.slice(0, midpoint);
  const servicesCol2 = services.slice(midpoint);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-background/80 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="block transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src="/images/logo.png"
              alt="Smart Fixora Technical Services"
              width={800}
              height={200}
              className="h-50 w-auto md:h-60"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 hover:bg-brand/10",
                  isActive(link.href)
                    ? "text-brand bg-brand/10"
                    : "text-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/services"
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 hover:bg-brand/10",
                  isServicesActive
                    ? "text-brand bg-brand/10"
                    : "text-foreground",
                )}
              >
                Services
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    isServicesOpen && "rotate-180",
                  )}
                />
              </Link>
              <div
                className={cn(
                  "absolute top-full right-0 pt-2 transition-all duration-200",
                  isServicesOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2",
                )}
              >
                <div className="w-[580px] rounded-xl border border-border bg-background p-3 shadow-xl">
                  <div className="mb-2 px-2">
                    <Link
                      href="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
                    >
                      View All Services &rarr;
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-x-2">
                    {[servicesCol1, servicesCol2].map((col, colIdx) => (
                      <div key={colIdx} className="flex flex-col">
                        {col.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className={cn(
                              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors duration-150 hover:bg-brand/10",
                              pathname === `/services/${service.slug}`
                                ? "text-brand bg-brand/10 font-medium"
                                : "text-foreground",
                            )}
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <ServiceIcon name={service.icon} className="h-4 w-4 text-brand shrink-0" />
                            <span>{service.title}</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 hover:bg-brand/10",
                isActive("/contact")
                  ? "text-brand bg-brand/10"
                  : "text-foreground",
              )}
            >
              Contact Us
            </Link>

            <a
              href="tel:+971581289605"
              className="ml-4 flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground shadow-md hover:shadow-lg"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 border-t border-border bg-background",
          isMobileMenuOpen
            ? "max-h-[85vh] overflow-y-auto"
            : "max-h-0 border-t-0",
        )}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          <Link
            href="/"
            className={cn(
              "px-4 py-3 text-sm font-medium rounded-lg hover:bg-brand/10",
              isActive("/") ? "text-brand bg-brand/10" : "text-foreground",
            )}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={cn(
              "px-4 py-3 text-sm font-medium rounded-lg hover:bg-brand/10",
              isActive("/about")
                ? "text-brand bg-brand/10"
                : "text-foreground",
            )}
          >
            About Us
          </Link>

          <div>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className={cn(
                "flex w-full items-center justify-between px-4 py-3 text-sm font-medium rounded-lg hover:bg-brand/10",
                isServicesActive
                  ? "text-brand bg-brand/10"
                  : "text-foreground",
              )}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  isMobileServicesOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "transition-all duration-300",
                isMobileServicesOpen
                  ? "max-h-[50vh] overflow-y-auto"
                  : "max-h-0 overflow-hidden",
              )}
            >
              <div className="pl-4 flex flex-col gap-0.5 py-1">
                <Link
                  href="/services"
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg hover:bg-brand/10",
                    pathname === "/services"
                      ? "text-brand bg-brand/10"
                      : "text-brand",
                  )}
                >
                  All Services
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 text-sm rounded-lg hover:bg-brand/10 hover:text-foreground",
                      pathname === `/services/${service.slug}`
                        ? "text-brand font-medium bg-brand/10"
                        : "text-muted-foreground",
                    )}
                  >
                    <ServiceIcon name={service.icon} className="h-3.5 w-3.5 text-brand shrink-0" />
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className={cn(
              "px-4 py-3 text-sm font-medium rounded-lg hover:bg-brand/10",
              isActive("/contact")
                ? "text-brand bg-brand/10"
                : "text-foreground",
            )}
          >
            Contact Us
          </Link>

          <a
            href="tel:+971581289605"
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}