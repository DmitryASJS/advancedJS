const fs = require('fs');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	context: path.resolve(__dirname,'src'),
	mode: 'development',
	entry: './index.js',
	output: {
		filename: 'bundle.[fullhash].js',
		path: path.resolve(__dirname, 'assets'),
	},
	resolve: {
		extensions: ['.js'],
		alias: {
			'@': path.resolve(__dirname,'src'),
			'@core': path.resolve(__dirname,'src/core'),			
		} 
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
					to: path.resolve(__dirname, 'assets'), 
				},
			],
		}),
		new MiniCssExtractPlugin({
			filename: 'css/main.[fullhash].css',
		}),
	],
	module:{
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
				MiniCssExtractPlugin.loader,
				"css-loader",
				"sass-loader",
				],
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env',
						{
							targets: {
								browsers: [
									'Chrome >= 42',
									'Safari >= 10.1',
									'iOS >= 10.3',
									'Firefox >= 50',
									'Edge >= 12',
									'ie >= 10',
								],
							}
						}
						]],

					}
				}
			},
		],

	}
}