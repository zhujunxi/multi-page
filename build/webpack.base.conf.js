const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  entry: "./src/main.js",
  output: {
    publicPath: "/",
    path: path.join(__dirname, "..", "dist"),
    filename: "js/[name].[hash:7].js"
  },
  resolve: {
    alias: {
      // 'vue$': "vue/dist/vue.esm.js",
      // "@": resolve("src")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      // 压缩 去掉所有空格
      minify: {
        collapseWhitespace: false
      }
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        include: path.join(__dirname, "src")
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: "url-loader",
        // include: path.resolve(__dirname + "/src/"),
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  }
};
