import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Parent lockfiles were making Turbopack resolve the wrong root,
  // which caused /public image 404s for newly added covers.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
