import { Badge } from "@/components/ui/badge";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero1 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
        <div className="bg-muted rounded-md w-full aspect-video h-full flex-1"></div>
        <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
          <div>
            <Badge>WE PUT CULTURE IN THE FOREFRONT</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl tracking-tighter lg:max-w-xl font-regular text-left">
            Our Story
            </h2>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
            Founded in 2017, Bulkcare is a company taking a modern approach to the outsourcing industry. Leveraging the 
            power of People and transformative processes that allow both extension and integration. We are changing perceptions 
            of what outsourcing is and can be, and we did that by building truly connected cultures in each of our locations, 
            and by simply treating our employees better. With Bulkcare, we are all a team and family, and you&apos;ll see that true 
            difference when partnering with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);




export const Hero2 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
      <div className="grid grid-cols-2 gap-8">
          <div className="bg-muted rounded-md aspect-square"></div>
          <div className="bg-muted rounded-md row-span-2"></div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline">BULKCARE ADVANTAGE</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
            Bulkcare&apos;s clear focus on People
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
            Bulkcare&apos;s clear focus on People as a Service model has led to our market leading position in BPO. 
            We use a modern approach to outsourcing. We created the company to change perceptions of what outsourcing is and can be.
            We have amazing cultures in each of our locations and treat employees better. When partnering with us, you and your customers 
            become part of our team and family. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)