import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import FeaturesBenefits from "@/components/FeaturesBenefits";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import WorkCycle from "@/components/WorkCycle";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bulk Care Customer Care - Exceptional Customer Support Outsourcing Services",
  description: "Bulk Care Customer Care offers reliable, professional, and scalable customer support outsourcing services tailored to enhance customer satisfaction and loyalty. Contact us today to elevate your customer support experience.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <FeaturesBenefits/>
      {/* <About /> */}
      <CallToAction />
      <WorkCycle/>
      {/* <Pricing /> */}
      <Clients />
      <Testimonials />
      <Faq />
      {/* <Team /> */}
      <HomeBlogSection posts={posts} />
      <Contact />
      
    </main>
  );
}
