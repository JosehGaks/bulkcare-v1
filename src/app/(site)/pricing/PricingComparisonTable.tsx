
'use client'
import React from "react";
export default function PricingComparisonTable() {

    const checkIcon = <svg className="w-5 h-5 mx-auto text-zinc-600" fill="currentColor" viewBox="0 0 20 20"><path d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" /></svg>
    const minusIcon = <svg className="w-5 h-5 mx-auto text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" /></svg>

    const plans = [
        {
            name: "Talent Only",
            desc: "Agents to help you grow from here to where you want to go next",
            price: "Contact Sales"
        },
        {
            name: "Talent & Primary Support",
            desc: "A team of agents with the primary support team included to be self-supported lightening your load",
            price: "Contact Sales"
        },
        {
            name: "Talent & Full Support",
            desc: "A turn-key CX program where we execute your vision and partner to accelerate your CX dreams",
            price: "Contact Sales"
        },
    ]

    const tables = [
        {
            label: "TALENT ACQUISITION",
            label_icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>,
            items: [
                {
                    name: "Hiring Talents",
                    basic: checkIcon,
                    business: checkIcon,
                    enterprise: checkIcon
                },
                {
                    name: "Candidate Assessment",
                    basic: checkIcon,
                    business: checkIcon,
                    enterprise: checkIcon
                },
            ]
        },
        {
            label: "LEARNING AND DEVELOPMENT",
            label_icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>,
            items: [
                {
                    name: "Foundations Training",
                    basic: checkIcon,
                    business: checkIcon,
                    enterprise: checkIcon
                },
                {
                    name: "Product Training to Nesting",
                    basic: minusIcon,
                    business: checkIcon,
                    enterprise: checkIcon
                },
                {
                    name: "Training Materials",
                    basic: minusIcon,
                    business: minusIcon,
                    enterprise: checkIcon
                },
                {
                    name: "Training needs analysis on knowledge gaps",
                    basic: minusIcon,
                    business: minusIcon,
                    enterprise: minusIcon
                },
                {
                    name: "Knowledge Base",
                    basic: minusIcon,
                    business: minusIcon,
                    enterprise: minusIcon
                },
            ]
        },
        {
            label: "CONTINUOUS IMPROVEMENT",
            label_icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>,
            items: [
                {
                    name: "Process Evaluation and Mapping",
                    basic: minusIcon,
                    business: minusIcon,
                    enterprise: checkIcon
                },
                {
                    name: "KPI Identification",
                    basic: minusIcon,
                    business: checkIcon,
                    enterprise: checkIcon
                },
                {
                    name: "KPI Baselining",
                    basic: minusIcon,
                    business: checkIcon,
                    enterprise: checkIcon
                },
                {
                    name: "Quality Design",
                    basic: minusIcon,
                    business: minusIcon,
                    enterprise: checkIcon
                },
                {
                  name: "CI Projects",
                  basic: minusIcon,
                  business: minusIcon,
                  enterprise: checkIcon
              },
          ]
        },
        {
            label: "BUSINESS ANALYTICS",
            label_icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>,
            items: [
                {
                    name: "KPI Performance Review & Analysis",
                    basic: minusIcon,
                    business: checkIcon,
                    enterprise: checkIcon
                },
                {
                    name: "Data Warehousing",
                    basic: minusIcon,
                    business: minusIcon,
                    enterprise: checkIcon
                },
            ]
        },
        {
            label: "CONSULTING AND AUTOMATION",
            label_icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>,
            items: [
                {
                    name: "Process Automation",
                    basic: minusIcon,
                    business: minusIcon,
                    enterprise: minusIcon
                },
                {
                    name: "Consulting Services",
                    basic: minusIcon,
                    business: minusIcon,
                    enterprise: minusIcon
                },
            ]
        },
        {
            label: "GLOBAL OPERATIONS",
            label_icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>,
            items: [
                {
                    name: "Team Leader",
                    basic: checkIcon,
                    business: checkIcon,
                    enterprise: checkIcon
                },
                {
                    name: "Quality Assurance",
                    basic: minusIcon,
                    business: checkIcon,
                    enterprise: checkIcon
                },
                {
                    name: "Performance Management",
                    basic: minusIcon,
                    business: checkIcon,
                    enterprise: checkIcon
                },
            ]
        },
        {
            label: "WORKFORCE MANAGEMENT",
            label_icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>,
            items: [
                {
                    name: "Capacity Planning",
                    basic: minusIcon,
                    business: minusIcon,
                    enterprise: checkIcon
                },
                {
                    name: "WFM Reporting",
                    basic: minusIcon,
                    business: minusIcon,
                    enterprise: checkIcon
                },
                {
                    name: "Real Time Monitoring",
                    basic: minusIcon,
                    business: minusIcon,
                    enterprise: checkIcon
                },
            ]
        },
        {
            label: "GLOBAL IMPLEMENTATIONS",
            label_icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>,
            items: [
                {
                    name: "AProject Manager",
                    basic: checkIcon,
                    business: checkIcon,
                    enterprise: checkIcon
                },
                {
                    name: "Tools Implementation",
                    basic: minusIcon,
                    business: minusIcon,
                    enterprise: checkIcon
                },
                {
                    name: "RFP/Solutioning",
                    basic: checkIcon,
                    business: minusIcon,
                    enterprise: checkIcon
                },
            ]
        }
    ]

    const [selectedPlan, setSelectedPlan] = React.useState(plans[0].name)

    return (
        <section className="py-14 max-w-screen-xl mx-auto text-gray-100 relative">
        <img src='https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif' className="absolute top-0 left-0"/>
            <div className="">
                <div className='relative ml-6 max-w-xl mr-auto  space-y-3 px-4 sm:text-left md:px-0'>
                    <h3 className="text-zinc-100 font-semibold">
                        Pricing
                    </h3>
                    <p className='text-gray-200 tracking-tighter font-geist text-3xl font-normal sm:text-6xl '>
                        Compare our plans and find yours
                    </p>
                    <div className='max-w-xl'>
                        <p>
                        We provide end-to-end customer support solutions and only dedicated agents to businesses of any size at competitive prices.
                        </p>
                    </div>
                </div>
                <div className="mt-16">
                    <div className="sticky top-0 py-6 border-b bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-xl">
                        <div className="max-w-screen-xl mx-auto">
                            <ul className="ml-auto flex gap-x-6 px-4 md:px-8 lg:max-w-3xl">
                                {
                                    plans.map((item, idx) => (
                                        <li key={idx} className={`space-y-4 w-full hidden lg:block`}>
                                            <div className="flex items-center justify-between">
                                                <span className='text-gray-700 font-medium'>
                                                    {item.name}
                                                </span>
                                                <div className="relative lg:hidden">
                                                    <svg className="w-5 h-5 text-gray-500 absolute right-0 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
                                                    </svg>
                                                    <select value="Switch plan" className="bg-transparent appearance-none outline-none px-8 cursor-pointer"
                                                        onChange={(e) => setSelectedPlan(e.target.value)}
                                                    >
                                                        <option disabled selected>Switch plan</option>
                                                        {plans.map((option, idx) => (
                                                            <option key={idx}>{option.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <button className='mt-4 w-full font-geist tracking-tighter text-center rounded-md text-md bg-gradient-to-br from-zinc-400 to-zinc-700 px-4 py-2 text-lg text-zinc-50 ring-2 ring-zinc-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-zinc-500/70 flex items-center justify-center gap-2'>
                                                Contact Sales
                                            </button>
                                            <p className="text-sm">
                                                {item.desc}
                                            </p>

                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="max-w-screen-xl mx-auto mt-10 space-y-4 px-4 overflow-auto md:overflow-visible md:px-8">
                        {
                            tables.map((table, idx) => (
                                <table key={idx} className="w-full table-auto text-sm text-left">
                                    <thead className="text-gray-100 font-medium border-b">
                                        <tr>
                                            <th className="z-20 top-12 py-6 lg:sticky">
                                                <div className="flex items-center gap-x-3">
                                                    <div className="w-12 h-12 text-zinc-600 rounded-full border flex items-center justify-center">
                                                        {table.label_icon}
                                                    </div>
                                                    <h4 className="text-gray-200 text-xl font-medium">
                                                        {table.label}
                                                    </h4>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-100 divide-y">
                                        {
                                            table.items.map((item, idx) => (
                                                <>
                                                    <tr key={idx}>
                                                        <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                                     
                                                        <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">{item.basic}</td>
                                                        <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">{item.business}</td>
                                                        <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">{item.enterprise}</td>
                                                    
                                                        <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap lg:hidden">
                                                          {/* @ts-ignore  */}
                                                            {item[selectedPlan.toLowerCase()]}
                                                        </td>
                                                    </tr>
                                                </>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
        



