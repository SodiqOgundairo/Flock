import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@yems-ui/core";
import { Sparkles, Palette, Zap, Code2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-true-azure/5 via-sunflower-gold/5 to-fresh-sky/5" />

      {/* Glass orbs for visual interest */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-primary opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gradient-accent opacity-20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-6xl lg:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            Flock
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Church Management System with Liquid Glass Design
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/components">
              <Button variant="primary" size="lg" className="pulse-glow">
                <Sparkles className="mr-2 h-5 w-5" />
                View Component Library
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: <Palette className="h-6 w-6" />,
              title: "Glassmorphism Design",
              description:
                "Beautiful liquid glass effects with backdrop blur and transparency",
              delay: 0.2,
            },
            {
              icon: <Zap className="h-6 w-6" />,
              title: "Micro-interactions",
              description:
                "Delightful animations and interactions on every component",
              delay: 0.3,
            },
            {
              icon: <Code2 className="h-6 w-6" />,
              title: "Premium Components",
              description:
                "Built with React, TypeScript, TailwindCSS, and Motion.dev",
              delay: 0.4,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: feature.delay, type: "spring" }}
            >
              <Card hover className="h-full">
                <CardHeader>
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
