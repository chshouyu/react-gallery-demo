var path = require('path');
var webpack = require('webpack');
var nodemodules_dir = path.join(__dirname, 'node_modules');


var config = {
  addVendor: function(name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp('^' + name + '$'));
  },
  entry: {
    app: ['./app/js/app.js'],
    vendors: ['react', 'iScroll']
  },
  resolve: {
    alias: {}
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],
  output: {
    path: './dest',
    filename: '[name].js'
  },
  module: {
    noParse: [],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'jsx-loader?harmony'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=25000'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.(scss|sass)$/,
      loader: 'style!css!sass?outputStyle=expanded'
    }]
  }
};

config.addVendor('react', path.join(nodemodules_dir, 'react/dist/react-with-addons.min.js'));
config.addVendor('iScroll', path.join(__dirname, 'app/js/lib/iscroll-probe.js'));

module.exports = config;