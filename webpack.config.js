const fs = require('fs');
const path = require('path');
const glob = require('glob');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


let isProd = process.env.NODE_ENV === 'production';
let isDev = !isProd;
// console.log('process.env.NODE_ENV →', process.env.NODE_ENV);
// console.log('path.resolve(__dirname, eslintrc)', path.resolve(__dirname, './.eslintrc'));


const fileName = (ext) => isDev ? `bundle.${ext}` : `bundle.[fullhash].${ext}`;


const jsLoaders = () => {
	const loaders = [
		{
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
		},

	];

	// if (isDev) {

	// };

	return loaders;
};


let imgJpg = glob.sync(`${path.resolve(__dirname, 'src')}\\img\\**\\*.jpg`);
console.log(imgJpg);


module.exports = {
	context: path.resolve(__dirname,'src'),
	mode: 'development',
	entry: ["@babel/polyfill", './js/index.js'],
	output: {
		filename: fileName('js'),
		path: path.resolve(__dirname, 'assets'),
	},
	resolve: {
		extensions: ['.js'],
		alias: {
			'@': path.resolve(__dirname,'src'),
			'@core': path.resolve(__dirname,'src/core'),			
		} 
	},
	devServer: {
		contentBase: path.join(__dirname, 'assets'),
		port: 8082,
		open: true,
		watchContentBase: true,
		writeToDisk: true,
	},
	devtool: 'source-map',
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'index.html',
			inject: 'body',
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
			filename: `css/${fileName('css')}`,
		}),
		new ESLintPlugin({
			overrideConfigFile: path.resolve(__dirname, './.eslintrc'),
			context: path.resolve(__dirname, 'js'),
			files: '**/*.js',
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
				use: jsLoaders(),
			},
		],
	},
}