//引入react核心库
import React from 'react';
//引入react-dom
import ReactDOM from 'react-dom';
//引入APP组件
import App from './App'
import store from './redux/store'
ReactDOM.render(<App/>, document.getElementById('root'))
//检测redux中的状态改变，重新渲染APP组件到页面
store.subscribe(()=>{
    ReactDOM.render(<App/>, document.getElementById('root'))
})
