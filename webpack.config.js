const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        inject: true,
        template: './public/index.html',
      }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: ''
      // You can pass any key-value pairs, this was just an example.
      // WHATEVER: 42 will replace %WHATEVER% with 42 in index.html.
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-react-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|eot|woff|woff2|ttf|pdf)$/,
        exclude: /\.(js|jsx|ejs)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
                name: 'static/media/[name].[hash:8].[ext]',
            }  
          }
        ]
      },
      {
        test: /\.json$/,
        use: [
          {
            loader: 'json',
            options: {}
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {}
          }
        ]
      },
      {
        test:/\.css$/,
        use:[
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      },
      {
        test:/\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {}
          }
        ] 
      }
    ]
  }
};