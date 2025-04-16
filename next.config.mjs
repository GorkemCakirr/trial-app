module.exports = {
  async rewrites() {
    return [
      {
        source: "/docs/:path*",
        destination: "https://trial-app-docs.vercel.app/:path*",
      },
    ];
  },
};
