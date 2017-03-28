var webpack = require('webpack');
var path = require('path');

var { SRC_PATH } = require('./config');

var CLIENT_PATH = path.resolve(SRC_PATH, 'client');
var APP_PATH = path.resolve(CLIENT_PATH, 'app');
var HOST = process.env.IP + ':' + process.env.PORT;

var config = {
    entry: APP_PATH + '/index.js',
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    output: {
        path: CLIENT_PATH,
        filename: 'bundle.js'
    },
    module : {
        loaders : [{
              test: /\.json$/,
              loader: 'json-loader'
            }, {
                test: /\.jsx$|\.js$/,
                include: APP_PATH,
                loaders: ['babel-loader']//, "eslint-loader"
            }, {
              test: /\.(graphql|gql)$/,
              loader: 'graphql-tag/loader'
            }
        ]
    },
    devServer: {
      historyApiFallback: true,
      contentBase: CLIENT_PATH
    }
};

module.exports = config;
