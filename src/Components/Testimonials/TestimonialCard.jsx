"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial, active = false }) => {
  const { name, designation, company, image, review, rating = 5 } = testimonial;

  return (
    <motion.div
      animate={{
        scale: active ? 1 : 0.95,
        opacity: active ? 1 : 0.65,
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="w-[420px] shrink-0"
    >
      <div
        className="
          group
          relative
          flex
          h-85
          flex-col
          overflow-hidden
          rounded-xl
          border
          border-white/10
          bg-linear-to-br
          from-white/10
          via-white/5
          to-white/10
          p-7
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-[#2F6BFF]/40
          hover:shadow-[0_20px_60px_rgba(47,107,255,.18)]
        "
      >
        {/* Glow */}
        <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#2F6BFF]/10 blur-3xl transition-all duration-500 group-hover:bg-[#2F6BFF]/20" />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2F6BFF]/15 text-[#4F8BFF]">
            <FaQuoteLeft size={24} />
          </div>

          <div className="flex items-center gap-1">
            {Array.from({ length: rating }).map((_, index) => (
              <FaStar key={index} size={16} className="text-yellow-400" />
            ))}
          </div>
        </div>

        {/* Review */}
        <div className="relative z-10 mt-6 min-h-[120px] flex-1">
          <p className="line-clamp-5 text-[15px] leading-7 text-white/75">
            {review}
          </p>
        </div>

        {/* Footer */}
        <div className="relative z-10 mt-auto border-t border-white/10 pt-5">
          <div className="flex items-center gap-4">
            <Image
              src={image}
              alt={name}
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover ring-2 ring-[#2F6BFF]/40"
            />

            <div className="min-w-0 flex-1">
              <h3 className="truncate text-lg font-semibold text-white">
                {name}
              </h3>

              <p className="truncate text-sm text-white/60">{designation}</p>

              <p className="truncate text-sm font-medium text-[#4F8BFF]">
                {company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
