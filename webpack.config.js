/**
 * Created by Patrik on 11/7/2016.
 */

//var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        javascript: __dirname + '/src/app.jsx'
        //html: __dirname + '/src/index.html'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'ms.js'
    },
    devServer: {
        port: 8084,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }/*,
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            }*/
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Moll & Šimunič',
            template: './src/index.html'
        })
    ]
};
