"use client";

import { servicesData } from "@/Components/Services/servicesData";
import ServicesGrid from "@/Components/Services/ServicesGrid";
import { motion } from "motion/react";

// import { servicesData } from "./servicesData";
// import ServicesGrid from "./ServicesGrid";

const Services = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* ================= Background Glow ================= */}

      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#0055FF]/10 blur-[120px]" />

      <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />

      {/* ================= Grid Pattern ================= */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#0055FF 1px,transparent 1px),
            linear-gradient(to bottom,#0055FF 1px,transparent 1px)
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
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0055FF30] bg-[#0055FF08] px-5 py-2 text-sm font-medium text-[#0055FF]">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-[#00194C] md:text-5xl">
            Comprehensive Property
            <span className="block text-[#0055FF]">Management Services</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#687799]">
            From security and housekeeping to maintenance, visitor management,
            and community operations, Amaze PMS provides every service you need
            to manage modern residential communities efficiently.
          </p>
        </motion.div>

        {/* Services */}

        <ServicesGrid services={servicesData} />

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24 rounded-3xl border border-[#0055FF20] bg-linear-to-r from-[#F8FBFF] via-white to-[#F8FBFF] px-8 py-10 text-center"
        >
          <h3 className="text-3xl font-bold text-[#00194C]">
            Need a Custom Property Solution?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#687799]">
            Our team helps property owners and residential communities build a
            management solution tailored to their unique operational needs.
          </p>

          <button className="mt-8 rounded-xl bg-[#00194C] px-8 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0055FF]">
            Book a Free Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
