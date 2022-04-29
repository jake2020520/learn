const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 使用speed-measure-webpack-plugin进行速度分析
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const devConfig = merge(commonConfig(process.env.NODE_ENV), {
  mode: "development",
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      title: "react全家桶",
    }),
  ],
  devServer: {
    // contentBase: path.resolve(__dirname, 'public'), // 静态文件目录
    proxy: {
      "/api": {
        target: "https://other-server.example.com",
        secure: false,
      },
    },
    compress: true, //是否启动压缩 gzip
    open: true, // 是否自动打开浏览器
  },
});

const webpackConfig = smp.wrap({
  ...devConfig,
});

module.exports = webpackConfig;
