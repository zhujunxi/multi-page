const utils = require("./utils");
const config = require("./config");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    publicPath: "/",
    path: path.join(__dirname, "..", "dist"),
    filename: "js/[name].[hash:7].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
