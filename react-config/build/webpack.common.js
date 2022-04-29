const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
console.log("process.env.NODE_ENV=:  ", process.env.NODE_ENV);
// const NODE_ENV = process.env.NODE_ENV // 打印环境变量
module.exports = function (mode) {
  return {
    entry: path.resolve(__dirname, "../src/index.tsx"),
    output: {
      filename: "[name].[hash:8].js",
      path: path.resolve(__dirname, "../dist"),
      // assetModuleFilename: 'asset/[name].[hash:8].[ext]',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          // 采用css modules的解析方式时，排除对node_modules文件处理
          exclude: [/node_modules/],
          use: [
            {
              loader:
                mode === "dev" ? "style-loader" : MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                modules: "local",
                importLoaders: 1,
                modules: {
                  exportGlobals: false,
                  localIdentName: "[local]_[hash:base64:5]",
                },
              },
            },
            { loader: "postcss-loader" },
          ],
        },
        {
          test: /\.css$/,
          // 排除业务模块，其他模块都不采用css modules方式解析
          exclude: [/src/],
          use: [
            { loader: "style-loader" },
            {
              loader: "css-loader",
            },
          ],
        },
        {
          test: /\.less$/,
          use: [
            {
              loader:
                mode === "dev" ? "style-loader" : MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 2,
                modules: {
                  localIdentName: "[local]_[hash:base64:5]",
                },
              },
            },
            { loader: "postcss-loader" },
            {
              loader: "less-loader",
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                },
              },
            },
          ],
        },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /(node_modules|dist)/,
          use: {
            loader: "babel-loader",
            options: {
              plugins: [
                // 引入样式为 css
                // style为true 则默认引入less
                ["import", { libraryName: "antd", style: "css" }],
              ],
            },
          },
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /(node_modules|dist)/,
          use: [
            {
              loader: "cache-loader",
            },
            {
              loader: "babel-loader",
            },
            // ,{
            //   loader: 'eslint-loader',
            //   options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
            //     formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
            // }
            // }
          ],
        },
        // 打包图片等
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          type: "asset/resource",
          generator: {
            filename: "img/[name].[hash:8].[ext]",
          },
        },
        // 打包字体等
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 匹配字体文件
          type: "asset/resource",
          generator: {
            filename: "fonts/[name].[hash:8].[ext]",
          },
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i, // 匹配音视频
          type: "asset/resource",
          generator: {
            filename: "meia/[name].[hash:8].[ext]",
          },
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".less"],
      alias: {
        "@": path.resolve(__dirname, "../src"),
      },
    },
    plugins: [
      // 打包清空原打包文件 yarn add clean-webpack-plugin
      new CleanWebpackPlugin(),
      // 分离css  yarn add mini-css-extract-plugin -D  分离
      new MiniCssExtractPlugin({
        filename: "css/[name].[hash:8].css",
      }),
      new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(mode),
        BASE_API: JSON.stringify(
          mode === "dev" ? "http://www.baidu.com" : "http://www.baidu.com"
        ),
        DOMAIN_API: JSON.stringify(mode === "dev" ? "baidu" : "baidu"),
      }),
    ],
  };
};
