/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['rickandmortyapi.com', 'localhost'],
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    outputFileTracingExcludes: {
      '/pages/test': ['./pages/test/*.test.tsx'],
    },
  },
}
