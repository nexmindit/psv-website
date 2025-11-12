import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import TestimonialsSection from "@/components/TestimonialsSection";
import CustomerReviews from "@/components/CustomerReviews";
import BannerCarousel from "@/components/BannerCarousel";

export const metadata: Metadata = {
  title: "บริการรับถมที่ดิน - PSV Group",
  description:
    "บริการรับถมที่ดินคุณภาพสูง รับงานถมที่ทั้งกรุงเทพและปริมณฑล มีรถบริการหลากหลายขนาด พร้อมทีมงานมืออาชีพ",
};

export default function LandFillingServicePage() {
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
      title: "ปรับระดับพื้นที่",
      description:
        "บริการปรับระดับพื้นที่ ยกระดับที่ดิน เพื่อป้องกันน้ำท่วมหรือเตรียมพื้นที่สำหรับการก่อสร้าง",
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
    {
      title: "อัดดินแน่น",
      description:
        "บริการอัดดินให้แน่นด้วยเครื่องจักรทันสมัย เพื่อให้พื้นที่พร้อมสำหรับการก่อสร้าง",
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  ];

  const whyChooseUs = [
    {
      title: "ผลิตเอง",
      description: "มีบ่อดินและทรายเป็นของตนเอง บนเนื้อที่ 4000 ไร่",
    },
    {
      title: "ราคาดีที่สุด",
      description: "ขายในราคาถูกที่สุดในย่านนี้ คุ้มค่าที่สุด",
    },
    {
      title: "คุณภาพดี",
      description: "คัดสรรวัสดุอย่างดี เพื่อประสิทธิภาพสูงสุด",
    },
    {
      title: "จัดส่งรวดเร็ว",
      description: "บริการจัดส่งทั่วกรุงเทพและปริมณฑล",
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
                รับถมที่
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                ด้วยวัสดุที่ผลิตเองทางบริษัทจึงมีบริการรับถมที่ในกรุงเทพและปริมณฑล
                ในราคาและคุณภาพที่ดีที่สุด ปัจจุบันเราเปิดบริการจุดขายอยู่ 3
                สาขา สายไหม รังสิต สำโรง
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                บริษัท ผลิตวัสดุเองจากบ่อดินบ่อทรายบนเนื้อที่ 4000 ไร่
                ขนส่งเองโดยเรือเหล็กของบริษัท
                สามารถจัดส่งสินค้าได้ทั้งกรุงเทพและปริมณฑลและเราจะขยายสาขาเพิ่มเรื่อยๆ
                เพื่อครอบคลุมการให้บริการลูกค้าให้ทั่วถึงที่สุด
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#446084] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200"
              >
                ขอใบเสนอราคา
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="งานถมที่ 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="งานถมที่ 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="งานถมที่ 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden">
                <Image
                  src="https://placehold.co/600x400.png"
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
              { id: 1, color: "8B4513" },
              { id: 2, color: "A0522D" },
              { id: 3, color: "CD853F" },
            ].map((item) => (
              <div
                key={item.id}
                className="relative aspect-square bg-gray-300 rounded-lg overflow-hidden border-2 border-[#e6e9ef] hover:border-[#446084] transition-all duration-300"
              >
                <Image
                  src={`https://placehold.co/800x800`}
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
      <section className="py-16 bg-white">
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
              className="inline-block bg-[#D4AF37] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 mb-3"
            >
              ติดต่อเรา
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ภาพหน้างานจริง
            </h2>
            <p className="text-gray-600 text-lg">
              ผลงานการถมที่ดินของเราที่ได้รับความไว้วางใจจากลูกค้า
            </p>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { id: 1, color: "A0522D" },
              { id: 2, color: "8B4513" },
              { id: 3, color: "CD853F" },
              { id: 4, color: "D2691E" },
              { id: 5, color: "8B7355" },
              { id: 6, color: "C19A6B" },
              { id: 7, color: "9C661F" },
              { id: 8, color: "B87333" },
            ].map((item) => (
              <div
                key={item.id}
                className="relative aspect-square bg-gray-300 rounded-lg overflow-hidden group"
              >
                <Image
                  src={`https://placehold.co/400x400`}
                  alt={`ผลงานถมที่ ${item.id}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
