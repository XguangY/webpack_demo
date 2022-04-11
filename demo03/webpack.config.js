const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  devtool: "inline-source-map",
  devServer: {
    // contentBase: "./dist", // 配置项失效
    static: "./dist",
    hot: true,
  }
};
