const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: path.join(__dirname, 'src', 'app.js'),
	output: {
		filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new Dotenv({safe: true}),
		new HtmlWebpackPlugin({template: './src/index.html'}),
		 new webpack.ProvidePlugin({
		  $: "jquery",
		  jquery: "jquery",
		  "window.jQuery": "jquery",
		  jQuery:"jquery"
		})
	],
	module: {
  	rules: [
  		{
        test: /\.scss$/,
        use: ["style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader"],
      },
	    {
	      test: /\.css$/,
	      use: [
	        'style-loader',
     			'css-loader'
	      ]
	    },
	    {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name:'[name].[ext]',
          outputPath:'assets' //the icons will be stored in dist/assets folder
        }
      },
	    {
	      test: /\.(html|png|gif|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
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
  }
};

