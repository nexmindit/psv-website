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
        className="object-contain"
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
  const [newsPage, setNewsPage] = useState(1);
  const articlesPerPage = 9;

  // บทความ - Knowledge articles
  const articles = [
    {
      id: 1,
      title: "🚀 ประกาศสำคัญ! ดินและทรายก่อสร้างขาดตลาดชั่วคราว! แต่มีทางเลือกที่ดีกว่ามานำเสนอ 🛠️",
      excerpt:
        "ทาง PSV ขอแจ้งให้ทราบถึงสถานการณ์สินค้าบางรายการขาดตลาดชั่วคราวในช่วงนี้ ซึ่งเป็นผลมาจากน้ำท่วม",
      image: "/blogs/ประกาศหน้าดินและทรายหยาบ.png",
      date: "12 ก.พ. 2024",
      category: "ทราย",
    },
    {
      id: 2,
      title: "รับถมที่ ผู้รับเหมาถมดินโดยตรงได้มาตรฐาน",
      excerpt:
        "ผู้รับเหมารับถมที่ดินโดยตรงครับ ประกอบอาชีพถมที่ดินมานานกว่า 30 ปี",
      image: "https://placehold.co/400x300.png",
      date: "12 ก.พ. 2024",
      category: "ดิน",
    },
    {
      id: 3,
      title: "หินทราย การเลือกใช้ ทราย หินทราย ในงานก่อสร้าง",
      excerpt: "หินทราย (sand) เป็นหินแข็งที่แตกแยกออกมาจากก้อนหินใหญ่",
      image: "https://placehold.co/400x300.png",
      date: "12 ก.พ. 2024",
      category: "หิน",
    },
    {
      id: 4,
      title: "สูตรคำนวณพื้นที่แสนง่าย ที่ใคร ๆ ก็คำนวณได้",
      excerpt: "วิธีคำนวณพื้นที่สำหรับงานก่อสร้างและการถมที่ดิน",
      image: "https://placehold.co/400x300.png",
      date: "13 ม.ค. 2024",
      category: "เกร็ดความรู้",
    },
    {
      id: 5,
      title: "ดินที่ดีคือดินที่มีชีวิต",
      excerpt: "คุณสมบัติของดินที่ดีและเหมาะสำหรับการเกษตรและก่อสร้าง",
      image: "https://placehold.co/400x300.png",
      date: "13 ธ.ค. 2023",
      category: "ดิน",
    },
    {
      id: 6,
      title: "สาเหตุของปูนเกิดรอยแตก",
      excerpt: "ปัญหาที่พบบ่อยในงานก่อสร้างและวิธีการแก้ไข",
      image: "https://placehold.co/400x300.png",
      date: "13 ธ.ค. 2023",
      category: "เกร็ดความรู้",
    },
    {
      id: 7,
      title: "การเลือกใช้ทรายในงานก่อสร้าง",
      excerpt: "คู่มือการเลือกชนิดทรายที่เหมาะสมกับงานแต่ละประเภท",
      image: "https://placehold.co/400x300.png",
      date: "10 พ.ย. 2023",
      category: "ทราย",
    },
    {
      id: 8,
      title: "หินคลุกคุณภาพดี เลือกอย่างไร",
      excerpt: "แนะนำการเลือกหินคลุกสำหรับงานถนนและงานรองพื้น",
      image: "https://placehold.co/400x300.png",
      date: "25 ต.ค. 2023",
      category: "หิน",
    },
    {
      id: 9,
      title: "ดินลูกรัง ใช้งานอย่างไรให้คุ้มค่า",
      excerpt: "เทคนิคการใช้ดินลูกรังให้เกิดประโยชน์สูงสุด",
      image: "https://placehold.co/400x300.png",
      date: "15 ต.ค. 2023",
      category: "ลูกรัง",
    },
  ];

  // ข่าวสารจาก PSV - Company news
  const news = [
    {
      id: 10,
      title: "PSV Group เข้าร่วมงานสัมมนาอุตสาหกรรมก่อสร้าง 2024",
      excerpt:
        "บริษัทฯ ได้รับเกียรติเข้าร่วมงานสัมมนาอุตสาหกรรมก่อสร้างครั้งใหญ่",
      image: "https://placehold.co/400x300.png",
      date: "1 มี.ค. 2024",
      category: "กิจกรรม",
    },
    {
      id: 11,
      title: "เปิดสาขาใหม่ สาขาสำโรง พร้อมให้บริการแล้ว",
      excerpt: "ขยายการให้บริการครอบคลุมพื้นที่สมุทรปราการและพื้นที่ใกล้เคียง",
      image: "https://placehold.co/400x300.png",
      date: "15 ก.พ. 2024",
      category: "ข่าวบริษัท",
    },
    {
      id: 12,
      title: "PSV Group รับรางวัลผู้ประกอบการดีเด่น ประจำปี 2023",
      excerpt: "ได้รับการยอมรับในด้านคุณภาพและบริการที่ดีเยี่ยม",
      image: "https://placehold.co/400x300.png",
      date: "28 ม.ค. 2024",
      category: "รางวัล",
    },
    {
      id: 13,
      title: "กิจกรรมจิตอาสาปลูกป่าเฉลิมพระเกียรติ",
      excerpt: "ทีมงาน PSV ร่วมกิจกรรมปลูกป่าเพื่อสิ่งแวดล้อม",
      image: "https://placehold.co/400x300.png",
      date: "5 ม.ค. 2024",
      category: "CSR",
    },
    {
      id: 14,
      title: "ยกระดับคุณภาพสินค้า ด้วยเครื่องจักรใหม่",
      excerpt: "นำเข้าเครื่องจักรทันสมัยเพื่อผลิตวัสดุคุณภาพสูง",
      image: "https://placehold.co/400x300.png",
      date: "20 ธ.ค. 2023",
      category: "นวัตกรรม",
    },
    {
      id: 15,
      title: "ขอบคุณลูกค้า ฉลองครบรอบ 30 ปี",
      excerpt: "มอบส่วนลดพิเศษเนื่องในโอกาสครบรอบ 30 ปี",
      image: "https://placehold.co/400x300.png",
      date: "10 ธ.ค. 2023",
      category: "โปรโมชั่น",
    },
    {
      id: 16,
      title: "อบรมพนักงาน เพื่อการบริการที่ดียิ่งขึ้น",
      excerpt: "จัดอบรมทีมงานเพื่อพัฒนาทักษะการให้บริการ",
      image: "https://placehold.co/400x300.png",
      date: "1 ธ.ค. 2023",
      category: "พัฒนาบุคลากร",
    },
    {
      id: 17,
      title: "PSV Group ผ่านมาตรฐาน ISO 9001:2015",
      excerpt: "ได้รับการรับรองมาตรฐานระบบบริหารคุณภาพ",
      image: "https://placehold.co/400x300.png",
      date: "15 พ.ย. 2023",
      category: "ข่าวบริษัท",
    },
    {
      id: 18,
      title: "สนับสนุนกีฬาชุมชน พัฒนาเยาวชนท้องถิ่น",
      excerpt: "เป็นผู้สนับสนุนการแข่งขันกีฬาระดับชุมชน",
      image: "https://placehold.co/400x300.png",
      date: "5 พ.ย. 2023",
      category: "CSR",
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

  const indexOfLastNews = newsPage * articlesPerPage;
  const indexOfFirstNews = indexOfLastNews - articlesPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);
  const totalNewsPages = Math.ceil(news.length / articlesPerPage);

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

      {/* ข่าวสารจาก PSV Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ข่าวสารจาก PSV
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              กิจกรรม ข่าวสาร และความเคลื่อนไหวต่างๆ ของบริษัท
            </p>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentNews.map((newsItem) => (
              <ArticleCard key={newsItem.id} article={newsItem} />
            ))}
          </div>

          {/* News Pagination */}
          <Pagination
            currentPage={newsPage}
            totalPages={totalNewsPages}
            onPageChange={setNewsPage}
          />
        </div>
      </section>
    </div>
  );
}
