import { useState, useRef, useCallback, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { createPortal } from "react-dom";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  CalendarDays,
  MessageSquare,
  Film,
  Globe,
  BookOpen,
  Heart,
  Wallet,
  BarChart2,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  ChevronDown,
} from "lucide-react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  Button,
  Card,
  Separator,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "devign";
import { cn } from "@/lib/utils";
import { LOGO } from "@/lib/assets";

interface SubItem {
  label: string;
  href: string;
}
interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string;
  sub?: SubItem[];
}

const NAV: NavItem[][] = [
  [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin",
      sub: [
        { label: "Overview", href: "/admin" },
        { label: "Key Metrics", href: "/admin/metrics" },
        { label: "Alerts and Tasks", href: "/admin/alerts" },
      ],
    },
  ],
  [
    {
      label: "Members",
      icon: Users,
      href: "/admin/members",
      sub: [
        { label: "All Members", href: "/admin/members" },
        { label: "New Members", href: "/admin/members/new" },
        { label: "Groups", href: "/admin/members/groups" },
        { label: "Directories", href: "/admin/members/directories" },
      ],
    },
    {
      label: "Attendance",
      icon: ClipboardList,
      href: "/admin/attendance",
      sub: [
        { label: "Check-in", href: "/admin/attendance" },
        { label: "Reports", href: "/admin/attendance/reports" },
        { label: "Trends", href: "/admin/attendance/trends" },
      ],
    },
    {
      label: "Programs",
      icon: CalendarDays,
      href: "/admin/programs",
      sub: [
        { label: "Upcoming", href: "/admin/programs" },
        { label: "Calendar", href: "/admin/programs/calendar" },
        { label: "Registration", href: "/admin/programs/registration" },
      ],
    },
  ],
  [
    {
      label: "Communications",
      icon: MessageSquare,
      href: "/admin/communications",
      sub: [
        { label: "Overview", href: "/admin/communications" },
        { label: "Key Metrics", href: "/admin/communications/metrics" },
        { label: "Alerts and Tasks", href: "/admin/communications/alerts" },
      ],
    },
    {
      label: "Media",
      icon: Film,
      href: "/admin/media",
      sub: [
        { label: "Library", href: "/admin/media" },
        { label: "Uploads", href: "/admin/media/uploads" },
        { label: "Streaming", href: "/admin/media/streaming" },
      ],
    },
    {
      label: "Community",
      icon: Globe,
      href: "/admin/community",
      sub: [
        { label: "Groups", href: "/admin/community" },
        { label: "Forums", href: "/admin/community/forums" },
        { label: "Events", href: "/admin/community/events" },
      ],
    },
    {
      label: "Discipleship",
      icon: BookOpen,
      href: "/admin/discipleship",
      sub: [
        { label: "Courses", href: "/admin/discipleship" },
        { label: "Mentorship", href: "/admin/discipleship/mentorship" },
        { label: "Resources", href: "/admin/discipleship/resources" },
      ],
    },
    {
      label: "Pastoral Care",
      icon: Heart,
      href: "/admin/pastoral-care",
      sub: [
        { label: "Requests", href: "/admin/pastoral-care" },
        { label: "Follow-ups", href: "/admin/pastoral-care/followups" },
        { label: "Counseling", href: "/admin/pastoral-care/counseling" },
      ],
    },
  ],
  [
    {
      label: "Finance",
      icon: Wallet,
      href: "/admin/finance",
      sub: [
        { label: "Offerings", href: "/admin/finance" },
        { label: "Budgets", href: "/admin/finance/budgets" },
        { label: "Reports", href: "/admin/finance/reports" },
      ],
    },
    {
      label: "Analytics",
      icon: BarChart2,
      href: "/admin/analytics",
      sub: [
        { label: "Dashboard", href: "/admin/analytics" },
        { label: "Reports", href: "/admin/analytics/reports" },
        { label: "Exports", href: "/admin/analytics/exports" },
      ],
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/admin/settings",
      sub: [
        { label: "General", href: "/admin/settings" },
        { label: "Users", href: "/admin/settings/users" },
        { label: "Integrations", href: "/admin/settings/integrations" },
      ],
    },
  ],
];

