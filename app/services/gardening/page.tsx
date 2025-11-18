"use client";

import Image from "next/image";
import Link from "next/link";
import TestimonialsSection from "@/components/TestimonialsSection";
import CustomerReviews from "@/components/CustomerReviews";
import BannerCarousel from "@/components/BannerCarousel";
import AnimatedSection from "@/components/AnimatedSection";
import { Fade } from "react-awesome-reveal";

export default function GardeningServicePage() {
  const galleryImages = [
    { id: 1, src: "/services/gardening/garden-01.jpg" },
    { id: 2, src: "/services/gardening/garden-02.jpg" },
    { id: 3, src: "/services/gardening/garden-03.jpg" },
    { id: 4, src: "/services/gardening/garden-04.jpg" },
    { id: 5, src: "/services/gardening/garden-05.jpg" },
    { id: 6, src: "/services/gardening/garden-06.jpg" },
    { id: 7, src: "/services/gardening/garden-07.jpg" },
    { id: 8, src: "/services/gardening/garden-08.jpg" },
    { id: 9, src: "/services/gardening/garden-09.jpg" },
    { id: 10, src: "/services/gardening/garden-10.jpg" },
    { id: 11, src: "/services/gardening/garden-11.jpg" },
    { id: 12, src: "/services/gardening/garden-12.jpg" },
    { id: 13, src: "/services/gardening/garden-13.jpg" },
    { id: 14, src: "/services/gardening/garden-14.jpg" },
    { id: 15, src: "/services/gardening/garden-15.jpg" },
    { id: 16, src: "/services/gardening/garden-16.jpg" },
    { id: 17, src: "/services/gardening/garden-17.jpg" },
    { id: 18, src: "/services/gardening/garden-18.jpg" },
    { id: 19, src: "/services/gardening/garden-19.jpg" },
    { id: 20, src: "/services/gardening/garden-20.jpg" },
    { id: 21, src: "/services/gardening/garden-21.jpg" },
    { id: 22, src: "/services/gardening/garden-22.jpg" },
    { id: 23, src: "/services/gardening/garden-23.jpg" },
    { id: 24, src: "/services/gardening/garden-24.jpg" },
    { id: 25, src: "/services/gardening/garden-25.jpg" },
    { id: 26, src: "/services/gardening/garden-26.jpg" },
    { id: 27, src: "/services/gardening/garden-27.jpg" },
    { id: 28, src: "/services/gardening/garden-28.jpg" },
    { id: 29, src: "/services/gardening/garden-29.jpg" },
    { id: 30, src: "/services/gardening/garden-30.jpg" },
    { id: 31, src: "/services/gardening/garden-31.jpg" },
    { id: 32, src: "/services/gardening/garden-32.jpg" },
    { id: 33, src: "/services/gardening/garden-33.jpg" },
    { id: 34, src: "/services/gardening/garden-34.jpg" },
    { id: 35, src: "/services/gardening/garden-35.jpg" },
    { id: 36, src: "/services/gardening/garden-36.jpg" },
    { id: 37, src: "/services/gardening/garden-37.jpg" },
    { id: 38, src: "/services/gardening/garden-38.jpg" },
    { id: 39, src: "/services/gardening/garden-39.jpg" },
  ];

  const services = [
    {
      title: "วัดขนาด & ส่งรูป",
      description:
        "ลูกค้าวัดกว้างxยาว และถ่ายรูปพื้นที่ ส่งมาทางไลน์",
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
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: "เลือกโทนสีหิน",
      description:
        "เลือกสีหินเกร็ด/หินแม่น้ำ และแบบแผ่นทางเดินที่ชอบ จากแคตตาล็อกออนไลน์",
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
      title: "นัดวันเข้าทำ (จบใน 1-2 วัน)",
      description:
        "ทีมงานเข้าเคลียร์พื้นที่ ปูแผ่นกันหญ้า ลงทราย ลงหิน เสร็จไว ไม่ยืดเยื้อ",
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
      title: "ราคาถูกกว่า 50%",
      description: `เพราะเราเป็น "ศูนย์ค้าส่งวัสดุ" (ทราย/หิน) เอง คุณจึงได้ราคาทุนโดยไม่ต้องผ่านผู้รับเหมาหลายต่อ`,
    },
    {
      title: "ไม่มีงบบานปลาย",
      description: "ขายเหมารวมเป็นแพ็คเกจต่อตารางเมตร จ่ายจบทีเดียว ไม่มีค่าออกแบบแฝง",
    },
    {
      title: "ดูแลรักษาง่าย",
      description: "เน้นสวนหิน/สวนกรวด เหมาะกับคนเวลาน้อย ไม่ต้องตัดหญ้า ไม่ต้องรดน้ำ ประหยัดค่าดูแลระยะยาว",
    },
    {
      title: "ทีมงานมืออาชีพ",
      description: "ทำงานไว เก็บงานเรียบร้อย ล้างทำความสะอาดก่อนส่งมอบ (เหมาะกับหมู่บ้านจัดสรร)",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner Carousel */}
      <BannerCarousel />

      {/* About Service Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                จัดสวนหิน งบจบไม่บานปลาย <br/> ราคาถูกกว่าเจ้าอื่น 50%
                เพราะเราคือผู้ผลิต <br/> ปูพื้นหินทำสวน,ปูทางเดิน
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                ทำไมต้องจ่ายแพงในเมื่อคุณจ่ายเพียง 15,xxx บาท
                ก็ได้สวนสวยมาตรฐานเดียวกัน! PSV บริการจัดสวนหิน/ปูทางเดิน สำหรับ
                ทาวน์โฮมและบ้านแฝด (พื้นที่ประมาณ 30 ตร.ม.) เราคือศูนย์ค้าส่ง
                ทราย-ดิน-หิน ตัวจริง ทำให้คุณได้ 'ราคาต้นน้ำ'
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                ตัดค่าหัวคิวคนกลางออกไป เน้นความเรียบง่าย ดูแลรักษาง่าย สบายกระเป๋า
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#446084] text-white px-8 py-3 rounded-sm font-semibold hover:opacity-90 transition-opacity duration-200"
              >
                ส่งรูปพื้นที่ ประเมินราคาฟรี
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 bg-gray-300 rounded-sm overflow-hidden">
                <Image
                  src="/garden1.jpg"
                  alt="งานจัดสวน 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 bg-gray-300 rounded-sm overflow-hidden">
                <Image
                  src="/garden2.jpg"
                  alt="งานจัดสวน 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 bg-gray-300 rounded-sm overflow-hidden">
                <Image
                  src="/garden3.jpg"
                  alt="งานจัดสวน 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 bg-gray-300 rounded-sm overflow-hidden">
                <Image
                  src="/garden4.jpg"
                  alt="งานจัดสวน 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Team & Case Study Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ทีมงานติดตั้ง/Caseตัวอย่างงานติดตั้ง
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 1, src: "/services/gardening/4.png" },
              { id: 2, src: "/services/gardening/5.png" },
              { id: 3, src: "/services/gardening/6.png" },
            ].map((item) => (
              <div
                key={item.id}
                className="relative aspect-square bg-gray-300 rounded-sm overflow-hidden border-2 border-[#e6e9ef] hover:border-[#446084] transition-all duration-300"
              >
                <Image
                  src={ item.src}
                  alt={`ตัวอย่างงานจัดสวน ${item.id}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              วิธีรับบริการ
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              บริการจัดสวนครบวงจร ตอบโจทย์ทุกความต้องการ
            </p>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Fade
                key={service.title}
                triggerOnce
                delay={index * 150}
                direction="up"
              >
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
              </Fade>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ทำไมถึงเลือกใช้บริการเรา
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, index) => (
              <Fade key={reason.title} triggerOnce delay={index * 100}>
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
              </Fade>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <TestimonialsSection
        title="ลูกค้าที่ไว้วางใจเรา"
        subtitle="ที่ไว้วางใจและใช้บริการของเรามาอย่างต่อเนื่อง"
        bgColor="bg-white"
      />

      {/* Customer Reviews Section */}
      <CustomerReviews />

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-gray-900 text-white">
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
      </AnimatedSection>


      {/* Gallery Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ภาพหน้างานจริง
            </h2>
            <p className="text-gray-600 text-lg">
              ผลงานการจัดสวนของเราที่ได้รับความไว้วางใจจากลูกค้า
            </p>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="relative aspect-square bg-gray-300 rounded-sm overflow-hidden group"
              >
                <Image
                  src={item.src}
                  alt={`ผลงานจัดสวน ${item.id}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
