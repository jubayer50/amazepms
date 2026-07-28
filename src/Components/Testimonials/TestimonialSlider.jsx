"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import TestimonialCard from "./TestimonialCard";

const CARD_WIDTH = 390;
const GAP = 24;
const VISIBLE_CARDS = 3;
const STEP = CARD_WIDTH + GAP;

const TestimonialSlider = ({ testimonials }) => {
  // Duplicate data for looping
  const sliderData = useMemo(
    () => [...testimonials, ...testimonials],
    [testimonials],
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef(null);

  // Auto Slide
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  // Reset after first copy
  useEffect(() => {
    if (currentIndex >= testimonials.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(0);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, testimonials.length]);

  return (
    <div
      className="overflow-hidden py-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        animate={{
          x: -(currentIndex * STEP),
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex gap-6"
      >
        {sliderData.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
            active={index === currentIndex + 1}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialSlider;
