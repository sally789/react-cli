//引入count的ui组件
import CountUI from '../../components/count/Count'

//引入connect用于链接UI组件和redux
import {connect} from 'react-redux'
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'
//a函数分会的对象中的Key,value就作为传递给UI组件的props的key,value
//主要用于传状态
function a(state){
    return {count:state}
}
//b函数分会的对象中的Key,value就作为传递给UI组件的props的key,value
//主要用于传操作状态的方法
function b(dispatch){
    return {
        jia:number=>dispatch(createIncrementAction(number)),
        jian:number=>dispatch(createDecrementAction(number)),
        asyncJia:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
    }
}
//创建并暴露一个Count容器组件
export default connect(a,b)(CountUI)