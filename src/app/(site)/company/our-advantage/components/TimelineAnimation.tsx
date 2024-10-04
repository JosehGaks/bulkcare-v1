"use client"
import React, { useRef } from 'react';
import AdvantageSection from './AdvantageSection';
// Adjust the path as needed

function TimelineAnimation() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  const advantages = [
    {
      title: "Bulkcare’s clear focus on People",
      description:
        "Bulkcare’s clear focus on People as a Service model has led to our market leading position in BPO. We use a modern approach to outsourcing. We created the company to change perceptions of what outsourcing is and can be.",
      imgSrc: "https://images.unsplash.com/photo-1724690416947-3cdc197ffab1?q=80&w=600&auto=format&fit=crop",
      animationNum: 0,
    },
    {
      title: "People Advantage",
      description:
        "People are the heart of what we do. We believe in our people, stand by our people, and want our people to be happy.",
      imgSrc: "https://images.unsplash.com/photo-1724690416947-3cdc197ffab1?q=80&w=600&auto=format&fit=crop",
      animationNum: 3,
    },
    {
      title: "Leadership Advantage",
      description:
        "Our leadership team understands partnerships are earned and provide everything possible to ensure an amazing client and customer experience.",
      imgSrc: "https://images.unsplash.com/photo-1724690416947-3cdc197ffab1?q=80&w=600&auto=format&fit=crop",
      animationNum: 6,
    },
    {
      title: "Team Building Advantage",
      description:
        "Our clients work with our top leadership talent in professional implementation, transition, staffing, operations, and continuous optimization.",
      imgSrc: "https://images.unsplash.com/photo-1724690416947-3cdc197ffab1?q=80&w=600&auto=format&fit=crop",
      animationNum: 9,
    },
    {
      title: "Training Advantage",
      description:
        "Training is one of the most important links in the chain to ensure your brand image is preserved when outsourcing.",
      imgSrc: "https://images.unsplash.com/photo-1724690416947-3cdc197ffab1?q=80&w=600&auto=format&fit=crop",
      animationNum: 12,
    },
    {
      title: "Recruiting Advantage",
      description:
        "Our recruiting strategies are specifically designed to reduce the timeline for identifying, recruiting, and hiring qualified employees.",
      imgSrc: "https://images.unsplash.com/photo-1724690416947-3cdc197ffab1?q=80&w=600&auto=format&fit=crop",
      animationNum: 15,
    },
    {
      title: "Technology Advantage",
      description:
        "We deliver scalable and outcome-based solutions that combine integration, automation, and platforms to deliver the highest volume and most accurate tasking solution.",
      imgSrc: "https://images.unsplash.com/photo-1724690416947-3cdc197ffab1?q=80&w=600&auto=format&fit=crop",
      animationNum: 18,
    },
    {
      title: "Quality Advantage",
      description:
        "We provide access to real-time and historical data based on best practices, with an emphasis on continuous improvement.",
      imgSrc: "https://images.unsplash.com/photo-1724690416947-3cdc197ffab1?q=80&w=600&auto=format&fit=crop",
      animationNum: 21,
    },
    {
      title: "Overall Advantage",
      description:
        "We custom recruit teams, drive through six sigma methodology, and execute robust training programs to continuously improve our client journey.",
      imgSrc: "https://images.unsplash.com/photo-1724690416947-3cdc197ffab1?q=80&w=600&auto=format&fit=crop",
      animationNum: 24,
    },
  ];

  return (
    <>
      <section className="sm:grid grid-cols-2 gap-10 h-[650px]" ref={heroRef}>
        <AdvantageSection {...advantages[0]} />
        <div className="space-y-2">
          <AdvantageSection {...advantages[1]} />
        </div>
      </section>
      <section ref={aboutRef} className="sm:grid grid-cols-2 gap-10">
        <AdvantageSection {...advantages[2]} />
        <AdvantageSection {...advantages[3]} />
      </section>
      <section ref={aboutRef} className="sm:grid grid-cols-2 gap-10">
        <AdvantageSection {...advantages[4]} />
        <AdvantageSection {...advantages[5]} />
      </section>
      <section ref={aboutRef} className="sm:grid grid-cols-2 gap-10">
        <AdvantageSection {...advantages[6]} />
        <AdvantageSection {...advantages[7]} />
      </section>
      <section ref={aboutRef} className="sm:grid grid-cols-2 gap-10">
        <AdvantageSection {...advantages[8]} />
      </section>
    </>
  );
}

export default TimelineAnimation;
