// AdvantageSection.jsx
import React from 'react';
import { TimelineContent } from '@/components/ui/framer-timeline';

const AdvantageSection = ({ title, description, imgSrc, animationNum, timelineRef }: any) => {
  return (
    <div className="space-y-2">
      <TimelineContent animationNum={animationNum} timelineRef={timelineRef}>
        <h1 className="text-5xl leading-[110%]">{title}</h1>
      </TimelineContent>
      <TimelineContent animationNum={animationNum + 1} timelineRef={timelineRef}>
        <p className="text-xl leading-[110%]">{description}</p>
      </TimelineContent>
      <TimelineContent animationNum={animationNum + 2} timelineRef={timelineRef}>
        <img
          src={imgSrc}
          className="w-full h-96 object-cover rounded-md"
          alt={title}
        />
      </TimelineContent>
    </div>
  );
};

export default AdvantageSection;
