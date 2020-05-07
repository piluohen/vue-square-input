# vue-square-input

一个简单的方块输入框组件，常用于短信验证码、车牌号类的输入

[demo](https://piluohen.github.io/vue-square-input/index.html)<br>
注：请 F12，选择手机模式查看，或者本地运行在手机浏览器上的查看

## 使用

```
# 安装 npm 包
npm install -S vue-square-input

# 项目引入css
import "~vue-square-input/lib/vue-square-input.css";

# 项目main.js引入组件, 全局引入

import VueSquareInput from 'vue-square-input'

Vue.use(VueSquareInput)

```

## 构建命令

```

# 安装依赖
npm install

# 启动本地服务（默认localhost与ip） localhost:8080
npm run dev

# 打包示例
npm run bulid

```

## Api

| 参数          |         描述         |  类型   |                       可选值                       | 必须  | 默认值 |
| ------------- | :------------------: | :-----: | :------------------------------------------------: | :---: | ------ |
| check         | 已选中的值，一维数组 |  Array  |                                                    | true  | []     |
| list          |      全部的数据      |  Array  | [ {'alpha': 'A', name: '用户', value: 'Account'} ] | true  | []     |
| multiple      |       是否多选       | Boolean |                                                    | false | false  |
| readonly      |       是否只读       | Boolean |                                                    | false | false  |
| showLetter    |     显示字母导航     | Boolean |                                                    | false | true   |
| scrollOptions |       滚动行为       | Object  |                                                    | false |

## 更新日志
