const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const baseWebpackConfig = require("./webpack.base.conf");

module.exports = merge(baseWebpackConfig, {
  mode: "production",
  plugins: [new CleanWebpackPlugin(["dist"])],
  optimization: {
    minimize: false
  }
});
