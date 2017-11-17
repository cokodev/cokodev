const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
  devtool: 'source-map',
  watch:false,

entry : {
  public: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './public/renderdom.js']
},

devServer : {
  contentBase : path.join(__dirname, "./public/bundle"),
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  },
  port: 9999,
  compress: false,
  inline: true,
  overlay: true,
  historyApiFallback: true,
  hot: true,
  stats:'errors-only'
},

  module: {
    loaders: [
      {
        test : /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader : "babel-loader",
        query: {
          presets: ['react', 'es2015', 'react-hmre'],
        }
      },
      {
        test: [/\.scss$/,/\.css$/],
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          { loader: 'file-loader' }
        ]
      }
    ]
},

  output : {
  path : path.join(__dirname,'./public/bundle'),
  filename: 'bundle.js',
  publicPath : '/bundle'
  },

  plugins: [
  new CleanWebpackPlugin(['./public/bundle']),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
]
};
