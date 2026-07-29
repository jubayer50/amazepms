"use client";

import { motion } from "motion/react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const RecruitmentHero = () => {
  return (
    <section
      className="relative flex items-center overflow-hidden bg-cover bg-center py-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1800&auto=format&fit=crop')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#021525]/80 via-[#021525]/70 to-[#021525]/40" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-330 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Professional Recruitment Services
          </span>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-white md:text-5xl">
            Hire the Right People <br />
            <span className="text-[#0055FF]">For Your Business</span>
          </h1>

          <p className="mt-3  text-gray-300">
            We help organizations recruit skilled, verified, and reliable
            professionals through a streamlined hiring process, ensuring the
            right talent for every role.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Button color="primary" className={"rounded-md bg-[#0055FF]"}>
              <FaArrowRight></FaArrowRight> Get Started
            </Button>

            <Button className="border-[#0055FF] bg-transparent border rounded-md text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecruitmentHero;
