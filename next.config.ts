import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // local images from /public are allowed by default; set qualities to avoid Next warning
    qualities: [100, 75],
  },
  experimental: {
    // disable or adjust Turbopack if it causes crashes on Windows; keep default here
  },
  // If you have Turbopack issues, you can add:
  // turbo: { workerThreads: false }
};

export default nextConfig;
