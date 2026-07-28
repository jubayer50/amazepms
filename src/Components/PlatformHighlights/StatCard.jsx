"use client";

import { motion } from "motion/react";
import Counter from "./Counter";

const StatCard = ({ stat, index }) => {
  const Icon = stat.icon;

  return (
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
        amount: 0.3,
      }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative overflow-hidden rounded-xl border border-[#0055FF20] bg-white p-8 shadow transition-all duration-300 hover:border-[#0055FF40] hover:shadow-md"
    >
      {/* Top Gradient Line */}

      <div
        className={`absolute left-0 top-0 h-1 w-full bg-linear-to-r ${stat.color}`}
      />

      {/* Glow */}

      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#0055FF]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

      {/* Icon */}

      <motion.div
        whileHover={{
          rotate: 10,
          scale: 1.1,
        }}
        transition={{
          duration: 0.3,
        }}
        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0055FF10] text-3xl text-[#0055FF]"
      >
        <Icon />
      </motion.div>

      {/* Counter */}

      <div className="mt-8">
        <Counter
          value={stat.value}
          suffix={stat.suffix}
          prefix={stat.prefix}
          decimals={stat.decimals}
        />
      </div>

      {/* Title */}

      <h3 className="mt-3 text-xl font-semibold text-[#00194C]">
        {stat.title}
      </h3>

      {/* Description */}

      <p className="mt-3 leading-7 text-[#687799]">{stat.description}</p>
    </motion.div>
  );
};

export default StatCard;
