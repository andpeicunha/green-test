/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  pageExtensions: ['Styles.tsx', 'Styles.ts', 'Styles.jsx', 'Styles.js'],
  images: {
    domains: ['rickandmortyapi.com', 'localhost'],
  },
  compiler: {
    styledComponents: true,
  },

}
