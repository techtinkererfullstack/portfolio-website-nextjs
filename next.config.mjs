/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true, // Use true for a permanent 308 redirect, or false for a temporary 307
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**", // Allows all paths from this host
      },
    ],
  },
}

export default nextConfig
