"use client";

import { motion } from "motion/react";
import { Button } from "@heroui/react";
import { FaArrowRight, FaCircleCheck } from "react-icons/fa6";

const features = [
  "Enterprise-grade security & cloud infrastructure",
  "Smart automation for daily operations",
  "Real-time analytics & reporting dashboard",
  "Scalable solution for communities of any size",
];

const WhyChooseContent = () => {
  return (
    <div>
      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-[#0055FF30] bg-[#0055FF08] px-4 py-2"
      >
        <span className="h-2 w-2 rounded-full bg-[#0055FF]" />

        <p className="text-sm font-medium text-[#0055FF]">
          Why Choose Amaze PMS
        </p>
      </motion.div>

      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mt-4 text-3xl font-bold leading-tight text-[#00194C] lg:text-4xl"
      >
        Smarter Property Management
        <span className="block text-[#0055FF]">
          Built for Modern Communities.
        </span>
      </motion.h2>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-3 text-lg leading-7 text-[#687799]"
      >
        Amaze PMS simplifies property management with automation, real-time
        insights, secure workflows, and an intuitive experience for managers,
        staff, and residents.
      </motion.p>

      {/* Feature List */}

      <div className="mt-10 space-y-5">
        {features.map((feature, index) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3 + index * 0.1,
              duration: 0.45,
            }}
            className="flex items-start gap-4"
          >
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#0055FF15] text-[#0055FF]">
              <FaCircleCheck size={14} />
            </div>

            <p className="text-base leading-7 text-[#687799]">{feature}</p>
          </motion.div>
        ))}
      </div>

      {/* Button */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.8,
          duration: 0.5,
        }}
        className="mt-10"
      >
        <Button
          size="lg"
          endContent={<FaArrowRight />}
          className="rounded-md bg-[#00194C] text-white transition-transform duration-300 hover:scale-105"
        >
          Explore Platform
        </Button>
      </motion.div>
    </div>
  );
};

export default WhyChooseContent;
