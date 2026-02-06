import { motion } from "motion/react";
import {
  StatCard,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
} from "@yems-ui/core";
import {
  Users,
  Calendar,
  DollarSign,
  UserCircle,
  TrendingUp,
  ArrowRight,
  Activity,
  UserPlus,
} from "lucide-react";
import { BentoGrid, BentoCard } from "../../components/ui/BentoGrid";

// Mock data - will be replaced with Supabase queries
const stats = [
  {
    title: "Total Members",
    value: "1,234",
    description: "+12% from last month",
    trend: { value: 12, isPositive: true },
    icon: Users,
  },
  {
    title: "Active Groups",
    value: "24",
    description: "+2 new groups",
    trend: { value: 2, isPositive: true },
    icon: UserCircle,
  },
  {
    title: "Monthly Offerings",
    value: "₦2.4M",
    description: "+18% vs target",
    trend: { value: 18, isPositive: true },
    icon: DollarSign,
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
    <div className="space-y-10 pb-12">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight font-outfit">
            Overview
          </h1>
          <p className="text-gray-500 mt-2 font-outfit">
            Real-time branch analytics and member activity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <Button
            variant="outline"
            className="rounded-2xl h-12 px-6 border-white/50 bg-white/20 backdrop-blur-xl font-bold font-outfit"
          >
            Download Report
          </Button>
          <Button className="rounded-2xl h-12 px-6 bg-true-azure hover:bg-true-azure/90 shadow-xl shadow-true-azure/20 font-bold font-outfit">
            <UserPlus className="mr-2 h-5 w-5" /> Add Member
          </Button>
        </motion.div>
      </div>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <StatCard
              title={stat.title}
              value={stat.value}
              description={stat.description}
              trend={stat.trend}
              icon={<stat.icon className="h-5 w-5" />}
              className="border-white/50 bg-white/40 backdrop-blur-2xl rounded-[2rem] shadow-xl shadow-gray-200/20"
            />
          </motion.div>
        ))}
      </div>

      {/* Main Insights Bento */}
      <BentoGrid className="md:auto-rows-[25rem]">
        {/* Recent Activity Feed */}
        <BentoCard
          title="Recent Members"
          description="Latest additions to your church congregation."
          className="md:col-span-2 p-0 overflow-hidden"
          header={
            <div className="w-full h-full p-6 space-y-4 overflow-y-auto">
              {recentMembers.map((member, i) => (
                <motion.div
                  key={member.email}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  className="flex items-center justify-between p-4 bg-white/30 rounded-[1.5rem] border border-white/50 hover:bg-white/50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-true-azure/20 to-true-azure/5 flex items-center justify-center text-true-azure font-bold font-outfit">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 font-outfit">
                        {member.name}
                      </p>
                      <p className="text-xs text-gray-400 font-medium">
                        {member.email}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-gray-500 font-outfit">
                      {member.date}
                    </p>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${member.status === "New" ? "bg-true-azure/10 text-true-azure" : "bg-green-100 text-green-600"}`}
                    >
                      {member.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          }
          icon={<Users className="h-4 w-4" />}
        />

        {/* Attendance Insight */}
        <BentoCard
          title="Attendance Trends"
          description="Consistent weekly growth pattern."
          header={
            <div className="w-full h-full p-8 flex flex-col justify-end">
              <div className="flex items-end gap-2 h-40">
                {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1 + 0.8, type: "spring" }}
                    className="flex-1 bg-linear-to-t from-true-azure to-true-azure/40 rounded-t-lg opacity-80 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
              <div className="mt-4 flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">
                <span>Mon</span>
                <span>Sun</span>
              </div>
            </div>
          }
          icon={<TrendingUp className="h-4 w-4" />}
        />

        {/* Quick Actions / Integration */}
        <BentoCard
          title="Automated Reports"
          description="Scheduled synchronization with Google Sheets."
          header={
            <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-6 text-center">
              <div className="w-16 h-16 rounded-3xl bg-green-50 flex items-center justify-center text-green-500 shadow-lg shadow-green-500/10">
                <Activity className="h-8 w-8" />
              </div>
              <p className="text-xs font-medium text-gray-500">
                Your weekly reconciliation report is ready for review.
              </p>
              <Button
                variant="ghost"
                className="text-true-azure font-bold h-10"
              >
                Review Now
              </Button>
            </div>
          }
          icon={<Activity className="h-4 w-4" />}
        />

        {/* Events Widget */}
        <BentoCard
          title="Coming Up"
          description="Next 48 hours in the branch."
          className="md:col-span-2 p-0 overflow-hidden"
          header={
            <div className="w-full h-full p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-linear-to-br from-true-azure to-dark-amethyst rounded-[2rem] text-white shadow-xl shadow-true-azure/20 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold opacity-60 uppercase tracking-[0.2em] mb-2">
                    Tomorrow · 10 AM
                  </p>
                  <h4 className="text-xl font-bold font-playfair mb-1">
                    Covenant Service
                  </h4>
                </div>
                <Button
                  variant="outline"
                  className="w-fit h-10 border-white/20 text-white hover:bg-white/10 rounded-xl px-4 text-xs font-bold"
                >
                  Manage Event
                </Button>
              </div>
              <div className="p-5 bg-white/30 backdrop-blur-xl border border-white/50 rounded-[2rem] flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">
                    Wednesday · 6 PM
                  </p>
                  <h4 className="text-xl font-bold text-gray-900 font-playfair mb-1 font-outfit">
                    Bible Study
                  </h4>
                </div>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[8px] font-bold"
                    >
                      U{i}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-true-azure text-white flex items-center justify-center text-[8px] font-bold">
                    +12
                  </div>
                </div>
              </div>
            </div>
          }
          icon={<Calendar className="h-4 w-4" />}
        />
      </BentoGrid>
    </div>
  );
}
