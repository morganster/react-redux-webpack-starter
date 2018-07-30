const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

    entry: {
        app: [
            './src/index.js'
        ]
    },
    context: __dirname + '',
    mode: 'production',
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: __dirname + '/build/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
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
                        sourceMap : false
                    }
                }, {
                    loader: 'sass-loader', // compiles Less to CSS
                    options: {
                        sourceMap: false
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
        new CleanWebpackPlugin(__dirname + '/build'),
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
                 'process.env.NODE_ENV': JSON.stringify('production')
                 }),
        new CopyWebpackPlugin(['./assets/*'])

    ],
    resolve: {
        extensions: ['.js']
    }
};