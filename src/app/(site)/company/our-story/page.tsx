import CommonSectionServices from '@/components/Common/CommonSectionServices'
import React from 'react'
import CompanyTimeline from './component/CompanyTimeline'
import { Hero1, Hero2 } from './component/Hero'

const page = () => {
  return (
    <>
    <Hero1/>
    <CompanyTimeline/>
    <Hero2/>
    <CommonSectionServices/>
    </>
  )
}

export default page