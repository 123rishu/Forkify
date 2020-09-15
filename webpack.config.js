const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: ['@babel/polyfill','./src/app.js']
	},
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
	output: {
		path: __dirname + '/build',
		filename: 'app.bundle.js'
	},
  devServer: {
        contentBase: './build'
    },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Project Demo',
      template: './src/index.html'
  })
  ],
	module : {
    	rules: [{
      	// A regex that looks at all Javascript files
      		test: /\.js?$/,
      		exclude : /node_modules/,
      		loader: 'babel-loader',
      		//this is where we define our presets
      		query: {
        		presets:['@babel/preset-env']
      		}
    }]
  }
}