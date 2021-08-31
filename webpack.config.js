const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  target: "web",
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: [
      {
        directory: path.join(__dirname, "public"),
        publicPath: "/",
        watch: true,
      },
      {
        directory: path.resolve(__dirname, "node_modules"),
        publicPath: "/",
      },
    ],
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
