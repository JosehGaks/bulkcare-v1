import React from "react";
import SectionTitle from "../Common/SectionTitle";
import VerticalTimeline from "./Timeline";

export default function Steps() {

  return ( 
    <section className="py-18 bg-transparent pb-0 pt-0 lg:py-20 lg:pb-0 lg:pt-0">
       <div className="container mx-auto pt-20">
      <SectionTitle title={"Our Proven Approach"} subtitle="Executing Experience Beyond Expectation" paragraph={""}/>
      <VerticalTimeline />
    </div>   
    </section>

  );
}
