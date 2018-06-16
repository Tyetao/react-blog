const path = require('path');

commonConfig = {
    entry: {
        app: [
            path.resolve(__dirname, '../src/index.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[name].[chunkhash].js',
        publicPath: "/"
    },
    optimization: {
        splitChunks: {
            chunks: "initial"
        }
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.resolve(__dirname, '../src')
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'img/[name].[hash:7].[ext]'
                }
            }]
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }]
        }]
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            pages: path.resolve(__dirname, '../src/pages'),
            components: path.resolve(__dirname, '../src/components'),
            router: path.resolve(__dirname, '../src/router'),
            actions: path.resolve(__dirname, '../src/redux/actions'),
            reducers: path.resolve(__dirname, '../src/redux/reducers'),
            assets: path.resolve(__dirname, '../src/assets'),
            api: path.resolve(__dirname, '../src/api'),
            mock: path.resolve(__dirname, 'mock')
        },
        modules: [path.resolve(__dirname, '../node_modules')],
        mainFields: ['main'],
        symlinks: false,
        cacheWithContext: false
    }
};

module.exports = commonConfig;
