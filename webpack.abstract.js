const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

const { NODE_ENV } = process.env;

module.exports = {
    entry: [
        'babel-polyfill',
        'react-app-polyfill/ie11',
        './src/index.js'

    ],

    output: {
        filename: 'initial-env-setup.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },

    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            'styled-components': path.resolve('./node_modules/styled-components')
        }
    },

    stats: 'errors-only',

    node: {
        fs: 'empty'
    },

    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts'
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images'
                }
            },
            {
                test: /\.(js|jsx|svg)?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'initial-env-setup.css'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(NODE_ENV)
            },
        })
    ]
};
