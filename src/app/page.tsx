import Banner from "@/components/banner";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import FAQ from "@/components/Faq";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import BenefitsStack from "@/components/FeaturesBenefits/BenefitsStack";
import Hero from "@/components/Hero";
import PulseBeam from "@/components/PulseBeam";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
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
    <main className="">
      <ScrollUp />
      {/* <Hero /> */}
      <Banner/>
      <WorkCycle/>
      <Services />

      <CallToAction />
      <Features />
      
      <Steps/>
      <BenefitsStack/>
      {/* <About /> */}
      <PulseBeam />
      
      {/* <Pricing /> */}
      <Clients />
      <Testimonials />
      <FAQ />
      {/* <Team /> */}
      <HomeBlogSection posts={posts} />
      <Contact />
      
    </main>
  );
}
