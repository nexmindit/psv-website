"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";

// Generate sample content for an article
const generateArticleContent = (title: string, category: string) => [
  {
    type: "paragraph",
    text: `${title} เป็นหัวข้อที่สำคัญในอุตสาหกรรมวัสดุก่อสร้าง การเข้าใจอย่างถ่องแท้จะช่วยให้คุณเลือกใช้วัสดุได้อย่างเหมาะสมและมีประสิทธิภาพสูงสุด`,
  },
  {
    type: "heading2",
    text: `ความสำคัญของ${category}`,
  },
  {
    type: "paragraph",
    text: `${category}เป็นวัสดุก่อสร้างที่มีบทบาทสำคัญในโครงการก่อสร้างทุกประเภท ไม่ว่าจะเป็นงานโครงสร้าง งานถนน หรืองานตกแต่ง การเลือกใช้${category}ที่มีคุณภาพจะส่งผลต่อความแข็งแรงและความทนทานของโครงสร้าง`,
  },
  {
    type: "heading3",
    text: "1. คุณสมบัติที่ดี",
  },
  {
    type: "paragraph",
    text: `${category}คุณภาพดีควรมีขนาดเม็ดที่สม่ำเสมอ ไม่มีสิ่งเจือปน และมีความหนาแน่นที่เหมาะสม นอกจากนี้ยังต้องผ่านการคัดสรรและทดสอบคุณภาพอย่างเข้มงวด`,
  },
  {
    type: "heading3",
    text: "2. การใช้งาน",
  },
  {
    type: "paragraph",
    text: `การใช้งาน${category}ควรพิจารณาตามความเหมาะสมของแต่ละประเภทงาน เช่น งานโครงสร้างต้องการความแข็งแรงสูง งานตกแต่งต้องการความสวยงาม และงานถนนต้องการความทนทานต่อการใช้งาน`,
  },
  {
    type: "heading2",
    text: "วิธีการเลือกที่ถูกต้อง",
  },
  {
    type: "paragraph",
    text: `การเลือก${category}ที่เหมาะสมต้องพิจารณาหลายปัจจัย ทั้งคุณภาพวัสดุ ราคา และความเหมาะสมกับงาน`,
  },
  {
    type: "list",
    items: [
      "ตรวจสอบคุณภาพและมาตรฐาน",
      "พิจารณาขนาดและประเภทที่เหมาะสม",
      "เปรียบเทียบราคาจากหลายแหล่ง",
      "ตรวจสอบความน่าเชื่อถือของผู้จำหน่าย",
      "ขอใบรับรองคุณภาพสินค้า",
    ],
  },
  {
    type: "heading2",
    text: "ข้อควรระวัง",
  },
  {
    type: "paragraph",
    text: `การใช้งาน${category}มีข้อควรระวังหลายประการ เช่น การเก็บรักษาให้ถูกวิธี การป้องกันการปนเปื้อน และการใช้อัตราส่วนที่เหมาะสมในการผสม`,
  },
  {
    type: "heading2",
    text: "สรุป",
  },
  {
    type: "paragraph",
    text: `${title} เป็นเรื่องที่ควรศึกษาและทำความเข้าใจอย่างถี่ถ้วน การเลือกใช้${category}คุณภาพดีจากแหล่งที่เชื่อถือได้จะช่วยให้โครงการของคุณประสบความสำเร็จ PSV Materials พร้อมให้คำปรึกษาและจัดหาวัสดุคุณภาพดีสำหรับทุกโครงการของคุณ`,
  },
];

