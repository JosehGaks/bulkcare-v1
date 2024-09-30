import About from "@/components/About";
import Banner from "@/components/banner";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import BenefitsStack from "@/components/FeaturesBenefits/BenefitsStack";
import BentoBenefits from "@/components/FeaturesBenefits/SingleFeatureBenefit";
import Benefits from "@/components/FeaturesBenefits/SingleFeatureBenefit";
import BentoGridBenefits from "@/components/FeaturesBenefits/SingleFeatureBenefit";
import { Hero } from "@/components/Hero";
import Pricing from "@/components/Pricing";
import PulseBeam from "@/components/PulseBeam";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
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
    <main className="dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <ScrollUp />
      {/* <Hero /> */}
      <Hero/>
      <WorkCycle/>
      <Features />
      <Services />
      <Steps/>
      <BenefitsStack/>
      {/* <About /> */}
      <PulseBeam />
      
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
