/** @type {import('next').NextConfig} */

var SentryWebpackPlugin = require('@sentry/webpack-plugin')

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
}

module.exports = nextConfig
