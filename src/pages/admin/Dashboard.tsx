import { motion } from "motion/react";
import { Button } from "@yems-ui/core";
import {
  Users,
  Calendar,
  DollarSign,
  UserCircle,
  TrendingUp,
  Activity,
  UserPlus,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

// Mock data - will be replaced with Supabase queries
const stats = [
  {
    title: "Total Members",
    value: "1,234",
    description: "+12% from last month",
    trend: { value: 12, isPositive: true },
    icon: Users,
    gradient: "primary" as const,
  },
  {
    title: "Active Groups",
    value: "24",
    description: "+2 new groups",
    trend: { value: 2, isPositive: true },
    icon: UserCircle,
    gradient: "subtle" as const,
  },
  {
    title: "Monthly Offerings",
    value: "₦2.4M",
    description: "+18% vs target",
    trend: { value: 18, isPositive: true },
    icon: DollarSign,
    gradient: "accent" as const,
  },
];

const recentMembers = [
  {
    name: "Sodiq Ogundairo",
    email: "sodiq@example.com",
    date: "2 mins ago",
    status: "Active",
  },
  {
    name: "Adewale John",
    email: "ade@example.com",
    date: "45 mins ago",
    status: "New",
  },
  {
    name: "Blessing Okon",
    email: "blessing@example.com",
    date: "2 hours ago",
    status: "Active",
  },
  {
    name: "Emeka Obi",
    email: "emeka@example.com",
    date: "5 hours ago",
    status: "New",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-10 pb-12 font-outfit">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Dashboard
          </h1>
          <p className="text-gray-500 mt-2 font-medium">
            Real-time branch analytics and member activity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <Button
            variant="ghost"
            className="rounded-xl h-12 px-6 bg-white/40 hover:bg-white/60 border border-white/40 text-gray-600 font-bold"
          >
            Reports
          </Button>
          <Button className="rounded-xl h-12 px-6 bg-primary hover:bg-indigo-700 shadow-xl shadow-primary/20 font-bold active:scale-95 transition-all">
            <UserPlus className="mr-2 h-5 w-5" /> Add Member
          </Button>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <GlassCard
            key={stat.title}
            intensity="medium"
            gradient={stat.gradient}
            className="p-6 rounded-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex justify-between items-start mb-4">
              <div
                className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center",
                  stat.gradient === "primary"
                    ? "bg-primary/10 text-primary"
                    : "bg-white/50 text-gray-600",
                )}
              >
                <stat.icon className="h-6 w-6" />
              </div>
              {stat.trend && (
                <div
                  className={cn(
                    "px-2 py-1 rounded-lg text-[10px] font-bold",
                    stat.trend.isPositive
                      ? "bg-mint-green/10 text-mint-green"
                      : "bg-rose-500/10 text-rose-500",
                  )}
                >
                  {stat.trend.isPositive ? "+" : "-"}
                  {stat.trend.value}%
                </div>
              )}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">
                {stat.title}
              </p>
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-xs text-gray-400 font-medium mt-2">
                {stat.description}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Main Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Members Feed */}
        <GlassCard
          className="lg:col-span-2 p-8 rounded-[2.5rem]"
          hoverEffect="none"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Recent Members
              </h3>
              <p className="text-sm text-gray-400 font-medium">
                Latest additions to your church congregation.
              </p>
            </div>
            <Button variant="ghost" className="text-primary font-bold">
              View All
            </Button>
          </div>

          <div className="space-y-4">
            {recentMembers.map((member, i) => (
              <motion.div
                key={member.email}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-4 bg-white/30 rounded-2xl border border-white/40 hover:bg-white/60 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary/10 to-indigo-600/5 flex items-center justify-center text-primary font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      {member.name}
                    </p>
                    <p className="text-xs text-gray-400 font-medium">
                      {member.email}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-500 mb-1">
                    {member.date}
                  </p>
                  <span
                    className={cn(
                      "text-[10px] font-bold px-2 py-0.5 rounded-full border",
                      member.status === "New"
                        ? "bg-primary/5 text-primary border-primary/10"
                        : "bg-mint-green/5 text-mint-green border-mint-green/10",
                    )}
                  >
                    {member.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        {/* Attendance Trends */}
        <GlassCard className="p-8 rounded-[2.5rem]" hoverEffect="glow">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Attendance</h3>
            <p className="text-sm text-gray-400 font-medium">
              Consistent growth pattern.
            </p>
          </div>

          <div className="h-48 flex items-end gap-2 px-2">
            {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                className="flex-1 bg-linear-to-t from-primary to-indigo-400 rounded-t-xl opacity-80 hover:opacity-100 transition-opacity shadow-lg shadow-primary/5"
              />
            ))}
          </div>
          <div className="mt-4 flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">
            <span>Mon</span>
            <span>Sun</span>
          </div>

          <div className="mt-8 p-4 bg-primary/5 rounded-2xl border border-primary/10 flex items-center gap-3">
            <TrendingUp className="h-5 w-5 text-primary" />
            <p className="text-xs font-bold text-primary">
              Attendance is up 12% from last week!
            </p>
          </div>
        </GlassCard>
      </div>

      {/* Events Quick View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GlassCard
          gradient="primary"
          className="p-8 rounded-[2.5rem] text-white overflow-hidden relative"
          hoverEffect="scale"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 blur-3xl rounded-full" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="mb-auto">
              <p className="text-[10px] font-bold opacity-60 uppercase tracking-[0.2em] mb-2">
                Tomorrow · 10 AM
              </p>
              <h4 className="text-3xl font-bold leading-tight mb-4 italic">
                Covenant Service
              </h4>
              <p className="text-sm opacity-80 font-medium">
                Lekki Branch Auditorium
              </p>
            </div>
            <Button className="mt-8 bg-white text-primary hover:bg-white/90 font-bold rounded-xl h-12">
              Manage Event
            </Button>
          </div>
        </GlassCard>

        <GlassCard className="p-8 rounded-[2.5rem]" hoverEffect="lift">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900">Bible Study</h4>
              <p className="text-sm text-gray-400 font-medium">Wed · 6 PM</p>
            </div>
          </div>
          <div className="flex -space-x-3 mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-4 border-white bg-gray-50 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={`https://i.pravatar.cc/100?u=ev${i}`}
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-4 border-white bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs font-bold">
              +24
            </div>
          </div>
          <Button
            variant="ghost"
            className="w-full text-indigo-600 font-bold border border-indigo-100 rounded-xl h-12"
          >
            View Details
          </Button>
        </GlassCard>

        <GlassCard
          className="p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center space-y-4"
          hoverEffect="glow"
        >
          <div className="w-16 h-16 rounded-4xl bg-mint-green/10 flex items-center justify-center text-mint-green shadow-lg shadow-mint-green/5">
            <Activity className="h-8 w-8" />
          </div>
          <h4 className="text-xl font-bold text-gray-900">Branch Health</h4>
          <p className="text-sm text-gray-400 font-medium">
            Your branch operations are running optimally across all sectors.
          </p>
          <Button variant="ghost" className="text-mint-green font-bold">
            Operations Hub
          </Button>
        </GlassCard>
      </div>
    </div>
  );
}
