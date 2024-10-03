import { PageHero } from '@/components/Common/PageHero'
import FAQ from '@/components/Faq'
import React from 'react'
import FeaturesSection from './components/Features'
import ServicesDialog from './components/Services'
import WhyKenya from './components/WhyKenya'
import StatsisticsHero from './components/StatisticsHero'

const page = () => {
  return (
    <>
      <PageHero 
        title="Bulkcare Kenya"
        subtitle="Unleash Kenyas's Hidden Gems" content={`
          Kenya is a land of opportunity for businesses looking to make the most of their investments. With young, skilled, and tech-savvy graduates in fields such as finance, IT, and customer service, this country can live up to any bold expectations.
          `} action={'Get Kenyas Best!'}        
      />
      <StatsisticsHero/>
      <WhyKenya/>
      <ServicesDialog/>
      <FeaturesSection/>
      <FAQ/>
    </>
  )
}

export default page