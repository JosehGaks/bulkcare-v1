import CommonSectionServices from '@/components/Common/CommonSectionServices'
import { PageHero } from '@/components/Common/PageHero'
import Stats from '@/components/Common/Stats'
import React from 'react'
import TimelineAnimation from './components/TimelineAnimation'

const page = () => {
  const stats = [
    {
      title: '9',
      subtitle: 'worldwide offices',
      change: '+',
      isPositive: true
    },
    { title: '90%+',
      subtitle: 'CSAT / promoter',
      change: '+',
      isPositive: true
    },
    { title: '150+',
      subtitle: 'clients served',
      change: '+',
      isPositive: true
    },
    { title: '2015',
      subtitle: 'founded',
      change: '+',
      isPositive: true
    },
  ]
  return (
    <div>
      <PageHero title="Our Advantage" subtitle='Modern Approach to Outsourcing' content={` 
        We believe when our people thrive, our clients thrive too. When we all thrive, the world becomes a better place. Our power is delivering customer moments that matter!`} action={'access top talent'}/>
      <Stats stats={stats}/>
      <TimelineAnimation/>
      <CommonSectionServices/>
    </div>
  )
}

export default page