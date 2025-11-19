"use client";

import Image from "next/image";
import Link from "next/link";
import TestimonialsSection from "@/components/TestimonialsSection";
import CustomerReviews from "@/components/CustomerReviews";
import BannerCarousel from "@/components/BannerCarousel";
import { Fade } from "react-awesome-reveal";
import DeliveryPhotos from "@/components/DeliveryPhotos";

export default function LandFillingServicePage() {
  const galleryImages = [
    { id: 1, src: "/services/land-filling/landfilling-01.jpg" },
    { id: 2, src: "/services/land-filling/landfilling-02.jpg" },
    { id: 3, src: "/services/land-filling/landfilling-03.jpg" },
    { id: 4, src: "/services/land-filling/landfilling-04.jpg" },
    { id: 5, src: "/services/land-filling/landfilling-05.jpg" },
    { id: 6, src: "/services/land-filling/landfilling-06.jpg" },
    { id: 7, src: "/services/land-filling/landfilling-07.jpg" },
    { id: 8, src: "/services/land-filling/landfilling-08.jpg" },
    { id: 9, src: "/services/land-filling/landfilling-09.jpg" },
    { id: 10, src: "/services/land-filling/landfilling-10.jpg" },
    { id: 11, src: "/services/land-filling/landfilling-11.jpg" },
    { id: 12, src: "/services/land-filling/landfilling-12.jpg" },
    { id: 13, src: "/services/land-filling/landfilling-13.jpg" },
    { id: 14, src: "/services/land-filling/landfilling-14.jpg" },
    { id: 15, src: "/services/land-filling/landfilling-15.jpg" },
    { id: 16, src: "/services/land-filling/landfilling-16.jpg" },
    { id: 17, src: "/services/land-filling/landfilling-17.jpg" },
    { id: 18, src: "/services/land-filling/landfilling-18.jpg" },
    { id: 19, src: "/services/land-filling/landfilling-19.jpg" },
    { id: 20, src: "/services/land-filling/landfilling-20.jpg" },
    { id: 21, src: "/services/land-filling/landfilling-21.jpg" },
    { id: 22, src: "/services/land-filling/landfilling-22.jpg" },
    { id: 23, src: "/services/land-filling/landfilling-23.jpg" },
    { id: 24, src: "/services/land-filling/landfilling-24.jpg" },
    { id: 25, src: "/services/land-filling/landfilling-25.jpg" },
    { id: 26, src: "/services/land-filling/landfilling-26.jpg" },
    { id: 27, src: "/services/land-filling/landfilling-27.jpg" },
    { id: 28, src: "/services/land-filling/landfilling-28.jpg" },
    { id: 29, src: "/services/land-filling/landfilling-29.jpg" },
    { id: 30, src: "/services/land-filling/landfilling-30.jpg" },
    { id: 31, src: "/services/land-filling/landfilling-31.jpg" },
    { id: 32, src: "/services/land-filling/landfilling-32.jpg" },
    { id: 33, src: "/services/land-filling/landfilling-33.jpg" },
    { id: 34, src: "/services/land-filling/landfilling-34.jpg" },
    { id: 35, src: "/services/land-filling/landfilling-35.jpg" },
    { id: 36, src: "/services/land-filling/landfilling-36.jpg" },
    { id: 37, src: "/services/land-filling/landfilling-37.jpg" },
    { id: 38, src: "/services/land-filling/landfilling-38.jpg" },
    { id: 39, src: "/services/land-filling/landfilling-39.jpg" },
  ];


  const services = [
    {
      title: "รับถมที่ดิน",
      description:
        "บริการรับถมที่ดินทุกขนาด ใช้วัสดุคุณภาพดี มีหลากหลายชนิดให้เลือก เหมาะสมกับการใช้งาน",
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
    {
      title: "บริการเคลียร์ริ่งและปรับระดับพื้นที่",
      description:
        "บริการเคลียร์ริ่งและปรับระดับพื้นที่ ยกระดับที่ดิน เพื่อป้องกันน้ำท่วมหรือเตรียมพื้นที่สำหรับการก่อสร้าง",
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
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
    },
  ];

  const whyChooseUs = [
    {
      title: "ไม่ทิ้งงาน 100%",
      description: "การันตีด้วยชื่อเสียงบริษัท PSV และผลงานที่ผ่านมา",
    },
    {
      title: "วัดปริมาณดินเป็นธรรม",
      description: "คำนวณคิวแน่น หรือคิวหลวม แจ้งลูกค้าชัดเจน ไม่หมกเม็ด",
    },
    {
      title: " ราคาโรงงาน",
      description: "เพราะเราเป็นศูนย์ค้าส่งวัสดุก่อสร้าง (ทราย/ดิน/หิน) เอง ทำให้ได้ราคาต้นทุนที่ดีกว่า",
    },
    {
      title: "งานเสร็จตรงเวลา",
      description: "มีเครื่องจักรเพียงพอ ทำงานต่อเนื่อง จบงานไว",
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
                บริการรับถมที่ครบวงจร โดย PSV <br/> (ถมที่ดิน, ปรับหน้าดิน, บดอัด)
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                รองรับทุกความต้องการงานถมที่ดิน ไม่ว่าจะเป็นงานปรับพื้นที่สำหรับ
                สร้างบ้านเดี่ยว งานฐานราก โรงงานอุตสาหกรรม หรือโครงการ
                หมู่บ้านจัดสรร ขนาดใหญ่ เรามั่นใจในศักยภาพด้วยการเป็น
                เจ้าของบ่อดินโดยตรง ตัดปัญหาเรื่องคุณภาพ
                พร้อมด้วยทีมงานเชี่ยวชาญและรถขนส่งถึงหน้างานครบครัน
                การันตีงานเสร็จไว ตรงตามกำหนดเวลา
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed font-semibold">
                ยินดีให้คำปรึกษา พร้อมบริการสำรวจหน้างานและประเมินราคา ฟรี!
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#446084] text-white px-8 py-3 rounded-sm font-semibold hover:opacity-90 transition-opacity duration-200"
              >
                สอบถามราคา / นัดสำรวจหน้างาน
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 bg-gray-300 rounded-sm overflow-hidden">
                <Image
                  src="/landfilling1.jpg"
                  alt="งานถมที่ 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 bg-gray-300 rounded-sm overflow-hidden">
                <Image
                  src="/landfilling2.jpg"
                  alt="งานถมที่ 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 bg-gray-300 rounded-sm overflow-hidden">
                <Image
                  src="/landfilling3.jpg"
                  alt="งานถมที่ 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 bg-gray-300 rounded-sm overflow-hidden">
                <Image
                  src="/landfilling4.jpg"
                  alt="งานถมที่ 4"
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
              ทีมงานติดตั้ง/Caseตัวอย่างงานติดตั้ง
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 1, src: "/services/land-filling/1.png" },
              { id: 2, src: "/services/land-filling/2.png" },
              { id: 3, src: "/services/land-filling/3.png" },
            ].map((item) => (
              <div
                key={item.id}
                className="relative aspect-square bg-gray-300 rounded-sm overflow-hidden border-2 border-[#e6e9ef] hover:border-[#446084] transition-all duration-300"
              >
                <Image
                  src={ item.src}
                  alt={`ตัวอย่างงานถมที่ ${item.id}`}
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
              บริการรับถมที่ครบวงจร ตอบโจทย์ทุกความต้องการ
            </p>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
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
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection
        title="ลูกค้าที่ไว้วางใจเรา"
        subtitle="ที่ไว้วางใจและใช้บริการของเรามาอย่างต่อเนื่องมากกว่า 30 ปี"
        bgColor="bg-gray-50"
      />

      {/* Customer Reviews Section */}
      <CustomerReviews />

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              พร้อมให้บริการคุณแล้ว
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              ติดต่อเราเพื่อขอคำปรึกษาหรือขอใบเสนอราคา
              ทีมงานมืออาชีพพร้อมให้บริการ
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#D4AF37] text-white px-8 py-3 rounded-sm font-semibold hover:opacity-90 transition-opacity duration-200 mb-3"
            >
              ติดต่อเรา
            </Link>
          </div>
        </div>
      </section>

      <DeliveryPhotos
        photos={galleryImages.map((img) => ({
          src: img.src,
          alt: `ผลงานถมที่ ${img.id}`,
        }))}
        title="ภาพหน้างานจริง"
        description="ผลงานการถมที่ของเรา"
      />
    </div>
  );
}
