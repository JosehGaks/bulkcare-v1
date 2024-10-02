import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const Feature = ({title, content, imgSrc}: {title: string; content: string, imgSrc: string}) => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
        <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">
          <Image src={imgSrc} alt="feature" fill className="object-contain"/>
        </div>
        <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
          <div>
            <Badge>Feature</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl tracking-tighter lg:max-w-xl font-regular text-left">
              {title}
            </h2>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);