"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { profile } from "@/data/profile";

const INTRO_KEY = "intro-seen";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function PageIntro() {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<"intro" | "exit" | "done">("intro");

  useEffect(() => {
    if (sessionStorage.getItem(INTRO_KEY)) {
      setPhase("done");
      return;
    }

    if (reduceMotion) {
      sessionStorage.setItem(INTRO_KEY, "1");
      setPhase("done");
      return;
    }

    const timer = window.setTimeout(() => setPhase("exit"), 1800);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  useEffect(() => {
    if (phase === "intro" || phase === "exit") {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [phase]);

  if (phase === "done") {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink text-paper"
      initial={{ y: 0 }}
      animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (phase === "exit") {
          sessionStorage.setItem(INTRO_KEY, "1");
          setPhase("done");
        }
      }}
    >
      <motion.div
        className="px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.p
          className="mb-4 text-sm uppercase tracking-[0.35em] text-paper/60"
          variants={itemVariants}
        >
          Personal Homepage
        </motion.p>
        <motion.h1
          className="font-display text-6xl tracking-tight sm:text-8xl"
          variants={itemVariants}
        >
          {profile.name}
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}
