"use client";

import { useState } from "react";
import Image from "next/image";
import ImageModal from "./ui/ImageModal";

interface Review {
  src: string;
  alt: string;
}

const defaultReviews: Review[] = [
  { src: "/customer_reviews/1.webp", alt: "รีวิวจากลูกค้า 1" },
  { src: "/customer_reviews/2.webp", alt: "รีวิวจากลูกค้า 2" },
  { src: "/customer_reviews/3.webp", alt: "รีวิวจากลูกค้า 3" },
  { src: "/customer_reviews/4.webp", alt: "รีวิวจากลูกค้า 4" },
  { src: "/customer_reviews/5.webp", alt: "รีวิวจากลูกค้า 5" },
  { src: "/customer_reviews/6.webp", alt: "รีวิวจากลูกค้า 6" },
  { src: "/customer_reviews/7.webp", alt: "รีวิวจากลูกค้า 7" },
  { src: "/customer_reviews/8.webp", alt: "รีวิวจากลูกค้า 8" },
  { src: "/customer_reviews/9.webp", alt: "รีวิวจากลูกค้า 9" },
  { src: "/customer_reviews/10.webp", alt: "รีวิวจากลูกค้า 10" },
  { src: "/customer_reviews/11.webp", alt: "รีวิวจากลูกค้า 11" },
  { src: "/customer_reviews/12.webp", alt: "รีวิวจากลูกค้า 12" },
  { src: "/customer_reviews/13.webp", alt: "รีวิวจากลูกค้า 13" },
  { src: "/customer_reviews/14.webp", alt: "รีวิวจากลูกค้า 14" },
  { src: "/customer_reviews/15.webp", alt: "รีวิวจากลูกค้า 15" },
  { src: "/customer_reviews/16.webp", alt: "รีวิวจากลูกค้า 16" },
];

interface CustomerReviewsProps {
  reviews?: Review[];
}

export default function CustomerReviews({
  reviews = defaultReviews,
}: CustomerReviewsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const handleImageClick = (review: Review) => {
    setSelectedImage(review);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          รีวิวจากลูกค้า
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(review)}
              className="w-full rounded-sm overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={review.src}
                  alt={review.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imageSrc={selectedImage?.src || null}
        imageAlt={selectedImage?.alt}
      />
    </section>
  );
}
