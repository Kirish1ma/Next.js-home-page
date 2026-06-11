"use client";

import { motion } from "framer-motion";

import { Ticker } from "@/components/ui/Ticker";
import { profile } from "@/data/profile";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function HomeSection() {
  return (
    <section id="home" className="flex min-h-screen flex-col justify-between px-5 pt-28 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            className="mb-6 text-sm uppercase tracking-[0.35em] text-muted"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.1}
          >
            Personal Homepage
          </motion.p>
          <motion.h1
            className="display-title max-w-5xl"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.2}
          >
            {profile.headline}
          </motion.h1>
          <motion.p
            className="mt-8 max-w-2xl text-xl leading-8 text-muted"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.35}
          >
            {profile.description}
          </motion.p>
        </div>
        <motion.div
          className="min-h-[24rem] rounded-[2.5rem] border border-line bg-ink p-6 text-paper shadow-sm"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0.45}
        >
          <div className="flex h-full min-h-[20rem] flex-col justify-between rounded-[2rem] border border-paper/20 p-6">
            <span className="text-sm uppercase tracking-[0.35em] text-paper/60">Now</span>
            <p className="font-display text-4xl leading-tight">Reading, writing, and rebuilding this site.</p>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        custom={0.6}
      >
        <Ticker items={profile.ticker} />
      </motion.div>
    </section>
  );
}
