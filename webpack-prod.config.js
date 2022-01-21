const serverConfig = require('./webpack.server.js');
const common = require('./webpack.abstract.js');
const formatter = require('eslint-formatter-friendly');

const rules = [
    {
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
            configFile: './.eslintrc.json',
            formatter,
            failOnWarning: false,
            failOnError: false
        }
    }
];

module.exports = [Object.assign({}, common, {
    mode: 'production',
    module: {
        rules: rules.concat(common.module.rules)
    }
}), serverConfig];
