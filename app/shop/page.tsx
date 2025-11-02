import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "สินค้าของเรา - PSV Group",
  description:
    "สินค้าวัสดุก่อสร้างคุณภาพ ทราย ดิน หิน ลูกรัง ทั้งแบบคิวและกระสอบ จาก PSV Group",
};

export default function ShopPage() {
  const sandTypes = [
    {
      name: "ทรายถม",
      description: "ทรายถมคุณภาพดี เหมาะสำหรับงานถมที่และปรับระดับพื้นที่",
      category: "ทราย เป็น คิว",
      image: "/site1.jpg",
      link: "/product/sand-fill",
    },
    {
      name: "ทรายหยาบ",
      description: "ทรายหยาบสำหรับงานก่อสร้าง ผสมคอนกรีต",
      category: "ทราย เป็น คิว",
      image: "/site2.jpg",
      link: "/product/coarse-sand",
    },
    {
      name: "ทรายละเอียด",
      description: "ทรายละเอียดสำหรับงานฉาบปูน",
      category: "ทราย เป็น คิว",
      image: "/site3.jpg",
      link: "/product/fine-sand",
      outOfStock: true,
    },
    {
      name: "ทรายถมเป็นถุง",
      description: "ทรายถมบรรจุถุง สะดวกสำหรับงานเล็กๆ หรือพื้นที่จำกัด",
      category: "ทราย เป็น ถุง",
      image: "/site4.jpg",
      link: "/product/sand-bag",
      price: "฿25.00",
    },
    {
      name: "ทรายหยาบเป็นถุง",
      description: "ทรายหยาบบรรจุถุง พร้อมใช้งาน",
      category: "ทราย เป็น ถุง",
      image: "/site1.jpg",
      link: "/product/coarse-sand-bag",
      price: "฿30.00",
    },
    {
      name: "ดินลูกรัง",
      description: "ดินลูกรังคุณภาพดี สำหรับงานถมและปรับพื้นที่",
      category: "ลูกรัง เป็น คิว",
      image: "/site2.jpg",
      link: "/product/laterite",
    },
    {
      name: "หน้าดิน",
      description: "หน้าดินอุดมสมบูรณ์ เหมาะสำหรับการทำสวน",
      category: "ดิน เป็น คิว",
      image: "/site3.jpg",
      link: "/product/topsoil",
    },
    {
      name: "หินคลุก",
      description: "หินคลุกสำหรับงานถมและปรับพื้นผิว",
      category: "หิน เป็น คิว",
      image: "/site4.jpg",
      link: "/product/crushed-stone",
    },
    {
      name: "หินเกล็ด",
      description: "หินเกล็ดคุณภาพ สำหรับงานถนนและพื้นที่",
      category: "หิน เป็น คิว",
      image: "/site1.jpg",
      link: "/product/flake-stone",
    },
    {
      name: "หินเบอร์ 1",
      description: "หินเบอร์ 1 สำหรับงานก่อสร้างและผสมคอนกรีต",
      category: "หิน เป็น คิว",
      image: "/site2.jpg",
      link: "/product/stone-no1",
    },
    {
      name: "หินคลุกเป็นถุง",
      description: "หินคลุกบรรจุถุง สะดวกในการขนส่ง",
      category: "หิน เป็น ถุง",
      image: "/site3.jpg",
      link: "/product/crushed-stone-bag",
      price: "฿35.00",
    },
    {
      name: "ดินลูกรังเป็นถุง",
      description: "ดินลูกรังบรรจุถุง พร้อมใช้งาน",
      category: "ลูกรัง เป็น ถุง",
      image: "/site4.jpg",
      link: "/product/laterite-bag",
      price: "฿28.00",
    },
  ];

  const usages = [
    {
      title: "งานก่อสร้าง",
      description: "ใช้ในงานก่อสร้างบ้าน อาคาร โครงสร้าง",
    },
    {
      title: "งานถมที่",
      description: "ถมที่และปรับระดับพื้นที่",
    },
    {
      title: "งานปรับพื้นผิว",
      description: "ปรับพื้นผิวถนน ลานจอดรถ",
    },
    {
      title: "งานจัดสวน",
      description: "จัดสวน ทำแปลงปลูก",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <img
        src="/psv_banner.png"
        alt="PSV Group - สินค้าของเรา"
        className="w-full h-full"
      />

      {/* ประเภททรายที่เราจำหน่าย */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ประเภททรายที่เราจำหน่าย
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              วัสดุก่อสร้างคุณภาพสูง ผลิตเองจากบ่อดินบ่อทราย
              พร้อมจัดส่งทั้งกรุงเทพและปริมณฑล
            </p>
            <div className="mt-6 w-20 h-1 bg-(--color-gold) mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* ทรายถม */}
            <div className="bg-white rounded-lg overflow-hidden border-2 border-(--psv-border) flex flex-col">
              <div className="relative h-64 w-full">
                <Image
                  src="https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%97%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%96%E0%B8%A1.jpg"
                  alt="ทรายถม"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">ทรายถม</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed grow">
                  รายละเอียด：ทรายถม หรือทั่วไปเรียกว่า ทรายขี้นิ้ว
                  เป็นทรายที่มีส่วนผสมเล็กน้อย
                  จึงเหมาะสำหรับงานปรับพื้นที่ก่อนเทพื้น
                  ปรับพื้นที่เพื่อปลูกพืชบริเวณที่เป็นหล่มหรือแอ่งต่ำกว่า
                </p>
                <Link
                  href="/products/sand-fill"
                  className="inline-block bg-(--color-primary) text-white px-5 py-2 rounded text-sm hover:opacity-90 transition-opacity duration-200 mt-auto"
                >
                  สินค้าเพิ่มเติม
                </Link>
              </div>
            </div>

            {/* ทรายหยาบ */}
            <div className="bg-white rounded-lg overflow-hidden border-2 border-(--psv-border) flex flex-col">
              <div className="relative h-64 w-full">
                <Image
                  src="https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%97%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%A2%E0%B8%B2%E0%B8%9A.jpg"
                  alt="ทรายหยาบ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ทรายหยาบ
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed grow">
                  รายละเอียด：ทรายหยาบ เป็นทรายเม็ดใหญ่หนาและแข็งแรงมาก
                  เหมาะสำหรับงานก่อสร้างต่อเติมองค์การ
                  ทรายด้วยคุณสมบัติที่มีความแข็งแรงสูงเป็นพิเศษ
                  เช่นใช้เป็นส่วนผสมผงองค์การิสตต่ำครั้งสำหรับการบรรจุงานถนน
                </p>
                <Link
                  href="/products/coarse-sand"
                  className="inline-block bg-(--color-primary) text-white px-5 py-2 rounded text-sm hover:opacity-90 transition-opacity duration-200 mt-auto"
                >
                  สินค้าเพิ่มเติม
                </Link>
              </div>
            </div>

            {/* ทรายละเอียด */}
            <div className="bg-white rounded-lg overflow-hidden border-2 border-(--psv-border) flex flex-col">
              <div className="relative h-64 w-full">
                <Image
                  src="https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%97%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%AD%E0%B8%B5%E0%B8%A2%E0%B8%94-300x300.jpg"
                  alt="ทรายละเอียด"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ทรายละเอียด
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed grow">
                  รายละเอียด：ทรายละเอียด เป็นทรายที่ถูกตรก
                  เป็นเม็ดทรายค่อนข้างละเอียด มีความเหนียวพอดี
                  เหมาะสำหรับงานก่อนมีกติมหกลุงทุกสูงเอทศ
                  หรืองานที่ต้องการความเเข็งแรงต่างๆ เช่นใช้สำหรับผสมปูนงาน
                </p>
                <Link
                  href="/products/fine-sand"
                  className="inline-block bg-(--color-primary) text-white px-5 py-2 rounded text-sm hover:opacity-90 transition-opacity duration-200 mt-auto"
                >
                  สินค้าเพิ่มเติม
                </Link>
              </div>
            </div>

            {/* หน้าดิน */}
            <div className="bg-white rounded-lg overflow-hidden border-2 border-(--psv-border) flex flex-col">
              <div className="relative h-64 w-full">
                <Image
                  src="https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%94%E0%B8%B4%E0%B8%99-300x300.jpg"
                  alt="หน้าดิน"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  หน้าดิน
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed grow">
                  รายละเอียด： หน้าดิน เป็นส่วนบาศสุดพิเศษ เติมในด้วยธาตุ
                  ประสูไป มปูสมองครั้งปุ๋ย เหมาะสำหรับการเพาะปลูก
                  ฟนนรตัวออนองกลหนงนี้ และสนามหญ้า
                </p>
                <Link
                  href="/products/topsoil"
                  className="inline-block bg-(--color-primary) text-white px-5 py-2 rounded text-sm hover:opacity-90 transition-opacity duration-200 mt-auto"
                >
                  สินค้าเพิ่มเติม
                </Link>
              </div>
            </div>

            {/* หินคลุก */}
            <div className="bg-white rounded-lg overflow-hidden border-2 border-(--psv-border) flex flex-col">
              <div className="relative h-64 w-full">
                <Image
                  src="https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B8%A5%E0%B8%B8%E0%B8%81-300x300.jpg"
                  alt="หินคลุก"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  หินคลุก
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed grow">
                  รายละเอียด： หินคลุก
                  เป็นหินรุ่นหรับปลอยอนนมีกอรอยี้ที่ก็รีวึกวา Well Grade
                  เหมาะสำหรับใช้บดแบบแวนทันลงูทิดรับนื่นครัจิริ้
                  ปรับพื้นที่สำงานจออรดวด หรือนำมำเป็นับวล่ออล
                </p>
                <Link
                  href="/products/crushed-stone"
                  className="inline-block bg-(--color-primary) text-white px-5 py-2 rounded text-sm hover:opacity-90 transition-opacity duration-200 mt-auto"
                >
                  สินค้าเพิ่มเติม
                </Link>
              </div>
            </div>

            {/* หิน 1 */}
            <div className="bg-white rounded-lg overflow-hidden border-2 border-(--psv-border) flex flex-col">
              <div className="relative h-64 w-full">
                <Image
                  src="https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%AB%E0%B8%B4%E0%B8%991-300x300.jpg"
                  alt="หิน 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">หิน 1</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed grow">
                  รายละเอียด： หิน 1 หรือ หิน ¾ มีขนาตเล็กกหนักลุบอักถงาว ¾
                  ผิวหนารกงนการะใช้ในการทำส่ริงริี่ เช่น ผสมเกบาเบิงมเด็งนารทับ
                  เทพื้นส่วนผสมหยวย งด์ดินเว้างันุ่ยนิ้ยนต์ี่
                </p>
                <Link
                  href="/products/stone-no1"
                  className="inline-block bg-(--color-primary) text-white px-5 py-2 rounded text-sm hover:opacity-90 transition-opacity duration-200 mt-auto"
                >
                  สินค้าเพิ่มเติม
                </Link>
              </div>
            </div>

            {/* หินเกล็ด */}
            <div className="bg-white rounded-lg overflow-hidden border-2 border-(--psv-border) flex flex-col">
              <div className="relative h-64 w-full">
                <Image
                  src="https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B9%87%E0%B8%94-300x300.jpg"
                  alt="หินเกล็ด"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  หินเกล็ด
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed grow">
                  รายละเอียด： หินเกล็ด เป็นทางบับี่นกดขี่ มขลดทรีงบ
                  เป็นทตินครัจินงบาพกี้บวร หินสมาจนากนับการบดตัี้ด
                  บ่นนเปื่องการบดตัด
                </p>
                <Link
                  href="/products/flake-stone"
                  className="inline-block bg-(--color-primary) text-white px-5 py-2 rounded text-sm hover:opacity-90 transition-opacity duration-200 mt-auto"
                >
                  สินค้าเพิ่มเติม
                </Link>
              </div>
            </div>

            {/* ลูกรัง */}
            <div className="bg-white rounded-lg overflow-hidden border-2 border-(--psv-border) flex flex-col">
              <div className="relative h-64 w-full">
                <Image
                  src="https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%A3%E0%B8%B1%E0%B8%87-300x300.jpg"
                  alt="ลูกรัง"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">ลูกรัง</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed grow">
                  รายละเอียด： ลูกรัง
                  เป็นลูกรังธรรมชาติที่มีความปราศจากสารพิษทั้งหมด
                  มีการปริมาณเกรดคุณภาพมีค่าร้อยละที่ใช้งานได้ดี
                  กระจายพื้นที่ได้อย่างสม่ำเสมอหนาแน่น
                  งานทางถนนในส่วนลึกของโครงสร้างถนน
                </p>
                <Link
                  href="/products/laterite"
                  className="inline-block bg-(--color-primary) text-white px-5 py-2 rounded text-sm hover:opacity-90 transition-opacity duration-200 mt-auto"
                >
                  สินค้าเพิ่มเติม
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* การนำไปใช้งาน */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              การนำไปใช้งาน
            </h2>
            <div className="w-20 h-1 bg-(--color-gold) mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {usages.map((usage, index) => (
              <div
                key={usage.title}
                className="bg-gray-50 p-6 rounded-lg border-2 border-(--psv-border)"
              >
                <div className="w-12 h-12 bg-(--color-gold) rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {usage.title}
                </h3>
                <p className="text-gray-600 text-sm">{usage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* หมวดหมู่สินค้า - Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              หมวดหมู่สินค้า
            </h2>
            <p className="text-gray-600 text-lg">
              เลือกดูสินค้าตามประเภทที่ต้องการ
            </p>
            <div className="w-20 h-1 bg-(--color-gold) mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* สินค้าประเภท ทราย */}
            <Link
              href="/products/sand"
              className="group bg-white p-8 rounded-lg border-2 border-(--psv-border) text-center hover:border-(--color-primary) transition-colors duration-200"
            >
              <div className="w-16 h-16 bg-(--color-primary) rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-(--color-gold) transition-colors duration-200">
                <span className="text-white text-2xl">🏖️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                สินค้าประเภท ทราย
              </h3>
              <p className="text-gray-600 text-sm">
                ทรายถม ทรายหยาบ ทรายละเอียด
              </p>
            </Link>

            {/* สินค้าประเภท ดิน */}
            <Link
              href="/products/soil"
              className="group bg-white p-8 rounded-lg border-2 border-(--psv-border) text-center hover:border-(--color-primary) transition-colors duration-200"
            >
              <div className="w-16 h-16 bg-(--color-primary) rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-(--color-gold) transition-colors duration-200">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                สินค้าประเภท ดิน
              </h3>
              <p className="text-gray-600 text-sm">หน้าดิน ดินปลูก</p>
            </Link>

            {/* สินค้าประเภท หิน */}
            <Link
              href="/products/stone"
              className="group bg-white p-8 rounded-lg border-2 border-(--psv-border) text-center hover:border-(--color-primary) transition-colors duration-200"
            >
              <div className="w-16 h-16 bg-(--color-primary) rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-(--color-gold) transition-colors duration-200">
                <span className="text-white text-2xl">🪨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                สินค้าประเภท หิน
              </h3>
              <p className="text-gray-600 text-sm">หินคลุก หินเกล็ด หิน 1</p>
            </Link>

            {/* สินค้าประเภท ลูกรัง */}
            <Link
              href="/products/laterite"
              className="group bg-white p-8 rounded-lg border-2 border-(--psv-border) text-center hover:border-(--color-primary) transition-colors duration-200"
            >
              <div className="w-16 h-16 bg-(--color-primary) rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-(--color-gold) transition-colors duration-200">
                <span className="text-white text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                สินค้าประเภท ลูกรัง
              </h3>
              <p className="text-gray-600 text-sm">ดินลูกรัง สำหรับถมที่</p>
            </Link>
          </div>

          {/* Company Info */}
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">
              บริษัท พี.เอส.วี กรุ๊ป จำกัด เป็นผู้ประกอบการค้าวัสดุก่อสร้าง
              ประเภท ทราย ดิน หิน ลูกรัง ที่มีคุณภาพดีที่สุด มานานกว่า 30 ปี
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
