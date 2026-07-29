"use client";

import { motion } from "motion/react";
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineCheckBadge,
} from "react-icons/hi2";

const audits = [
  {
    icon: HiOutlineClipboardDocumentCheck,
    title: "Site Audits",
    description:
      "Regular inspections ensure recruitment standards and operational requirements are consistently maintained.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Compliance Checks",
    description:
      "We verify that every employee follows company policies, safety regulations, and industry compliance standards.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Performance Reviews",
    description:
      "Continuous evaluations help identify strengths, improve productivity, and support long-term employee growth.",
  },
  {
    icon: HiOutlineCheckBadge,
    title: "Quality Assurance",
    description:
      "Our quality assurance process guarantees reliable service delivery through ongoing monitoring and feedback.",
  },
];

const AuditsSection = () => {
  return (
    <section className="bg-[#021525] py-16">
      <div className="mx-auto max-w-330 px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-[#4C7DFF]/10 px-4 py-2 text-sm font-medium text-[#4C7DFF] border border-[#4C7DFF]/20">
            Audits & Quality Assurance
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Ensuring Excellence at Every Stage
          </h2>

          <p className="mt-4  text-gray-300">
            We conduct regular audits and quality assessments to maintain high
            operational standards, employee performance, and service
            consistency.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {audits.map((audit, index) => {
            const Icon = audit.icon;

            return (
              <motion.div
                key={audit.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#4C7DFF] hover:bg-white/10"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-lg bg-[#4C7DFF]/15">
                  <Icon className="text-3xl text-[#4C7DFF]" />
                </div>

                <h3 className="mb-4 text-xl font-semibold text-white">
                  {audit.title}
                </h3>

                <p className="text-gray-300">{audit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AuditsSection;
