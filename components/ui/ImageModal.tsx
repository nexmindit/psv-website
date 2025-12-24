"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string | null;
  imageAlt?: string;
}

export default function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  imageAlt = "Image Preview",
}: ImageModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  // Use portal to render modal at document body level
  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div className="absolute top-4 right-4 z-[10000]">
        <button
          onClick={onClose}
          className="cursor-pointer text-white hover:text-gray-300 focus:outline-none p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div
        className="relative w-full max-w-5xl max-h-[90vh] aspect-[4/3] sm:aspect-[16/9]"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>
    </div>,
    document.body
  );
}
