import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: "บริการจัดสวน - PSV Group",
  description:
    "บริการจัดสวนครบวงจร ออกแบบและจัดสวน ดูแลบำรุงรักษา ปรับปรุงภูมิทัศน์ พร้อมทีมงานมืออาชีพ",
};

export default function GardeningServicePage() {
  const testimonials = [
    {
      company: "บริษัท อิตาเลี่ยนไทย ดีเวลลอปเม้นท์ จำกัด (มหาชน)",
      logo: "/testimonial1.jpeg",
    },
    {
      company: "บริษัท ช.การช่าง จำกัด (มหาชน)",
      logo: "/testimonial2.jpg",
    },
    {
      company: "บริษัท ชิโนไทย เอ็นจิเนียริ่ง แอนด์ คอนสตรัคชั่น จำกัด",
      logo: "/testimonial3.png",
    },
    {
      company: "บริษัท ยูนิค เอ็นจิเนียริ่ง แอนด์ คอนสตรัคชั่น จำกัด (มหาชน)",
      logo: "/testimonial4.jpg",
    },
  ];

  const services = [
    {
      title: "ออกแบบและจัดสวน",
      description:
        "ออกแบบและจัดสวนตามความต้องการ ด้วยทีมงานมืออาชีพ ใช้พันธุ์ไม้คุณภาพดี เหมาะสมกับสภาพแวดล้อม",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: "ดูแลบำรุงรักษา",
      description:
        "บริการดูแลสวนสม่ำเสมอ ตัดแต่งกิ่งไม้ ให้น้ำ ใส่ปุ๋ย กำจัดวัชพืช เพื่อให้สวนสวยงามตลอดเวลา",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "ปรับปรุงภูมิทัศน์",
      description:
        "ปรับเปลี่ยนภูมิทัศน์ใหม่ ติดตั้งระบบน้ำ ระบบไฟสนาม วางศิลาแลง จัดวางต้นไม้ประดับ",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  const whyChooseUs = [
    {
      title: "ทีมงานมืออาชีพ",
      description: "ช่างจัดสวนที่มีประสบการณ์และความเชี่ยวชาญ",
    },
    {
      title: "พันธุ์ไม้คุณภาพ",
      description: "คัดสรรพันธุ์ไม้คุณภาพดี เหมาะกับสภาพอากาศ",
    },
    {
      title: "ราคายุติธรรม",
      description: "ราคาที่เหมาะสมกับคุณภาพงานที่ได้รับ",
    },
    {
      title: "บริการครบวงจร",
      description: "จากการออกแบบ จัดสวน ไปจนถึงการดูแลรักษา",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[500px] bg-gray-300 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/psv_banner.png"
            alt="PSV Group - บริการจัดสวน"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* About Service Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                รับจัดสวน
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                เรามีบริการจัดสวนครบวงจร ตั้งแต่การออกแบบ จัดสวน
                ไปจนถึงการดูแลบำรุงรักษา
                ด้วยทีมงานมืออาชีพที่มีประสบการณ์มากกว่า 10 ปี
                พร้อมให้คำปรึกษาและแนะนำการจัดสวนที่เหมาะสมกับพื้นที่และความต้องการของคุณ
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                เราใช้พันธุ์ไม้คุณภาพดี
                คัดสรรมาเป็นอย่างดีเพื่อให้เหมาะสมกับสภาพอากาศและสภาพแวดล้อมของประเทศไทย
                พร้อมบริการจัดส่งและปลูกติดตั้งถึงหน้างาน
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#446084] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200"
              >
                ติดต่อขอคำปรึกษา
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden">
                <Image
                  src="/garden1.jpg"
                  alt="งานจัดสวน 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden">
                <Image
                  src="/garden2.jpg"
                  alt="งานจัดสวน 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden">
                <Image
                  src="/garden3.jpg"
                  alt="งานจัดสวน 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden">
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
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative aspect-square bg-gray-300 rounded-lg overflow-hidden border-2 border-[#e6e9ef] hover:border-[#446084] transition-all duration-300"
              >
                <Image
                  src={`/garden-case-${item}.jpg`}
                  alt={`ตัวอย่างงานจัดสวน ${item}`}
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
              บริการจัดสวนครบวงจร ตอบโจทย์ทุกความต้องการ
            </p>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border-2 border-[#e6e9ef] hover:border-[#446084] transition-all duration-300"
              >
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
              <div
                key={index}
                className="bg-white p-6 rounded-lg text-center border-2 border-[#e6e9ef] hover:shadow-lg transition-all duration-300"
              >
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

      {/* Gallery Section */}
      <section className="py-16 bg-white">
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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="relative aspect-square bg-gray-300 rounded-lg overflow-hidden group"
              >
                <Image
                  src={`/garden-work-${item}.jpg`}
                  alt={`ผลงานจัดสวน ${item}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Social Media */}
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
              className="inline-block bg-[#D4AF37] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 mb-8"
            >
              ติดต่อเรา
            </Link>
          </div>

          <div className="flex justify-center items-center gap-6 flex-wrap">
            <a
              href="https://www.facebook.com/PSVGroup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1877F2] hover:opacity-90 transition-opacity duration-200 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
            <a
              href="https://www.tiktok.com/@psvgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:opacity-90 transition-opacity duration-200 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              TikTok
            </a>
            <a
              href="http://line.me/ti/p/~@psv.group1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#06C755] hover:opacity-90 transition-opacity duration-200 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              Line: @psv.group1
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ช่องทางติดต่อเพิ่มเติม
            </h2>
            <div className="w-20 h-1 bg-[#446084] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg border-2 border-[#e6e9ef] text-center">
              <div className="w-16 h-16 bg-[#446084] rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                โทรศัพท์
              </h3>
              <p className="text-gray-600">02-XXX-XXXX</p>
              <p className="text-gray-600">08X-XXX-XXXX</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border-2 border-[#e6e9ef] text-center">
              <div className="w-16 h-16 bg-[#446084] rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                อีเมล
              </h3>
              <p className="text-gray-600">info@psvgroup.co.th</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
