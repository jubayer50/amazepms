"use client";

import { motion } from "motion/react";
import { FaStar } from "react-icons/fa6";

import { testimonialData } from "./testimonialData";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#00194C] via-[#032A73] to-[#00194C] py-28">
      {/* ================= Background Glow ================= */}

      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#0055FF]/20 blur-[140px]" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-[140px]" />

      {/* ================= Grid Pattern ================= */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* ================= Content ================= */}

      <div className="relative mx-auto max-w-330 px-3">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-medium text-[#6DB6FF] backdrop-blur-xl">
            <FaStar className="text-yellow-400" />
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            Trusted by Property
            <span className="block text-[#59A7FF]">Managers Nationwide</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Discover how residential communities and property managers are
            transforming their daily operations with Amaze PMS.
          </p>
        </motion.div>

        {/* Marquee */}

        <TestimonialSlider testimonials={testimonialData} />

        {/* Bottom Stats */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-10"
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white">500+</h3>
            <p className="mt-2 text-white/60">Communities Managed</p>
          </div>

          <div className="hidden h-14 w-px bg-white/10 md:block" />

          <div className="text-center">
            <h3 className="text-4xl font-bold text-white">98%</h3>
            <p className="mt-2 text-white/60">Customer Satisfaction</p>
          </div>

          <div className="hidden h-14 w-px bg-white/10 md:block" />

          <div className="text-center">
            <h3 className="text-4xl font-bold text-white">24/7</h3>
            <p className="mt-2 text-white/60">Dedicated Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
