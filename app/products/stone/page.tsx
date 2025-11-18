"use client";

import Image from "next/image";
import TestimonialsSection from "@/components/TestimonialsSection";
import BannerCarousel from "@/components/BannerCarousel";
import CustomerReviews from "@/components/CustomerReviews";
import AnimatedSection from "@/components/AnimatedSection";
import { Fade } from "react-awesome-reveal";

export default function StonePage() {
  // ประเภทหิน 8 ชนิด (3 แถวบน + 2 แถวล่างกึ่งกลาง)
  const stoneTypes = [
    {
      name: "หินคลุก",
      description:
        "รายละเอียด：หินคลุก เป็นหินที่มีขนาดหลากหลาย เหมาะสำหรับงานถมพื้นที่ งานรองฐานถนน และงานปรับพื้นที่",
      image: "https://placehold.co/600x400.png",
    },
    {
      name: "หินเกล็ด",
      description:
        "รายละเอียด：หินเกล็ด เป็นหินที่มีขนาดละเอียด เหมาะสำหรับงานปรับพื้นที่ งานรองพื้นคอนกรีต และงานทำถนน",
      image: "https://placehold.co/600x400.png",
    },
    {
      name: "หิน 1 หรือหิน 3/4",
      description:
        "รายละเอียด：หิน 3/4 นิ้ว เป็นหินที่มีขนาดกลาง เหมาะสำหรับงานคอนกรีต งานก่อสร้างอาคาร และงานโครงสร้าง",
      image: "https://placehold.co/600x400.png",
    },
    {
      name: "ดินลูกรัง",
      description:
        "รายละเอียด：ดินลูกรัง เป็นดินที่มีส่วนผสมของกรวดและทราย เหมาะสำหรับงานถมถนน งานลานจอดรถ และงานรองพื้น",
      image: "https://placehold.co/600x400.png",
    },
    {
      name: "หินเกล็ด",
      description:
        "รายละเอียด：หินเกล็ด เป็นหินที่มีรูปแบบแบน เหมาะสำหรับงานตกแต่ง งานปูพื้น และงานจัดสวน",
      image: "https://placehold.co/600x400.png",
    },
  ];

  // หิน 3 ประเภทที่ใช้ในงานก่อสร้าง
  const constructionStoneTypes = [
    {
      title: "หินคลุก",
      subtitle: "Crushed Stone",
      icon: "🪨",
      features: [
        "ขนาดหลากหลาย มีความแข็งแรง",
        "งานถมพื้นที่",
        "งานรองฐานถนน",
        "งานปรับพื้นที่",
        "งานก่อสร้างทั่วไป",
      ],
      bgGradient: "from-[#446084] to-[#5a7a9a]",
    },
    {
      title: "หิน 1 หรือ หิน 3/4",
      subtitle: "3/4 Inch Stone",
      icon: "🔷",
      features: [
        "ขนาดมาตรฐาน แข็งแรงทนทาน",
        "งานคอนกรีต",
        "งานก่อสร้างอาคาร",
        "งานโครงสร้าง",
        "งานฐานราก",
      ],
      bgGradient: "from-[#6e8aaa] to-[#829aba]",
    },
    {
      title: "หินเกล็ด",
      subtitle: "Gravel",
      icon: "🔹",
      features: [
        "ขนาดละเอียด เหมาะสำหรับงานปรับพื้นที่",
        "งานรองพื้นคอนกรีต",
        "งานทำถนน",
        "งานตกแต่งภูมิทัศน์",
      ],
      bgGradient: "from-[#5a7a9a] to-[#6e8aaa]",
    },
    {
      title: "ลูกรัง",
      subtitle: "Laterite",
      icon: "🟤",
      features: [
        "แข็งแรง ทนทาน",
        "งานถมถนน",
        "งานลานจอดรถ",
        "งานรองพื้น",
        "งานทำถนนลูกรัง",
      ],
      bgGradient: "from-[#5a7a9a] to-[#6e8aaa]",
    },
  ];

  // 3 ขั้นตอนการสั่งซื้อ
  const orderSteps = [
    {
      number: 1,
      title: "ติดต่อเรา",
      description:
        "ติดต่อแอดมินผ่านช่องทาง Social หรือสาขาใกล้บ้านคุณเพื่อเริ่มต้นการสั่งซื้อ",
      image: "https://placehold.co/800x600.png",
      imageAlt: "ติดต่อ PSV Group",
    },
    {
      number: 2,
      title: "เลือกสินค้า",
      description:
        "แจ้งรายการสินค้าที่ต้องการสั่งซื้อผ่าน Admin เพื่อให้สามารถดำเนินการได้อย่างรวดเร็ว",
      image: "https://placehold.co/800x600.png",
      imageAlt: "เลือกสินค้า PSV Group",
    },
    {
      number: 3,
      title: "รับสินค้า",
      description:
        "ชำระเงินและแจ้งที่อยู่สำหรับจัดส่งให้เรียบร้อยเพื่อรับสินค้าที่ต้องการ",
      image: "https://placehold.co/800x600.png",
      imageAlt: "จัดส่ง PSV Group",
    },
  ];

  // รูปภาพการจัดส่ง (4x3 = 12 รูป)
  const deliveryPhotos = [
    { src: "/work/work-01.jpg", alt: "งานหน้าไซต์ 1" },
    { src: "/work/work-02.jpg", alt: "งานหน้าไซต์ 2" },
    { src: "/work/work-03.jpg", alt: "งานหน้าไซต์ 3" },
    { src: "/work/work-04.jpg", alt: "งานหน้าไซต์ 4" },
    { src: "/work/work-05.jpg", alt: "งานหน้าไซต์ 5" },
    { src: "/work/work-06.jpg", alt: "งานหน้าไซต์ 6" },
    { src: "/work/work-07.jpg", alt: "งานหน้าไซต์ 7" },
    { src: "/work/work-08.jpg", alt: "งานหน้าไซต์ 8" },
    { src: "/work/work-09.jpg", alt: "งานหน้าไซต์ 9" },
    { src: "/work/work-10.jpg", alt: "งานหน้าไซต์ 10" },
    { src: "/work/work-11.jpg", alt: "งานหน้าไซต์ 11" },
    { src: "/work/work-12.jpg", alt: "งานหน้าไซต์ 12" },
    { src: "/work/work-13.jpg", alt: "งานหน้าไซต์ 13" },
    { src: "/work/work-14.jpg", alt: "งานหน้าไซต์ 14" },
    { src: "/work/work-15.jpg", alt: "งานหน้าไซต์ 15" },
    { src: "/work/work-16.jpg", alt: "งานหน้าไซต์ 16" },
    { src: "/work/work-17.jpg", alt: "งานหน้าไซต์ 17" },
    { src: "/work/work-18.jpg", alt: "งานหน้าไซต์ 18" },
    { src: "/work/work-19.jpg", alt: "งานหน้าไซต์ 19" },
    { src: "/work/work-20.jpg", alt: "งานหน้าไซต์ 20" },
    { src: "/work/work-21.jpg", alt: "งานหน้าไซต์ 21" },
  ];

  return (
    <div className="bg-white">
      <BannerCarousel />

      {/* Section 2: ประเภทหิน (8 cards: 3 แถวบน + 2 แถวกลาง + 3 แถวล่าง) */}
    <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ประเภทหินที่เราจำหน่าย
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              วัสดุก่อสร้างคุณภาพสูง ผลิตเองจากบ่อดินบ่อทราย
              พร้อมจัดส่งทั้งกรุงเทพและปริมณฑล
            </p>
            <div className="mt-4 md:mt-6 w-16 md:w-20 h-1 bg-(--color-gold) mx-auto"></div>
          </div>

          {/* First row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-6 md:mb-8">
            {stoneTypes.slice(0, 3).map((stone, index) => (
              <Fade key={stone.name} triggerOnce delay={index * 100}>
                <div className="rounded-sm overflow-hidden border-2 border-(--psv-border) shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-64 sm:h-72 md:h-80 w-full">
                    <Image
                      src={stone.image}
                      alt={stone.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Fade>
            ))}
          </div>

          {/* Second row: 2 cards (centered) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-6 md:mb-8">
            {stoneTypes.slice(3, 5).map((stone, index) => (
              <Fade key={stone.name} triggerOnce delay={index * 100}>
                <div className="rounded-sm overflow-hidden border-2 border-(--psv-border) shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-64 sm:h-72 md:h-80 w-full">
                    <Image
                      src={stone.image}
                      alt={stone.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Fade>
            ))}
          </div>
      </div>
    </AnimatedSection>

    {/* Section 3: การนำไปใช้งาน (3 cards) */}
    <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-linear-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              หิน 3 ประเภทใช้ในงานก่อสร้าง
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              เลือกใช้หินให้เหมาะสมกับงานก่อสร้างของคุณ
            </p>
            <div className="w-16 md:w-20 h-1 bg-(--color-gold) mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {constructionStoneTypes.map((stone, index) => (
              <Fade
                key={stone.title}
                triggerOnce
                delay={index * 150}
                direction="up"
              >
                <div
                  className={`relative bg-linear-to-br ${stone.bgGradient} p-8 sm:p-10 rounded-2xl text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group`}
                >
                  {/* Decorative background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"></div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 relative z-10">
                    {stone.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-base sm:text-lg mb-6 opacity-90 font-light relative z-10">
                    {stone.subtitle}
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-1 bg-(--color-gold) mb-6 opacity-80"></div>

                  {/* Features list */}
                  <ul className="space-y-3 relative z-10">
                    {stone.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start text-sm sm:text-base leading-relaxed"
                      >
                        <span className="text-(--color-gold) mr-2 mt-1 shrink-0">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-(--color-gold) to-transparent opacity-50"></div>
                </div>
              </Fade>
            ))}
          </div>
      </div>
    </AnimatedSection>

    {/* Section 4: 3 ขั้นตอนการสั่งซื้อ (Alternating layout) */}
    <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ขั้นตอนการสั่งซื้อ
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              สั่งซื้อง่ายๆ เพียง 3 ขั้นตอน
            </p>
            <div className="w-16 md:w-20 h-1 bg-(--color-gold) mx-auto mt-4"></div>
          </div>

          <div className="space-y-12 mx-auto">
                      <div className="flex justify-center">
                        <div className="relative w-full max-w-md md:max-w-lg lg:max-w-2xl aspect-square rounded-sm overflow-hidden border-2 border-(--psv-border) hover:border-(--color-primary) transition-colors duration-300">
                          <Image
                            src="/sales/sales_step.jpg"
                            alt="ขั้นตอนการสั่งซื้อ"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
      </div>
    </AnimatedSection>

    {/* Section 5: ลูกค้าของเรา - Testimonials */}
      <TestimonialsSection
        title="ลูกค้าของเรา"
        subtitle="ลูกค้าชั้นนำที่ไว้วางใจ PSV Group"
        bgColor="bg-white"
      />

      <CustomerReviews />

      {/* Section 6: รูปภาพการจัดส่ง (4x3 grid) */}
    <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ภาพการจัดส่ง
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              บริการจัดส่งรวดเร็ว ทั่วกรุงเทพและปริมณฑล
            </p>
            <div className="w-16 md:w-20 h-1 bg-(--color-gold) mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto">
            {deliveryPhotos.map((photo, index) => (
              <div
                key={index}
                className="rounded-sm overflow-hidden border-2 border-(--psv-border) hover:border-(--color-primary) transition-colors duration-300"
              >
                <div className="relative w-full aspect-[3/2]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
      </div>
    </AnimatedSection>
    </div>
  );
}
