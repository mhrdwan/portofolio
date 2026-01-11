/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.upwork.com",
        port: "",
        pathname: "/att/download/**",
      },
      {
        protocol: "https",
        hostname: "www.w3schools.com",
        port: "",
        pathname: "/html/**",
      },
      {
        protocol: "https",
        hostname: "www.learningcontainer.com",
        port: "",
        pathname: "/wp-content/**",
      },
    ],
  },

  // Enable compression
  compress: true,

  // Turbopack configuration (Next.js 16+)
  turbopack: {},

  // Bundle analyzer for debugging (optional)
  webpack: (config, { isServer }) => {
    // Optimize bundle size
    config.optimization.splitChunks = {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
        images: {
          test: /\.(png|jpg|jpeg|gif|webp|svg)$/,
          name: "images",
          chunks: "all",
          enforce: true,
        },
      },
    };

    return config;
  },

  // Enable static optimization
  trailingSlash: false,

  // Reduce JavaScript bundle size
  experimental: {
    optimizeCss: true,
  },

  // SEO and performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Cache images for better performance
        source: "/IMG/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache optimized images
        source: "/IMG/optimized/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/portofolio",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
