# [React](https://facebook.github.io/react/) - [github](https://github.com/facebook/react)

## 状态管理： [Redux](http://redux.js.org/) - [github](https://github.com/reactjs/redux/)


### Action 标准: [Flux Standard Action](https://github.com/acdlite/flux-standard-action#flux-standard-action)

Redux没有强制要求action的结构，但是遵循一个通用的标准有利于团队的协作并且省下自己设计的时间。

也可通过 [redux-actions](https://github.com/reduxactions/redux-actions) 帮助生成 action 。


###  不可变数据操作: [immutable.js](https://facebook.github.io/immutable-js/)

当然一些非常简单的场景可以直接使用原生的 `Ojbect`、`Array` 等 , 大多数既然用到了React的应用，想必都会复杂到一定程度，使用immutable.js 也简化了reducer中的对象拷贝、解构、合并之类的代码。


### 异步操作/异步action：[redux-saga](https://redux-saga.js.org/) - [github](https://github.com/redux-saga/redux-saga/)

个人觉得 虽然redux-thunk相对简单，容易理解，但是随着程序越来越复杂，异步action代码也会越来越多，action层面的代码就会堆积复杂起来。

使用saga很好的保持了action层代码的简单，通过Side Effects的机制来监听发出的action并作出所需的异步操作，代码比较可读，方便维护。

## 路由： [React Router](https://reacttraining.com/react-router/) - [github](https://github.com/ReactTraining/react-router)

[query-string](https://github.com/sindresorhus/query-string) 处理URL中的查询字符串。

## 进阶

当web项目越来越复杂时，可能需要引入更多的模块。

### 表单管理: [React Redux Form](https://davidkpiano.github.io/react-redux-form/docs.html) - [github](https://github.com/davidkpiano/react-redux-form)
