import { MoveRight, PhoneCall, Section } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

interface PageHeroProps {
  title: string;
  subtitle: string;
  content: string;
  action: string;
  imgSrc?: string;
}

export const PageHero = ({title, subtitle,content,action,imgSrc}: PageHeroProps) => (
  <div className="w-full  py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline">{title}</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              {subtitle}
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              {content}
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4">
              {action} <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="flex rounded-md aspect-square items-center">
          {imgSrc && (
            <Image
              src={imgSrc}
              alt="feature"
              width={800}
              height={800}
              className="object-contain"
            />
          )}
        </div>
      </div>
    </div>
  </div>
);