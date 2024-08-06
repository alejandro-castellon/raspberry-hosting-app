/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/py/:path*',
          destination: 'http://127.0.0.1:8000/:path*',
        },
      ]
    },
  };
  

export default nextConfig;
