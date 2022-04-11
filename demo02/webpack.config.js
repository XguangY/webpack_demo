const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }, // 配置 file-loader
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
          },
        },
        type: "javascript/auto",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
          },
        },
        type: "javascript/auto",
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['cvs-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ],
  },
};
