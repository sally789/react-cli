/*
该文件专门用于暴露一个store对象
*/
//引入createStore用于创建redux的核心store
import { createStore,applyMiddleware } from "redux";
//引入为count组件服务的reducer
import countReducer from "./count_reducer"
//引入redux-thunk用于支持异步action
import thunk from "redux-thunk"
const store = createStore(countReducer,applyMiddleware(thunk));

export default store