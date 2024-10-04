import { PageHero } from "@/components/Common/PageHero";
import React from "react";
import Stats, { Stat } from "@/components/Common/Stats";
import Services, { Service } from "@/components/Common/Services";
import {
  IconAlertTriangle,
  IconShieldCheck,
  IconShieldLock,
  IconUserCheck,
} from "@tabler/icons-react";
import { Feature } from "@/components/Common/Feature";
import CommonSectionServices from "@/components/Common/CommonSectionServices";


const page = () => {

  const services: Service[] = [
    {
      index: 1,
      icon: <IconShieldCheck size={32} />, // For Content Moderation
      title: "Content Moderation",
      description:
        "Our content moderation teams are focused on delivering trust and security. Everyone has an online voice, and sometimes visual, audio, and content can be malicious or dangerous. We help you protect your customers' interests by screening and approving user-generated content based on predefined guidelines.",
    },
    {
      index: 2,
      icon: <IconShieldLock size={32} />, // For Fraud Prevention
      title: "Fraud Prevention",
      description:
        "Our fraud prevention service combines human expertise with advanced automation to protect your brand against fraudulent and offensive content, images, and videos. Our content moderation teams screen every piece of user-generated content for the highest level of quality.",
    },
    {
      index: 3,
      icon: <IconAlertTriangle size={32} />, // For Abuse Detection
      title: "Abuse Detection",
      description:
        "Our abuse detection services provide reviews through automated abuse detection rules when content is created. We flag content for potential abuse and work each case in the abuse workflow. Our teams build data sets and develop models using machine learning to overcome data challenges.",
    },
    {
      index: 4,
      icon: <IconUserCheck size={32} />, // For Profile Impersonation
      title: "Profile Impersonation",
      description:
        "Our profile impersonation services detect and remediate fake accounts, emails, and domains. We use human and digital-powered detection capabilities with advanced analytics to dismantle fakes before they reach customers.",
    },
  ];

  const stats: Stat[] = [
    {
      title: "6B",
      subtitle: "users online creating content daily",
      isPositive: true, // This is the percentage change direction
      change: "+20.1%", // This is the actual change change
    },
    {
      title: "2000",
      subtitle: "digital content YoY growth rate",
      isPositive: false, // This is the change change direction
      change: "3000%", // This is the actual change change
    },
    {
      title: "10M",
      subtitle: "digital interactions secured",
      isPositive: true, // This is the change change direction
      change: "+8%", // This is the actual change change
    },
    {
      title: "10-20%",
      subtitle: "of call center interactions are a result of back-office errors",
      isPositive: true, // This is the change change direction
      change: "+2%", // This is the actual change change
    },
  ];

  return (
    <>
      <PageHero
        title="SERVICE"
        subtitle="Content Control & Verification"
        content="Online content is growing exponentially, and Bulkcare provides advanced technology and expert moderators to protect users and drive optimal content."
        action="Let’s Get Started"
      />
      <Stats stats={stats} />
      <Feature
        title="Building Customer Trust"
        content="You need an optimized but safe online environment for your community and brand. We prioritize improved workflows and knowledgeable staff.
We offer business process outsourcing and technology safeguards, including Content Moderation, Fraud Prevention, Abuse Detection, and Profile Impersonation. Expand Content Control and Verification by joining your team with ours. The results are enhanced safeguards and improved customer trust."
        imgSrc="/images/services/digital-customer-experience.png"
      />
      <CommonSectionServices />
    </>
  );
};

export default page;