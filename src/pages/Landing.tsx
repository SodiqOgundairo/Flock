import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "yems-ui";
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
} from "lucide-react";
import { MeshBackground } from "@/components/ui/MeshBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import { LOGO } from "@/lib/assets";

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
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
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
      "Organize your congregation with intelligent profiles, family linking, and automated follow-ups.",
    color: "var(--color-primary)",
    bgColor: "rgba(79, 70, 229, 0.08)",
  },
  {
    icon: Calendar,
    title: "Event Scheduling",
    description:
      "Plan services, meetings, and outreach events with drag-and-drop calendars and RSVP tracking.",
    color: "var(--color-accent-sky)",
    bgColor: "rgba(14, 165, 233, 0.08)",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Track attendance trends, giving patterns, and engagement metrics with beautiful dashboards.",
    color: "var(--color-accent-emerald)",
    bgColor: "rgba(16, 185, 129, 0.08)",
  },
  {
    icon: Heart,
    title: "Giving & Tithes",
    description:
      "Secure online donation portals with automated receipts, recurring gifts, and financial reports.",
    color: "var(--color-accent-coral)",
    bgColor: "rgba(244, 63, 94, 0.08)",
  },
  {
    icon: Globe,
    title: "Multi-Branch Ready",
    description:
      "Manage multiple church locations from a single dashboard with branch-specific data isolation.",
    color: "var(--color-accent-amber)",
    bgColor: "rgba(245, 158, 11, 0.08)",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Role-based access control, encrypted data storage, and automated compliance reporting.",
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
      "The liquid glass interface is unlike anything we've seen. Our admin team actually enjoys using the dashboard now.",
    author: "Sarah Okonkwo",
    role: "Church Administrator, Hillside Church",
    avatar: "https://i.pravatar.cc/100?u=admin1",
    rating: 5,
  },
  {
    quote:
      "Multi-branch management was always a pain. Flock made it seamless with real-time sync across all our locations.",
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
  { value: "2,400+", label: "Churches" },
  { value: "850K+", label: "Members Managed" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9★", label: "Rating" },
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
      <nav className="fixed top-4 lg:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
        <GlassCard
          intensity="medium"
          hoverEffect="none"
          className="h-16 lg:h-20 px-6 lg:px-10 flex items-center justify-between rounded-full"
        >
          <div className="flex items-center group">
            <img
              src={LOGO.svg}
              alt="Flock"
              className="h-10 lg:h-12 w-auto transition-transform group-hover:scale-105"
            />
          </div>

          <div className="hidden md:flex items-center gap-1">
            {["Features", "Pricing", "About"].map((item) => (
              <Link
                key={item}
                to="#"
                className="px-5 py-2 rounded-xl text-sm font-semibold transition-all hover:bg-glass-bg-hover"
                style={{ color: "var(--color-text-muted)" }}
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="bg-transparent" size="lg">
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="primary" size="lg">
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </GlassCard>
      </nav>

      {/* ================================================================
          HERO SECTION
          ================================================================ */}
      <section className="relative pt-40 lg:pt-52 pb-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 glass-pill"
                style={{ color: "var(--color-primary)" }}
              >
                <Sparkles
                  className="h-3 w-3"
                  style={{ fill: "var(--color-primary)" }}
                />
                The future of church management
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tighter mb-8 leading-[0.95]"
                style={{ color: "var(--color-text-heading)" }}
              >
                Unite Your{" "}
                <span className="text-gradient-primary italic font-normal">
                  Community.
                </span>
                <br />
                Elevate Your{" "}
                <span className="text-gradient-primary italic font-normal">
                  Mission.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg lg:text-xl max-w-xl mb-10 font-medium leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                Flock is the all-in-one platform for modern churches. Manage
                members, track giving, schedule events, and grow your community
                — all wrapped in a beautiful, intuitive experience.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <Link to="/login">
                  <Button className="h-14 lg:h-16 px-8 lg:px-10 rounded-full text-base lg:text-lg font-bold shadow-2xl shadow-primary/30 bg-primary hover:bg-primary-hover group transition-all hover:scale-105 active:scale-95 text-white">
                    Start Free Trial
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="#features">
                  <button
                    className="h-14 lg:h-16 px-8 rounded-full text-base font-bold glass-pill transition-all hover:scale-105 flex items-center gap-2"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    See Features <ChevronRight className="h-4 w-4" />
                  </button>
                </Link>
              </motion.div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-10 flex items-center gap-4"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 overflow-hidden"
                      style={{
                        borderColor: "var(--color-glass-border)",
                        background: "var(--color-glass-bg)",
                      }}
                    >
                      <img
                        src={`https://i.pravatar.cc/80?u=user${i}`}
                        alt="user"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold text-white"
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
                    className="text-sm font-bold"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    Trusted by 2,400+ churches
                  </p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-3 w-3"
                        style={{
                          fill: "var(--color-accent-amber)",
                          color: "var(--color-accent-amber)",
                        }}
                      />
                    ))}
                    <span
                      className="text-xs font-medium ml-1"
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
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Main hero image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1529070538774-1779cb3deba3?w=800&h=600&fit=crop&q=80"
                  alt="Community gathering"
                  className="w-full h-[500px] object-cover"
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
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6"
              >
                <GlassCard
                  intensity="high"
                  hoverEffect="none"
                  className="p-4 rounded-2xl flex items-center gap-3"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(16, 185, 129, 0.1)",
                      color: "var(--color-accent-emerald)",
                    }}
                  >
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <p
                      className="text-[10px] font-bold uppercase"
                      style={{ color: "var(--color-text-faint)" }}
                    >
                      Growth
                    </p>
                    <p
                      className="text-lg font-bold"
                      style={{ color: "var(--color-text-heading)" }}
                    >
                      +124%
                    </p>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Floating stat card — bottom right */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -right-4"
              >
                <GlassCard
                  intensity="high"
                  hoverEffect="none"
                  className="p-4 rounded-2xl flex items-center gap-3"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(244, 63, 94, 0.1)",
                      color: "var(--color-accent-coral)",
                    }}
                  >
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <p
                      className="text-[10px] font-bold uppercase"
                      style={{ color: "var(--color-text-faint)" }}
                    >
                      Engagement
                    </p>
                    <p
                      className="text-lg font-bold"
                      style={{ color: "var(--color-text-heading)" }}
                    >
                      98.2%
                    </p>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Orbiting element */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                  style={{ background: "var(--color-primary)", opacity: 0.4 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          STATS BAR
          ================================================================ */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <GlassCard
            intensity="medium"
            hoverEffect="none"
            className="rounded-3xl p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 0.1}>
                  <div className="text-center">
                    <p
                      className="text-3xl lg:text-4xl font-bold mb-1"
                      style={{ color: "var(--color-text-heading)" }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ================================================================
          FEATURES BENTO GRID
          ================================================================ */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              Everything you need
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold tracking-tight mb-4"
              style={{ color: "var(--color-text-heading)" }}
            >
              Built for Modern Churches
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto font-medium"
              style={{ color: "var(--color-text-muted)" }}
            >
              Six powerful modules that work together seamlessly to help your
              church thrive.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <GlassCard
                  className="p-8 lg:p-10 rounded-3xl group cursor-pointer h-full"
                  hoverEffect="glow"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                    style={{
                      background: feature.bgColor,
                      color: feature.color,
                    }}
                  >
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
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
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          TESTIMONIALS
          ================================================================ */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              Loved by churches worldwide
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold tracking-tight"
              style={{ color: "var(--color-text-heading)" }}
            >
              What Pastors Are Saying
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={testimonial.author} delay={i * 0.15}>
                <GlassCard
                  className="p-8 rounded-3xl h-full flex flex-col"
                  hoverEffect="lift"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4"
                        style={{
                          fill: "var(--color-accent-amber)",
                          color: "var(--color-accent-amber)",
                        }}
                      />
                    ))}
                  </div>

                  <p
                    className="text-base font-medium leading-relaxed flex-1 mb-8 italic"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-11 h-11 rounded-full object-cover"
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
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA SECTION
          ================================================================ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <GlassCard
              intensity="high"
              hoverEffect="none"
              className="rounded-[2.5rem] p-12 lg:p-16 text-center relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
              <div
                className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(244,63,94,0.1) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />

              <div className="relative z-10">
                <h2
                  className="text-4xl lg:text-5xl font-bold tracking-tight mb-6"
                  style={{ color: "var(--color-text-heading)" }}
                >
                  Ready to Transform Your Church?
                </h2>
                <p
                  className="text-lg max-w-2xl mx-auto mb-10 font-medium"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Join thousands of churches already using Flock. Start your
                  free trial today — no credit card required.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/login">
                    <Button className="h-16 px-10 rounded-full text-lg font-bold shadow-2xl shadow-primary/30 bg-primary hover:bg-primary-hover group transition-all hover:scale-105 active:scale-95 text-white">
                      Get Started Free
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="#" className="flex items-center gap-2">
                    <span
                      className="text-sm font-bold transition-colors hover:text-primary"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Schedule a Demo
                    </span>
                    <ChevronRight
                      className="h-4 w-4"
                      style={{ color: "var(--color-text-faint)" }}
                    />
                  </Link>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          FOOTER
          ================================================================ */}
      <footer
        className="py-16 px-6"
        style={{ borderTop: "1px solid var(--color-glass-border-subtle)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4 text-heading">
                <img src={LOGO.svg} alt="Flock" className="h-8 w-auto" />
              </div>
              <p className="text-sm font-medium leading-relaxed text-muted-custom">
                The most sophisticated church management experience ever built.
              </p>
            </div>

            {/* Links */}
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Integrations", "Changelog"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Contact"],
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Security", "GDPR"],
              },
            ].map((section) => (
              <div key={section.title}>
                <h4
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: "var(--color-text-faint)" }}
                >
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        to="#"
                        className="text-sm font-medium transition-colors hover:text-primary"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8"
            style={{ borderTop: "1px solid var(--color-glass-border-subtle)" }}
          >
            <span
              className="text-xs font-medium"
              style={{ color: "var(--color-text-faint)" }}
            >
              © 2026 Flock. Crafted with care.
            </span>
            <div className="flex gap-6">
              {["Twitter", "GitHub", "LinkedIn"].map((social) => (
                <Link
                  key={social}
                  to="#"
                  className="text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary"
                  style={{ color: "var(--color-text-faint)" }}
                >
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
