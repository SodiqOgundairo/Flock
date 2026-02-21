/**
 * AdminHeader — Three variants in one component:
 *
 * variant="default"    — Search bar + notifications + settings + profile pill (Admin Dashboard)
 * variant="minimal"    — Just page title + breadcrumb + action slot (inner pages)
 * variant="landing"    — Floating nav with logo + links + CTA buttons (Landing / public pages)
 *
 * Usage:
 *   <AdminHeader variant="default" />
 *   <AdminHeader variant="minimal" title="Members" breadcrumb={["Admin", "Members"]} />
 *   <AdminHeader variant="landing" />
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Bell, Settings, Search, Menu, ChevronRight, X } from "lucide-react";
import { Button, Card } from "devign";
import { cn } from "@/lib/utils";
import { LOGO } from "@/lib/assets";

// ============================================================================
// SHARED — Notification Badge
// ============================================================================
function NotificationBell({ count = 3 }: { count?: number }) {
  return (
    <Card
      hover
      className="relative w-11 h-11 rounded-xl flex items-center justify-center cursor-pointer active:scale-95 transition-all"
    >
      <Bell className="h-4.5 w-4.5 text-muted" />
      {count > 0 && (
        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent-coral" />
      )}
    </Card>
  );
}

// ============================================================================
// SHARED — Profile Pill
// ============================================================================
interface ProfilePillProps {
  name?: string;
  role?: string;
  avatar?: string;
  initials?: string;
  size?: "sm" | "md";
}

function ProfilePill({
  name = "Admin User",
  role = "Super Admin",
  avatar,
  initials = "AD",
  size = "md",
}: ProfilePillProps) {
  return (
    <Card
      hover
      className={cn(
        "flex items-center gap-2.5 cursor-pointer",
        size === "md"
          ? "px-2 py-1.5 pr-4 rounded-xl"
          : "px-1.5 py-1 pr-3 rounded-lg",
      )}
    >
      <div
        className={cn(
          "rounded-lg flex items-center justify-center text-white font-bold shadow-md shadow-primary/20",
          size === "md" ? "w-8 h-8 text-xs" : "w-7 h-7 text-[10px]",
        )}
        style={{
          background: avatar
            ? "none"
            : "linear-gradient(135deg, var(--color-primary), #6366f1)",
        }}
      >
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-full h-full rounded-lg object-cover"
          />
        ) : (
          initials
        )}
      </div>
      <div className="hidden sm:block text-left">
        <p className="text-sm font-bold leading-none text-heading">{name}</p>
        <p className="text-[10px] font-bold uppercase tracking-widest mt-0.5 text-faint">
          {role}
        </p>
      </div>
    </Card>
  );
}

// ============================================================================
// VARIANT: DEFAULT — standard admin header with search
// ============================================================================
interface DefaultHeaderProps {
  userName?: string;
  userRole?: string;
  userAvatar?: string;
  notificationCount?: number;
  onMobileMenuOpen?: () => void;
  className?: string;
}

export function AdminHeaderDefault({
  userName = "Admin User",
  userRole = "Super Admin",
  userAvatar,
  notificationCount = 3,
  onMobileMenuOpen,
  className,
}: DefaultHeaderProps) {
  return (
    <header
      className={cn("flex items-center justify-between gap-4 mb-8", className)}
    >
      {/* Search */}
      <div className="flex-1 max-w-xl relative hidden md:block group">
        <div className="rounded-2xl flex items-center overflow-hidden h-12 bg-dark/40 backdrop-blur-2xl border border-glass-border-subtle">
          <Search className="absolute left-4 h-4.5 w-4.5 pointer-events-none text-faint" />
          <input
            type="text"
            placeholder="Search specifically for..."
            className="w-full h-full pl-11 pr-4 bg-transparent border-none outline-none text-sm font-medium placeholder:font-medium text-body"
          />
        </div>
      </div>

      <div className="flex items-center gap-2.5 ml-auto text-faint">
        <NotificationBell count={notificationCount} />

        <Card
          hover
          className="w-11 h-11 rounded-xl flex items-center justify-center cursor-pointer active:scale-95 transition-all"
        >
          <Settings className="h-4.5 w-4.5 text-faint" />
        </Card>

        <div className="h-7 w-px hidden sm:block bg-glass-border-subtle" />

        <ProfilePill
          name={userName}
          role={userRole}
          avatar={userAvatar}
          initials={userName
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()}
        />

        {/* Mobile hamburger */}
        <Card
          hover
          onClick={onMobileMenuOpen}
          className="lg:hidden w-11 h-11 rounded-xl flex items-center justify-center cursor-pointer"
        >
          <Menu className="h-5 w-5 text-heading" />
        </Card>
      </div>
    </header>
  );
}

