import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

interface BentoCardProps {
  title: string;
  description: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  title,
  description,
  header,
  icon,
  className,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "row-span-1 border border-black/5 rounded-3xl group/bento transition duration-200 shadow-sm p-4 bg-white/40 backdrop-blur-xl border-white/40 justify-between flex flex-col space-y-4",
        className,
      )}
    >
      {header && (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-2xl bg-linear-to-br from-true-azure/5 to-white/10 overflow-hidden">
          {header}
        </div>
      )}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon && <div className="mb-2 text-true-azure">{icon}</div>}
        <div className="font-bold text-gray-900 mb-1 mt-2">{title}</div>
        <div className="font-normal text-gray-500 text-xs">{description}</div>
      </div>
    </motion.div>
  );
};
