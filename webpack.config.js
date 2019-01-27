const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.ts|.txs?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
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
        extensions: ['.tsx', '.ts', '.js', ".json"],
        alias: {
            'Assets': path.resolve(__dirname, 'public/assets'),
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
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
            chunkFilename: '[id].css'
        }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'docs')
    }
}