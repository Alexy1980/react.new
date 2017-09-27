// конфигурация webpack
var webpack = require('webpack');
module.exports = {
    // точка входа
    entry: './src/index.js',
    // точка выхода
    output: {
        // глобальная переменная для node.js
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: "style!css!less" }
        ]
    }
};
