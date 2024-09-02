/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "indcdn.indmoney.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
