"use client";

import { motion } from "motion/react";

import BentoGallery from "./BentoGallery";
import WhyChooseContent from "./WhyChooseContent";
import { whyChooseData } from "./whyChooseData";

const WhyChoose = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* ================= Background Glow ================= */}

      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#0055FF]/10 blur-[120px]" />

      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />

      {/* ================= Grid Pattern ================= */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#0055FF 1px,transparent 1px),
            linear-gradient(to bottom,#0055FF 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
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
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-[#0055FF30] bg-[#0055FF08] px-5 py-2 text-sm font-medium text-[#0055FF]">
            Why Choose Amaze PMS
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-[#00194C] md:text-5xl">
            Everything You Need To
            <span className="block text-[#0055FF]">
              Manage Communities Better
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#687799]">
            Designed for modern property managers with powerful automation,
            real-time analytics, secure workflows, and an exceptional experience
            for residents and administrators.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="grid items-center gap-30 md:gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <BentoGallery data={whyChooseData} />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.15,
              duration: 0.7,
            }}
          >
            <WhyChooseContent />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
