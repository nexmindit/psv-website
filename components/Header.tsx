"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-end items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>08:00 - 17:00</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>098-408-7225</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/psv_logo.jpg"
              alt="PSV Group Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`font-semibold transition-colors uppercase text-sm relative group ${
                pathname === "/"
                  ? "text-[#D4AF37]"
                  : "text-gray-900 hover:text-[#D4AF37]"
              }`}
            >
              หน้าแรก{" "}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#D4AF37] transition-all ${
                  pathname === "/"
                    ? "w-full"
                    : "w-0 left-1/2 group-hover:w-full group-hover:left-0"
                }`}
              />
            </Link>
            <Link
              href="/services"
              className={`font-semibold transition-colors uppercase text-sm relative group ${
                pathname === "/services"
                  ? "text-[#D4AF37]"
                  : "text-gray-900 hover:text-[#D4AF37]"
              }`}
            >
              บริการรับถมที่{" "}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#D4AF37] transition-all ${
                  pathname === "/services"
                    ? "w-full"
                    : "w-0 left-1/2 group-hover:w-full group-hover:left-0"
                }`}
              />
            </Link>
            <Link
              href="/shop"
              className={`font-semibold transition-colors uppercase text-sm relative group ${
                pathname === "/shop"
                  ? "text-[#D4AF37]"
                  : "text-gray-900 hover:text-[#D4AF37]"
              }`}
            >
              สินค้าของเรา{" "}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#D4AF37] transition-all ${
                  pathname === "/shop"
                    ? "w-full"
                    : "w-0 left-1/2 group-hover:w-full group-hover:left-0"
                }`}
              />
            </Link>
            <Link
              href="/about"
              className={`font-semibold transition-colors uppercase text-sm relative group ${
                pathname === "/about"
                  ? "text-[#D4AF37]"
                  : "text-gray-900 hover:text-[#D4AF37]"
              }`}
            >
              เกี่ยวกับเรา{" "}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#D4AF37] transition-all ${
                  pathname === "/about"
                    ? "w-full"
                    : "w-0 left-1/2 group-hover:w-full group-hover:left-0"
                }`}
              />
            </Link>
            <Link
              href="/portfolio"
              className={`font-semibold transition-colors uppercase text-sm relative group ${
                pathname === "/portfolio"
                  ? "text-[#D4AF37]"
                  : "text-gray-900 hover:text-[#D4AF37]"
              }`}
            >
              ผลงานและลูกค้า{" "}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#D4AF37] transition-all ${
                  pathname === "/portfolio"
                    ? "w-full"
                    : "w-0 left-1/2 group-hover:w-full group-hover:left-0"
                }`}
              />
            </Link>
            <Link
              href="/blog"
              className={`font-semibold transition-colors uppercase text-sm relative group ${
                pathname === "/blog"
                  ? "text-[#D4AF37]"
                  : "text-gray-900 hover:text-[#D4AF37]"
              }`}
            >
              เกร็ดความรู้{" "}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#D4AF37] transition-all ${
                  pathname === "/blog"
                    ? "w-full"
                    : "w-0 left-1/2 group-hover:w-full group-hover:left-0"
                }`}
              />
            </Link>
            <Link
              href="/contact"
              className={`font-semibold transition-colors uppercase text-sm relative group ${
                pathname === "/contact"
                  ? "text-[#D4AF37]"
                  : "text-gray-900 hover:text-[#D4AF37]"
              }`}
            >
              ติดต่อเรา{" "}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#D4AF37] transition-all ${
                  pathname === "/contact"
                    ? "w-full"
                    : "w-0 left-1/2 group-hover:w-full group-hover:left-0"
                }`}
              />
            </Link>
          </nav>

          {/* Social & Search */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://line.me/ti/p/~@psv.group1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#00B900] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#1877F2] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <button className="text-gray-600 hover:text-[#D4AF37] transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className={`font-semibold transition-colors ${
                  pathname === "/"
                    ? "text-[#D4AF37]"
                    : "text-gray-900 hover:text-[#D4AF37]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                หน้าแรก
              </Link>
              <Link
                href="/services"
                className={`font-semibold transition-colors ${
                  pathname === "/services"
                    ? "text-[#D4AF37]"
                    : "text-gray-900 hover:text-[#D4AF37]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                บริการรับถมที่
              </Link>
              <Link
                href="/shop"
                className={`font-semibold transition-colors ${
                  pathname === "/shop"
                    ? "text-[#D4AF37]"
                    : "text-gray-900 hover:text-[#D4AF37]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                สินค้าของเรา
              </Link>
              <Link
                href="/about"
                className={`font-semibold transition-colors ${
                  pathname === "/about"
                    ? "text-[#D4AF37]"
                    : "text-gray-900 hover:text-[#D4AF37]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                เกี่ยวกับเรา
              </Link>
              <Link
                href="/portfolio"
                className={`font-semibold transition-colors ${
                  pathname === "/portfolio"
                    ? "text-[#D4AF37]"
                    : "text-gray-900 hover:text-[#D4AF37]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                ผลงานและลูกค้า
              </Link>
              <Link
                href="/blog"
                className={`font-semibold transition-colors ${
                  pathname === "/blog"
                    ? "text-[#D4AF37]"
                    : "text-gray-900 hover:text-[#D4AF37]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                เกร็ดความรู้
              </Link>
              <Link
                href="/contact"
                className={`font-semibold transition-colors ${
                  pathname === "/contact"
                    ? "text-[#D4AF37]"
                    : "text-gray-900 hover:text-[#D4AF37]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                ติดต่อเรา
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
