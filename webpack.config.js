const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  plugins: [
    new HTMLWebpackPlugin({
      title: "easyTodo | Manage your tasks",
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
