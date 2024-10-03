import CommonSectionServices from '@/components/Common/CommonSectionServices'
import { PageHero } from '@/components/Common/PageHero'
import React from 'react'
import VisionHero from './components/Hero'
import VisionGrid from './components/VisionGrid'

const page = () => {
  return (
    <div>
      <VisionHero/>
      <VisionGrid/>
      <CommonSectionServices/>
    </div>
  )
}

export default page