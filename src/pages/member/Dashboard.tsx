import { motion } from "motion/react";
import { Button } from "@yems-ui/core";
import {
  Calendar,
  Heart,
  Users,
  MapPin,
  Sparkles,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

export default function MemberDashboard() {
  return (
    <div className="space-y-10 pb-12 font-outfit">
      {/* Personalized Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-4 w-4 text-amber-400 fill-amber-400" />
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Member Dashboard
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
            Hello,{" "}
            <span className="text-primary italic font-normal">Sodiq.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <Button
            variant="ghost"
            className="rounded-xl h-12 px-6 bg-white/40 border border-white/40 text-gray-600 font-bold hover:bg-white/60"
          >
            Settings
          </Button>
          <Button className="rounded-xl h-12 px-8 bg-primary hover:bg-indigo-700 shadow-xl shadow-primary/20 font-bold active:scale-95 transition-all">
            Check-in Now
          </Button>
        </motion.div>
      </div>

      {/* Hero Personal Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard
          intensity="medium"
          className="p-6 rounded-[2.5rem]"
          hoverEffect="lift"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Calendar className="h-6 w-6" />
            </div>
            <div className="px-2 py-1 bg-mint-green/10 text-mint-green rounded-lg text-[10px] font-bold">
              +15%
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">12</h3>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">
            Events Attended
          </p>
        </GlassCard>

        <GlassCard
          intensity="medium"
          className="p-6 rounded-[2.5rem]"
          hoverEffect="lift"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500">
              <Heart className="h-6 w-6" />
            </div>
            <div className="px-2 py-1 bg-mint-green/10 text-mint-green rounded-lg text-[10px] font-bold">
              +8%
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">₦24.5k</h3>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">
            Total Giving
          </p>
        </GlassCard>

        <GlassCard
          intensity="medium"
          className="p-6 rounded-[2.5rem]"
          hoverEffect="lift"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-500">
              <Users className="h-6 w-6" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">15</h3>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">
            Lekki Bible Study
          </p>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Events */}
        <GlassCard
          className="lg:col-span-2 p-8 rounded-[2.5rem]"
          hoverEffect="none"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">Upcoming Fellowship</h3>
            <Button variant="ghost" className="text-primary font-bold">
              View Calendar
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <EventWidget
              title="Covenant Service"
              date="Tomorrow"
              time="9:00 AM"
              variant="primary"
            />
            <EventWidget
              title="Lekki Bible Study"
              date="Friday"
              time="7:00 PM"
              variant="glass"
            />
            <EventWidget
              title="Worship Night"
              date="Jan 25"
              time="6:00 PM"
              variant="glass"
            />
            <div className="p-6 rounded-4xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center group cursor-pointer hover:border-primary/40 hover:bg-primary/5 transition-all text-center">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary transition-all">
                <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-white" />
              </div>
              <p className="text-xs font-bold text-gray-400 mt-3 uppercase tracking-widest">
                More Moments
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Group Spotlight */}
        <GlassCard
          gradient="primary"
          className="p-8 rounded-[2.5rem] text-white flex flex-col justify-between relative overflow-hidden"
          hoverEffect="scale"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 blur-3xl rounded-full" />
          <div className="relative z-10">
            <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mb-2">
              Lekki Bible Study
            </p>
            <h3 className="text-3xl font-bold leading-tight mb-4 italic">
              Finding Purpose
            </h3>
            <div className="flex items-center gap-2 text-xs font-semibold text-white/70">
              <MapPin className="h-4 w-4" />
              <span>Victory Estate, Phase 1</span>
            </div>
          </div>
          <Button className="relative z-10 w-full rounded-xl h-14 bg-white text-primary hover:bg-white/90 font-bold mt-8 shadow-xl">
            Message Group
          </Button>
        </GlassCard>
      </div>

      {/* Spirit Nourishment */}
      <GlassCard
        intensity="low"
        className="p-10 rounded-[3rem] text-center max-w-4xl mx-auto"
        hoverEffect="glow"
      >
        <Sparkles className="h-10 w-10 text-amber-400 mx-auto mb-6" />
        <blockquote className="text-2xl lg:text-3xl font-bold font-playfair italic text-gray-800 leading-relaxed">
          "The Lord is my shepherd; I shall not want. He maketh me to lie down
          in green pastures."
        </blockquote>
        <div className="mt-6 inline-flex items-center gap-3">
          <div className="h-px w-8 bg-primary/20" />
          <p className="text-sm font-bold text-primary uppercase tracking-[0.2em]">
            Psalm 23:1-2
          </p>
          <div className="h-px w-8 bg-primary/20" />
        </div>
      </GlassCard>
    </div>
  );
}

function EventWidget({
  title,
  date,
  time,
  variant = "glass",
}: {
  title: string;
  date: string;
  time: string;
  variant?: "glass" | "primary";
}) {
  return (
    <div
      className={cn(
        "p-6 rounded-4xl flex flex-col justify-between transition-all hover:scale-[1.03] active:scale-95 cursor-pointer group shadow-sm",
        variant === "primary"
          ? "bg-primary text-white shadow-primary/20"
          : "bg-white/40 border border-white/60 hover:bg-white/60",
      )}
    >
      <div>
        <p
          className={cn(
            "text-[10px] font-bold uppercase tracking-widest mb-2",
            variant === "primary" ? "opacity-60" : "text-gray-400",
          )}
        >
          {date} · {time}
        </p>
        <h4 className="text-xl font-bold leading-tight">{title}</h4>
      </div>
      <div className="flex justify-end mt-4">
        <ArrowRight
          className={cn(
            "h-5 w-5 transition-transform group-hover:translate-x-1",
            variant === "primary" ? "opacity-40" : "opacity-20",
          )}
        />
      </div>
    </div>
  );
}
