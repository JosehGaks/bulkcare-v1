import { CycleUnits } from "@/types/supportCycleUnits";
import SectionTitle from "../Common/SectionTitle";
import { BackgroundBeams } from "../ui/background-beams";
import { BackgroundGradient } from "../ui/background-gradient";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Spotlight, { SpotlightCard } from "../ui/spotlight-card";
import workCycleData from "./workCycleData";
import SingleWorkCycle from "./Cycle";

const WorkCycle = () => {
  return (
    <>
    <section className="bg-transparent py-20 lg:pb-0 ">
      <img
        className="absolute inset-x-0 -top-20 opacity-75"
        src={"https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"}
        width={1000}
        height={1000}
        alt="back bg"
      />
      <div className="mx-auto max-w-screen-xl px-4 text-gray-400 md:px-8">
        <div className="relative mx-auto max-w-2xl sm:text-center">
          <div className="relative z-10">
            <h3 className="font-geist mt-4 text-3xl font-normal tracking-tighter text-gray-200 sm:text-4xl md:text-5xl">
              We ensure a complete workflow cycle for you
            </h3>
            <p className="font-geist mt-3 text-gray-200">
              We&apos;ve got everything handled from the start of your project
              to its ongoing operations, no matter what challenges arise.
            </p>
          </div>
          <div
            className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            }}
          ></div>
        </div>
        <hr className="mx-auto mt-5 h-px w-1/2  bg-white/30" />
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {workCycleData.map((item, idx) => (
              <li
                key={idx}
                className="transform-gpu space-y-3 rounded-xl border  bg-transparent p-4 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]"
              >
                <div className="w-fit transform-gpu rounded-full p-4 text-purple-600 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
                  {item.icon}
                </div>
                <h4 className="font-geist text-lg font-bold tracking-tighter text-gray-300">
                  {item.title}
                </h4>
                <p className="text-gray-500">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>    
    </>

  );
};

export default WorkCycle;
