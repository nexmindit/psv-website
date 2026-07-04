"use client";

import Image from "next/image";
import TestimonialsSection from "@/components/TestimonialsSection";
import BannerCarousel from "@/components/BannerCarousel";
import CustomerReviews from "@/components/CustomerReviews";
import AnimatedSection from "@/components/AnimatedSection";
import DeliveryPhotos from "@/components/DeliveryPhotos";

export default function StonePage() {
  // ประเภทหิน 8 ชนิด (3 แถวบน + 2 แถวล่างกึ่งกลาง)
  const stoneTypes = [
    {
      name: "หินคลุก",
      description:
        "หินที่มีฝุ่นหินผสม บดอัดได้ดีเยี่ยม สำหรับทำถนน ลานจอดรถ หรือรองพื้นปูทางเดิน",
      image: "/products/stone/crushed.webp",
    },
    {
      name: "หินเกล็ด",
      description:
        "หินเม็ดเล็กสีขาว/เทา สำหรับงานจัดสวน โรยทางเดิน ทำพื้นที่ระบายน้ำ หรือผสมคอนกรีตที่ต้องการความละเอียด",
      image: "/products/stone/flake.webp",
    },
    {
      name: "หิน 1 หรือหิน 3/4",
      description:
        "หินเบอร์ 1 (3/4 นิ้ว) สำหรับงานผสมคอนกรีต งานเทพื้น และโครงสร้างทั่วไป",
      image: "/products/stone/no1.webp",
    },
    {
      name: "ลูกรัง",
      description:
        "ดินลูกรังสีแดง สำหรับงานรองพื้นชั้นล่างสุด ถมทำถนนในไซต์งาน หรือบดอัดลานดิน",
      image: "/products/stone/laterite.webp",
    },
    {
      name: "กระสอบหินคลุก",
      description:
        "หินที่มีฝุ่นหินผสม บดอัดได้ดีเยี่ยม สำหรับทำถนน ลานจอดรถ หรือรองพื้นปูทางเดิน",
      image: "/products/stone/bag-crushed.webp",
    },
    {
      name: "กระสอบหินเกล็ด",
      description:
        "หินเม็ดเล็กสีขาว/เทา สำหรับงานจัดสวน โรยทางเดิน ทำพื้นที่ระบายน้ำ หรือผสมคอนกรีตที่ต้องการความละเอียด",
      image: "/products/stone/bag-flake.webp",
    },
    {
      name: "กระสอบหิน 1 หรือหิน 3/4",
      description:
        "หินเบอร์ 1 (3/4 นิ้ว) สำหรับงานผสมคอนกรีต งานเทพื้น และโครงสร้างทั่วไป",
      image: "/products/stone/bag-no1.webp",
    },
    {
      name: "กระสอบลูกรัง",
      description:
        "ดินลูกรังสีแดง สำหรับงานรองพื้นชั้นล่างสุด ถมทำถนนในไซต์งาน หรือบดอัดลานดิน",
      image: "/products/stone/bag-laterite.webp",
    },
  ];

  // หิน 3 ประเภทที่ใช้ในงานก่อสร้าง
  const constructionStoneTypes = [
    {
      title: "หินโครงสร้าง (Building)",
      subtitle: "หิน 1",
      icon: "🪨",
      features: ["ราคาขายส่ง เน้นคุณภาพสำหรับงานเทคอนกรีตโดยเฉพาะ"],
      bgGradient: "from-[#446084] to-[#5a7a9a]",
    },
    {
      title: "หินรองพื้น (Sub-Base)",
      subtitle: "หินคลุก, ลูกรัง",
      icon: "🔷",
      features: ["บดอัดแน่น ไม่ยุบตัวง่าย สำหรับทำถนนและลานจอดรถ"],
      bgGradient: "from-[#6e8aaa] to-[#829aba]",
    },
    {
      title: "หินจัดสวน (Landscaping)",
      subtitle: "หินเกล็ด",
      icon: "🔹",
      features: ["มีหลายสี หลายขนาด สำหรับงานตกแต่งและงาน DIY"],
      bgGradient: "from-[#5a7a9a] to-[#6e8aaa]",
    },
    {
      title: "บริการขนส่ง (Delivery)",
      subtitle: "",
      icon: "🟤",
      features: [
        "มีรถดั๊มพ์ 6 ล้อ / 10 ล้อ และรถพ่วง ขนส่งตรงจากแหล่งหิน คิวเต็มทุกเที่ยว",
      ],
      bgGradient: "from-[#5a7a9a] to-[#6e8aaa]",
    },
  ];

  const whyChooseUs = [
    {
      title: "ราคาโรงโม่/หน้าบ่อ",
      description: "เราคือผู้จำหน่ายรายใหญ่ ได้ราคาทุนที่ถูกกว่า",
    },
    {
      title: "คิวเต็ม 100%",
      description: "มั่นใจได้ปริมาณครบตามสั่ง ด้วยการชั่งน้ำหนักมาตรฐาน",
    },
    {
      title: "หินสะอาด คัดขนาด",
      description: "ได้หินตามสเปกเป๊ะๆ ไม่ปนเศษดิน/ขยะ",
    },
    {
      title: "จัดส่งรวดเร็ว",
      description: "พร้อมขนส่งตลอดเวลาตามความต้องการของไซต์งาน",
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
    {
      src: "/products/stone/deliveryWork/delivery-flake-01.webp",
      alt: "งานลงหินเกล็ด 1",
    },
    {
      src: "/products/stone/deliveryWork/delivery-flake-02.webp",
      alt: "งานลงหินเกล็ด 2",
    },
    {
      src: "/products/stone/deliveryWork/delivery-flake-03.webp",
      alt: "งานลงหินเกล็ด 3",
    },
    {
      src: "/products/stone/deliveryWork/delivery-flake-04.webp",
      alt: "งานลงหินเกล็ด 4",
    },
    {
      src: "/products/stone/deliveryWork/delivery-flake-05.webp",
      alt: "งานลงหินเกล็ด 5",
    },
    {
      src: "/products/stone/deliveryWork/delivery-flake-06.webp",
      alt: "งานลงหินเกล็ด 6",
    },
    {
      src: "/products/stone/deliveryWork/delivery-parking-01.webp",
      alt: "งานลงหินทำลานจอดรถบ.อินเตอร์ไทน 1",
    },
    {
      src: "/products/stone/deliveryWork/delivery-parking-02.webp",
      alt: "งานลงหินทำลานจอดรถบ.อินเตอร์ไทน 2",
    },
    {
      src: "/products/stone/deliveryWork/delivery-parking-03.webp",
      alt: "งานลงหินทำลานจอดรถบ.อินเตอร์ไทน 3",
    },
    {
      src: "/products/stone/deliveryWork/delivery-parking-04.webp",
      alt: "งานลงหินทำลานจอดรถบ.อินเตอร์ไทน 4",
    },
    {
      src: "/products/stone/deliveryWork/delivery-parking-05.webp",
      alt: "งานลงหินทำลานจอดรถบ.อินเตอร์ไทน 5",
    },
    {
      src: "/products/stone/deliveryWork/delivery-parking-06.webp",
      alt: "งานลงหินทำลานจอดรถบ.อินเตอร์ไทน 6",
    },
    {
      src: "/products/stone/deliveryWork/delivery-border-01.webp",
      alt: "งานทำขอบกั้น 1",
    },
    {
      src: "/products/stone/deliveryWork/delivery-border-02.webp",
      alt: "งานทำขอบกั้น 2",
    },
    {
      src: "/products/stone/deliveryWork/delivery-border-03.webp",
      alt: "งานทำขอบกั้น 3",
    },
    {
      src: "/products/stone/deliveryWork/delivery-border-04.webp",
      alt: "งานทำขอบกั้น 4",
    },
    {
      src: "/products/stone/deliveryWork/delivery-border-05.webp",
      alt: "งานทำขอบกั้น 5",
    },
    {
      src: "/products/stone/deliveryWork/delivery-border-06.webp",
      alt: "งานทำขอบกั้น 6",
    },
    {
      src: "/products/stone/deliveryWork/delivery-border-07.webp",
      alt: "งานทำขอบกั้น 7",
    },
  ];
  return (
    <div className="bg-white">
      <BannerCarousel />

      {/* Section 2: ประเภทหิน (8 cards: 3 แถวบน + 2 แถวกลาง + 3 แถวล่าง) */}
      <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ศูนย์จำหน่ายหินก่อสร้างและหินจัดสวน (ทุกประเภท ทุกขนาด)
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              หิน 1, หิน 2, หินคลุก, หินเกล็ด, ลูกรัง... ครบจบในที่เดียว!
              ส่งตรงจากโรงโม่ <br /> ราคาหน้าบ่อ คิวเต็ม ส่งด่วนถึงหน้างาน
            </p>
            <div className="mt-4 md:mt-6 w-16 md:w-20 h-1 bg-(--color-gold) mx-auto"></div>
          </div>

          {/* Responsive grid: images keep 1:1 aspect ratio with Tailwind's aspect-square */}
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              {stoneTypes.map((stone) => (
                <div
                  key={stone.name}
                  className="rounded-sm overflow-hidden border-2 border-(--psv-border) shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
                >
                  {/* Square image container */}
                  <div className="relative w-full aspect-square">
                    <Image
                      src={stone.image}
                      alt={stone.name}
                      fill
                      className="object-cover"
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    />
                  </div>

                  {/* Description under image */}
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {stone.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {stone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
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
              <AnimatedSection key={stone.title} delay={index * 150}>
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
              </AnimatedSection>
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
                  src="/sales/sales_step.webp"
                  alt="ขั้นตอนการสั่งซื้อ"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              สั่งหินกับ PSV มั่นใจได้อะไร
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
