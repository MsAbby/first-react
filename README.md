## 常用技术栈
React 16.8 + antd v4 + umi v3 + ant design pro v4
打开 ant design pro v4
Ant Design Pro 是基于 Ant Design 和 umi 的封装的一整套企业级中后台前端/设计解决方案

## pages

 ## less 支持的配置
 react脚手架中， 默认支持的是 css  或sass/scss， 需要自己配置less
 1. 执行命令 npm install eject, 如果

  ## 配置网络请求
  1.  安装依赖 cnpm install axios <br>
  2.  安配置网络请求文件 <br>
  3.  配置路径地址文件 <br>

  ## 初始化样式
  1. 初始化css样式文件 <br/>
  2. 引入字体图标 <br/>

  ## 初始化路由文件

  ## 报错1
  `js
  /node_modules/@types/react-router/index.d.ts TypeScript error in /node_modules/@types/react-router/index.d.ts(149,100):
   Type expected.  TS1110

    147 | ): match<Params> | null;
    148 | 
  > 149 | export type ExtractRouteOptionalParam<T extends string, U = string | number | boolean> = T extends `${infer Param}?`
        |                                                                                                    ^
    150 |     ? { [k in Param]?: U }
    151 |     : T extends `${infer Param}*`
    152 |     ? { [k in Param]?: U }
  `

  ## 报错2
  `js
  Error: Cannot find module 'react-dev-utils/getPublicUrlOrPath'
Require stack:
- /Users/lsm/Documents/01.study/react/first-react/config/paths.js
- /Users/lsm/Documents/01.study/react/first-react/config/env.js
- /Users/lsm/Documents/01.study/react/first-react/scripts/start.js

// 解决方案：  npm install --save-dev react-dev-utils
  `

  ## 报错3
  `js
  Error: Cannot find module 'webpack-dev-server'
Require stack:
- /Users/lsm/Documents/01.study/react/first-react/scripts/start.js

// 解决方案： npm install --save-dev webpack-dev-server
  `

  ## 报错4

  `js
  Error: Cannot find module 'resolve'
Require stack:
- /Users/lsm/Documents/01.study/react/first-react/config/webpack.config.js
- /Users/lsm/Documents/01.study/react/first-react/scripts/start.js

// 解决方案： npm install --save-dev resolve
  `

  ## 报错5

`js
ERR! Found: webpack@5.74.0
npm ERR! node_modules/webpack
npm ERR!   webpack@"^5.74.0" from the root project
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peer webpack@"^4.0.0" from optimize-css-assets-webpack-plugin@6.0.1
npm ERR! node_modules/optimize-css-assets-webpack-plugin
npm ERR!   dev optimize-css-assets-webpack-plugin@"*" from the root project
npm ERR! 
npm ERR! Fix the upstream dependency conflict, or retry


// 使用--force或--legacy-peer-deps可解决这种情况。

// --force 会无视冲突，并强制获取远端npm库资源，当有资源冲突时覆盖掉原先的版本。
// --legacy-peer-deps：安装时忽略所有peerDependencies，忽视依赖冲突，采用npm版本4到版本6的样式去安装依赖，已有的依赖不会覆盖。

// npm install --legacy-peer-deps optimize-css-assets-webpack-plugin --save-dev
`

## 报错6
`js
Invalid options object. Terser Plugin has been initialized using an options object that does not match the API schema.
 - options has an unknown property 'sourceMap'. These properties are valid:
   object { test?, include?, exclude?, terserOptions?, extractComments?, parallel?, minify? }


   // 解决方案：  npm uninstall webpack 
   // npm install --legacy-peer-dep webpack@4.46.0 --save-dev

   // npm install --save-dev terser-webpack-plugin@4.2.3
`

## 报错7
`js
ManifestPlugin is not a constructor

// 解决方案： 降低版本： npm install webpack-manifest-plugin@2.2.0 --save-dev

`

## 报错8

`js
Failed to compile.

Cannot read property 'tap' of undefined

// 原因： 保持html-webpack-plugin与webpack的版本一致，webpack用的是5,那么html-webpack-plugin版本也要是5
// npm install --save-dev html-webpack-plugin@4.0.0-beta.11

`

## 报错9
`
webpack Dev Server Invalid Options

options should NOT have additional properties
options should NOT have additional properties
options should NOT have additional properties
`

// 原因： webpack 版本和webpack-dev-server版本和html-webpack-plugin版本要对应
// "devDependencies": { "html-webpack-plugin": "^4.5.1", "webpack": "^4.46.0", "webpack-dev-server": "^3.11.2" }

## 报错10
`js
Failed to compile.

./src/index.tsx
TypeError: Cannot read property 'getFormatter' of undefined

// "eslint": "^8.23.1",

// 解决方案： 降低 eslint版本 - > "eslint": "^5.8.0"
`

## 报错11
`js
Argument of type ‘HTMLElement | null‘ is not assignable to parameter of type ‘HTMLElement‘. Type ‘

// 解决方案： 增加类型断言
// HTMLElement = document.getElementById("main") as HTMLElement;
`