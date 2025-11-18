"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      src: "/banner/banner_1.jpg",
      alt: "PSV Group Banner 1",
    },
  ];

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [banners.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Aspect-ratio wrapper for responsive 16:9.
        Using inline padding-top as a fallback if Tailwind's aspect plugin isn't available. */}
      <div className="w-full relative" style={{ paddingTop: "56.25%" }}>
      {/* Slides */}
      {banners.map((banner, index) => (
        <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
        }`}
        >
        <Image
          src={banner.src}
          alt={banner.alt}
          fill
          className="object-cover"
          priority={index === 0}
          sizes="100vw"
        />
        </div>
      ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
      {banners.map((_, index) => (
        <button
        key={index}
        onClick={() => goToSlide(index)}
        className={`h-1.5 sm:h-2 md:h-3 rounded-full transition-all duration-300 ${
          index === currentSlide
          ? "bg-white w-4 sm:w-6 md:w-8"
          : "bg-white/50 hover:bg-white/75 w-1.5 sm:w-2 md:w-3"
        }`}
        aria-label={`Go to slide ${index + 1}`}
        />
      ))}
      </div>
    </div>
  );
}
