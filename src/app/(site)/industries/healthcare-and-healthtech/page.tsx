import IndustryChallengeHero from '@/components/Common/IndustryChallengeHero';
import IndustrySolutions, { tab } from '@/components/Common/IndustrySolutions';
import { PageHero } from '@/components/Common/PageHero';
import React from 'react'
import WhyUs from '../components/WhyUs';
import CommonSectionServices from '@/components/Common/CommonSectionServices';

const page = () => {
  const tabs: tab[] = [
    {
      title: "Billing and Invoicing Accuracy and Payment",
      description:
        "Accurate and efficient billing practices are the core to the success of your business. You need to be sure payments are expedited for the correct amount.",
      content:`Bulkcare uses specialized back-office support teams and technology to eliminate billing, invoicing, and accounting challenges. Our teams are skilled and trained in revenue cycle management, maintaining records, and obtaining payments in a timely and efficient manner.
      We build customized front and back-office teams that are 100% dedicated to your healthcare business. From recruitment to training to ongoing success, everything is customized for you. We have your back so you can stay focused on scaling and expanding your business.`,
      action: "Get Started",
    },
    {
      title: `Expanding Telehealth`,
      description:
        `Telehealth has become a normal standard in healthcare delivery and the success of the platforms depends on member engagement, utilization, and satisfaction with the process. Today’s interconnected and platform-driven world is transforming the traditional definition of care delivery and member experience.`,
      content:`
      Bulkcare customer support teams help you leverage changing telehealth trends in the industry by providing 24/7 multilingual customer support across multiple channels to communicate with patients. Our dedicated teams help you drive high patient satisfaction and engagement in telehealth workflow processes.

Today’s interconnected and platform-driven world is transforming the definition of services and experience. The one constant that remains is there will always be humans in the loop. Bulkcare is transforming and integrating this journey. Regardless of task type or interaction, we empower the absolute best in “people as a service.” We are that critical human connection within your loop of technology, communication, and services.`,
      action: "Get Started",
    },
    {
      title: "Managing Expenses",
      description: `
      Health plans and providers want to ensure patients have the needed care, are provided with the information they need to enhance their health and drive better outcomes. Determining how to personalize care while decreasing expenses is an industry challenge.
      `,
      content:`
      Bulkcare allows you to use your resources more efficiently and effectively by providing affordable back-office and technical support solutions for standardized areas of your business. Our teams manage several tasks including coding, billing services, transcription, help desk, portal services, and appointments.

Bulkcare also supports clinical services with efficient resources in digital consultation, payer and provider benefits management, government-mandated benefits, and pharmaceutical support.
      `,
      action: "Get Started",
    },
    {
      title: "Accelerating Patient Experience and Engagement",
      description:`
      An engaged patient who is satisfied with their healthcare experience drives growth, a healthier population, and reduced risk.
      `,
      content:`
      Bulkcare has extensive customer service experience and expertise and understands how to personalize the customer experience. Our teams are focused on high-quality service, increased CSAT, and improved KPIs. We focus on a personalized approach for every patient that drives loyalty and satisfaction.
      `,
      action: "Get Started",
    },
    {
      title: "Data Management",
      description: `
      How you manage data is key to your patient care strategy and your growth strategy. You have large-scale data sets that need to be appropriately input, stored, integrated, and analyzed to support your strategic decisions.
      `,
      content:`
      We offer every type of data entry support needed in the industry. We have back-office support staff that can enter patient account data, review missing documents, provide data quality reviews, and monitor and analyzes your data so it works better for you. Our experts ensure data security, privacy, and storage for all patients.
      `,
      action: "Get Started",
    },
  ];
  return (
    <>
      <PageHero
        title="Industry"
        subtitle="Healthcare & HealthTech"
        content={`You want to drive growth at scale, advance patient experience and engagement and accelerate digital solutions.  We go beyond business process outsourcing, tools, and digital technology and bring the culture that helps drive your growth strategy.`}
        action="Get More Customers"
        imgSrc='/images/industries/healthcare.png'
      />
      <IndustryChallengeHero title={'INDUSTRY CHALLENGES'} subtitle={'What’s top of mind for leaders in the Healthcare industry?'} paragraph={`
        Advancing patient experiences, developing growth at scale, and accelerating the right digital technology solution to support these efforts.

        Key drivers impacting growth, digital acceleration, and patient experience include:
        demand from patients to meet them where they are with care
        accelerating digital advancements that can support strategies
        patient satisfaction and engagement drives competitive advantage
        data is the key driver in understanding cost and care accuracy
        Working with Bulkcare provides you personalized business process outsourcing solutions to support the rapidly changing world of health care delivery and technology. 
        
        We provide the right humans in the loop to transform and support your growth and expansion strategies. Regardless of task type or interaction - By empowering the absolute best in “people as a service” we are that critical human connection within your loop of technology, communication, and services.
        `} imgSrc={'/images/industries/saas-software/hero.png'} />
      <IndustrySolutions tabs={tabs} />
      <WhyUs/>
      <CommonSectionServices />
    </>
  )
}

export default page