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

处理各种

+ css-loader style-loader 处理css
+ file-loader 处理图片和字体图标
+ cvs-loader xml-loader 处理xml格式数据

