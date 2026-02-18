import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ariff-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
