/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3-alpha-sig.figma.com"],
  },
  remotePatterns: [
    {
      protocol: "https",
      hostname: "example.com",
      port: "",
      pathname: "/**",
    },
  ],
};

export default nextConfig;
