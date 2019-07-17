const merge = require("webpack-merge");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const baseWebpackConfig = require("./webpack.base.conf");
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: path.resolve(__dirname, "../"),
    }),
    // Gzip配置
    new CompressionWebpackPlugin({
      test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
      threshold: 8192,
      minRatio: 0.8
    })

  ],
  optimization: {
    minimize: true
  }
});
