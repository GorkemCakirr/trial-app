const DOCS_URL = "https://trial-app-docs.vercel.app";

export default {
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: `${DOCS_URL}/docs`,
      },
      {
        source: "/docs/:path*",
        destination: `${DOCS_URL}/docs/:path*`,
      },
      {
        source: "/docs-static/_next/:path*",
        destination: `${DOCS_URL}/docs-static/_next/:path*`,
      },
    ];
  },
};
