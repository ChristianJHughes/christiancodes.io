const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/resume",
        destination: "/christian-hughes-resume.pdf",
      },
    ];
  },
});
