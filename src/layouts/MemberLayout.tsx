import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@yems-ui/core";
import {
  Home,
  User,
  Calendar,
  Heart,
  Settings,
  Menu,
  X,
  LogOut,
  Bell,
  Search,
} from "lucide-react";
import { MeshBackground } from "@/components/ui/MeshBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";
import { LOGO } from "@/lib/assets";

const navItems = [
  { label: "Home", icon: Home, href: "/dashboard" },
  { label: "My Profile", icon: User, href: "/dashboard/profile" },
  { label: "Events", icon: Calendar, href: "/dashboard/events" },
  { label: "My Giving", icon: Heart, href: "/dashboard/giving" },
  { label: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export default function MemberLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen relative font-sans text-gray-900 overflow-hidden font-outfit">
      <MeshBackground />

      {/* Premium Top Bar - Floating Glass Card */}
      <header className="fixed top-4 lg:top-6 left-4 lg:left-8 right-4 lg:right-8 h-20 z-50">
        <GlassCard
          intensity="medium"
          hoverEffect="none"
          className="w-full h-full flex items-center justify-between px-6 lg:px-10 rounded-4xl border-white/40 shadow-xl"
        >
          <div className="flex items-center gap-10">
            <Link to="/dashboard" className="flex items-center group">
              <img
                src={LOGO.svg}
                alt="Flock"
                className="h-10 lg:h-12 w-auto transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all relative group",
                      active
                        ? "text-primary bg-primary/5 shadow-sm"
                        : "text-gray-500 hover:text-gray-900 hover:bg-white/40",
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute bottom-1 left-5 right-5 h-0.5 bg-primary rounded-full shadow-[0_0_8px_rgba(79,70,229,0.5)]"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* Search - Subtle Glass */}
            <div className="hidden md:flex items-center bg-white/30 rounded-xl px-4 py-2 border border-white/40 focus-within:border-primary/30 focus-within:bg-white/50 transition-all">
              <Search className="h-4 w-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search anything..."
                className="bg-transparent border-none text-xs focus:ring-0 w-32 outline-none font-medium text-gray-700 placeholder:text-gray-400"
              />
            </div>

            {/* Notification */}
            <button className="relative w-10 h-10 rounded-xl bg-white/40 border border-white/40 flex items-center justify-center group transition-all hover:bg-white/60 hover:scale-105 active:scale-95">
              <Bell className="h-5 w-5 text-gray-500 group-hover:text-primary transition-colors" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white animate-pulse" />
            </button>

            <div className="h-8 w-px bg-gray-200/50 hidden sm:block mx-1" />

            {/* User Profile */}
            <div className="flex items-center gap-3 pl-1">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary/20 to-indigo-600/20 border border-primary/20 flex items-center justify-center font-bold text-primary shadow-sm">
                SO
              </div>
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </GlassCard>
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-60 lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 z-70 lg:hidden"
            >
              <GlassCard
                intensity="high"
                className="h-full w-full rounded-l-4xl p-8 flex flex-col"
              >
                <div className="flex items-center justify-between mb-12">
                  <span className="font-bold text-2xl tracking-tight text-gray-900 border-b-2 border-primary/20 pb-1">
                    Menu
                  </span>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-2 hover:bg-black/5 rounded-full transition-colors"
                  >
                    <X className="h-6 w-6 text-gray-400" />
                  </button>
                </div>

                <div className="space-y-3 flex-1 overflow-y-auto pr-2 scrollbar-hide">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={cn(
                        "flex items-center gap-4 p-5 rounded-2xl text-xl font-bold transition-all",
                        isActive(item.href)
                          ? "bg-primary text-white shadow-xl shadow-primary/25"
                          : "text-gray-500 hover:bg-white/50 hover:text-primary",
                      )}
                    >
                      <item.icon className="h-6 w-6" />
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/20">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-4 h-16 rounded-2xl text-xl font-bold text-rose-500 hover:bg-rose-50/50 transition-all"
                  >
                    <LogOut className="h-6 w-6" />
                    Sign Out
                  </Button>
                </div>
              </GlassCard>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full pt-28 lg:pt-36 p-6 lg:p-10 relative z-10 min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
}
