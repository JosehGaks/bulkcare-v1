import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sabo Masties",
    designation: "Founder @ Rolex",
    content:
      "Bulk Care Customer Care has transformed our customer support operations. Their team is responsive, professional, and always ready to assist our customers. Highly recommend their services!",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Margin Gesmu",
    designation: "Founder @ UI Hunter",
    content:
      "We have seen a significant improvement in customer satisfaction since partnering with Bulk Care. Their multi-channel support approach ensures our customers receive timely assistance, no matter how they reach out",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "William Smith",
    designation: "Founder @ Trorex",
    content:
      "Partnering with Bulk Care has been a game-changer for our business. Their expert team handles all our customer queries with ease, allowing us to focus on growth and innovation.",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
  {
    id: 4,
    name: "William Smith",
    designation: "Founder @ Trorex",
    content:
      "The level of service provided by Bulk Care is exceptional. Their 24/7 availability means our customers always have someone to turn to, and the feedback has been overwhelmingly positive.",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
  {
    id: 5,
    name: "William Smith",
    designation: "Founder @ Trorex",
    content:
      "Bulk Care's support team is top-notch. They are quick to resolve issues and always maintain a friendly and professional demeanor. Our customers have never been happier",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
  {
    id: 6,
    name: "William Smith",
    designation: "Founder @ Trorex",
    content:
      "Since outsourcing our customer support to Bulk Care, we've experienced a dramatic reduction in response times and an overall boost in customer satisfaction. Their team truly cares about our customers",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Client Say"
          paragraph=""
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
