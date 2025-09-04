/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['prisma', '@prisma/client'],
  },
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
