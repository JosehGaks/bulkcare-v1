'use client'
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion'
import { ReactLenis } from 'lenis/react'
import { useRef } from 'react'
import Image from 'next/image'
const projects = [
  {
    title: "Advanced Technology",
      description:
        "Utilize the latest customer support technologies and innovative practices for a seamless and modern customer experience. Outsourcing partners often have access to cutting-edge tools and systems, providing your customers with a superior support experience.",
    src: 'rock.jpg',
    link: '/images/benefits/advanced_tech.jpg',
    color: '#5196fd',
  },
  {
    title: "Cost Savings",
    description:
      "Reduce your operational costs significantly by eliminating the need for in-house training, infrastructure, and staffing. Outsourcing customer support allows you to allocate resources more efficiently and invest in other critical areas of your business.",
    src: 'tree.jpg',
    link: '/images/benefits/savings.png',
    color: '#8f89ff',
  },
  {
    title: "Flexibility",
    description:
      "Easily scale your customer support team up or down based on your current business needs, ensuring flexibility and adaptability. This allows your business to respond promptly to market changes and customer demands without the hassle of hiring and training new staff.",
    src: 'water.jpg',
    link: '/images/benefits/flexible.png',
    color: '#13006c',
  },
  {
    title: "Global Reach",
    description:
      "Make your services accessible worldwide by offering support in multiple languages. Outsourcing enables you to cater to a global customer base, breaking down language barriers and expanding your market reach.",
    src: 'house.jpg',
    link: 'https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60',
    color: '#ed649e',
  },
  {
    title: "Expert Support",
    description:
      "Access a team of experienced customer support specialists ready to efficiently handle queries, allowing you to concentrate on your main business activities. These experts bring a wealth of knowledge and best practices, ensuring high-quality service.",
      src: 'cactus.jpg',
      link: '/images/benefits/support.jpg',
      color: '#fd521a',
  },
]
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import SectionTitle from '../Common/SectionTitle'

export default function BentoBenefits() {
  return (
    <section className='container mx-auto p-4'>
      <SectionTitle title="Features & Benefits" subtitle='Benefit from what we do.' paragraph=''/>
      <BentoGrid className=" ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </section>

  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Advanced Technology",
    description:
      "Utilize the latest customer support technologies and innovative practices for a seamless and modern customer experience. Outsourcing partners often have access to cutting-edge tools and systems, providing your customers with a superior support experience.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cost Savings",
    description:
      "Reduce your operational costs significantly by eliminating the need for in-house training, infrastructure, and staffing. Outsourcing customer support allows you to allocate resources more efficiently and invest in other critical areas of your business.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Flexibility",
    description:
      "Easily scale your customer support team up or down based on your current business needs, ensuring flexibility and adaptability. This allows your business to respond promptly to market changes and customer demands without the hassle of hiring and training new staff.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Global Reach",
    description:
      "Make your services accessible worldwide by offering support in multiple languages. Outsourcing enables you to cater to a global customer base, breaking down language barriers and expanding your market reach.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Expert Support",
    description:
      "Access a team of experienced customer support specialists ready to efficiently handle queries, allowing you to concentrate on your main business activities. These experts bring a wealth of knowledge and best practices, ensuring high-quality service.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];
