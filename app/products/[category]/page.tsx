"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, use } from "react";

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
  outOfStock?: boolean;
  category: string;
  subcategory: string;
  sku: string;
  details: {
    จัดส่งด้วย: string;
    จัดส่งฟรี: string;
  };
  tags: string[];
};

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = use(params);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Product data based on category
  const allProducts: { [key: string]: Product[] } = {
    "sand-fill": [
      {
        id: "sand-fill-bulk",
        name: "ทรายถม",
        description:
          "จัดส่งด้วย: รถกระแหล่งหัวผลิตธารองค้าปลุกตรง\nจัดส่งฟรี: 10 คิวขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        image:
          "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%97%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%96%E0%B8%A1.jpg",
        category: "ประเภท ทราย เป็น คิว",
        subcategory: "สินค้าประเภท ทราย",
        sku: "O-01",
        details: {
          จัดส่งด้วย: "รถกระแหล่งหัวผลิตธารองค้าปลุกตรง",
          จัดส่งฟรี: "10 คิวขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        },
        tags: ["ทรายถม", "สินค้าเป็นคิว"],
      },
      {
        id: "sand-fill-bag",
        name: "ทรายถมเป็นถุง",
        description:
          "จัดส่งด้วย: กระสอบ\nจัดส่งฟรี: 10 กระสอบขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        image:
          "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%97%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%96%E0%B8%A1.jpg",
        category: "ประเภท ทราย เป็น ถุง",
        subcategory: "สินค้าประเภท ทราย",
        sku: "O-02",
        details: {
          จัดส่งด้วย: "กระสอบ",
          จัดส่งฟรี: "10 กระสอบขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        },
        tags: ["ทรายถม", "สินค้าเป็นถุง"],
      },
    ],
    "coarse-sand": [
      {
        id: "coarse-sand-bulk",
        name: "ทรายหยาบ",
        description:
          "จัดส่งด้วย: รถกระแหล่งหัวผลิตธารองค้าปลุกตรง\nจัดส่งฟรี: 10 คิวขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        image:
          "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%97%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%A2%E0%B8%B2%E0%B8%9A.jpg",
        category: "ประเภท ทราย เป็น คิว",
        subcategory: "สินค้าประเภท ทราย",
        sku: "O-03",
        details: {
          จัดส่งด้วย: "รถกระแหล่งหัวผลิตธารองค้าปลุกตรง",
          จัดส่งฟรี: "10 คิวขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        },
        tags: ["ทรายหยาบ", "สินค้าเป็นคิว"],
      },
      {
        id: "coarse-sand-bag",
        name: "ทรายหยาบเป็นถุง",
        description:
          "จัดส่งด้วย: กระสอบ\nจัดส่งฟรี: 10 กระสอบขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        image:
          "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%97%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%A2%E0%B8%B2%E0%B8%9A.jpg",
        category: "ประเภท ทราย เป็น ถุง",
        subcategory: "สินค้าประเภท ทราย",
        sku: "O-05",
        details: {
          จัดส่งด้วย: "กระสอบ",
          จัดส่งฟรี: "10 กระสอบขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        },
        tags: ["ทรายหยาบ", "สินค้าเป็นถุง"],
      },
    ],
    "fine-sand": [
      {
        id: "fine-sand-bulk",
        name: "ทรายละเอียด",
        description:
          "จัดส่งด้วย: รถกระแหล่งหัวผลิตธารองค้าปลุกตรง\nจัดส่งฟรี: 10 คิวขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        image:
          "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%97%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%AD%E0%B8%B5%E0%B8%A2%E0%B8%94-300x300.jpg",
        category: "ประเภท ทราย เป็น คิว",
        subcategory: "สินค้าประเภท ทราย",
        sku: "O-04",
        outOfStock: true,
        details: {
          จัดส่งด้วย: "รถกระแหล่งหัวผลิตธารองค้าปลุกตรง",
          จัดส่งฟรี: "10 คิวขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        },
        tags: ["ทรายละเอียด", "สินค้าเป็นคิว"],
      },
    ],
    topsoil: [
      {
        id: "topsoil-bulk",
        name: "หน้าดิน",
        description:
          "จัดส่งด้วย: รถกระแหล่งหัวผลิตธารองค้าปลุกตรง\nจัดส่งฟรี: 10 คิวขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        image:
          "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%94%E0%B8%B4%E0%B8%99-300x300.jpg",
        category: "ประเภท ดิน เป็น คิว",
        subcategory: "สินค้าประเภท ดิน",
        sku: "O-06",
        details: {
          จัดส่งด้วย: "รถกระแหล่งหัวผลิตธารองค้าปลุกตรง",
          จัดส่งฟรี: "10 คิวขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        },
        tags: ["หน้าดิน", "สินค้าเป็นคิว"],
      },
      {
        id: "topsoil-bag",
        name: "ดินเป็นถุง",
        description:
          "จัดส่งด้วย: กระสอบ\nจัดส่งฟรี: 10 กระสอบขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        image:
          "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%94%E0%B8%B4%E0%B8%99-300x300.jpg",
        category: "ประเภท ดิน เป็น ถุง",
        subcategory: "สินค้าประเภท ดิน",
        sku: "O-07",
        details: {
          จัดส่งด้วย: "กระสอบ",
          จัดส่งฟรี: "10 กระสอบขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        },
        tags: ["ดินเป็นถุง", "สินค้าเป็นถุง"],
      },
    ],
    "crushed-stone": [
      {
        id: "crushed-stone-bulk",
        name: "หินคลุก",
        description:
          "จัดส่งด้วย: รถกระแหล่งหัวผลิตธารองค้าปลุกตรง\nจัดส่งฟรี: 10 คิวขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        image:
          "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B8%A5%E0%B8%B8%E0%B8%81-300x300.jpg",
        category: "ประเภท หิน เป็น คิว",
        subcategory: "สินค้าประเภท หิน",
        sku: "O-08",
        details: {
          จัดส่งด้วย: "รถกระแหล่งหัวผลิตธารองค้าปลุกตรง",
          จัดส่งฟรี: "10 คิวขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        },
        tags: ["หินคลุก", "สินค้าเป็นคิว"],
      },
      {
        id: "crushed-stone-bag",
        name: "หินคลุกเป็นถุง",
        description:
          "จัดส่งด้วย: กระสอบ\nจัดส่งฟรี: 10 กระสอบขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        image:
          "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B8%A5%E0%B8%B8%E0%B8%81-300x300.jpg",
        category: "ประเภท หิน เป็น ถุง",
        subcategory: "สินค้าประเภท หิน",
        sku: "O-09",
        details: {
          จัดส่งด้วย: "กระสอบ",
          จัดส่งฟรี: "10 กระสอบขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        },
        tags: ["หินคลุก", "สินค้าเป็นถุง"],
      },
    ],
    "stone-no1": [
      {
        id: "stone-no1-bulk",
        name: "หิน 1",
        description:
          "จัดส่งด้วย: รถกระแหล่งหัวผลิตธารองค้าปลุกตรง\nจัดส่งฟรี: 10 คิวขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        image:
          "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%AB%E0%B8%B4%E0%B8%991-300x300.jpg",
        category: "ประเภท หิน เป็น คิว",
        subcategory: "สินค้าประเภท หิน",
        sku: "O-10",
        details: {
          จัดส่งด้วย: "รถกระแหล่งหัวผลิตธารองค้าปลุกตรง",
          จัดส่งฟรี: "10 คิวขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        },
        tags: ["หิน 1", "สินค้าเป็นคิว"],
      },
    ],
    "flake-stone": [
      {
        id: "flake-stone-bulk",
        name: "หินเกล็ด",
        description:
          "จัดส่งด้วย: รถกระแหล่งหัวผลิตธารองค้าปลุกตรง\nจัดส่งฟรี: 10 คิวขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        image:
          "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B9%87%E0%B8%94-300x300.jpg",
        category: "ประเภท หิน เป็น คิว",
        subcategory: "สินค้าประเภท หิน",
        sku: "O-11",
        details: {
          จัดส่งด้วย: "รถกระแหล่งหัวผลิตธารองค้าปลุกตรง",
          จัดส่งฟรี: "10 คิวขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        },
        tags: ["หินเกล็ด", "สินค้าเป็นคิว"],
      },
    ],
    laterite: [
      {
        id: "laterite-bulk",
        name: "ดินลูกรัง",
        description:
          "จัดส่งด้วย: รถกระแหล่งหัวผลิตธารองค้าปลุกตรง\nจัดส่งฟรี: 10 คิวขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        image:
          "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%A3%E0%B8%B1%E0%B8%87-300x300.jpg",
        category: "ประเภท ลูกรัง เป็น คิว",
        subcategory: "สินค้าประเภท ลูกรัง",
        sku: "O-12",
        details: {
          จัดส่งด้วย: "รถกระแหล่งหัวผลิตธารองค้าปลุกตรง",
          จัดส่งฟรี: "10 คิวขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        },
        tags: ["ดินลูกรัง", "สินค้าเป็นคิว"],
      },
      {
        id: "laterite-bag",
        name: "ดินลูกรังเป็นถุง",
        description:
          "จัดส่งด้วย: กระสอบ\nจัดส่งฟรี: 10 กระสอบขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        image:
          "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%A3%E0%B8%B1%E0%B8%87-300x300.jpg",
        category: "ประเภท ลูกรัง เป็น ถุง",
        subcategory: "สินค้าประเภท ลูกรัง",
        sku: "O-13",
        details: {
          จัดส่งด้วย: "กระสอบ",
          จัดส่งฟรี: "10 กระสอบขึ้นไป วางล่างกรุงเทพและปริมณฑล",
        },
        tags: ["ดินลูกรัง", "สินค้าเป็นถุง"],
      },
    ],
  };

  const products = allProducts[category] || [];

  const categoryTitles: { [key: string]: string } = {
    "sand-fill": "ทรายถม",
    "coarse-sand": "ทรายหยาบ",
    "fine-sand": "ทรายละเอียด",
    topsoil: "หน้าดิน",
    "crushed-stone": "หินคลุก",
    "stone-no1": "หิน 1",
    "flake-stone": "หินเกล็ด",
    laterite: "ดินลูกรัง",
  };

  const categoryTitle = categoryTitles[category] || "สินค้า";

  // Get all unique categories for sidebar
  const categories = [
    { name: "สินค้าประเภท ทราย", count: 6, link: "#" },
    { name: "ประเภท ทราย เป็น คิว", count: 3, link: "#" },
    { name: "ประเภท ทราย เป็น ถุง", count: 2, link: "#" },
    { name: "สินค้าประเภท ดิน", count: 2, link: "#" },
    { name: "ประเภท ดิน เป็น คิว", count: 1, link: "#" },
    { name: "สินค้าประเภท หิน", count: 5, link: "#" },
    { name: "ประเภท หิน เป็น คิว", count: 3, link: "#" },
    { name: "สินค้าประเภท ลูกรัง", count: 2, link: "#" },
  ];

  const relatedProducts = [
    {
      name: "ดินเป็นถุง",
      image:
        "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%94%E0%B8%B4%E0%B8%99-300x300.jpg",
      link: "/products/topsoil",
    },
    {
      name: "หน้าดิน",
      image:
        "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%94%E0%B8%B4%E0%B8%99-300x300.jpg",
      link: "/products/topsoil",
    },
    {
      name: "ดินลูกรังเป็นถุง",
      image:
        "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%A3%E0%B8%B1%E0%B8%87-300x300.jpg",
      link: "/products/laterite",
    },
    {
      name: "หินคลุก",
      image:
        "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B8%A5%E0%B8%B8%E0%B8%81-300x300.jpg",
      link: "/products/crushed-stone",
    },
    {
      name: "ดินลูกรัง",
      image:
        "https://psvgroupsand.com/wp-content/uploads/2022/12/%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%A3%E0%B8%B1%E0%B8%87-300x300.jpg",
      link: "/products/laterite",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT SIDEBAR */}
          <aside className="w-full lg:w-64 shrink-0">
            {/* Search */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 text-gray-900">
                ค้นหาสินค้า
              </h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="ค้นหาสินค้า"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-l focus:outline-none focus:border-(--color-primary)"
                />
                <button className="bg-(--color-primary) text-white px-4 py-2 rounded-r hover:opacity-90">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Cart */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 text-gray-900">
                ตะกร้าสินค้า
              </h3>
              <p className="text-gray-600">No products in the cart.</p>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 text-gray-900">
                หมวดหมู่สินค้า
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <div key={cat.name} className="flex items-start gap-2">
                    <button className="text-sm text-gray-700 hover:text-(--color-primary) text-left flex-1">
                      {cat.name}
                    </button>
                    <span className="text-gray-400 text-sm">({cat.count})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Products (Tags) */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 text-gray-900">
                สินค้าขายดี
              </h3>
              <div className="space-y-4">
                {relatedProducts.map((product) => (
                  <Link
                    key={product.name}
                    href={product.link}
                    className="flex items-center gap-3 group"
                  >
                    <div className="relative w-16 h-16 shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-(--color-primary) cursor-pointer">
                      {product.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              {categoryTitle}
            </h1>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-(--color-primary) transition-all duration-300 hover:shadow-lg"
                >
                  {/* Product Image */}
                  <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />

                    {/* Out of Stock Overlay */}
                    {product.outOfStock && (
                      <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center">
                        <div className="bg-gray-500 text-white px-6 py-3 rounded-lg font-bold text-lg">
                          OUT OF STOCK
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-2">
                      {product.category}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {product.name}
                    </h3>

                    {/* Quick View Button */}
                    {!product.outOfStock && (
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="w-full bg-(--color-primary) text-white py-2.5 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
                      >
                        Quick View
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Content */}
            <div className="grid md:grid-cols-2">
              {/* Product Image - Left Side */}
              <div className="relative w-full h-[500px] bg-gray-100">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Details - Right Side */}
              <div className="p-10 flex flex-col">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl leading-none w-8 h-8 flex items-center justify-center transition-colors"
                >
                  ×
                </button>

                {/* Product Title */}
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {selectedProduct.name}
                </h2>

                {/* Details Section */}
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold">จัดส่งด้วย:</span>{" "}
                      {selectedProduct.details.จัดส่งด้วย}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold">จัดส่งฟรี:</span>{" "}
                      {selectedProduct.details.จัดส่งฟรี}
                    </p>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    สนใจติดต่อ
                  </h3>
                  <div className="space-y-1 text-gray-700">
                    <p>061-863-3344 / 098-408-7225 / 081-816-7719</p>
                  </div>
                </div>

                {/* Line ID */}
                <div className="mb-4">
                  <p className="text-gray-700">
                    <span className="font-semibold">Line ID</span> : @psv.group
                  </p>
                </div>

                {/* SKU */}
                <div className="mb-4">
                  <p className="text-sm text-gray-500">
                    SKU: {selectedProduct.sku}
                  </p>
                </div>

                {/* Categories */}
                <div className="mb-4">
                  <p className="text-gray-700">
                    <span className="font-semibold">Categories:</span>{" "}
                    <span className="text-(--color-primary)">
                      {selectedProduct.category}
                    </span>
                    ,{" "}
                    <span className="text-(--color-primary)">
                      {selectedProduct.subcategory}
                    </span>
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Tags:</span>{" "}
                    {selectedProduct.tags.map((tag, idx) => (
                      <span key={tag}>
                        <span className="text-(--color-primary)">{tag}</span>
                        {idx < selectedProduct.tags.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
