/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  publicRuntimeConfig: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  },
};

module.exports = nextConfig;
