const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename:'bundle.js',
	},
	devServer: {
		watchFiles: ["src/**/*"],
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, 'src'),
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				type: "asset",
				test: /\.(png|svg|jpg|gif)$/i,
				use:[
					{
						loader:'file-loader',
						options:{
							name: '[name].[ext]',
							outputPath:'img/',
							useRelativePath:true,
						}
					}
				]
			}
		],
	},
	plugins:[
		new CopyPlugin({
			patterns:[{from: "src/index.html", to: "index.html"}],
		})
	]
}
