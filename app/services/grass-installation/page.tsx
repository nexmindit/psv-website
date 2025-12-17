"use client";

import Image from "next/image";
import Link from "next/link";
import TestimonialsSection from "@/components/TestimonialsSection";
import CustomerReviews from "@/components/CustomerReviews";
import BannerCarousel from "@/components/BannerCarousel";
import AnimatedSection from "@/components/AnimatedSection";

export default function GrassInstallationServicePage() {
  const galleyImages = [
    { id: 1, src: "/services/grass-installation/grass-installation-01.jpg" },
    { id: 2, src: "/services/grass-installation/grass-installation-02.jpg" },
    { id: 3, src: "/services/grass-installation/grass-installation-03.jpg" },
    { id: 4, src: "/services/grass-installation/grass-installation-04.jpg" },
    { id: 5, src: "/services/grass-installation/grass-installation-05.jpg" },
    { id: 6, src: "/services/grass-installation/grass-installation-06.jpg" },
    { id: 7, src: "/services/grass-installation/grass-installation-07.jpg" },
    { id: 8, src: "/services/grass-installation/grass-installation-08.jpg" },
    { id: 9, src: "/services/grass-installation/grass-installation-09.jpg" },
    { id: 10, src: "/services/grass-installation/grass-installation-10.jpg" },
    { id: 11, src: "/services/grass-installation/grass-installation-11.jpg" },
    { id: 12, src: "/services/grass-installation/grass-installation-12.jpg" },
    { id: 13, src: "/services/grass-installation/grass-installation-13.jpg" },
    { id: 14, src: "/services/grass-installation/grass-installation-14.jpg" },
    { id: 15, src: "/services/grass-installation/grass-installation-15.jpg" },
    { id: 16, src: "/services/grass-installation/grass-installation-16.jpg" },
    { id: 17, src: "/services/grass-installation/grass-installation-17.jpg" },
    { id: 18, src: "/services/grass-installation/grass-installation-18.jpg" },
    { id: 19, src: "/services/grass-installation/grass-installation-19.jpg" },
    { id: 20, src: "/services/grass-installation/grass-installation-20.jpg" },
    { id: 21, src: "/services/grass-installation/grass-installation-21.jpg" },
    { id: 22, src: "/services/grass-installation/grass-installation-22.jpg" },
    { id: 23, src: "/services/grass-installation/grass-installation-23.jpg" },
    { id: 24, src: "/services/grass-installation/grass-installation-24.jpg" },
    { id: 25, src: "/services/grass-installation/grass-installation-25.jpg" },
    { id: 26, src: "/services/grass-installation/grass-installation-26.jpg" },
    { id: 27, src: "/services/grass-installation/grass-installation-27.jpg" },
    { id: 28, src: "/services/grass-installation/grass-installation-28.jpg" },
    { id: 29, src: "/services/grass-installation/grass-installation-29.jpg" },
    { id: 30, src: "/services/grass-installation/grass-installation-30.jpg" },
    { id: 31, src: "/services/grass-installation/grass-installation-31.jpg" },
    { id: 32, src: "/services/grass-installation/grass-installation-32.jpg" },
    { id: 33, src: "/services/grass-installation/grass-installation-33.jpg" },
    { id: 34, src: "/services/grass-installation/grass-installation-34.jpg" },
    { id: 35, src: "/services/grass-installation/grass-installation-35.jpg" },
    { id: 36, src: "/services/grass-installation/grass-installation-36.jpg" },
    { id: 37, src: "/services/grass-installation/grass-installation-37.jpg" },
    { id: 38, src: "/services/grass-installation/grass-installation-38.jpg" },
    { id: 39, src: "/services/grass-installation/grass-installation-39.jpg" },
  ];
  const services = [
    {
      title: "เลือกสเปกหญ้า",
      description:
        "ทักแชทแอดมิน เพื่อขอดูตัวอย่าง ความยาวขนหญ้า (1-3 ซม.) และแจ้งขนาดพื้นที่",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "นัดวันติดตั้ง",
      description:
        "ทีมงาน PSV ขนวัสดุและเครื่องมือเข้าหน้างาน ตามวันเวลาที่นัดหมาย",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "ติดตั้งและส่งมอบ",
      description: "ปรับพื้น ลงทราย ปูหญ้า ยึดหมุด เก็บกวาด พร้อมใช้งานทันที",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
  ];

  const whyChooseUs = [
    {
      title: "ฟรี! ทรายปรับระดับ",
      description:
        "(หรือราคาพิเศษ) เพราะเราเป็นบ่อทรายเอง ตัดปัญหาเรื่องหาวัสดุรองพื้น ลูกค้าไม่ต้องสั่งแยก",
    },
    {
      title: "ทีมงานติดตั้งโดยตรง",
      description:
        "ไม่ใช่นายหน้าขายของ เรามีทีมช่างพร้อมเครื่องมือตบดินและอุปกรณ์ติดตั้งครบ",
    },
    {
      title: "หญ้าเกรดพรีเมียม",
      description:
        "คัดสรรหญ้าเทียมคุณภาพดี ทนแดด ทนฝน (UV Resistant) มีรูระบายน้ำ ไม่เหม็นอับ",
    },
    {
      title: "บริการครบจบที่เดียว",
      description:
        "แค่เลือกหญ้าแล้วรอที่บ้าน ที่เหลือเราจัดการให้หมด ทั้งของ ทั้งแรง ทั้งการขนส่ง",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner Carousel */}
      <BannerCarousel />

      {/* About Service Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                บริการรับปูหญ้าเทียมครบวงจร
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                เปลี่ยนพื้นที่รอบบ้านให้เขียวสวยตลอดปี ดูแลรักษาง่าย
                ไม่ต้องตัดหญ้า! PSV ให้บริการปูหญ้าเทียมแบบ One-Stop Service
                ตั้งแต่ขนส่ง ปรับระดับหน้าดิน ลงทรายรองพื้นอัดแน่น <br />{" "}
                จนถึงปูหญ้าเก็บงานเรียบร้อย
                เลือกเกรดหญ้าได้ตามงบประมาณผ่านแอดมิน สะดวก รวดเร็ว <br />{" "}
                งานเนี๊ยบ
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed"></p>
              <Link
                href="/contact"
                className="inline-block bg-[#446084] text-white px-8 py-3 rounded-sm font-semibold hover:opacity-90 transition-opacity duration-200"
              >
                ขอดูตัวอย่างหญ้า / ประเมินราคา
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 bg-gray-300 rounded-sm overflow-hidden">
                <Image
                  src="/services/grass-installation/1.png"
                  alt="งานปูหญ้า 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 bg-gray-300 rounded-sm overflow-hidden">
                <Image
                  src="/services/grass-installation/2.png"
                  alt="งานปูหญ้า 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 bg-gray-300 rounded-sm overflow-hidden">
                <Image
                  src="/services/grass-installation/3.png"
                  alt="งานปูหญ้า 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 bg-gray-300 rounded-sm overflow-hidden">
                <Image
                  src="/services/grass-installation/4.png"
                  alt="งานปูหญ้า 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Case Study Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ตัวอย่างหน้างานที่psvส่งทราย/หิน ไป
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 1, src: "/services/grass-installation/4_2.png" },
              { id: 2, src: "/services/grass-installation/5.png" },
              { id: 3, src: "/services/grass-installation/6.png" },
            ].map((item) => (
              <div
                key={item.id}
                className="relative aspect-square bg-gray-300 rounded-sm overflow-hidden border-2 border-[#e6e9ef] hover:border-[#446084] transition-all duration-300"
              >
                <Image
                  src={item.src}
                  alt={`ตัวอย่างงานปูหญ้า ${item.id}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              วิธีรับบริการ
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              บริการปูหญ้าครบวงจร ตอบโจทย์ทุกความต้องการ
            </p>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 150}>
                <div className="bg-white rounded-sm p-8 border-2 border-[#e6e9ef] hover:border-[#446084] transition-all duration-300">
                  <div className="w-16 h-16 bg-[#446084] rounded-full flex items-center justify-center text-white mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ทำไมถึงเลือกใช้บริการเรา
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, index) => (
              <AnimatedSection key={reason.title} delay={index * 100}>
                <div className="bg-white p-6 rounded-sm text-center border-2 border-[#e6e9ef] hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection
        title="ลูกค้าที่ไว้วางใจเรา"
        subtitle="ที่ไว้วางใจและใช้บริการของเรามาอย่างต่อเนื่อง"
        bgColor="bg-white"
      />

      {/* Customer Reviews Section */}
      <CustomerReviews />

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              พร้อมให้บริการคุณแล้ว
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              ติดต่อเราเพื่อขอคำปรึกษาหรือขอใบเสนอราคา
              ทีมงานมืออาชีพพร้อมให้บริการ
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#D4AF37] text-white px-8 py-3 rounded-sm font-semibold hover:opacity-90 transition-opacity duration-200 mb-8"
            >
              ติดต่อเรา
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ภาพหน้างานจริง
            </h2>
            <p className="text-gray-600 text-lg">
              ผลงานการปูหญ้าของเราที่ได้รับความไว้วางใจจากลูกค้า
            </p>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleyImages.map((item) => (
              <div
                key={item.id}
                className="relative aspect-square bg-gray-300 rounded-sm overflow-hidden group"
              >
                <Image
                  src={item.src}
                  alt={`ผลงานปูหญ้า ${item.id}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
