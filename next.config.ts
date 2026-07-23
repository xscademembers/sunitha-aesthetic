import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/services/gynecomastia",
        destination: "/services/gynecomastia-treatment-in-visakhapatnam",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
