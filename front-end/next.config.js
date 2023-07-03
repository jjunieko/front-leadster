/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    webpack: (config) => {
        config.resolve.alias['@fonts'] = path.join(__dirname, 'public/fonts');
        return config;
      },
      ignoreDuringBuilds: true,
}

module.exports = nextConfig
