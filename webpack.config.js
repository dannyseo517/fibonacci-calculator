const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './app/index.tsx',
    module: {
        rules: [
            {
                test: /\.html&/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                    }
                }]
            },
            {
                test: /\.(woff|woff2|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader",
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.ts|.txs?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [{
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'images/',
                    publicPath: 'images/'
                  },
                }]
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            'Actions': path.resolve(__dirname, 'app/actions'),
            'Common': path.resolve(__dirname, 'app/components/common'),
            'Components': path.resolve(__dirname, 'app/components'),
            'Constants': path.resolve(__dirname, 'app/constants'),
            'Helpers':  path.resolve(__dirname, 'app/helpers'),
            'Reducers': path.resolve(__dirname, 'app/reducers'),
            'Styles': path.resolve(__dirname, 'app/styles')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'bright-card',
            filename: 'index.html',
            template: './public/index.html',
            inject: 'head'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
            chunkFilename: '[id].css'
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}