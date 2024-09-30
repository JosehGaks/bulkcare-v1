import React from "react";
import SectionTitle from "../Common/SectionTitle";
import VerticalTimeline from "./Timeline";

export default function Steps() {

  return ( 
    <div className="container mx-auto pt-20">
      <SectionTitle title={"Our Proven Approach"} subtitle="Executing Experience Beyond Expectation" paragraph={""}/>
      <VerticalTimeline />
    </div>
  );
}
