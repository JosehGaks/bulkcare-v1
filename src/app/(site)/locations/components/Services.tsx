'use client'
import SectionTitle from '@/components/Common/SectionTitle'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import { Plus, PlusIcon, XIcon } from 'lucide-react'
import React, { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const transition = {
  type: 'spring',
  duration: 0.4,
}
export default function ServicesDialog() {
  const [index, setIndex] = useState(5)

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const items = [
    {
      id: 1,
      url: 'https://tabler-icons.io/static/tabler-icons/icons/line/headset.svg',
      title: 'Customer Support',
      description:
        'Our CSRs in Uganda ensure exceptional customer experience for customers in English, French, and Swahili across all channels. With expert guidance and attentive service, your customers will always be supported.',
      tags: ['Customer Service', 'Multilingual', 'Support'],
    },
    {
      id: 2,
      url: 'https://tabler-icons.io/static/tabler-icons/icons/line/edit.svg',
      title: 'Data Annotation',
      description:
        'We offer services for “human annotation” of datasets at scale, and our team of experienced annotators uses advanced techniques to accurately label data, ensuring your machine learning models perform optimally.',
      tags: ['Data Labeling', 'Machine Learning', 'Precision'],
    },
    {
      id: 3,
      url: 'https://tabler-icons.io/static/tabler-icons/icons/line/robot.svg',
      title: 'AI Operators',
      description:
        'Our team will ensure your AI model outputs are relevant, valid, and complete by carefully spotting errors and inconsistencies, improving the overall quality and performance of your artificial intelligence systems.',
      tags: ['AI', 'Machine Learning', 'Accuracy'],
    },
    {
      id: 4,
      url: 'https://tabler-icons.io/static/tabler-icons/icons/line/shield-check.svg',
      title: 'Content Moderation',
      description:
        'We have professionals who are adept at detecting and filtering questionable or suspicious content from any digital platform, ensuring that your brand remains secure and compliant with global standards.',
      tags: ['Content Moderation', 'Safety', 'Compliance'],
    },
    {
      id: 5,
      url: 'https://tabler-icons.io/static/tabler-icons/icons/line/building.svg',
      title: 'Back-office',
      description:
        'Our back-office solutions offer superior administrative support, allowing our clients to experience smoother and more efficient processes, making sure all operational aspects are handled effectively.',
      tags: ['Administration', 'Operations', 'Support'],
    },
    {
      id: 6,
      url: 'https://tabler-icons.io/static/tabler-icons/icons/line/shopping-cart.svg',
      title: 'Sales Support',
      description:
        'Our team is trained to assist in lead generation and provide the necessary sales support to help you achieve your sales goals, turning potential leads into satisfied customers.',
      tags: ['Sales', 'Lead Generation', 'Customer Conversion'],
    },
    {
      id: 7,
      url: 'https://tabler-icons.io/static/tabler-icons/icons/line/keyboard.svg',
      title: 'Data Entry',
      description:
        'We provide accurate and efficient data entry services to help you manage your data in a streamlined manner, allowing you to focus on strategic activities while we handle the details.',
      tags: ['Data Management', 'Efficiency', 'Accuracy'],
    },
    {
      id: 8,
      url: 'https://tabler-icons.io/static/tabler-icons/icons/line/settings.svg',
      title: 'IT Support',
      description:
        'Our IT support services ensure that your technology infrastructure runs smoothly and efficiently with minimal downtime, safeguarding your business from operational disruptions.',
      tags: ['IT Support', 'Technology', 'Infrastructure'],
    }
  ]
  
  const [carouselWidth, setCarouselWidth] = useState(0)
  const carousel = useRef(null)
  useEffect(() => {
    setCarouselWidth(
      // @ts-ignore
      carousel.current.scrollWidth - carousel.current.offsetWidth
    )
  }, [carousel])
  return (
    <>
    <section className='pb-10 pt-20 lg:pb-20 lg:pt-[120px] container mx-auto'>
      <SectionTitle title={'Kenyan Talents'} paragraph={'We have a team of skilled and committed professionals offering diverse services'} subtitle='Available Services'/>
    <div className="relative h-full">
      <MotionConfig transition={transition}>
        <motion.div
          ref={carousel}
          drag="x"
          dragElastic={0.2}
          dragConstraints={{ right: 0, left: -carouselWidth }}
          dragTransition={{ bounceDamping: 30 }}
          transition={{ duration: 8, ease: 'easeInOut' }}
          className="flex w-full  gap-4   py-10"
        >
          {items.map((item, i) => {
            return (
              <>
                <motion.div
                  //@ts-ignore
                  key={item}
                  className="w-[250px] flex-shrink-0 flex relative  flex-col overflow-hidden border    dark:bg-black bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-950"
                  layoutId={`dialog-${item?.id}`}
                  style={{
                    borderRadius: '12px',
                  }}
                  tabIndex={i}
                  onClick={() => {
                    setIndex(i)
                    setIsOpen(true)
                  }}
                >
                  <motion.div layoutId={`dialog-img-${item.id}`}>
                    <img
                      src={item.url}
                      alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
                      className=" w-96 object-cover"
                    />
                  </motion.div>
                  <div className="flex flex-grow flex-row items-end justify-between p-2">
                    <div>
                      <motion.div
                        layoutId={`dialog-title-${item.id}`}
                        className="dark:text-white text-black"
                      >
                        {item.title}
                      </motion.div>
                      {/* <motion.div
                        layoutId={`dialog-des-${item.id}`}
                        layout="position"
                        className="text-zinc-700 dark:text-zinc-400 line-clamp-2 text-sm"
                      >
                        {item.description}
                      </motion.div> */}
                    </div>

                    <button className="absolute bottom-2 right-2 p-2 dark:bg-gray-900 bg-gray-400 hover:bg-gray-500 rounded-full dark:hover:bg-gray-800">
                      <Plus className="w-6 h-6" />
                    </button>
                  </div>
                </motion.div>
              </>
            )
          })}
        </motion.div>
        {/* {createPortal( */}
        <AnimatePresence initial={false} mode="sync">
          {isOpen && (
            <>
              <motion.div
                key={`backdrop-${items[index].id}`}
                className="fixed inset-0 h-full w-full dark:bg-black/25 bg-white/95 backdrop-blur-sm "
                variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={() => {
                  setIsOpen(false)
                }}
              />
              <motion.div
                key="dialog"
                className="pointer-events-none fixed inset-0 flex items-center justify-center z-50"
              >
                <motion.div
                  className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden   dark:bg-gray-950 bg-gray-200 border sm:w-[500px] ]"
                  layoutId={`dialog-${items[index].id}`}
                  tabIndex={-1}
                  style={{
                    borderRadius: '24px',
                  }}
                >
                  <motion.div layoutId={`dialog-img-${items[index].id}`}>
                    <img
                      src={items[index].url}
                      alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
                      className="h-full w-full"
                    />
                  </motion.div>
                  <div className="p-6">
                    <motion.div
                      layoutId={`dialog-title-${items[index].id}`}
                      className="text-2xl text-zinc-950 dark:text-zinc-50"
                    >
                      {items[index].title}
                    </motion.div>
                    {/* <motion.div
                      layoutId={`dialog-subtitle-${uniqueId}`}
                      layout="position"
                      className="text-zinc-700 dark:text-zinc-400"
                    >
                      Edouard Wilfrid Buquet
                    </motion.div> */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="origin-bottom"
                      layoutId={`dialog-des-${items[index].id}`}
                    >
                      <p className="mt-2 text-zinc-500 dark:text-zinc-500">
                        {items[index].description}
                      </p>
                    </motion.div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute right-6 top-6 text-zinc-50 cursor-pointer"
                    type="button"
                    aria-label="Close dialog"
                  >
                    <XIcon size={24} />
                  </button>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        {/* , */}
        {/* document.body
        )} */}
      </MotionConfig>
    </div>
    </section>
    </>
  )
}
