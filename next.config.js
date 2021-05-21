// next.config.js
const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  // optional
  lessVarsFilePath: "./src/styles/variables.less",
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},
  // Other Config Here...
  webpack(config) {
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.domainsdb.info/:path*", // Proxy to Backend
      },
    ];
  },
});
