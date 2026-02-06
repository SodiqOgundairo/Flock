import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Input,
} from "@yems-ui/core";
import { Mail, Lock, ArrowRight, Chrome, Sparkles } from "lucide-react";
import { MeshBackground } from "../components/ui/MeshBackground";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (email.toLowerCase().includes("admin")) {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-6 overflow-hidden">
      <MeshBackground />

      <div className="w-full max-w-xl relative">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-true-azure/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-sunflower-gold/10 blur-3xl rounded-full" />

        <div className="text-center mb-12 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-3 mb-6 group transition-all hover:scale-105"
          >
            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-true-azure to-dark-amethyst flex items-center justify-center shadow-xl shadow-true-azure/20 ring-4 ring-white/30">
              <span className="text-white font-bold text-2xl font-outfit">
                F
              </span>
            </div>
            <span className="font-bold text-3xl tracking-tight text-gray-900 font-outfit">
              Flock
            </span>
          </Link>
          <h1 className="text-4xl font-bold font-playfair text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-500 font-outfit font-medium">
            Please enter your credentials to continue
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <Card className="border border-white/50 bg-white/40 backdrop-blur-3xl shadow-2xl shadow-gray-200/50 rounded-[2.5rem] p-4">
            <CardContent className="p-8">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2 font-outfit">
                    Email Address
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300 group-focus-within:text-true-azure transition-colors" />
                    <Input
                      type="email"
                      placeholder="name@church.com"
                      className="pl-12 h-14 bg-white/40 border-white/50 rounded-2xl focus:ring-4 focus:ring-true-azure/10 transition-all font-outfit font-medium"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between ml-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest font-outfit">
                      Password
                    </label>
                    <Link
                      to="#"
                      className="text-xs font-bold text-true-azure hover:underline font-outfit"
                    >
                      Forgot?
                    </Link>
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300 group-focus-within:text-true-azure transition-colors" />
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="pl-12 h-14 bg-white/40 border-white/50 rounded-2xl focus:ring-4 focus:ring-true-azure/10 transition-all font-outfit font-medium"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full h-16 rounded-2xl text-lg font-bold shadow-xl shadow-true-azure/20 bg-true-azure hover:bg-true-azure/90 transition-all hover:scale-[1.02] active:scale-[0.98] group"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Authenticating...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span>Sign In</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </Button>
                </div>

                <div className="relative my-8 text-center">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-black/5" />
                  </div>
                  <span className="relative px-6 bg-transparent backdrop-blur-md text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">
                    Secure Access
                  </span>
                </div>

                <Button
                  variant="outline"
                  className="w-full h-14 border-white/50 bg-white/20 backdrop-blur-xl rounded-2xl text-gray-600 font-bold font-outfit shadow-sm hover:shadow-md hover:bg-white/40 transition-all"
                >
                  <Chrome className="mr-3 h-5 w-5 text-true-azure" /> Login with
                  Church SSO
                </Button>
              </form>

              <div className="mt-10 text-center flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4 text-sunflower-gold fill-sunflower-gold" />
                <p className="text-sm text-gray-400 font-outfit font-medium">
                  Need access?{" "}
                  <Link
                    to="#"
                    className="text-true-azure font-bold hover:underline"
                  >
                    Contact Admin
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <footer className="mt-12 text-center text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] font-outfit">
          © 2026 Flock · Enterprise Grade Security
        </footer>
      </div>
    </div>
  );
}
