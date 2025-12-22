/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    runtime: 'edge',
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
