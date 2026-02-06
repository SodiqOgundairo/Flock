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
import { MeshBackground } from "../components/ui/MeshBackground";

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
    <div className="min-h-screen relative font-sans text-gray-900 overflow-hidden">
      <MeshBackground />

      {/* Premium Top Bar (Floating) */}
      <header className="fixed top-6 left-6 right-6 h-20 z-50">
        <div className="w-full h-full bg-white/40 backdrop-blur-2xl border border-white/50 rounded-[2rem] shadow-xl px-8 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link to="/dashboard" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-linear-to-br from-true-azure to-dark-amethyst flex items-center justify-center shadow-lg shadow-true-azure/20">
                <span className="text-white font-bold text-xl font-outfit">
                  F
                </span>
              </div>
              <span className="font-bold text-2xl tracking-tight font-outfit hidden sm:block">
                Flock
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`
                    px-5 py-2.5 rounded-xl text-sm font-bold transition-all font-outfit
                    ${
                      isActive(item.href)
                        ? "bg-true-azure text-white shadow-lg shadow-true-azure/10"
                        : "text-gray-500 hover:text-gray-900 hover:bg-white/50"
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-white/30 rounded-xl px-3 py-1.5 border border-white/40">
              <Search className="h-4 w-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none text-xs focus:ring-0 w-32 font-outfit"
              />
            </div>

            <button className="relative w-10 h-10 rounded-xl bg-white/40 flex items-center justify-center group transition-all hover:scale-105">
              <Bell className="h-5 w-5 text-gray-400 group-hover:text-true-azure transition-colors" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>

            <div className="h-8 w-px bg-black/5 mx-1" />

            <div className="flex items-center gap-3 pl-1">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-true-azure/10 border border-true-azure/20 flex items-center justify-center font-bold text-true-azure font-outfit">
                SO
              </div>
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-gray-900"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
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
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white/80 backdrop-blur-2xl z-[70] p-8 lg:hidden"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="font-bold text-2xl font-outfit">Menu</span>
                <button onClick={() => setSidebarOpen(false)}>
                  <X className="h-6 w-6 text-gray-400" />
                </button>
              </div>

              <div className="space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className="flex items-center gap-4 p-5 rounded-2xl text-xl font-bold text-gray-600 hover:bg-true-azure/5 hover:text-true-azure transition-all font-outfit"
                  >
                    <item.icon className="h-6 w-6" />
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="absolute bottom-12 left-8 right-8 pt-8 border-t border-black/5">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-4 h-16 rounded-2xl text-xl font-bold text-red-500 hover:bg-red-50/50 font-outfit"
                >
                  <LogOut className="h-6 w-6" />
                  Sign Out
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full pt-32 p-6 lg:p-10 relative z-10">
        <Outlet />
      </main>
    </div>
  );
}
