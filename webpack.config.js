const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path');
const webpack = require('webpack');

let pathToClean = 'dist';
let proxyAgent = !!process.env.http_proxy ? new HttpsProxyAgent(process.env.http_proxy) : null;

module.exports = {
	mode: 'development',
	entry: path.join(__dirname, 'src', 'app.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js'
	},
	plugins: [
		new CleanWebpackPlugin(pathToClean),
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
  },
	devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    host: '0.0.0.0',
    proxy: [{
      	context: ["/api/v1/auth", "/api/v1"],
        target: 'http://localhost:3000',
        //changeOrigin: true,
        //pathRewrite: { "^/api": "" },
        //agent: proxyAgent
      
    }]
  }
};