// Sub-item flyout — rendered via Portal to escape Card's overflow-hidden
function Flyout({
  items,
  show,
  current,
  anchorRef,
  onEnter,
  onLeave,
}: {
  items: SubItem[];
  show: boolean;
  current: string;
  anchorRef: React.RefObject<HTMLDivElement | null>;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const [pos, setPos] = useState({ top: 0, left: 0 });

  useLayoutEffect(() => {
    if (show && anchorRef.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      setPos({
        top: rect.top + rect.height / 2,
        left: rect.right + 4,
      });
    }
  }, [show, anchorRef]);

  return createPortal(
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: -8, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -8, scale: 0.96 }}
          transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
          className="fixed z-9999 min-w-[200px]"
          style={{
            top: pos.top,
            left: pos.left,
            transform: "translateY(-50%)",
          }}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          <div
            className="py-3 px-2 rounded-xl shadow-xl border border-white/50"
            style={{
              background:
                "linear-gradient(135deg, rgba(243, 237, 255, 0.95), rgba(255, 255, 255, 0.92))",
              backdropFilter: "blur(20px) saturate(180%)",
            }}
          >
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",
                  current === item.href
                    ? "text-primary"
                    : "text-muted-custom hover:text-heading hover:bg-white/50",
                )}
              >
                <span
                  className={cn(
                    "w-2 h-2 rounded-full shrink-0 transition-colors",
                    current === item.href
                      ? "bg-primary shadow-[0_0_6px_rgba(79,70,229,0.4)]"
                      : "bg-muted-foreground/30",
                  )}
                />
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

function NavRow({
  item,
  collapsed,
  active,
  current,
}: {
  item: NavItem;
  collapsed: boolean;
  active: boolean;
  current: string;
}) {
  const [hovered, setHovered] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const rowRef = useRef<HTMLDivElement>(null);

  const handleEnter = useCallback(() => {
    clearTimeout(timer.current);
    setHovered(true);
  }, []);

  const handleLeave = useCallback(() => {
    timer.current = setTimeout(() => setHovered(false), 150);
  }, []);

  const row = (
    <div
      ref={rowRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link
        to={item.href}
        className={cn(
          "flex items-center gap-3 rounded-xl transition-all duration-200 group relative",
          collapsed ? "px-2.5 py-2.5 justify-center" : "px-3.5 py-3",
          active ? "bg-primary/10" : "hover:bg-muted",
        )}
      >
        {active && (
          <motion.div
            layoutId="nav-active"
            className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-primary"
          />
        )}
        <item.icon
          className={cn(
            "shrink-0 h-5 w-5 transition-colors",
            !collapsed && "ml-1",
            active
              ? "text-primary"
              : "text-muted-foreground group-hover:text-foreground",
          )}
        />
        {!collapsed && (
          <>
            <span
              className={cn(
                "flex-1 text-sm font-semibold tracking-tight transition-colors",
                active
                  ? "text-heading"
                  : "text-muted-custom group-hover:text-heading",
              )}
            >
              {item.label}
            </span>
            {item.sub && (
              <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-40" />
            )}
          </>
        )}
      </Link>
      {item.sub && (
        <Flyout
          items={item.sub}
          show={hovered}
          current={current}
          anchorRef={rowRef}
          onEnter={handleEnter}
          onLeave={handleLeave}
        />
      )}
    </div>
  );

  // Wrap in devign Tooltip when collapsed (shows label on hover)
  if (collapsed) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{row}</TooltipTrigger>
        <TooltipContent side="right">{item.label}</TooltipContent>
      </Tooltip>
    );
  }
  return row;
}

export interface AdminSidebarProps {
  collapsed?: boolean;
  onCollapsedChange?: (v: boolean) => void;
  userName?: string;
  userRole?: string;
  userAvatar?: string;
}

