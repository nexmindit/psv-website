import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner - Service Overview */}

      <img
        src="/psv_banner.png"
        alt="PSV Group Banner"
        className="w-full h-full"
      />

      {/* About Brand Section - Short Story (3-4 lines) + PSV Story */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="bg-gray-300 mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="/psv_hero.png"
                  alt="PSV Group - Construction Materials"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                บริษัท พีเอสวี กรุ๊ป จำกัด
              </h3>
              <p className="text-gray-600">
                มากกว่า 30 ปีแห่งประสบการณ์ในการให้บริการวัสดุก่อสร้างคุณภาพสูง
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
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
                นอกจากนี้ด้วยวัสดุที่ผลิตเองทางบริษัทจึงมีบริการรับถมที่ในกรุงเทพ
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
        </div>
      </section>

      {/* Branch Locations - สาขาที่มีปัจจุบัน */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Branch 1 - Sai Mai */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">สาขา Image</span>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-[#446084] mb-3">
                  สาขา สายไหม
                </h3>
                <p className="text-gray-600 mb-2">กรุงเทพมหานคร</p>
                <p className="text-sm text-gray-500">
                  เปิดบริการทุกวัน 08:00-17:00
                </p>
              </div>
            </div>

            {/* Branch 2 - Rangsit */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">สาขา Image</span>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-[#446084] mb-3">
                  สาขา รังสิต
                </h3>
                <p className="text-gray-600 mb-2">ปทุมธานี</p>
                <p className="text-sm text-gray-500">
                  เปิดบริการทุกวัน 08:00-17:00
                </p>
              </div>
            </div>

            {/* Branch 3 - Samrong */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">สาขา Image</span>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-[#446084] mb-3">
                  สาขา สำโรง
                </h3>
                <p className="text-gray-600 mb-2">สมุทรปราการ</p>
                <p className="text-sm text-gray-500">
                  เปิดบริการทุกวัน 08:00-17:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - ทำไมถึงเลือกใช้บริการเรา */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            ทำไมถึงเลือกใช้บริการเรา
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Reason 1 */}
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">ผลิตเอง</h3>
              <p className="text-gray-600 text-sm">
                มีบ่อดินและทรายเป็นของตนเอง บนเนื้อที่ 4000 ไร่
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
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
                ราคาดีที่สุด
              </h3>
              <p className="text-gray-600 text-sm">
                ขายในราคาถูกที่สุดในย่านนี้ คุ้มค่าที่สุด
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">คุณภาพดี</h3>
              <p className="text-gray-600 text-sm">
                คัดสรรวัสดุอย่างดี เพื่อประสิทธิภาพสูงสุด
              </p>
            </div>

            {/* Reason 4 */}
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
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
          </div>
        </div>
      </section>

      {/* Customer Logos Carousel - Logo 4 แถว สูคำกำใช้บริการเรา Logo */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            ลูกค้าที่ไว้วางใจเรา
          </h2>
          <p className="text-center text-gray-600 mb-12">
            พันธมิตรและลูกค้าที่ไว้วางใจใช้บริการของเรา
          </p>

          {/* Logo Grid - 4 logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { src: "/testimonial1.jpeg", alt: "Customer 1" },
              { src: "/testimonial2.jpg", alt: "Customer 2" },
              { src: "/testimonial3.png", alt: "Customer 3" },
              { src: "/testimonial4.jpg", alt: "Customer 4" },
            ].map((logo, i) => (
              <div
                key={`logo-${i + 1}`}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow flex items-center justify-center h-32 overflow-hidden"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Value Proposition - Value ที่เราส่งมอบให้กับลูกค้า */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Value ที่เราส่งมอบให้กับลูกค้า
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#D4AF37] mb-3">30+</div>
              <p className="text-xl">ปีแห่งความเชื่อมั่น</p>
              <p className="text-sm text-gray-300 mt-2">
                มากกว่า 3 ทศวรรษแห่งประสบการณ์
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#D4AF37] mb-3">
                4,000
              </div>
              <p className="text-xl">ไร่ พื้นที่ผลิต</p>
              <p className="text-sm text-gray-300 mt-2">
                บ่อดินและทรายของตนเอง
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#D4AF37] mb-3">3</div>
              <p className="text-xl">สาขาให้บริการ</p>
              <p className="text-sm text-gray-300 mt-2">สายไหม รังสิต สำโรง</p>
            </div>
          </div>
        </div>
      </section>
      {/* Customer Gallery - ภาพลูกค้ามาชื่อที่สาขา/จัดส่ง ภาพหน้างานจริง 8-12 รูป */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            งานของเรา
          </h2>
          <p className="text-center text-gray-600 mb-12">ภาพหน้างานจริง</p>

          {/* Gallery Grid - 4 work site photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: "/site1.jpg", alt: "Work Site 1" },
              { src: "/site2.jpg", alt: "Work Site 2" },
              { src: "/site3.jpg", alt: "Work Site 3" },
              { src: "/site4.jpg", alt: "Work Site 4" },
            ].map((image, i) => (
              <div
                key={`gallery-${i + 1}`}
                className="relative group overflow-hidden rounded-lg aspect-square bg-gray-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              รถบริการ
            </h2>
            <p className="text-gray-600 text-lg">
              เรามีรถบริการหลากหลายขนาดเพื่อรองรับทุกความต้องการของคุณ
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "รถกระบะ",
                capacity: "1.5 คิว",
                description:
                  "รถกระบะสามารถบรรทุกได้ประมาณ 1.5 คิว เหมาะสำหรับการส่งวัสดุน้อยๆ เช่นพวกกระสอบและหน้างานมีข้อจำกัดพื้นที่ในการขนส่ง",
                image: "/truck1.jpg",
              },
              {
                name: "รถหกล้อ",
                capacity: "5 คิว (4.5-7.5 ตัน)",
                description:
                  "รถหกล้อบรรทุกประมาณ 5 คิว สามารถรับน้ำหนักได้ 4.5-7.5 ตัน เหมาะกับการขนทรายปริมาณน้อย และหน้างานมีพื้นที่จำกัด",
                image: "/truck2.jpg",
              },
              {
                name: "รถสิบล้อ",
                capacity: "10 คิว (15 ตัน)",
                description:
                  "รถสิบล้อบรรทุกประมาณ 10 คิว สามารถรับน้ำหนักได้ 15 ตัน เหมาะกับหน้างานที่มีพื้นที่จำกัดรถพ่วงไม่สามารถกลับรถได้และใช้รถสิบล้อในการขนส่งเท่านั้น",
                image: "/truck3.jpg",
              },
              {
                name: "รถพ่วง",
                capacity: "20 คิว (25-30 ตัน)",
                description:
                  "รถพ่วงสามารถบรรทุกได้ประมาณ 20 คิว สามารถรับน้ำหนักได้ประมาณ 25-30 ตัน และหน้างานไม่มีข้อจำกัดพื้นที่ในการขนส่ง ข้อดี ของรถพ่วงคือสามารถแยกสินค้าได้ 2 ชนิดในการขนส่ง",
                image: "/truck4.jpg",
              },
            ].map((service) => (
              <div
                key={service.name}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all"
              >
                <div className="h-40 bg-gray-300 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {service.name}
                </h3>
                <p className="text-[#D4AF37] font-semibold mb-3">
                  {service.capacity}
                </p>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-block bg-[#446084] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#354d6a] transition-colors"
            >
              สอบถามบริการของเรา
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            เกร็ดความรู้
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "กระสอบทราย ดีและราคาถูก ได้มาตราฐาน",
                excerpt:
                  "กระสอบทราย หรือ ทรายของเรามีคุณภาพ ได้มาตราฐานผ่านกระบวนการผลิตที่ได้คุณภาพ...",
                date: "12 ก.พ.",
                image: "/trivia1.jpg",
              },
              {
                title: "รับถมที่ ผู้รับเหมาถมดินโดยตรงได้มาตราฐาน",
                excerpt:
                  "บริการรับถมที่โดยผู้เชี่ยวชาญ พร้อมทีมงานมืออาชีพและอุปกรณ์ที่ทันสมัย...",
                date: "12 ก.พ.",
                image: "/trivia2.jpg",
              },
              {
                title: "หินทราย การเลือกใช้ทรายหินทรายในงานก่อสร้าง",
                excerpt:
                  "การเลือกใช้วัสดุที่เหมาะสมกับงานก่อสร้างแต่ละประเภท เป็นสิ่งสำคัญที่จะช่วยให้งานมีคุณภาพ...",
                date: "12 ก.พ.",
                image: "/trivia3.jpg",
              },
            ].map((article) => (
              <Link
                key={article.title}
                href="/blog"
                className="bg-gray-50 border-2 border-gray-300 rounded-lg hover:shadow-xl transition-all duration-300 group flex flex-col overflow-hidden"
              >
                <div className="h-48 bg-gray-300 shrink-0 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>
                <div className="p-6 grow flex flex-col">
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#D4AF37] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 grow">{article.excerpt}</p>
                  <span className="text-[#D4AF37] font-semibold hover:underline">
                    อ่านเพิ่มเติม →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-block bg-[#446084] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#354d6a] transition-colors"
            >
              อ่านบทความทั้งหมด
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            ต้องการสอบถามหรือขอใบเสนอราคา?
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            ทีมงานของเราพร้อมให้คำปรึกษาและตอบทุกคำถามของคุณ
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#D4AF37] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#B8941F] transition-all hover:scale-105 shadow-lg"
          >
            ติดต่อเรา
          </Link>
        </div>
      </section>
    </div>
  );
}
