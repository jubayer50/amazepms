"use client";

import BentoCard from "./BentoCard";

const BentoGallery = ({ data }) => {
  return (
    <div className="grid h-500 md:h-162.5 grid-cols-1 md:grid-cols-2 lg:grid-rows-6 gap-5">
      {/* Large Card */}

      <BentoCard item={data[0]} className="md:col-span-1 md:row-span-4" />

      {/* Top Right */}

      <BentoCard item={data[1]} className="md:col-span-1 md:row-span-2" />

      {/* Middle Right */}

      <BentoCard item={data[2]} className="md:col-span-1 md:row-span-2" />

      {/* Bottom Wide */}

      <BentoCard item={data[3]} className="md:col-span-2 md:row-span-2" />
    </div>
  );
};

export default BentoGallery;