// ============================================================================
// VARIANT: MINIMAL — page title + breadcrumb + optional actions
// ============================================================================
interface MinimalHeaderProps {
  title: string;
  breadcrumb?: string[];
  actions?: React.ReactNode;
  className?: string;
}

export function AdminHeaderMinimal({
  title,
  breadcrumb = [],
  actions,
  className,
}: MinimalHeaderProps) {
  return (
    <header
      className={cn("flex items-center justify-between gap-4 mb-8", className)}
    >
      <div>
        {breadcrumb.length > 0 && (
          <nav className="flex items-center gap-1 mb-1.5">
            {breadcrumb.map((crumb, i) => (
              <span key={crumb} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="h-3 w-3 text-faint" />}
                <span
                  className={cn(
                    "text-[11px] font-semibold uppercase tracking-widest",
                    i === breadcrumb.length - 1
                      ? ""
                      : "cursor-pointer hover:text-primary transition-colors",
                  )}
                >
                  {crumb}
                </span>
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-2xl font-extrabold tracking-tight text-heading">
          {title}
        </h1>
      </div>

      {actions && <div className="flex items-center gap-2.5">{actions}</div>}
    </header>
  );
}

// ============================================================================
// VARIANT: LANDING — floating pill nav for public pages
// ============================================================================
interface LandingHeaderProps {
  links?: { label: string; href: string }[];
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  className?: string;
}

export function AdminHeaderLanding({
  links = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
  ],
  ctaPrimary = { label: "Get Started", href: "/register" },
  ctaSecondary = { label: "Login", href: "/login" },
  className,
}: LandingHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className={cn(
          "fixed top-4 lg:top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 bg-amber-100/5 rounded-lg backdrop-blur-2xl",
          className,
        )}
      >
        <Card className="h-14 lg:h-16 px-5 lg:px-8 flex items-center justify-between rounded-full">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={LOGO.svg}
              alt="Flock"
              className="h-8 lg:h-9 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="px-4 py-1.5 rounded-lg text-[13px] text-faint font-semibold transition-all hover:text-primary-hover hover:scale-105"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <Link to={ctaSecondary.href}>
              <Button variant="ghost">{ctaSecondary.label}</Button>
            </Link>
            <Link to={ctaPrimary.href}>
              <Button variant="primary" className="text-dark">
                {ctaPrimary.label}
                <span className="ml-1 opacity-70">→</span>
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:bg-white/30"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </Card>
      </nav>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute top-4 left-4 right-4 rounded-xl p-5 flex flex-col gap-3 bg-light/20 backdrop-blur-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-1">
              <img src={LOGO.svg} alt="Flock" className="h-8 w-auto" />
              <button
                className="w-8 h-8 rounded-full flex items-center justify-center text-secondary hover:bg-white/50"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
              >
                <Button
                  variant="ghost"
                  className="w-full py-4 h-full flex items-start justify-start"
                >
                  {link.label}
                </Button>
              </Link>
            ))}

            <div className="flex items-center gap-2 mt-2">
              <Link to={ctaSecondary.href} className="w-full">
                <Button variant="ghost" className="w-full">
                  {ctaSecondary.label}
                </Button>
              </Link>
              <Link to={ctaPrimary.href} className="w-full">
                <Button variant="primary" className="w-full">
                  {ctaPrimary.label}
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

// ============================================================================
// UNIFIED EXPORT — single component with variant prop
// ============================================================================
type AdminHeaderVariant = "default" | "minimal" | "landing";

interface AdminHeaderProps {
  variant?: AdminHeaderVariant;
  // default props
  userName?: string;
  userRole?: string;
  userAvatar?: string;
  notificationCount?: number;
  onMobileMenuOpen?: () => void;
  // minimal props
  title?: string;
  breadcrumb?: string[];
  actions?: React.ReactNode;
  // landing props
  links?: { label: string; href: string }[];
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  className?: string;
}

export function AdminHeader({
  variant = "default",
  ...props
}: AdminHeaderProps) {
  if (variant === "minimal") {
    return (
      <AdminHeaderMinimal
        title={props.title || ""}
        breadcrumb={props.breadcrumb}
        actions={props.actions}
        className={props.className}
      />
    );
  }
  if (variant === "landing") {
    return (
      <AdminHeaderLanding
        links={props.links}
        ctaPrimary={props.ctaPrimary}
        ctaSecondary={props.ctaSecondary}
        className={props.className}
      />
    );
  }
  return (
    <AdminHeaderDefault
      userName={props.userName}
      userRole={props.userRole}
      userAvatar={props.userAvatar}
      notificationCount={props.notificationCount}
      onMobileMenuOpen={props.onMobileMenuOpen}
      className={props.className}
    />
  );
}

export default AdminHeader;
