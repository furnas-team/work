const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const clientConfig = {
  entry: ["babel-polyfill", "./src/main/client/client.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "work.client.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }]
        })
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
};

const serverConfig = {
  entry: ["babel-polyfill", "./src/main/server/server.js"],
  target: 'node',
  output: {
    path: path.resolve(__dirname, "server"),
    filename: "work.server.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  }
};

module.exports = [clientConfig, serverConfig];