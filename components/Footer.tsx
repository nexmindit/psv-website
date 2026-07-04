import Link from "next/link";
import Image from "next/image";

// Latest articles data
const latestArticles = [
  {
    id: 2,
    title:
      "🏗️ PSV ศูนย์รวมทราย ดิน หิน ลูกรัง ครบวงจร! คุณภาพเกรด A ส่งไว ราคาโรงงาน",
    image: "/blogs/material-center.webp",
    date: "12 ก.พ. 2024",
  },
  {
    id: 3,
    title:
      '🎋 เปลี่ยน "หินก่อสร้าง" เป็นสวนสไตล์เซน! ไอเดียจัดสวนงบประหยัดด้วย หินเกล็ด & หินเบอร์ 1',
    image: "/blogs/zen-garden.webp",
    date: "12 ก.พ. 2024",
  },
  {
    id: 4,
    title:
      "🏗️ PSV ศูนย์รวมวัสดุก่อสร้างครบวงจร: จำหน่าย ทราย ดิน หิน พร้อมบริการรับถมที่ & จัดสวน จบในที่เดียว!",
    image: "/blogs/construction-services.webp",
    date: "13 ม.ค. 2024",
  },
  {
    id: 5,
    title:
      "🏗️ เลือกวัสดุก่อสร้างอย่างไรให้ได้ของดี! คู่มือเลือก หิน ดิน ทราย เกรด A สำหรับเจ้าของบ้านมือใหม่",
    image: "/blogs/material-guide.webp",
    date: "13 ธ.ค. 2023",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer - Redesigned 3 Column Layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: Facebook Widget */}
          <div className="w-full">
            <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">
              ติดตามเราบน Facebook
            </h4>
            <div className="bg-gray-800 rounded-sm overflow-hidden h-[380px] w-full">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61587396064251&tabs=timeline&width=500&height=380&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="380"
                style={{ border: "none", overflow: "hidden" }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                loading="lazy"
                title="PSV Group Facebook Page"
              />
            </div>
          </div>

          {/* Column 2: TikTok Widget */}
          <div className="w-full">
            <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">
              ติดตามเราบน TikTok
            </h4>
            <div className="bg-gray-800 rounded-sm overflow-hidden h-[380px] w-full flex items-center justify-center">
              <blockquote
                className="tiktok-embed w-full"
                cite="https://www.tiktok.com/@psv.sand"
                data-unique-id="psv.sand"
                data-embed-type="creator"
                style={{ maxWidth: "100%", minWidth: "100%", margin: 0 }}
              >
                <section>
                  <a
                    target="_blank"
                    href="https://www.tiktok.com/@psv.sand?refer=creator_embed"
                    rel="noopener noreferrer"
                  >
                    @psv.sand
                  </a>
                </section>
              </blockquote>
            </div>
          </div>

          {/* Column 3: Latest Articles */}
          <div className="w-full">
            <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">
              บทความล่าสุด
            </h4>
            <div className="space-y-3 h-[380px] overflow-y-auto scrollbar-transparent w-full">
              {latestArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.id}`}
                  className="flex gap-3 bg-gray-800 rounded-sm p-2 hover:bg-gray-750 transition-colors cursor-pointer"
                >
                  <div className="w-20 h-16 bg-gray-700 rounded shrink-0 relative overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm font-medium text-gray-200 line-clamp-2 mb-1">
                      {article.title}
                    </h5>
                    <p className="text-xs text-gray-400">{article.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            © 2025 PSV Group. All rights reserved. |
            ผู้ประกอบการค้าวัสดุก่อสร้าง ประเภท ทราย ดิน หิน ลูกรัง
          </p>
        </div>
      </div>

      {/* Floating LINE Button */}
      <a
        href="https://lin.ee/Co4hSTs"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#00B900] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
      >
        <svg
          className="w-7 h-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
      </a>
    </footer>
  );
}
