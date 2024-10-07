import { ChevronRight } from "lucide-react";
import HeroAnimated from "../ui/HeroAnimated";
import LinkItem from "../LinkItem";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <section className="relative h-screen w-full bg-transparent py-18 lg:py-20 pt-0 lg:pt-0 pb-0 lg:pb-0">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 object-cover w-full h-full transform scale-y-[-1] opacity-70 pointer-events-none"
          >
            <source
              src="https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="font-aeonik text-shadow-md text-5xl sm:text-7xl xl:text-[89px] font-light leading-[1.1] tracking-[-0.89px] text-white">
            Revolutionize <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-orange-200">Your Customer Support</span>
            <br /> with BulkCare
          </h1>
          <h2 className="mt-6 text-base lg:text-lg lg:max-w-[860px] font-medium leading-normal text-[#F5F5F5] sm:px-0 md:w-11/12">
            BulkCare offers reliable, scalable, and personalized customer support solutions tailored to your business needs. With our expertly trained teams, we ensure customer satisfaction, allowing you to focus on growth while we handle your customer inquiries efficiently and professionally.
          </h2>

          <div className="mt-6 space-x-6">
            <Link
              className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/5 via-purple-400/20 to-transparent    text-white border-input border-[1px] hover:bg-transparent/90 transition-colors sm:w-auto py-4 px-10"
              href="/contact"
            >
              Get Started
              <span className="ml-1 duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
