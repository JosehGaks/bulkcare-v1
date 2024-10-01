import { CycleUnits } from "@/types/supportCycleUnits";
import SectionTitle from "../Common/SectionTitle";
import { BackgroundBeams } from "../ui/background-beams";
import { BackgroundGradient } from "../ui/background-gradient";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Spotlight, { SpotlightCard } from "../ui/spotlight-card";
import workCycleData from "./workCycleData";

const SingleWorkCycle = ({ cycleUnit }: { cycleUnit: CycleUnits }) => {
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

const WorkCycle = () => {
  return (
    <>
<section className="relative flex flex-col justify-center overflow-hidden">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
            <SectionTitle title="Work Cycle" subtitle="We got you fully covered" paragraph="We ensure a complete workflow cycle for you. We've got everything handled from the start of your project to its ongoing operations, no matter what challenges arise."/>
            <Spotlight className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group pt-10">
              {workCycleData.map((item, i) => (
                <SingleWorkCycle cycleUnit={item} key={i} />
              ))}
              </Spotlight></div></section>
    </>
  );
};

export default WorkCycle;
