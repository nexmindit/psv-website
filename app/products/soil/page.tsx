"use client";

import Image from "next/image";
import TestimonialsSection from "@/components/TestimonialsSection";
import BannerCarousel from "@/components/BannerCarousel";
import CustomerReviews from "@/components/CustomerReviews";
import AnimatedSection from "@/components/AnimatedSection";
import DeliveryPhotos from "@/components/DeliveryPhotos";

export default function SoilPage() {
  // ประเภทดิน 8 ชนิด (3 แถวบน + 2 แถวล่างกึ่งกลาง)
  const soilTypes = [
    {
      name: "หน้าดิน (Topsoil) คิว",
      description:
        "เหมาะสำหรับงานจัดสวนขนาดใหญ่, ถมปรับหน้าดิน, โครงการหมู่บ้าน",
      image: "/products/soil/1_1.png",
    },
    {
      name: "กระสอบหน้าดิน (Topsoil)",
      description:
        "เหมาะสำหรับเติมกระถาง, แปลงผักสวนครัว, ซ่อมแซมสนามหญ้า",
      image: "/products/soil/1_2.png",
    },
    
  ];

  // ดิน 3 ประเภทที่ใช้ในงานก่อสร้าง
  const constructionSoilTypes = [
    {
      title: "สั่งเหมาลำ (รถ 6 ล้อ / 10 ล้อ)",
      subtitle: "",
      icon: "🟫",
      features: [
        "เหมาะสำหรับงานจัดสวนขนาดใหญ่, ถมปรับหน้าดิน, โครงการหมู่บ้าน",
        "ดินเต็มคิว ไม่โกงตาชั่ง ราคาเฉลี่ยต่อคิวถูกที่สุด",
      ],
      bgGradient: "from-[#446084] to-[#5a7a9a]",
    },
    {
      title: "สั่งจำนวนน้อย / ใส่ถุง",
      subtitle: "",
      icon: "🌱",
      features: [
        "เหมาะสำหรับเติมกระถาง, แปลงผักสวนครัว, ซ่อมแซมสนามหญ้า",
        "ดินสะอาด พร้อมปลูก ส่งถึงหน้าบ้าน",
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

  const whyChooseUs = [
    {
      title: "เนื้อดินร่วนซุย",
      description: "รากพืชเดินง่าย ระบายน้ำดีแต่ยังเก็บความชื้นได้เหมาะสม",
    },
    {
      title: "สะอาด คัดเกรด",
      description: "เรากรองเศษขยะ เศษหิน หรือวัชพืชออกแล้ว มั่นใจได้ดินล้วนๆ",
    },
    {
      title: "อุดมสมบูรณ์",
      description: "เป็นหน้าดินผิวดินธรรมชาติ มีแร่ธาตุและอินทรียวัตถุที่ต้นไม้ต้องการ",
    },
    {
      title: "ใช้งานได้ทันที",
      description: "ไม่ต้องหมักดินเพิ่ม สามารถลงต้นไม้หรือปูหญ้าได้เลย",
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

      {/* Section 2: ประเภทดิน (8 cards: 3 แถวบน + 2 แถวกลาง + 3 แถวล่าง) */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              หน้าดินดำเกรด A คัดพิเศษ (ราคาหน้าบ่อ)
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              ดินดี ร่วนซุย ธาตุอาหารสูง เหมาะสำหรับปลูกต้นไม้ จัดสวน หรือปรับหน้าดินชั้นบน <br/> ส่งตรงจากบ่อ ไม่ผ่านคนกลาง
            </p>
            <div className="mt-4 md:mt-6 w-16 md:w-20 h-1 bg-(--color-gold) mx-auto"></div>
          </div>

          {/* Responsive grid: images keep 1:1 aspect ratio with Tailwind's aspect-square */}
                    <AnimatedSection >

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                  {soilTypes.map((soil) => (
                    <div
                      key={soil.name}
                      className="rounded-sm overflow-hidden border-2 border-(--psv-border) shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
                    >
                      {/* Square image container */}
                      <div className="relative w-full aspect-square">
                    <Image
                      src={soil.image}
                      alt={soil.name}
                      fill
                      className="object-cover"
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    />
                      </div>
          
                      {/* Description under image */}
                      <div className="p-4 text-center">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {soil.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {soil.description}
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
              ราคาและเงื่อนไข
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              แบ่งตามปริมาณการสั่ง
            </p>
            <div className="w-16 md:w-20 h-1 bg-(--color-gold) mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {constructionSoilTypes.map((soil, index) => (
              <AnimatedSection
                key={soil.title}
                delay={index * 150}
                
              >
                <div
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
                    {soil.features.map((feature, index) => (
                      <li
                        key={index}
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
      </section>

       {/* Why Choose Us Section */}
                  <AnimatedSection className="py-16 bg-gray-50">
                    <div className="container mx-auto px-12">
                      <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                          ทำไมต้อง "หน้าดิน" ของ PSV?
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
