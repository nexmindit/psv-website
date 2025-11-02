import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <Link
              href="/"
              className="inline-block mb-4 bg-white px-3 py-2 rounded"
            >
              <img
                src="/psv_logo.jpg"
                alt="PSV Group Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              บริษัท พี.เอส.วี กรุ๊ป จำกัด เป็นผู้ประกอบการค้าวัสดุก่อสร้าง
              ประเภท ทราย ดิน หิน ลูกรัง ที่มีคุณภาพดีที่สุด มานานกว่า 30 ปี
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-2">ติดต่อเรา:</p>
              <p className="text-sm text-gray-300">โทร: 098-408-7225</p>
              <p className="text-sm text-gray-300">LINE: @psv.group1</p>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">หมวดหมู่สินค้า</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shop?category=sand"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  สินค้าประเภท ทราย
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=soil"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  สินค้าประเภท ดิน
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=stone"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  สินค้าประเภท หิน
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=gravel"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  สินค้าประเภท ลูกรัง
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ลิงก์ด่วน</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  บริการรับถมที่
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  สินค้าของเรา
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  เกร็ดความรู้
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  ติดต่อเรา
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ติดตามเรา</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://line.me/ti/p/~@psv.group1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#00B900] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1877F2] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF0000] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <p className="mb-2">เวลาทำการ:</p>
              <p className="text-gray-300">จันทร์ - เสาร์: 08:00 - 17:00</p>
              <p className="text-gray-300">อาทิตย์: ปิดทำการ</p>
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
        href="https://line.me/ti/p/~@psv.group1"
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
