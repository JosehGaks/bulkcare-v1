import { Testimonial } from "@/types/testimonial";
import { cn } from "@/lib/utils";
import Marquee from "./Marquee";
import SectionTitle from "../Common/SectionTitle";

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
    name: "Jose Gakunga",
    designation: "Founder @ Makejah",
    content:
      "Since outsourcing our customer support to Bulk Care, we've experienced a dramatic reduction in response times and an overall boost in customer satisfaction. Their team truly cares about our customers",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];


const firstRow = testimonialData.slice(0, testimonialData.length / 2)
const secondRow = testimonialData.slice(testimonialData.length / 2)
 
const ReviewCard = ({
  img,
  name,
  designation,
  content,
}: {
  img: string
  name: string
  designation: string
  content: string
}) => {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{designation}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{content}</blockquote>
    </figure>
  )
}
 
const Testimonials = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl">
      {/* <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard img={review.image} key={review.designation} {...review} />
        ))}
      </Marquee> */}
      <SectionTitle title={"Testimonials"} subtitle={"What our clients say About Us."} paragraph=""/>
      <Marquee reverse pauseOnHover className="[--duration:20s] py-10">
        {secondRow.map((review) => (
          <ReviewCard img={review.image} key={review.designation} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  )
}
 
export default Testimonials