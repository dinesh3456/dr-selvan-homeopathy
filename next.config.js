/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Static export configuration for Hostinger
  output: "export",

  // Add trailing slash to URLs to avoid 404s on static hosting
  trailingSlash: true,

  // Disable server-side features that don't work with static export
  images: {
    // Disable Next.js image optimization for static export
    unoptimized: true,

    // Allow images from external domains (keep your existing domains)
    domains: ["cdn.sanity.io", "images.unsplash.com", "via.placeholder.com"],

    // Image formats for better performance
    formats: ["image/webp", "image/avif"],

    // Image sizes for responsive loading
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Optimize CSS and JS
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Enable SWC minification (already default in Next.js 13+)
  // swcMinify: true, // Removed as it's default

  // Disable x-powered-by header for security
  poweredByHeader: false,

  // Enable experimental features for better performance
  experimental: {
    // Enable modern JavaScript features
    esmExternals: true,
  },

  // Configure webpack for better optimization
  webpack: (config, { dev, isServer }) => {
    // Optimize for production
    if (!dev && !isServer) {
      // Enable tree shaking
      config.optimization.usedExports = true;

      // Split chunks for better caching
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            priority: -10,
            chunks: "all",
          },
        },
      };
    }

    return config;
  },

  // Environment variables (if needed)
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Note: Headers are handled by .htaccess file for static export
  // Cannot use async headers() with output: "export"
};

module.exports = nextConfig;
