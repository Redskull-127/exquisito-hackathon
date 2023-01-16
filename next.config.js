/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com", "player.vimeo.com"],
    unoptimized: true,
    loader: "akamai",
    path: ''
  },
  basePath: "",
  assetPrefix: "",
  
}

module.exports = nextConfig
