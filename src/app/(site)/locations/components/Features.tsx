import { cn } from "@/lib/utils";
import {
  IconLayoutGrid,
  IconLock,
  IconWifi,
} from "@tabler/icons-react";
import { Badge } from "lucide-react";

import React from 'react'
import { FaChair } from "react-icons/fa";
export default function FeaturesSection() {
  const features = [
    {
      title: "Spacious Office",
      description:
        "Our spacious and modern workspace is designed to provide our staff with everything they need, from dedicated desks to pre-set computers and ergonomic chairs, to deliver outstanding results.",
      icon: <IconLayoutGrid />, // Replace with the appropriate icon from Tabler Icons
    },
    {
      title: "Stable Internet Connectivity",
      description:
        "At our office, we have a top-of-the-line internet infrastructure and secure LAN connection to ensure that our staff can work consistently and efficiently without any disruptions.",
      icon: <IconWifi />, // Replace with the appropriate icon from Tabler Icons
    },
    {
      title: "Secured VPN Connection",
      description:
        "A secured VPN connection in our office enables our staff to access company resources, such as servers and databases, with ease and security, which ensures that our clients’ information is safeguarded.",
      icon: <IconLock />, // Replace with the appropriate icon from Tabler Icons
    },
    {
      title: "Office Amenities",
      description:
        "We have spacious offices with everything you need to be comfortable and productive – fast Wi-Fi, ergonomic chairs, and modern equipment.",
      icon: <FaChair />, // Replace with the appropriate icon from Tabler Icons
    },
  ];

  return (
    <div className="container mx-auto flex text-center justify-center items-center gap-4 flex-col pt-20">
    <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
          We made sure to provide your employees with everything needed for efficient work
          </h2>
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
