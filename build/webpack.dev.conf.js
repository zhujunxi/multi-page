const utils = require("./utils");
const config = require("./config");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");
const path = require("path");

module.exports = merge(baseWebpackConfig, {
  mode: "development",
  optimization: {
    minimize: false
  },
  devServer: {
    publicPath: "/",
    contentBase: path.join(__dirname, "dist")
  }
});
