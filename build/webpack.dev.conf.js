const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf');

const devConfig = {
    mode: 'development',
    entry: {
        app: [
            'react-hot-loader/patch',
            path.resolve(__dirname, '../src/index.js')
        ]
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, '../dist'),
        historyApiFallback: true,
        host: '0.0.0.0',
        hot: true,
        proxy: {
            "/api/*": "http://localhost:8090/$1"
        }
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader?modules&localIdentName=[local]-[hash:base64:5]',
                    'postcss-loader',
                    'stylus-loader'
                ],
                include: path.resolve(__dirname, '../src')
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html')
        })
    ]
};

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(baseConfig, devConfig);
