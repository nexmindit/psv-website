"use client";

import Image from "next/image";
import { useState } from "react";
import ImageModal from "@/components/ui/ImageModal";

interface DeliveryPhoto {
  src: string;
  alt: string;
}

interface DeliveryPhotosProps {
  photos: DeliveryPhoto[];
  title?: string;
  description?: string;
}

export default function DeliveryPhotos({
  photos,
  title = "ภาพการจัดส่ง",
  description = "บริการจัดส่งรวดเร็ว ทั่วกรุงเทพและปริมณฑล",
}: DeliveryPhotosProps) {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="w-16 md:w-20 h-1 bg-(--color-gold) mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative w-full aspect-[3/2] rounded-sm overflow-hidden border-2 border-(--psv-border) hover:border-(--color-primary) transition-colors duration-300 group cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-2 px-3 transition-opacity duration-300">
                <p className="text-white text-xs sm:text-sm text-center truncate font-medium">
                  {photo.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || null}
        imageAlt={selectedImage?.alt}
      />
    </section>
  );
}
