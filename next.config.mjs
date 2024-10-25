/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => [{ source: "/ibc/:path*", destination: "/api/ibc/:path*" }],
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
