import React, { Component } from 'react'
// import store from '../../redux/store'
//引入actionCreate，专门用于创建action对象
// import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action'
export default class Count extends Component {
    increase=()=>{
        const {value} = this.selectNumber
        this.props.jia(value*1)
    }
    decrease=()=>{
        const {value} = this.selectNumber
        this.props.jian(value*1)
    }
    increaseIfOdd=()=>{
        const {value} = this.selectNumber
        if(this.props.count%2!==0){
            this.props.jia(value*1)
        }
    }
    increaseAsync=()=>{
        const {value} = this.selectNumber
        this.props.asyncJia(value*1,500)
    }
    render() {
        console.log('UI组件收到的Props是'+this.props)
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
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
