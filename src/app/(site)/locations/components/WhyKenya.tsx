import React, { useRef } from 'react'
import { TimelineContent } from '@/components/ui/framer-timeline'
import SectionTitle from '@/components/Common/SectionTitle'

function WhyKenya() {
  const aboutRef = useRef(null)
  const heroRef = useRef(null)

  const kenyaBPO = {
    topTalent: {
      title: "Top Talent",
      description: `
        Kenya boasts a highly educated and qualified workforce that rivals international standards. Thanks to its robust education system and focus on skill development, Kenyan professionals are motivated and hardworking. With diverse skill sets across various industries, they provide exceptional service and are recognized for their expertise in customer service, IT, and more.
      `,
    },
    governmentSupport: {
      title: "Government Support",
      description: `
        The Kenyan government has been instrumental in fostering the growth of the BPO industry. Through initiatives like the Kenya ICT Authority and investments in telecommunication infrastructure, the government is creating an environment conducive for BPO companies to thrive. This support is key to the industry's success and continues to attract global investors.
      `,
    },
    strategicLocation: {
      title: "Strategic Location",
      description: `
        Kenya's location at the heart of East Africa provides easy access to major markets like Uganda, Tanzania, and Rwanda. With its prime GMT+3 time zone, it offers a competitive advantage in providing fast turnaround times for clients around the globe. Nairobi's status as a regional business hub further solidifies Kenya's position as an attractive destination for BPO services.
      `,
    },
    costEffectiveSolutions: {
      title: "Cost-effective Solutions",
      description: `
        Kenyan BPO providers offer solutions that are both high-quality and cost-effective. With a well-trained workforce, advanced technological tools, and a competitive business environment, Kenya delivers services that help minimize operational costs while ensuring world-class performance. This makes Kenya a compelling choice for companies looking to outsource without compromising on quality.
      `,
    },
  }

  return (
    <>
    <section className='container mx-auto'>
      <SectionTitle title="Why Kenya?" subtitle="Benefits of outsourcing to Kenya" paragraph={`
        Helpware provides access to a highly skilled and talented workforce in Kenya, with a ready-to-go infrastructure and tremendous support from the local government.
        `}/>
    <section className="sm:grid grid-cols-2 gap-10 h-[650px]" ref={heroRef}>
        <TimelineContent animationNum={0} timelineRef={heroRef}>
          <img
            src="https://images.unsplash.com/photo-1552566626-52ff20f48936?q=80&w=600&auto=format&fit=crop"
            className="w-full h-96 object-cover rounded-md"
            alt="Kenyan Workforce"
          />
        </TimelineContent>
        <div className="space-y-2">
          <TimelineContent animationNum={1} timelineRef={heroRef}>
            <h1 className="text-5xl leading-[110%]">{kenyaBPO.topTalent.title}</h1>
          </TimelineContent>
          <TimelineContent animationNum={2} timelineRef={heroRef}>
            <p className="text-xl leading-[110%]">
              {kenyaBPO.topTalent.description}
            </p>
          </TimelineContent>
        </div>
      </section>

      <section ref={aboutRef} className="sm:grid grid-cols-2 gap-10">
        <div className="space-y-2">
          <TimelineContent animationNum={1} timelineRef={aboutRef}>
            <h1 className="text-5xl leading-[110%]">{kenyaBPO.governmentSupport.title}</h1>
          </TimelineContent>
          <TimelineContent animationNum={2} timelineRef={aboutRef}>
            <p className="text-xl leading-[110%]">
              {kenyaBPO.governmentSupport.description}
            </p>
          </TimelineContent>
        </div>
        <TimelineContent animationNum={0} timelineRef={aboutRef}>
          <img
            src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=600&auto=format&fit=crop"
            className="w-full h-96 object-cover rounded-md"
            alt="Government Support in Kenya"
          />
        </TimelineContent>
      </section>

      <section className="sm:grid grid-cols-2 gap-10">
        <TimelineContent animationNum={0} timelineRef={aboutRef}>
          <img
            src="https://images.unsplash.com/photo-1493794111590-59cdd24f8b07?q=80&w=600&auto=format&fit=crop"
            className="w-full h-96 object-cover rounded-md"
            alt="Strategic Location"
          />
        </TimelineContent>
        <div className="space-y-2">
          <TimelineContent animationNum={1} timelineRef={aboutRef}>
            <h1 className="text-5xl leading-[110%]">{kenyaBPO.strategicLocation.title}</h1>
          </TimelineContent>
          <TimelineContent animationNum={2} timelineRef={aboutRef}>
            <p className="text-xl leading-[110%]">
              {kenyaBPO.strategicLocation.description}
            </p>
          </TimelineContent>
        </div>
      </section>

      <section className="sm:grid grid-cols-2 gap-10">
        <div className="space-y-2">
          <TimelineContent animationNum={1} timelineRef={aboutRef}>
            <h1 className="text-5xl leading-[110%]">{kenyaBPO.costEffectiveSolutions.title}</h1>
          </TimelineContent>
          <TimelineContent animationNum={2} timelineRef={aboutRef}>
            <p className="text-xl leading-[110%]">
              {kenyaBPO.costEffectiveSolutions.description}
            </p>
          </TimelineContent>
        </div>
        <TimelineContent animationNum={0} timelineRef={aboutRef}>
          <img
            src="https://images.unsplash.com/photo-1552458329-05b9a3e8cd59?q=80&w=600&auto=format&fit=crop"
            className="w-full h-96 object-cover rounded-md"
            alt="Cost-effective Solutions"
          />
        </TimelineContent>
      </section>
    </section>
    </>
  )
}

export default WhyKenya
