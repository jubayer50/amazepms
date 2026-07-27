"use client";

import { motion } from "motion/react";
import { Button } from "@heroui/react";
import { FaArrowRight, FaPlay } from "react-icons/fa6";
import DashboardMockup from "./DashboardMockup";

const Banner = () => {
  return (
    <section className="relative overflow-hidden min-h-[70vh]">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 max-h-125 h-full max-w-125 w-full -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
      linear-gradient(to right, #0055FF 1px, transparent 1px),
      linear-gradient(to bottom, #0055FF 1px, transparent 1px)
    `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Left Glow */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#0055FF]/10 blur-[140px]" />

      {/* Right Glow */}
      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-cyan-400/10 blur-[140px]" />
      <div className="max-w-330 mx-auto flex flex-col items-center justify-between gap-26 px-3 py-24 lg:flex-row">
        {/* ================= Left ================= */}

        <div className="max-w-xl">
          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#0055FF] px-4 py-2 backdrop-blur-lg"
          >
            <span className="h-2 w-2 rounded-full bg-[#0055FF]" />

            <p className="text-sm text-[#00194c]">
              Trusted Property Management Platform
            </p>
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-5xl font-bold leading-tight text-[#00194c] md:text-6xl"
          >
            Modern Property
            <span className="block text-[#0055FF]">Management</span>
            Made Simple.
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-6 max-w-lg text-lg leading-8 text-[#687799]"
          >
            Simplify apartment management, visitor tracking, maintenance
            requests, and billing from one intelligent platform.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <Button size="sm" className="rounded-md bg-[#00194c]">
              <FaPlay></FaPlay> Book Demo
            </Button>

            <Button
              size="sm"
              className="border border-[#0055FF] bg-transparent rounded-md text-[#0055FF] backdrop-blur-md"
            >
              <FaArrowRight></FaArrowRight> Explore Features
            </Button>
          </motion.div>

          {/* Bottom Stats */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex items-center gap-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#0055FF]">500+</h3>

              <p className="text-sm text-[#687799]">Communities</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0055FF]">99.9%</h3>

              <p className="text-sm text-[#687799]">Uptime</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0055FF]">24/7</h3>

              <p className="text-sm text-[#687799]">Support</p>
            </div>
          </motion.div>
        </div>

        {/* ================= Right ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className=""
        >
          <DashboardMockup></DashboardMockup>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
