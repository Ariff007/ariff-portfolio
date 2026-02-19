import type { NextConfig } from "next";

// GitHub Actions automatically sets GITHUB_ACTIONS=true in the CI environment.
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

// NOTE: No basePath needed — the site uses a custom domain (ariffazahari.com)
// which serves from root "/". basePath is only required when serving from a
// subpath like "username.github.io/repo-name/".
const nextConfig: NextConfig = {
  ...(isGitHubActions && { output: "export" }),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
