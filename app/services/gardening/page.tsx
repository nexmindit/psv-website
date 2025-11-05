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
  const services = [
    {
      title: "ออกแบบและจัดสวน",
      description:
        "ออกแบบและจัดสวนตามความต้องการ ด้วยทีมงานมืออาชีพ ใช้พันธุ์ไม้คุณภาพดี เหมาะสมกับสภาพแวดล้อม",
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
      title: "ดูแลบำรุงรักษา",
      description:
        "บริการดูแลสวนสม่ำเสมอ ตัดแต่งกิ่งไม้ ให้น้ำ ใส่ปุ๋ย กำจัดวัชพืช เพื่อให้สวนสวยงามตลอดเวลา",
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
      title: "ปรับปรุงภูมิทัศน์",
      description:
        "ปรับเปลี่ยนภูมิทัศน์ใหม่ ติดตั้งระบบน้ำ ระบบไฟสนาม วางศิลาแลง จัดวางต้นไม้ประดับ",
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
      {/* Hero Banner - Service Overview */}

      <img
        src="/psv_banner.png"
        alt="PSV Group Banner"
        className="w-full h-full"
      />

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
                  src="https://placehold.co/600x400.png"
                  alt="งานจัดสวน 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="งานจัดสวน 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="งานจัดสวน 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden">
                <Image
                  src="https://placehold.co/600x400.png"
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
            {[
              { id: 1, color: "2E8B57" },
              { id: 2, color: "3CB371" },
              { id: 3, color: "66CDAA" },
            ].map((item) => (
              <div
                key={item.id}
                className="relative aspect-square bg-gray-300 rounded-lg overflow-hidden border-2 border-[#e6e9ef] hover:border-[#446084] transition-all duration-300"
              >
                <Image
                  src={`https://placehold.co/800x800`}
                  alt={`ตัวอย่างงานจัดสวน ${item.id}`}
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
            {services.map((service) => (
              <div
                key={service.title}
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
            {whyChooseUs.map((reason) => (
              <div
                key={reason.title}
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
            {[
              { id: 1, color: "90EE90" },
              { id: 2, color: "98FB98" },
              { id: 3, color: "8FBC8F" },
              { id: 4, color: "3CB371" },
              { id: 5, color: "2E8B57" },
              { id: 6, color: "228B22" },
              { id: 7, color: "006400" },
              { id: 8, color: "556B2F" },
            ].map((item) => (
              <div
                key={item.id}
                className="relative aspect-square bg-gray-300 rounded-lg overflow-hidden group"
              >
                <Image
                  src={`https://placehold.co/400x400`}
                  alt={`ผลงานจัดสวน ${item.id}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">โทรศัพท์</h3>
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">อีเมล</h3>
              <p className="text-gray-600">info@psvgroup.co.th</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

