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

      // Product hero image
      {
        source: '/glp1-hero.png',
        destination: 'https://raw.githubusercontent.com/andrewbraine1982/fortematic-glp1-lander/main/glp1-hero.png',
      },

      // Keep nested route too
      {
        source: '/best-glp-1-supplement/glp1-hero.png',
        destination: 'https://raw.githubusercontent.com/andrewbraine1982/fortematic-glp1-lander/main/glp1-hero.png',
      },
    ]
  },
}

module.exports = nextConfig
