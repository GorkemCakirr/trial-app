import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  basePath: "/docs",
  assetPrefix: "/docs-static",
  images: {
    unoptimized: true,
  },
});
