const { PHASE_PRODUCTION_SERVER } = require('next/constants');

const { default: classnamesMinifier } = require('rs-next-classnames-minifier');

/** @type {import('next').NextConfig} */

module.exports = async (phase) => {
  let nextConfig = {
    experimental: {
      appDir: true,
    },
  };

  if (
    phase !== PHASE_PRODUCTION_SERVER &&
    process.env.NODE_ENV !== 'development'
  ) {
    nextConfig = classnamesMinifier({
      prefix: '_',
      reservedNames: ['_en', '_de'],
      disabled: false, // Enable or disable based on your condition
    })(nextConfig);
  }

  return nextConfig;
};
