import React from "react";
import { motion } from "motion/react";

export const MeshBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-radial-gradient from-white via-white to-gray-50 opacity-80" />

      {/* 
        LIQUID ORBS - SLOWER, SOFTER, MORE ORGANIC 
        Note: Using specific hex codes for maximum control over the gradient stops
      */}

      {/* 1. Primary Azure Fluid - The deep anchor */}
      <motion.div
        animate={{
          x: [-20, 40, -10, -20],
          y: [-20, 30, 10, -20],
          scale: [1, 1.1, 0.95, 1],
          rotate: [0, 10, -5, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 bg-purple-300"
        style={{
          background:
            "radial-gradient(circle, rgba(79,70,229,0.4) 0%, rgba(167,139,250,0.1) 70%, transparent 100%)",
        }}
      />

      {/* 2. Soft Coral Flow - Warmth & Humanity */}
      <motion.div
        animate={{
          x: [20, -30, 10, 20],
          y: [10, -40, 20, 10],
          scale: [1.1, 0.9, 1.05, 1.1],
          rotate: [0, -15, 5, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] right-[-5%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply filter blur-[90px] opacity-30 bg-rose-200"
        style={{
          background:
            "radial-gradient(circle, rgba(251,113,133,0.3) 0%, rgba(253,164,175,0.1) 60%, transparent 100%)",
        }}
      />

      {/* 3. Golden Sun Drift - Optimism & Energy */}
      <motion.div
        animate={{
          x: [-10, 20, -30, -10],
          y: [-30, 10, 40, -30],
          scale: [0.9, 1.1, 0.95, 0.9],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[110px] opacity-25 bg-amber-100"
        style={{
          background:
            "radial-gradient(circle, rgba(252,211,77,0.3) 0%, rgba(253,230,138,0.1) 60%, transparent 100%)",
        }}
      />

      {/* 4. Mint/Teal Whisper - Freshness */}
      <motion.div
        animate={{
          x: [30, -20, 10, 30],
          y: [20, 10, -30, 20],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] rounded-full mix-blend-multiply filter blur-[80px] opacity-20 bg-teal-200"
        style={{
          background:
            "radial-gradient(circle, rgba(45,212,191,0.25) 0%, rgba(153,246,228,0.1) 60%, transparent 100%)",
        }}
      />

      {/* 5. Deep Indigo Shadow - Depth & Contrast */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-15 bg-indigo-200"
        style={{
          background:
            "radial-gradient(circle, rgba(49,46,129,0.2) 0%, rgba(99,102,241,0.05) 60%, transparent 100%)",
        }}
      />

      {/* NOISE & TEXTURE OVERLAYS - ESSENTIAL FOR "PREMIUM" FEEL */}

      {/* Grain/Noise - Adds tactile feel, prevents banding */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none brightness-100 contrast-150" />

      {/* Subtle Grid - Adds technical structure (very faint) */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px_24px]" />

      {/* Vignette - Draws focus to center */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-white/60 pointer-events-none" />
    </div>
  );
};
