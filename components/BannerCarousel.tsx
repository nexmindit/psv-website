"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      src: "/psv_banner.png",
      alt: "PSV Group Banner 1",
    },
    {
      src: "/psv_banner2.jpg",
      alt: "PSV Group Banner 2",
    },
    {
      src: "/psv_banner3.jpg",
      alt: "PSV Group Banner 3",
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
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px] overflow-hidden bg-white">
      {/* Slides */}
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={banner.src}
            alt={banner.alt}
            fill
            className="object-contain"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
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
