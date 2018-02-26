module.exports = {
	entry: {
		'public/staffroom/js': './src/staffroom.js',
		'public/theater/js': './src/theater.js'
	},
	output: {
		path: __dirname,
		filename: '[name]/index.js'
	},
	module: {
		loaders: [{
			test: /\.js[x]$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['react','es2015']
			}
		},{
			test: /\.html$/,
			loader: 'html-loader'
		},{
			test: /\.(jpg|png)$/,
			loader: 'url-loader'
		}]
	},
	resolve: {
		extensions: ['.js','.jsx','.html','.jpg','.png']
	}
}