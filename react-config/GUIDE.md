## webpack5 配置的一些知识点梳理

- webpack 原理理解：
从入口文件开始，一步一步找到应用程序所需要的所有模块，生成一张依赖关系图，然后根据依赖关系图打包所有的模块。（不同的文件对应不用的loader打包），如果不在依赖关系图中的模块，是不会被打包的。
还有一个性能优化的点，tree shaking,这块的意思就是当你引入一个js文件，里面声明了一个函数，但是至始至终都没有用到，那么处于性能优化考虑，这个函数也是不能被打包的，就可以利用tree shaking。

- webpack 中文文档 https://webpack.docschina.org/concepts/loaders/#example
- https://blog.csdn.net/lin_fightin/article/details/115140736

- webpack 各个相互关联插件，如果版本对不上，一定要回到node_modules里面去看package.json,看主要插件的关联

1、--config
运用 --config 修改指定的配置文件
webpack --config ./build/webpack.config.js

2、npm 使用中的一些简写
devDependencies 里面的插件只用于开发环境，不用于生产环境，
dependencies 是需要发布到生产环境的。

```
npm i module_name  -S  = >  npm install module_name --save    写入到 dependencies 对象
npm i module_name  -D  => npm install module_name --save-dev   写入到 devDependencies 对象
npm i module_name  -g  全局安装
```

3、path.resolve 和 path.join 的用法
path.resolve() 方法将路径或路径片段的序列解析为绝对路径
console.log(path.resolve(\_\_dirname)); //E:\nodejs
a.console.log(path.resolve('js/common','./test')); //E:\nodejs\js\common\test
b.console.log(path.resolve('./js/common','./test')); //E:\nodejs\js\common\test
c.console.log(path.resolve('/js/common','/test')); //E:\test
d.console.log(path.resolve('/js/common','../test')); //E:\js\test
path.join 定义 用于连接路径。会把全部给定的 path 片段连接到一起，并规范化生成的路径。
path.join('/foo', 'bar', './baz');
// '/foo/bar/baz'
path.join('/foo', 'bar', '/baz', '..');
// '/foo/bar'

4、webpack 多入口开发

```
entry:{
  home: path.resolve(__dirname, '../src/home/index.js'),
  about: path.resolve(__dirname, '../src/about/index.js')
},
plugins: [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../public/home/index.html') ,
    filename: 'home.html',
    chunks: ['home'],
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../public/about/index.html') ,
    filename: 'about.html',
    chunks: ['about'],
  }),
]
```

5、css 相关 loader 的作用

- yarn add style-loader css-loader less less-loader -D；
- 先使用 less-loader 将 .less 文件转换成 css，再使用 css-loader 加载 css 文件，最后使用 style-loader 将 css-loader 处理的样式注入到 HTML 页面中。

6、为 css 添加浏览器前缀

- 创建 /postcss.config.js 这个 postcss 工具的适配也是根据 browserslist 工具找到的浏览器来进行适配的，如果 browserslist 工具找到的浏览器都支持这个 css 属性，那么这个 css 属性不需要加上前缀。后期的 babel 也都是通过 browserslist 工具来进行适配。

```
yarn add postcss-loader postcss-preset-env -D
// postcss.config.js
module.exports = {
  plugins: [require('postcss-preset-env')],
}

```

7、打包分离 压缩 css
// 样式被打包到 js 文件里面不是我们想要的，而我们希望得到的是 css 文件，通过 link 标签引入到 html 文件中。

```
yarn add mini-css-extract-plugin -D // 分离
yarn add css-minimizer-webpack-plugin --save-dev // 压缩
```

- 这里要注意把 style-loader 去掉，不然会报错，自行验证；
- plugins 要写在 module 后面，不然会出错，自行验证。

8、cross-env
// 传递参数 cross-env NODE_ENV=dev
// 获取 process.env.NODE_ENV

9、图片和文字的处理
Asset Modules ：webpack5 之后就是用这个打包就可以了

```
module.exports = {
    output: {
        assetModuleFilename: "images/[name].[hash:8].[ext]"
    },
    module: {
        rules: [{
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset/resource'
            }
        ]
    },
}

```

10、browserslist
为了适配各种各样的浏览器不只是网页大小的适配，包括像某些浏览器支持的特性，某些浏览器不支持的特性等等，所以我们一般会通过一些工具如 babel,autoperfix 自动添加前缀的工具来帮助我们，但是不能所有的浏览器都要加，有些浏览器都被淘汰了，加的话只会徒增文件大小，所以我们需要 browserslit 工具来帮助我们查找我们需要适配的浏览器，过滤掉不需要适配的浏览器。怎么查找呢，通过 caniuse 这个权威网站，提供的 caniuse-list 工具，使我们配置的 browserslit 可以通过条件比如>1%,last 2 version, no dead 等的条件进行查找，找到符合条件的浏览器然后共享给 babel 等工具让他们按照这些浏览器进行转化。从而达到适配效果

11、'@babel/plugin-transform-runtime'
要 exclude: /(node_modules|bower_components)/
不然会报错

12、
ts文件转换时，是有两种，一种是tsc与ts-loader,其实ts-loader也是依赖于tsc的。另一种是babel-loader搭配预设preset-typescript。两者的优缺点发呢比是，ts-loader会对代码进行类型检测，发现错误停止打包，但是不会自动加上Profill。而babel-loader搭配preset-typescript可以加上profill，设置效果同preset-env设置Porfill一样，都是通过useBuiltIns，一般使用第二个值，useage，它会根据代码需要的自动加上对应得Profill。但是babel-loader不会进行类型检测。但我们代码有类型错误时，babel-loader是可以打包成功的。所以ts官网推荐我们结合tsc+babel-loader进行搭配。如可以先通过tsc --noEmit进行检测，或者通过tsc --noEmit --watch监听ts文件的变化，一旦错误立马报错，然后正常才使用Bbael-loader，这也是转化ts最好的办法。

13、eslint 静态代码分析工具（在没有任何代码执行的情况下，对代码进行分析）eslint也是以来js得编译器，通过编译器检查哪些代码写的不合理
env对应的是适合的浏览器，es，还有模块化选择。extends一般用于框架的时候，要继承其他插件的规则。parserOptions主要是用来解析得东西，如里面的parser属性就是设置编译器的。plugins是使用了哪些插件。rules是用来编写自己的规则的。eslint本质也是要依赖于js编译器，他也会将js代码进行词法分析，转成tokens数组，然后在进行语法分析，转成AST树，遍历AST树，使用eslint得插件进行检查，有错误再报

