const path = require('path');
require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/initiatives',
  async rewrites() {
    return [
      { source: '/initiatives/_next/:path*', destination: '/_next/:path*' },
      { source: '/initiatives/:path*', destination: '/:path*' },
    ];
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@styles'] = path.join(__dirname + '/src', 'styles');
    return config;
  },
};

module.exports = nextConfig;
