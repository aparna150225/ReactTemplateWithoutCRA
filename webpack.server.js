const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    target: 'node',
    node: {
        __dirname: false
    },
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
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
                test: /\.(ico)$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.(js|jsx)?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        globalObject: 'this',
        publicPath: './dist/'
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            'styled-components': path.resolve('./node_modules/styled-components')
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            },
            window: { sessionStorage: {} }
        })
    ]
};