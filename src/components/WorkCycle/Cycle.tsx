"use client";
import { Feature } from "@/types/feature";
import { CycleUnits } from "@/types/supportCycleUnits";
import SpotlightCard from "../ui/spotlight-card";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";
import { BackgroundBeams } from "../ui/background-beams";



const Cycle = ({ cycleUnit }: { cycleUnit: CycleUnits }) => {
  const { icon, title, description} = cycleUnit;
  return (
    <SpotlightCard>
    <BackgroundGradient  className="relative h-full bg-neutral-950 pb-8 rounded-3xl z-20 overflow-hidden p-4">
      {/* Radial gradient */}
      <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
      </div>
      <div className="flex flex-col h-full items-center text-center">
        {/* Image */}
        <div className="relative inline-flex">
          <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-700" aria-hidden="true"></div>
          {icon}
        </div>
        {/* Text */}
        <div className="grow mb-5">
          <h2 className="text-xl text-slate-200 font-bold mb-1">{title}</h2>
          <p className="text-sm text-slate-500">
            {description}
          </p>
        </div>
      </div>
      <BackgroundBeams />
    </BackgroundGradient >
  </SpotlightCard>

  )
}

export default Cycle