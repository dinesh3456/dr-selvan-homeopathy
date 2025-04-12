/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
    unoptimized: true,
  },
  experimental: {
    // These experimental features may need to be adjusted based on Next.js 15
    appDir: true,
  },
};

module.exports = nextConfig;
