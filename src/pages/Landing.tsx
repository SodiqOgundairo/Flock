import { useRef } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@yems-ui/core";
import {
  ShieldCheck,
  ArrowRight,
  Globe,
  Zap,
  Sparkles,
  Layers,
  Heart,
} from "lucide-react";
import { MeshBackground } from "@/components/ui/MeshBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import { LOGO } from "@/lib/assets";

export default function Landing() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-white text-gray-900 font-sans selection:bg-primary/10 selection:text-primary font-outfit"
    >
      <MeshBackground />

      {/* Premium Header */}
      <nav className="fixed top-4 lg:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
        <GlassCard
          intensity="medium"
          hoverEffect="none"
          className="h-16 lg:h-20 px-6 lg:px-10 flex items-center justify-between rounded-4xl border-white/40 shadow-xl"
        >
          <div className="flex items-center group">
            <img
              src={LOGO.svg}
              alt="Flock"
              className="h-10 lg:h-12 w-auto transition-transform group-hover:scale-105"
            />
          </div>

          <div className="hidden md:flex items-center gap-1">
            {["Products", "Pricing", "About"].map((item) => (
              <Link
                key={item}
                to="#"
                className="px-5 py-2 rounded-xl text-sm font-semibold text-gray-500 hover:text-primary hover:bg-white/40 transition-all"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login">
              <span className="text-sm font-bold text-gray-600 hover:text-primary transition-colors px-4 py-2 cursor-pointer">
                Login
              </span>
            </Link>
            <Link to="/login">
              <Button className="rounded-full px-6 bg-primary hover:bg-indigo-700 shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 text-sm font-bold h-10 lg:h-12">
                Get Started
              </Button>
            </Link>
          </div>
        </GlassCard>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Sparkles className="h-3 w-3 fill-primary" /> The future of
            community
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9] lg:px-20"
          >
            Liquid{" "}
            <span className="italic font-normal text-primary">Management.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl lg:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
          >
            A high-fidelity workspace for modern organizations. Experience the
            fluidity of "Liquid Glass" design combined with enterprise-grade
            performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/login">
              <Button className="h-16 lg:h-20 px-10 rounded-4xl text-xl font-bold shadow-2xl shadow-primary/30 bg-primary hover:bg-indigo-700 group transition-all hover:scale-105 active:scale-95">
                Join the Flock{" "}
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center shadow-sm overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/100?u=${i}`}
                    alt="user"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-primary flex items-center justify-center shadow-md text-white font-bold text-xs ring-2 ring-primary/20">
                +2k
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual - Floating UI Elements */}
        <div className="max-w-7xl mx-auto mt-24 relative lg:px-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="relative"
          >
            <GlassCard
              intensity="high"
              hoverEffect="none"
              className="w-full aspect-16/10 lg:aspect-21/9 rounded-4xl border-white/60 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden flex items-center justify-center bg-white/20"
            >
              <div className="text-center space-y-4">
                <Layers className="h-16 w-16 text-primary/40 mx-auto" />
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                  Premium Dashboard Preview
                </p>
              </div>

              {/* Floating Accents */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-10 left-10"
              >
                <GlassCard
                  intensity="medium"
                  className="p-4 rounded-2xl flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-mint-green/20 flex items-center justify-center text-mint-green">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">
                      Growth
                    </p>
                    <p className="text-sm font-bold">+124%</p>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-20 right-10"
              >
                <GlassCard
                  intensity="medium"
                  className="p-4 rounded-2xl flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-500">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">
                      Engagement
                    </p>
                    <p className="text-sm font-bold">High</p>
                  </div>
                </GlassCard>
              </motion.div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="p-10 space-y-6" hoverEffect="glow">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Globe className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold">Global Ready</h3>
              <p className="text-gray-500 leading-relaxed">
                Connect your community across borders with real-time translation
                and multi-region support.
              </p>
            </GlassCard>

            <GlassCard className="p-10 space-y-6" hoverEffect="glow">
              <div className="w-14 h-14 rounded-2xl bg-mint-green/10 flex items-center justify-center text-mint-green">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold">Unbreakable Security</h3>
              <p className="text-gray-500 leading-relaxed">
                Enterprise-grade encryption and automated compliance to keep
                your data safe.
              </p>
            </GlassCard>

            <GlassCard className="p-10 space-y-6" hoverEffect="glow">
              <div className="w-14 h-14 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-500">
                <Zap className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold">Reactive Core</h3>
              <p className="text-gray-500 leading-relaxed">
                Built on a ultra-low latency architecture for instant updates
                and zero lag.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <footer className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
              F
            </div>
            <span className="font-bold text-xl tracking-tight">Flock</span>
          </div>

          <div className="flex gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Contact</span>
          </div>

          <span className="text-xs text-gray-400">
            © 2026 FLOCK DESIGN SYSTEM
          </span>
        </div>
      </footer>
    </div>
  );
}
