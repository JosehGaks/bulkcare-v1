import SectionTitle from "../Common/SectionTitle";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Spotlight from "../ui/spotlight-card";
import SingleWorkCycle from "./SingleWorkCycle";
import workCycleData from "./workCycleData";

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
