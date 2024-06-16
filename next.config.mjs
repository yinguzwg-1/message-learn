/** @type {import('next').NextConfig} */

const repo = "message-pro";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  basePath,
  assetPrefix,
  output: "export",
  experimental: {
    appDir: true,
    swcPlugins: [["next-superjson-plugin", {}]],
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
export default nextConfig;
