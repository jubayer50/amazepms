"use client";

import { motion } from "motion/react";
import CountUp from "react-countup";

const Counter = ({ value, suffix = "", prefix = "", decimals = 0 }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.6,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <CountUp
        start={0}
        end={value}
        duration={2.5}
        decimals={decimals}
        enableScrollSpy
        scrollSpyOnce
        separator=","
        prefix={prefix}
        suffix={suffix}
      >
        {({ countUpRef }) => (
          <h3
            ref={countUpRef}
            className="text-4xl font-bold tracking-tight text-[#0055FF] lg:text-5xl"
          />
        )}
      </CountUp>
    </motion.div>
  );
};

export default Counter;
