import React from "react";
import VerticalTimeline02 from "../ui/verticaltimeline2"

export default function VerticalTimeline() {
  const timelineItems = [
    {
      completed: true,
      date: "1",
      title: "Onboarding",
      content: "Built and launched Aceternity UI and Aceternity UI Pro from scratch.",
    },
    {
      completed: true,
      date: "2",
      title: "Sourcing",
      content:
        "Your recruiting team combines sourcing and headhunting to interview, test, and curate your custom-tailored team.",
    },
    {
      completed: true,
      date: "3",
      title: "Training",
      content:
        "Your training team facilitates and builds training documentation with you and creates a certification plan with your team.",
    },
    {
      completed: true,
      date: "4",
      title: "Production",
      content:
        "Your custom team is 100% dedicated to you. They are assigned a manager, and we continually monitor KPIs and goals.",
    },
    {
      completed: true,
      date: "5",
      title: "Continuous improvement",
      content:
        "You are assigned a customer support manager to partner with you on continuous improvement and help you project manage your work and team.",
    },
    {
      completed: false,
      deliver: true,
      date: "6",
      title: "Growth",
      content:
        "You can accelerate growth, level up production, increase efficiency, and improve your bottom line.",
    },
  ];
  


  return (
    <>
      <section className="relative h-full mt-6 flex flex-col justify-center bg-slate-50 dark:bg-black overflow-hidden py-10">
        <div className="w-full container mx-auto px-4 md:px-6">
          <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
            <div className="w-full max-w-3xl mx-auto">
              <VerticalTimeline02 items={timelineItems} />
            </div>
          </div>
        </div>
      </section>
      
     
    </>
  )
}