import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development", 
});

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, 
  },
  reactCompiler: true, 
  turbopack: {}, // <-- ADD THIS LINE to bypass the error
};

export default withPWA(nextConfig);