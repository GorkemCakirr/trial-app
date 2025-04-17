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
        destination: `${DOCS_URL}/:path*`,
      },
      {
        source: "/docs-static/:path*",
        destination: `${DOCS_URL}/docs-static/:path*`,
      },
    ];
  },
};
