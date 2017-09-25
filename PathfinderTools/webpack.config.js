var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'wwwroot/js/dist');
var APP_DIR = path.resolve(__dirname, 'js');

const cssDir = {
    BUILD_DIR: path.resolve(__dirname, 'wwwroot/css'),
    APP_DIR: path.resolve(__dirname, 'sass')
}

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader',

            },
            {
                test: /\.scss$/,
                include: cssDir.APP_DIR,
                loaders: ['style', 'css', 'sass']
            }
        ]
    }
};



module.exports = config;