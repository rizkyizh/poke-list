const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 8192, // batas ukuran file
              name: "[name].[hash:7].[ext]", // nama file output
              encoding: "base64", // format encoding file
              fallback: "file-loader", // fallback ke file-loader jika ukuran file melebihi batas
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: "/index.html" },
        { from: /^\/pages\/about$/, to: "/about.html" },
        { from: /^\/pages\/start$/, to: "/start.html" },
      ],
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      cleanUrls: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/about.html",
      filename: "about.html",
      cleanUrls: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/start.html",
      filename: "start.html",
      cleanUrls: true,
    }),
  ],
};
