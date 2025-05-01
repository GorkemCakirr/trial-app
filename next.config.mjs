const DOCS_URL = "https://trial-app-docs.vercel.app";

export default {
  async rewrites() {
    console.log("rewrites");
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
        source: "/docs-static/:path*",
        destination: `${DOCS_URL}/docs-static/:path*`,
      },
    ];
  },
};
