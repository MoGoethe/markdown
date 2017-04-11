var webpack = require("webpack");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:"./src/app.js",
	output:{
		path:__dirname + "/dist",
		filename: "bundle.js"
	},
	module:{
		loaders:[
			{
				test:/\.(js|jsx)$/,
				exclude:/node_modules/,
				loader:"babel-loader",
				query:{presets: [ 'es2015', 'react' ,'stage-0'] }
			},
			{
				test:/\.css$|\.scss$/,
				loader:"style-loader!css-loader!sass-loader"
			},
			{
				test:/.(png|jpg|jpeg|gif)$/,
				loader: 'url?limit=25000'
			}
		]
	},
	devServer:{
		contentBase:"./virtual",
		hot:true,
		historyApiFallback: false,
		port:8080,
		inline: true, // Livereload
		host: '0.0.0.0',
	},
	plugins: [
		new CleanPlugin(['dist/*']),
		new webpack.DefinePlugin({
			//去掉react中的警告，react会自己判断
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
/*		new HtmlWebpackPlugin({
			template: './public/template.html',
			htmlWebpackPlugin: {
				"files": {
					"css": ["style.css"],
					"js": ["vendors.js","bundle.js"]
				}
			},
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
			}
		}),*/
	  	new webpack.HotModuleReplacementPlugin()
		//new OpenBrowserPlugin({url: 'http://127.0.0.1:8080/'})
	]
}