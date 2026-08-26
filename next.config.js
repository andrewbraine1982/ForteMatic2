/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/best-glp-1-supplement',
        destination: 'https://fortematic-glp1-lander.vercel.app/',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
