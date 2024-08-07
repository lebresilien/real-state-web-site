/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'designbygio.it',
          },
        ],
    },
};

export default nextConfig;
