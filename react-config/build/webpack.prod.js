const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
module.exports = merge(commonConfig(process.env.NODE_ENV), {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      title: '我的第一个项目 prod',
    }),
    // 压缩 css  yarn add css-minimizer-webpack-plugin  -D 压缩 css
    new CssMinimizerWebpackPlugin(),
  ],
})
