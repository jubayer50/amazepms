"use client";

import { motion } from "motion/react";
import { Button } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa6";

const FeaturedServiceCard = ({ service }) => {
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
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover="hover"
      className="group relative overflow-hidden rounded-3xl"
    >
      {/* Background Image */}

      <motion.img
        variants={{
          hover: {
            scale: 1.08,
          },
        }}
        transition={{
          duration: 0.5,
        }}
        src={service.image}
        alt={service.title}
        className="h-125 w-full object-cover"
      />

      {/* Gradient */}

      <div className="absolute inset-0 bg-linear-to-t from-[#00194C] via-[#00194C]/60 to-transparent" />

      {/* Glow */}

      <div className="absolute inset-0 bg-[#0055FF]/0 transition-all duration-500 group-hover:bg-[#0055FF]/10" />

      {/* Content */}

      <div className="absolute inset-x-0 bottom-0 p-8">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-md"
        >
          Featured Service
        </motion.span>

        <h3 className="mt-5 text-4xl font-bold text-white">{service.title}</h3>

        <p className="mt-4 max-w-md leading-7 text-white/80">
          Simplify operations with one intelligent solution designed for modern
          residential communities and property managers.
        </p>

        <Button
          endContent={<FaArrowRight />}
          className="mt-8 rounded-xl bg-white text-[#00194C] hover:bg-[#0055FF] hover:text-white"
        >
          Learn More
        </Button>
      </div>
    </motion.div>
  );
};

export default FeaturedServiceCard;
