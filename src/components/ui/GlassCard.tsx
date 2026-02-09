import React from "react";
import { motion } from "motion/react";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
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
    // Map intensity to base classes
    const intensityStyles = {
      low: "glass-panel bg-white/20 backdrop-blur-sm",
      medium: "glass-panel", // Uses our utility
      high: "glass-panel bg-white/80 backdrop-blur-xl border-white/60 shadow-xl",
    };

    // Map hover effects
    const hoverStyles = {
      none: "",
      lift: "glass-panel-hover",
      glow: "hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:border-primary/30 transition-all duration-300",
      scale: "hover:scale-[1.02] transition-transform duration-300",
    };

    // Optional subtle gradient overlays
    const gradientStyles = {
      none: "",
      subtle: "bg-linear-to-br from-white/40 to-white/10",
      primary:
        "bg-linear-to-br from-primary/5 to-transparent border-primary/20",
      accent:
        "bg-linear-to-br from-amber-400/5 to-transparent border-amber-400/20",
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
        {/* Optional: Inner shine reflection for extra glassiness */}
        <div className="absolute inset-0 bg-linear-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {children}
      </motion.div>
    );
  },
);

GlassCard.displayName = "GlassCard";
