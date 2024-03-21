/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        "/*": "./*",
        "~*": "*",
      },
    },
  },
};

export default nextConfig;
