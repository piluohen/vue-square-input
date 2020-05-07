# vue-square-input

一个简单的方块输入框组件，常用于短信验证码、车牌号类的输入

## 使用

```bash
# 安装 npm 包
npm install -S vue-square-input

# 项目引入css
import "~vue-square-input/lib/vue-square-input.css";

# 项目main.js引入组件, 全局引入

import VueSquareInput from 'vue-square-input'

Vue.use(VueSquareInput)

```

## 构建命令

```bash

# 安装依赖
npm install

# 启动本地服务（默认localhost与ip） localhost:8080
npm run dev

# 打包示例
npm run bulid

```

## Api

| 参数             |     描述     |  类型   | 可选值 | 必须  | 默认值 |
| ---------------- | :----------: | :-----: | :----: | :---: | ------ |
| value \| v-model |      值      | string  |        | true  | ''     |
| length           |   方块个数   | number  |        | false | 6      |
| isUpperCase      | 是否转为大写 | Boolean |        | false | false  |
| readonly         |   是否只读   | Boolean |        | false | false  |

## 示例

1. PC [demo](https://piluohen.github.io/vue-square-input/) 请 F12，选择手机模式查看
2. 手机浏览器扫一扫下面二维码
   ![image](https://github.com/piluohen/vue-square-input/blob/master/src/assets/images/demo.png?raw=true)
