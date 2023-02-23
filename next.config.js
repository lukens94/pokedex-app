/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@use "@/styles/vendors" as *;`,
  },
}

module.exports = nextConfig
