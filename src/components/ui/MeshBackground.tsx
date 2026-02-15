import React from "react";
import { motion } from "motion/react";
import { useTheme } from "@/components/ThemeProvider";

export const MeshBackground: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden theme-transition"
      style={{ background: isDark ? "#0c0a1d" : "#f8f7f4" }}
    >
      {/* Base radial glow */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at 30% 20%, rgba(79,70,229,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(139,92,246,0.08) 0%, transparent 50%)"
            : "radial-gradient(ellipse at 30% 20%, rgba(79,70,229,0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(244,63,94,0.04) 0%, transparent 50%)",
        }}
      />

      {/* Orb 1 — Primary indigo */}
      <motion.div
        animate={{
          x: [-20, 40, -10, -20],
          y: [-20, 30, 10, -20],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(79,70,229,0.15) 0%, rgba(139,92,246,0.05) 50%, transparent 80%)"
            : "radial-gradient(circle, rgba(79,70,229,0.12) 0%, rgba(167,139,250,0.04) 50%, transparent 80%)",
          filter: "blur(80px)",
        }}
      />

      {/* Orb 2 — Warm rose */}
      <motion.div
        animate={{
          x: [20, -30, 10, 20],
          y: [10, -40, 20, 10],
          scale: [1.1, 0.9, 1.05, 1.1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] right-[-5%] w-[50vw] h-[50vw] rounded-full"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(244,63,94,0.1) 0%, rgba(251,113,133,0.03) 50%, transparent 80%)"
            : "radial-gradient(circle, rgba(244,63,94,0.08) 0%, rgba(253,164,175,0.03) 50%, transparent 80%)",
          filter: "blur(90px)",
        }}
      />

      {/* Orb 3 — Golden warmth */}
      <motion.div
        animate={{
          x: [-10, 20, -30, -10],
          y: [-30, 10, 40, -30],
          scale: [0.9, 1.1, 0.95, 0.9],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(245,158,11,0.1) 0%, rgba(252,211,77,0.03) 50%, transparent 80%)"
            : "radial-gradient(circle, rgba(245,158,11,0.08) 0%, rgba(253,230,138,0.03) 50%, transparent 80%)",
          filter: "blur(100px)",
        }}
      />

      {/* Orb 4 — Teal accent */}
      <motion.div
        animate={{
          x: [30, -20, 10, 30],
          y: [20, 10, -30, 20],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[45%] left-[35%] w-[35vw] h-[35vw] rounded-full"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(14,165,233,0.08) 0%, rgba(56,189,248,0.02) 50%, transparent 80%)"
            : "radial-gradient(circle, rgba(14,165,233,0.06) 0%, rgba(56,189,248,0.02) 50%, transparent 80%)",
          filter: "blur(80px)",
        }}
      />

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
          opacity: isDark ? 0.02 : 0.03,
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at center, transparent 40%, rgba(12,10,29,0.5) 100%)"
            : "radial-gradient(ellipse at center, transparent 40%, rgba(248,247,244,0.6) 100%)",
        }}
      />
    </div>
  );
};
