/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack: cfg => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] },
    });
    return cfg;
  },
  async redirects() {
    return [
      {
        source: '/full-specialty-drink-menu/',
        destination: '/drinks',
        permanent: true,
      },
      {
        source: '/full-specialty-drink-menu',
        destination: '/drinks',
        permanent: true,
      },
      {
        source: '/Specialty-Drinks-Wine-List',
        destination: '/drinks',
        permanent: true,
      },
      {
        source: '/Spirit-Section',
        destination: '/drinks',
        permanent: true,
      },
      {
        source: '/Happy-Hour',
        destination: '/menu',
        permanent: true,
      },
      {
        source: '/whiteclamwednesday/',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/mug-club/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/mug-club',
        destination: '/',
        permanent: true,
      },
      {
        source: '/Trivia-Night-White-Clam-Wednesday',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/Penny-Brunch',
        destination: '/menu',
        permanent: true,
      },
      {
        source: '/Live-Music-Entertainment',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/Special-Events-The-Beer-Garden',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/home/book-a-party',
        destination: '/private-events-and-parties',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
