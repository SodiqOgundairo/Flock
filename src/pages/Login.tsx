import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@yems-ui/core";
import {
  Mail,
  Lock,
  ArrowRight,
  Chrome,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";
import { MeshBackground } from "@/components/ui/MeshBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import { useAuth } from "../lib/auth";
import { LOGO } from "@/lib/assets";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { signIn, signInWithGoogle } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await signIn(email, password);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      if (email.toLowerCase().includes("admin")) {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    const { error } = await signInWithGoogle();
    if (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-6 overflow-hidden font-outfit">
      <MeshBackground />

      <div className="w-full max-w-[480px] relative z-10">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center mb-6 group transition-all"
          >
            <img
              src={LOGO.svg}
              alt="Flock"
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back
          </h1>
          <p className="text-gray-500 font-medium">
            Continue to your workspace
          </p>
        </motion.div>

        {/* Login Card */}
        <GlassCard
          intensity="high"
          hoverEffect="none"
          className="p-8 lg:p-10 rounded-[2.5rem] border-white/60 shadow-2xl"
        >
          {/* Error Alert */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: "auto", marginBottom: 24 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-rose-50/80 backdrop-blur-xl border border-rose-200 rounded-2xl flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-rose-500 shrink-0" />
                  <p className="text-sm text-rose-600 font-semibold">{error}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full pl-12 h-14 bg-white/40 border border-white/50 rounded-2xl focus:bg-white/60 focus:border-primary/30 focus:ring-4 focus:ring-primary/5 transition-all outline-none font-medium text-gray-800 placeholder:text-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Password
                </label>
                <Link
                  to="#"
                  className="text-xs font-bold text-primary hover:text-indigo-700 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 h-14 bg-white/40 border border-white/50 rounded-2xl focus:bg-white/60 focus:border-primary/30 focus:ring-4 focus:ring-primary/5 transition-all outline-none font-medium text-gray-800 placeholder:text-gray-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-16 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 bg-primary hover:bg-indigo-700 active:scale-[0.98] transition-all group"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Signing in...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span>Sign In</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </Button>

            <div className="relative my-8 text-center">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200/50" />
              </div>
              <span className="relative px-6 bg-transparent text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">
                Or continue with
              </span>
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full h-14 bg-white/40 border border-white/60 rounded-2xl flex items-center justify-center gap-3 font-bold text-gray-700 hover:bg-white/60 hover:shadow-md active:scale-[0.98] transition-all"
            >
              <Chrome className="h-5 w-5 text-primary" />
              <span>Google Account</span>
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500 font-medium">
              Don't have an account?{" "}
              <Link
                to="#"
                className="text-primary font-bold hover:underline underline-offset-4"
              >
                Request access
              </Link>
            </p>
          </div>
        </GlassCard>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex items-center justify-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-3 w-3" />
            <span>Secure Connection</span>
          </div>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span>© 2026 Flock</span>
        </motion.div>
      </div>
    </div>
  );
}
