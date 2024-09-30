import SectionTitle from "../Common/SectionTitle";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import SingleWorkCycle from "./singleWorkCycle";
import workCycleData from "./workCycleData";

const WorkCycle = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Features"
          title="We got you fully covered"
          paragraph="We ensure a complete workflow cycle for you. We've got everything handled from the start of your project to its ongoing operations, no matter what challenges arise."
          center
        />

        {/* <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {workCycleData.map((cycleUnit, i) => (
            <SingleWorkCycle key={i} cycleUnit={cycleUnit} />
          ))}
        </div> */}

        <BentoGrid className="-mx-4 mt-12 md:auto-rows-[20rem]">
      {workCycleData.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
      </div>
    </section>
  );
};

export default WorkCycle;
