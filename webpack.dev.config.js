const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

    entry: {
        app: [
            './src/index.js'
        ]
    },
    context: __dirname + '',
    mode: 'development',
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: __dirname + '/build/',
        sourceMapFilename: 'bundle.map'
    },
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
              vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10
              },
              default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
              }
            }
        }
    },
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'eslint-loader',
            exclude: /node_modules/,
        },
        {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader', // translates CSS into CommonJS
                    options: {
                        minimize: true,
                        sourceMap : true
                    }
                }, {
                    loader: 'sass-loader', // compiles Sass to CSS
                    options: {
                        sourceMap: true
                    }
                }]
        },
            
        {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },
        {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        }

        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebPackPlugin({
            template: __dirname + '/src/index.html',
        }),
        new CleanWebpackPlugin(__dirname + '/build')
    ],
    resolve: {
        extensions: ['.js']
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        open: true,
        port: 9001
    },
};