"use strict"
const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const LiveReloadPlugin = require("webpack-livereload-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")


let filename
let plugins = [
  new CopyWebpackPlugin([
    {from: "./src/assets/css", to: "css"},
    {from: "./src/assets/fonts", to: "fonts"},
    {from: "./src/assets/img", to: "img"},
    {from: "./src/assets/js", to: "js"}
  ]),
  new HtmlWebpackPlugin({
    template: "./src/assets/index.html"
  })
]


if (process.env.NODE_ENV !== "production") {
  filename = "[name].js"
  plugins.push(
    new LiveReloadPlugin({appendScriptTag: true}),
    new MiniCssExtractPlugin({filename: "styles.css"})
  )
} else {
  filename = "[name].[contenthash].js"
  plugins.push(
    new MiniCssExtractPlugin({filename: "styles.[contenthash].css"}),
    new OptimizeCssAssetsPlugin({})
  )
}


module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: {
    bundle: path.resolve(__dirname, "../src/app/main.tsx")
  },
  output: {
    path: path.resolve(__dirname, "../app/"),
    filename
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
}
