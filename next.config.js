/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['rickandmortyapi.com', 'localhost'],
  },
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ['!.test.ts(x)'],
}
