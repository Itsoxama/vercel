import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/cfs/:path*',
        destination: 'https://cfsapi.infibrain.com/:path*', // Proxy
      },
    ];
  },
};

export default nextConfig;
