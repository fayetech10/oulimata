/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Next 16 only honours quality values declared here. 75 is the default used
    // by the photos; 90 is the hero, whose source is already tightly compressed
    // and shouldn't lose a second generation on re-encode; 95 keeps the logo's
    // thin script from muddying in WebP.
    qualities: [75, 90, 95],
  },
};

export default nextConfig;
