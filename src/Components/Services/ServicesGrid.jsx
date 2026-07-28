"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@heroui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

import FeaturedServiceCard from "./FeaturedServiceCard";
import ServiceCard from "./ServiceCard";

const ServicesGrid = ({ services }) => {
  const [showAll, setShowAll] = useState(false);

  const featuredService = services[0];

  const remainingServices = services.slice(1);

  const visibleServices = showAll
    ? remainingServices
    : remainingServices.slice(0, 6);

  return (
    <div className="space-y-10">
      {/* Featured */}

      <FeaturedServiceCard service={featuredService} />

      {/* Grid */}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleServices.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* View All */}

      {remainingServices.length > 6 && (
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="flex justify-center"
        >
          <Button
            size="lg"
            radius="full"
            variant="bordered"
            onPress={() => setShowAll(!showAll)}
            endContent={showAll ? <FaChevronUp /> : <FaChevronDown />}
            className="border-[#0055FF] px-8 text-[#0055FF] hover:bg-[#0055FF] hover:text-white"
          >
            {showAll ? "Show Less" : "View All Services"}
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default ServicesGrid;
