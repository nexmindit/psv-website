import Image from "next/image";
import { Metadata } from "next";
import TestimonialsSection from "@/components/TestimonialsSection";
import BannerCarousel from "@/components/BannerCarousel";
import CustomerReviews from "@/components/CustomerReviews";

export const metadata: Metadata = {
  title: "ดิน - PSV Group",
  description:
    "ดินคุณภาพสูงสำหรับงานก่อสร้าง ดินถม ดินลูกรัง ดินทราย จาก PSV Group พร้อมส่งกรุงเทพและปริมณฑล",
};

export default function SoilPage() {
  // ประเภทดิน 8 ชนิด (3 แถวบน + 2 แถวล่างกึ่งกลาง)
  const soilTypes = [
    {
      name: "ดินถม",
      description:
        "รายละเอียด：ดินถม เป็นดินที่มีคุณภาพดี เหมาะสำหรับงานถมที่ดิน งานปรับพื้นที่ และงานยกระดับพื้น",
      image: "https://placehold.co/600x400.png",
    },
    {
      name: "ดินทราย",
      description:
        "รายละเอียด：ดินทราย เป็นดินที่มีส่วนผสมของทราย เหมาะสำหรับงานปรับพื้นที่ งานทำสวน และงานก่อสร้าง",
      image: "https://placehold.co/600x400.png",
    },
    {
      name: "ดินเหนียว",
      description:
        "รายละเอียด：ดินเหนียว เป็นดินที่มีความเหนียว เหมาะสำหรับงานทำเขื่อน งานกันน้ำ และงานปั้นดิน",
      image: "https://placehold.co/600x400.png",
    },
    {
      name: "ดินร่วน",
      description:
        "รายละเอียด：ดินร่วน เป็นดินที่มีความอุดมสมบูรณ์ เหมาะสำหรับงานทำสวน งานเกษตรกรรม และงานปลูกต้นไม้",
      image: "https://placehold.co/600x400.png",
    },
    {
      name: "ดินปลูก",
      description:
        "รายละเอียด：ดินปลูก เป็นดินที่มีการปรับปรุงคุณภาพ เหมาะสำหรับงานจัดสวน งานปลูกต้นไม้ และงานเกษตร",
      image: "https://placehold.co/600x400.png",
    },
    {
      name: "ดินดำ",
      description:
        "รายละเอียด：ดินดำ เป็นดินที่มีความอุดมสมบูรณ์สูง เหมาะสำหรับงานทำสวน งานเกษตรกรรม และงานปลูกพืช",
      image: "https://placehold.co/600x400.png",
    },
    {
      name: "ดินหินปูน",
      description:
        "รายละเอียด：ดินหินปูน เป็นดินที่มีส่วนผสมของหินปูน เหมาะสำหรับงานถมพื้นที่ งานก่อสร้าง และงานปรับพื้น",
      image: "https://placehold.co/600x400.png",
    },
  ];

  // ดิน 3 ประเภทที่ใช้ในงานก่อสร้าง
  const constructionSoilTypes = [
    {
      title: "ดินถม",
      subtitle: "Fill Soil",
      icon: "🟫",
      features: [
        "คุณภาพดี อัดตัวได้ดี",
        "งานถมที่ดิน",
        "งานปรับพื้นที่",
        "งานยกระดับพื้น",
        "งานก่อสร้างทั่วไป",
      ],
      bgGradient: "from-[#446084] to-[#5a7a9a]",
    },
    {
      title: "หน้าดิน/ดินปลูกต้นไม้",
      subtitle: "Planting Soil",
      icon: "🌱",
      features: [
        "อุดมสมบูรณ์ เหมาะปลูก",
        "งานจัดสวน",
        "งานปลูกต้นไม้",
        "งานเกษตรกรรม",
        "งานปรับปรุงดิน",
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

      {/* Section 2: ประเภทดิน (8 cards: 3 แถวบน + 2 แถวกลาง + 3 แถวล่าง) */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ประเภทดินที่เราจำหน่าย
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              วัสดุก่อสร้างคุณภาพสูง ผลิตเองจากบ่อดินบ่อทราย
              พร้อมจัดส่งทั้งกรุงเทพและปริมณฑล
            </p>
            <div className="mt-4 md:mt-6 w-16 md:w-20 h-1 bg-(--color-gold) mx-auto"></div>
          </div>

          {/* First row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-6 md:mb-8">
            {soilTypes.slice(0, 3).map((soil) => (
              <div
                key={soil.name}
                className="rounded-lg overflow-hidden border-2 border-(--psv-border) shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-64 sm:h-72 md:h-80 w-full">
                  <Image
                    src={soil.image}
                    alt={soil.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second row: 2 cards (centered) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-6 md:mb-8">
            {soilTypes.slice(3, 5).map((soil) => (
              <div
                key={soil.name}
                className="rounded-lg overflow-hidden border-2 border-(--psv-border) shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-64 sm:h-72 md:h-80 w-full">
                  <Image
                    src={soil.image}
                    alt={soil.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: การนำไปใช้งาน (3 cards) */}
      <section className="py-12 md:py-16 lg:py-20 bg-linear-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ดิน 2 ประเภทใช้ในงานก่อสร้าง
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              เลือกใช้ดินให้เหมาะสมกับงานก่อสร้างของคุณ
            </p>
            <div className="w-16 md:w-20 h-1 bg-(--color-gold) mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {constructionSoilTypes.map((soil) => (
              <div
                key={soil.title}
                className={`relative bg-linear-to-br ${soil.bgGradient} p-8 sm:p-10 rounded-2xl text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group`}
              >
                {/* Decorative background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"></div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 relative z-10">
                  {soil.title}
                </h3>

                {/* Subtitle */}
                <p className="text-base sm:text-lg mb-6 opacity-90 font-light relative z-10">
                  {soil.subtitle}
                </p>

                {/* Divider */}
                <div className="w-12 h-1 bg-(--color-gold) mb-6 opacity-80"></div>

                {/* Features list */}
                <ul className="space-y-3 relative z-10">
                  {soil.features.map((feature) => (
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
                  <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-lg overflow-hidden border-2 border-(--psv-border)">
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
                className="relative aspect-square rounded-lg overflow-hidden border-2 border-(--psv-border) hover:border-(--color-primary) transition-colors duration-300"
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
