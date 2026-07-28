"use client";

import { AnimatePresence, motion } from "motion/react";
import { Button } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa6";

const FeatureContent = ({ feature, activeIndex, totalFeatures }) => {
  const Icon = feature.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={feature.id}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.45 }}
        className="flex items-start gap-6 lg:gap-8"
      >
        {/* ================= Progress (Desktop) ================= */}

        <div className="hidden lg:flex flex-col items-center">
          {Array.from({ length: totalFeatures }).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                animate={{
                  backgroundColor:
                    index === activeIndex ? "#0055FF" : "#E5E7EB",
                  color: index === activeIndex ? "#fff" : "#687799",
                  scale: index === activeIndex ? 1.1 : 1,
                }}
                transition={{ duration: 0.35 }}
                className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold"
              >
                {String(index + 1).padStart(2, "0")}
              </motion.div>

              {index !== totalFeatures - 1 && (
                <div className="h-10 w-0.5 bg-gray-200" />
              )}
            </div>
          ))}
        </div>

        {/* ================= Content ================= */}

        <div className="max-w-xl">
          {/* Mobile Progress Dots */}

          <div className="mb-5 flex items-center gap-2 lg:hidden">
            {Array.from({ length: totalFeatures }).map((_, index) => (
              <motion.div
                key={index}
                animate={{
                  backgroundColor:
                    index === activeIndex ? "#0055FF" : "#E5E7EB",
                  scaleX: index === activeIndex ? 1.4 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="h-2 w-2 rounded-full"
              />
            ))}
          </div>

          {/* Icon */}

          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0055FF]/10 text-2xl text-[#0055FF] sm:h-18 sm:w-18 sm:text-3xl"
          >
            <Icon />
          </motion.div>

          {/* Feature Number */}

          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#0055FF] sm:mt-6 sm:text-sm">
            Feature {String(activeIndex + 1).padStart(2, "0")}
          </p>

          {/* Title */}

          <h2 className="mt-3 text-2xl font-bold leading-tight text-[#00194C] sm:mt-4 sm:text-3xl md:text-4xl">
            {feature.title}
          </h2>

          {/* Subtitle */}

          <p className="mt-3 text-base text-[#687799] sm:mt-4 sm:text-xl">
            {feature.subtitle}
          </p>

          {/* Description */}

          <p className="mt-4 text-sm leading-7 text-[#687799] sm:mt-6 sm:text-base sm:leading-8">
            {feature.description}
          </p>

          {/* Bullets */}

          <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
            {feature.bullets.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="flex items-center gap-3 sm:gap-4"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0055FF]/10 sm:h-7 sm:w-7">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#0055FF] sm:h-2 sm:w-2" />
                </div>

                <p className="text-sm font-medium text-[#00194C] sm:text-base">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Button */}

          <Button radius="md" className="mt-7 bg-[#00194C] rounded-md">
            Explore More
            <FaArrowRight className="ml-2" />
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FeatureContent;
