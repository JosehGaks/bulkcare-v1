import React from 'react'
import HomeBlogSection from '../Blog/HomeBlogSection'
import Clients from '../Clients'
import Features from '../Features'
import Steps from '../Steps'
import Testimonials from '../Testimonials'
import { ConnectionBeamHero } from './ConnectionBeamHero'
import { PageHero } from './PageHero'
import Services_ from '../Services'
import { getAllPosts } from '@/utils/markdown'

const CommonSectionServices = () => {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <>
          <ConnectionBeamHero
        title="Integrated & Empowered Content"
        content="
        Our approach to content control, security, and moderation allows dynamic integration regardless of your social, 
        in-house, or user platform. We consume and drive personalized control at every step along with your customer
        or consumer journey. Leveraging the best tech stack, we put the right people in the loop at exactly the right 
        time to transform your Content control."
      />
      <Features />
      <Steps/>
      <Clients />
      <Testimonials />
      <HomeBlogSection posts={posts} />
      <Services_ />
      <PageHero
        title="Explore Bulkcare"
        content="Reach out to us"
        subtitle="Let’s chat about business process outsourcing for success"
        action="let's get started"
      />
    </>
  )
}

export default CommonSectionServices