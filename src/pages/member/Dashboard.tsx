import { motion } from "motion/react";
import { Button, Badge } from "yems-ui";
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
            <Sparkles
              className="h-4 w-4"
              style={{
                color: "var(--color-accent-amber)",
                fill: "var(--color-accent-amber)",
              }}
            />
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--color-text-faint)" }}
            >
              Member Dashboard
            </span>
          </div>
          <h1
            className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            style={{ color: "var(--color-text-heading)" }}
          >
            Hello,{" "}
            <span className="italic font-normal text-gradient-primary">
              Sodiq.
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <Button
            variant="ghost"
            className="rounded-xl h-12 px-6 font-bold glass-panel text-text-muted"
          >
            Settings
          </Button>
          <Button className="rounded-xl h-12 px-8 bg-primary hover:bg-primary-hover text-white shadow-xl shadow-primary/20 font-bold active:scale-95 transition-all">
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-primary bg-primary-soft">
              <Calendar className="h-6 w-6" />
            </div>
            <Badge variant="soft-success" dot>
              +15%
            </Badge>
          </div>
          <h3
            className="text-3xl font-bold"
            style={{ color: "var(--color-text-heading)" }}
          >
            12
          </h3>
          <p
            className="text-sm font-bold uppercase tracking-widest mt-1"
            style={{ color: "var(--color-text-faint)" }}
          >
            Events Attended
          </p>
        </GlassCard>

        <GlassCard
          intensity="medium"
          className="p-6 rounded-[2.5rem]"
          hoverEffect="lift"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-2xl bg-[rgba(244,63,94,0.1)] flex items-center justify-center text-coral">
              <Heart className="h-6 w-6" />
            </div>
            <Badge variant="soft-success" dot>
              +8%
            </Badge>
          </div>
          <h3
            className="text-3xl font-bold"
            style={{ color: "var(--color-text-heading)" }}
          >
            ₦24.5k
          </h3>
          <p
            className="text-sm font-bold uppercase tracking-widest mt-1"
            style={{ color: "var(--color-text-faint)" }}
          >
            Total Giving
          </p>
        </GlassCard>

        <GlassCard
          intensity="medium"
          className="p-6 rounded-[2.5rem]"
          hoverEffect="lift"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-2xl bg-[rgba(245,158,11,0.1)] flex items-center justify-center text-amber">
              <Users className="h-6 w-6" />
            </div>
          </div>
          <h3
            className="text-3xl font-bold"
            style={{ color: "var(--color-text-heading)" }}
          >
            15
          </h3>
          <p
            className="text-sm font-bold uppercase tracking-widest mt-1"
            style={{ color: "var(--color-text-faint)" }}
          >
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
            <h3
              className="text-2xl font-bold"
              style={{ color: "var(--color-text-heading)" }}
            >
              Upcoming Fellowship
            </h3>
            <Button variant="ghost" className="font-bold text-primary">
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
            <div
              className="p-6 rounded-4xl border-2 border-dashed flex flex-col items-center justify-center group cursor-pointer hover:bg-primary-soft transition-all text-center"
              style={{ borderColor: "var(--color-glass-border)" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white"
                style={{
                  background: "var(--color-surface-sunken)",
                  color: "var(--color-text-muted)",
                }}
              >
                <ChevronRight className="h-5 w-5" />
              </div>
              <p
                className="text-xs font-bold mt-3 uppercase tracking-widest"
                style={{ color: "var(--color-text-faint)" }}
              >
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
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary), #6366f1)",
          }}
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
        <Sparkles
          className="h-10 w-10 mx-auto mb-6"
          style={{ color: "var(--color-accent-amber)" }}
        />
        <blockquote
          className="text-2xl lg:text-3xl font-bold font-playfair italic leading-relaxed"
          style={{ color: "var(--color-text-heading)" }}
        >
          "The Lord is my shepherd; I shall not want. He maketh me to lie down
          in green pastures."
        </blockquote>
        <div className="mt-6 inline-flex items-center gap-3">
          <div
            className="h-px w-8"
            style={{ background: "rgba(79, 70, 229, 0.2)" }}
          />
          <p
            className="text-sm font-bold uppercase tracking-[0.2em]"
            style={{ color: "var(--color-primary)" }}
          >
            Psalm 23:1-2
          </p>
          <div
            className="h-px w-8"
            style={{ background: "rgba(79, 70, 229, 0.2)" }}
          />
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
          ? "bg-primary text-white shadow-xl shadow-primary/20"
          : "glass-panel bg-glass-bg border-glass-border hover:bg-glass-bg-hover",
      )}
      style={
        variant !== "primary"
          ? {
              border: "1px solid var(--color-glass-border)",
            }
          : undefined
      }
    >
      <div>
        <p
          className={cn(
            "text-[10px] font-bold uppercase tracking-widest mb-2",
            variant === "primary" ? "opacity-60" : "",
          )}
          style={
            variant !== "primary"
              ? { color: "var(--color-text-faint)" }
              : undefined
          }
        >
          {date} · {time}
        </p>
        <h4
          className="text-xl font-bold leading-tight"
          style={
            variant !== "primary"
              ? { color: "var(--color-text-heading)" }
              : undefined
          }
        >
          {title}
        </h4>
      </div>
      <div className="flex justify-end mt-4">
        <ArrowRight
          className={cn(
            "h-5 w-5 transition-transform group-hover:translate-x-1",
            variant === "primary" ? "opacity-40" : "opacity-20",
          )}
          style={
            variant !== "primary"
              ? { color: "var(--color-text-heading)" }
              : undefined
          }
        />
      </div>
    </div>
  );
}
