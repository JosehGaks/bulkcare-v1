import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconHeadset,
} from "@tabler/icons-react";

import React from 'react'
import { Badge } from "../ui/badge";
export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Tailored Support Solutions",
      description: "Customizable customer care solutions to meet your business needs.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Seamless Integration",
      description: "Easily integrate BulkCare with your existing systems for smooth operation.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Cost-Effective Pricing",
      description: "Competitive pricing plans designed to scale with your business.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Reliable Uptime",
      description: "Guaranteed 100% uptime to ensure uninterrupted customer support.",
      icon: <IconCloud />,
    },
    {
      title: "Global Reach",
      description: "Serving customers across multiple locations, ensuring 24/7 coverage.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Expert Support",
      description: "Our dedicated team of experts is available around the clock to assist your customers.",
      icon: <IconHeadset />,
    },
    {
      title: "Satisfaction Guarantee",
      description: "We are committed to delivering the best service experience, or your money back.",
      icon: <IconHeart />,
    },
    {
      title: "And Much More",
      description: "Explore endless possibilities with BulkCare's comprehensive support services.",
      icon: <IconHelp />,
    },
  ];
  return (
    <section className="py-18 bg-transparent pb-0 pt-0 lg:py-20 lg:pb-0 lg:pt-0">
     <div className="container mx-auto flex text-center justify-center items-center gap-4 flex-col pt-20">
    <Badge>Features</Badge>
    <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
          Exceptional Support Solutions
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
          Delivering seamless customer experiences, 24/7.
          </p>
        </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 ">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <GridPattern />
        </div>
    </div>
    </div>     
    </section>


  );
}

export function GridPattern() {
  const columns = 41;
  const rows = 11;
  return (
    <div className="flex bg-gray-100 dark:bg-neutral-900 flex-shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px  scale-105">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col;
          return (
            <div
              key={`${col}-${row}`}
              className={`w-10 h-10 flex flex-shrink-0 rounded-[2px] ${
                index % 2 === 0
                  ? "bg-gray-50 dark:bg-neutral-950"
                  : "bg-gray-50 dark:bg-neutral-950 shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
              }`}
            />
          );
        })
      )}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
