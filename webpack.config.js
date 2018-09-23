const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path');

let pathToClean = 'dist';

module.exports = {
	mode: 'development',
	entry: path.join(__dirname, 'src', 'app.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js'
	},
	plugins: [
		new CleanWebpackPlugin(pathToClean),
		new HtmlWebpackPlugin({template: './src/index.html'})
	],
	module: {
  	rules: [
	    /*{
	      test: /\.css$/,
	      use: [
	        'style-loader',
	       {
	          loader: 'css-loader',
	          options: {
	            minify: isProdBuild
	          }
	        }
	      ]
	    },*/
	    {
	      test: /\.(html|png|gif|jpg|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
	      exclude: /index\.html/,
	      loader: 'html-loader',
	      options: {
	        name: '[path][name].[ext]',
	        context: 'src'
	      }
	    },
	    {
	      test: /index\.html/,
	      loader: 'html-loader',
	      options: {
	        name: 'index.html'
	      }
	    }
	  ]
  },
	devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  }
};
