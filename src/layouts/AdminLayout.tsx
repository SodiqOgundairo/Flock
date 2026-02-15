import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@yems-ui/core";
import {
  LayoutDashboard,
  Users,
  UserCircle,
  Calendar,
  DollarSign,
  Settings,
  Menu,
  X,
  Bell,
  Search,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { MeshBackground } from "@/components/ui/MeshBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";
import { LOGO } from "@/lib/assets";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
  { label: "Members", icon: Users, href: "/admin/members" },
  { label: "Groups", icon: UserCircle, href: "/admin/groups" },
  { label: "Events", icon: Calendar, href: "/admin/events" },
  { label: "Offerings", icon: DollarSign, href: "/admin/offerings" },
  { label: "Settings", icon: Settings, href: "/admin/settings" },
];

export default function AdminLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/admin") return location.pathname === "/admin";
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen relative font-sans overflow-hidden font-outfit">
      <MeshBackground />

      {/* Sidebar - Desktop */}
      <aside className="hidden lg:block fixed left-6 top-6 bottom-6 w-72 z-40">
        <GlassCard
          intensity="medium"
          hoverEffect="none"
          className="h-full flex flex-col gap-8 p-6 rounded-4xl"
        >
          {/* Logo */}
          <div className="flex items-center px-2 mb-2 group">
            <img
              src={LOGO.svg}
              alt="Flock"
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1.5 overflow-y-auto pr-2 scrollbar-hide">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all group relative",
                    active
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "hover:bg-primary/10",
                  )}
                  style={
                    !active ? { color: "var(--color-text-muted)" } : undefined
                  }
                >
                  <item.icon
                    className={cn(
                      "h-5 w-5 transition-transform group-hover:scale-110",
                      active ? "text-white" : "",
                    )}
                    style={
                      !active ? { color: "var(--color-text-faint)" } : undefined
                    }
                  />
                  <span>{item.label}</span>

                  {active && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute right-3 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div
            className="pt-6 space-y-4"
            style={{ borderTop: "1px solid var(--color-glass-border-subtle)" }}
          >
            {/* Branch Selector */}
            <div
              className="rounded-2xl p-3 flex items-center gap-3 transition-colors cursor-pointer group"
              style={{
                background: "var(--color-glass-bg)",
                border: "1px solid var(--color-glass-border-subtle)",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                style={{
                  background: "rgba(245, 158, 11, 0.1)",
                  color: "var(--color-accent-amber)",
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="text-[10px] font-bold uppercase tracking-widest leading-none mb-1"
                  style={{ color: "var(--color-text-faint)" }}
                >
                  Active Branch
                </p>
                <p
                  className="text-sm font-bold truncate"
                  style={{ color: "var(--color-text-heading)" }}
                >
                  Lekki Branch
                </p>
              </div>
            </div>

            <Button
              variant="ghost"
              className="w-full justify-start gap-3 h-12 rounded-xl text-red-500 hover:bg-red-50/50 dark:hover:bg-red-900/20 hover:text-red-600 transition-all"
            >
              <LogOut className="h-4 w-4" />
              <span className="font-semibold text-sm">Sign Out</span>
            </Button>
          </div>
        </GlassCard>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-80 p-4 lg:p-8 min-h-screen relative z-10 transition-all duration-300">
        {/* Header */}
        <header className="flex items-center justify-between mb-8 lg:mb-10 gap-4">
          {/* Search */}
          <div className="flex-1 max-w-xl relative hidden md:block group">
            <div className="glass-panel rounded-2xl flex items-center overflow-hidden h-14">
              <Search
                className="absolute left-4 h-5 w-5 pointer-events-none"
                style={{ color: "var(--color-text-faint)" }}
              />
              <input
                type="text"
                placeholder="Search specifically for..."
                className="w-full h-full pl-12 pr-4 bg-transparent border-none outline-none font-medium"
                style={{ color: "var(--color-text-body)" }}
              />
            </div>
          </div>

          <div className="flex items-center gap-3 lg:gap-4 ml-auto">
            <div className="flex gap-2">
              <GlassCard
                intensity="low"
                hoverEffect="lift"
                className="w-12 h-12 rounded-xl flex items-center justify-center active:scale-95 transition-all cursor-pointer"
              >
                <Bell
                  className="h-5 w-5"
                  style={{ color: "var(--color-text-muted)" }}
                />
              </GlassCard>
              <GlassCard
                intensity="low"
                hoverEffect="lift"
                className="w-12 h-12 rounded-xl flex items-center justify-center active:scale-95 transition-all cursor-pointer"
              >
                <Settings
                  className="h-5 w-5"
                  style={{ color: "var(--color-text-muted)" }}
                />
              </GlassCard>
            </div>

            <div
              className="h-8 w-px hidden sm:block"
              style={{ background: "var(--color-glass-border-subtle)" }}
            />

            {/* Profile Pill */}
            <GlassCard
              intensity="low"
              hoverEffect="lift"
              className="flex items-center gap-3 px-2 py-1.5 pr-4 rounded-xl cursor-pointer"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md shadow-primary/20"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary), #6366f1)",
                }}
              >
                AD
              </div>
              <div className="hidden sm:block text-left">
                <p
                  className="text-sm font-bold leading-none"
                  style={{ color: "var(--color-text-heading)" }}
                >
                  Admin User
                </p>
                <p
                  className="text-[10px] font-bold uppercase tracking-widest mt-0.5"
                  style={{ color: "var(--color-text-faint)" }}
                >
                  Super Admin
                </p>
              </div>
            </GlassCard>

            {/* Mobile menu trigger */}
            <GlassCard
              intensity="low"
              hoverEffect="scale"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-12 h-12 rounded-xl flex items-center justify-center"
            >
              <Menu
                className="h-6 w-6"
                style={{ color: "var(--color-text-heading)" }}
              />
            </GlassCard>
          </div>
        </header>

        {/* Page Content */}
        <div className="relative z-10">
          <Outlet />
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-60 lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-80 z-70 lg:hidden"
            >
              <GlassCard
                intensity="high"
                className="h-full w-full rounded-r-4xl p-6 flex flex-col"
              >
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-3">
                    <img src={LOGO.svg} alt="Flock" className="h-10 w-auto" />
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full transition-colors"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <nav className="flex-1 space-y-2">
                  {navItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-4 p-4 rounded-xl text-lg font-medium transition-all",
                          active
                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                            : "",
                        )}
                        style={
                          !active
                            ? { color: "var(--color-text-muted)" }
                            : undefined
                        }
                      >
                        <item.icon className="h-6 w-6" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>
              </GlassCard>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
