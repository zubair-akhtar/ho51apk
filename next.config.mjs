/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['swapinfo.xyz', 'storage.googleapis.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'swapinfo.xyz',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/workspace-**',
      },
    ],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/blog/hot51-mod-apk-no-ads-version',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/hot51-mod-apk-unlimited-money-and-credits',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig