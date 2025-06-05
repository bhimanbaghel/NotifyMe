const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = (env, argv) => {
  // Check if we're in production mode from the webpack mode argument
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      // Use absolute path for GitHub Pages
      publicPath: isProduction ? '/NotifyMe/' : '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        // Add base href for GitHub Pages
        ...(isProduction ? {
          base: '/NotifyMe/'
        } : {})
      }),
      new Dotenv(),
      new webpack.DefinePlugin({
          'process.env.PUBLIC_URL': JSON.stringify(isProduction ? '/NotifyMe' : '')
      })
    ],
    devServer: {
      historyApiFallback: true,
      port: 3000,
      hot: true
    }
  };
}; 