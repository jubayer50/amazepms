"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  HiCheckCircle,
  HiAcademicCap,
  HiShieldCheck,
  HiUsers,
} from "react-icons/hi2";

const skills = [
  "Professional Job Training",
  "Communication & Soft Skills",
  "Safety & Compliance Awareness",
  "Customer Service Excellence",
  "Team Collaboration",
  "Continuous Performance Improvement",
];

const SkillDevelopment = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-330 items-center gap-14 px-4 lg:grid-cols-2">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
            alt="Skill Development"
            width={700}
            height={600}
            className="rounded-xl object-cover shadow-xl"
          />

          <div className="absolute bottom-6 left-6 rounded-2xl bg-white p-5 shadow">
            <div className="flex items-center gap-3">
              <HiAcademicCap className="text-3xl text-[#0055FF]" />
              <div>
                <h4 className="font-bold text-[#00194c]">Training Program</h4>
                <p className="text-sm text-gray-500">
                  Industry-focused learning
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="rounded-full bg-[#0055FF15] px-4 py-2 text-sm font-semibold text-[#0055FF]">
            Skill Development
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#00194c] md:text-[44px]">
            Empowering People Through Training
          </h2>

          <p className="mt-4 text-gray-600">
            Our development programs prepare employees with practical knowledge,
            workplace ethics, communication skills, and operational expertise so
            they can perform confidently from day one.
          </p>

          <div className="mt-8 space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-2"
              >
                <HiCheckCircle className="text-lg text-[#0055FF]" />
                <span className="text-gray-700">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-330 px-1 mx-auto mt-10 grid grid-cols-2 gap-5">
          <div className="rounded-lg bg-white p-5 border shadow hover:border-[#0055FF] transition duration-300">
            <HiUsers className="mb-3 text-3xl text-[#0055FF]" />
            <h3 className="text-2xl font-bold text-gray-900">500+</h3>
            <p className="text-sm text-gray-500">
              Employees Trained Every Year
            </p>
          </div>

          <div className="rounded-lg bg-white p-5 border shadow hover:border-[#0055FF] transition duration-300">
            <HiShieldCheck className="mb-3 text-3xl text-[#0055FF]" />
            <h3 className="text-2xl font-bold text-gray-900">100%</h3>
            <p className="text-sm text-gray-500">Safety & Compliance Focus</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillDevelopment;
