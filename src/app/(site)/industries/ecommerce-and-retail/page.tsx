import IndustrySolutions, { tab } from '@/components/Common/IndustrySolutions';
import { PageHero } from '@/components/Common/PageHero'
import React from 'react'
import WhyUs from '../components/WhyUs';
import CommonSectionServices from '@/components/Common/CommonSectionServices';

const page = () => {
  const tabs: tab[] = [
    {
      title: "Optimized Multi-Channel Digital Experience",
      description:
        "To continually grow a customer base, eCommerce businesses need to have memorable and user-friendly customer service across all devices where they may start searches and complete buying purchases (desktop/laptops, varying search engines, various social platforms, various mobile devices, and tablets).",
      content:
        "We provide digital customer service outsourcing to create the needed omnichannel approach to success - no matter where customers choose to search and conduct their purchases. Our multi-platform customer services solutions can complement any existing customer support providing Call Center, Email, Chat, Digital IT, and Technical Outsourcing that help build a strategy to create higher engagement and experience.",
      action: "Get Started",
    },
    {
      title: "Consumer Trust in Digital Content",
      description:
        "To excel in the e-commerce industry, you need consumers to trust your brand. If a form feels dated / insecure, or if they see your information out of appropriate context, they may take their buying journey elsewhere.",
      content:
        "We provide e-commerce back-office outsourcing to cover all areas needed 24/7. We also deliver AI operations that provide the human intelligence to transform your data through enhanced integrations and tasking. Our technology safeguards ensure customers feel safe and have a good experience with your brand. We complement any existing content control and verification support as an extension of your team providing Image and Video Annotation, Content Moderation, Data Digitization, Categorization, Fraud Prevention, Account Security, and Product Data Quality Assurance.",
      action: "Get Started",
    },
    {
      title: "Personalized Buyer Experiences",
      description:
        "Your customers want to be served the products that fit their individual needs through the platforms they choose. To be successful in eCommerce you need to be able to access, process, analyze, and utilize a large volume of data that allows you to give online shoppers the personalized experience they want.",
      content:
        "We provide AI Operations outsourcing because we understand it is one of the top investment priorities in eCommerce due to its proven success in increasing the number of customers through personalization. Our AI business process outsourcing provides you the humans in the loop to ensure accurate data from Image Processing, Video Annotation, Data Tagging, Data Digitization, and Natural Language Processing (NLP).",
      action: "Get Started",
    },
    {
      title: "Conversion Rates & Purchase Abandonment",
      description:
        "There are growing challenges across e-commerce to increase conversions and lower purchasing abandonment, and you need to understand how to close the purchase gaps.",
      content:
        "We have detailed back-office marketing experts who uncover possible causes, create solutions across digital ads, coupons, email, and test them for success. We complement any existing strategies as an extension of your team providing Strategy, SEO, Social Media, Paid Search Management, Web Development, Design and Video, Email and Lead Gen, and all Back Office Support. We provide culturally aligned and globally supported task execution covering all areas needed to enhance conversions.",
      action: "Get Started",
    },
    {
      title: "Acceleration to Market & Outpacing Competition",
      description:
        "Many retailers are already online offering similar products & services as you. You must find a way to quickly differentiate and out-pace your competition to accelerate growth.",
      content:
        "We help start-ups quickly and effectively ramp staff and technologies they need without large capital investments. We cover the range of business process outsourcing you need to successfully go to market and ramp your product. We complement any existing front and back-office support as an extension of your team providing Digital Customer Service, Content Control and Verification, AI Operations, Back Office Support, MicroTasking, and Human in the Loop solutions to expedite start-up growth.",
      action: "Get Started",
    },
  ];


  

  return (
    <>
      <PageHero
        title="Industry"
        subtitle="eCommerce & Retail"
        content=" 
You want to meet your customers where they are with a personalized journey that creates brand ambassadors. We go beyond eCommerce customer service, tools, and digital technology and bring the culture that increases your buyer community."
        action="Get More Customers"
        imgSrc='/images/industries/ecomerce.png'
      />
      <IndustrySolutions tabs={tabs} />
      <WhyUs/>
      <CommonSectionServices />
    </>
  )
}

export default page