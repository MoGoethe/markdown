var webpack = require("webpack");
var CleanPlugin = require('clean-webpack-plugin');

module.exports = {
	entry:"./src/app.js",
	output:{
		path:__dirname + "/dist",
		filename: "[name].build.js"
	},
	module:{
		loaders:[
			{
				test:/\.(js|jsx)$/,
				exclude:/node_modules/,
				loader:"babel",
				query:{presets: [ 'es2015', 'react' ,'stage-0'] }
			},
			{
				test:/.css$/,
				loader:"style!css!sass"
			},
			{
				test:/.(png|jpg|jpeg|gif)$/,
				loader: 'url?limit=25000'
			}
		]
	}
	plugins: [
		new CleanPlugin(['dist/*'])
	]
}