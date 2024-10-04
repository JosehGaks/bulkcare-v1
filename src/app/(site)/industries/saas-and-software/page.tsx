import IndustrySolutions, { tab } from '@/components/Common/IndustrySolutions';
import { PageHero } from '@/components/Common/PageHero'
import React from 'react'
import WhyUs from '../components/WhyUs';
import CommonSectionServices from '@/components/Common/CommonSectionServices';
import IndustryChallengeHero from '@/components/Common/IndustryChallengeHero';

const page = () => {
  const tabs: tab[] = [
    {
      title: "Maintaining a Competitive Advantage",
      description:
        "As one of the fastest-growing industries, SaaS and Software businesses will continue to enter the market and you need to build brand loyalty through highly satisfied customers.",
      content:
        "Bulkcare creates personalized customer journeys by providing customized SaaS support teams across all channels. Our SaaS customer solutions provide call center, email, chat, digital, and technical outsourcing to create higher engagement and experience.Our support teams work 24/7 and are available where your customers are. to boost satisfaction and brand loyalty.In addition to delivering high-quality customer experiences, we provide the capability to scale no matter the size or volume of the project. Through best-in-class Integrations and people empowerment, Bulkcare offers the platform and process to maintain a competitive advantage.",
      action: "Get Started",
    },
    {
      title: "Effective Management of Customer Queries",
      description:
        `Customers continue to reach out on various platforms to request assistance. There is a growing need to expedite accurate responses, increase engagement with users, and ensure satisfaction with the response.`,
      content:`
      Bulkcare manages all customer support inquiries quickly and accurately. Our custom teams build relationships and improve upsell, while also supporting the desired improvement in NPS, CSAT, and other satisfaction metrics.
      Today’s interconnected and platform-driven world is transforming the definition of services and experience. The one constant that remains is there will always be humans in the loop. Bulkcare is transforming and integrating this journey. Regardless of task type or interaction, we empower the absolute best in “people as a service.” We are that critical human connection within your loop of technology, communication and services.
      `,
      action: "Get Started",
    },
    {
      title: "Profitable Customer Acquisition",
      description: `
      In a fast-growing industry, it is good to get in front of the right customers before your competition and make sure your message is resonating with their needs. SaaS customer acquisition is usually automated, and the cost acquisition is important. Organizations are continuously looking for ways to lower the spending it takes to land a new customer.
      `,
      content:`
      Bulkcare back-office teams properly segment your customers and reach them through multiple channels. Marketing content and channel management are used to raise awareness, generate leads, reach customers, drive personalized messaging, and boost credibility.

      Many SaaS companies use AI and Machine Learning models to improve overall operational performance. Bulkcare ensures your models are using accurate data by providing human insights into your AI and Machine Learning lifecycle. We help you with our humans in the loop to improve your AI solutions.
      `,
      action: "Get Started",
    },
    {
      title: "Customer Activation and Retention",
      description:`
      Customers often acquire the software and use it for a short period of time and then abandon it or never activate their accounts. If organizations can’t get customers engaged and active on their platforms, they struggle to maintain loyal, long-term clients.
      `,
      content:`
      Bulkcare SaaS customer support and software outsourcing services provide front and back-office team members focused on user engagement. We understand the market and build customized teams who manage relationships and engage with customers to increase activity on platforms.
      Our dedicated teams are focused on ensuring users understand the SaaS solutions being provided and how they can benefit from the process.
      `,
      action: "Get Started",
    },
    {
      title: "Growth Expansion",
      description: `
      Growth takes hard work, creativity, and customer-centric focus. Many organizations talk about being customer-centric, but not all are living it. Every SaaS organization is different, and every product has unique market challenges but solving those challenges is a must to thrive in this industry and expand growth opportunities.
      `,
      content:`
      Bulkcare partners with SaaS organizations to fill in the gaps that are inhibiting growth. From our business process outsourcing options across Digital Customer Service, Content Control and Verification, Back Office Support, AI Operations, Humans in the Loop, and Microtasking Platform, we act as an extension of your current team to maximize growth capabilities.
      `,
      action: "Get Started",
    },
  ];


  

  return (
    <>
      <PageHero
        title="Industry"
        subtitle="SaaS & Software"
        content=" 
You want to exceed existing customer needs, expand your business opportunities, and create a strong brand in the market. We go beyond Saas and Software customer support, tools, and digital technology, and bring the culture that helps drive your growth strategy."
        action="Get More Customers"
        imgSrc="/images/industries/saas.gif"
      />
      <IndustryChallengeHero title={'INDUSTRY CHALLENGES'} subtitle={'What’s top of mind for leaders in the Saas and Software space?'} paragraph={`
        Capitalizing on all potential areas of market expansion and growth in this fast-moving industry.

        Key drivers impacting SaaS and Software expansion and growth include:
        high demand for expert marketing, sales, and customer service teams
        capitalizing on timely opportunities to secure a loyal customer base
        keeping pace with customer demand
        creating a positive end-user experience
        Industry leaders know how important it is to focus on business owners and management team needs during this time of high growth with many new competitors entering the space. Working with Bulkcare helps you stay ahead of the competition in this quickly changing environment with the latest  technology and industry expertise.
        
        We provide the right humans in the loop to transform and support your growth and expansion strategies. Regardless of task type or interaction, we empower the absolute best in “people as a service.” We are that critical human connection within your loop of technology, communication, and services.
        
        `} imgSrc={'/images/industries/saas-software/hero.png'} />
      <IndustrySolutions tabs={tabs} />
      <WhyUs/>
      <CommonSectionServices />
    </>
  )
}

export default page