"use client";

import { motion } from "motion/react";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineClipboardDocumentList,
  HiOutlineRocketLaunch,
  HiOutlineChartBar,
  HiCheckCircle,
} from "react-icons/hi2";

const process = [
  {
    step: "01",
    title: "Client Consultation",
    icon: HiOutlineChatBubbleLeftRight,
    items: [
      "Understanding client requirements",
      "Site survey & assessment",
      "Requirement analysis",
      "Service proposal submission",
    ],
  },
  {
    step: "02",
    title: "Planning & Recruitment",
    icon: HiOutlineClipboardDocumentList,
    items: [
      "Contract confirmation",
      "Resource planning",
      "Recruitment & staff training",
      "Site specific SOP preparation",
    ],
  },
  {
    step: "03",
    title: "Deployment",
    icon: HiOutlineRocketLaunch,
    items: [
      "Deployment of trained staff",
      "Supervisor assignment",
      "Parallel service transition",
      "Site coordination",
    ],
  },
  {
    step: "04",
    title: "Monitoring & Improvement",
    icon: HiOutlineChartBar,
    items: [
      "Operations monitoring",
      "Regular performance review",
      "Client feedback",
      "Continuous improvement",
    ],
  },
];

const FunctionalApproach = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-330 px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-[#0055FF15] px-4 py-2 text-sm font-semibold text-[#0055FF]">
            Functional Approach
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#00194c] md:text-5xl">
            Our 4-Step Working Process
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-800">
            We follow a structured workflow to ensure every recruitment project
            is planned, executed, and monitored efficiently for long-term
            success.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {process.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-lg border border-gray-200 bg-white p-8 shadow transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-md"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#0055FF15]">
                    <Icon className="text-3xl text-[#0055FF]" />
                  </div>

                  <span className="text-4xl font-bold text-[#0055FF40]">
                    {item.step}
                  </span>
                </div>

                <h3 className="mb-6 text-2xl font-semibold text-[#00194c]">
                  {item.title}
                </h3>

                <div className="space-y-4">
                  {item.items.map((text) => (
                    <div key={text} className="flex items-start gap-3">
                      <HiCheckCircle className="mt-.5 text-xl text-[#0055FF]" />
                      <p className="text-[#00194c]">{text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FunctionalApproach;
