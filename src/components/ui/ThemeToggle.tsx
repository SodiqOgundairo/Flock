import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { Button } from "devign";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-[100]"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        size="icon"
        variant="outline"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        className="w-12 h-12 rounded-full shadow-lg backdrop-blur-sm"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? "sun" : "moon"}
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? (
              <Sun
                className="h-4 w-4"
                style={{ color: "var(--color-accent-amber)" }}
              />
            ) : (
              <Moon
                className="h-4 w-4"
                style={{ color: "var(--color-primary)" }}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </Button>
    </motion.div>
  );
}
