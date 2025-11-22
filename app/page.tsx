"use client";

import BannerCarousel from "@/components/BannerCarousel";
import CustomerReviews from "@/components/CustomerReviews";
import TestimonialsSection from "@/components/TestimonialsSection";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import DeliveryPhotos from "@/components/DeliveryPhotos";

export default function Home() {
  // Gallery images array
  const galleryImages = [
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
    <div className="min-h-screen">
      <BannerCarousel />
      {/* About Brand Section - Short Story (3-4 lines) + PSV Story */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-12">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="relative bg-gray-300 mb-4 w-full h-[300px] md:h-[400px]">
                  <Image
                    src="/psv_hero.png"
                    alt="PSV Group - Construction Materials"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  บริษัท พีเอสวี กรุ๊ป จำกัด
                </h3>
                <p className="text-gray-600">
                  มากกว่า 30
                  ปีแห่งประสบการณ์ในการให้บริการวัสดุก่อสร้างคุณภาพสูง
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-sm">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                  บริษัท พีเอสวี กรุ๊ป จำกัด
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  เป็นผู้ประกอบการค้าวัสดุก่อสร้าง ประเภท ทราย ดิน หิน ลูกรัง
                  ที่มีคุณภาพดีที่สุด ตามความต้องการของท้องตลาด เนื่องจาก บริษัท
                  ผลิตวัสดุเองจากบ่อดินบ่อทรายบนเนื้อที่ 4000 ไร่
                  ขนส่งเองโดยเรือเหล็กของบริษัทที่มากรุงเทพ
                  และขายเองโดยบริษัทในเครือจึงสามารถทำราคาได้ถูกที่สุดในท้องตลาดการันตีได้จาก
                  บริษัท อิตาเลี่ยนไทยฯ บริษัท ช.การช่างฯ บริษัท ชิโนไทยฯ บริษัท
                  ยูนิค เอ็นจิเนียริ่งฯ เป็นต้น ที่ไว้วางใจ
                  และใช้วัสดุและเป็นลูกค้าของเรามานานกว่า 30 ปี
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  นอกจากนี้ด้วยวัสดุที่ผลิตเองทางบริษัทจึงมีบริการจัดสวน ปรับเกลี่ยและบริการรับถมที่ในกรุงเทพ
                  และปริมณฑล
                  ในราคาและคุณภาพที่ดีที่สุดในปัจจุบันเราเปิดบริการจุดขายอยู่ 3
                  สาขา สายไหม รังสิต สำโรง
                  สามารถจัดส่งสินค้าได้ทั้งกรุงเทพและปริมณฑลและเราจะขยายสาขาเพิ่มเรื่อยๆเพื่อครอบคลุมการให้บริการลูกค้าให้ทั่วถึงที่สุด
                </p>
                <p className="text-gray-700 leading-relaxed">
                  บริษัท ผลิตวัสดุเองจากบ่อดินบ่อทรายบนเนื้อที่ 4000 ไร่
                  ขนส่งเองโดยเรือเหล็กของบริษัท
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Branch Locations - สาขาที่มีปัจจุบัน */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#446084]/5 rounded-full mb-4">
                <span className="text-sm font-semibold text-[#446084] uppercase tracking-wider">
                  Our Locations
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                สาขาของเรา
              </h2>
              <div className="w-20 h-1 bg-[#446084] mx-auto rounded-full"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Branch 1 - Sai Mai */}
            <AnimatedSection delay={100}>
              <div className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gray-300">
                  <Image
                    src="/branch/Location_saimai.jpg"
                    alt="สาขา สายไหม"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-[#446084] mb-3">
                    สาขา สายไหม
                  </h3>
                  <p className="text-gray-600 mb-2">กรุงเทพมหานคร</p>
                  <p className="text-sm text-gray-500">
                    เปิดบริการทุกวัน 08:00-17:00
                  </p>
                  <div className="style-4">ส่งสินค้ากลางคืนได้</div>
                </div>
              </div>
            </AnimatedSection>

            {/* Branch 2 - Rangsit */}
            <AnimatedSection delay={200}>
              <div className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gray-300">
                  <Image
                    src="/branch/Location_rangsit.jpg"
                    alt="สาขา รังสิต"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-[#446084] mb-3">
                    สาขา รังสิต
                  </h3>
                  <p className="text-gray-600 mb-2">ปทุมธานี</p>
                  <p className="text-sm text-gray-500">
                    เปิดบริการทุกวัน 08:00-17:00
                  </p>
                  <div className="style-4">ส่งสินค้ากลางคืนได้</div>
                </div>
              </div>
            </AnimatedSection>

            {/* Branch 3 - Samrong */}
            <AnimatedSection delay={300}>
              <div className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gray-300">
                  <Image
                    src="/branch/Location_samutrprakarn.jpg"
                    alt="สาขา สำโรง"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-[#446084] mb-3">
                    สาขา สำโรง
                  </h3>
                  <p className="text-gray-600 mb-2">สมุทรปราการ</p>
                  <p className="text-sm text-gray-500">
                    เปิดบริการทุกวัน 08:00-17:00
                  </p>
                  <div className="style-4">ส่งสินค้ากลางคืนได้</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us - ทำไมถึงเลือกใช้บริการเรา */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-12">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              ทำไมถึงเลือกใช้บริการเรา
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Reason 1 */}
            <AnimatedSection delay={100}>
              <div className="bg-gray-50 p-6 rounded-sm text-center hover:shadow-lg transition-shadow">
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
                  ผลิตเอง
                </h3>
                <p className="text-gray-600 text-sm">
                  มีบ่อดินและทรายเป็นของตนเอง บนเนื้อที่ 4000 ไร่
                </p>
              </div>
            </AnimatedSection>

            {/* Reason 2 */}
            <AnimatedSection delay={200}>
              <div className="bg-gray-50 p-6 rounded-sm text-center hover:shadow-lg transition-shadow">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  ราคาถูกที่สุด
                </h3>
                <p className="text-gray-600 text-sm">
                  ขายราคาถูกที่สุดในตลาด เพราะผลิตเอง
                </p>
              </div>
            </AnimatedSection>

            {/* Reason 3 */}
            <AnimatedSection delay={300}>
              <div className="bg-gray-50 p-6 rounded-sm text-center hover:shadow-lg transition-shadow">
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
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  คุณภาพดี
                </h3>
                <p className="text-gray-600 text-sm">
                  คัดสรรวัสดุอย่างดี เพื่อประสิทธิภาพสูงสุด
                </p>
              </div>
            </AnimatedSection>

            {/* Reason 4 */}
            <AnimatedSection delay={400}>
              <div className="bg-gray-50 p-6 rounded-sm text-center hover:shadow-lg transition-shadow">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  จัดส่งรวดเร็ว
                </h3>
                <p className="text-gray-600 text-sm">
                  บริการจัดส่งทั่วกรุงเทพและปริมณฑล
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <AnimatedSection>
        <TestimonialsSection />
      </AnimatedSection>

      {/* Customer Reviews Section */}
      <AnimatedSection>
        <CustomerReviews />
      </AnimatedSection>

      {/* Value Proposition - Value ที่เราส่งมอบให้กับลูกค้า */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Value ที่เราส่งมอบให้กับลูกค้า
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <AnimatedSection delay={100}>
              <div>
                <div className="text-5xl font-bold text-[#D4AF37] mb-3">
                  30+
                </div>
                <p className="text-xl">ปีแห่งความเชื่อมั่น</p>
                <p className="text-sm text-gray-300 mt-2">
                  มากกว่า 3 ทศวรรษแห่งประสบการณ์
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div>
                <div className="text-5xl font-bold text-[#D4AF37] mb-3">
                  4,000
                </div>
                <p className="text-xl">ไร่ พื้นที่ผลิต</p>
                <p className="text-sm text-gray-300 mt-2">
                  บ่อดินและทรายของตนเอง
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div>
                <div className="text-5xl font-bold text-[#D4AF37] mb-3">3</div>
                <p className="text-xl">สาขาให้บริการ</p>
                <p className="text-sm text-gray-300 mt-2">
                  สายไหม รังสิต สำโรง
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <AnimatedSection>
        <DeliveryPhotos
          photos={galleryImages}
          title="ภาพการจัดส่งสินค้าและบริการ"
          description="ภาพหน้างานจริง"
        />
      </AnimatedSection>
    </div>
  );
}
