import { PageHero } from "@/components/Common/PageHero";
import React from "react";
import Stats, { Stat } from "@/components/Common/Stats";
import Services, { Service } from "@/components/Common/Services";
import {
  IconHeadset,
  IconBrandGoogle,
  IconClipboardData,
  IconLayout,
  IconMagnet,
  IconMovie,
  IconSocial,
  IconVector,
  IconVideo,
} from "@tabler/icons-react";
import { Feature } from "@/components/Common/Feature";
import CommonSectionServices from "@/components/Common/CommonSectionServices";


const page = () => {

  const services: Service[] = [
    {
      index: 1,
      icon: <IconLayout size={32} />, // For Design & Development
      title: "Design & Development",
      description:
        "Your website is the cornerstone of your brand. We know how to develop your site to increase conversion and engagement. We design, set up, and support most web-based software and hosting. Our team uses advanced technology to provide your customers with the best experience.",
    },
    {
      index: 2,
      icon: <IconVector size={32} />, // For Graphic Design
      title: "Graphic Design",
      description:
        "Graphic design helps your content look more accomplished and persuasive. Good designs are critical for your brand’s identity and recognizability. We create custom graphic designs for everything from social media creatives to logos and branding. Our team follows the latest design trends to make our customers more memorable online.",
    },
    {
      index: 3,
      icon: <IconMagnet size={32} />, // For Lead Generation
      title: "Lead Generation",
      description:
        "Lead generation is the most effective way to acquire customers and help B2B sales teams accelerate opportunities. Our approach aims to target new leads and convert them into paying customers. Our lead generation researchers manually identify and attract the right audience while our digital marketing specialists ensure personalization and engagement to secure qualified leads.",
    },
    {
      index: 4,
      icon: <IconVideo size={32} />, // For Paid Advertising
      title: "Paid Advertising",
      description:
        "PPC advertising helps you enhance your social reach, boost your SEO efforts, drive traffic to your online resources, and significantly boost your sales. We advertise to send your message to potential customers in the quickest way possible. Our effective strategies and campaigns work flawlessly in synergy with other marketing efforts to scale your business.",
    },
    {
      index: 5,
      icon: <IconBrandGoogle size={32} />, // For SEO & Content Marketing
      title: "SEO & Content Marketing",
      description:
        "SEO & content marketing help increase traffic to your online resources, build trust, attract new clients, and excite your current audience. We make your content marketing hassle-free through developing, writing, editing, and promoting your content. Our content and coding strategies ensure high search engine ranking and influence conversions.",
    },
    {
      index: 6,
      icon: <IconSocial size={32} />, // For Social Media Management
      title: "Social Media Management",
      description:
        "Social media is an ideal tool for building an open channel of communication with your customers. The right SMM can help you build strong social validation for your brand, obtain engagement and visibility, and strengthen your reputation. We identify gaps in social media strategies and create the right content that enhances brand perception. Our experts strengthen your brand voice, drive engagement, and execute social listening.",
    },
    {
      index: 7,
      icon: <IconMovie size={32} />, // For Video Production
      title: "Video Production",
      description:
        "Our professional video production increases conversions and contributes to increased sales. Our effective video marketing strategies provide high SEO value to your website. We provide a full range of video styles (explainer, animation, live action, etc.) and manage pre and post production editing. Our video services have been proven to increase conversions.",
    },
    {
      index: 8,
      icon: <IconHeadset size={32} />, // For Marketing Virtual Assistance
      title: "Marketing Virtual Assistance",
      description:
        "You don’t want to spread your core resources on tasks that can be handled by our professional marketing team. We can help you with any marketing virtual assistance you need. Anything from data entry and filtering to eCommerce product and stock management, our back-office marketing solutions options are endless.",
    },
    {
      index: 9,
      icon: <IconClipboardData size={32} />, // For Research & Strategy
      title: "Research & Strategy",
      description:
        "Our expert research team gathers and analyzes data about customers, competitors, distributors, and other forces in your marketplace and uses that data to develop the best strategy for your business. Our researchers and analysts help businesses lead their marketing efforts through subjective and measurable market research data collection, and our experts deliver strategies that power long-term growth for your brand.",
    },
  ];

  const stats: Stat[] = [
    {
      title: "26",
      subtitle: "web sites developed",
      isPositive: true, // This is the percentage change direction
      change: "+20.1%", // This is the actual change change
    },
    {
      title: ">12,000",
      subtitle: "expert design hours",
      isPositive: false, // This is the change change direction
      change: "2%", // This is the actual change change
    },
    {
      title: ">240,000",
      subtitle: "manually collected contacts",
      isPositive: true, // This is the change change direction
      change: "+80%", // This is the actual change change
    },
    {
      title: ">250",
      subtitle: "successful ad campaigns",
      isPositive: true, // This is the change change direction
      change: "+20%", // This is the actual change change
    },
  ];

  return (
    <>
      <PageHero
        title="BUILD BETTER MARKETING"
        subtitle="Bulkcare Media"
        content="Drive better marketing results by leveraging our in-house Bulkcare experts who execute every engagement with precision and high performance. We’ve hand-picked our internal team for marketing skills and expertise and they’re the best in the business. You can boost your marketing success and consistently drive desired outcomes by partnering with our team."
        action="Increase Marketing Results"
        imgSrc="/images/services/marketing.png"
      />
      <Stats stats={stats} />
      <Feature
      title="Success Driven Marketing"
        content="Bulkcare Media is a full-stack digital marketing agency designed to help any business that wishes to increase the impact of their marketing budget, grow their customer base, stay on top of their market, and enhance ROI. We are a perfect fit for start-ups and organizations that need a wide range of high-quality marketing expertise. You no longer have to work with different vendors to fill your variety of marketing needs, we can support all marketing functions with our range of knowledge and tools. Having experienced specialists and the right technology in place, we are able to fill all resource gaps."
        imgSrc="/images/services/digital-customer-experience.png"
      />
      <Services services={services} title="CREATE A STELLAR MARKETING PLAN" subtitle="Solutions to Support Your Success"/>
      <CommonSectionServices/>
      {/* <About /> */}
      
      {/* <Pricing /> */}
      
    </>
  );
};

export default page;
