// const path = require('path');
// const fs = require('fs');

// const HtmlWebpackPlugin = require('html-webpack-plugin');

// // App directory
// const appDirectory = fs.realpathSync(process.cwd());

// // Gets absolute path of file within app directory
// const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

// // Host
// const host = process.env.HOST || 'localhost';

// // Required for babel-preset-react-app
// process.env.NODE_ENV = 'development';
const CopyPlugin = require("copy-webpack-plugin");
const htmlPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
      './client/index.js'
    ],
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      compress: true,
      port: 4000,
      publicPath: '/'
    },
    mode: 'development',
    plugins: [
      new htmlPlugin({
        template: 'public/index.html',
      }),
      new CopyPlugin({
        patterns:[
          {from: './public/favicon.ico' },
        ]
      })
    ],
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',          
          options:{
            presets: ['@babel/preset-env']
          },
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    }
  }