module.exports = {
	target: 'node',
	entry: {
		'.': './src/client/index.js'
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
		}]
	},
	resolve: {
		extensions: ['.js']
	},
	externals: {
		sqlite3: 'commonjs sqlite3'
	}
}