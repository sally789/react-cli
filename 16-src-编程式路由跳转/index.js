//引入react核心库
import React from 'react';
//引入react-dom
import ReactDOM from 'react-dom';
//引入APP组件
import App from './App'
import {BrowserRouter} from 'react-router-dom'
//渲染APP组件到页面
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'))