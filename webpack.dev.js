const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    host: '0.0.0.0',
    proxy: [{
      	context: ["/api/v1/auth", "/api/v1"],
        target: process.env.API_HOST, 
    }]
  }
});
