import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router-dom";
import { Button, Card } from "devign";
import {
  ArrowRight,
  Globe,
  Zap,
  Sparkles,
  ShieldCheck,
  Users,
  BarChart3,
  Calendar,
  Heart,
  ChevronRight,
  Star,
  Church,
  BookOpen,
  Music,
} from "lucide-react";
import { MeshBackground } from "@/components/ui/MeshBackground";
import { HERO_IMAGES } from "@/lib/assets";
import AdminHeader from "@/components/ui/AdminHeader";
import AdminFooter from "@/components/ui/Adminfooter";

/* ============================================================================
   ANIMATED SECTION WRAPPER
   ============================================================================ */
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================================
   ANIMATED COUNTER — counts up on scroll
   ============================================================================ */
function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  const animate = useCallback(() => {
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  useEffect(() => {
    if (isInView) animate();
  }, [isInView, animate]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ============================================================================
   FEATURES DATA
   ============================================================================ */
const features = [
  {
    icon: Users,
    title: "Member Management",
    description:
      "Intelligent profiles, family linking, and automated follow-ups for your entire congregation.",
    color: "var(--color-primary)",
    bgColor: "rgba(79, 70, 229, 0.08)",
  },
  {
    icon: Calendar,
    title: "Event Scheduling",
    description:
      "Drag-and-drop calendars, RSVP tracking, and automated reminders for every service and event.",
    color: "var(--color-accent-sky)",
    bgColor: "rgba(14, 165, 233, 0.08)",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Track attendance, giving patterns, and engagement with dashboards that update live.",
    color: "var(--color-accent-emerald)",
    bgColor: "rgba(16, 185, 129, 0.08)",
  },
  {
    icon: Heart,
    title: "Giving & Tithes",
    description:
      "Secure donation portals with automated receipts, recurring gifts, and financial reporting.",
    color: "var(--color-accent-coral)",
    bgColor: "rgba(244, 63, 94, 0.08)",
  },
  {
    icon: Globe,
    title: "Multi-Branch Ready",
    description:
      "Manage multiple locations from one dashboard with branch-specific data isolation.",
    color: "var(--color-accent-amber)",
    bgColor: "rgba(245, 158, 11, 0.08)",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Role-based access, encrypted storage, and automated compliance reporting built in.",
    color: "var(--color-primary)",
    bgColor: "rgba(79, 70, 229, 0.08)",
  },
];

/* ============================================================================
   TESTIMONIALS DATA
   ============================================================================ */
const testimonials = [
  {
    quote:
      "Flock transformed how we manage our 3,000-member congregation. The analytics alone saved us countless hours.",
    author: "Pastor David Adeyemi",
    role: "Lead Pastor, Grace Chapel Lagos",
    avatar: "https://i.pravatar.cc/100?u=pastor1",
    rating: 5,
  },
  {
    quote:
      "The interface is unlike anything we've seen. Our admin team actually enjoys using the dashboard now.",
    author: "Sarah Okonkwo",
    role: "Church Administrator, Hillside Church",
    avatar: "https://i.pravatar.cc/100?u=admin1",
    rating: 5,
  },
  {
    quote:
      "Multi-branch management was always a pain. Flock made it seamless with real-time sync across all locations.",
    author: "Rev. Emmanuel Obiora",
    role: "Regional Overseer, Christ Embassy",
    avatar: "https://i.pravatar.cc/100?u=pastor2",
    rating: 5,
  },
];

/* ============================================================================
   STATS DATA
   ============================================================================ */
const stats = [
  { value: 2400, suffix: "+", label: "Churches" },
  { value: 850, suffix: "K+", label: "Members Managed" },
  { value: 99.9, suffix: "%", label: "Uptime" },
  { value: 4.9, suffix: "★", label: "Rating" },
];

/* ============================================================================
   MARQUEE LOGOS — church denominations / orgs
   ============================================================================ */
const marqueeItems = [
  { icon: Church, name: "Grace Chapel" },
  { icon: BookOpen, name: "Living Word" },
  { icon: Music, name: "Hillsong" },
  { icon: Church, name: "Redeemed Christian" },
  { icon: Heart, name: "Elevation Church" },
  { icon: Globe, name: "Christ Embassy" },
  { icon: Star, name: "Winners Chapel" },
  { icon: BookOpen, name: "Dunamis Intl" },
  { icon: Church, name: "House on the Rock" },
  { icon: Music, name: "Bethel Music" },
];

/* ============================================================================
   LANDING PAGE COMPONENT
   ============================================================================ */
export default function Landing() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen font-sans selection:bg-primary/10 selection:text-primary font-outfit"
    >
      <MeshBackground />

      {/* ================================================================
          NAVIGATION
          ================================================================ */}
      <AdminHeader
        variant="landing"
        ctaPrimary={{ label: "Get Started", href: "/register" }}
        ctaSecondary={{ label: "Login", href: "/login" }}
      />

      {/* ================================================================
          HERO SECTION
          ================================================================ */}
      <section className="relative pt-32 lg:pt-40 pb-16 px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 glass-pill"
                style={{ color: "var(--color-primary)" }}
              >
                <Sparkles
                  className="h-3 w-3"
                  style={{ fill: "var(--color-primary)" }}
                />
                The future of church management
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5 leading-tight"
                style={{ color: "var(--color-text-heading)" }}
              >
                Unite Your{" "}
                <span className="text-gradient-primary shimmer-text italic font-normal">
                  Community.
                </span>
                <br />
                Elevate Your{" "}
                <span className="text-gradient-primary shimmer-text italic font-normal">
                  Mission.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                className="text-base lg:text-lg max-w-lg mb-8 font-medium leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                The all-in-one platform for modern churches. Manage members,
                track giving, schedule events, and grow your community — all in
                a beautiful, intuitive experience.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-start gap-3"
              >
                <Link to="/login">
                  <Button className="h-11 lg:h-12 px-6 lg:px-8 rounded-full text-sm lg:text-base font-bold shadow-xl shadow-primary/20 bg-primary hover:bg-primary-hover group transition-all hover:scale-105 active:scale-95 text-white">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="#features">
                  <button
                    className="h-11 lg:h-12 px-6 rounded-full text-sm font-semibold glass-pill transition-all hover:scale-105 flex items-center gap-1.5"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    See Features <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </Link>
              </motion.div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex items-center gap-3"
              >
                <div className="flex -space-x-2.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 overflow-hidden"
                      style={{
                        borderColor: "var(--color-glass-border)",
                        background: "var(--color-glass-bg)",
                      }}
                    >
                      <img
                        src={`https://i.pravatar.cc/64?u=user${i}`}
                        alt="user"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white"
                    style={{
                      background: "var(--color-primary)",
                      borderColor: "var(--color-glass-border)",
                    }}
                  >
                    +2k
                  </div>
                </div>
                <div>
                  <p
                    className="text-xs font-bold"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    Trusted by 2,400+ churches
                  </p>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-2.5 w-2.5"
                        style={{
                          fill: "var(--color-accent-amber)",
                          color: "var(--color-accent-amber)",
                        }}
                      />
                    ))}
                    <span
                      className="text-[10px] font-medium ml-1"
                      style={{ color: "var(--color-text-faint)" }}
                    >
                      4.9/5
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Main hero image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={HERO_IMAGES.community}
                  alt="Community gathering"
                  className="w-full h-[420px] object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, var(--color-surface-base) 0%, transparent 40%)",
                  }}
                />
              </div>

              {/* Floating stat card — top left */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -left-4"
              >
                <Card className="py-3 px-4 rounded-xl flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(16, 185, 129, 0.1)",
                      color: "var(--color-accent-emerald)",
                    }}
                  >
                    <Zap className="h-4 w-4" />
                  </div>
                  <div>
                    <p
                      className="text-[9px] font-bold uppercase tracking-wider"
                      style={{ color: "var(--color-text-faint)" }}
                    >
                      Growth
                    </p>
                    <p
                      className="text-base font-bold"
                      style={{ color: "var(--color-text-heading)" }}
                    >
                      +124%
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Floating stat card — bottom right */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-3 -right-3"
              >
                <Card className="py-3 px-4 rounded-xl flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(244, 63, 94, 0.1)",
                      color: "var(--color-accent-coral)",
                    }}
                  >
                    <Heart className="h-4 w-4" />
                  </div>
                  <div>
                    <p
                      className="text-[9px] font-bold uppercase tracking-wider"
                      style={{ color: "var(--color-text-faint)" }}
                    >
                      Engagement
                    </p>
                    <p
                      className="text-base font-bold"
                      style={{ color: "var(--color-text-heading)" }}
                    >
                      98.2%
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Orbiting element */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 w-[250px] h-[250px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--color-primary)", opacity: 0.4 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          LOGO MARQUEE — "Trusted by" scrolling brand strip
          ================================================================ */}
      <section className="py-6 overflow-hidden">
        <div className="relative">
          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, var(--color-surface-base), transparent)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, var(--color-surface-base), transparent)",
            }}
          />
          <div className="marquee-track">
            {/* Duplicate for seamless loop */}
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-8 shrink-0 opacity-40 hover:opacity-70 transition-opacity"
              >
                <item.icon
                  className="h-4 w-4"
                  style={{ color: "var(--color-text-faint)" }}
                />
                <span
                  className="text-sm font-semibold whitespace-nowrap"
                  style={{ color: "var(--color-text-faint)" }}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          STATS BAR
          ================================================================ */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="rounded-2xl p-6 lg:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 0.08}>
                  <div className="text-center">
                    <p
                      className="text-2xl lg:text-3xl font-bold mb-0.5"
                      style={{ color: "var(--color-text-heading)" }}
                    >
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                      />
                    </p>
                    <p
                      className="text-xs font-medium"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* ================================================================
          FEATURES BENTO GRID
          ================================================================ */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Everything you need
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold tracking-tight mb-3"
              style={{ color: "var(--color-text-heading)" }}
            >
              Built for Modern Churches
            </h2>
            <p
              className="text-base max-w-xl mx-auto font-medium"
              style={{ color: "var(--color-text-muted)" }}
            >
              Six powerful modules that work together seamlessly to help your
              church thrive.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.08}>
                <Card
                  hover
                  className="p-6 lg:p-8 rounded-2xl group cursor-pointer h-full animated-border"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                      style={{
                        background: feature.bgColor,
                        color: feature.color,
                      }}
                    >
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <ArrowRight
                      className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0 transition-all duration-300"
                      style={{ color: "var(--color-text-faint)" }}
                    />
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "var(--color-text-heading)" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="leading-relaxed text-sm"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {feature.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          TESTIMONIALS
          ================================================================ */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Loved by churches worldwide
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold tracking-tight"
              style={{ color: "var(--color-text-heading)" }}
            >
              What Pastors Are Saying
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={testimonial.author} delay={i * 0.12}>
                <Card
                  hover
                  className="p-6 lg:p-8 rounded-2xl h-full flex flex-col"
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-3.5 w-3.5"
                        style={{
                          fill: "var(--color-accent-amber)",
                          color: "var(--color-accent-amber)",
                        }}
                      />
                    ))}
                  </div>

                  <p
                    className="text-sm font-medium leading-relaxed flex-1 mb-6 italic"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p
                        className="text-sm font-bold"
                        style={{ color: "var(--color-text-heading)" }}
                      >
                        {testimonial.author}
                      </p>
                      <p
                        className="text-xs font-medium"
                        style={{ color: "var(--color-text-faint)" }}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA SECTION
          ================================================================ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <Card className="rounded-3xl p-10 lg:p-12 text-center relative overflow-hidden">
              {/* Gradient accent */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
              <div
                className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(244,63,94,0.1) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />

              <div className="relative z-10">
                <h2
                  className="text-3xl lg:text-4xl font-bold tracking-tight mb-4"
                  style={{ color: "var(--color-text-heading)" }}
                >
                  Ready to Transform Your Church?
                </h2>
                <p
                  className="text-base max-w-xl mx-auto mb-8 font-medium"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Join thousands of churches already using Flock. Start your
                  free trial today — no credit card required.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/login">
                    <Button className="h-12 px-8 rounded-full text-base font-bold shadow-xl shadow-primary/20 bg-primary hover:bg-primary-hover group transition-all hover:scale-105 active:scale-95 text-white">
                      Get Started Free
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="#" className="flex items-center gap-1.5">
                    <span
                      className="text-sm font-bold transition-colors hover:text-primary"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Schedule a Demo
                    </span>
                    <ChevronRight
                      className="h-3.5 w-3.5"
                      style={{ color: "var(--color-text-faint)" }}
                    />
                  </Link>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          FOOTER
          ================================================================ */}
      <AdminFooter variant="landing" />
    </div>
  );
}
