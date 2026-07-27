"use client";

import { motion } from "motion/react";
import { FaArrowTrendUp, FaBuilding, FaUsers } from "react-icons/fa6";

const FloatingCard = ({ className, icon, title, value }) => {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
      className={`absolute rounded-md border border-[#0055FF50] bg-[#e6eeff80] backdrop-blur-xl shadow-xl p-4 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0055FF]/10 text-[#0055FF]">
          {icon}
        </div>

        <div>
          <p className="text-xs text-[#687799]">{title}</p>

          <h4 className="font-bold text-[#00194C]">{value}</h4>
        </div>
      </div>
    </motion.div>
  );
};

const DashboardMockup = () => {
  return (
    <div className="relative max-w-155 w-full">
      {/* Floating Cards */}

      <FloatingCard
        className="right-4 md:-right-10 -top-14 md:-top-12"
        icon={<FaUsers />}
        title="Visitors"
        value="128 Today"
      />

      <FloatingCard
        className="-bottom-15 left-5 md:-left-10"
        icon={<FaBuilding />}
        title="Occupancy"
        value="98%"
      />

      {/* Dashboard */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="rounded-xl border border-[#0055FF50] bg-white "
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-[#0055FF50] px-6 py-5">
          <div>
            <h3 className="text-lg font-bold text-[#00194C]">
              Dashboard Overview
            </h3>

            <p className="text-sm text-[#687799]">Property Analytics</p>
          </div>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
            Live
          </span>
        </div>

        {/* Stats */}

        <div className="flex justify-between gap-2 md:gap-4 py-4 px-2  md:p-6">
          <div className="rounded-xl bg-[#e6eeff80] p-5">
            <p className="text-sm text-[#687799]">Residents</p>

            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-[#00194C]">
              2,450
            </h2>
          </div>

          <div className="rounded-xl bg-[#e6eeff80] p-5">
            <p className="text-sm text-[#687799]">Apartments</p>

            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-[#00194C]">
              580
            </h2>
          </div>

          <div className="rounded-xl bg-[#e6eeff80] p-5">
            <p className="text-sm text-[#687799]">Revenue</p>

            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-[#00194C]">
              $48K
            </h2>
          </div>
        </div>

        {/* Fake Chart */}
        <div className="px-2 md:px-6 pb-2 md:pb-6">
          <div className="rounded-xl bg-[#e6eeff80] p-6">
            <div className="mb-6 flex items-center justify-between">
              <h4 className="font-semibold text-[#00194C]">
                Monthly Performance
              </h4>

              <div className="flex items-center gap-2 text-green-500">
                <FaArrowTrendUp />

                <span className="text-sm font-medium">+18%</span>
              </div>
            </div>

            <div className="flex h-44 items-end gap-4">
              {[45, 70, 55, 90, 65, 120, 95].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{
                    height: 0,
                  }}
                  animate={{
                    height,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                  }}
                  className="flex-1 rounded-t-md bg-linear-to-t from-[#063594] to-[#0055FF]"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardMockup;
