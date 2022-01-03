/*
该文件专门用于暴露一个store对象
*/
//引入createStore用于创建redux的核心store
import { createStore } from "redux";
//引入为count组件服务的reducer
import countReducer from "./count_reducer"

const store = createStore(countReducer)

export default store