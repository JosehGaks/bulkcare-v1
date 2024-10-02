import { MoveDownLeft, MoveUpRight } from "lucide-react";

export interface Stat {
  title: string;
  subtitle: string;
  change: string;  // Represents the percentage change, e.g., +20.1%
  isPositive: boolean;  // Represents if the change is positive or negative
}

interface StatsProps {
  stats: Stat[];
}

const Stats: React.FC<StatsProps> = ({ stats }: StatsProps) => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 lg:gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex gap-0 flex-col justify-between p-6 border rounded-md">
            {stat.isPositive ? (
              <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
            ) : (
              <MoveDownLeft className="w-4 h-4 mb-10 text-destructive" />
            )}
            <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
              {stat.title}
              <span className="text-muted-foreground text-sm tracking-normal">
                {stat.change}
              </span>
            </h2>
            <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
              {stat.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Stats;