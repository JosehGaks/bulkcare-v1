import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Services = () => {
  const servicesData = [
    {
      href: 'https://simplycontact.com/services/customer-support/',
      title: 'Customer support',
      subtitle: 'outsourcing',
      description:
        'Create an efficient customer service experience by providing caring and professional support in 18+ languages. Be reachable through every channel and provide world-class support.',
      subservices: [
        {
          href: 'https://simplycontact.com/services/customer-support/multilingual-customer-support/',
          title: 'Multilingual customer support',
        },
        {
          href: 'https://simplycontact.com/services/customer-support/inbound-contact-center/',
          title: 'Inbound support',
        },
        {
          href: 'https://simplycontact.com/services/customer-support/omnichannel/',
          title: 'Omnichannel customer support',
          subservices: [
            {
              href: 'https://simplycontact.com/services/customer-support/omnichannel/call-center/',
              title: 'Call center services',
            },
            {
              href: 'https://simplycontact.com/services/customer-support/omnichannel/social-media/',
              title: 'Social media support',
            },
            {
              href: 'https://simplycontact.com/services/customer-support/omnichannel/live-chat-support/',
              title: 'Live chat support',
            },
          ],
        },
        {
          href: 'https://simplycontact.com/services/customer-support/augmented-customer-service/',
          title: 'Augmented customer service',
        },
        {
          title: 'Customer retention',
        },
        {
          title: 'Technical support',
        },
        {
          href: 'https://simplycontact.com/services/customer-support/startup-support/',
          title: 'Startup customer support',
          subservices: [
            {
              title: 'Crypto customer service',
            },
            {
              title: 'Game support',
            },
            {
              title: 'SaaS support',
            },
            {
              title: 'Amazon customer support',
            },
          ],
        },
        {
          title: 'E-commerce support',
        },
        {
          href: 'https://simplycontact.com/services/customer-support/helpdesk-outsourcing/',
          title: 'Help desk outsourcing',
        },
      ],
    },
    {
      href: '',
      title: 'Customer support',
      subtitle: 'consulting',
      subservices: [
        {
          href: 'https://simplycontact.com/services/consulting/contact-center-quality-assurance/',
          title: 'Contact center quality assurance',
        },
      ],
    },
    {
      href: '',
      title: 'Customer',
      subtitle: 'Acquisition',
      description:
        'Increase sales and marketing efficiency by outsourcing outbound calls and lead generation. Your clients will be found and engaged in lasting relationships with your company.',
      subservices: [
        {
          href: 'https://simplycontact.com/services/customer-acquisition/telemarketing/',
          title: 'Telemarketing',
        },
        {
          title: 'Customer surveys',
        },
        {
          title: 'Outbound support',
        },
      ],
    },
    {
      href: 'https://simplycontact.com/services/business-process-outsourcing/',
      title: 'Business Process',
      subtitle: 'Outsourcing',
      description:
        'Let our team perform routine tasks, while you are busy with large-scale goals. Your business processes will be optimized behind the scenes while costs are significantly reduced.',
      subservices: [
        {
          title: 'Front-office support',
        },
        {
          href: 'https://simplycontact.com/services/business-process-outsourcing/back-office-support/',
          title: 'Back-office support',
        },
        {
          title: 'Data entry & verification',
        },
      ],
    },
  ];

  return (
    <>
    <div className="container mx-auto space-y-6 pt-20 mt-5">
      {servicesData.map((service, index) => (
        <div key={index} className="box flex flex-col md:flex-row bg-white shadow-md rounded-lg p-4">
          <div className={`left flex-1 p-4 ${!service.href ? 'pointer-events-none' : ''}`}>
            <Link href={service.href || ''}>
              <div>
                <span className="text-lg font-bold">{service.title} </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold">{service.subtitle}</span>
                {service.href && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.00008 3H20.5001V19.5H18.5001V6.41421L4.70718 20.2071L3.29297 18.7929L17.0859 5H4.00008V3Z"
                      fill="white"
                      stroke="white"
                    ></path>
                  </svg>
                )}
              </div>
            </Link>
          </div>
          <div className="right flex-1 p-4">
            {service.description && <p>{service.description}</p>}
            <ul className="space-y-2 mt-4">
              {service.subservices.map((subservice, subIndex) => (
                <li key={subIndex}>
                  <Link href={subservice.href || ''}>
                    <span className={`text-blue-600 ${!subservice.href ? 'pointer-events-none' : ''}`}>
                      {subservice.title}
                    </span>
                  </Link>
                  {/* {subservice.subservices && (
                    <ul className="pl-4 mt-2 space-y-1">
                      {subservice.subservices.map((nestedSubservice, nestedIndex) => (
                        <li key={nestedIndex}>
                          <Link href={nestedSubservice.href || ''}>
                            <span className={`text-blue-600 ${!nestedSubservice.href ? 'pointer-events-none' : ''}`}>
                              {nestedSubservice.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )} */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Services;
