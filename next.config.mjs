/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // allow any host
      },
    ],
  },
};

export default nextConfig;
