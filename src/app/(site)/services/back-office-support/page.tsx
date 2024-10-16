import { PageHero } from "@/components/Common/PageHero";
import React from "react";
import Stats, { Stat } from "@/components/Common/Stats";
import Services, { Service } from "@/components/Common/Services";
import {
  IconAlertTriangle,
  IconChartLine,
  IconClipboardText,
  IconFileInvoice,
  IconSearch,
  IconSettings,
  IconShieldCheck,
  IconShieldLock,
  IconShoppingCart,
  IconUserCheck,
} from "@tabler/icons-react";
import { Feature } from "@/components/Common/Feature";
import CommonSectionServices from "@/components/Common/CommonSectionServices";


const page = () => {

  const services: Service[] = [
    {
      index: 1,
      icon: <IconUserCheck size={32} />, // For Virtual Assistant
      title: "Virtual Assistant",
      description:
        "Our virtual assistants clear your to-do list. You focus on the big stuff, and we’ll handle everything else.",
    },
    {
      index: 2,
      icon: <IconChartLine size={32} />, // For Marketing Support
      title: "Marketing Support",
      description:
        "Customers are changing. Our marketing teams drive awareness and move customers to action using transformative marketing strategies, tools, and analytics to complement your team.",
    },
    {
      index: 3,
      icon: <IconFileInvoice size={32} />, // For Accounting Support
      title: "Accounting Support",
      description:
        "Our outsourced accounting teams have expertise across a variety of industries and software applications. We set high standards for achieving accurate and timely financial information, so you can make better business decisions.",
    },
    {
      index: 4,
      icon: <IconShoppingCart size={32} />, // For Order Processing
      title: "Order Processing",
      description:
        "You worked hard to gain new customers. We help you keep your order processing streamlined managing all order aspects including returns.",
    },
    {
      index: 5,
      icon: <IconSettings size={32} />, // For Account Set-Up
      title: "Account Set-Up",
      description:
        "New customers come with various setup tasks. We ensure with Bulkcare's back-office team that your customers have an effortless account set up.",
    },
    {
      index: 6,
      icon: <IconSearch size={32} />, // For Research
      title: "Research",
      description:
        "Our team handles every aspect of web research for you. We include a well-designed QA program to deliver the desired results to your team.",
    },
    {
      index: 7,
      icon: <IconClipboardText size={32} />, // For Data Entry
      title: "Data Entry",
      description:
        "We provide typists, transcribers, coders, and clerks to handle all of your data entry needs.",
    },
  ];

  const stats: Stat[] = [
    {
      title: "85+",
      subtitle: "current back-office implementations",
      isPositive: true, // This is the percentage change direction
      change: "+20.1%", // This is the actual change change
    },
    {
      title: "25%+",
      subtitle: "average improvement on SLA / KPIs",
      isPositive: false, // This is the change change direction
      change: "3000%", // This is the actual change change
    },
    {
      title: "50+",
      subtitle: "back-office platform integrations",
      isPositive: true, // This is the change change direction
      change: "+8%", // This is the actual change change
    },
    {
      title: "15%",
      subtitle: "of call center interactions are a result of back-office errors",
      isPositive: true, // This is the change change direction
      change: "+2%", // This is the actual change change
    },
  ];

  return (
    <>
      <PageHero
        title="SERVICE"
        subtitle="Back-Office
Support Services"
        content="
We focus on transforming experience at the personalized human level by combining the right technology through integration and bringing your business workflow to life with caring, passionate people focused on the why in each interaction."
        action="Build Your Team"
        imgSrc="/images/services/back-office.png"
      />
      <Stats stats={stats} />
      <Feature
        title="Efficient Growth at Scale"
        content="We build customized teams for modern businesses. From recruitment to training to ongoing success, everything is customized to you and your business. We have your back, so you can stay focused on scaling and expanding your business.

We custom recruit agents that are 100% dedicated to your business and become extensions of your team."
        imgSrc="/images/services/digital-customer-experience.png"
      />
      <Services services={services} title="Bulkcare Services" subtitle="Transformative Back-Office Support"/>
      <CommonSectionServices />
    </>
  );
};

export default page;