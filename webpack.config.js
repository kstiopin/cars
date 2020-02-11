module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'dist/bundle.js'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react-app']
      }
    }, {
      test: /\.png$/,
      loader: 'url-loader',
      options: {
        limit: 25000,
        name: 'dist/[hash].[ext]'
      }
    }]
  },
  mode: 'development',
  performance: {
    hints: false
  }
};
