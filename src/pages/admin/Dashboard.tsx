import { useRef } from "react";
import { motion } from "motion/react";
import { Button, Badge, Card, AvatarGroup } from "devign";
import { Calendar, TrendingUp, Activity, UserPlus } from "lucide-react";
import {
  UsersIcon as AnimUsersIcon,
  DollarSignIcon as AnimDollarIcon,
} from "lucide-animated";

/* ─── Animated stat icon wrapper ─── */
function AnimStatIcon({
  icon: Icon,
  color,
  bg,
}: {
  icon: typeof AnimUsersIcon;
  color: string;
  bg: string;
}) {
  const ref = useRef<{ startAnimation: () => void; stopAnimation: () => void }>(
    null,
  );
  return (
    <div
      className="w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
      style={{ background: bg, color }}
      onMouseEnter={() => ref.current?.startAnimation()}
      onMouseLeave={() => ref.current?.stopAnimation()}
    >
      <Icon ref={ref} size={24} />
    </div>
  );
}

/* ─── Static fallback icon wrapper (for icons not in lucide-animated) ─── */
function StaticStatIcon({
  icon: Icon,
  color,
  bg,
}: {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bg: string;
}) {
  return (
    <div
      className="w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 group/icon"
      style={{ background: bg, color }}
    >
      <Icon className="h-6 w-6 transition-transform duration-300 group-hover/icon:rotate-12 group-hover/icon:scale-110" />
    </div>
  );
}

