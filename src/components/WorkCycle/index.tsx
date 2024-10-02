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
    <section className="py-14 mt-16 relative">
      <img
        src="https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"
        className="absolute z-2 -top-0 left-10"
      />
      <div className="max-w-screen-xl mx-auto px-4 text-gray-400 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <div className="relative z-10">
            <h3 className="text-gray-200 mt-4 text-3xl font-normal font-geist tracking-tighter md:text-5xl sm:text-4xl">
            We ensure a complete workflow cycle for you
            </h3>
            <p className="mt-3 font-geist text-gray-200">We've got everything handled from the start of your project to its ongoing operations, no matter what challenges arise.
            </p>
          </div>
          <div
            className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            }}
          ></div>
        </div>
        <hr className="bg-white/30 h-px w-1/2 mx-auto  mt-5"/>
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {workCycleData.map((item, idx) => (
              <li
                key={idx}
                className="bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  space-y-3 p-4 border rounded-xl"
              >
                <div className="text-purple-600 rounded-full p-4 transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] w-fit">{item.icon}</div>
                <h4 className="text-lg text-gray-300 font-bold font-geist tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-gray-500">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}   

export default WorkCycle;



