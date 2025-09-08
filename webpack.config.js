const path = require("path");
module.exports = {
  mode: "development",
  //entry: "./src/iterator/array/index.ts",
  //entry: "./src/strategy/index.ts",
  //entry: "./src/template/index.ts",
  //entry: "./src/adapter/index.ts",
  //entry: "./src/bridge/index.ts",
  entry: "./src/06decorator/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
