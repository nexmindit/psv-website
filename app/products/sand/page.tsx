"use client";

import Image from "next/image";
import TestimonialsSection from "@/components/TestimonialsSection";
import BannerCarousel from "@/components/BannerCarousel";
import CustomerReviews from "@/components/CustomerReviews";
import AnimatedSection from "@/components/AnimatedSection";
import DeliveryPhotos from "@/components/DeliveryPhotos";

export default function SandPage() {
  // ประเภททราย 8 ชนิด (3 แถวบน + 2 แถวล่างกึ่งกลาง)
  const sandTypes = [
    {
      name: "ทรายถม (Filling Sand)",
      description:
        "จัดส่งเต็มคิว จากแหล่งผลิตโดยตรงจัดส่งฟรี : 10 กิโลเมตร จากสาขา",
      image:
        "/products/sand/1_1.png",
    },
    {
      name: "ทรายหยาบ (Coarse Sand)",
      description:
        "จัดส่งเต็มคิว จากแหล่งผลิตโดยตรงจัดส่งฟรี : 10 กิโลเมตร จากสาขา",
      image:
        "/products/sand/2_0.png",
    },
    {
      name: "กระสอบทรายถม (Filling Sand)",
      description:
        "น้ำหนัก 25 กิโลกรัมจัดส่งฟรี : 10 กิโลเมตร จากสาขา",
      image: "/products/sand/3_1.png",
    },
    {
      name: "กระสอบทรายหยาบ (Coarse Sand)",
      description:
        "น้ำหนัก 25 กิโลกรัมจัดส่งฟรี : 10 กิโลเมตร จากสาขา",
      image: "/products/sand/4_1.png",
    },
  ];

  // ทรายสามประเภทที่ใช้ในงานก่อสร้าง
  const constructionSandTypes = [
    {
      title: "สั่งเหมาคันรถ (ราคาขายส่ง)",
      subtitle: "",
      icon: "�",
      features: [
        "ผู้รับเหมา, งานก่อสร้าง, ถมที่",
        "ขนส่งด้วย: รถ 6 ล้อ (3-5 คิว) / รถ 10 ล้อ (10-12 คิว) / รถพ่วง",
        "ราคาถูกที่สุด เฉลี่ยต่อคิวต่ำ เหมาะกับงานปริมาณมาก",
      ],
      bgGradient: "from-[#5a7a9a] to-[#6e8aaa]",
    },
    {
      title: "สั่งเป็นถุง / กระบะ (ราคาปลีก)",
      subtitle: "",
      icon: "🟤",
      features: [
        "งานซ่อมแซม, จัดสวน, งานต่อเติมเล็กๆ",
        "สั่งน้อยก็ส่ง สะดวก ขนย้ายง่าย ไม่เลอะหน้างาน",
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

   const whyChooseUs = [
    {
      title: "เจ้าของบ่อเอง",
      description: "มั่นใจได้ราคาต้นน้ำ ไม่ผ่านคนกลาง",
    },
    {
      title: "คิวเต็ม 100",
      description: "ตวงมาตรฐาน ไม่มีการหมกเม็ดปริมาณ",
    },
    {
      title: "มีของตลอดปี",
      description: "สต็อกแน่น ไม่ต้องกลัวของขาด หน้างานไม่สะดุด",
    },
    {
      title: "ส่งไว ทันใช้",
      description: "มีเครือข่ายรถบรรทุกวิ่งงานตลอด 24 ชม. (หรือตามเวลาทำการ)",
    },
  ];

  // รูปภาพการจัดส่ง (4x3 = 12 รูป)
  const deliveryPhotos = [
    { src: "/work/work-01.jpg", alt: "ส่งงานวัดบึงทองหลวง (ทรายหยาย)" },
    { src: "/work/work-02.jpg", alt: "ส่งงานถมที่เทพรักษ์ (รถพ่วง)" },
    { src: "/work/work-03.jpg", alt: "ส่งงานก่อสร้างอาคาร (รถ 6 ล้อ)" },
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

      {/* Section 2: ประเภททราย (8 cards: 3 แถวบน + 2 แถวกลาง + 3 แถวล่าง) */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ศูนย์รวมทรายก่อสร้างครบวงจร ราคาหน้าบ่อ (ปลีก-ส่ง)
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          ทรายถม ทรายหยาบ คิวเต็ม ไม่โกงตาชั่ง มีจำหน่ายทั้งแบบคิวและแบบกระสอบ <br /> พร้อมทีมรถดั๊มพ์ส่งถึงหน้างานทั่วกรุงเทพฯ-ปริมณฑล
        </p>
        <div className="mt-4 md:mt-6 w-16 md:w-20 h-1 bg-(--color-gold) mx-auto"></div>
          </div>

          {/* Responsive grid: images keep 1:1 aspect ratio with Tailwind's aspect-square */}
          <AnimatedSection >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
        {sandTypes.map((sand) => (
          <div
            key={sand.name}
            className="rounded-sm overflow-hidden border-2 border-(--psv-border) shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
          >
            {/* Square image container */}
            <div className="relative w-full aspect-square">
          <Image
            src={sand.image}
            alt={sand.name}
            fill
            className="object-cover"
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          />
            </div>

            {/* Description under image */}
            <div className="p-4 text-center">
          <h4 className="text-lg font-semibold text-gray-900 mb-1">
            {sand.name}
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {sand.description}
          </p>
            </div>
          </div>
        ))}
        </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: การนำไปใช้งาน (3 cards) */}
      <section className="py-12 md:py-16 lg:py-20 bg-linear-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ราคาและรูปแบบการจัดส่ง
            </h2>
            
            <div className="w-16 md:w-20 h-1 bg-(--color-gold) mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {constructionSandTypes.map((sand, index) => (
              <AnimatedSection
                key={sand.title}
                
                delay={index * 150}
                
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
              </AnimatedSection>
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
      </section>

      

      {/* Why Choose Us Section */}
            <AnimatedSection className="py-16 bg-gray-50">
              <div className="container mx-auto px-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    ทำไมต้องสั่งทรายกับ PSV?
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
            </AnimatedSection>

      
      {/* Section 5: ลูกค้าของเรา - Testimonials */}
      <TestimonialsSection
        title="ลูกค้าของเรา"
        subtitle="ลูกค้าชั้นนำที่ไว้วางใจ PSV Group"
        bgColor="bg-white"
      />

      <CustomerReviews />

      <DeliveryPhotos photos={deliveryPhotos} />
    </div>
  );
}
