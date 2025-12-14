"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BannerCarousel from "@/components/BannerCarousel";

// Article Card Component
const ArticleCard = ({
  article,
}: {
  article: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    category: string;
  };
}) => (
  <Link
    href={`/blog/${article.id}`}
    className="group bg-gray-50 rounded-sm overflow-hidden border-2 border-(--psv-border) hover:shadow-xl transition-all duration-300"
  >
    <div className="relative aspect-[4/3] bg-gray-300 overflow-hidden">
      <Image
        src={article.image}
        alt={article.title}
        fill
        className="object-full"
      />
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 bg-[#446084] text-white text-xs font-semibold rounded-full">
          {article.category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <p className="text-sm text-gray-500 mb-2">{article.date}</p>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#446084] transition-colors line-clamp-2">
        {article.title}
      </h3>
      <p className="text-gray-600 line-clamp-3">{article.excerpt}</p>
      <div className="mt-4 flex items-center text-[#446084] font-semibold">
        อ่านต่อ
        <svg
          className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  </Link>
);

// Pagination Component
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => (
  <div className="flex justify-center items-center gap-2 mt-12">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="px-4 py-2 rounded-sm border-2 border-(--psv-border) disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#446084] hover:text-white transition-colors"
    >
      ก่อนหน้า
    </button>
    {new Array(totalPages).fill(null).map((_, index) => (
      <button
        key={index + 1}
        onClick={() => onPageChange(index + 1)}
        className={`px-4 py-2 rounded-sm border-2 transition-colors ${
          currentPage === index + 1
            ? "bg-[#446084] text-white border-[#446084]"
            : "border-(--psv-border) hover:bg-[#446084] hover:text-white"
        }`}
      >
        {index + 1}
      </button>
    ))}
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="px-4 py-2 rounded-sm border-2 border-(--psv-border) disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#446084] hover:text-white transition-colors"
    >
      ถัดไป
    </button>
  </div>
);

export default function BlogPage() {
  const [articlesPage, setArticlesPage] = useState(1);
  const articlesPerPage = 9;

  // บทความ - Knowledge articles
  const articles = [
    {
      id: 2,
      title:
        "🏗️ PSV ศูนย์รวมทราย ดิน หิน ลูกรัง ครบวงจร! คุณภาพเกรด A ส่งไว ราคาโรงงาน",
      excerpt:
        "แหล่งรวมวัสดุก่อสร้างครบวงจร ทรายถม ทรายหยาบ หินเกล็ด หินคลุก คุณภาพมาตรฐาน บริการส่งไว ราคามิตรภาพ พร้อมโปรโมชั่นพิเศษสำหรับผู้รับเหมา",
      image: "/blogs/material-center.png",
      date: "12 ก.พ. 2024",
      category: "วัสดุก่อสร้าง",
    },
    {
      id: 3,
      title:
        '🎋 เปลี่ยน "หินก่อสร้าง" เป็นสวนสไตล์เซน! ไอเดียจัดสวนงบประหยัดด้วย หินเกล็ด & หินเบอร์ 1',
      excerpt:
        "อยากจัดสวนสไตล์เซนแต่งบน้อย? หินก่อสร้างช่วยคุณได้! พบกับไอเดียเปลี่ยนหินเกล็ดและหินเบอร์ 1 ให้กลายเป็นสวนสวย สงบ เรียบง่าย ในราคาที่เอื้อมถึง",
      image: "/blogs/zen-garden.jpg",
      date: "12 ก.พ. 2024",
      category: "ไอเดียจัดสวน",
    },
    {
      id: 4,
      title:
        "🏗️ PSV ศูนย์รวมวัสดุก่อสร้างครบวงจร: จำหน่าย ทราย ดิน หิน พร้อมบริการรับถมที่ & จัดสวน จบในที่เดียว!",
      excerpt:
        "จบทุกเรื่องก่อสร้างที่ PSV! เรามีทั้งวัสดุคุณภาพเยี่ยมและทีมงานมืออาชีพพร้อมบริการถมที่ ปรับระดับ และจัดสวน One-Stop Service ที่เดียวครบ",
      image: "/blogs/construction-services.jpg",
      date: "13 ม.ค. 2024",
      category: "บริการ",
    },
    {
      id: 5,
      title:
        "🏗️ เลือกวัสดุก่อสร้างอย่างไรให้ได้ของดี! คู่มือเลือก หิน ดิน ทราย เกรด A สำหรับเจ้าของบ้านมือใหม่",
      excerpt:
        "คู่มือฉบับจับมือทำสำหรับเจ้าของบ้านมือใหม่! สอนวิธีเลือก ทราย หิน ดิน ให้ได้เกรด A แข็งแรง ทนทาน และคุ้มค่าที่สุด เพื่อรากฐานที่มั่นคงของบ้านคุณ",
      image: "/blogs/material-guide.jpg",
      date: "13 ธ.ค. 2023",
      category: "เกร็ดความรู้",
    },
    {
      id: 6,
      title:
        '📲 สั่ง "ทราย-ดิน-หิน" ด่วนทันใจ! 7 ขั้นตอนง่ายๆ กับ PSV ส่งไวถึงหน้างาน 🚛',
      excerpt:
        "สั่งวัสดุก่อสร้างง่ายๆ แค่ปลายนิ้ว! เช็คขั้นตอนการสั่งซื้อ หิน ดิน ทราย จาก PSV ผ่าน LINE ง่าย สะดวก รวดเร็ว พร้อมส่งตรงถึงหน้างานทันที",
      image: "/blogs/ordering-process.jpg",
      date: "13 ธ.ค. 2023",
      category: "บริการ",
    },
    {
      id: 7,
      title:
        "🧮 วิธีคำนวณคิว หิน ดิน ทราย ง่ายๆ ด้วยตัวเอง! สั่งของไม่ขาด ไม่เหลือทิ้ง",
      excerpt:
        "หมดปัญหาสั่งของขาดหรือเหลือทิ้ง! แจกสูตรคำนวณปริมาณวัสดุก่อสร้าง (คิว) แบบง่ายๆ ที่ใครก็ทำได้ ช่วยให้คุณวางแผนงบประมาณได้แม่นยำ",
      image: "/blogs/calculation-guide.jpg",
      date: "10 พ.ย. 2023",
      category: "เกร็ดความรู้",
    },
    {
      id: 8,
      title:
        '🌧️ จัดสวนหินระบายน้ำ! แก้ปัญหาน้ำขัง-ดินเละรอบบ้าน ด้วย "หินคลุก" สวย จบ งบไม่บานปลาย',
      excerpt:
        'หน้าฝนทีไร รอบบ้านแฉะเป็นโคลนทุกที? แก้ปัญหาได้ง่ายๆ ด้วย "หินคลุก" ทำทางเดินระบายน้ำสวยๆ ใช้งานได้จริง ในงบประมาณที่สบายกระเป๋า',
      image: "/blogs/drainage-stone.jpg",
      date: "25 ต.ค. 2023",
      category: "หิน",
    },
    {
      id: 9,
      title:
        "🚫 หมดปัญหาดินทรุด! ปิดโพรงใต้บ้านด้วย Smart Board ป้องกันงูและสัตว์ร้ายกวนใจ โดย PSV",
      excerpt:
        "ปิดตายโพรงใต้บ้าน ป้องกันสัตว์ร้ายเข้าอยู่อาศัย ด้วยแผ่น Smart Board โซลูชันแก้ปัญหาดินทรุดที่คุ้มค่า ปลอดภัย และสวยงาม ติดตั้งโดยทีมงานมืออาชีพ",
      image: "/blogs/smart-board-solution.png",
      date: "15 ต.ค. 2023",
      category: "บริการ",
    },
  ];

  // Pagination logic
  const indexOfLastArticle = articlesPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const totalArticlesPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Carousel */}
      <BannerCarousel />

      {/* บทความ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              บทความ
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              เกร็ดความรู้เกี่ยวกับวัสดุก่อสร้าง ทราย ดิน หิน และเทคนิคต่างๆ
            </p>
            <div className="w-20 h-1 bg-[#446084] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Articles Pagination */}
          <Pagination
            currentPage={articlesPage}
            totalPages={totalArticlesPages}
            onPageChange={setArticlesPage}
          />
        </div>
      </section>
    </div>
  );
}
