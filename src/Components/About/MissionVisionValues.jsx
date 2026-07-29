"use client";

import { motion } from "motion/react";
import {
  HiOutlineRocketLaunch,
  HiOutlineEye,
  HiOutlineHeart,
  HiCheckCircle,
} from "react-icons/hi2";

const values = [
  "Respect",
  "Integrity",
  "Excellence",
  "Sustainability",
  "Customer Focus",
  "Business Ethics",
];

const segments = [
  "Commercial & IT Parks",
  "Corporate Offices",
  "Educational Institutions",
  "Residential Communities",
  "Hotels & Hospitals",
  "Industries",
  "Infrastructure & Construction Sites",
  "Shopping Malls & Retail Stores",
  "Manufacturing Units",
  "Special Events",
  "Warehouses",
  "Pharma",
];

const MissionVisionValues = () => {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-330 px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="rounded-full bg-[#0055FF]/10 px-3 py-1 text-sm font-semibold text-[#0055FF]">
            Our Foundation
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#00194c] md:text-5xl">
            Mission, Vision & Values
          </h2>

          <p className="mt-4 text-gray-700">
            Our commitment to quality, innovation, and customer satisfaction
            drives every service we deliver.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-[#0055FF20] bg-white p-6 shadow transition-all duration-300 hover:-translate-y-1 hover:border-[#0055FF] hover:shadow-md"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-[#0055FF]/10">
              <HiOutlineRocketLaunch className="text-3xl text-[#0055FF]" />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-[#00194c]">
              Our Mission
            </h3>

            <p className="leading-7 text-gray-700">
              Our mission is to be a leading provider of comprehensive property
              management solutions across PAN India by delivering exceptional
              services while prioritizing technology, sustainability, and the
              well-being of our employees.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-[#0055FF20] bg-white p-6 shadow transition-all duration-300 hover:-translate-y-1 hover:border-[#0055FF] hover:shadow-md"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-[#0055FF]/10">
              <HiOutlineEye className="text-3xl text-[#0055FF]" />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-[#00194c]">
              Our Vision
            </h3>

            <p className="leading-7 text-gray-700">
              Our vision is to transform the property management industry by
              setting new standards of excellence, innovation, cost efficiency,
              and sustainable services through continuous improvement and a
              client-centric approach.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-lg border border-[#0055FF20] bg-white p-6 shadow"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#0055FF]/10">
              <HiOutlineHeart className="text-3xl text-[#0055FF]" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#00194c]">
                Our Core Values
              </h3>

              <p className="text-gray-700">
                The principles that define our culture and commitment.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-full border border-[#0055FF]/20 bg-[#0055FF]/10 px-4 py-2 font-medium text-[#00194c]"
              >
                {value}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Segments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-lg border border-[#0055FF20] bg-white p-6 shadow"
        >
          <h3 className="mb-8 text-2xl font-bold text-[#00194c]">
            Segments We Cater To
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {segments.map((segment) => (
              <div
                key={segment}
                className="flex items-center gap-3 rounded-lg border border-[#0055FF25] p-4 transition-all duration-300 hover:border-[#0055FF] hover:bg-[#0055FF]/5"
              >
                <HiCheckCircle className="text-xl text-[#0055FF]" />
                <span className="text-gray-700">{segment}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
