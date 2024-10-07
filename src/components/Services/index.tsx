"use client";
import Image from "next/image";
import React from "react";
import { Card, Carousel } from "../ui/apple-cards-carousel";
import { Badge } from "../ui/badge";
import SectionTitle from "../Common/SectionTitle";

export default function Services() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="py-18 bg-transparent pb-0 pt-0 lg:py-20 lg:pb-0 lg:pt-0">
      <div className="h-full w-full pt-20">
        <SectionTitle
          title={"Bulkcare Expertise"}
          subtitle="Our Services"
          paragraph={"What we Offer"}
        />
        <Carousel items={cards} />
      </div>
    </section>
  );
}

const data = [
  {
    category: "Customer Support Outsourcing",
    title: "24/7 Multichannel Customer Support",
    src: "/images/services/customer_support.jpg",
    content: (
      <p>
        Our dedicated teams are available 24/7 to manage your customer
        interactions across phone, email, chat, and social media.
      </p>
    ),
  },
  {
    category: "Technical Support",
    title: "Expert Technical Assistance",
    src: "/images/services/technical_support.jpg",
    content: (
      <p>
        We provide technical troubleshooting and advanced support for your
        products and services, ensuring customer satisfaction.
      </p>
    ),
  },
  {
    category: "Lead Generation",
    title: "Boost Sales with Targeted Lead Generation",
    src: "/images/services/lead_generation.jpg",
    content: (
      <p>
        Increase your sales pipeline with our customized lead generation
        services, tailored to attract and qualify potential customers.
      </p>
    ),
  },
  {
    category: "Back Office Support",
    title: "Streamline Operations with Back Office Services",
    src: "/images/services/backoffice.jpg",
    content: (
      <p>
        From data entry to document management, we handle the essential
        behind-the-scenes tasks to keep your business running smoothly.
      </p>
    ),
  },
  {
    category: "Human Resource Outsourcing",
    title: "HR Services for Scaling Companies",
    src: "/images/services/hr.jpg",
    content: (
      <p>
        Our HR outsourcing services provide recruitment, employee onboarding,
        and workforce management solutions for growing businesses.
      </p>
    ),
  },
  {
    category: "Omnichannel Strategy",
    title: "Unified Omnichannel Customer Experience",
    src: "/images/services/omnichannel.jpg",
    content: (
      <p>
        We design and execute seamless omnichannel strategies, integrating
        digital and traditional customer service channels to enhance brand
        interaction.
      </p>
    ),
  },
];
