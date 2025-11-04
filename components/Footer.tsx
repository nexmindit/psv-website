import Link from "next/link";
import Image from "next/image";

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
            <div className="bg-white rounded-lg overflow-hidden h-[380px] w-full">
              <div
                className="fb-page w-full"
                data-href="https://www.facebook.com/PSVGroup.Sand"
                data-tabs="timeline"
                data-width=""
                data-height="380"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/PSVGroup.Sand"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/PSVGroup.Sand">
                    Psv ศูนย์ขายส่ง ทราย ดิน หิน ลูกรัง
                  </a>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Column 2: TikTok Widget */}
          <div className="w-full">
            <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">
              ติดตามเราบน TikTok
            </h4>
            <div className="bg-gray-800 rounded-lg overflow-hidden h-[380px] w-full flex items-center justify-center">
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
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 bg-gray-800 rounded-lg p-2 hover:bg-gray-750 transition-colors cursor-pointer"
                >
                  <div className="w-20 h-16 bg-gray-700 rounded shrink-0 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm font-medium text-gray-200 line-clamp-2 mb-1">
                      บทความตัวอย่างที่ {item} - เกร็ดความรู้เกี่ยวกับวัสดุก่อสร้าง
                    </h5>
                    <p className="text-xs text-gray-400">
                      {item} วันที่แล้ว
                    </p>
                  </div>
                </div>
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
