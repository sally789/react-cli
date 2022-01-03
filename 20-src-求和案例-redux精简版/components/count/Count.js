import React, { Component } from 'react'
import store from '../../redux/store'
export default class Count extends Component {
    componentDidMount(){
        //检测redux的变化
        store.subscribe(()=>{
            console.log('reducer状态改变')
            this.setState({})//再次调用render，使页面更新
        })
    }
    increase=()=>{
        const {value} = this.selectNumber
        // 通知reduer加数据
        store.dispatch({type:'increment', data:value})
    }
    decrease=()=>{
        const {value} = this.selectNumber
        // 通知reduer加数据
        store.dispatch({type:'decrement', data:value})
    }
    increaseIfOdd=()=>{
        const {value} = this.selectNumber
        if(store.getState()%2!==0){
            store.dispatch({type:'increment', data:value})
        }else{
            store.getState()
        }
    }
    increaseAsync=()=>{
        const {value} = this.selectNumber
        setTimeout(()=>{
            store.dispatch({type:'increment', data:value})
        },1000)
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
                <select ref={(c)=>this.selectNumber=c}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                </select>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
                <button onClick={this.increaseIfOdd}>当前求和奇数+</button>
                <button onClick={this.increaseAsync}>异步+</button>
            </div>
        )
    }
}
