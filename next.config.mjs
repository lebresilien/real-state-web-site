/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '127.0.0.1',
            port: '8000'
          },
          {
            protocol: 'https',
            hostname: 'backend.etsmanagementimmo.com'
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com'
          },
        ],
    },
};

export default nextConfig;
