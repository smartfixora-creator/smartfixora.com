"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Ahmed K.",
    role: "Villa Owner, Arabian Ranches",
    rating: 5,
    image: "/images/clients/ahmed.jpg",
    text: "Smart Fixora handled our complete villa maintenance for over a year now. Their AC repair and plumbing teams are exceptional. Highly recommended!",
  },
  {
    name: "Sarah M.",
    role: "Office Manager, Business Bay",
    rating: 5,
    image: "/images/clients/sarah.jpg",
    text: "We signed an AMC with Smart Fixora for our office. Their response time is incredible and the quality of work is consistently high. Great team!",
  },
  {
    name: "Rajesh P.",
    role: "Apartment Owner, Dubai Marina",
    rating: 5,
    image: "/images/clients/rajesh.jpg",
    text: "From painting to deep cleaning, Smart Fixora has been our go-to for all home services. Professional, punctual, and fairly priced. Five stars!",
  },
  {
    name: "Fatima A.",
    role: "Homeowner, Jumeirah Village",
    rating: 5,
    image: "/images/clients/fatima.jpg",
    text: "I called Smart Fixora for an emergency plumbing issue late at night, and they had someone at my door within an hour. The technician was polite, efficient, and resolved the problem quickly. Outstanding service!",
  },
  {
    name: "James W.",
    role: "Property Manager, Downtown Dubai",
    rating: 5,
    image: "/images/clients/james.jpg",
    text: "Managing multiple properties in Downtown Dubai requires a reliable maintenance partner. Smart Fixora has been that partner for two years. Their electrical and AC teams are top-notch and always deliver on time.",
  },
  {
    name: "Priya S.",
    role: "Restaurant Owner, JLT",
    rating: 5,
    image: "/images/clients/priya.jpg",
    text: "We needed a full deep cleaning and pest control for our restaurant before a health inspection. Smart Fixora completed everything in one day with impeccable results. Truly professional service!",
  },
];

const GAP = 24; // gap-6 = 24px

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const totalSlides = testimonials.length;
  const maxIndex = totalSlides - visibleCount;

  useEffect(() => {
    const getCount = () => {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    };
    const handleResize = () => {
      const newCount = getCount();
      setVisibleCount(newCount);
      setCurrentIndex((prev) => Math.min(prev, testimonials.length - newCount));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 600);
  }, [maxIndex, isTransitioning]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsTransitioning(false), 600);
  }, [maxIndex, isTransitioning]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(Math.min(index, maxIndex));
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [maxIndex, isTransitioning],
  );

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  // Calculate card width as a percentage: (100% - totalGaps) / visibleCount
  // translateX = -(currentIndex * (cardWidth + gap))
  const cardWidthPercent = `calc((100% - ${GAP * (visibleCount - 1)}px) / ${visibleCount})`;
  const translateX = `calc(-${currentIndex} * (((100% - ${GAP * (visibleCount - 1)}px) / ${visibleCount}) + ${GAP}px))`;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Sliding track */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-[600ms] ease-in-out"
          style={{
            transform: `translateX(${translateX})`,
            gap: `${GAP}px`,
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex flex-col rounded-xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-lg hover:border-brand/30"
              style={{ width: cardWidthPercent }}
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand text-brand" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover border-2 border-brand/30"
                />
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={goToPrev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-200 hover:bg-brand hover:text-brand-foreground hover:border-brand shadow-sm"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                currentIndex === i
                  ? "w-8 bg-brand"
                  : "w-2.5 bg-border hover:bg-brand/40",
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-200 hover:bg-brand hover:text-brand-foreground hover:border-brand shadow-sm"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
