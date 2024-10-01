"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
 

const Hero = () => {
  return (
<div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#145454_34%,#186C6C_65%,#52A1A1_82%)] py-[72px] sm:py-24 relative overflow-clip">

      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#5ca6a6] bg-[radial-gradient(closest-side,#000_82%,#186c6c)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
    <div className="container relative">
      {/* <div className="flex items-center justify-center -mt-10">
        <AnimatedGradientTextDemo/>
      </div> */}
      <div className="flex justify-center mt-8 ">
      <div className="inline-flex relative">
      <h1 className='text-7xl sm:text-9xl font-bold tracking-tightner text-center inline-flex'>Bulk Care<br/> is more</h1>
      <motion.div className='absolute right-[478px] top-[108px] hidden sm:inline'
      drag
      dragSnapToOrigin

      >
      <Image src={"/images/hero/message.png"} alt="cursor" height={150} width={150} className='max-w-none' draggable="false"/>
      </motion.div>
      <motion.div className='absolute left-[498px] top-[56px] hidden sm:inline'
      drag
      dragSnapToOrigin
      >
      <Image src={"/images/hero/call.png"} alt="cursor"  height={150} width={150} className='max-w-none' draggable="false"/>
      </motion.div>
      </div>
      </div>
      <div className="flex justify-center">
      <p className='text-xl text-center mt-8 max-w-md'>We are a customer-centric, digitally empowered outsourcing partner, specializing in providing People-as-a-Service solutions to high-growth, innovative, and tech-forward companies.</p>
      </div>
      <div className="flex justify-center mt-8">
      <button className='bg-white text-black py-3 px-5 rounded-lg font-medium'>Get started</button>
      </div>


    </div>
    

    </div>
  )
};

export default Hero;