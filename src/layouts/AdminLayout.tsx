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
import { MeshBackground } from "../components/ui/MeshBackground";

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
    <div className="min-h-screen relative font-sans text-gray-900 overflow-hidden">
      <MeshBackground />

      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex fixed left-6 top-6 bottom-6 w-72 flex-col z-40">
        <div className="flex-1 bg-white/40 backdrop-blur-2xl border border-white/50 rounded-[2.5rem] shadow-2xl p-8 flex flex-col gap-10">
          <div className="flex items-center gap-3 px-2">
            <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-true-azure to-dark-amethyst flex items-center justify-center shadow-lg shadow-true-azure/20">
              <span className="text-white font-bold text-2xl font-outfit">
                F
              </span>
            </div>
            <span className="font-bold text-2xl tracking-tight font-outfit">
              Flock
            </span>
          </div>

          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`
                  flex items-center gap-3 px-5 py-4 rounded-2xl text-sm font-bold transition-all group relative
                  ${
                    isActive(item.href)
                      ? "bg-true-azure text-white shadow-xl shadow-true-azure/20"
                      : "text-gray-400 hover:text-gray-900 hover:bg-white/50"
                  }
                `}
              >
                <item.icon
                  className={`h-5 w-5 transition-transform group-hover:scale-110 ${isActive(item.href) ? "text-white" : ""}`}
                />
                <span className="font-outfit">{item.label}</span>
                {isActive(item.href) && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute right-4 w-1.5 h-1.5 rounded-full bg-white"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/20">
            <div className="bg-white/40 rounded-3xl p-4 border border-white/50 mb-4">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">
                Active Branch
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-sunflower-gold/20 flex items-center justify-center text-sunflower-gold">
                  <ChevronRight className="h-4 w-4" />
                </div>
                <span className="text-sm font-bold text-gray-900 truncate font-outfit">
                  Lekki Branch
                </span>
              </div>
            </div>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 h-14 rounded-2xl text-red-500 hover:bg-red-50/50 hover:text-red-600 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span className="font-outfit font-bold">Sign Out</span>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-[22rem] p-6 lg:p-10 min-h-screen relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <div className="flex-1 max-w-xl relative hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300 pointer-events-none" />
            <input
              type="text"
              placeholder="Quick search anything..."
              className="w-full h-14 pl-12 pr-4 bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-true-azure/20 transition-all font-outfit"
            />
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <div className="flex gap-2 mr-2">
              <button className="w-12 h-12 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 flex items-center justify-center group transition-all hover:scale-105">
                <Bell className="h-5 w-5 text-gray-400 group-hover:text-true-azure transition-colors" />
              </button>
              <button className="w-12 h-12 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 flex items-center justify-center group transition-all hover:scale-105">
                <Settings className="h-5 w-5 text-gray-400 group-hover:text-true-azure transition-colors" />
              </button>
            </div>

            <div className="h-10 w-px bg-black/5 mx-2" />

            <div className="flex items-center gap-4 bg-white/40 backdrop-blur-xl border border-white/50 p-1.5 pr-5 rounded-2xl shadow-sm transition-all hover:shadow-md">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-true-azure flex items-center justify-center text-white font-bold font-outfit ring-4 ring-white/30">
                AD
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-bold text-gray-900 leading-none font-outfit">
                  Admin
                </p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                  Super Admin
                </p>
              </div>
            </div>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-12 h-12 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 flex items-center justify-center"
            >
              <Menu className="h-6 w-6 text-gray-900" />
            </button>
          </div>
        </header>

        {/* Dynamic Page Content */}
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
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-80 bg-white/80 backdrop-blur-2xl z-[70] p-8 lg:hidden"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-true-azure flex items-center justify-center shadow-lg shadow-true-azure/20">
                    <span className="text-white font-bold text-xl font-outfit">
                      F
                    </span>
                  </div>
                  <span className="font-bold text-2xl tracking-tight font-outfit">
                    Flock
                  </span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-6 w-6 text-gray-400" />
                </button>
              </div>

              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      flex items-center gap-4 p-5 rounded-2xl text-lg font-bold transition-all
                      ${
                        isActive(item.href)
                          ? "bg-true-azure text-white"
                          : "text-gray-500 hover:bg-gray-100/50"
                      }
                    `}
                  >
                    <item.icon className="h-6 w-6" />
                    <span className="font-outfit">{item.label}</span>
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
