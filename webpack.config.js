const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
    devtool: 'source-map',
    entry : {
        public: ['./public/renderdom.js']
    },
    output : {
        path: path.join(__dirname, './public/bundle'),
        filename: 'bundle.js',
        publicPath: '/bundle'
    },

    devtool : 'inline-source-map',
    watch : true,

    // ------------------------------------------------------------------------------
    // Dev Server
    // ------------------------------------------------------------------------------
    devServer : {
    contentBase: path.join(__dirname, "./public/bundle"),
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
    stats: 'errors-only'
    },

    // ------------------------------------------------------------------------------
    // Modules
    // ------------------------------------------------------------------------------
    module: {
        rules: [
            {
                test: /\.json$/,
                loader: "json"
            }, {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['./public/bundle']),
        new ExtractTextPlugin("./public/bundle/app.css"),
    ]
};
