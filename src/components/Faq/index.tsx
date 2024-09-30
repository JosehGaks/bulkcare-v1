'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import SectionTitle from '../Common/SectionTitle';
 

const faqs = [
  {
    question: "What is Bulk Care Customer Support?",
    answer: "Bulk Care Customer Support is a professional outsourcing service that provides businesses with efficient and secure customer support solutions. We handle all your customer interactions, ensuring high satisfaction and loyalty."
  },
  {
    question: "What communication channels does Bulk Care support?",
    answer: "Bulk Care offers comprehensive support across every communication channel, including phone, email, live chat, and social media, ensuring your customers can reach you whenever and however they prefer."
  },
  {
    question: "How can Bulk Care help reduce operational costs?",
    answer: "By outsourcing your customer support to Bulk Care, you can significantly reduce operational costs. We eliminate the need for in-house training, infrastructure, and staffing, allowing you to allocate resources more efficiently."
  },
  {
    question: "Is Bulk Care available 24/7?",
    answer: "Yes, Bulk Care provides 24/7 support, ensuring your customers receive assistance whenever they need it. Our around-the-clock availability enhances customer satisfaction and loyalty."
  },
  {
    question: "What industries does Bulk Care serve?",
    answer: "Bulk Care serves a wide range of industries, including technology, retail, healthcare, finance, and more. Our team of experts is equipped to handle the unique needs of different business sectors."
  },
  {
    question: "How does Bulk Care ensure high-quality support?",
    answer: "Bulk Care ensures high-quality support through continuous monitoring, regular training, and the use of advanced customer support technologies. Our quality assurance processes are designed to maintain the highest standards of service."
  },
  {
    question: "Can Bulk Care support multiple languages?",
    answer: "Yes, Bulk Care offers support in multiple languages, making your services accessible to a global customer base. We help you break down language barriers and expand your market reach."
  }
];

function Index() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const [activeItem, setActiveItem] = useState<
    | {
        question: string
        answer: string
      }
    | undefined
  >(faqs[0])
 
  const handleClick = async (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
    const newActiveItem = faqs.find((_, i) => i === index)
    setActiveItem(newActiveItem)
  }
 
  return (
    <>
      <div className="container mx-auto pb-10 pt-20">
        <SectionTitle title='FAQ' subtitle='Frequently Asked Questions' paragraph=''/>
        <div className="h-fit border  rounded-lg pt-10 ">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden ${
                index !== faqs.length - 1 ? 'border-b' : ''
              }`}
              onClick={() => handleClick(index)}
            >
              <button
                className={`p-3 px-2 w-full cursor-pointer items-center transition-all font-semibold dark:text-white text-black   flex gap-2 
               `}
              >
                <Plus
                  className={`${
                    activeIndex === index ? 'rotate-45' : 'rotate-0 '
                  } transition-transform ease-in-out w-5 h-5 dark:text-gray-200 text-gray-600`}
                />
                {faq.question}
              </button>
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
                    <p
                      className={`dark:text-white text-black p-3 pt-0 w-[90%]`}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
 
export default Index
