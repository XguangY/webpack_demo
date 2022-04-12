# webpack_demo

> 重学webpack

## demo01 起步

构建最基本的webpack 打包框架

#### npx 和 npm 的区别

+ npm 全称Node Package Manager，它是Node.js的软件包管理器，其目标是自动化的依赖性和软件包管理。不能直接执行包
+ npx 为 npm 文件执行功能进行了一些扩展，提供了一种使用 node.js CLI 工具的新方式，可以直接执行安装包的命令

#### npx的特点

1、临时安装可执行依赖包，不用全局安装，不用担心长期的污染。
2、可以执行依赖包中的命令，安装完成自动运行。
3、自动加载node_modules中依赖包，不用指定$PATH。
4、可以指定node版本、命令的版本，解决了不同项目使用不同版本的命令的问题。

## demo02 管理资源

处理各种资源

+ css-loader style-loader 处理css
+ file-loader 处理图片和字体图标
+ cvs-loader xml-loader 处理xml格式数据

## demo03 开发 + 模块热替换

#### source map
 当 webpack 打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置。为了更容易地追踪错误和警告，JavaScript 提供了 source map 功能，将编译后的代码映射回原始源代码。如果一个错误来自于 b.js，source map 就会明确的告诉你。
 devtool: 'inline-source-map'

#### 热更新

webpack 中有几个不同的选项，可以帮助你在代码发生变化后自动编译代码：

+ webpack's Watch Mode
+ webpack-dev-server （常用）
+ webpack-dev-middleware

###### 观察者模式

```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "watch": "webpack --watch", // new add
  "build": "webpack"
},
```
> 文档说观察者模式会动态打包，但是需要刷新浏览器才能看到效果，实测chrome不用刷新自动触发

######  webpack-dev-server

webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)

```
devServer: {
  // contentBase: "./dist", // 配置项失效
  static: "./dist",
  hot: true,
},
```

##### webpack-dev-middleware


## tree shaking

tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)

##### 压缩输出

从 webpack 4 开始，也可以通过 "mode" 配置选项轻松切换到压缩输出，只需设置为 "production"。