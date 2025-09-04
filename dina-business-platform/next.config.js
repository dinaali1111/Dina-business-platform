/** @type {import('next').NextConfig} */
const nextConfig = {
  // App configuration
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@prisma/client']
  },

  // Performance optimizations
  swcMinify: true,
  compress: true,
  
  // Image optimization
  images: {
    domains: [
      'localhost',
      'dina-business.vercel.app',
      'images.unsplash.com',
      'res.cloudinary.com'
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:;",
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dashboard/admin',
        destination: '/admin',
        permanent: true,
      },
    ];
  },

  // Rewrites for API routes
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: '/api/:path*',
      },
    ];
  },

  // Environment variables
  env: {
    APP_NAME: process.env.APP_NAME || 'Dina Business Platform',
    APP_VERSION: '1.0.0',
  },

  // Build optimization
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Bundle analyzer
    if (process.env.ANALYZE === 'true') {
      const withBundleAnalyzer = require('@next/bundle-analyzer')({
        enabled: true,
      });
      return withBundleAnalyzer(config);
    }

    // Production optimizations
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      };
    }

    return config;
  },

  // Output configuration
  output: 'standalone',
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },

  // PoweredByHeader
  poweredByHeader: false,

  // Trailing slash
  trailingSlash: false,

  // Page extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  // React strict mode
  reactStrictMode: true,
};

// Conditional configurations for different environments
if (process.env.NODE_ENV === 'development') {
  // Development specific configs
  nextConfig.devIndicators = {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  };
}

if (process.env.NODE_ENV === 'production') {
  // Production specific configs
  nextConfig.generateEtags = true;
  nextConfig.httpAgentOptions = {
    keepAlive: true,
  };
}

module.exports = nextConfig;
