/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/best-glp-1-supplement',
        destination: 'https://fortematic-glp1-lander.vercel.app/',
      },
      {
        source: '/best-glp-1-supplement/',
        destination: 'https://fortematic-glp1-lander.vercel.app/',
      },
    ]
  },
}

module.exports = nextConfig
