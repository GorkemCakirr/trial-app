import nextra from "nextra";

const withNextra = nextra({});

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  basePath: "/docs",
  assetPrefix: "/docs-static",
  images: {
    remotePatterns: [{hostname: "bucketui.com"}],
  },
});
