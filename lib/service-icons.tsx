import {
  Wind,
  Thermometer,
  Droplets,
  FileCheck,
  Zap,
  Bug,
  Wrench,
  PaintBucket,
  Sparkles,
  Layers,
  Waves,
  Container,
  CircleDot,
  ShieldCheck,
  Box,
  type LucideIcon,
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  Wind,
  Thermometer,
  Droplets,
  FileCheck,
  Zap,
  Bug,
  Wrench,
  PaintBucket,
  Sparkles,
  Layers,
  Waves,
  Container,
  CircleDot,
  ShieldCheck,
  Box,
}

/** Resolve a lucide icon by name — keeps services-data free of component imports. */
export function getServiceIcon(name: string): LucideIcon {
  return iconMap[name] || CircleDot
}

export function ServiceIcon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Icon = getServiceIcon(name)
  return <Icon className={className} />
}
