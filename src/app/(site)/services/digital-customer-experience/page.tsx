import { PageHero } from "@/components/Common/PageHero";
import React from "react";
import Stats, { Stat } from "@/components/Common/Stats";
import Services, { Service } from "@/components/Common/Services";
import {
  IconPhoneCall,
  IconHeadset,
  IconDeviceDesktopAnalytics,
  IconGlobe,
  IconMessageCircle,
  IconMail,
  IconPhone,
  IconTools,
} from "@tabler/icons-react";
import { Feature } from "@/components/Common/Feature";
import { getAllPosts } from "@/utils/markdown";
import CommonSectionServices from "@/components/Common/CommonSectionServices";


const page = () => {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  const services: Service[] = [
    {
      index: 1,
      icon: <IconPhoneCall size={32} />, // Replace with the actual Tabler icon
      title: "Inbound & Outbound Call Center",
      description:
        "Our inbound and outbound call center teams are custom built to help your existing team evolve. We invest in people and culture to better serve you and the custom teams we build for you. Our technology-enabled, empowered, and engaged teams deliver enhanced global customer engagement and experience.",
    },
    {
      index: 2,
      icon: <IconDeviceDesktopAnalytics size={32} />,
      title: "Outsourced IT Support",
      description:
        "Our IT support teams are focused on serving modern companies worldwide. Our custom teams allow you to reduce your operating expenses while accelerating growth and scale. We prioritize data protection and solving even your most complex technology challenges.",
    },
    {
      index: 3,
      icon: <IconHeadset size={32} />,
      title: "Customer Success",
      description:
        "Dedicated customer success teams to maintain healthy relationships, fight churn, improve NPS, and upsell.",
    },
    {
      index: 4,
      icon: <IconGlobe size={32} />,
      title: "Multilingual Support",
      description:
        "Dedicated teams provide support in over 25 different languages for our customers around the globe.",
    },
    {
      index: 5,
      icon: <IconMessageCircle size={32} />,
      title: "Chat Support",
      description:
        "Our chat support teams allow your customers to engage with you any time, from any device to resolve any issues. Our custom teams drive higher customer satisfaction, deliver significant cost savings, provide business continuity, and assist live agents to improve the customer experience.",
    },
    {
      index: 6,
      icon: <IconMail size={32} />,
      title: "Email Support",
      description:
        "Our email support teams establish good communication with customers focused on building trust. Our custom teams are trained in effective written communication to enable an enhanced customer experience.",
    },
    {
      index: 7,
      icon: <IconPhone size={32} />,
      title: "Telephone Answering Services",
      description:
        "Our answering service teams provide support by managing tasks such as receiving messages, reviewing and managing requests, handling orders, scheduling appointments, and supporting existing teams. We customize a team of trained staff on any front office services you need.",
    },
    {
      index: 8,
      icon: <IconTools size={32} />,
      title: "Technical Support",
      description:
        "Our technical support teams enhance customer experience with a focus on first pass resolution to any technical problem. Our custom teams support businesses and consumers according to client service level agreements and security requirements.",
    },
  ];

  const stats: Stat[] = [
    {
      title: "30",
      subtitle: "CX leader awards",
      isPositive: true, // This is the percentage change direction
      change: "+20.1%", // This is the actual change change
    },
    {
      title: "90",
      subtitle: "CSAT / promoter",
      isPositive: false, // This is the change change direction
      change: "-2%", // This is the actual change change
    },
    {
      title: "4.9",
      subtitle: "Glassdoor / happiness",
      isPositive: true, // This is the change change direction
      change: "+8%", // This is the actual change change
    },
    {
      title: "60",
      subtitle: "Leading CX Integrations / API",
      isPositive: true, // This is the change change direction
      change: "+2%", // This is the actual change change
    },
  ];

  return (
    <>
      <PageHero
        title="SERVICE"
        subtitle="Digital Customer Experience"
        content="Customers expectations are changing — we level up the experience."
        action="Expand your customer support"
        imgSrc="/images/services/customer_service.png"
      />
      <Stats stats={stats} />
      <Feature
        title="Connect with Customers Where They Are"
        content="We offer fully integrated business process outsourcing that drives brand loyalty, including call center, answering service, IT, chat, technical, and email support. Create Experience Beyond Expectation
        We tailor a team of the right people with the right skills across all customer channels to increase brand loyalty and competitive advantage."
        imgSrc="/images/services/digital-customer-experience.png"
      />
      <Services services={services} title={"Bulkcare Services"} subtitle={"Transformative Digital Customer Experience"} />
      <CommonSectionServices/>
      {/* <About /> */}
      
      {/* <Pricing /> */}
      
    </>
  );
};

export default page;
