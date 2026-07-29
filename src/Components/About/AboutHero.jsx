"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa6";

const AboutHero = () => {
  return (
    <section
      className="relative flex items-center overflow-hidden bg-cover bg-center py-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#00194c]/60  to-[#00194c]/50" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-330 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className=""
        >
          {/* Badge */}
          <span className="inline-block rounded-full border border-[#0055FF] bg-[#0055FF20] px-3 py-1 text-sm font-medium text-white">
            About Amaze PMS
          </span>

          {/* Heading */}
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
            Delivering Reliable
            <span className="block text-[#0055FF]">
              Facility Management Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-3xl mx-auto  text-gray-300">
            Amaze PMS is committed to providing dependable facility management
            and manpower solutions with a focus on quality, professionalism, and
            customer satisfaction. Our experienced team helps businesses operate
            efficiently through trusted support services.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex-wrap gap-4 flex justify-center">
            <Button className={"bg-[#0055FF] rounded-md"}>
              <FaArrowRight /> Contact Us
            </Button>

            <Button className="border rounded-md border-[#0055FF] bg-transparent text-white">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
