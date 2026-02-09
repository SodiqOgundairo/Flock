import React from "react";
import { motion } from "framer-motion";
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
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto",
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
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        // Base glass card styling
        "row-span-1 rounded-4xl group/bento transition-all duration-300",
        "p-5 flex flex-col space-y-4",
        // Premium glassmorphism
        "bg-white/50 backdrop-blur-2xl",
        "border border-white/60",
        // Enhanced shadow system with glow
        "shadow-[0_8px_32px_rgba(31,38,135,0.1),inset_0_1px_0_rgba(255,255,255,0.6)]",
        "hover:shadow-[0_20px_50px_rgba(80,0,171,0.12),inset_0_1px_0_rgba(255,255,255,0.8)]",
        // Hover border highlight
        "hover:border-true-azure/20",
        className,
      )}
    >
      {header && (
        <div className="flex flex-1 w-full h-full min-h-24 rounded-2xl bg-linear-to-br from-true-azure/5 via-white/20 to-sunflower-gold/5 overflow-hidden border border-white/30">
          {header}
        </div>
      )}
      <div className="group-hover/bento:translate-x-2 transition-transform duration-300">
        {icon && (
          <div className="mb-2 text-true-azure/80 group-hover/bento:text-true-azure transition-colors">
            {icon}
          </div>
        )}
        <div className="font-bold text-gray-900 mb-1.5 mt-2 font-outfit tracking-tight">
          {title}
        </div>
        <div className="font-normal text-gray-500 text-xs leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
