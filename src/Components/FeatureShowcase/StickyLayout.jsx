"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

import { featureData } from "./featureData";
import FeatureContent from "./FeatureContent";
import DashboardPreview from "./DashboardPreview";

const StickyLayout = () => {
  // References
  const containerRef = useRef(null);

  // Active Feature
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll Progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Detect Current Feature

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = featureData.length;

    const section = Math.min(total - 1, Math.floor(latest * total));

    setActiveIndex((prev) => (prev === section ? prev : section));
  });

  // Current Feature

  const currentFeature = featureData[activeIndex];

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        height: `${featureData.length * 100}vh`,
      }}
    >
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-10 px-4 py-8 sm:gap-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-0 lg:px-3">
          {/* ================= Left Side ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            className="flex-1"
          >
            <FeatureContent
              feature={currentFeature}
              activeIndex={activeIndex}
              totalFeatures={featureData.length}
            ></FeatureContent>
          </motion.div>

          {/* ================= Right Side ================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.45,
            }}
            className="flex flex-1 justify-center lg:justify-end"
          >
            <DashboardPreview feature={currentFeature}></DashboardPreview>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StickyLayout;
