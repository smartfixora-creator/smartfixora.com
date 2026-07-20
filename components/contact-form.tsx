"use client";

import React from "react"

import { useState, useEffect } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message from form data
    const whatsappMessage = `Hello Smart Fixora,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage: ${formData.message}`;
    window.open(
      `https://wa.me/971581289605?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  if (!mounted) {
    return <div className="flex flex-col gap-5 h-96 animate-pulse rounded-xl bg-muted" />;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-foreground"
          >
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-200 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email Address <span className="text-destructive">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-200 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            placeholder="john@example.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-foreground"
          >
            Phone Number <span className="text-destructive">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-200 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            placeholder="+971 XX XXX XXXX"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="service"
            className="text-sm font-medium text-foreground"
          >
            Service Required
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) =>
              setFormData({ ...formData, service: e.target.value })
            }
            className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors duration-200 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          >
            <option value="">Select a service</option>
            <option>AC Duct Cleaning</option>
            <option>AC Repair & Maintenance</option>
            <option>Waterproofing Services</option>
            <option>Annual Maintenance Contract</option>
            <option>Electrical Services</option>
            <option>Mold Remediation</option>
            <option>Plumbing Services</option>
            <option>Pest Control</option>
            <option>Handyman Services</option>
            <option>Painting Services</option>
            <option>Deep Cleaning</option>
            <option>Flooring Services</option>
            <option>Swimming Pool Maintenance</option>
            <option>Water Tank Cleaning</option>
            <option>Ceiling Services</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Your Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-200 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 resize-none"
          placeholder="Describe your service needs..."
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-8 py-3.5 text-sm font-semibold text-brand-foreground transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground shadow-lg hover:shadow-xl"
      >
        <Send className="h-4 w-4" />
        {isSubmitted ? "Message Sent!" : "Send via WhatsApp"}
      </button>
    </form>
  );
}
