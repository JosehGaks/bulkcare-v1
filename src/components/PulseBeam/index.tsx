'use client'

import { cn } from '@/lib/utils'

import React, { forwardRef, useRef } from 'react'
import { AnimatedBeam, Circle } from './beam'
import { IconBrandFacebook, IconBrandGmail, IconMessage2Pin, IconPhoneCall } from '@tabler/icons-react'
import { FaFacebookMessenger } from 'react-icons/fa'
import { BotIcon } from 'lucide-react'
import Image from 'next/image'
import SectionTitle from '../Common/SectionTitle'

export default function PulseBeam() {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
    <section className="py-18 bg-transparent pb-0 pt-0 lg:py-20 lg:pb-0 lg:pt-0">
       <div
      className="relative flex flex-col w-full container mx-auto items-center justify-center overflow-hidden px-10 pt-20"
      ref={containerRef}
    >
      <SectionTitle title="Integration" subtitle="Seamless Integration A cross All Platforms." paragraph=''/>
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10 mt-12 flex-wrap lg:mt-20">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <IconPhoneCall className='dark:text-black'/>
          </Circle>
          <Circle ref={div5Ref} className="p-2">
            <IconMessage2Pin className='dark:text-black'/>
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref} className="p-2">
            <IconBrandFacebook className='dark:text-black'/>
          </Circle>
          <Circle ref={div4Ref} className="h-20 w-20 p-1">
            <Image src={"/images/logo/logo.svg"} alt="logo" width={500} height={800}/>
          </Circle>
          <Circle ref={div6Ref} className="p-2">
            <IconBrandGmail className='dark:text-black'/>
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref} className="p-2">
            <BotIcon className='dark:text-black'/>
          </Circle>
          <Circle ref={div7Ref} className="p-2">
            <FaFacebookMessenger className='dark:text-black' />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        dotted
        gradientStartColor="#00ac47"
        gradientStopColor="#ffba00"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
        dotted
        gradientStartColor="#d948ae"
        gradientStopColor="#5b60ff"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        dotted
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
        gradientStartColor="#48b0d9"
        gradientStopColor="#67aeff"
        dotted
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
        dotted
        gradientStartColor="#00ac47"
        gradientStopColor="#4fcc5d"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
        dotted
        gradientStartColor="#48b0d9"
        gradientStopColor="#67aeff"
      />
    </div>   
    </section>

  )
}
