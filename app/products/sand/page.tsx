"use client";

import Image from "next/image";
import TestimonialsSection from "@/components/TestimonialsSection";
import BannerCarousel from "@/components/BannerCarousel";
import CustomerReviews from "@/components/CustomerReviews";
import AnimatedSection from "@/components/AnimatedSection";
import { Fade } from "react-awesome-reveal";

export default function SandPage() {
  // ประเภททราย 8 ชนิด (3 แถวบน + 2 แถวล่างกึ่งกลาง)
  const sandTypes = [
    {
      name: "ทรายถม",
      description:
        "รายละเอียด：ทรายถม หรือทั่วไปเรียกว่า ทรายขี้นิ้ว เป็นทรายที่มีส่วนผสมเล็กน้อย จึงเหมาะสำหรับงานปรับพื้นที่ก่อนเทพื้น",
      image:
        "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%97%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%96%E0%B8%A1.jpg",
    },
    {
      name: "ทรายหยาบ",
      description:
        "รายละเอียด：ทรายหยาบ เป็นทรายเม็ดใหญ่หนาและแข็งแรงมาก เหมาะสำหรับงานก่อสร้างต่อเติมองค์การ ทรายด้วยคุณสมบัติที่มีความแข็งแรงสูงเป็นพิเศษ",
      image:
        "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%97%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%A2%E0%B8%B2%E0%B8%9A.jpg",
    },
    {
      name: "กระสอบทราย",
      description:
        "รายละเอียด：กระสอบทราย เป็นทรายที่บรรจุในกระสอบ เหมาะสำหรับการขนส่งและจัดเก็บ",
      image: "/sand/sand-bag.png",
    },
    {
      name: "กองทราย",
      description:
        "รายละเอียด：กองทราย เป็นการจัดเก็บทรายในรูปแบบกอง เหมาะสำหรับการใช้งานในพื้นที่กว้าง",
      image: "/sand/sand-pile.png",
    },
  ];

  // ทรายสามประเภทที่ใช้ในงานก่อสร้าง
  const constructionSandTypes = [
    {
      title: "ทรายหยาบ",
      subtitle: "Coarse Sand",
      icon: "�",
      features: [
        "เม็ดใหญ่ มีกรวดเล็กๆ",
        "ก่อสร้างอาคาร",
        "คอนกรีตเสริมเหล็ก",
        "ก่อสร้างฐานราก",
        "ก่อสร้างตึกสูง",
      ],
      bgGradient: "from-[#5a7a9a] to-[#6e8aaa]",
    },
    {
      title: "ทรายถม",
      subtitle: "Fill Sand",
      icon: "🟤",
      features: [
        "ใกล้เคียงกับดิน",
        "งานถมถนน",
        "งานปรับพื้นที่",
        "ถมรองคอนกรีต",
        "กันน้ำท่วม",
      ],
      bgGradient: "from-[#6e8aaa] to-[#829aba]",
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
    "https://placehold.co/400x400.png",
    "https://placehold.co/400x400.png",
    "https://placehold.co/400x400.png",
    "https://placehold.co/400x400.png",
    "https://placehold.co/400x400.png",
    "https://placehold.co/400x400.png",
    "https://placehold.co/400x400.png",
    "https://placehold.co/400x400.png",
    "https://placehold.co/400x400.png",
    "https://placehold.co/400x400.png",
    "https://placehold.co/400x400.png",
    "https://placehold.co/400x400.png",
  ];

  return (
    <div className="bg-white">
      <BannerCarousel />

      {/* Section 2: ประเภททราย (8 cards: 3 แถวบน + 2 แถวกลาง + 3 แถวล่าง) */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ประเภททรายที่เราจำหน่าย
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              วัสดุก่อสร้างคุณภาพสูง ผลิตเองจากบ่อดินบ่อทราย
              พร้อมจัดส่งทั้งกรุงเทพและปริมณฑล
            </p>
            <div className="mt-4 md:mt-6 w-16 md:w-20 h-1 bg-(--color-gold) mx-auto"></div>
          </div>

        {/* First row: 3 cards */}
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-6 md:mb-8">
            {sandTypes.slice(0, 2).map((sand) => (
              <div
                key={sand.name}
                className="rounded-sm overflow-hidden border-2 border-(--psv-border) shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-64 sm:h-72 md:h-80 w-full">
                  <Image
                    src={sand.image}
                    alt={sand.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </AnimatedSection>

          {/* Second row: 2 cards (centered) */}
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-6 md:mb-8">
            {sandTypes.slice(2, 4).map((sand) => (
              <div
                key={sand.name}
                className="rounded-sm overflow-hidden border-2 border-(--psv-border) shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-100 sm:h-100 md:h-120 w-full">
                  <Image
                    src={sand.image}
                    alt={sand.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </AnimatedSection>

          {/* Third row: 3 cards */}
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {sandTypes.slice(5, 8).map((sand) => (
              <div
                key={sand.name}
                className="rounded-sm overflow-hidden border-2 border-(--psv-border) shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-64 sm:h-72 md:h-80 w-full">
                  <Image
                    src={sand.image}
                    alt={sand.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: การนำไปใช้งาน (3 cards) */}
      <section className="py-12 md:py-16 lg:py-20 bg-linear-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ทราย 2 ประเภทใช้ในงานก่อสร้าง
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              เลือกใช้ทรายให้เหมาะสมกับงานก่อสร้างของคุณ
            </p>
            <div className="w-16 md:w-20 h-1 bg-(--color-gold) mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {constructionSandTypes.map((sand, index) => (
              <Fade
                key={sand.title}
                triggerOnce
                delay={index * 150}
                direction="up"
              >
                <div
                  className={`relative bg-linear-to-br ${sand.bgGradient} p-8 sm:p-10 rounded-2xl text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group`}
                >
                  {/* Decorative background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"></div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 relative z-10">
                    {sand.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-base sm:text-lg mb-6 opacity-90 font-light relative z-10">
                    {sand.subtitle}
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-1 bg-(--color-gold) mb-6 opacity-80"></div>

                  {/* Features list */}
                  <ul className="space-y-3 relative z-10">
                    {sand.features.map((feature) => (
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
      </section>

      {/* Section 4: 3 ขั้นตอนการสั่งซื้อ (Alternating layout) */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
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

          <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
            {orderSteps.map((step) => (
              <div
                key={step.number}
                className={`flex flex-col ${
                  step.number % 2 === 1 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-6 md:gap-8 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-sm overflow-hidden border-2 border-(--psv-border)">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-(--color-gold) text-white text-xl sm:text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: ลูกค้าของเรา - Testimonials */}
      <TestimonialsSection
        title="ลูกค้าของเรา"
        subtitle="ลูกค้าชั้นนำที่ไว้วางใจ PSV Group"
        bgColor="bg-white"
      />

      <CustomerReviews />

      {/* Section 6: รูปภาพการจัดส่ง (4x3 grid) */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
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
                className="relative aspect-square rounded-sm overflow-hidden border-2 border-(--psv-border) hover:border-(--color-primary) transition-colors duration-300"
              >
                <Image
                  src={photo}
                  alt={`การจัดส่ง ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
