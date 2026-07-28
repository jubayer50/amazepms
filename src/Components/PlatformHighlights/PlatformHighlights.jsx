"use client";

import { motion } from "motion/react";

import { statsData } from "./statsData";
import StatCard from "./StatCard";

const PlatformHighlights = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* ================= Background Glow ================= */}

      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#0055FF]/10 blur-[120px]" />

      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />

      {/* ================= Grid Pattern ================= */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#0055FF 1px,transparent 1px),
            linear-gradient(to bottom,#0055FF 1px,transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* ================= Content ================= */}

      <div className="relative mx-auto max-w-330 px-3">
        {/* Section Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#0055FF30] bg-[#0055FF08] px-5 py-2 text-sm font-medium text-[#0055FF]">
            Platform Highlights
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-[#00194C] md:text-5xl">
            Trusted By Communities
            <span className="block text-[#0055FF]">
              Powered By Smart Technology
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#687799]">
            Empowering residential communities with intelligent automation,
            secure infrastructure, and real-time insights that simplify property
            management every day.
          </p>
        </motion.div>

        {/* ================= Stats Grid ================= */}

        <div className="mt-20 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {statsData.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>

        {/* ================= Bottom Trust Card ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          className="mt-20 rounded-3xl border border-[#0055FF20] bg-linear-to-r from-[#F8FBFF] via-white to-[#F8FBFF] px-8 py-10"
        >
          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div>
              <h3 className="text-3xl font-bold text-[#00194C]">
                Trusted by Property Managers Nationwide
              </h3>

              <p className="mt-4 max-w-2xl leading-8 text-[#687799]">
                From apartment communities to residential complexes, Amaze PMS
                helps organizations streamline operations, improve resident
                satisfaction, and make smarter decisions with one unified
                platform.
              </p>
            </div>

            <div className="flex items-center gap-10">
              <div>
                <h4 className="text-4xl font-bold text-[#0055FF]">4.9★</h4>
                <p className="mt-2 text-[#687799]">Customer Rating</p>
              </div>

              <div className="h-16 w-px bg-[#0055FF20]" />

              <div>
                <h4 className="text-4xl font-bold text-[#0055FF]">98%</h4>
                <p className="mt-2 text-[#687799]">Client Retention</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformHighlights;
