import React, { Component } from 'react'

export default class Count extends Component {
    state={count:0}
    increase=()=>{
        const {value} = this.selectNumber
        const {count} = this.state
        this.setState({count:count+value*1})
    }
    decrease=()=>{
        const {value} = this.selectNumber
        const {count} = this.state
        this.setState({count:count-value*1})
    }
    increaseIfOdd=()=>{
        const {value} = this.selectNumber
        const {count} = this.state
        if(count%2!==0){
            this.setState({count:count+value*1})
        }else{
            this.setState({count})
        }
    }
    increaseAsync=()=>{
        const {value} = this.selectNumber
        const {count} = this.state
        setTimeout(()=>{
            this.setState({count:count+value*1})
        },1000)
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
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
