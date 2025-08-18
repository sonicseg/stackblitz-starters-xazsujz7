import type { NextConfig } from "next";

// Check if running in StackBlitz
const isStackBlitz = process.env.STACKBLITZ === "true" || 
  process.env.WEBCONTAINER_API_URL !== undefined ||
  process.env.NODE_ENV === "development" && typeof process.versions.webcontainer !== "undefined";

const nextConfig: NextConfig = {
  reactStrictMode: !isStackBlitz, // Disable strict mode in StackBlitz to prevent double renders
  devIndicators: false,
  typescript: {
    // Always ignore TypeScript errors in StackBlitz
    ignoreBuildErrors: isStackBlitz || process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  eslint: {
    // Always ignore ESLint errors in StackBlitz
    ignoreDuringBuilds: isStackBlitz || process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
    dirs: isStackBlitz ? [] : ['app', 'components', 'hooks', 'services', 'utils'], // Skip ESLint in StackBlitz
  },
  // Fix for Coinbase Wallet SDK
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups", // Allow popups for Coinbase Smart Wallet
          },
        ],
      },
    ];
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
