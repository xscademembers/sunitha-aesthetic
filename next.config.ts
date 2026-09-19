import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Standalone + Vercel's adapter breaks on Next 16.3 (missing next-server.js.nft.json).
  // Keep standalone for self-hosted/Docker builds; disable it on Vercel.
  output: process.env.VERCEL ? undefined : "standalone",
  async redirects() {
    return [
      {
        source: "/home-2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home-1",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/gynecomastia",
        destination: "/services/gynecomastia-treatment-in-visakhapatnam",
        permanent: true,
      },
      {
        source: "/services/glandular-gynecomastia-correction",
        destination: "/services/gynecomastia-treatment-in-visakhapatnam",
        permanent: true,
      },
      {
        source: "/services/puffy-nipple-correction",
        destination: "/services/gynecomastia-treatment-in-visakhapatnam",
        permanent: true,
      },
      {
        source: "/services/laser-toning",
        destination: "/services/laser-skin-rejuvenation",
        permanent: true,
      },
      {
        source: "/services/laser-for-pigmentation",
        destination: "/services/pigmentation-treatment",
        permanent: true,
      },
      {
        source: "/services/microblading",
        destination: "/services/eyebrow-transplant",
        permanent: true,
      },
      {
        source: "/services/forma",
        destination: "/services/morpheus8",
        permanent: true,
      },
      {
        source: "/services/hair-treatments",
        destination: "/services/prp-hair-treatment",
        permanent: true,
      },
      {
        source: "/services/chest-reconstruction",
        destination: "/services/breast-reconstruction",
        permanent: true,
      },
      {
        source: "/services/lip-surgery",
        destination: "/services/lip-lift",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
