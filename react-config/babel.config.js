module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // false 不使用 profill
        /*
         * usage 根据代码使用需要的porfill,不需要的不适用,
         * usage 因为有些库已经实现了自己的profill，
         * usage 我们再给他配置新的profill时可能会报错。exclude:"/node_modules/"
         */
        /*
         * entry 只要是模板浏览器需要的profill,全部加上,我们还需要在入口文件下引入
         * entry import 'core-js/stable';
         * entry import 'regenerator-runtime/runtime'
         */
        useBuiltIns: 'usage',
        corejs: 3
      }
    ],
    // tsc会自动加上profill吗？答案是不会。
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    // [
    //   '@babel/plugin-transform-runtime',
    //   {
    //     corejs: 3
    //   }
    // ],
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }]
  ]
};
