const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf');

const prodConfig = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader?modules&localIdentName=[local]-[hash:base64:5]',
                    'postcss-loader',
                    'stylus-loader'
                ],
                include: path.resolve(__dirname, '../src')
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css'
        })
    ]
};

module.exports = merge(baseConfig, prodConfig);
