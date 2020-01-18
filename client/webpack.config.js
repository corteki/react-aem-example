const path = require("path");
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');
module.exports = {
	mode: "development",
	entry: "./src/main",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".css"]
	},
	output: {
		pathinfo: false,
		filename: 'client.[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	optimization: {
		removeAvailableModules: false,
		removeEmptyChunks: false,
		splitChunks: false,
	},
	plugins: [
		new CleanWebpackPlugin()
	],
	module: {
		rules: [{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [{
					loader: "ts-loader",
					options: {
						transpileOnly: true,
						experimentalWatchApi: true,
					},
				}]
			},
			{
				test: /\.scss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
		]
	},
	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, "dist"),
		port: "9000"
	}
};