const stats = [
  {
    title: "Total Members",
    value: "1,234",
    description: "+12% from last month",
    trend: { value: 12, isPositive: true },
    renderIcon: (c: string, bg: string) => (
      <AnimStatIcon icon={AnimUsersIcon} color={c} bg={bg} />
    ),
    color: "var(--color-primary)",
    bgColor: "rgba(79, 70, 229, 0.08)",
  },
  {
    title: "Active Groups",
    value: "24",
    description: "+2 new groups",
    trend: { value: 2, isPositive: true },
    renderIcon: (c: string, bg: string) => (
      <StaticStatIcon icon={Activity} color={c} bg={bg} />
    ),
    color: "var(--color-accent-sky)",
    bgColor: "rgba(14, 165, 233, 0.08)",
  },
  {
    title: "Monthly Offerings",
    value: "₦2.4M",
    description: "+18% vs target",
    trend: { value: 18, isPositive: true },
    renderIcon: (c: string, bg: string) => (
      <AnimStatIcon icon={AnimDollarIcon} color={c} bg={bg} />
    ),
    color: "var(--color-accent-amber)",
    bgColor: "rgba(245, 158, 11, 0.08)",
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
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-heading">
            Dashboard
          </h1>
          <p className="mt-2 font-medium text-muted-custom">
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
            className="rounded-xl h-12 px-6 font-bold glass-panel text-muted-custom"
          >
            Reports
          </Button>
          <Button className="rounded-xl h-12 px-6 bg-primary hover:bg-primary-hover text-white shadow-xl shadow-primary/20 font-bold active:scale-95 transition-all">
            <UserPlus className="mr-2 h-5 w-5" /> Add Member
          </Button>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={stat.title}
            hover
            className="p-6 rounded-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex justify-between items-start mb-4">
              {stat.renderIcon(stat.color, stat.bgColor)}
              {stat.trend && (
                <Badge
                  variant={
                    stat.trend.isPositive ? "soft-success" : "soft-error"
                  }
                  dot
                >
                  {stat.trend.isPositive ? "+" : "-"}
                  {stat.trend.value}%
                </Badge>
              )}
            </div>
            <p className="text-sm font-bold uppercase tracking-widest leading-none mb-1 text-faint">
              {stat.title}
            </p>
            <h3 className="text-3xl font-bold text-heading">{stat.value}</h3>
            <p className="text-xs font-medium mt-2 text-faint">
              {stat.description}
            </p>
          </Card>
        ))}
      </div>

      {/* Recent members + Attendance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-8 rounded-4xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-heading">
                Recent Members
              </h3>
              <p className="text-sm font-medium text-faint">
                Latest additions to your congregation.
              </p>
            </div>
            <Button variant="ghost" className="font-bold text-primary">
              View All
            </Button>
          </div>

          <div className="space-y-3">
            {recentMembers.map((member, i) => (
              <motion.div
                key={member.email}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-4 rounded-2xl transition-all group"
                style={{
                  background: "var(--color-glass-bg)",
                  border: "1px solid var(--color-glass-border-subtle)",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-bold"
                    style={{
                      background: "var(--color-primary-soft)",
                      color: "var(--color-primary)",
                    }}
                  >
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ color: "var(--color-text-heading)" }}
                    >
                      {member.name}
                    </p>
                    <p
                      className="text-xs font-medium"
                      style={{ color: "var(--color-text-faint)" }}
                    >
                      {member.email}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className="text-xs font-bold mb-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {member.date}
                  </p>
                  <Badge
                    variant={
                      member.status === "New" ? "soft-primary" : "soft-success"
                    }
                    dot
                  >
                    {member.status}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Attendance */}
        <Card hover className="p-8 rounded-4xl">
          <div className="mb-8">
            <h3
              className="text-2xl font-bold"
              style={{ color: "var(--color-text-heading)" }}
            >
              Attendance
            </h3>
            <p
              className="text-sm font-medium"
              style={{ color: "var(--color-text-faint)" }}
            >
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
                className="flex-1 rounded-t-xl opacity-80 hover:opacity-100 transition-opacity shadow-lg"
                style={{
                  background: `linear-gradient(to top, var(--color-primary), #818cf8)`,
                  boxShadow: "0 4px 12px rgba(79, 70, 229, 0.1)",
                }}
              />
            ))}
          </div>
          <div
            className="mt-4 flex justify-between text-[10px] font-bold uppercase tracking-widest px-2"
            style={{ color: "var(--color-text-faint)" }}
          >
            <span>Mon</span>
            <span>Sun</span>
          </div>

          <div
            className="mt-8 p-4 rounded-2xl flex items-center gap-3"
            style={{
              background: "var(--color-primary-soft)",
              border: "1px solid rgba(79, 70, 229, 0.1)",
            }}
          >
            <TrendingUp
              className="h-5 w-5"
              style={{ color: "var(--color-primary)" }}
            />
            <p
              className="text-xs font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              Attendance is up 12% from last week!
            </p>
          </div>
        </Card>
      </div>

      {/* Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          hover
          className="p-8 rounded-4xl text-white overflow-hidden relative"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary), #6366f1)",
          }}
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
        </Card>

        <Card hover className="p-8 rounded-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{
                background: "rgba(245, 158, 11, 0.1)",
                color: "var(--color-accent-amber)",
              }}
            >
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <h4
                className="text-xl font-bold"
                style={{ color: "var(--color-text-heading)" }}
              >
                Bible Study
              </h4>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--color-text-faint)" }}
              >
                Wed · 6 PM
              </p>
            </div>
          </div>
          <AvatarGroup
            avatars={Array.from({ length: 29 }, (_, i) => ({
              src: `https://i.pravatar.cc/100?u=ev${i + 1}`,
              fallback: `M${i + 1}`,
              alt: "Member",
            }))}
            max={5}
            size="md"
            className="mb-6"
          />
          <Button
            variant="ghost"
            className="w-full font-bold rounded-xl h-12 text-primary border border-primary/15"
          >
            View Details
          </Button>
        </Card>

        <Card
          hover
          className="p-8 rounded-4xl flex flex-col items-center justify-center text-center space-y-4"
        >
          <div
            className="w-16 h-16 rounded-3xl flex items-center justify-center shadow-lg text-accent-emerald"
            style={{
              background: "rgba(16, 185, 129, 0.08)",
              boxShadow: "0 4px 12px rgba(16, 185, 129, 0.08)",
            }}
          >
            <Activity className="h-8 w-8" />
          </div>
          <h4 className="text-xl font-bold text-heading">Branch Health</h4>
          <p className="text-sm font-medium text-faint">
            Your branch operations are running optimally across all sectors.
          </p>
          <Button variant="ghost" className="font-bold text-accent-emerald">
            Operations Hub
          </Button>
        </Card>
      </div>
    </div>
  );
}
