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
        "New customers come with various setup tasks. We ensure with Helpware's back-office team that your customers have an effortless account set up.",
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
      title: "20%+",
      subtitle: "improvement in inaccuracies / exceptions by combining an AI deployment with human-based managed services",
      isPositive: true, // This is the percentage change direction
      change: "+20.1%", // This is the actual change change
    },
    {
      title: "76%",
      subtitle: "aof consumers still prefer a human interaction to feel best supported",
      isPositive: false, // This is the change change direction
      change: "3000%", // This is the actual change change
    },
    {
      title: "37%",
      subtitle: "of organizations utilized a human in the loop to focus on empathy for their consumers",
      isPositive: true, // This is the change change direction
      change: "+8%", // This is the actual change change
    },
    {
      title: "90%",
      subtitle: "of companies report they compete on the basis of customer experience",
      isPositive: true, // This is the change change direction
      change: "+2%", // This is the actual change change
    },
  ];

  return (
    <>
      <PageHero
        title="SERVICE"
        subtitle="Human in the Loop (HITL)"
        content=" Our interconnected and platform-driven world is transforming the traditional definition of both services and experience. However, one constant will remain. There will always be humans in the loop. Helpware is transforming and integrating this journey. Regardless of task type or interaction, we are that critical human connection within your loop of technology, communication, and services.
        "
        action="Synergize People and Data"
      />
      <Stats stats={stats} />
      <Feature
        title="Bulkcare is your Human In The Loop"
        content="Bulkcare is uniquely positioned to help support and execute any type of task requiring a human touch. Our robust integrations and application of API for human support services allow you to create broad-spectrum support and intervention based on your exact application or experience requirements.

Our capability spans customer care, app support, expansive content, and data types. Our people create both learning and experience models driving measurable outcomes across every element of your service offerings."
        imgSrc="/images/services/digital-customer-experience.png"
      />
      <Services services={services} />
      <CommonSectionServices />
    </>
  );
};

export default page;