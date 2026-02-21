import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Button,
  Input,
  FormField,
  Alert,
  AlertTitle,
  AlertDescription,
  Spinner,
  Divider,
} from "devign";
import { Mail, Lock, ArrowRight, Chrome, ShieldCheck } from "lucide-react";
import { MeshBackground } from "@/components/ui/MeshBackground";
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
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: "var(--color-text-heading)" }}
          >
            Welcome back
          </h1>
          <p
            className="font-medium"
            style={{ color: "var(--color-text-muted)" }}
          >
            Continue to your workspace
          </p>
        </motion.div>

        {/* Login Card */}
        <div
          className="p-8 lg:p-10 rounded-[2.5rem]"
          style={{
            background: "rgba(255,255,255,0.55)",
            backdropFilter: "blur(24px) saturate(180%)",
            border: "1px solid rgba(255,255,255,0.6)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
          }}
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
                <Alert
                  variant="error"
                  dismissible
                  onDismiss={() => setError(null)}
                >
                  <AlertTitle>Authentication Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleLogin} className="space-y-6">
            <FormField label="Email Address" htmlFor="login-email" required>
              <Input
                id="login-email"
                type="email"
                placeholder="name@company.com"
                leftIcon={<Mail className="h-4 w-4" />}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormField>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <FormField
                  label="Password"
                  htmlFor="login-password"
                  className="flex-1"
                >
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    leftIcon={<Lock className="h-4 w-4" />}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormField>
              </div>
              <div className="flex justify-end">
                <Link
                  to="#"
                  className="text-xs font-bold transition-colors hover:underline"
                  style={{ color: "var(--color-primary)" }}
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-16 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all group text-white"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <Spinner size="sm" variant="white" />
                  <span>Signing in...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span>Sign In</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </Button>

            <div className="my-8">
              <Divider label="Or continue with" />
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full h-14 glass-panel rounded-2xl flex items-center justify-center gap-3 font-bold transition-all hover:scale-[1.01] active:scale-[0.98]"
              style={{ color: "var(--color-text-body)" }}
            >
              <Chrome
                className="h-5 w-5"
                style={{ color: "var(--color-primary)" }}
              />
              <span>Google Account</span>
            </button>
          </form>

          <div className="mt-10 text-center">
            <p
              className="text-sm font-medium"
              style={{ color: "var(--color-text-muted)" }}
            >
              Don't have an account?{" "}
              <Link
                to="#"
                className="font-bold hover:underline underline-offset-4"
                style={{ color: "var(--color-primary)" }}
              >
                Request access
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex items-center justify-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em]"
          style={{ color: "var(--color-text-faint)" }}
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-3 w-3" />
            <span>Secure Connection</span>
          </div>
          <span
            className="w-1 h-1 rounded-full"
            style={{ background: "var(--color-text-faint)" }}
          />
          <span>© 2026 Flock</span>
        </motion.div>
      </div>
    </div>
  );
}
