import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "psvgroupsand.com",
        pathname: "/**",
      },
    ],
  },
  // Empty turbopack config to silence warning and use default settings
  turbopack: {},
};

export default nextConfig;
