/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static generation for dynamic pages
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}
module.exports = nextConfig
