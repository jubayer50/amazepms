"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import Client1 from "@/assets/clients/client1.jpg";
import Client2 from "@/assets/clients/client2.png";
import Client5 from "@/assets/clients/client5.png";
import Client6 from "@/assets/clients/client6.png";
import Client7 from "@/assets/clients/client7.jpg";
import Client8 from "@/assets/clients/client8.png";
import Client9 from "@/assets/clients/client9.png";
import Client10 from "@/assets/clients/client10.png";
import Client11 from "@/assets/clients/client11.png";
import Client12 from "@/assets/clients/client12.png";
import Client13 from "@/assets/clients/client13.png";
import Client14 from "@/assets/clients/client14.png";

const logos = [
  {
    name: "client1",
    image: Client1,
  },
  {
    name: "client2",
    image: Client2,
  },
  {
    name: "client5",
    image: Client5,
  },
  {
    name: "client6",
    image: Client6,
  },
  {
    name: "client7",
    image: Client7,
  },
  {
    name: "client8",
    image: Client8,
  },
  {
    name: "client9",
    image: Client9,
  },
  {
    name: "client10",
    image: Client10,
  },
  {
    name: "client11",
    image: Client11,
  },
  {
    name: "client12",
    image: Client12,
  },
  {
    name: "client13",
    image: Client13,
  },
  {
    name: "client14",
    image: Client14,
  },
];

const Clients = () => {
  return (
    <section className="bg-[#00194C] py-8">
      <div className="max-w-330 mx-auto px-3">
        {/* Heading */}

        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[4px] text-[#8FB4FF]">
            Trusted Technologies
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
            Integrated With Industry-Leading Platforms
          </h2>
        </div>

        {/* Marquee */}

        <Marquee speed={38} gradient={false}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-3 md:mx-6 flex w-28 h-18 p-2 items-center justify-center rounded-md border bg-[#082763] transition-all duration-300 border-[#0055FF] hover:bg-[#0A2E77] overflow-hidden"
            >
              <Image
                src={logo.image}
                alt={logo.name}
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Clients;
