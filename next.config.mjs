/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        pathname: "**",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
