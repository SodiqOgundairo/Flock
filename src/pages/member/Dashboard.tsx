import { motion } from "motion/react";
import { Card, CardContent, StatCard, Button } from "@yems-ui/core";
import {
  Calendar,
  Heart,
  Users,
  ArrowRight,
  TrendingUp,
  Clock,
  MapPin,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { BentoGrid, BentoCard } from "../../components/ui/BentoGrid";

export default function MemberDashboard() {
  return (
    <div className="space-y-10 pb-12">
      {/* Personalized Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-4 w-4 text-sunflower-gold fill-sunflower-gold" />
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest font-outfit">
              Welcome back
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight font-playfair leading-tight">
            Hi, Sodiq <span className="text-true-azure">Ogundairo</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <Button
            variant="outline"
            className="rounded-2xl h-12 px-6 border-white/50 bg-white/20 backdrop-blur-xl font-bold font-outfit text-gray-600"
          >
            Settings
          </Button>
          <Button className="rounded-2xl h-12 px-8 bg-true-azure hover:bg-true-azure/90 shadow-xl shadow-true-azure/20 font-bold font-outfit">
            Check-in Now
          </Button>
        </motion.div>
      </div>

      {/* Hero Personal Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Events Attended"
          value="12"
          description="Consistent in 12 services"
          trend={{ value: 15, isPositive: true }}
          icon={<Calendar className="h-5 w-5" />}
          className="border-white/50 bg-white/40 backdrop-blur-2xl rounded-[2.5rem] shadow-xl shadow-gray-200/20"
        />
        <StatCard
          title="Total Giving"
          value="₦24.5k"
          description="Blessed to be a blessing"
          trend={{ value: 8, isPositive: true }}
          icon={<Heart className="h-5 w-5" />}
          className="border-white/50 bg-white/40 backdrop-blur-2xl rounded-[2.5rem] shadow-xl shadow-gray-200/20"
        />
        <StatCard
          title="Lekki Bible Study"
          value="15"
          description="Members in your group"
          icon={<Users className="h-5 w-5" />}
          className="border-white/50 bg-white/40 backdrop-blur-2xl rounded-[2.5rem] shadow-xl shadow-gray-200/20"
        />
      </div>

      {/* Content Architecture - Bento Style */}
      <BentoGrid className="md:auto-rows-[22rem]">
        {/* Upcoming Events Widget */}
        <BentoCard
          title="Upcoming Fellowship"
          description="Don't miss out on these spiritual moments."
          className="md:col-span-2 p-0 overflow-hidden"
          header={
            <div className="w-full h-full p-8 grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto">
              <EventWidget
                title="Sunday Morning Service"
                date="Tomorrow"
                time="9:00 AM"
                color="bg-true-azure text-white"
              />
              <EventWidget
                title="Lekki Bible Study"
                date="Friday"
                time="7:00 PM"
                color="bg-white/40 backdrop-blur-xl border border-white/50 text-gray-900"
              />
              <EventWidget
                title="Worship Night"
                date="Jan 25"
                time="6:00 PM"
                color="bg-white/40 backdrop-blur-xl border border-white/50 text-gray-900"
              />
              <div className="p-6 rounded-[2rem] border border-dashed border-gray-200 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-true-azure transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-true-azure/5 transition-colors">
                  <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-true-azure transition-colors" />
                </div>
                <span className="text-xs font-bold text-gray-400 mt-2 uppercase tracking-widest font-outfit">
                  View All Events
                </span>
              </div>
            </div>
          }
          icon={<Calendar className="h-4 w-4" />}
        />

        {/* Group Spotlight Widget */}
        <BentoCard
          title="Your Cell Group"
          description="Growth happens in circles."
          header={
            <div className="w-full h-full p-8 flex flex-col justify-between bg-dark-amethyst text-white rounded-[2.5rem] overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-true-azure/20 blur-3xl rounded-full" />
              <div className="relative z-10">
                <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mb-2 font-outfit">
                  Lekki Bible Study
                </p>
                <h3 className="text-3xl font-bold font-playfair leading-tight mb-4">
                  Finding Purpose
                </h3>
                <div className="flex items-center gap-2 text-xs font-medium text-white/70">
                  <MapPin className="h-3 w-3" />
                  <span>Victory Estate, Phase 1</span>
                </div>
              </div>
              <Button className="relative z-10 w-full rounded-xl h-12 bg-white text-dark-amethyst hover:bg-white/90 font-bold font-outfit border-none">
                Message Group
              </Button>
            </div>
          }
          icon={<Users className="h-4 w-4" />}
        />

        {/* Giving Highlight */}
        <BentoCard
          title="Giving Records"
          description="Your contributions last 30 days."
          header={
            <div className="w-full h-full p-8 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-3xl bg-true-azure/10 flex items-center justify-center text-true-azure mb-4 shadow-inner shadow-true-azure/20">
                <Heart className="h-8 w-8 fill-true-azure animate-pulse" />
              </div>
              <p className="text-2xl font-bold text-gray-900 font-outfit">
                ₦24,500.00
              </p>
              <p className="text-xs font-medium text-gray-400 mt-1 uppercase tracking-widest">
                General Offering
              </p>
              <Button
                variant="ghost"
                className="mt-4 text-true-azure font-bold h-10 hover:bg-true-azure/5"
              >
                View History
              </Button>
            </div>
          }
          icon={<Heart className="h-4 w-4" />}
        />

        {/* Verse Widget */}
        <BentoCard
          title="Verse of the Day"
          description="Nourishment for your soul."
          className="md:col-span-2"
          header={
            <div className="w-full h-full p-10 flex flex-col justify-center">
              <blockquote className="text-2xl font-bold font-playfair italic text-gray-800 leading-relaxed">
                "The Lord is my shepherd; I shall not want. He maketh me to lie
                down in green pastures."
              </blockquote>
              <p className="mt-4 text-sm font-bold text-true-azure font-outfit uppercase tracking-[0.2em]">
                — Psalm 23:1-2
              </p>
            </div>
          }
          icon={<Sparkles className="h-4 w-4" />}
        />
      </BentoGrid>
    </div>
  );
}

function EventWidget({
  title,
  date,
  time,
  color,
}: {
  title: string;
  date: string;
  time: string;
  color: string;
}) {
  return (
    <div
      className={`p-6 rounded-[2rem] flex flex-col justify-between shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer ${color}`}
    >
      <div>
        <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mb-1 font-outfit">
          {date} · {time}
        </p>
        <h4 className="text-lg font-bold font-outfit leading-tight">{title}</h4>
      </div>
      <div className="flex justify-end mt-4">
        <ArrowRight className="h-5 w-5 opacity-40" />
      </div>
    </div>
  );
}
