'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Meteors } from '../ui/meteors'

export interface tab {
  title: string
  description: string
  content: string
  action: string  
}

interface Props {
  tabs: tab[]
}
function IndustrySolutions({ tabs }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const handleClick = async (index: number) => {
    setActiveIndex(activeIndex === index ? index : index)
  }
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <>
      <div className=" md:grid grid-cols-12 p-2 items-center justify-center w-full h-full">
        <div className="rounded-sm   col-span-5">
          {tabs.map((tab, index) => (
            <motion.div
              key={index}
              className={`rounded-lg overflow-hidden mb-2  ${
                activeIndex === index
                  ? 'active border-2 dark:border-[#656fe2]  border-[#F2F2F2] dark:bg-[#E0ECFB] bg-[#F2F2F2]'
                  : 'bg-transparent border-2 dark:hover:border-[#656fe2]'
              }
            `}
              onClick={() => handleClick(index)}
            >
              <h3
                className={`p-4 cursor-pointer transition-all font-semibold    dark:text-white text-black dark:hover:bg-[#282829] hover:bg-[#F2F2F2] dark:hover:text-white hover:text-black flex justify-between items-center ${
                  activeIndex === index
                    ? 'active  dark:bg-black bg-[#F2F2F2] '
                    : 'dark:bg-[#11112b] bg-white'
                }
               `}
              >
                {tab.title}
              </h3>
              <AnimatePresence mode="sync">
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      delay: 0.14,
                    }}
                  >
                    <p className={`dark:bg-white bg-[#F2F2F2] text-black p-3`}>
                      {tab.description}
                    </p>
                    <TabCard title={tab.title} action={tab.action}/>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <>
          {isDesktop &&
            tabs.map((tab, index) => {
              return (
                <>
                  <AnimatePresence mode="popLayout">
                    {activeIndex === index && (
                      <motion.div className="p-4 h-[400px] overflow-hidden col-span-7">
                        <motion.div
                          className="mb-2 max-w-full h-full  rounded-md object-cover w-[800]"
                          initial={{ opacity: 0, overflow: 'hidden' }}
                          animate={{ opacity: 1, overflow: 'hidden' }}
                          exit={{ opacity: 0, overflow: 'hidden' }}
                          transition={{
                            duration: 0.4,
                            delay: 0.2,
                          }}
                        >
                          <TabCard title={tab.title} action={tab.action}/>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )
            })}
        </>
      </div>
    </>
  )
}


const TabCard = ({title,action}:{title:string,action:string}) => {
  return (
    <div className="">
    <div className=" w-full relative max-w-xs">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-2 w-2 text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>

        <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          How Bulkcare can help
        </h1>

        <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
          {title}
        </p>

        <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
          {action}
        </button>

        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  </div>
  )
}

export default IndustrySolutions
