const path = require("path");
module.exports = {
  mode: "development",
  //entry: "./src/01Iterator/array/index.ts",
  //entry: "./src/02Strategy/index.ts",
  //entry: "./src/03Template/index.ts",
  //entry: "./src/04Adapter/index.ts",
  //entry: "./src/05Bridge/index.ts",
  //entry: "./src/06Decorator/index.ts",
  //entry: "./src/07Singleton/index.ts",
  entry: "./src/08Flyweight/index.ts",
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
