import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา - PSV Group | ผู้นำด้านวัสดุก่อสร้างมากกว่า 30 ปี",
  description:
    "ประวัติและเรื่องราวของ PSV Group ผู้ประกอบการค้าวัสดุก่อสร้าง ทราย ดิน หิน ลูกรัง มากกว่า 30 ปี พร้อมสาขาทั้ง 3 แห่ง",
};

export default function AboutPage() {
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
        "55/29 หมู่ที่ 11 ถนนหทัยราษฏร์ ตำบลลาดสวาย อำเภอลำลูกกา จ.ปทุมธานี 12150",
      phone: "098-408-7225",
      mobile: "081-816-7719",
      hours: "ทุกวัน 08:00-17:00 น.",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.0!2d100.398319!3d13.810896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ4JzM5LjIiTiAxMDDCsDIzJzU0LjAiRQ!5e0!3m2!1sth!2sth!4v1234567890",
      directMapUrl:
        "https://www.google.com/maps?ll=13.810896,100.398319&z=10&t=m&hl=th&gl=TH&mapclient=embed",
      isHeadOffice: false,
    },
    {
      name: "สาขา สำโรง",
      address: "ศูนย์ขายส่ง ซ.วัดมหาวงษ์ สำโรงใต้ สมุทรปราการ",
      phone: "062-888-2170",
      mobile: "081-716-7719",
      hours: "ทุกวัน 08:00-17:00 น.",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.0!2d100.501865!3d13.77502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ2JzMwLjEiTiAxMDDCsDMwJzA2LjciRQ!5e0!3m2!1sth!2sth!4v1234567890",
      directMapUrl:
        "https://www.google.com/maps?ll=13.77502,100.501865&z=11&t=m&hl=th&gl=TH&mapclient=embed",
      isHeadOffice: false,
      isNew: true,
    },
  ];

  const timelineEvents = [
    {
      year: "1990s",
      title: "การก่อตั้งบริษัท",
      description:
        "เริ่มต้นธุรกิจจากบ่อทรายและดินขนาดเล็ก เน้นคุณภาพและความน่าเชื่อถือ",
    },
    {
      year: "2000s",
      title: "การขยายกิจการ",
      description:
        "ขยายพื้นที่บ่อทรายเป็น 4,000 ไร่ และเริ่มมีเรือขนส่งของบริษัทเอง",
    },
    {
      year: "2010s",
      title: "เปิดสาขาแรก",
      description:
        "เปิดสาขาสายไหม เป็นสาขาแรกพร้อมให้บริการลูกค้าในกรุงเทพและปริมณฑล",
    },
    {
      year: "2015",
      title: "ขยายสู่ปริมณฑล",
      description: "เปิดสาขารังสิต เพื่อรองรับการเติบโตของพื้นที่ภาคกลาง",
    },
    {
      year: "2020",
      title: "เติบโตอย่างต่อเนื่อง",
      description:
        "ร่วมงานกับบริษัทชั้นนำมากกว่า 100 โครงการ สร้างความไว้วางใจให้ลูกค้า",
    },
    {
      year: "2023",
      title: "สาขาที่ 3",
      description:
        "เปิดสาขาสำโรง เพื่อครอบคลุมพื้นที่ให้บริการทั้งกรุงเทพและปริมณฑล",
    },
    {
      year: "ปัจจุบัน",
      title: "มากกว่า 30 ปี",
      description:
        "เป็นผู้นำด้านวัสดุก่อสร้างที่ได้รับความไว้วางใจจากลูกค้ามากกว่า 30 ปี",
    },
  ];

  const features = [
    {
      title: "ผลิตเอง จากบ่อของบริษัท",
      description:
        "บ่อมีเนื้อที่ 4000 ไร่ ขนส่งเองโดยเรือเหล็กของบริษัท ที่มากรุงเทพฯ และขายเองโดยบริษัทในเครือ จึงสามารถทำราคาได้ถูกที่สุดในท้องตลาด",
    },
    {
      title: "ประสบการณ์มากกว่า 30 ปี",
      description:
        "ร่วมงานกับบริษัทชั้นนำมาแล้วมากมาย มีผู้คอยให้คำปรึกษา คำนวนพื้นที่ ปริมาณของสินค้า",
    },
    {
      title: "บริการให้คำปรึกษา",
      description:
        "มีทีมงานให้คำปรึกษาเรื่อง ทราย ดิน หิน ลูกรัง หรือสอบถามเพิ่มเติม โดยทีมงานมืออาชีพ",
    },
    {
      title: "จัดส่งรวดเร็ว",
      description: "ส่งทุกที่ ที่ให้บริการ ภายใน 1 ชม.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <img
        src="/psv_banner.png"
        alt="PSV Group - เกี่ยวกับเรา"
        className="w-full h-full"
      />

      {/* Company Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              เรื่องราวของเรา
            </h2>
            <div className="w-20 h-1 bg-[#446084] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-100 overflow-hidden">
                <img
                  src="/vehicles.jpg"
                  alt="PSV Group - บริษัท พีเอสวี กรุ๊ป จำกัด"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                บริษัท พีเอสวี กรุ๊ป จำกัด
              </h3>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  เป็นผู้ประกอบการค้าวัสดุก่อสร้าง ประเภท ทราย ดิน หิน ลูกรัง
                  ที่มีคุณภาพดีที่สุด ตามความต้องการของท้องตลาด เนื่องจาก บริษัท
                  ผลิตวัสดุเองจากบ่อดินบ่อทรายบนเนื้อที่ 4000 ไร่
                  ขนส่งเองโดยเรือเหล็กของบริษัทที่มากรุงเทพ
                  และขายเองโดยบริษัทในเครือจึงสามารถทำราคาได้ถูกที่สุดในท้องตลาด
                </p>

                <p>
                  การันตีได้จาก บริษัท อิตาเลี่ยนไทยฯ บริษัท ช.การช่างฯ บริษัท
                  ชิโนไทยฯ บริษัท ยูนิค เอ็นจิเนียริ่งฯ เป็นต้น ที่ไว้วางใจ
                  และใช้วัสดุและเป็นลูกค้าของเรามานานกว่า 30 ปี
                </p>

                <p>
                  นอกจากนี้ด้วยวัสดุที่ผลิตเองทางบริษัทจึงมีบริการรับถมที่ในกรุงเทพ
                  และปริมณฑล
                  ในราคาและคุณภาพที่ดีที่สุดในปัจจุบันเราเปิดบริการจุดขายอยู่ 3
                  สาขา สายไหม รังสิต สำโรง
                  สามารถจัดส่งสินค้าได้ทั้งกรุงเทพและปริมณฑลและเราจะขยายสาขาเพิ่มเรื่อยๆเพื่อครอบคลุมการให้บริการลูกค้าให้ทั่วถึงที่สุด
                </p>

                <div className="bg-[#446084]/5 p-6 rounded-lg border-2 border-(--psv-border) mt-6">
                  <p className="font-semibold text-lg text-gray-900">
                    เป็นผู้ประกอบการค้าวัสดุก่อสร้างประเภท ทราย ดิน หิน ลูกรัง
                    ที่มีคุณภาพที่ดีที่สุด ตามความต้องการของท้องตลาด
                    ผลิตทรายและดินเองจากบ่อทรายของบริษัท
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ประวัติความเป็นมา
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              ตั้งแต่เปิดกิจการจนถึงปัจจุบัน มากกว่า 30 ปีของความมุ่งมั่น
            </p>
            <div className="w-20 h-1 bg-[#446084] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#446084]/20"></div>

              {/* Timeline events */}
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div
                    key={event.year}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col`}
                  >
                    {/* Content */}
                    <div className="w-full md:w-5/12">
                      <div className="bg-white p-6 rounded-lg border-2 border-(--psv-border)">
                        <div className="inline-block px-3 py-1 bg-[#446084] text-white rounded-full text-sm font-bold mb-3">
                          {event.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex w-2/12 justify-center">
                      <div className="w-4 h-4 bg-[#446084] rounded-full border-4 border-white ring-4 ring-[#446084]/20"></div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="hidden md:block w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section with Maps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              สาขาของเรา
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              เรามี 3 สาขาพร้อมให้บริการทั่วกรุงเทพและปริมณฑล
            </p>
            <div className="w-20 h-1 bg-[#446084] mx-auto rounded-full mt-4"></div>
          </div>

          {/* Locations Map Image */}
          <div className="mb-12">
            <div className="bg-white rounded-lg overflow-hidden border-2 border-(--psv-border)">
              <img
                src="/locations.jpg"
                alt="แผนที่สาขา PSV Group"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="space-y-12">
            {branches.map((branch, index) => (
              <div
                key={branch.name}
                className="bg-white rounded-lg border-2 border-(--psv-border) overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Branch Info */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        {branch.isHeadOffice && (
                          <span className="inline-block px-3 py-1 bg-[#446084] text-white rounded-full text-xs font-semibold">
                            สำนักงานใหญ่
                          </span>
                        )}
                        {branch.isNew && (
                          <span className="inline-block px-3 py-1 bg-green-500 text-white rounded-full text-xs font-semibold">
                            สาขาใหม่
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {branch.name}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <svg
                          className="w-6 h-6 text-[#446084] mt-1 mr-3 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">
                            ที่อยู่
                          </p>
                          <p className="text-gray-600">{branch.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <svg
                          className="w-6 h-6 text-[#446084] mt-1 mr-3 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">
                            เบอร์โทร
                          </p>
                          <p className="text-gray-600">
                            {branch.phone}
                            <br />
                            {branch.mobile}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <svg
                          className="w-6 h-6 text-[#446084] mt-1 mr-3 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">
                            เวลาทำการ
                          </p>
                          <p className="text-gray-600">{branch.hours}</p>
                        </div>
                      </div>

                      <a
                        href={branch.directMapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-6 py-3 bg-[#446084] text-white rounded-lg font-semibold border-2 border-[#446084]"
                      >
                        เปิดแผนที่
                      </a>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="h-96 lg:h-auto">
                    <iframe
                      src={branch.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "400px" }}
                      allowFullScreen={false}
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

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            ต้องการสอบถามหรือขอใบเสนอราคา?
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            ทีมงานของเราพร้อมให้คำปรึกษาและตอบทุกคำถามของคุณ
          </p>
          <a
            href="http://line.me/ti/p/~@psv.group"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#00B900] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#00A000] transition-all hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            ติดต่อเราผ่าน Line
          </a>
        </div>
      </section>
    </div>
  );
}
