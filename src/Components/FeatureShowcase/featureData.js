import {
  FaBuilding,
  FaUsers,
  FaScrewdriverWrench,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa6";

export const featureData = [
  {
    id: 1,

    icon: FaBuilding,

    title: "Property Management",

    subtitle: "Manage all your properties from one centralized dashboard.",

    description:
      "Keep every apartment, building, and unit organized with an intuitive management system that gives you complete control over occupancy, residents, and property information.",

    bullets: [
      "Centralized property records",
      "Real-time occupancy tracking",
      "Manage multiple properties",
      "Property insights & reports",
    ],

    stats: {
      label: "Properties",
      value: "580+",
      secondary: "98% Occupancy",
    },

    chart: [45, 70, 55, 90, 65, 120, 95],
  },

  {
    id: 2,

    icon: FaUsers,

    title: "Visitor Management",

    subtitle: "Secure and streamline visitor access.",

    description:
      "Digitize visitor registration with instant approvals, QR code entry, and real-time visitor monitoring to improve community security.",

    bullets: [
      "Digital visitor registration",
      "QR code access",
      "Approval notifications",
      "Visitor history",
    ],

    stats: {
      label: "Visitors Today",
      value: "128",
      secondary: "24 Pending",
    },

    chart: [35, 60, 80, 75, 95, 105, 115],
  },

  {
    id: 3,

    icon: FaScrewdriverWrench,

    title: "Maintenance Requests",

    subtitle: "Handle maintenance efficiently.",

    description:
      "Track maintenance requests, assign technicians, monitor progress, and resolve issues faster with a centralized maintenance workflow.",

    bullets: [
      "Maintenance tickets",
      "Assign technicians",
      "Track work status",
      "Priority scheduling",
    ],

    stats: {
      label: "Active Requests",
      value: "36",
      secondary: "92% Completed",
    },

    chart: [25, 50, 45, 75, 95, 85, 105],
  },

  {
    id: 4,

    icon: FaMoneyBillWave,

    title: "Billing & Payments",

    subtitle: "Simplify rent collection and payments.",

    description:
      "Generate invoices, monitor payments, automate reminders, and keep financial records organized from one secure platform.",

    bullets: [
      "Online rent collection",
      "Invoice generation",
      "Payment reminders",
      "Financial reports",
    ],

    stats: {
      label: "Monthly Revenue",
      value: "$48K",
      secondary: "18% Growth",
    },

    chart: [55, 70, 90, 110, 95, 120, 135],
  },

  {
    id: 5,

    icon: FaChartLine,

    title: "Analytics & Reports",

    subtitle: "Make smarter business decisions.",

    description:
      "Monitor occupancy, revenue, maintenance performance, and operational insights with beautiful real-time analytics dashboards.",

    bullets: [
      "Performance analytics",
      "Revenue reports",
      "Occupancy insights",
      "Exportable reports",
    ],

    stats: {
      label: "Performance",
      value: "99.9%",
      secondary: "System Uptime",
    },

    chart: [65, 80, 95, 120, 110, 135, 150],
  },
];
