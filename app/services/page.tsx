import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import BannerCarousel from "@/components/BannerCarousel";

export const metadata: Metadata = {
  title: "บริการรับถมที่ - PSV Group",
  description:
    "บริการรับถมที่ดินคุณภาพสูง รับงานถมที่ทั้งกรุงเทพและปริมณฑล มีรถบริการหลากหลายขนาด พร้อมทีมงานมืออาชีพ",
};

export default function ServicesPage() {
  const trucks = [
    {
      name: "รถกระบะ",
      capacity: "1.5 คิว",
      weight: "-",
      description:
        "รถกระบะสามารถบรรทุกได้ประมาณ 1.5 คิว เหมาะสำหรับการส่งวัสดุน้อยๆ เช่นพวกกระสอบและหน้างานมีข้อจำกัดพื้นที่ในการขนส่ง",
      image: "/truck1.jpg",
    },
    {
      name: "รถหกล้อ",
      capacity: "5 คิว",
      weight: "4.5-7.5 ตัน",
      description:
        "รถหกล้อบรรทุกประมาณ 5 คิว สามารถรับน้ำหนักได้ 4.5-7.5 ตัน เหมาะกับการขนทรายปริมาณน้อย และหน้างานมีพื้นที่จำกัด",
      image: "/truck2.jpg",
    },
    {
      name: "รถสิบล้อ",
      capacity: "10 คิว",
      weight: "15 ตัน",
      description:
        "รถสิบล้อบรรทุกประมาณ 10 คิว สามารถรับน้ำหนักได้ 15 ตัน เหมาะกับหน้างานที่มีพื้นที่จำกัดรถพ่วงไม่สามารถกลับรถได้และใช้รถสิบล้อในการขนส่งเท่านั้น",
      image: "/truck3.jpg",
    },
    {
      name: "รถพ่วง",
      capacity: "20 คิว",
      weight: "25-30 ตัน",
      description:
        "รถพ่วงสามารถบรรทุกได้ประมาณ 20 คิว สามารถรับน้ำหนักได้ประมาณ 25-30 ตัน และหน้างานไม่มีข้อจำกัดพื้นที่ในการขนส่ง ข้อดีของรถพ่วงคือสามารถแยกสินค้าได้ 2 ชนิดในการขนส่ง",
      image: "/truck4.jpg",
    },
  ];

  const reasons = [
    {
      icon: "✓",
      title: "ประสบการณ์มากกว่า 30 ปี",
      description: "ความเชี่ยวชาญในธุรกิจวัสดุก่อสร้างและรับถมที่",
    },
    {
      icon: "✓",
      title: "วัสดุคุณภาพสูง",
      description: "ผลิตเองจากบ่อดินบ่อทรายบนเนื้อที่ 4000 ไร่",
    },
    {
      icon: "✓",
      title: "ขนส่งเองโดยเรือ",
      description: "มีเรือเหล็กของบริษัทเอง จัดส่งตรงถึงกรุงเทพฯ",
    },
    {
      icon: "✓",
      title: "ราคายุติธรรม",
      description: "ราคาที่เหมาะสม คุณภาพดีที่สุดในปัจจุบัน",
    },
    {
      icon: "✓",
      title: "บริการครบวงจร",
      description: "มีทีมงานและเครื่องมือพร้อมให้บริการ",
    },
    {
      icon: "✓",
      title: "ครอบคลุมพื้นที่",
      description: "บริการทั้งกรุงเทพและปริมณฑล",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner Carousel */}
      <BannerCarousel />

      {/* About Service Section */}
      <section className="py-16">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-full overflow-hidden">
              <Image
                src="/vehicles.jpg"
                alt="บริการถมที่ดิน"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ทำไมต้องเลือกใช้บริการของเรา
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                นอกจากนี้ด้วยวัสดุที่ผลิตเองทางบริษัทจึงมีบริการรับถมที่ในกรุงเทพและปริมณฑล
                ในราคาและคุณภาพที่ดีที่สุด ปัจจุบันเราเปิดบริการจุดขายอยู่ 3
                สาขา สายไหม รังสิต สำโรง
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                สามารถจัดส่งสินค้าได้ทั้งกรุงเทพและปริมณฑลและเราจะขยายสาขาเพิ่มเรื่อยๆ
                เพื่อครอบคลุมการให้บริการลูกค้าให้ทั่วถึงที่สุด
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {reasons.map((reason) => (
                  <div key={reason.title} className="flex items-start gap-3">
                    <span className="text-(--color-gold) text-2xl font-bold">
                      {reason.icon}
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {reason.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-block bg-(--color-gold) text-white px-8 py-3 rounded-sm font-semibold hover:opacity-90 transition-opacity duration-200"
              >
                ขอใบเสนอราคา
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Truck Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              รถบริการ
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              เรามีรถบริการหลากหลายขนาด
              เพื่อให้เหมาะสมกับความต้องการของลูกค้าแต่ละท่าน
            </p>
            <div className="w-20 h-1 bg-(--color-gold) mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trucks.map((truck) => (
              <div
                key={truck.name}
                className="bg-white rounded-sm overflow-hidden border-2 border-(--psv-border) flex flex-col"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={truck.image}
                    alt={truck.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {truck.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">ความจุ:</span>
                      <span className="font-semibold text-gray-900">
                        {truck.capacity}
                      </span>
                    </div>
                    {truck.weight !== "-" && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">น้ำหนัก:</span>
                        <span className="font-semibold text-gray-900">
                          {truck.weight}
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed grow">
                    {truck.description}
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-(--color-primary) text-white py-2 rounded hover:opacity-90 transition-opacity duration-200 mt-auto"
                  >
                    สอบถามบริการ
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study / Work Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ทำไมถึงต้องถมที่
            </h2>
            <div className="w-20 h-1 bg-(--color-gold) mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-sm border-2 border-(--psv-border) text-center">
              <div className="w-16 h-16 bg-(--color-gold) rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                เพื่อการก่อสร้าง
              </h3>
              <p className="text-gray-600">
                ปรับระดับพื้นที่ให้เหมาะสมสำหรับการก่อสร้างบ้าน อาคาร
                หรือโครงการต่างๆ
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border-2 border-(--psv-border) text-center">
              <div className="w-16 h-16 bg-(--color-gold) rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                แก้ปัญหาน้ำท่วม
              </h3>
              <p className="text-gray-600">
                ยกระดับพื้นที่ให้สูงขึ้น เพื่อป้องกันปัญหาน้ำท่วมขัง
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border-2 border-(--psv-border) text-center">
              <div className="w-16 h-16 bg-(--color-gold) rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ปรับปรุงดิน
              </h3>
              <p className="text-gray-600">
                เพิ่มความอุดมสมบูรณ์ให้กับดิน เหมาะสำหรับการทำเกษตร
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ภาพงานและลูกค้าที่ไว้วางใจเรา
            </h2>
            <div className="w-20 h-1 bg-(--color-gold) mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { id: 1, img: "/site1.jpg" },
              { id: 2, img: "/site2.jpg" },
              { id: 3, img: "/site3.jpg" },
              { id: 4, img: "/site4.jpg" },
            ].map((item) => (
              <div
                key={item.id}
                className="relative h-82 bg-gray-200 rounded-sm overflow-hidden"
              >
                <Image
                  src={item.img}
                  alt={`ผลงาน ${item.id}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/portfolio"
              className="inline-block bg-(--color-primary) text-white px-8 py-3 rounded-sm font-semibold hover:opacity-90 transition-opacity duration-200"
            >
              ดูผลงานทั้งหมด
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            พร้อมให้บริการคุณแล้ววันนี้
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            ติดต่อเราเพื่อขอใบเสนอราคา หรือปรึกษาเกี่ยวกับงานรับถมที่ของคุณ
            ทีมงานมืออาชีพพร้อมให้คำแนะนำ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-(--color-gold) px-8 py-3 rounded-sm font-semibold hover:opacity-90 transition-opacity duration-200"
            >
              ติดต่อเรา
            </Link>
            <a
              href="http://line.me/ti/p/~@psv.group1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#06C755] text-white px-8 py-3 rounded-sm font-semibold hover:opacity-90 transition-opacity duration-200"
            >
              <span className="flex items-center justify-center gap-2">
                <span>💬</span> Line: @psv.group1
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              คำถามที่พบบ่อย
            </h2>
            <div className="w-20 h-1 bg-(--color-gold) mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-white p-6 rounded-sm border-2 border-(--psv-border)">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                บริการรับถมที่ครอบคลุมพื้นที่ไหนบ้าง?
              </summary>
              <p className="mt-4 text-gray-600">
                เราให้บริการทั้งกรุงเทพมหานครและปริมณฑล ได้แก่ นนทบุรี ปทุมธานี
                สมุทรปราการ สมุทรสาคร และนครปฐม
              </p>
            </details>

            <details className="bg-white p-6 rounded-sm border-2 border-(--psv-border)">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                ใช้เวลาในการถมที่นานแค่ไหน?
              </summary>
              <p className="mt-4 text-gray-600">
                ระยะเวลาขึ้นอยู่กับขนาดพื้นที่และความสูงที่ต้องการถม
                โดยทั่วไปงานขนาดเล็กใช้เวลา 1-3 วัน งานขนาดใหญ่อาจใช้เวลา 1-2
                สัปดาห์
              </p>
            </details>

            <details className="bg-white p-6 rounded-sm border-2 border-(--psv-border)">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                ราคาค่าบริการคำนวณอย่างไร?
              </summary>
              <p className="mt-4 text-gray-600">
                ราคาขึ้นอยู่กับปริมาณวัสดุ (คิว) ระยะทาง และชนิดของวัสดุที่ใช้
                กรุณาติดต่อเราเพื่อขอใบเสนอราคาที่แม่นยำ
              </p>
            </details>

            <details className="bg-white p-6 rounded-sm border-2 border-(--psv-border)">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                มีบริการอัดดินหลังถมที่หรือไม่?
              </summary>
              <p className="mt-4 text-gray-600">
                มีครับ
                เรามีบริการอัดดินให้แน่นด้วยเครื่องจักรทันสมัยเพื่อให้พื้นที่พร้อมสำหรับการก่อสร้าง
              </p>
            </details>

            <details className="bg-white p-6 rounded-sm border-2 border-(--psv-border)">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                สามารถขอดูตัวอย่างวัสดุก่อนสั่งได้ไหม?
              </summary>
              <p className="mt-4 text-gray-600">
                ได้ครับ สามารถมาดูตัวอย่างวัสดุได้ที่สาขาของเรา 3 แห่ง คือ
                สายไหม รังสิต และสำโรง หรือติดต่อเพื่อนัดหมาย
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
