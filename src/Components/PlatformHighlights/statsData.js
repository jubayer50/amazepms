import {
  FaBuilding,
  FaUsers,
  FaShieldHalved,
  FaHeadset,
} from "react-icons/fa6";

export const statsData = [
  {
    id: 1,
    icon: FaBuilding,
    value: 500,
    suffix: "+",
    title: "Communities",
    description:
      "Trusted by residential communities and property managers nationwide.",
    color: "from-[#0055FF] to-[#3B82F6]",
  },

  {
    id: 2,
    icon: FaUsers,
    value: 50000,
    suffix: "+",
    title: "Residents",
    description:
      "Delivering a seamless experience for thousands of residents every day.",
    color: "from-[#06B6D4] to-[#3B82F6]",
  },

  {
    id: 3,
    icon: FaShieldHalved,
    value: 99.9,
    suffix: "%",
    decimals: 1,
    title: "System Uptime",
    description:
      "Reliable cloud infrastructure with enterprise-grade performance.",
    color: "from-[#2563EB] to-[#0EA5E9]",
  },

  {
    id: 4,
    icon: FaHeadset,
    value: 24,
    suffix: "/7",
    title: "Support",
    description:
      "Dedicated customer support whenever your team needs assistance.",
    color: "from-[#0EA5E9] to-[#22D3EE]",
  },
];
