const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@styles'] = path.join(__dirname + '/src', 'styles');
    return config;
  },
};

module.exports = nextConfig;
