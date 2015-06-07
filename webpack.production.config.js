// webpack.config.js
var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var child_process = require('child_process');

// from Pete Hunt's webpack-howto
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

// some params used in the config
var commonLoaders = [
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(gif|png|jpg)$/, loader: 'url-loader?name=[path][name].[ext]&limit=8192'}, // inline base64 URLs for <=8k images, direct URLs for the rest
      { test: /.*\.(eot|woff|ttf|svg)/, loader: 'file?hash=sha512&digest=hex&size=16&name=cd [hash].[ext]'},
      { test: /\.jsx?$/, loaders: ['babel-loader'], exclude: /node_modules/},
      // { test: /\.js$/, loader: 'jsx-loader?harmony' }
]; 

var basicExtensions = ['', '.js', '.json', '.jsx'];

function copyIndexFile() {
  child_process.exec('cp app/index.production.html dist/index.html', function(error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
  });
}

child_process.exec('mkdir dist', function(error, stdout, stderr) {
  copyIndexFile();
});

var config = {
  entry: {
    entry: [path.resolve(__dirname, 'app/jsx/main.jsx')],
    // Since react is installed as a node module, node_modules/react,
    // we can point to it directly, just like require('react');
    vendors: ['react', 'material-ui']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'       
  },
  resolve: {
    moduleDirectories: ['node_modules'],
    extensions: basicExtensions
  },
  module: {
    loaders: commonLoaders
  },
  plugins: [definePlugin,
            new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')],
};

module.exports = config;