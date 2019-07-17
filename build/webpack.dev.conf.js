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
    contentBase: path.join(__dirname, "dist"),
    host: '172.16.3.102',
    port: '8088'
  }
});
