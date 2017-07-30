var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-inline-source-map',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle_app.js',
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: 'babel-loader' },
      { test: /\.scss$/, loaders: 'style-loader!css-loader!sass-loader' },
      { test: /\.(svg|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
}
