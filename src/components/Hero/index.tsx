"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#145454_34%,#186C6C_65%,#52A1A1_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#5ca6a6] bg-[radial-gradient(closest-side,#000_82%,#186c6c)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      
      <div className="relative z-10">
      <h1 className="text-5xl font-light sm:leading-none leading-[1.1] sm:text-7xl xl:text-[89px] tracking-[-0.89px] font-aeonik text-center text-shadow-md">
      Elevate<br/> <br className="lg:hidden" />
        <span className="relative">
         Customer Service
        </span>
        <br />
        with BulkCare
      </h1>
      <h2 className="my-6 font-sans text-base text-[#F5F5F5] sm:px-0 font-medium leading-normal lg:my-[22px] lg:text-lg md:w-11/12 lg:w-full text-center lg:max-w-[860px] mx-auto">
      Deliver the best customer care with tailored support solutions. BulkCare powers customer interactions for businesses of all sizes, leveraging data and expertise to enhance customer satisfaction and operational efficiency.      </h2>
      <div className="items-center w-full mx-auto space-x-6 md:mb-0 xl:mb-9 max-w-max">
        <Link href="/demo">
          <Link className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block" href={""}>
            <div className="new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple__hhI2y text-sm px-[30px] py-[14px]">
              Contact Us
              <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">→</span>
            </div>
            <span className="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(105,57,193,0.4)]"></span>
          </Link>
        </Link>
        <Link href="/data-engine">
          <Link className="text-[#F4F0FF] hover:text-white transition-colors duration-300 py-2 font-medium whitespace-nowrap text-sm leading-5 group relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block" href={""}>
            Get Started
            <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">→</span>
          </Link>
        </Link>
      </div>
    </div>
        </div>
  );
};

export default Hero;
