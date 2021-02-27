const path = require('path');
const webpack = require('webpack');




/*
 * We've enabled Postcss, autoprefixer and precss for you. This allows your app
 * to lint  CSS, support variables and mixins, transpile future CSS syntax,
 * inline images, and more!
 *
 * To enable SASS or LESS, add the respective loaders to module.rules
 *
 * https://github.com/postcss/postcss
 *
 * https://github.com/postcss/autoprefixer
 *
 * https://github.com/jonathantneal/precss
 *
 */

const autoprefixer = require('autoprefixer');
// const precss = require('precss');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  plugins: [
    new webpack.ProgressPlugin(), 
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],

  module: {
    rules: [{
      test: /\.(png|jpe?g|gif|svg)$/i,
      include: [path.resolve(__dirname, 'public')],
      use: [
        {
          loader: 'file-loader',
        },
      ],
    }, {
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, 'src')],
      loader: 'babel-loader'
    }, {
      test: /.css$/,

      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",

        options: {
          importLoaders: 1,
          sourceMap: true,
          modules: {
            localIdentName: '[path]_[name]_[local]',
            auto: true
          }
        }
      }, {
        loader: "postcss-loader",

        options: {
          postcssOptions: {
            plugins: [
              autoprefixer
            ]
          }
        }
      }, {
        loader: "sass-loader"
      }]
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Components: path.resolve(__dirname, 'src/components'),
      Src: path.resolve(__dirname, 'src'),
      Store: path.resolve(__dirname, 'src/store'),
      Public: path.resolve(__dirname, 'public')
    }
  },

  devServer: {
    // open: true,
    host: '0.0.0.0',
    historyApiFallback: true
  },
  output: {
    publicPath: '/'
  },
  devtool: 'source-map'
}