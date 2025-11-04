import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ทราย - PSV Group",
  description:
    "ทรายคุณภาพสูงสำหรับงานก่อสร้าง ทรายถม ทรายหยาบ ทรายละเอียด จาก PSV Group พร้อมส่งกรุงเทพและปริมณฑล",
};

export default function SandPage() {
  // ประเภททราย 8 ชนิด (3 แถวบน + 2 แถวล่างกึ่งกลาง)
  const sandTypes = [
    {
      name: "ทรายถม",
      description:
        "รายละเอียด：ทรายถม หรือทั่วไปเรียกว่า ทรายขี้นิ้ว เป็นทรายที่มีส่วนผสมเล็กน้อย จึงเหมาะสำหรับงานปรับพื้นที่ก่อนเทพื้น",
      image:
        "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%97%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%96%E0%B8%A1.jpg",
    },
    {
      name: "ทรายหยาบ",
      description:
        "รายละเอียด：ทรายหยาบ เป็นทรายเม็ดใหญ่หนาและแข็งแรงมาก เหมาะสำหรับงานก่อสร้างต่อเติมองค์การ ทรายด้วยคุณสมบัติที่มีความแข็งแรงสูงเป็นพิเศษ",
      image:
        "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%97%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%A2%E0%B8%B2%E0%B8%9A.jpg",
    },
    {
      name: "ทรายละเอียด",
      description:
        "รายละเอียด：ทรายละเอียด เป็นทรายที่ถูกตรก เป็นเม็ดทรายค่อนข้างละเอียด มีความเหนียวพอดี เหมาะสำหรับงานฉาบปูน",
      image:
        "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%97%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%AD%E0%B8%B5%E0%B8%A2%E0%B8%94-300x300.jpg",
    },
    {
      name: "กระสอบทราย",
      description:
        "รายละเอียด：กระสอบทราย เป็นทรายที่บรรจุในกระสอบ เหมาะสำหรับการขนส่งและจัดเก็บ",
      image:
        "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%94%E0%B8%B4%E0%B8%99-300x300.jpg",
    },
    {
      name: "กองทราย",
      description:
        "รายละเอียด：กองทราย เป็นการจัดเก็บทรายในรูปแบบกอง เหมาะสำหรับการใช้งานในพื้นที่กว้าง",
      image:
        "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B8%A5%E0%B8%B8%E0%B8%81-300x300.jpg",
    },
    
  ];

  // ทรายสามประเภทที่ใช้ในงานก่อสร้าง
  const constructionSandTypes = [
    {
      title: "ทรายละเอียด",
      subtitle: "Fine Sand",
      icon: "⚪",
      features: [
        "เม็ดเล็ก มีความละเอียด",
        "ผสมปูนฉาบ",
        "ทำอิฐมวลเบา",
        "ทำลวดลายต่างๆ",
        "งานตกแต่งและงานศิลปะ",
      ],
      bgGradient: "from-[#446084] to-[#5a7a9a]",
    },
    {
      title: "ทรายหยาบ",
      subtitle: "Coarse Sand",
      icon: "�",
      features: [
        "เม็ดใหญ่ มีกรวดเล็กๆ",
        "ก่อสร้างอาคาร",
        "คอนกรีตเสริมเหล็ก",
        "ก่อสร้างฐานราก",
        "ก่อสร้างตึกสูง",
      ],
      bgGradient: "from-[#5a7a9a] to-[#6e8aaa]",
    },
    {
      title: "ทรายถม",
      subtitle: "Fill Sand",
      icon: "🟤",
      features: [
        "ใกล้เคียงกับดิน",
        "งานถมถนน",
        "งานปรับพื้นที่",
        "ถมรองคอนกรีต",
        "กันน้ำท่วม",
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
        "ติดต่อผ่านโทรศัพท์ Line หรือ Facebook เพื่อสอบถามข้อมูลและราคา",
      image: "/contact-step.jpg",
      imageAlt: "ติดต่อ PSV Group",
    },
    {
      number: 2,
      title: "เลือกสินค้า",
      description:
        "เลือกประเภทวัสดุและปริมาณที่ต้องการ ทีมงานจะแนะนำสินค้าที่เหมาะสม",
      image: "/select-step.jpg",
      imageAlt: "เลือกสินค้า PSV Group",
    },
    {
      number: 3,
      title: "รับสินค้า",
      description:
        "รับสินค้าตามวันเวลาที่นัดหมาย พร้อมบริการจัดส่งถึงหน้างาน",
      image: "/delivery-step.jpg",
      imageAlt: "จัดส่ง PSV Group",
    },
  ];

  // ลูกค้าของเรา
  const clients = [
    { name: "Client 1", logo: "/client1.png" },
    { name: "Client 2", logo: "/client2.png" },
    { name: "Client 3", logo: "/client3.png" },
    { name: "Client 4", logo: "/client4.png" },
  ];

  // รูปภาพการจัดส่ง (4x3 = 12 รูป)
  const deliveryPhotos = [
    "/delivery1.jpg",
    "/delivery2.jpg",
    "/delivery3.jpg",
    "/delivery4.jpg",
    "/delivery5.jpg",
    "/delivery6.jpg",
    "/delivery7.jpg",
    "/delivery8.jpg",
    "/delivery9.jpg",
    "/delivery10.jpg",
    "/delivery11.jpg",
    "/delivery12.jpg",
  ];

  return (
    <div className="bg-white">
      {/* Section 1: Hero Banner */}
      <section className="relative w-full">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            src="/psv_banner.png"
            alt="PSV Group - ทราย"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Section 2: ประเภททราย (8 cards: 3 แถวบน + 2 แถวกลาง + 3 แถวล่าง) */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ประเภททรายที่เราจำหน่าย
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              วัสดุก่อสร้างคุณภาพสูง ผลิตเองจากบ่อดินบ่อทราย
              พร้อมจัดส่งทั้งกรุงเทพและปริมณฑล
            </p>
            <div className="mt-4 md:mt-6 w-16 md:w-20 h-1 bg-[var(--color-gold)] mx-auto"></div>
          </div>

          {/* First row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-6 md:mb-8">
            {sandTypes.slice(0, 3).map((sand, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden border-2 border-[var(--psv-border)] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-64 sm:h-72 md:h-80 w-full">
                  <Image
                    src={sand.image}
                    alt={sand.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second row: 2 cards (centered) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-6 md:mb-8">
            {sandTypes.slice(3, 5).map((sand, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden border-2 border-[var(--psv-border)] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-64 sm:h-72 md:h-80 w-full">
                  <Image
                    src={sand.image}
                    alt={sand.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Third row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {sandTypes.slice(5, 8).map((sand, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden border-2 border-[var(--psv-border)] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-64 sm:h-72 md:h-80 w-full">
                  <Image
                    src={sand.image}
                    alt={sand.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: การนำไปใช้งาน (3 cards) */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ทราย 3 ประเภทใช้ในงานก่อสร้าง
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              เลือกใช้ทรายให้เหมาะสมกับงานก่อสร้างของคุณ
            </p>
            <div className="w-16 md:w-20 h-1 bg-[var(--color-gold)] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {constructionSandTypes.map((sand, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${sand.bgGradient} p-8 sm:p-10 rounded-2xl text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group`}
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
                <div className="w-12 h-1 bg-[var(--color-gold)] mb-6 opacity-80"></div>
                
                {/* Features list */}
                <ul className="space-y-3 relative z-10">
                  {sand.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start text-sm sm:text-base leading-relaxed"
                      style={{ 
                        animationDelay: `${idx * 0.1}s`,
                      }}
                    >
                      <span className="text-[var(--color-gold)] mr-2 mt-1 flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-50"></div>
              </div>
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
            <div className="w-16 md:w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4"></div>
          </div>

          <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
            {orderSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-6 md:gap-8 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-lg overflow-hidden border-2 border-[var(--psv-border)]">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[var(--color-gold)] text-white text-xl sm:text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: ลูกค้าของเรา (4 logos) */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ลูกค้าของเรา
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              ลูกค้าชั้นนำที่ไว้วางใจ PSV Group
            </p>
            <div className="w-16 md:w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-lg border-2 border-[var(--psv-border)] flex items-center justify-center hover:border-[var(--color-primary)] transition-colors duration-300"
              >
                <div className="relative w-full h-20 sm:h-24">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: รูปภาพการจัดส่ง (4x3 grid) */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ภาพการจัดส่ง
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              บริการจัดส่งรวดเร็ว ทั่วกรุงเทพและปริมณฑล
            </p>
            <div className="w-16 md:w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto">
            {deliveryPhotos.map((photo, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden border-2 border-[var(--psv-border)] hover:border-[var(--color-primary)] transition-colors duration-300"
              >
                <Image
                  src={photo}
                  alt={`การจัดส่ง ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
