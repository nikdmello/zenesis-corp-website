import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.8.67", "192.168.8.69"],
  images: {
    qualities: [68, 75],
  },
};

export default nextConfig;
