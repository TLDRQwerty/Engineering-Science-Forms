const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const IS_DEVELOPMENT = !IS_PRODUCTION;

module.exports = (env, options) => {
	return {
		entry: './src/index.tsx',
		mode: process.env.NODE_ENV,
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.css$/i,
					use: ["style-loader", 
					{
						loader: "css-loader",
						options: {
							modules: {
								localIdentName: IS_DEVELOPMENT ? '[path][name]__[local]' : '[hash:base64]',
							},
							sourceMap: IS_DEVELOPMENT,
						}
					}, "postcss-loader"],
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist'),
		},
		plugins: [
			new HTMLWebpackPlugin({ template: './src/index.html' }),
		]
	}
};
