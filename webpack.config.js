const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const IS_PRODUCTION = (mode) => mode === 'PRODUCTION';
const IS_DEVELOPMENT = !IS_PRODUCTION;

module.exports = (env, options) => {
	return {
		entry: './src/index.tsx',
		mode: 'production',
		watch: IS_DEVELOPMENT,
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
