/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'd1kgk9u8ytew77.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'lslwzyqjphwssotfbths.supabase.co',
      },
    ],
  },
}

module.exports = nextConfig
