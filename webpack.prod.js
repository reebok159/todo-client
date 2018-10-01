const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',

	optimization: {
    minimizer: [new UglifyJsPlugin({
    	})]
  },
  plugins: [
  	new CleanWebpackPlugin(['dist']),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    }),
  	new ngAnnotatePlugin({
      add: true,
    })
  ]

});
