import { ChevronRight } from "lucide-react";
import HeroAnimated from "../ui/HeroAnimated";
import LinkItem from "../LinkItem";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <section className="py-18 lg:py-20 bg-transparent pt-0 lg:pt-0 pb-0 lg:pb-0">
        <div className="container relative mx-auto">
          <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 lg:block">
            <div className="pointer-events-none w-full select-none lg:w-auto">
              <div className="hidden md:block">
                <div style={{ width: "1400px", height: "800px" }}>
                  <div
                    className="[&amp;>canvas]:!w-full [&amp;>canvas]:!h-full"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <canvas
                      className="block"
                      width="1120"
                      height="520"
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
        alt="Hero Background"
        loading="lazy"
        width={1170}
        height={511}
        className="top-0 sm:top-0 opacity-100 select-none transition-opacity duration-1000 pointer-events-none absolute object-cover w-full min-w-[100vw] sm:min-w-[100vw] lg:hidden left-0 transform scale-y-[-1]"
        sizes="100vw"
        src="/images/hero/image.png"
      />

          <div className="pt-24 xl:pt-44">
            <div className="relative z-10">
              <h1 className="font-aeonik text-shadow-md text-center text-5xl font-light leading-[1.1] tracking-[-0.89px] sm:text-7xl sm:leading-none xl:text-[89px]">
                Power Your Business
                <br /> with Bulkcare
              </h1>
              <h2 className="mx-auto my-6 text-center font-sans text-base font-medium leading-normal text-[#F5F5F5] sm:px-0 md:w-11/12 lg:my-[22px] lg:w-full lg:max-w-[860px] lg:text-lg">
                Make the best models with the best data. Scale Data Engine
                powers nearly every major foundation model, and with Scale GenAI
                Platform, leverages your enterprise data to unlock the value of
                AI.
              </h2>
              <div className="mx-auto w-full max-w-max items-center space-x-6 md:mb-0 xl:mb-9">
                <a
                  className="relative inline-block rounded-xl outline-offset-[3px] outline-[rgba(255,255,255,0.64)] focus-visible:outline"
                  href="/demo"
                >
                  <div className="new-button_button--primary__EJ4AI transition-translate new-button_button--purple__hhI2y group group flex h-full cursor-pointer flex-nowrap items-center justify-center whitespace-nowrap px-[30px] py-[14px] text-sm font-medium leading-[150%] duration-300">
                    Book a Demo
                    <span className="transition-translate font-unicode ml-1 inline-block w-fit font-normal duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                  <span className="pointer-events-none absolute inset-0 select-none rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:absolute after:inset-0 after:inline-block after:rounded-[11px] after:shadow-[inset_0_0_0_1px_rgba(105,57,193,0.4)] after:content-['']"></span>
                </a>
                <a
                  className="group relative inline-block whitespace-nowrap rounded-xl py-2 text-sm font-medium leading-5 text-[#F4F0FF] outline-offset-[3px] outline-[rgba(255,255,255,0.64)] transition-colors duration-300 hover:text-white focus-visible:outline"
                  href="/data-engine"
                >
                  Build AI
                  <span className="transition-translate font-unicode ml-1 inline-block w-fit font-normal duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="-z-1 absolute inset-0 h-[700px] w-full bg-transparent bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-15 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <img
          className="absolute inset-x-0 -top-20 opacity-75"
          src={
            "https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"
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
                href="/#"
                variant="default"
                className="group inline-flex w-full items-center justify-center border-[1px] border-input bg-transparent bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent px-10 py-4 text-center transition-colors hover:bg-transparent/10 sm:w-auto"
              >
                Explore Services
                <ChevronRight className="ml-2 h-4 w-4 duration-300 group-hover:translate-x-1" />
              </LinkItem>
            </div>
          </HeroAnimated>
        </div> */}
      </section>
    </>
  );
};

export default Banner;
