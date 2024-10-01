import { CycleUnits } from "@/types/supportCycleUnits";
import SectionTitle from "../Common/SectionTitle";
import { BackgroundBeams } from "../ui/background-beams";
import { BackgroundGradient } from "../ui/background-gradient";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Spotlight, { SpotlightCard } from "../ui/spotlight-card";
import workCycleData from "./workCycleData";
import SingleWorkCycle from "./SingleWorkCycle";

const WorkCycle = () => {
  return (
    <>
      <section className="relative flex flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
          <SectionTitle
            title="Work Cycle"
            subtitle="We got you fully covered"
            paragraph="We ensure a complete workflow cycle for you. We've got everything handled from the start of your project to its ongoing operations, no matter what challenges arise."
          />
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 pt-10 lg:max-w-none lg:grid-cols-3">
            {workCycleData.map((item, i) => (
              <SingleWorkCycle cycleUnit={item} key={i} />
            ))}
          </Spotlight>
        </div>
      </section>
    </>
  );
};

export default WorkCycle;
