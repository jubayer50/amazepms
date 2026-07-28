"use client";

import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ service, index }) => {
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
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: index * 0.05,
        duration: 0.5,
      }}
      whileHover="hover"
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
    >
      {/* Background Image */}

      <motion.img
        src={service.image}
        alt={service.title}
        variants={{
          hover: {
            scale: 1.1,
          },
        }}
        transition={{
          duration: 0.5,
        }}
        className="h-72 w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-linear-to-t from-[#00194C] via-[#00194C]/55 to-transparent transition-all duration-500 group-hover:via-[#00194C]/70" />

      {/* Glow */}

      <div className="absolute inset-0 bg-[#0055FF]/0 transition-all duration-500 group-hover:bg-[#0055FF]/10" />

      {/* Border */}

      <div className="absolute inset-0 rounded-2xl border border-white/10 transition-all duration-300 group-hover:border-[#4DA3FF]" />

      {/* Badge */}

      <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
        Service
      </div>

      {/* Content */}

      <div className="absolute inset-x-0 bottom-0 p-5">
        <motion.h3
          variants={{
            hover: {
              y: -8,
            },
          }}
          className="text-xl font-bold text-white"
        >
          {service.title}
        </motion.h3>

        <motion.p
          variants={{
            hover: {
              opacity: 1,
              y: 0,
            },
          }}
          initial={{
            opacity: 0,
            y: 12,
          }}
          className="mt-3 text-sm leading-6 text-white/75"
        >
          Smart solutions that simplify operations and improve the resident
          experience.
        </motion.p>

        <motion.div
          variants={{
            hover: {
              opacity: 1,
              y: 0,
            },
          }}
          initial={{
            opacity: 0,
            y: 15,
          }}
          className="mt-5 flex items-center gap-2 text-sm font-medium text-[#6BB7FF]"
        >
          Learn More
          <motion.div
            variants={{
              hover: {
                x: 5,
              },
            }}
          >
            <FaArrowRight />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
