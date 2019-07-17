const merge = require("webpack-merge");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const baseWebpackConfig = require("./webpack.base.conf");

module.exports = merge(baseWebpackConfig, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(["dist", "demo"], {
      root: path.resolve(__dirname, "../"),
    })
  ],
  optimization: {
    minimize: false
  }
});
