"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import HoverPopup from "./HoverPopup";

const BentoCard = ({ item, className = "" }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.3,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${className}`}
    >
      {/* Image */}

      <motion.img
        src={item.image}
        alt={item.title}
        animate={{
          scale: hovered ? 1.08 : 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="h-full w-full object-cover"
      />

      {/* Overlay */}

      <motion.div
        animate={{
          opacity: hovered ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="absolute inset-0 bg-[#00194C]/35"
      />

      {/* Popup */}

      <AnimatePresence>
        {hovered && (
          <HoverPopup
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BentoCard;
