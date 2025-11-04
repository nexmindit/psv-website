"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

interface Testimonial {
  company: string;
  logo: string;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  bgColor?: string;
  autoSlide?: boolean;
}

export default function TestimonialsSection({
  title = "เคยร่วมงานกับบริษัทชั้นนำ",
  subtitle = "ที่ไว้วางใจและใช้วัสดุและเป็นลูกค้าของเรามานานกว่า 30 ปี",
  testimonials,
  bgColor = "bg-white",
  autoSlide = true,
}: TestimonialsSectionProps) {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="w-20 h-1 bg-[#446084] mx-auto rounded-full mt-4"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Splide
            options={{
                rewind: true,
              type: "loop",
              drag: "free",
              focus: "center",
              perPage: 3,
              gap: "2rem",
              autoScroll: autoSlide
                ? {
                    speed: 20,
                    pauseOnHover: true,
                    pauseOnFocus: true,
                  }
                : false,
              breakpoints: {
                1024: {
                  perPage: 3,
                  gap: "1.5rem",
                },
                768: {
                  perPage: 2,
                  gap: "1rem",
                },
                640: {
                  perPage: 1,
                  gap: "1rem",
                },
              },
              pagination: false,
              arrows: false,
            }}
            extensions={{ AutoScroll }}
            aria-label="Testimonials"
          >
            {testimonials.map((testimonial, index) => (
              <SplideSlide key={index}>
                <div className="bg-white p-6 rounded-lg border-2 border-(--psv-border) flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="w-32 h-32 mb-4 flex items-center justify-center">
                    <img
                      src={testimonial.logo}
                      alt={testimonial.company}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-700 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </SplideSlide>
            ))}
          </Splide>

          {/* Scroll indicator hint */}
          <div className="text-center mt-6 text-sm text-gray-400">
            {autoSlide && "⏸ วางเมาส์เพื่อหยุดชั่วคราว • ↔️ ลากเพื่อเลื่อนดู"}
          </div>
        </div>
      </div>
    </section>
  );
}
