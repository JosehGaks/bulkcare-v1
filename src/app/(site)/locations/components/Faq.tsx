'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    title: 'Are there any challenges (culture/traditions/religion, etc.) that might prevent the local Kenyan workers from delivering good results?',
    description:
      'While cultural diversity can present challenges, BulkCare emphasizes inclusivity and cultural sensitivity in training. Our team is well-versed in local customs and traditions, ensuring effective communication and collaboration that fosters a positive work environment.',
    imageUrl:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714806148/culture_challenges.png',
  },
  {
    title: 'What might be the risks of outsourcing customer support to Kenya?',
    description:
      'Outsourcing to Kenya can pose risks such as communication barriers or variations in service quality. However, BulkCare mitigates these risks through rigorous training programs, a strong quality assurance framework, and by hiring skilled professionals who understand both local and international standards.',
    imageUrl:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714806148/outsourcing_risks.png',
  },
  {
    title: 'What salary do you offer to your employees in Kenya?',
    description:
      'BulkCare offers competitive salaries that align with industry standards in Kenya. We ensure that our compensation packages not only attract top talent but also support our employees\' well-being and professional growth.',
    imageUrl:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714806148/salary_structure.png',
  },
  {
    title: 'Is the local workforce skillful enough to perform customer support and back-office services?',
    description:
      'Yes, Kenya boasts a highly educated and qualified workforce. At BulkCare, we prioritize hiring skilled professionals who are proficient in English and possess the necessary expertise to deliver exceptional customer support and back-office services.',
    imageUrl:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714806148/workforce_skills.png',
  },
  {
    title: 'What requirements does BulkCare have for Kenyan candidates?',
    description:
      'Candidates seeking employment with BulkCare must possess relevant qualifications and experience, demonstrate excellent communication skills, and have a strong customer-centric attitude. Additional training may be provided to ensure alignment with our service standards.',
    imageUrl:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714806148/candidate_requirements.png',
  },
  {
    title: 'How does the Kenyan government support the development of the BPO sector in the country?',
    description:
      'The Kenyan government actively promotes the growth of the BPO sector through policies that encourage investment and infrastructure development. Initiatives include tax incentives, investment in technology and training programs, and partnerships with private sector organizations to boost job creation and enhance skills in the workforce.',
    imageUrl:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714806148/government_support.png',
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const [activeItem, setActiveItem] = useState<
    | {
        title: string
        description: string
        imageUrl: string
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
      <div className="container mx-auto pb-10 pt-2">
        <h1 className="uppercase text-center text-4xl font-bold pt-2 pb-4">
          FAQ
        </h1>
        <div className="h-fit border  rounded-lg p-2 dark:bg-[#111111] bg-[#F2F2F2]">
          {faqs.map((tab, index) => (
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
                {tab.title}
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
                      {tab.description}
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


