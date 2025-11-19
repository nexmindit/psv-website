"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();


  useEffect(() => {
    // Generate random duration between 300ms and 700ms
    const randomDuration = Math.floor(Math.random() * 400) + 300;

    // Show loading overlay
    setIsLoading(true);

    // Hide loading overlay after random duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, randomDuration);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/90 backdrop-blur-sm transition-opacity duration-300"
      style={{
        animation: "fadeIn 0.15s ease-in-out",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
          <div
            className="absolute inset-0 rounded-full border-4 border-t-green-600 border-r-transparent border-b-transparent border-l-transparent"
            style={{
              animation: "spin 0.8s linear infinite",
            }}
          ></div>
        </div>

        {/* Loading text */}
        <p className="text-sm font-medium text-gray-600">กำลังโหลด...</p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
