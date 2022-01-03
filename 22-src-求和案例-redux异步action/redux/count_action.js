import store from "./store"

/*
该文件专门为count组件生成action对象
*/
export function createIncrementAction(data){
    return {
        type: "increment",data
    }
}
export function createDecrementAction(data){
    return {
        type: "decrement",data
    }
}
//异步函数（返回值为函数）
export function createIncrementAsyncAction(data,time){
    return ()=>{
        setTimeout(()=>{
            store.dispatch({type: "increment",data}) 
        },time)
    }
}