/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
	domains: ["askmybook.com"]
  }
}

module.exports = nextConfig
