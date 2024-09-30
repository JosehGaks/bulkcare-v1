// components/Banner.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
  return (
    <>
    <section
      id="home"
      className="relative overflow-hidden bg-primary pt-[150px] md:pt-[130px] lg:pt-[160px]"
    >
    <div className="home-5-banner bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2">
            <div className="text-left mb-8 md:mb-0">
              <h4 className="text-2xl font-semibold mb-2">YOUR BULKCARE</h4>
              <h1 className="text-4xl font-bold mb-4">
                <span className="block">Amazing Customer</span>
                <span className="block">Experiences.</span>
                <span className="block text-teal-500">Together.</span>
              </h1>
              <p className="text-lg mb-6">
                We are a digitally enabled People as a Services Outsourcer focused on serving high growth, new economy, market-disrupting, and technology companies to own interaction custody, complete complex tasks, and grow their brands.
              </p>
            </div>
            <div>
              <Link href="https://www.helpware.com/contact-us">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                  Let&apos;s Talk
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col items-center relative pt-11">
            <div className="mb-8">
              <video id="vid" width="320" height="240" playsInline loop muted autoPlay >
                <source src="https://f.hubspotusercontent20.net/hubfs/3358429/Helpware-hero-video-02222022_v3.mp4" type="video/mp4" />
              </video>
              <Image src={'/images/hero/bulk_customer_care.webp'} alt="discount" fill className='object-cover'/>
            </div>
            <div className="text-center absolute bottom-0 right-12 transform -translate-x-1/2 bg-white p-3 rounded-2xl shadow-2xl">
              <div className="mb-4">
                <img src="https://www.helpware.com/hubfs/image%2067%20(1).png" alt="Taylor Spencer" className="w-24 h-24 rounded-full mx-auto" />
              </div>
              <h5 className="text-xl font-semibold mb-2">Taylor Spencer</h5>
              <div className="flex justify-center space-x-4">
                <img src="https://www.helpware.com/hubfs/Answer-yes-icon.svg" alt="Answer-yes-icon" className="w-6 h-6" />
                <img src="https://www.helpware.com/hubfs/Answer-no-icon.svg" alt="Answer-no-icon" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  );
};

export default Banner;
