'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Plus } from 'lucide-react'
import SectionTitle from '../Common/SectionTitle';
import { Separator } from '../ui/separator';
 


export default function FAQ() {

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

  return (
    <section className="py-18 bg-transparent lg:py-20 relative">
      <img
        className="absolute inset-x-0 -top-20 opacity-25 "
        src={
          "https://pipe.com/_next/image?url=%2Fassets%2Fimg%2Fhero-left.png&w=384&q=75"
        }
        width={1000}
        height={1000}
        alt="back bg"
      />

      <div className="absolute -z-1 inset-0  h-[600px] w-full bg-transparent opacity-5 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="pt-10 container mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-left sm:max-w-md sm:mr-auto">
          <h3 className="text-gray-300 font-geist text-3xl font-extrabold sm:text-4xl">
            How can we help?
          </h3>
          <p className="text-gray-100">
            Everything you need to know about the product. Can’t find the answer
            you’re looking for? feel free to{" "}
            <a
              className="text-cyan-700 font-semibold whitespace-nowrap"
              href="javascript:void(0)"
            >
              contact us
            </a>
            .
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto sm:mx-auto "
          >
            <div className="relative">
              <Mail className="w-6 h-6 text-gray-500 absolute left-3 inset-y-0 my-auto" />
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full pl-12 pr-3 py-2 text-gray-200 bg-transparent outline-none border focus:border-cyan-600 shadow-sm rounded-lg"
              />
            </div>
          </form>
        </div>
        <Separator className="h-[1px] bg-white/10 mt-4" />
        <div className="mt-12">
          <ul className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3 p-8">
            {faqs.map((item, idx) => (
              <li key={idx} className="space-y-3">
                <summary className="flex items-center justify-between font-semibold text-gray-500">
                  {item.question}
                </summary>
                <p
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                  className="text-gray-200 leading-relaxed"
                ></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


            