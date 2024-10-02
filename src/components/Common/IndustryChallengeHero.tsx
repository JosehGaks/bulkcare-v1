import React from "react";
import SectionTitle from "./SectionTitle";
import { Badge } from "lucide-react"; // Assuming this is needed later
import Image from "next/image";

const IndustryChallengeHero = ({
  title,
  subtitle,
  paragraph,
  imgSrc,
  // customContent = null // If you want to add more custom content
}:{ title: string; subtitle: string; paragraph: string; imgSrc: string; }) => {
  return (
    <>
      <SectionTitle title={title} subtitle={subtitle} paragraph={""} />
      <div className="w-full py-20 lg:py-40">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
          <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">
            <Image src={imgSrc} alt="feature" fill className="object-contain"/>
          </div>
            <div className="flex gap-4 pl-0 lg:pl-20 flex-col flex-1">
              <div className="flex gap-2 flex-col">
                <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                  {paragraph}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustryChallengeHero;
