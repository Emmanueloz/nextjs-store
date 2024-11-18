import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    prependData: `@use "src/sass/main.scss" as *;`,
  },
};

export default nextConfig;
