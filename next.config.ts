import type { NextConfig } from "next";

// GitHub Actions automatically sets GITHUB_ACTIONS=true in the CI environment.
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  // Only enable static export when building for GitHub Pages
  ...(isGitHubActions && { output: "export" }),
  // Set basePath only in CI so assets resolve correctly on GitHub Pages
  basePath: isGitHubActions ? "/ariff-portfolio" : "",
  // Required for GitHub Pages: generates index.html per route instead of /route.html
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
