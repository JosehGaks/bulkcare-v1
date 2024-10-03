import { FlagIcon, MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MoveDownLeft, MoveUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { IconCertificate, IconMoodSmile, IconPyramid } from "@tabler/icons-react";

const StatsisticsHero = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Kenya in numbers</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl tracking-tighter lg:max-w-xl font-regular text-left">
            Exciting statistics for growth and opportunities
            </h2>
            <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
            Take advantage of Kenya&apos;s unlimited potential for your business growth
            </p>
          </div>
          <Button>Get started now</Button>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-2">
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <IconMoodSmile className="w-4 h-4 mb-10 text-primary" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                56.7
                <span className="text-muted-foreground text-sm tracking-normal">
                  0.69% of the total world
                </span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Kenyan Population
              </p>
            </div>
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <IconPyramid className="w-4 h-4 mb-10 text-destructive" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                80%
                {/* <span className="text-muted-foreground text-sm tracking-normal">
                  -2%
                </span> */}
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Below Age 40
              </p>
            </div>
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <FlagIcon className="w-4 h-4 mb-10 text-primary" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                English
                {/* <span className="text-muted-foreground text-sm tracking-normal">
                  +8%
                </span> */}
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Official Language
              </p>
            </div>
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <IconCertificate className="w-4 h-4 mb-10 text-primary" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                50,000
                <span className="text-muted-foreground text-sm tracking-normal">
                  +2%
                </span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
               Graduates Annually
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StatsisticsHero;