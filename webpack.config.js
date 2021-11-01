const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const stylus = require('stylus');
const autoprefixer = require('autoprefixer-stylus');
//const ASSET_PATH = process.env.ASSET_PATH || '/';
module.exports = {
	entry: {
		app: "./src/js/app.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		//publicPath: ASSET_PATH,
		publicPath: '/',
		filename: "[name].bundle.js",
		/* publicPath: "/dist" */
	},
	module: {
		rules: [
			{
				test: /\.pug$/,
				use: "pug-loader",
			},
			{
				test: /\.styl$/,
				use: ["style-loader", "css-loader", "stylus-loader"],
			},
			/* {
				test:/\.css$/,
				loader: 'style!css!autoprefixer?browsers=last 2 versions!'
			},
			{
				test:/\.styl$/,
				loader: 'style!css!autoprefixer?browsers=last 2 versions!stylus?resolve url'
			}, */
			{
				test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
				use: {
					loader: "file-loader",
					options: {
						name: 'assets/images/[name].[ext]',
						useRelativePath: true
					}
				}
			},
			{
				test: /\.js$|\.es6$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env"],
					},
				},
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		publicPath: '/',
		compress: true,
		open: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			// Change there title of your project (title in browser tab caption)
			title: "App",
			hash: true,
			// Change there name of main |pug| file
			template: "./src/index.pug",
		}),
		new webpack.optimize.UglifyJsPlugin({}),
		//new autoprefixer()
	],

};
