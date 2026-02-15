import React from "react";
import { motion } from "motion/react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type MotionDivProps = ComponentProps<typeof motion.div>;

interface GlassCardProps extends MotionDivProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: "none" | "lift" | "glow" | "scale";
  intensity?: "low" | "medium" | "high";
  gradient?: "none" | "subtle" | "primary" | "accent";
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      children,
      className,
      hoverEffect = "lift",
      intensity = "medium",
      gradient = "none",
      ...props
    },
    ref,
  ) => {
    const intensityStyles = {
      low: "glass-panel opacity-80",
      medium: "glass-panel",
      high: "glass-panel",
    };

    const hoverStyles = {
      none: "",
      lift: "glass-panel-hover",
      glow: "hover:shadow-[0_0_40px_rgba(79,70,229,0.2)] hover:border-[var(--color-primary)]/20 transition-all duration-300",
      scale: "hover:scale-[1.02] transition-transform duration-300",
    };

    const gradientStyles = {
      none: "",
      subtle: "",
      primary: "border-[var(--color-primary)]/15",
      accent: "border-amber-400/15",
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          intensityStyles[intensity],
          hoverStyles[hoverEffect],
          gradientStyles[gradient],
          className,
        )}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        {...props}
      >
        {/* Inner shimmer layer */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-glass-inner-glow), transparent)",
          }}
        />
        {children}
      </motion.div>
    );
  },
);

GlassCard.displayName = "GlassCard";
