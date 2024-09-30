import { Badge } from "../ui/badge";

const SectionTitle = ({
  subtitle,
  title,
  paragraph,
  width = "635px",
  center,
}: {
  subtitle?: string;
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
}) => {
  return (
    <div className="-mx-4 flex-wrap flex text-center justify-center items-center gap-4 flex-col">
    <Badge>{title}</Badge>
    <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
          {subtitle}
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
          {paragraph}
          </p>
        </div>
    </div>
  );
};

export default SectionTitle;
