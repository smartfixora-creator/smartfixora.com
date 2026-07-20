"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Wind, Thermometer, Droplets, FileCheck, Zap, Bug, Wrench, PaintBucket, Sparkles, Layers, Waves, Container, CircleDot, ShieldCheck, Box } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { WhatsAppIcon } from "@/components/floating-buttons";

const iconMap: Record<string, LucideIcon> = {
  Wind, Thermometer, Droplets, FileCheck, Zap, Bug, Wrench, PaintBucket, Sparkles, Layers, Waves, Container, CircleDot, ShieldCheck, Box,
};

interface ServiceCardProps {
  slug: string;
  title: string;
  shortDescription: string;
  cardImage: string;
  iconName: string;
  whatsappMessage: string;
}

export function ServiceCard({ slug, title, shortDescription, cardImage, iconName, whatsappMessage }: ServiceCardProps) {
  const IconComponent = iconMap[iconName] || CircleDot;

  return (
    <Link 
      href={`/services/${slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:border-brand/30 hover:-translate-y-1 cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={cardImage || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-secondary/20 transition-opacity duration-300 group-hover:opacity-0" />
        <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand shadow-md">
          <IconComponent className="h-5 w-5 text-brand-foreground" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-card-foreground">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {shortDescription}
        </p>

        {/* Buttons */}
        <div className="mt-5 flex flex-col gap-2">
          <div className="flex gap-2">
            <a
              href="tel:+971581289605"
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-xs font-semibold text-brand-foreground transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground"
            >
              <Phone className="h-3.5 w-3.5" />
              Call
            </a>
            <a
              href={`https://wa.me/971581289605?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 flex flex-1 items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-whatsapp-hover"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              WhatsApp
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-xs font-semibold text-card-foreground transition-all duration-300 group-hover:bg-brand group-hover:text-brand-foreground group-hover:border-brand">
            Learn More
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
