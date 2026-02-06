import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@yems-ui/core";
import {
  Users,
  Calendar,
  ShieldCheck,
  ArrowRight,
  Globe,
  Zap,
  Layout,
  MousePointer2,
} from "lucide-react";
import { MeshBackground } from "../components/ui/MeshBackground";
import { BentoGrid, BentoCard } from "../components/ui/BentoGrid";

export default function Landing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      ref={containerRef}
      className="relative min-h-[200vh] bg-white text-gray-900 font-sans selection:bg-true-azure/10 selection:text-true-azure"
    >
      <MeshBackground />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-2xl border-b border-white/20 px-6 h-20 flex items-center justify-between transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-linear-to-br from-true-azure to-dark-amethyst flex items-center justify-center shadow-lg shadow-true-azure/20">
            <span className="text-white font-bold text-xl font-outfit">F</span>
          </div>
          <span className="font-bold text-2xl tracking-tight font-outfit text-gray-900">
            Flock
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <Link to="#" className="hover:text-true-azure transition-colors">
            Solutions
          </Link>
          <Link to="#" className="hover:text-true-azure transition-colors">
            Pricing
          </Link>
          <Link to="#" className="hover:text-true-azure transition-colors">
            Resources
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" className="font-outfit">
              Login
            </Button>
          </Link>
          <Link to="/login">
            <Button className="font-outfit rounded-full px-6 bg-true-azure hover:bg-true-azure/90 shadow-xl shadow-true-azure/20 transition-all hover:scale-105 active:scale-95">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10 text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-true-azure/5 border border-true-azure/10 text-true-azure text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Zap className="h-3 w-3 fill-true-azure" /> New: v4.0 is now live
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl lg:text-8xl font-bold tracking-tight text-gray-900 mb-8 font-playfair leading-[1.1]"
            >
              Management <br />
              <span className="italic font-normal text-true-azure">
                refined.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-xl text-gray-500 max-w-xl mb-12 font-outfit leading-relaxed"
            >
              The most sophisticated church management experience ever built.
              Minimalist design meets powerful architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-wrap gap-6"
            >
              <Link to="/login">
                <Button
                  size="xl"
                  className="h-16 px-10 rounded-2xl text-lg font-bold shadow-[0_20px_50px_-15px_rgba(80,0,171,0.3)] bg-true-azure hover:bg-true-azure/90 group transition-all hover:scale-105 active:scale-95"
                >
                  Start Building{" "}
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl border border-gray-100 flex items-center justify-center bg-white shadow-sm group-hover:shadow-md transition-all">
                  <Globe className="h-6 w-6 text-gray-400 group-hover:text-true-azure transition-colors" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-gray-900 leading-tight">
                    Watch Demo
                  </p>
                  <p className="text-xs text-gray-400">2 min walkthrough</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 bg-true-azure/10 blur-[120px] rounded-full mix-blend-multiply" />
            <img
              src="/assets/hero-3d.png"
              alt="Premium UI Dashboard"
              className="relative z-10 w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)] rounded-[4rem]"
            />
            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white/80 backdrop-blur-xl p-4 rounded-3xl shadow-2xl border border-white/50 z-20 hidden lg:block"
            >
              <Users className="h-8 w-8 text-true-azure" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bento Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair mb-4 leading-tight">
              Designed for impact. <br />
              <span className="text-true-azure">Architected for scale.</span>
            </h2>
            <p className="text-gray-500 font-outfit text-lg max-w-2xl">
              We've rethought church management from the ground up, focusing on
              the interactions that matter most to your community.
            </p>
          </div>

          <BentoGrid>
            <BentoCard
              title="Global Search"
              description="Find members, groups, and events in milliseconds with our lightning-fast unified search."
              header={
                <div className="flex items-center justify-center w-full h-full opacity-20">
                  <Globe className="w-24 h-24" />
                </div>
              }
              className="md:col-span-2"
              icon={<MousePointer2 className="h-4 w-4" />}
            />
            <BentoCard
              title="Responsive UI"
              description="Manage your congregation from any device with our fluid layouts."
              header={
                <div className="flex items-center justify-center w-full h-full opacity-20">
                  <Layout className="w-24 h-24" />
                </div>
              }
              icon={<Layout className="h-4 w-4" />}
            />
            <BentoCard
              title="Secure Core"
              description="Enterprise-grade security powered by Supabase architecture."
              header={
                <div className="flex items-center justify-center w-full h-full opacity-20">
                  <ShieldCheck className="w-24 h-24" />
                </div>
              }
              icon={<ShieldCheck className="h-4 w-4" />}
            />
            <BentoCard
              title="Smart Analytics"
              description="Real-time growth insights and attendance tracking visualized through sleek dashboards."
              header={
                <div className="flex items-center justify-center w-full h-full opacity-20">
                  <Zap className="w-24 h-24" />
                </div>
              }
              className="md:col-span-2"
              icon={<Zap className="h-4 w-4" />}
            />
          </BentoGrid>
        </div>
      </section>

      {/* Social Proof / Partners */}
      <section className="py-20 border-y border-gray-100 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-12">
            Trusted by modern congregations
          </p>
          <div className="flex flex-wrap justify-center gap-16 md:gap-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <span className="text-2xl font-bold font-playfair">
              GRACE CHURCH
            </span>
            <span className="text-2xl font-bold font-playfair">
              THE FLOCK NY
            </span>
            <span className="text-2xl font-bold font-playfair">EPIC LIFE</span>
            <span className="text-2xl font-bold font-playfair">
              ZION CENTER
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-true-azure/10 to-transparent pointer-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl lg:text-7xl font-bold font-playfair mb-10 tracking-tight">
            Ready to transform?
          </h2>
          <Link to="/login">
            <Button
              size="xl"
              className="h-20 px-16 rounded-3xl text-xl font-bold shadow-2xl shadow-true-azure/30 bg-true-azure hover:bg-true-azure/90 transition-all hover:scale-105 active:scale-95"
            >
              Launch Your Flock
            </Button>
          </Link>
          <p className="mt-8 text-gray-400 font-outfit">
            Free for up to 50 members. No credit card required.
          </p>
        </div>
      </section>

      <footer className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-true-azure flex items-center justify-center">
                <span className="text-white font-bold text-xl font-outfit">
                  F
                </span>
              </div>
              <span className="font-bold text-2xl tracking-tight font-outfit text-gray-900">
                Flock
              </span>
            </div>
            <p className="text-gray-500 text-sm font-outfit max-w-[200px]">
              Modernizing spiritual growth through technology.
            </p>
          </div>
          {["Product", "Company", "Community"].map((col) => (
            <div key={col} className="space-y-4">
              <h4 className="font-bold text-gray-900 uppercase tracking-widest text-[10px]">
                {col}
              </h4>
              <ul className="space-y-2 text-sm text-gray-500 font-outfit">
                <li className="hover:text-true-azure cursor-pointer">
                  Features
                </li>
                <li className="hover:text-true-azure cursor-pointer">
                  Security
                </li>
                <li className="hover:text-true-azure cursor-pointer">
                  Privacy
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-50 flex justify-between items-center text-xs text-gray-400 font-outfit uppercase tracking-widest">
          <span>© 2026 OGUNDAIRO & CO</span>
          <div className="flex gap-8">
            <span>Twitter</span>
            <span>In</span>
            <span>Dribbble</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
