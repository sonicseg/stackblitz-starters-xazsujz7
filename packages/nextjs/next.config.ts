import type { NextConfig } from "next";

// Check if running in StackBlitz
const isStackBlitz = process.env.STACKBLITZ === "true" || 
  process.env.WEBCONTAINER_API_URL !== undefined ||
  process.env.NODE_ENV === "development" && typeof process.versions.webcontainer !== "undefined";

const nextConfig: NextConfig = {
  reactStrictMode: !isStackBlitz, // Disable strict mode in StackBlitz to prevent double renders
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  eslint: {
    ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    
    // StackBlitz-specific optimizations
    if (isStackBlitz) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    
    return config;
  },
};

const isIpfs = process.env.NEXT_PUBLIC_IPFS_BUILD === "true";

if (isIpfs) {
  nextConfig.output = "export";
  nextConfig.trailingSlash = true;
  nextConfig.images = {
    unoptimized: true,
  };
}

module.exports = nextConfig;
