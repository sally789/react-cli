/*
    创建一个为count组件服务的reducer，本质是一个函数
*/
//函数接收两个参数，（之前的状态，动作对象）
export default function countReducer(preState,action){
    // console.log(preState,action)
    //从action对象中获取type,data
    const {type,data} = action;
    //根据type决定如何加工数据
    switch(type){
        case 'increment':
            // console.log('+')
           return preState+data*1
        case 'decrement':
            return preState-data*1
        default:
            return 0;
    }
}