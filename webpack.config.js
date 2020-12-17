const fs = require('fs');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	context: path.resolve(__dirname,'src'),
	mode: 'development',
	entry: './index.js',
	output: {
		filename: 'bundle.[fullhash].js',
		path: path.resolve(__dirname, 'assets')
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		new CopyPlugin({
			patterns: [
				{ 
					from: path.resolve(__dirname, 'src','favicon.ico'), 
					to: path.resolve(__dirname, 'assets') 
				},
			],
		}),
	]
}