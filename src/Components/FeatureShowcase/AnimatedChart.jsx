"use client";

import { motion } from "motion/react";

const AnimatedChart = ({ chart }) => {
  return (
    <div className="rounded-lg border border-[#0055FF20] bg-[#F8FBFF] p-4">
      <div className="mb-4 flex items-center justify-between sm:mb-6">
        <h4 className="text-sm font-semibold text-[#00194C] sm:text-base">
          Monthly Performance
        </h4>

        <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-600 sm:px-3 sm:py-1 sm:text-xs">
          +18%
        </span>
      </div>

      <div className="flex h-36 items-end gap-2 sm:h-52 sm:gap-4">
        {chart.map((height, index) => (
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
              duration: 0.5,
            }}
            className="flex-1 rounded-t-md bg-linear-to-t from-[#063594] to-[#0055FF]"
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedChart;
