import { Card, CardContent, CardTitle, CardDescription } from "devign";
import { cn } from "@/lib/utils";

export function BentoGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  title: string;
  description: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export function BentoCard({
  title,
  description,
  header,
  icon,
  className,
}: BentoCardProps) {
  return (
    <Card
      hover
      className={cn(
        "row-span-1 flex flex-col gap-4 p-5 group/bento",
        className,
      )}
    >
      {header && (
        <div className="flex-1 rounded-2xl overflow-hidden bg-primary/4 border border-border">
          {header}
        </div>
      )}
      <CardContent className="p-0 group-hover/bento:translate-x-1 transition-transform duration-300">
        {icon && <div className="mb-2 text-primary">{icon}</div>}
        <CardTitle className="mb-1">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
