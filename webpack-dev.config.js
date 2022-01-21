const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.abstract.js');

module.exports = Object.assign({}, common, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, '/src/'),
        compress: true,
        port: 4001,
        stats: 'minimal',
        hot: true,
        historyApiFallback: true
    },

    devtool: 'inline-source-map',

    plugins: common.plugins.concat([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new BundleAnalyzerPlugin({ analyzerMode: 'enabled' })
    ])
});
