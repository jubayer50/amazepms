"use client";

import { motion } from "motion/react";
import StickyLayout from "./StickyLayout";

const FeatureShowcase = () => {
  return (
    <section className="relative py-24">
      {/* ================= Background ================= */}

      <div className="absolute inset-0 -z-10">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0055FF 1px, transparent 1px),
              linear-gradient(to bottom, #0055FF 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#0055FF]/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-330 px-3">
        {/* ================= Section Header ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}

          <span className="inline-flex items-center rounded-full border border-[#0055FF]/20 bg-[#0055FF]/5 px-4 py-2 text-sm font-medium text-[#0055FF]">
            Core Features
          </span>

          {/* Title */}

          <h2 className="mt-6 text-4xl font-bold leading-tight text-[#00194C] md:text-5xl">
            Everything You Need to
            <span className="block bg-linear-to-r from-[#0055FF] via-[#2D7DFF] to-cyan-400 bg-clip-text text-transparent">
              Manage Properties Efficiently
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#687799]">
            From resident management and visitor tracking to maintenance,
            billing, and analytics—Amaze PMS brings every essential tool into
            one modern and intuitive platform.
          </p>
        </motion.div>

        {/* ================= Sticky Section ================= */}

        <div className="mt-16 sm:mt-24">
          <StickyLayout></StickyLayout>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
