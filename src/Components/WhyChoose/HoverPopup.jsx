"use client";

import { motion } from "motion/react";

const HoverPopup = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 20,
      }}
      transition={{
        duration: 0.3,
      }}
      className="absolute inset-0 z-20 flex rounded-xl bg-linear-to-t from-[#00194C]/95 via-[#00194C]/65 to-transparent p-3"
    >
      <div className="w-full rounded-lg border border-white/15 bg-white/10 p-2 backdrop-blur-xl space-y-1.5">
        {/* Icon */}

        <div className=" flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-xl text-white">
          <Icon />
        </div>

        {/* Title */}

        <h3 className="text-lg font-semibold text-white">{title}</h3>

        {/* Description */}

        <p className=" text-sm text-white/80">{description}</p>
      </div>
    </motion.div>
  );
};

export default HoverPopup;