// Sample article data - in production, this would come from a CMS or API
const articles = [
  // บทความ Articles (IDs 1-9)
  {
    id: 1,
    title: "กระสอบทราย ดีและราคาถูก ได้มาตรฐาน",
    category: "ทราย",
    date: "12 กุมภาพันธ์ 2024",
    author: "PSV Materials",
    image: "https://placehold.co/1200x600.png",
    content: generateArticleContent(
      "กระสอบทราย ดีและราคาถูก ได้มาตรฐาน",
      "ทราย"
    ),
  },
  {
    id: 2,
    title: "รับถมที่ ผู้รับเหมาถมดินโดยตรงได้มาตรฐาน",
    category: "ดิน",
    date: "12 กุมภาพันธ์ 2024",
    author: "PSV Materials",
    image: "https://placehold.co/1200x600.png",
    content: generateArticleContent(
      "รับถมที่ ผู้รับเหมาถมดินโดยตรงได้มาตรฐาน",
      "ดิน"
    ),
  },
  {
    id: 3,
    title: "หินทราย การเลือกใช้ ทราย หินทราย ในงานก่อสร้าง",
    category: "หิน",
    date: "12 กุมภาพันธ์ 2024",
    author: "PSV Materials",
    image: "https://placehold.co/1200x600.png",
    content: generateArticleContent(
      "หินทราย การเลือกใช้ ทราย หินทราย ในงานก่อสร้าง",
      "หินทราย"
    ),
  },
  {
    id: 4,
    title: "สูตรคำนวณพื้นที่แสนง่าย ที่ใคร ๆ ก็คำนวณได้",
    category: "เกร็ดความรู้",
    date: "13 มกราคม 2024",
    author: "PSV Materials",
    image: "https://placehold.co/1200x600.png",
    content: generateArticleContent(
      "สูตรคำนวณพื้นที่แสนง่าย ที่ใคร ๆ ก็คำนวณได้",
      "การคำนวณ"
    ),
  },
  {
    id: 5,
    title: "ดินที่ดีคือดินที่มีชีวิต",
    category: "ดิน",
    date: "13 ธันวาคม 2023",
    author: "PSV Materials",
    image: "https://placehold.co/1200x600.png",
    content: generateArticleContent("ดินที่ดีคือดินที่มีชีวิต", "ดิน"),
  },
  {
    id: 6,
    title: "สาเหตุของปูนเกิดรอยแตก",
    category: "เกร็ดความรู้",
    date: "13 ธันวาคม 2023",
    author: "PSV Materials",
    image: "https://placehold.co/1200x600.png",
    content: generateArticleContent("สาเหตุของปูนเกิดรอยแตก", "ปูน"),
  },
  {
    id: 7,
    title: "การเลือกใช้ทรายในงานก่อสร้าง",
    category: "ทราย",
    date: "10 พฤศจิกายน 2023",
    author: "PSV Materials",
    image: "https://placehold.co/1200x600.png",
    content: generateArticleContent("การเลือกใช้ทรายในงานก่อสร้าง", "ทราย"),
  },
  {
    id: 8,
    title: "หินคลุกคุณภาพดี เลือกอย่างไร",
    category: "หิน",
    date: "25 ตุลาคม 2023",
    author: "PSV Materials",
    image: "https://placehold.co/1200x600.png",
    content: generateArticleContent("หินคลุกคุณภาพดี เลือกอย่างไร", "หินคลุก"),
  },
  {
    id: 9,
    title: "ดินลูกรัง ใช้งานอย่างไรให้คุ้มค่า",
    category: "ลูกรัง",
    date: "15 ตุลาคม 2023",
    author: "PSV Materials",
    image: "https://placehold.co/1200x600.png",
    content: generateArticleContent(
      "ดินลูกรัง ใช้งานอย่างไรให้คุ้มค่า",
      "ดินลูกรัง"
    ),
  },
  // ข่าวสาร News (IDs 10-18)
  {
    id: 10,
    title: "PSV Group เข้าร่วมงานสัมมนาอุตสาหกรรมก่อสร้าง 2024",
    category: "กิจกรรม",
    date: "1 มีนาคม 2024",
    author: "PSV Materials",
    image: "https://placehold.co/1200x600.png",
    content: generateArticleContent(
      "PSV Group เข้าร่วมงานสัมมนาอุตสาหกรรมก่อสร้าง 2024",
      "การสัมมนา"
    ),
  },
  {
    id: 11,
    title: "เปิดสาขาใหม่ สาขาสำโรง พร้อมให้บริการแล้ว",
    category: "ข่าวบริษัท",
    date: "15 กุมภาพันธ์ 2024",
    author: "PSV Materials",
    image: "https://placehold.co/1200x600.png",
    content: generateArticleContent(
      "เปิดสาขาใหม่ สาขาสำโรง พร้อมให้บริการแล้ว",
      "สาขา"
    ),
  },
  {
    id: 12,
    title: "PSV Group รับรางวัลผู้ประกอบการดีเด่น ประจำปี 2023",
    category: "รางวัล",
    date: "28 มกราคม 2024",
    author: "PSV Materials",
    image: "https://placehold.co/1200x600.png",
    content: generateArticleContent(
      "PSV Group รับรางวัลผู้ประกอบการดีเด่น ประจำปี 2023",
      "รางวัล"
    ),
  },
  {
    id: 13,
    title: "กิจกรรมจิตอาสาปลูกป่าเฉลิมพระเกียรติ",
    category: "CSR",
    date: "5 มกราคม 2024",
    author: "PSV Materials",
    image: "https://placehold.co/1200x600.png",
    content: generateArticleContent(
      "กิจกรรมจิตอาสาปลูกป่าเฉลิมพระเกียรติ",
      "กิจกรรม CSR"
    ),
  },
  {
    id: 14,
    title: "ยกระดับคุณภาพสินค้า ด้วยเครื่องจักรใหม่",
    category: "นวัตกรรม",
    date: "20 ธันวาคม 2023",
    author: "PSV Materials",
    image: "https://placehold.co/1200x600.png",
    content: generateArticleContent(
      "ยกระดับคุณภาพสินค้า ด้วยเครื่องจักรใหม่",
      "เครื่องจักร"
    ),
  },
  {
    id: 15,
    title: "ขอบคุณลูกค้า ฉลองครบรอบ 30 ปี",
    category: "โปรโมชั่น",
    date: "10 ธันวาคม 2023",
    author: "PSV Materials",
    image: "https://placehold.co/1200x600.png",
    content: generateArticleContent(
      "ขอบคุณลูกค้า ฉลองครบรอบ 30 ปี",
      "โปรโมชั่น"
    ),
  },
  {
    id: 16,
    title: "อบรมพนักงาน เพื่อการบริการที่ดียิ่งขึ้น",
    category: "พัฒนาบุคลากร",
    date: "1 ธันวาคม 2023",
    author: "PSV Materials",
    image: "https://placehold.co/1200x600.png",
    content: generateArticleContent(
      "อบรมพนักงาน เพื่อการบริการที่ดียิ่งขึ้น",
      "การอบรม"
    ),
  },
  {
    id: 17,
    title: "PSV Group ผ่านมาตรฐาน ISO 9001:2015",
    category: "ข่าวบริษัท",
    date: "15 พฤศจิกายน 2023",
    author: "PSV Materials",
    image: "https://placehold.co/1200x600.png",
    content: generateArticleContent(
      "PSV Group ผ่านมาตรฐาน ISO 9001:2015",
      "มาตรฐาน ISO"
    ),
  },
  {
    id: 18,
    title: "สนับสนุนกีฬาชุมชน พัฒนาเยาวชนท้องถิ่น",
    category: "CSR",
    date: "5 พฤศจิกายน 2023",
    author: "PSV Materials",
    image: "https://placehold.co/1200x600.png",
    content: generateArticleContent(
      "สนับสนุนกีฬาชุมชน พัฒนาเยาวชนท้องถิ่น",
      "กีฬา"
    ),
  },
];

