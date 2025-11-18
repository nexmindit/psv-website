"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

interface Testimonial {
  company: string;
  logo: string;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  bgColor?: string;
  autoSlide?: boolean;
}

// Default testimonials data
const defaultTestimonials: Testimonial[] = [
  
  {
    company: "บริษัท ช.การช่าง จำกัด (มหาชน)",
    logo: "/logo/chorkarnchang.png",
  },
  {
    company: "บริษัท ออริจิ้น พร็อพเพอร์ตี้ จำกัด (มหาชน)",
    logo: "/logo/origin.jpg",
  },
  {
    company: "บริษัท ซิโน-ไทย เอ็นจีเนียริ่ง แอนด์ คอนสตรัคชั่น จำกัด (มหาชน)",
    logo: "/logo/sino-thai.jpg",
  },
  {
    company: "บริษัท สี่แสงการโยธา (1979) จำกัด",
    logo: "/logo/see_sang_karn_yotah.jpg",
  },
  {
    company: "บริษัท ฤทธา จำกัด",
    logo: "/logo/ritta.jpg",
  },
  {
    company: "บริษัท อินเตอร์ไทย ฟาร์มาซูติเคิ้ล แมนูแฟคเจอริ่ง จำกัด",
    logo: "/logo/interthai.jpg",
  },
  {
    company: "บริษัท ยูนิค เอ็นจิเนียริ่ง แอนด์ คอนสตรัคชั่น จำกัด (มหาชน)",
    logo: "/logo/unique.jpg",
  },
  {
    company: "บริษัท อมร พรสติจ จำกัด (เป็นดีลเลอร์จำหน่ายรถยนต์ BMW)",
    logo: "/logo/amorn_prestige.jpg",
  },
  {
    company: "บริษัท สยามวันเดอร์วินเทอร์แลนด์ จำกัด",
    logo: "/logo/winter_wonder_land.jpg",
  }
];

export default function TestimonialsSection({
  title = "เคยร่วมงานกับบริษัทชั้นนำ",
  subtitle = "ที่ไว้วางใจและใช้วัสดุและเป็นลูกค้าของเรามานานกว่า 30 ปี",
  testimonials = defaultTestimonials,
  bgColor = "bg-white",
  autoSlide = true,
}: Readonly<TestimonialsSectionProps>) {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
          <div className="w-20 h-1 bg-[#446084] mx-auto rounded-full mt-4"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
            <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={32}
            slidesPerView={3}
            loop={true}
            freeMode={{
              enabled: true,
              momentum: true,
              momentumRatio: 0.5,
            }}
            autoplay={
              autoSlide
              ? {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                }
              : false
            }
            speed={3000}
            breakpoints={{
              320: {
              slidesPerView: 1,
              spaceBetween: 16,
              },
              640: {
              slidesPerView: 1,
              spaceBetween: 16,
              },
              768: {
              slidesPerView: 2,
              spaceBetween: 16,
              },
              1024: {
              slidesPerView: 3,
              spaceBetween: 24,
              },
              1280: {
              slidesPerView: 3,
              spaceBetween: 32,
              },
            }}
            className="testimonials-swiper"
            >
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-sm border-2 border-[#e6e9ef] flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <img
                  src={testimonial.logo}
                  alt={testimonial.company}
                  className="max-w-full max-h-full object-contain"
                />
                </div>
                <p className="text-xs text-gray-700 font-medium">
                {testimonial.company}
                </p>
              </div>
              </SwiperSlide>
            ))}
            </Swiper>

            <br />

           <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={32}
            slidesPerView={3}
            dir="rtl"
            loop={true}
            freeMode={{
              enabled: true,
              momentum: true,
              momentumRatio: 0.5,
            }}
            autoplay={
              autoSlide
                ? {
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
                : false
            }
            speed={3000}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.slice(4, 9).map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-sm border-2 border-[#e6e9ef] flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="w-32 h-32 mb-4 flex items-center justify-center">
                    <img
                      src={testimonial.logo}
                      alt={testimonial.company}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-700 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
