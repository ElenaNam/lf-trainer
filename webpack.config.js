const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpack = require("webpack");
const stylus = require('stylus');
const autoprefixer = require('autoprefixer-stylus');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
				use: ExtractTextPlugin.extract({fallback: "style-loader", use: ["css-loader", "stylus-loader"]})
			},

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
		new ExtractTextPlugin("styles.css"),
		new webpack.optimize.UglifyJsPlugin({}),
		//new autoprefixer()
	],

};
