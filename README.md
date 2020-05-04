# vue-app

[vue实战项目：项目技巧总结--掘金](https://juejin.im/post/5eaac37d6fb9a0438e2384af)

```
 - TypeScript 支持使用 TypeScript 书写源码
 - Progressive Web App (PWA) Support PWA 支持。
 - Router 支持 vue-router 。
 - Vuex 支持 vuex 。
 - CSS Pre-processors 支持 CSS 预处理器。
 - Linter / Formatter 支持代码风格检查和格式化。
 - Unit Testing 支持单元测试。
 - E2E Testing 支持 E2E 测试。
```

```
npm i element-ui -S
完整引入 和 按需引入
按需引入
1.首先，安装 babel-plugin-component；
2. .babelrc 修改为
3. 完整组件列表和引入方式（完整组件列表以 components.json 为准）
```

```
.babelrc

** 注意 vue-cli3.0 将.babelrc内容里面babel配置文件放在babel.config.js里面。

Babel是一个转码器，可以将ES6代码转换成ES5语法的代码，所以你可以大胆的写ES6代码，不用担心环境不支持

Babel的配置文件.babelrc
  位置：放在项目的根目录下
  作用：用来设置转码规则和插件
  基本格式：主要是对预设(presets) 和 插件(plugins) 进行配置
    {
        "presets": [], 
        "plugins": []
    }
```

```
配置scss环境 参考vue-cli4
cnpm i node-sass sass-loader -D
```

```
全局自定义方法
main.js 里面挂载方法到 vue.prototype
Vue.prototype.isMobile = function() {
 let flag = navigator.userAgent.match(
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
 )
 return flag;
}
组件里面使用
mounted: function() {
  this.isMobile();
}

```

```
axios 方法封装，整个 api.js
Promise based HTTP client for the browser and node.js
Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
[中文文档](https://www.kancloud.cn/yunye/axios/234845)
```