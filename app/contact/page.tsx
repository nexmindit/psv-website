import Image from "next/image";
import { Metadata } from "next";
import BannerCarousel from "@/components/BannerCarousel";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "ติดต่อเรา - PSV Group",
  description:
    "ติดต่อ PSV Group บริการวัสดุก่อสร้างและรับถมที่ มีสาขาให้บริการ 3 แห่ง สายไหม รังสิต สำโรง พร้อมแผนที่และช่องทางติดต่อ",
};

export default function ContactPage() {
  const branches = [
    {
      name: "สาขา สายไหม",
      address: "สายไหม กรุงเทพมหานคร",
      phone: "098-408-7225",
      mobile: "081-816-7719",
      hours: "ทุกวัน 08:00-17:00 น.",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.0!2d100.69386!3d13.925622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2268a66ffedc3574!2zMTPCsDU1JzMyLjIiTiAxMDDCsDQxJzM3LjkiRQ!5e0!3m2!1sth!2sth!4v1234567890",
      directMapUrl:
        "https://www.google.com/maps?ll=13.925622,100.69386&z=13&t=m&hl=th&gl=TH&mapclient=embed&cid=2479237003536925300",
      isHeadOffice: true,
    },
    {
      name: "สาขา รังสิต",
      address:
        "ที่อยู่ 70/2  หมู่5  ถนนเลียบคลองรังสิต ตำบลบ้านใหม่ อำเภอเมือง ปทุมธานี",
      phone: "098-408-7225",
      mobile: "081-816-7719",
      hours: "ทุกวัน 08:00-17:00 น.",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.0!2d100.398319!3d13.810896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ4JzM5LjIiTiAxMDDCsDIzJzU0LjAiRQ!5e0!3m2!1sth!2sth!4v1234567890",
      directMapUrl:
        "https://www.google.com/maps?ll=13.810896,100.398319&z=10&t=m&hl=th&gl=TH&mapclient=embed&saddr&daddr=ทางทรายพระหมสุวรรณ+พีเอสวี,+บ้านใหม่,+เลขที่70/2+หมู่5+ถนนเลียบคลองรังสิต+ตำบลบ้านใหม่+อำเภอเมือง,+เมือง,+ปทุมธานี+12000&dirflg=d",
      isHeadOffice: false,
    },
    {
      name: "สาขา สำโรง",
      address:
        "77/3 หมู่ที่ 6 ตำบลสำโรง อำเภอพระประแดง จังหวัดสมุทรปราการ 10130",
      phone: "062-888-2171",
      mobile: "081-816-7719",
      hours: "ทุกวัน 08:00-17:00 น.",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.0!2d100.501865!3d13.77502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ2JzMwLjEiTiAxMDDCsDMwJzA2LjciRQ!5e0!3m2!1sth!2sth!4v1234567890",
      directMapUrl:
        "https://www.google.com/maps?ll=13.77502,100.501865&z=11&t=m&hl=th&gl=TH&mapclient=embed&saddr&daddr=ทางทรายพระหมสุวรรณ+พีเอสวี,+บ้านใหม่,+เลขที่70/2+หมู่5+ถนนเลียบคลองรังสิต+ตำบลบ้านใหม่+อำเภอเมือง,+เมือง,+ปทุมธานี+12000&dirflg=d",
      isHeadOffice: false,
      isNew: true,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner Carousel */}
      <BannerCarousel />

      {/* Contact Info Section */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ติดต่อเรา
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                มีทีมงานให้คำปรึกษาเรื่อง ทราย ดิน หิน ลูกรัง
                หรือสอบถามเพิ่มเติมโดยทีมงานมืออาชีพ
              </p>
              <div className="w-20 h-1 bg-(--color-gold) mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
              {/* Image */}
              <div className="relative h-64 sm:h-80 lg:h-[500px] rounded-sm overflow-hidden border-2 border-(--psv-border)">
                <Image
                  src="/psv_hero.png"
                  alt="PSV Group - ติดต่อเรา"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Contact Information */}
              <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    บริษัท พีเอสวี กรุ๊ป จำกัด (สาขาใหญ่)
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    พร้อมให้คำปรึกษา คำนวณพื้นที่ ปริมาณของสินค้า
                    ที่ใช้ในการถมที่ มากกว่า 30 ปี
                  </p>
                </div>

                {/* Quick Contact Cards */}
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  <a
                    href="tel:098-408-7725"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-sm border-2 border-(--psv-border) hover:border-(--color-primary) transition-colors"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-(--color-primary) rounded-sm flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs sm:text-sm text-gray-600 mb-1">
                        โทรศัพท์
                      </div>
                      <div className="text-sm sm:text-base font-semibold text-gray-900">
                        098-408-7725
                      </div>
                    </div>
                  </a>

                  <a
                    href="http://line.me/ti/p/~@psv.group"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-sm border-2 border-(--psv-border) hover:border-[#00B900] transition-colors"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00B900] rounded-sm flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs sm:text-sm text-gray-600 mb-1">
                        Line Official
                      </div>
                      <div className="text-sm sm:text-base font-semibold text-gray-900">
                        @psv.group
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/PSVGroup.Sand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-sm border-2 border-(--psv-border) hover:border-[#1877F2] transition-colors"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1877F2] rounded-sm flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs sm:text-sm text-gray-600 mb-1">
                        Facebook
                      </div>
                      <div className="text-sm sm:text-base font-semibold text-gray-900">
                        PSV Group Sand
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Branches Section with Maps */}
      <AnimatedSection>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                สาขาของเรา
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                เรามี 3 สาขาพร้อมให้บริการทั่วกรุงเทพและปริมณฑล
              </p>
              <div className="w-20 h-1 bg-(--color-gold) mx-auto mt-4"></div>
            </div>

            <div className="space-y-12">
              {branches.map((branch, index) => (
                <div
                  key={branch.name}
                  className="bg-white rounded-sm border-2 border-(--psv-border) overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Branch Info */}
                    <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          {branch.isHeadOffice && (
                            <span className="inline-block px-3 py-1 bg-(--color-gold) text-white rounded-full text-xs font-semibold">
                              สำนักงานใหญ่
                            </span>
                          )}
                          {branch.isNew && (
                            <span className="inline-block px-3 py-1 bg-green-500 text-white rounded-full text-xs font-semibold">
                              สาขาใหม่
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                          {branch.name}
                        </h3>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-(--color-gold) mt-0.5 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                              ที่อยู่
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {branch.address}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-(--color-gold) mt-0.5 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                              โทรศัพท์
                            </h4>
                            <p className="text-gray-600 text-sm">
                              <a
                                href={`tel:${branch.phone?.replace(/\D/g, "")}`}
                                className="hover:underline"
                              >
                                {branch.phone}
                              </a>
                            </p>
                            <p className="text-gray-600 text-sm">
                              <a
                                href={`tel:${branch.mobile?.replace(
                                  /\D/g,
                                  ""
                                )}`}
                                className="hover:underline"
                              >
                                {branch.mobile}
                              </a>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-(--color-gold) mt-0.5 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                              เวลาทำการ
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {branch.hours}
                            </p>
                          </div>
                        </div>

                        <div className="pt-4">
                          <a
                            href={branch.directMapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-(--color-primary) text-white px-4 sm:px-6 py-2 rounded-sm text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity duration-200"
                          >
                            เปิดใน Google Maps
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="h-64 sm:h-80 lg:h-full lg:min-h-[400px] bg-gray-200">
                      <iframe
                        src={branch.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: "256px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`แผนที่ ${branch.name}`}
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Line QR Code Section */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="bg-gray-50 rounded-sm border-2 border-(--psv-border) p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                ติดต่อผ่าน Line Official Account
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                สแกน QR Code เพื่อเพิ่มเพื่อนและสอบถามข้อมูล
              </p>
              <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-sm border-2 border-(--psv-border) inline-block max-w-full">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gray-200 flex items-center justify-center mx-auto mb-4">
                  {/* Replace with actual QR code image */}

                  <Image
                    src="/line_qr.png"
                    alt="Line QR Code"
                    width={256}
                    height={256}
                  />
                </div>
                <a
                  href="https://line.me/ti/p/~@psv.group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#00B900] text-white px-6 py-3 rounded-sm font-semibold text-sm sm:text-base hover:bg-[#00A000] transition-all hover:scale-105 shadow-md"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                  เพิ่มเพื่อน
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
