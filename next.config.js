/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
    ]
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    return config
  },
}
