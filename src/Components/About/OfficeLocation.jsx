"use client";

import { motion } from "motion/react";
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineClock,
} from "react-icons/hi2";

const contactInfo = [
  {
    icon: HiOutlineMapPin,
    title: "Office Address",
    value: (
      <>
        4th Floor, High Mark Chambers,
        <br />
        Khajaguda X Road,
        <br />
        Cyberabad, Hyderabad - 500008
      </>
    ),
  },
  {
    icon: HiOutlinePhone,
    title: "Phone",
    value: "+91 91006 94137",
  },
  {
    icon: HiOutlineEnvelope,
    title: "Email",
    value: "info@amazepms.com",
  },
  {
    icon: HiOutlineClock,
    title: "Office Hours",
    value: (
      <>
        Monday – Saturday
        <br />
        9:00 AM – 6:00 PM
      </>
    ),
  },
];

const OfficeLocation = () => {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-330 px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="rounded-full bg-[#0055FF]/10 px-3 py-1 text-sm font-semibold text-[#0055FF]">
            Contact & Location
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#00194c] md:text-5xl">
            Visit Our Office
          </h2>

          <p className="mt-4 text-gray-600">
            Whether you have a question about our services or would like to
            discuss your facility management requirements, our team is ready to
            assist you.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-5"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-start gap-5 rounded-lg border border-gray-200 bg-white p-4 shadow transition-all duration-300 hover:-translate-y-1 hover:border-[#0055FF] hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#0055FF]/10">
                    <Icon className="text-3xl text-[#0055FF]" />
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-[#00194c]">
                      {item.title}
                    </h3>

                    <div className="leading-7 text-gray-600">{item.value}</div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-lg border border-gray-200 shadow"
          >
            <iframe
              title="Amaze PMS Office Location"
              src="https://www.google.com/maps?q=High+Mark+Chambers,+Khajaguda+X+Road,+Cyberabad,+Hyderabad-500008&output=embed"
              width="100%"
              height="550"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;
