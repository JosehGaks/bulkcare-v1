import { ChevronRight } from "lucide-react";
import HeroAnimated from "../ui/HeroAnimated";
import LinkItem from "../LinkItem";

const Banner = () => {
  return (
    <>
      <section className="relative mt-0 min-h-[600px] w-full py-20">
        <div className="-z-1 absolute inset-0 h-[600px] w-full bg-transparent bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-15 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <img
          className="absolute inset-x-0 -top-20 opacity-75"
          src={
            "https://pipe.com/_next/image?url=%2Fassets%2Fimg%2Fhero-left.png&w=384&q=75"
          }
          width={1000}
          height={1000}
          alt="back bg"
        />
        <div className="relative z-10 mx-auto container translate-y-[33%] space-y-6">
          <HeroAnimated
            header="Exceptional Customer Support Outsourcing"
            headerClassName="text-center max-w-5xl text-5xl md:text-6xl tracking-tighter mx-auto lg:text-7xl font-bold font-geist font-normal text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-0 md:pb-5 mt-1"
            description="Let BulkCare manage your customer support with a highly trained team, allowing you to focus on your core business. Scalable, reliable, and personalized service, tailored to meet your needs."
            descriptionClassName="mx-auto text-zinc-400 text-center text-md lg:max-w-2xl md:py-5"
          >
            <div className="flex flex-wrap items-center justify-center gap-3">
              <LinkItem
                href="/services"
                variant="default"
                className="group inline-flex w-full items-center justify-center border-[1px] border-input bg-transparent bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent px-10 py-4 text-center transition-colors hover:bg-transparent/10 sm:w-auto"
              >
                Explore Services
                <ChevronRight className="ml-2 h-4 w-4 duration-300 group-hover:translate-x-1" />
              </LinkItem>
            </div>
          </HeroAnimated>
        </div>
      </section>
    </>
  );
};

export default Banner;
