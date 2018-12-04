"use strict";
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


let plugins = [
  new MiniCssExtractPlugin({
    filename: "styles.css"
  })
];


module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "../src/package/index.ts"),
  output: {
    path: path.resolve(__dirname, "../build/"),
    filename: `zzz.js`
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.css$/,
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              localIdentName: "react-plus-[name]-[local]-[hash:base64:5]",
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins: plugins
};
