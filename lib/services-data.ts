export interface SubService {
  title: string;
  description: string;
  image: string;
  icon: string;
  whatsappMessage: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  cardImage: string;
  icon: string;
  whatsappMessage: string;
  subServices: SubService[];
  benefits: string[];
}

export const services: Service[] = [
  {
    slug: "ac-duct-cleaning",
    title: "AC Duct Cleaning",
    shortDescription:
      "Professional AC duct cleaning to improve air quality and system efficiency in your home or office.",
    description:
      "Our professional AC duct cleaning services ensure your indoor air quality is pristine and your HVAC system operates at peak efficiency. We use advanced cleaning equipment to remove dust, allergens, mold, and debris from your air ducts, helping you breathe cleaner air and reduce energy costs. Serving residential and commercial properties across Dubai.",
    heroImage: "/images/services/ac-duct-cleaning.jpg",
    cardImage: "/images/services/ac-duct-cleaning.jpg",
    icon: "Wind",
    whatsappMessage:
      "Hello, I'm interested in AC Duct Cleaning services. Please share details.",
    subServices: [
      { title: "Residential Duct Cleaning", description: "Complete duct cleaning for villas, apartments, and residential properties.", image: "/images/sub/ac-duct-residential.jpg", icon: "Wind", whatsappMessage: "Hello, I'm interested in Residential Duct Cleaning. Please share details." },
      { title: "Commercial Duct Cleaning", description: "Industrial-grade duct cleaning for offices, restaurants, and commercial spaces.", image: "/images/sub/ac-duct-commercial.jpg", icon: "Wind", whatsappMessage: "Hello, I'm interested in Commercial Duct Cleaning. Please share details." },
      { title: "Duct Sanitization", description: "Anti-bacterial and anti-fungal treatment for your AC duct system.", image: "/images/sub/ac-duct-sanitization.jpg", icon: "ShieldCheck", whatsappMessage: "Hello, I'm interested in Duct Sanitization services. Please share details." },
      { title: "Duct Inspection & Report", description: "Thorough inspection with detailed report on duct condition and recommendations.", image: "/images/sub/ac-duct-inspection.jpg", icon: "FileCheck", whatsappMessage: "Hello, I'm interested in Duct Inspection & Report. Please share details." },
      { title: "AC Filter Cleaning & Replacement", description: "Professional cleaning or replacement of AC filters for optimal air flow.", image: "/images/sub/ac-duct-filter.jpg", icon: "Wind", whatsappMessage: "Hello, I'm interested in AC Filter Cleaning & Replacement. Please share details." },
      { title: "Coil & Evaporator Cleaning", description: "Deep cleaning of AC coils and evaporators to restore cooling efficiency.", image: "/images/sub/ac-duct-coil.jpg", icon: "Thermometer", whatsappMessage: "Hello, I'm interested in Coil & Evaporator Cleaning. Please share details." },
    ],
    benefits: [
      "Improved indoor air quality",
      "Reduced allergens and pollutants",
      "Better AC efficiency and lower energy bills",
      "Extended HVAC system lifespan",
      "Elimination of unpleasant odors",
      "Healthier living and working environment",
    ],
  },
  {
    slug: "ac-repair-maintenance",
    title: "AC Repair & Maintenance",
    shortDescription:
      "Expert AC repair, installation, and maintenance services to keep your cooling systems running perfectly.",
    description:
      "Keep your air conditioning systems in top condition with our expert AC repair and maintenance services. From emergency repairs to routine servicing, our certified technicians handle all AC brands and models. We ensure your home and office stay cool and comfortable throughout Dubai's demanding climate.",
    heroImage: "/images/services/ac-repair.jpg",
    cardImage: "/images/services/ac-repair.jpg",
    icon: "Thermometer",
    whatsappMessage:
      "Hello, I'm interested in AC Repair & Maintenance services. Please share details.",
    subServices: [
      { title: "AC Repair", description: "Fast and reliable repair for all AC brands and models.", image: "/images/sub/ac-repair.jpg", icon: "Wrench", whatsappMessage: "Hello, I'm interested in AC Repair services. Please share details." },
      { title: "AC Installation", description: "Professional installation of split, window, and central AC systems.", image: "/images/sub/ac-installation.jpg", icon: "Thermometer", whatsappMessage: "Hello, I'm interested in AC Installation services. Please share details." },
      { title: "AC Servicing & Tune-up", description: "Regular servicing to maintain optimal performance and efficiency.", image: "/images/sub/ac-servicing.jpg", icon: "FileCheck", whatsappMessage: "Hello, I'm interested in AC Servicing & Tune-up. Please share details." },
      { title: "AC Gas Refilling", description: "Professional refrigerant gas top-up and leak detection services.", image: "/images/sub/ac-gas-refill.jpg", icon: "Wind", whatsappMessage: "Hello, I'm interested in AC Gas Refilling services. Please share details." },
      { title: "Thermostat Installation", description: "Smart thermostat setup and configuration for energy-efficient cooling.", image: "/images/sub/ac-thermostat.jpg", icon: "Thermometer", whatsappMessage: "Hello, I'm interested in Thermostat Installation. Please share details." },
      { title: "Emergency AC Repair", description: "24/7 emergency AC breakdown repair to restore cooling fast.", image: "/images/sub/ac-emergency.jpg", icon: "Wrench", whatsappMessage: "Hello, I'm interested in Emergency AC Repair. Please share details." },
    ],
    benefits: [
      "24/7 emergency repair service",
      "Certified and experienced technicians",
      "All major AC brands supported",
      "Affordable and transparent pricing",
      "Genuine spare parts used",
      "Warranty on all repairs",
    ],
  },
  {
    slug: "waterproofing-services",
    title: "Waterproofing Services",
    shortDescription:
      "Comprehensive waterproofing solutions for roofs, bathrooms, basements, and building exteriors.",
    description:
      "Protect your property from water damage with our comprehensive waterproofing services. We provide expert waterproofing solutions for roofs, bathrooms, basements, terraces, and building exteriors using premium materials and proven techniques. Our waterproofing ensures long-lasting protection against leaks and moisture.",
    heroImage: "/images/services/waterproofing.jpg",
    cardImage: "/images/services/waterproofing.jpg",
    icon: "Droplets",
    whatsappMessage:
      "Hello, I'm interested in Waterproofing Services. Please share details.",
    subServices: [
      { title: "Roof Waterproofing", description: "Durable waterproof coating and membrane for flat and pitched roofs.", image: "/images/sub/wp-roof.jpg", icon: "Droplets", whatsappMessage: "Hello, I'm interested in Roof Waterproofing. Please share details." },
      { title: "Bathroom Waterproofing", description: "Complete waterproofing for bathrooms, showers, and wet areas.", image: "/images/sub/wp-bathroom.jpg", icon: "Droplets", whatsappMessage: "Hello, I'm interested in Bathroom Waterproofing. Please share details." },
      { title: "Basement Waterproofing", description: "Protect basements from ground water seepage and moisture.", image: "/images/sub/wp-basement.jpg", icon: "Droplets", whatsappMessage: "Hello, I'm interested in Basement Waterproofing. Please share details." },
      { title: "Terrace & Balcony Waterproofing", description: "Seal terraces and balconies against rain and water damage.", image: "/images/sub/wp-terrace.jpg", icon: "Droplets", whatsappMessage: "Hello, I'm interested in Terrace & Balcony Waterproofing. Please share details." },
      { title: "External Wall Waterproofing", description: "Weather-resistant coating for building exteriors to prevent seepage.", image: "/images/sub/wp-wall.jpg", icon: "Droplets", whatsappMessage: "Hello, I'm interested in External Wall Waterproofing. Please share details." },
      { title: "Swimming Pool Waterproofing", description: "Specialized waterproofing for pool shells, decks, and surrounding areas.", image: "/images/sub/wp-swimming.jpg", icon: "Waves", whatsappMessage: "Hello, I'm interested in Swimming Pool Waterproofing. Please share details." },
    ],
    benefits: [
      "Premium waterproofing materials",
      "Long-lasting protection guaranteed",
      "Prevents structural damage",
      "Mold and mildew prevention",
      "Expert application techniques",
      "Suitable for all property types",
    ],
  },
  {
    slug: "annual-maintenance-contract",
    title: "Annual Maintenance Contract",
    shortDescription:
      "Hassle-free annual maintenance contracts for AC, plumbing, electrical, and general building upkeep.",
    description:
      "Our Annual Maintenance Contracts (AMC) provide complete peace of mind with scheduled maintenance for your property's AC, plumbing, electrical, and general systems. We offer customizable plans for villas, apartments, and commercial spaces, ensuring your property stays in perfect condition year-round.",
    heroImage: "/images/services/annual-maintenance.jpg",
    cardImage: "/images/services/annual-maintenance.jpg",
    icon: "FileCheck",
    whatsappMessage:
      "Hello, I'm interested in Annual Maintenance Contract services. Please share details.",
    subServices: [
      { title: "AC Maintenance Contract", description: "Regular AC servicing including filter cleaning, gas check, and repairs.", image: "/images/sub/amc-ac.jpg", icon: "Thermometer", whatsappMessage: "Hello, I'm interested in AC Maintenance Contract. Please share details." },
      { title: "Plumbing Maintenance Contract", description: "Routine plumbing inspections and maintenance for your property.", image: "/images/sub/amc-plumbing.jpg", icon: "Wrench", whatsappMessage: "Hello, I'm interested in Plumbing Maintenance Contract. Please share details." },
      { title: "Electrical Maintenance Contract", description: "Scheduled electrical system inspections and preventive maintenance.", image: "/images/sub/amc-electrical.jpg", icon: "Zap", whatsappMessage: "Hello, I'm interested in Electrical Maintenance Contract. Please share details." },
      { title: "Full Property AMC", description: "Comprehensive maintenance covering all systems in your property.", image: "/images/sub/amc-full.jpg", icon: "FileCheck", whatsappMessage: "Hello, I'm interested in Full Property AMC. Please share details." },
      { title: "Villa AMC Package", description: "Tailored annual maintenance for villas covering AC, plumbing, and electrical.", image: "/images/sub/amc-villa.jpg", icon: "FileCheck", whatsappMessage: "Hello, I'm interested in Villa AMC Package. Please share details." },
      { title: "Commercial AMC Package", description: "Business-grade maintenance contracts for offices and commercial buildings.", image: "/images/sub/amc-commercial.jpg", icon: "FileCheck", whatsappMessage: "Hello, I'm interested in Commercial AMC Package. Please share details." },
    ],
    benefits: [
      "Priority service and response",
      "Discounted repair rates",
      "Scheduled preventive maintenance",
      "Dedicated maintenance team",
      "Comprehensive coverage",
      "Cost-effective long-term solution",
    ],
  },
  {
    slug: "electrical-services",
    title: "Electrical Services",
    shortDescription:
      "Licensed electricians for installations, repairs, wiring, and safety inspections across Dubai.",
    description:
      "Our licensed electricians deliver safe and reliable electrical services for homes and businesses. From new installations and rewiring to emergency repairs and safety inspections, we handle all electrical work with precision and adherence to Dubai's electrical safety codes.",
    heroImage: "/images/services/electrical.jpg",
    cardImage: "/images/services/electrical.jpg",
    icon: "Zap",
    whatsappMessage:
      "Hello, I'm interested in Electrical Services. Please share details.",
    subServices: [
      { title: "Electrical Wiring & Rewiring", description: "New wiring installations and upgrades for residential and commercial properties.", image: "/images/sub/elec-wiring.jpg", icon: "Zap", whatsappMessage: "Hello, I'm interested in Electrical Wiring & Rewiring. Please share details." },
      { title: "Light & Fan Installation", description: "Professional installation of chandeliers, LED lights, and ceiling fans.", image: "/images/sub/elec-light.jpg", icon: "Zap", whatsappMessage: "Hello, I'm interested in Light & Fan Installation. Please share details." },
      { title: "Electrical Repair", description: "Fast troubleshooting and repair of electrical faults and issues.", image: "/images/sub/elec-repair.jpg", icon: "Wrench", whatsappMessage: "Hello, I'm interested in Electrical Repair services. Please share details." },
      { title: "Electrical Safety Inspection", description: "Complete safety audit and DEWA compliance inspection.", image: "/images/sub/elec-safety.jpg", icon: "ShieldCheck", whatsappMessage: "Hello, I'm interested in Electrical Safety Inspection. Please share details." },
      { title: "Panel Upgrade & Installation", description: "Electrical panel upgrades and new circuit breaker installations.", image: "/images/sub/elec-panel.jpg", icon: "Zap", whatsappMessage: "Hello, I'm interested in Panel Upgrade & Installation. Please share details." },
      { title: "Outdoor & Landscape Lighting", description: "Garden lighting, pathway lights, and outdoor electrical installations.", image: "/images/sub/elec-outdoor.jpg", icon: "Zap", whatsappMessage: "Hello, I'm interested in Outdoor & Landscape Lighting. Please share details." },
    ],
    benefits: [
      "Licensed and certified electricians",
      "DEWA-compliant installations",
      "Emergency electrical services",
      "Transparent pricing",
      "Safety-first approach",
      "All brands and systems supported",
    ],
  },
  {
    slug: "mold-remediation",
    title: "Mold Remediation",
    shortDescription:
      "Safe and thorough mold removal and remediation services for a healthier indoor environment.",
    description:
      "Our mold remediation services effectively identify, contain, and remove mold from your property. Using industry-approved techniques and eco-friendly products, we eliminate mold at its source and prevent future growth, protecting your health and your property's structural integrity.",
    heroImage: "/images/services/mold-remediation.jpg",
    cardImage: "/images/services/mold-remediation.jpg",
    icon: "ShieldCheck",
    whatsappMessage:
      "Hello, I'm interested in Mold Remediation services. Please share details.",
    subServices: [
      { title: "Mold Inspection & Testing", description: "Professional mold assessment and air quality testing.", image: "/images/sub/mold-inspection.jpg", icon: "FileCheck", whatsappMessage: "Hello, I'm interested in Mold Inspection & Testing. Please share details." },
      { title: "Mold Removal & Cleaning", description: "Complete mold removal from walls, ceilings, and surfaces.", image: "/images/sub/mold-removal.jpg", icon: "Sparkles", whatsappMessage: "Hello, I'm interested in Mold Removal & Cleaning. Please share details." },
      { title: "Anti-Mold Treatment", description: "Preventive treatment to stop mold from returning.", image: "/images/sub/mold-treatment.jpg", icon: "ShieldCheck", whatsappMessage: "Hello, I'm interested in Anti-Mold Treatment. Please share details." },
      { title: "Dehumidification Services", description: "Moisture control solutions to prevent mold growth.", image: "/images/sub/mold-dehumid.jpg", icon: "Wind", whatsappMessage: "Hello, I'm interested in Dehumidification Services. Please share details." },
      { title: "Air Quality Restoration", description: "HEPA filtration and air purification after mold remediation.", image: "/images/sub/mold-air.jpg", icon: "Wind", whatsappMessage: "Hello, I'm interested in Air Quality Restoration. Please share details." },
      { title: "Ceiling Mold Remediation", description: "Specialized mold removal and treatment for ceiling surfaces.", image: "/images/sub/mold-ceiling.jpg", icon: "Sparkles", whatsappMessage: "Hello, I'm interested in Ceiling Mold Remediation. Please share details." },
    ],
    benefits: [
      "Eco-friendly treatment products",
      "Certified remediation specialists",
      "Comprehensive mold assessment",
      "Prevention of recurrence",
      "Improved air quality",
      "Health hazard elimination",
    ],
  },
  {
    slug: "plumbing-services",
    title: "Plumbing Services",
    shortDescription:
      "Professional plumbing solutions including leak repair, pipe installation, and drainage services.",
    description:
      "Our expert plumbers provide comprehensive plumbing services for residential and commercial properties in Dubai. From leak detection and pipe repairs to new installations and drainage solutions, we deliver fast, reliable, and affordable plumbing services using quality materials.",
    heroImage: "/images/services/plumbing.jpg",
    cardImage: "/images/services/plumbing.jpg",
    icon: "Wrench",
    whatsappMessage:
      "Hello, I'm interested in Plumbing Services. Please share details.",
    subServices: [
      { title: "Leak Detection & Repair", description: "Advanced leak detection and professional repair services.", image: "/images/sub/plumb-leak.jpg", icon: "Droplets", whatsappMessage: "Hello, I'm interested in Leak Detection & Repair. Please share details." },
      { title: "Pipe Installation & Replacement", description: "New pipe installation and old pipe replacement services.", image: "/images/sub/plumb-pipe.jpg", icon: "Wrench", whatsappMessage: "Hello, I'm interested in Pipe Installation & Replacement. Please share details." },
      { title: "Drain Cleaning & Unblocking", description: "Professional drain cleaning for kitchens, bathrooms, and sewers.", image: "/images/sub/plumb-drain.jpg", icon: "Waves", whatsappMessage: "Hello, I'm interested in Drain Cleaning & Unblocking. Please share details." },
      { title: "Water Heater Services", description: "Installation, repair, and maintenance of water heaters.", image: "/images/sub/plumb-heater.jpg", icon: "Thermometer", whatsappMessage: "Hello, I'm interested in Water Heater Services. Please share details." },
      { title: "Faucet & Fixture Installation", description: "Installation and repair of faucets, taps, showers, and bathroom fixtures.", image: "/images/sub/plumb-faucet.jpg", icon: "Wrench", whatsappMessage: "Hello, I'm interested in Faucet & Fixture Installation. Please share details." },
      { title: "Toilet Repair & Installation", description: "Toilet repair, replacement, and new installation services.", image: "/images/sub/plumb-toilet.jpg", icon: "Wrench", whatsappMessage: "Hello, I'm interested in Toilet Repair & Installation. Please share details." },
    ],
    benefits: [
      "24/7 emergency plumbing",
      "Experienced licensed plumbers",
      "No hidden charges",
      "Quality materials and parts",
      "Fast response time",
      "Warranty on all work",
    ],
  },
  {
    slug: "pest-control",
    title: "Pest Control",
    shortDescription:
      "Effective pest control and fumigation services for homes, offices, and commercial spaces.",
    description:
      "Keep your property pest-free with our professional pest control services. We offer safe and effective treatments for cockroaches, bed bugs, termites, rodents, ants, and more. Our municipality-approved solutions are eco-friendly and safe for families and pets.",
    heroImage: "/images/services/pest-control.jpg",
    cardImage: "/images/services/pest-control.jpg",
    icon: "Bug",
    whatsappMessage:
      "Hello, I'm interested in Pest Control services. Please share details.",
    subServices: [
      { title: "General Pest Control", description: "Treatment for cockroaches, ants, silverfish, and common pests.", image: "/images/sub/pest-general.jpg", icon: "Bug", whatsappMessage: "Hello, I'm interested in General Pest Control. Please share details." },
      { title: "Bed Bug Treatment", description: "Specialized heat and chemical treatment for bed bug elimination.", image: "/images/sub/pest-bedbug.jpg", icon: "Bug", whatsappMessage: "Hello, I'm interested in Bed Bug Treatment. Please share details." },
      { title: "Termite Control", description: "Pre and post-construction termite treatment and prevention.", image: "/images/sub/pest-termite.jpg", icon: "ShieldCheck", whatsappMessage: "Hello, I'm interested in Termite Control services. Please share details." },
      { title: "Rodent Control", description: "Safe and effective rodent elimination and prevention solutions.", image: "/images/sub/pest-rodent.jpg", icon: "Bug", whatsappMessage: "Hello, I'm interested in Rodent Control services. Please share details." },
      { title: "Mosquito & Fly Control", description: "Outdoor fogging and indoor treatment for mosquitoes and flies.", image: "/images/sub/pest-mosquito.jpg", icon: "Bug", whatsappMessage: "Hello, I'm interested in Mosquito & Fly Control. Please share details." },
      { title: "Fumigation Services", description: "Full property fumigation for severe pest infestations.", image: "/images/sub/pest-fumigation.jpg", icon: "ShieldCheck", whatsappMessage: "Hello, I'm interested in Fumigation Services. Please share details." },
    ],
    benefits: [
      "Municipality-approved products",
      "Safe for families and pets",
      "Long-lasting protection",
      "Certified pest control technicians",
      "Eco-friendly solutions",
      "Follow-up visits included",
    ],
  },
  {
    slug: "handyman-services",
    title: "Handyman Services Dubai",
    shortDescription:
      "Reliable handyman services for furniture assembly, mounting, repairs, and general maintenance.",
    description:
      "Our skilled handymen handle a wide range of home and office repair and maintenance tasks. From furniture assembly and TV mounting to door repairs and general fixes, we provide reliable and affordable handyman services throughout Dubai.",
    heroImage: "/images/services/handyman.jpg",
    cardImage: "/images/services/handyman.jpg",
    icon: "Wrench",
    whatsappMessage:
      "Hello, I'm interested in Handyman Services. Please share details.",
    subServices: [
      { title: "Furniture Assembly", description: "Professional assembly of IKEA and other furniture brands.", image: "/images/sub/handy-furniture.jpg", icon: "Wrench", whatsappMessage: "Hello, I'm interested in Furniture Assembly services. Please share details." },
      { title: "TV & Shelf Mounting", description: "Secure mounting of TVs, shelves, mirrors, and artwork.", image: "/images/sub/handy-tv.jpg", icon: "Wrench", whatsappMessage: "Hello, I'm interested in TV & Shelf Mounting. Please share details." },
      { title: "Door & Lock Repair", description: "Repair and replacement of doors, locks, and hinges.", image: "/images/sub/handy-door.jpg", icon: "Wrench", whatsappMessage: "Hello, I'm interested in Door & Lock Repair. Please share details." },
      { title: "General Home Repairs", description: "Miscellaneous repairs and maintenance for your home or office.", image: "/images/sub/handy-general.jpg", icon: "Wrench", whatsappMessage: "Hello, I'm interested in General Home Repairs. Please share details." },
      { title: "Curtain & Blind Installation", description: "Professional installation of curtain rods, blinds, and window treatments.", image: "/images/sub/handy-curtain.jpg", icon: "Wrench", whatsappMessage: "Hello, I'm interested in Curtain & Blind Installation. Please share details." },
      { title: "Kitchen Fixture Repair", description: "Cabinet handle installation, hinge adjustment, and kitchen fixture repairs.", image: "/images/sub/handy-kitchen.jpg", icon: "Wrench", whatsappMessage: "Hello, I'm interested in Kitchen Fixture Repair. Please share details." },
    ],
    benefits: [
      "Multi-skilled technicians",
      "Same-day service available",
      "Affordable hourly rates",
      "Tools and materials included",
      "Professional and punctual",
      "Satisfaction guaranteed",
    ],
  },
  {
    slug: "painting-services",
    title: "Painting Services Dubai",
    shortDescription:
      "Professional interior and exterior painting services with premium paints and flawless finishes.",
    description:
      "Transform your space with our professional painting services. We deliver flawless interior and exterior painting for homes, offices, and commercial properties. Our painters use premium paints from top brands, ensuring beautiful, long-lasting finishes.",
    heroImage: "/images/services/painting.jpg",
    cardImage: "/images/services/painting.jpg",
    icon: "PaintBucket",
    whatsappMessage:
      "Hello, I'm interested in Painting Services. Please share details.",
    subServices: [
      { title: "Interior Painting", description: "Complete interior painting for homes and offices with premium finishes.", image: "/images/sub/paint-interior.jpg", icon: "PaintBucket", whatsappMessage: "Hello, I'm interested in Interior Painting services. Please share details." },
      { title: "Exterior Painting", description: "Weather-resistant exterior painting for buildings and villas.", image: "/images/sub/paint-exterior.jpg", icon: "PaintBucket", whatsappMessage: "Hello, I'm interested in Exterior Painting services. Please share details." },
      { title: "Villa & Apartment Painting", description: "Full property painting with color consultation and preparation.", image: "/images/sub/paint-villa.jpg", icon: "PaintBucket", whatsappMessage: "Hello, I'm interested in Villa & Apartment Painting. Please share details." },
      { title: "Wallpaper Installation", description: "Professional wallpaper application and removal services.", image: "/images/sub/paint-wallpaper.jpg", icon: "Layers", whatsappMessage: "Hello, I'm interested in Wallpaper Installation. Please share details." },
      { title: "Textured & Decorative Painting", description: "Faux finishes, textured walls, and artistic decorative painting.", image: "/images/sub/paint-texture.jpg", icon: "PaintBucket", whatsappMessage: "Hello, I'm interested in Textured & Decorative Painting. Please share details." },
      { title: "Epoxy Floor Coating", description: "Durable epoxy paint for garages, warehouses, and commercial floors.", image: "/images/sub/paint-epoxy.jpg", icon: "Layers", whatsappMessage: "Hello, I'm interested in Epoxy Floor Coating. Please share details." },
    ],
    benefits: [
      "Premium paint brands used",
      "Color consultation available",
      "Clean and professional work",
      "Surface preparation included",
      "Minimal disruption",
      "Warranty on workmanship",
    ],
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    shortDescription:
      "Thorough deep cleaning services for homes, offices, and move-in/move-out properties.",
    description:
      "Our deep cleaning services go beyond regular cleaning to remove built-up dirt, grime, and bacteria from every corner of your property. Ideal for move-in/move-out, post-renovation, or routine deep cleans, we use professional-grade equipment and eco-friendly products.",
    heroImage: "/images/services/deep-cleaning.jpg",
    cardImage: "/images/services/deep-cleaning.jpg",
    icon: "Sparkles",
    whatsappMessage:
      "Hello, I'm interested in Deep Cleaning services. Please share details.",
    subServices: [
      { title: "Home Deep Cleaning", description: "Comprehensive cleaning of every room including kitchen and bathrooms.", image: "/images/sub/clean-home.jpg", icon: "Sparkles", whatsappMessage: "Hello, I'm interested in Home Deep Cleaning. Please share details." },
      { title: "Office Deep Cleaning", description: "Professional cleaning for workspaces, meeting rooms, and facilities.", image: "/images/sub/clean-office.jpg", icon: "Sparkles", whatsappMessage: "Hello, I'm interested in Office Deep Cleaning. Please share details." },
      { title: "Move-in/Move-out Cleaning", description: "Thorough cleaning for property handover and new occupancy.", image: "/images/sub/clean-movein.jpg", icon: "Sparkles", whatsappMessage: "Hello, I'm interested in Move-in/Move-out Cleaning. Please share details." },
      { title: "Post-Renovation Cleaning", description: "Specialized cleaning to remove construction dust and debris.", image: "/images/sub/clean-postreno.jpg", icon: "Sparkles", whatsappMessage: "Hello, I'm interested in Post-Renovation Cleaning. Please share details." },
      { title: "Sofa & Upholstery Cleaning", description: "Professional steam cleaning for sofas, chairs, and upholstered furniture.", image: "/images/sub/clean-sofa.jpg", icon: "Sparkles", whatsappMessage: "Hello, I'm interested in Sofa & Upholstery Cleaning. Please share details." },
      { title: "Carpet Deep Cleaning", description: "Hot water extraction and deep steam cleaning for carpets and rugs.", image: "/images/sub/clean-carpet.jpg", icon: "Sparkles", whatsappMessage: "Hello, I'm interested in Carpet Deep Cleaning. Please share details." },
    ],
    benefits: [
      "Eco-friendly cleaning products",
      "Professional-grade equipment",
      "Trained and vetted cleaners",
      "Customizable cleaning packages",
      "Same-day service available",
      "100% satisfaction guarantee",
    ],
  },
  {
    slug: "flooring-services",
    title: "Flooring Services Dubai",
    shortDescription:
      "Expert flooring installation, repair, and polishing for tile, wood, vinyl, and marble floors.",
    description:
      "We provide expert flooring solutions including installation, repair, and polishing for all types of flooring. Whether you need hardwood, tiles, vinyl, marble, or parquet, our skilled flooring specialists deliver beautiful and durable results.",
    heroImage: "/images/services/flooring.jpg",
    cardImage: "/images/services/flooring.jpg",
    icon: "Layers",
    whatsappMessage:
      "Hello, I'm interested in Flooring Services. Please share details.",
    subServices: [
      { title: "Tile Installation", description: "Professional installation of ceramic, porcelain, and natural stone tiles.", image: "/images/sub/floor-tile.jpg", icon: "Layers", whatsappMessage: "Hello, I'm interested in Tile Installation. Please share details." },
      { title: "Wooden Flooring", description: "Hardwood, engineered, and parquet flooring installation.", image: "/images/sub/floor-wood.jpg", icon: "Layers", whatsappMessage: "Hello, I'm interested in Wooden Flooring services. Please share details." },
      { title: "Marble Polishing", description: "Restore the shine and beauty of your marble floors.", image: "/images/sub/floor-marble.jpg", icon: "Sparkles", whatsappMessage: "Hello, I'm interested in Marble Polishing services. Please share details." },
      { title: "Vinyl & Laminate Flooring", description: "Affordable and stylish vinyl and laminate installation.", image: "/images/sub/floor-vinyl.jpg", icon: "Layers", whatsappMessage: "Hello, I'm interested in Vinyl & Laminate Flooring. Please share details." },
      { title: "Floor Repair & Restoration", description: "Fix damaged tiles, wood, and flooring with expert restoration.", image: "/images/sub/floor-repair.jpg", icon: "Wrench", whatsappMessage: "Hello, I'm interested in Floor Repair & Restoration. Please share details." },
      { title: "Grouting & Re-grouting", description: "Refresh old grout and apply new grout for a clean, sealed finish.", image: "/images/sub/floor-grout.jpg", icon: "Layers", whatsappMessage: "Hello, I'm interested in Grouting & Re-grouting. Please share details." },
    ],
    benefits: [
      "Wide range of flooring options",
      "Expert installation",
      "Competitive pricing",
      "Subfloor preparation included",
      "Durable and long-lasting results",
      "Free consultation and quote",
    ],
  },
  {
    slug: "swimming-pool-maintenance",
    title: "Swimming Pool Maintenance",
    shortDescription:
      "Complete swimming pool cleaning, maintenance, and repair services for residential and commercial pools.",
    description:
      "Keep your swimming pool crystal clear and safe with our comprehensive pool maintenance services. We offer regular cleaning, chemical balancing, equipment repair, and deep cleaning for residential and commercial pools across Dubai.",
    heroImage: "/images/services/swimming-pool.jpg",
    cardImage: "/images/services/swimming-pool.jpg",
    icon: "Waves",
    whatsappMessage:
      "Hello, I'm interested in Swimming Pool Maintenance services. Please share details.",
    subServices: [
      { title: "Pool Cleaning", description: "Regular cleaning including skimming, vacuuming, and filter cleaning.", image: "/images/sub/pool-cleaning.jpg", icon: "Sparkles", whatsappMessage: "Hello, I'm interested in Pool Cleaning services. Please share details." },
      { title: "Chemical Balancing", description: "Water testing and chemical treatment for safe swimming conditions.", image: "/images/sub/pool-chemical.jpg", icon: "Droplets", whatsappMessage: "Hello, I'm interested in Pool Chemical Balancing. Please share details." },
      { title: "Pool Equipment Repair", description: "Repair and maintenance of pumps, filters, and heating systems.", image: "/images/sub/pool-equipment.jpg", icon: "Wrench", whatsappMessage: "Hello, I'm interested in Pool Equipment Repair. Please share details." },
      { title: "Pool Renovation", description: "Retiling, resurfacing, and complete pool renovation services.", image: "/images/sub/pool-renovation.jpg", icon: "Waves", whatsappMessage: "Hello, I'm interested in Pool Renovation services. Please share details." },
      { title: "Pool Heating Installation", description: "Solar and electric pool heating system installation and repair.", image: "/images/sub/pool-heating.jpg", icon: "Thermometer", whatsappMessage: "Hello, I'm interested in Pool Heating Installation. Please share details." },
      { title: "Pool Leak Detection & Repair", description: "Electronic leak detection and professional pool leak repairs.", image: "/images/sub/pool-leak.jpg", icon: "Droplets", whatsappMessage: "Hello, I'm interested in Pool Leak Detection & Repair. Please share details." },
    ],
    benefits: [
      "Certified pool technicians",
      "Regular and on-demand services",
      "Chemical and supply management",
      "Equipment troubleshooting",
      "Transparent service reports",
      "Competitive monthly plans",
    ],
  },
  {
    slug: "water-tank-cleaning",
    title: "Water Tank Cleaning",
    shortDescription:
      "Hygienic water tank cleaning and disinfection services to ensure safe and clean water supply.",
    description:
      "Ensure your water supply is safe and hygienic with our professional water tank cleaning services. We clean, disinfect, and inspect water tanks for villas, buildings, and commercial properties, meeting Dubai Municipality standards for water hygiene.",
    heroImage: "/images/services/water-tank.jpg",
    cardImage: "/images/services/water-tank.jpg",
    icon: "Container",
    whatsappMessage:
      "Hello, I'm interested in Water Tank Cleaning services. Please share details.",
    subServices: [
      { title: "Residential Tank Cleaning", description: "Complete cleaning and disinfection of home water tanks.", image: "/images/sub/tank-residential.jpg", icon: "Container", whatsappMessage: "Hello, I'm interested in Residential Tank Cleaning. Please share details." },
      { title: "Commercial Tank Cleaning", description: "Large-scale water tank cleaning for buildings and facilities.", image: "/images/sub/tank-commercial.jpg", icon: "Container", whatsappMessage: "Hello, I'm interested in Commercial Tank Cleaning. Please share details." },
      { title: "Tank Disinfection", description: "Professional anti-bacterial treatment for water safety.", image: "/images/sub/tank-disinfection.jpg", icon: "ShieldCheck", whatsappMessage: "Hello, I'm interested in Tank Disinfection services. Please share details." },
      { title: "Tank Inspection & Report", description: "Detailed inspection with water quality testing and report.", image: "/images/sub/tank-inspection.jpg", icon: "FileCheck", whatsappMessage: "Hello, I'm interested in Tank Inspection & Report. Please share details." },
      { title: "Tank Repair & Sealing", description: "Fix cracks, leaks, and seal water tanks for long-lasting use.", image: "/images/sub/tank-repair.jpg", icon: "Wrench", whatsappMessage: "Hello, I'm interested in Tank Repair & Sealing. Please share details." },
      { title: "Water Filtration Installation", description: "UV purification and filtration system installation for clean water.", image: "/images/sub/tank-filter.jpg", icon: "Droplets", whatsappMessage: "Hello, I'm interested in Water Filtration Installation. Please share details." },
    ],
    benefits: [
      "Municipality-compliant service",
      "Certified cleaning products",
      "Water quality testing included",
      "Detailed service report",
      "Scheduled maintenance plans",
      "Safe and hygienic process",
    ],
  },
  {
    slug: "ceiling-services",
    title: "Ceiling Services",
    shortDescription:
      "Professional ceiling installation, repair, and design services including gypsum, false ceilings, and more.",
    description:
      "From gypsum board installation to false ceiling design and repair, our ceiling services transform your space with elegance and functionality. We offer a variety of ceiling solutions for homes, offices, and commercial spaces, including decorative, acoustic, and suspended ceilings.",
    heroImage: "/images/services/ceiling.jpg",
    cardImage: "/images/services/ceiling.jpg",
    icon: "CircleDot",
    whatsappMessage:
      "Hello, I'm interested in Ceiling Services. Please share details.",
    subServices: [
      { title: "Gypsum Ceiling Installation", description: "Custom gypsum board ceiling design and installation.", image: "/images/sub/ceil-gypsum.jpg", icon: "CircleDot", whatsappMessage: "Hello, I'm interested in Gypsum Ceiling Installation. Please share details." },
      { title: "False Ceiling Work", description: "Suspended and drop ceiling installation for modern interiors.", image: "/images/sub/ceil-false.jpg", icon: "CircleDot", whatsappMessage: "Hello, I'm interested in False Ceiling Work. Please share details." },
      { title: "Ceiling Repair & Patching", description: "Repair cracks, water damage, and other ceiling issues.", image: "/images/sub/ceil-repair.jpg", icon: "Wrench", whatsappMessage: "Hello, I'm interested in Ceiling Repair & Patching. Please share details." },
      { title: "Ceiling Painting & Finishing", description: "Professional ceiling painting with smooth, premium finishes.", image: "/images/sub/ceil-painting.jpg", icon: "PaintBucket", whatsappMessage: "Hello, I'm interested in Ceiling Painting & Finishing. Please share details." },
      { title: "Decorative Ceiling Design", description: "Ornamental and artistic ceiling designs with elegant curves and lighting.", image: "/images/sub/ceil-decorative.jpg", icon: "CircleDot", whatsappMessage: "Hello, I'm interested in Decorative Ceiling Design. Please share details." },
      { title: "Ceiling Light Integration", description: "Recessed downlights, cove lighting, and LED strip ceiling integration.", image: "/images/sub/ceil-lighting.jpg", icon: "Zap", whatsappMessage: "Hello, I'm interested in Ceiling Light Integration. Please share details." },
    ],
    benefits: [
      "Custom design options",
      "High-quality materials",
      "Experienced craftsmen",
      "Clean and efficient installation",
      "Lighting integration available",
      "Affordable pricing",
    ],
  },
  {
    slug: "false-ceiling-installation",
    title: "False Ceiling Installation",
    shortDescription:
      "Expert false ceiling installation services including gypsum, POP, suspended grid, and modern ceiling designs.",
    description:
      "Transform your space with professional false ceiling installation. We specialize in gypsum board ceilings, POP designs, suspended grid systems, acoustic panels, LED integration, and wooden slat ceilings. Our expert craftsmen deliver elegant, functional ceiling solutions for residential and commercial properties across Dubai.",
    heroImage: "/images/services/false-ceiling.jpg",
    cardImage: "/images/services/false-ceiling-card.jpg",
    icon: "Box",
    whatsappMessage:
      "Hello, I'm interested in False Ceiling Installation services. Please share details.",
    subServices: [
      { title: "Gypsum False Ceiling", description: "Custom gypsum board false ceiling with modern designs and recessed lighting.", image: "/images/sub/false-gypsum-design.jpg", icon: "Box", whatsappMessage: "Hello, I'm interested in Gypsum False Ceiling installation. Please share details." },
      { title: "POP False Ceiling", description: "Decorative Plaster of Paris false ceiling with ornamental molding and designs.", image: "/images/sub/false-pop-ceiling.jpg", icon: "Box", whatsappMessage: "Hello, I'm interested in POP False Ceiling installation. Please share details." },
      { title: "Suspended Grid Ceiling", description: "Commercial grid suspended ceiling with tiles for offices and facilities.", image: "/images/sub/false-suspended-ceiling.jpg", icon: "Box", whatsappMessage: "Hello, I'm interested in Suspended Grid Ceiling installation. Please share details." },
      { title: "LED Integration Ceiling", description: "Modern false ceiling with integrated LED cove lighting and ambient illumination.", image: "/images/sub/false-led-integration.jpg", icon: "Zap", whatsappMessage: "Hello, I'm interested in LED Integration Ceiling. Please share details." },
      { title: "Acoustic False Ceiling", description: "Sound-absorbing acoustic panel ceiling for studios and meeting rooms.", image: "/images/sub/false-acoustic-ceiling.jpg", icon: "ShieldCheck", whatsappMessage: "Hello, I'm interested in Acoustic False Ceiling. Please share details." },
      { title: "Wooden Slat Ceiling", description: "Elegant wooden slat false ceiling for contemporary commercial and hospitality spaces.", image: "/images/sub/false-wooden-ceiling.jpg", icon: "Layers", whatsappMessage: "Hello, I'm interested in Wooden Slat Ceiling installation. Please share details." },
    ],
    benefits: [
      "Premium materials and finishes",
      "Custom designs tailored to your space",
      "Expert installation team",
      "Integrated lighting solutions",
      "Enhanced aesthetics and property value",
      "Conceals wiring and ductwork",
      "Improved acoustics and insulation",
      "Fast and clean installation",
      "Warranty on workmanship",
      "Suitable for all property types",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
