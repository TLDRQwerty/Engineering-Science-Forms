const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const IS_PRODUCTION = process.env.NODE_ENV === "production";
const IS_DEVELOPMENT = !IS_PRODUCTION;

module.exports = (env, options) => {
	return {
		entry: "./src/index.tsx",
		mode: process.env.NODE_ENV,
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: "ts-loader",
					exclude: /node_modules/,
				},
				{
					test: /\.css$/i,
					use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
				},
			],
		},
		resolve: {
			extensions: [".tsx", ".ts", ".js"],
		},
		output: {
			filename: "bundle.js",
			path: path.resolve(__dirname, "dist"),
		},
		optimization: {
			splitChunks: {
				chunks: "async",
				minSize: 20000,
				minRemainingSize: 0,
				minChunks: 1,
				maxAsyncRequests: 30,
				maxInitialRequests: 30,
				enforceSizeThreshold: 50000,
				cacheGroups: {
					defaultVendors: {
						test: /[\\/]node_modules[\\/]/,
						priority: -10,
						reuseExistingChunk: true,
					},
					default: {
						minChunks: 2,
						priority: -20,
						reuseExistingChunk: true,
					},
				},
			},
		},
		plugins: [new HTMLWebpackPlugin({ template: "./src/index.html" }), new MiniCssExtractPlugin()],
	};
};