export function AdminSidebar({
  collapsed: controlled,
  onCollapsedChange,
  userName = "Josephine Akigbe",
  userRole = "Pastor",
  userAvatar,
}: AdminSidebarProps) {
  const [internal, setInternal] = useState(false);
  const { pathname } = useLocation();
  const collapsed = controlled ?? internal;
  const toggle = () => {
    const v = !collapsed;
    setInternal(v);
    onCollapsedChange?.(v);
  };
  const isActive = (href: string) =>
    href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <TooltipProvider delayDuration={0}>
      <motion.aside
        animate={{ width: collapsed ? 72 : 272 }}
        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="fixed left-4 top-4 bottom-4 z-40"
      >
        {/* Sidebar shell — devign Card with glass override */}
        <Card className="flex flex-col h-full rounded-[28px] overflow-hidden p-3 gap-3 bg-white/70 dark:bg-black/40 backdrop-blur-2xl border-white/60 shadow-xl shadow-primary/5">
          {/* Logo + collapse toggle */}
          <div
            className={cn(
              "flex items-center px-1 pt-1",
              collapsed ? "justify-center" : "justify-between",
            )}
          >
            <img
              src={LOGO.svg}
              alt="Flock"
              className={collapsed ? "h-7 w-auto" : "h-9 w-auto"}
            />
            {!collapsed && (
              <Button
                size="icon"
                variant="ghost"
                onClick={toggle}
                className="w-8 h-8 rounded-xl"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            )}
          </div>
          {collapsed && (
            <Button
              size="icon"
              variant="ghost"
              onClick={toggle}
              className="w-8 h-8 rounded-xl mx-auto"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}

          {/* User profile — devign Avatar inside a Card pill */}
          <Card
            className={cn(
              "flex items-center gap-3 cursor-pointer hover:bg-muted/60 transition-colors bg-white/40 border-white/50",
              collapsed ? "justify-center p-2" : "p-3",
            )}
          >
            <Avatar className="w-9 h-9 shrink-0 ring-2 ring-white/60">
              {userAvatar && <AvatarImage src={userAvatar} alt={userName} />}
              <AvatarFallback
                className="text-white text-sm font-bold"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary), #818cf8)",
                }}
              >
                {initials}
              </AvatarFallback>
            </Avatar>
            {!collapsed && (
              <>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate text-heading">
                    {userName}
                  </p>
                  <p className="text-[11px] font-semibold italic text-primary mt-0.5">
                    {userRole}
                  </p>
                </div>
                <ChevronDown className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-40" />
              </>
            )}
          </Card>

          {/* Nav groups */}
          <nav className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-3 py-1">
            {NAV.map((group, gi) => (
              <div key={gi} className="flex flex-col gap-0.5">
                {gi > 0 && <Separator className="mx-2 mb-1 opacity-40" />}
                {group.map((item) => (
                  <NavRow
                    key={item.href}
                    item={item}
                    collapsed={collapsed}
                    active={isActive(item.href)}
                    current={pathname}
                  />
                ))}
              </div>
            ))}
          </nav>

          {/* Footer — branch switcher + sign out */}
          <div className="flex flex-col gap-1">
            {/* Branch pill — Card */}
            <Card
              className={cn(
                "flex items-center gap-3 cursor-pointer hover:bg-muted/60 transition-colors bg-white/40 border-white/50",
                collapsed ? "p-2 justify-center" : "p-3",
              )}
            >
              <div
                className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(245,158,11,0.12)",
                  color: "var(--color-accent-amber)",
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </div>
              {!collapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground leading-none mb-0.5">
                    Current Branch
                  </p>
                  <p
                    className="text-sm font-extrabold truncate"
                    style={{ color: "var(--color-accent-amber)" }}
                  >
                    Lekki Branch
                  </p>
                </div>
              )}
            </Card>

            {/* Sign out — devign Button */}
            <Button
              variant="ghost"
              onClick={() => {}}
              leftIcon={<LogOut className="h-4 w-4" />}
              className={cn(
                "w-full text-destructive hover:text-destructive hover:bg-destructive/8 justify-start",
                collapsed && "justify-center px-0",
              )}
            >
              {!collapsed && "Sign Out"}
            </Button>

            {!collapsed && (
              <div className="flex justify-between px-1 pb-1">
                <span className="text-[10px] text-muted-foreground">
                  Flock 1.0.1
                </span>
                <span className="text-[10px] text-muted-foreground">
                  by <span className="text-primary font-semibold">Gr8QM</span>
                </span>
              </div>
            )}
          </div>
        </Card>
      </motion.aside>
    </TooltipProvider>
  );
}
