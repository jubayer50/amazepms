"use client";

import { AnimatePresence, motion } from "motion/react";
import { FaArrowTrendUp, FaCircleCheck, FaClock } from "react-icons/fa6";

import AnimatedChart from "./AnimatedChart";

const DashboardPreview = ({ feature }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={feature.id}
        layout
        initial={{
          opacity: 0,
          x: 40,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          x: -40,
          scale: 0.96,
        }}
        transition={{
          duration: 0.45,
        }}
        className="w-full max-w-2xl"
      >
        {/* Dashboard */}

        <div className="overflow-hidden rounded-xl border border-[#0055FF20] bg-white shadow-[0_20px_60px_rgba(0,85,255,.08)]">
          {/* ================= Header ================= */}

          <div className="flex items-center justify-between border-b border-[#0055FF20] px-4 py-4 sm:px-6 sm:py-5">
            <div>
              <p className="text-xs text-[#687799] sm:text-sm">
                Dashboard Overview
              </p>

              <h2 className="mt-1 text-base font-bold text-[#00194C] sm:text-xl">
                {feature.title}
              </h2>
            </div>

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1.5 sm:gap-2 sm:px-4 sm:py-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 sm:h-2 sm:w-2" />

              <span className="text-xs font-semibold text-green-600 sm:text-sm">
                Live
              </span>
            </motion.div>
          </div>

          {/* ================= Chart ================= */}

          <div className="p-3">
            <AnimatedChart chart={feature.chart} />
          </div>
          {/* ================= Recent Activity ================= */}

          <div className="border-t border-[#0055FF15] px-4 py-4">
            <div className="mb-4 flex items-center justify-between sm:mb-5">
              <h3 className="text-sm font-semibold text-[#00194C] sm:text-base">
                Recent Activity
              </h3>

              <button className="text-xs font-medium text-[#0055FF] hover:underline sm:text-sm">
                View All
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  icon: <FaCircleCheck />,
                  title: "New update completed",
                  subtitle: feature.title,
                  color: "bg-green-100 text-green-600",
                },
                {
                  icon: <FaArrowTrendUp />,
                  title: feature.stats.secondary,
                  subtitle: "Performance improved",
                  color: "bg-blue-100 text-[#0055FF]",
                },
                {
                  icon: <FaClock />,
                  title: "System synchronized",
                  subtitle: "Just now",
                  color: "bg-orange-100 text-orange-500",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                  }}
                  className="flex items-center justify-between rounded-md border border-[#0055FF15] bg-[#F8FBFF] p-3"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-sm sm:h-11 sm:w-11 ${item.color}`}
                    >
                      {item.icon}
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-[#00194C] sm:text-base">
                        {item.title}
                      </h4>

                      <p className="text-xs text-[#687799] sm:text-sm">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 text-[10px] text-[#687799] sm:text-xs">
                    2 min ago
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DashboardPreview;
