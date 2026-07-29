"use client";

import { motion } from "motion/react";
import {
  HiOutlineUserGroup,
  HiOutlineIdentification,
  HiOutlineClipboardDocumentCheck,
  HiOutlineBriefcase,
} from "react-icons/hi2";

const strategies = [
  {
    icon: HiOutlineUserGroup,
    title: "Talent Sourcing",
    description:
      "We identify and attract qualified candidates through trusted recruitment channels and industry networks.",
  },
  {
    icon: HiOutlineIdentification,
    title: "Background Verification",
    description:
      "Every candidate undergoes identity, document, and reference verification before final selection.",
  },
  {
    icon: HiOutlineClipboardDocumentCheck,
    title: "Screening & Assessment",
    description:
      "Candidates are evaluated through interviews and skill assessments to ensure they meet job requirements.",
  },
  {
    icon: HiOutlineBriefcase,
    title: "Successful Placement",
    description:
      "We match the right professionals with the right roles for long-term success and productivity.",
  },
];

const RecruitmentStrategy = () => {
  return (
    <section id="strategy" className="bg-white py-20">
      <div className="mx-auto max-w-330 px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="rounded-full bg-[#0055FF15] px-4 py-2 text-sm font-semibold text-[#0055FF]">
            Recruitment Strategy
          </span>

          <h2 className="mt-5 text-3xl font-bold text-[#00194c] md:text-5xl">
            A Structured Hiring Process
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Our recruitment strategy ensures every candidate is carefully
            sourced, verified, assessed, and placed to meet your business
            objectives.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {strategies.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-xl border border-gray-200 bg-white p-8 shadow transition-all duration-300 hover:border-[#0055FF] hover:shadow-md"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-md bg-[#0055FF10]">
                  <Icon className="text-3xl text-blue-600" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecruitmentStrategy;
