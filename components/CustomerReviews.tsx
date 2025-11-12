import Image from "next/image";

interface Review {
  src: string;
  alt: string;
}

const defaultReviews: Review[] = [
  { src: "/customer_reviews/cr_1.png", alt: "รีวิวจากลูกค้า 1" },
  { src: "/customer_reviews/cr_2.png", alt: "รีวิวจากลูกค้า 2" },
  { src: "/customer_reviews/cr_3.png", alt: "รีวิวจากลูกค้า 3" },
  { src: "/customer_reviews/cr_1.png", alt: "รีวิวจากลูกค้า 4" },
  { src: "/customer_reviews/cr_2.png", alt: "รีวิวจากลูกค้า 5" },
  { src: "/customer_reviews/cr_3.png", alt: "รีวิวจากลูกค้า 6" },
];

interface CustomerReviewsProps {
  reviews?: Review[];
}

export default function CustomerReviews({
  reviews = defaultReviews,
}: CustomerReviewsProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          รีวิวจากลูกค้า
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative h-96 w-full rounded-sm overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={review.src}
                alt={review.alt}
                fill
                className="aspect-[3/4]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
