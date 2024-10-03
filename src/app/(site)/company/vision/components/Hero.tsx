import CommonSectionServices from '@/components/Common/CommonSectionServices'
import { PageHero } from '@/components/Common/PageHero'
import React from 'react'
import { Badge } from "@/components/ui/badge";


const VisionHero = () => {
  return (
    <>
      <PageHero title={`Bulkcare's Philosophy`} subtitle={`Our Mission
        `} content={`
            Bulkcare is a fusion of amazing people, culture, innovation, technology, and ideas all driving towards a single purpose: Revolutionary Customer Experiences.
        Our Mission is to consistently and happily deliver the world’s best concierge-level of services. Defined by joy and relentless innovation – We are proud to be differentiated as an Amazing People as a Service business.
        `} action={``}/>
        <RightHero title="Bulkcare's philosophy" subtitle="Our Vision" content={`
          Our vision is to deliver, relentlessly, the world's best experience interactions through the fusion of amazing people, locations, culture, and innovation.

          Becoming the premier provider for people-driven services; spanning legacy, new economy and technology client partners. 
          `}/>
    </>
  )
}



export const RightHero = ({title, content,subtitle}: {title: string; content: string, subtitle: string}) => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
        <div className="bg-muted rounded-md w-full aspect-video h-full flex-1"></div>
        <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
          <div>
            <Badge>{title}</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
              {subtitle}
            </h2>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
             {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default VisionHero