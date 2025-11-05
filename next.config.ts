import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disable image optimization to avoid SSL issues with external images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "psvgroupsand.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: '',
        pathname: "/**",
      },
    ],
  },
  // Empty turbopack config to silence warning and use default settings
  turbopack: {},
};

export default nextConfig;
