import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@nexus/shared"],
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;