// Related articles for the sidebar
const relatedArticles = [
  {
    id: 4,
    title: "สูตรคำนวณพื้นที่แสนง่าย ที่ใคร ๆ ก็คำนวณได้",
    image: "https://placehold.co/400x300.png",
  },
  {
    id: 5,
    title: "ดินที่ดีคือดินที่มีชีวิต",
    image: "https://placehold.co/400x300.png",
  },
  {
    id: 6,
    title: "สาเหตุของปูนเกิดรอยแตก",
    image: "https://placehold.co/400x300.png",
  },
  {
    id: 7,
    title: "การเลือกใช้ทรายในงานก่อสร้าง",
    image: "https://placehold.co/400x300.png",
  },
];

export default function ArticlePage({
  params,
}: {
  readonly params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const articleId = Number.parseInt(id);
  const article = articles.find((a) => a.id === articleId);

  // If article not found, show default article
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ไม่พบบทความ</h1>
          <Link
            href="/blog"
            className="text-[#446084] hover:underline font-semibold"
          >
            กลับไปหน้าบทความ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article Content */}
          <div className="lg:col-span-2">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="px-4 py-2 bg-[#446084] text-white text-sm font-semibold rounded-full">
                {article.category}
              </span>
            </div>

            {/* Article Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>

            {/* Author and Date */}
            <div className="flex items-center gap-4 text-gray-600 mb-8 pb-8 border-b-2 border-gray-200">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">{article.author}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{article.date}</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {article.content.map((block, index) => {
                switch (block.type) {
                  case "heading2":
                    return (
                      <h2
                        key={`h2-${article.id}-${index}`}
                        className="text-3xl font-bold text-gray-900 mt-12 mb-6"
                      >
                        {block.text}
                      </h2>
                    );
                  case "heading3":
                    return (
                      <h3
                        key={`h3-${article.id}-${index}`}
                        className="text-2xl font-bold text-gray-900 mt-8 mb-4"
                      >
                        {block.text}
                      </h3>
                    );
                  case "paragraph":
                    return (
                      <p
                        key={`p-${article.id}-${index}`}
                        className="text-lg text-gray-700 leading-relaxed mb-6"
                      >
                        {block.text}
                      </p>
                    );
                  case "list":
                    return (
                      <ul
                        key={`ul-${article.id}-${index}`}
                        className="list-disc list-inside space-y-3 mb-6 text-lg text-gray-700"
                      >
                        {block.items?.map((item, itemIndex) => (
                          <li
                            key={`li-${article.id}-${index}-${itemIndex}`}
                            className="leading-relaxed"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-linear-to-r from-[#446084] to-[#5a7a9f] rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                ต้องการคำปรึกษาเพิ่มเติม?
              </h3>
              <p className="text-lg mb-6">
                ทีมงานมืออาชีพของเราพร้อมให้คำแนะนำเกี่ยวกับวัสดุก่อสร้างที่เหมาะสมสำหรับโครงการของคุณ
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-white text-[#446084] font-semibold rounded-sm hover:bg-gray-100 transition-colors"
              >
                ติดต่อเรา
              </Link>
            </div>
          </div>

          {/* Sidebar - Related Articles */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                บทความที่เกี่ยวข้อง
              </h3>
              <div className="space-y-6">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.id}`}
                    className="group block bg-white rounded-sm overflow-hidden border-2 border-gray-200 hover:border-[#446084] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-48 bg-gray-300">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-gray-900 group-hover:text-[#446084] transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Back to Blog Button */}
              <div className="mt-8">
                <Link
                  href="/blog"
                  className="block w-full text-center px-6 py-3 bg-[#446084] text-white font-semibold rounded-sm hover:bg-[#5a7a9f] transition-colors"
                >
                  ดูบทความทั้งหมด
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
